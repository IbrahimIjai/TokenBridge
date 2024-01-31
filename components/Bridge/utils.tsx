const bsc = "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/bsc.jpg";
const polygon = "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/polygon.jpg";
const eth = "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg";

export const bridge_chains_data = [
  {
    chainName: "mainnet",
    id: 1,
    url: eth,
  },
  {
    chainName: "bsc",
    id: 56,
    url: bsc,
  },
  {
    chainName: "polyfgon",
    id: 137,
    url: polygon,
  },
];

export interface ImageMap {
  1: string;
  56: string;
  137: string;
}

export const image_map: ImageMap = {
  1: eth,
  56: bsc,
  137: polygon,
};

export const networkname_map: ImageMap = {
  1: "Ethereum Mainnet",
  56: "Binance Smart Chain",
  137: "Polgon",
};
