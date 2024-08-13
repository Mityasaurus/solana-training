import "dotenv/config";
import { Keypair } from "@solana/web3.js";

export const keypair = Keypair.generate();

// console.log(`Public key: ${keypair.publicKey.toBase58()}`);
// console.log(`Private key: ${keypair.secretKey}`);
