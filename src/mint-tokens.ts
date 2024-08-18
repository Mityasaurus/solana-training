import "dotenv/config";
import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { mintTo } from "@solana/spl-token";
import { getExplorerLink } from "@solana-developers/helpers";

let privateKey = process.env["SECRET_KEY"];
if (privateKey === undefined) {
  console.log("Add SECRET_KEY to .env!");
  process.exit(1);
}
const asArray = Uint8Array.from(JSON.parse(privateKey));
const sender = Keypair.fromSecretKey(asArray);

const connection = new Connection(clusterApiUrl("devnet"));

const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2);

const tokenMintAccount = new PublicKey(
  "Fw9YMh5ywx8iWBRPvW3ej3YJcMSmYBE1LgjrJHnAn3PW"
);

const recipientAssociatedTokenAccount = new PublicKey(
  "2QL7cwHsQM3BHS9L3GJqZ4a5S3xSYEqYBL7WHAqHnt8U"
);

const transactionSignature = await mintTo(
  connection,
  sender,
  tokenMintAccount,
  recipientAssociatedTokenAccount,
  sender,
  9999 * MINOR_UNITS_PER_MAJOR_UNITS
);

const link = getExplorerLink("transaction", transactionSignature, "devnet");

console.log(`✅ Success! Mint Token Transaction: ${link}`);
