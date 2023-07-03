const Ethereum = {
  hex: "0x1",
  name: "Ethereum",
  rpcUrl: "https://eth.llamarpc.com",
  ticker: "ETH",
};

const MumbaiTestnet = {
  hex: "0x13881",
  name: "Mumbai Testnet",
  rpcUrl: "https://rpc-mumbai.maticvigil.com/",
  ticker: "MATIC",
};

const Polygon = {
  hex: "0x89",
  name: "Polygon",
  rpcUrl: "https://polygon-rpc.com",
  ticker: "MATIC",
};

const Avalanche = {
  hex: "0xa86a",
  name: "Avalanche",
  rpcUrl: "https://avalanche.public-rpc.com",
  ticker: "AVAX",
};

export const CHAINS_CONFIG = {
  "0x1": Ethereum,
  "0x13881": MumbaiTestnet,
  "0x89": Polygon,
  "0xa86a": Avalanche,
};
