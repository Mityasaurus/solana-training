import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";
import { keypair } from "./load-keypair";
import { airdropIfRequired } from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"));
console.log(`⚡️ Connected to devnet`);

const publicKey = keypair.publicKey;
const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 The balance for the wallet at address ${publicKey} is: ${balanceInSOL}`
);

await airdropIfRequired(
  connection,
  publicKey,
  2.5 * LAMPORTS_PER_SOL,
  0.5 * LAMPORTS_PER_SOL
);
