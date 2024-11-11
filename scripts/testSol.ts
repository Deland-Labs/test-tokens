const { Connection, clusterApiUrl, PublicKey } = require('@solana/web3.js');

const testnetApiUrl = clusterApiUrl('testnet');
console.log('Testnet API URL:', testnetApiUrl);
const connection = new Connection(testnetApiUrl, 'confirmed');

const addressA = new PublicKey('3MVK2FjkdLpS3QKRDDT1thhvQKXC57pASrGqDpASMtH3');
const addressB = new PublicKey('EMtXdgJpEWmrkcK9snCYDB8QNR8j5mj9FbVVZBkfTckV');

async function getSignatures(address:any) {
  const signatures = await connection.getSignaturesForAddress(address, { limit: 10 });
  console.log(`Signatures for ${address.toBase58()}:`, signatures);
}

getSignatures(addressA);
getSignatures(addressB);

// curl https://api.testnet.solana.com \
//   -X POST \
//   -H "Content-Type: application/json" \
//   -d '{
//     "jsonrpc": "2.0",
//     "id": 1,
//     "method": "getSignaturesForAddress",
//     "params": [
//       "EMtXdgJpEWmrkcK9snCYDB8QNR8j5mj9FbVVZBkfTckV",
//       {
//         "limit": 10
//       }
//     ]
//   }'

