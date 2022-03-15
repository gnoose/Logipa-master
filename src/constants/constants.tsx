export const SIDEBAR_IDO_NAMESPACE = "IDOs";
export const SIDEBAR_STAKING_NAMESPACE = "Staking";
export const SIDEBAR_CALENDAR_NAMESPACE = "Calendar";
export const SIDEBAR_FARMING_NAMESPACE = "Farming";
export const stakingContractAddress = '0x027fC3A49383D0E7Bd6b81ef6C7512aFD7d22a9e';
export const sfundContractAddress = '0x477bC8d23c634C154061869478bce96BE6045D12';

const bscTestnetURI = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
const bscNetURI = 'https://bsc-dataseed1.defibit.io/';
export const NETWORKS = {
  56: {
    chainName: "Binance Smart Chain Mainnet",
    chainId: 56,
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed1.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com/"],
    imageAltText: "Avalanche Logo",
    network: "mainnet",
    uri: () => bscNetURI,
  },
  97: {
    chainName: "Binance Smart Chain Testnet",
    chainId: 97,
    nativeCurrency: {
      name: "TBNB",
      symbol: "TBNB",
      decimals: 18,
    },
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    blockExplorerUrls: ["https://testnet.bscscan.com/"],
    imageAltText: "Avalanche Logo",
    network: "testnet",
    uri: () => bscTestnetURI,
  },
};
