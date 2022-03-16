export const SIDEBAR_IDO_NAMESPACE = "IDOs";
export const SIDEBAR_STAKING_NAMESPACE = "Staking";
export const SIDEBAR_CALENDAR_NAMESPACE = "Calendar";
export const SIDEBAR_FARMING_NAMESPACE = "Farming";
export const sfundContractAddress = '0x477bC8d23c634C154061869478bce96BE6045D12';

export const contractList = [
  {
    lockDuration: 7,
    contractAddress: '0xb667c499b88ac66899e54e27ad830d423d9fba69',
  },
  {
    lockDuration: 14,
    contractAddress: '0x027fC3A49383D0E7Bd6b81ef6C7512aFD7d22a9e',
  },
  {
    lockDuration: 30,
    contractAddress: '0x8900475bf7ed42efcacf9ae8cfc24aa96098f776',
  },
  {
    lockDuration: 60,
    contractAddress: '0x66b8c1f8de0574e68366e8c4e47d0c8883a6ad0b',
  },
  {
    lockDuration: 90,
    contractAddress: '0x5745b7e077a76be7ba37208ff71d843347441576',
  },
]

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
