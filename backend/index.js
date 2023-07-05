const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: "https://crypto-matrix-nine.vercel.app",
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/getTokens", async (req, res) => {
  const { userAddress, chain } = req.query;

  try {
    Moralis.initialize(process.env.MORALIS_KEY);
    const tokens = await Moralis.Web3API.token.getWalletTokenBalances({
      chain: chain,
      address: userAddress,
    });

    const nfts = await Moralis.Web3API.nft.getWalletNFTs({
      chain: chain,
      address: userAddress,
      mediaItems: true,
    });

    const myNfts = nfts.result.map((e, i) => {
      if (
        e?.media?.media_collection?.high?.url &&
        !e.possible_spam &&
        e?.media?.category !== "video"
      ) {
        return e.media.media_collection.high.url;
      }
    });

    const balance = await Moralis.Web3API.account.getNativeBalance({
      chain: chain,
      address: userAddress,
    });

    const jsonResponse = {
      tokens: tokens.result,
      nfts: myNfts,
      balance: balance.balance / 10 ** 18,
    };

    return res.status(200).json(jsonResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = app;
