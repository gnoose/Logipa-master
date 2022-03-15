import React, { createContext, ReactNode, useCallback, useMemo, useState } from 'react';
import Web3Modal from 'web3modal';
import { JsonRpcProvider, StaticJsonRpcProvider, Web3Provider } from '@ethersproject/providers';

import { NETWORKS } from '../constants/constants';

const defaultContextValue = {
  connected: false,
  wallet: "",
  lang: 'en',
  provider: new StaticJsonRpcProvider('https://bsc-dataseed1.defibit.io/'),
  updateWallet: (account: any) => {},
  connect: () => {},
  disconnect: () => {},
};

export const AppContext = createContext(defaultContextValue);

type Props = {
  children: ReactNode;
}

/**
 * determine if in IFrame for Ledger Live
 */
const isIframe = () => {
  return window.location !== window.parent.location;
};

const providerOptions: any = {
  walletconnect: {
    options: {
      rpc: {
        56: NETWORKS['56'].uri(),
        97: NETWORKS['97'].uri()
      }
    }
  }
};

/**
 * this is a static mainnet only RPC Provider
 * should be used when querying AppSlice from other chains
 * because we don't need tvl, apy, marketcap, supply, treasuryMarketVal for anything but mainnet
 * @returns StaticJsonRpcProvider for querying
 */
const getMainnetStaticProvider = () => {
  return new StaticJsonRpcProvider(NETWORKS['56'].uri());
};

const initModal = new Web3Modal({
  network: NETWORKS['56'].network,
  cacheProvider: true,
  providerOptions,
});

export function AppProvider({ children }: Props) {
  // let gProvider: any = null;

  const [wallet, setWallet] = useState("");
  const [lang, setLang] = useState("");
  const updateWallet = (account: any) => {
    setWallet(account);
  };

  //--------------------------
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState<JsonRpcProvider>(getMainnetStaticProvider);
  const [web3Modal, setWeb3Modal] = useState<Web3Modal>(initModal);
  const [chainChanged, setChainChanged] = useState(true);

  const hasCachedProvider = (): boolean => {
    if (!web3Modal) return false;
    if (!web3Modal.cachedProvider) return false;
    return true;
  };

  const onChainChangeComplete = () => {
    setChainChanged(false);
  };

  // NOTE (appleseed): none of these listeners are needed for Backend API Providers
  // ... so I changed these listeners so that they only apply to walletProviders, eliminating
  // ... polling to the backend providers for network changes
  const _initListeners = useCallback(
    rawProvider => {
      if (!rawProvider.on) {
        return;
      }
      rawProvider.on("accountsChanged", async (accounts: string[]) => {
        setTimeout(() => window.location.reload(), 1);
      });

      rawProvider.on("chainChanged", async () => {
        setChainChanged(true);
        // setTimeout(() => window.location.reload(), 1);
      });

      rawProvider.on("networkChanged", async () => {
        setChainChanged(true);
      });
    },
    [provider],
  );
  const connect = useCallback(async () => {

    // handling Ledger Live;
    let rawProvider;
    rawProvider = await web3Modal.connect();

    // new _initListeners implementation matches Web3Modal Docs
    // ... see here: https://github.com/Web3Modal/web3modal/blob/2ff929d0e99df5edf6bb9e88cff338ba6d8a3991/example/src/App.tsx#L185
    _initListeners(rawProvider);

    const connectedProvider = new Web3Provider(rawProvider, "any");
    setProvider(connectedProvider);


    const connectedAddress = await connectedProvider.getSigner().getAddress();
     // alert(connectedAddress)
    // Save everything after we've validated the right network.
    // Eventually we'll be fine without doing network validations.
    setWallet(connectedAddress);
    setConnected(true);
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    // const {data} = await axios.post('/check',  connectedAddress, config);
    // alert(data.message)


    // Keep this at the bottom of the method, to ensure any repaints have the data we need

    return connectedProvider;
  }, [provider, connected, web3Modal]);

  const disconnect = useCallback(async () => {
    web3Modal.clearCachedProvider();
    setConnected(false);

    setTimeout(() => {
      window.location.reload();
    }, 1);
  }, [provider, web3Modal, connected]);

  const value = useMemo(() => ({
    connected,
    wallet,
    lang,
    provider,
    updateWallet,
    connect,
    disconnect
  }), [
    connected,
    wallet,
    lang,
    provider,
    updateWallet,
    connect,
    disconnect
  ]);

  return(<>
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  </>)
}

