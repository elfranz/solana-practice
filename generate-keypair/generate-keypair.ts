import { Keypair } from "@solana/web3.js";

// generates keypair object with function from web3 package
const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());

console.log(`The secret key is: `, keypair.secretKey);

console.log(`✅ Generated keypair!`)