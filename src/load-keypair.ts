import "dotenv/config";
import { Keypair } from "@solana/web3.js";

const asArray = Uint8Array.from(JSON.parse(process.env["SECRET_KEY"]!));

export const keypair = Keypair.fromSecretKey(asArray);

// console.log(`Public key: ${keypair.publicKey.toBase58()}`);
