require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar proud hockey kitchen swift submit'; 
let testAccounts = [
"0x9c5d56c1f9a54c45d133c3fe4646dbdc9fef5a92deeb521123b6aecf4dbdaa58",
"0xca79343e5ea4d4521443ae7f24a065a1e3e7ef02da864d5d69af24738e1ced01",
"0x74c5a07cd0a8aaf15b9c74739f5e0b12cb6d1072ad8a8cb31540e31a661f6ef2",
"0x4cca63a18f75ff2696bff0cd5b841ebe0f5a64d6ce1d7ab69086cfab2c6d9b12",
"0x121c6de6e49db9e546e0eef7564306c77996e5b2ea358bcc54ec57cc872e70b6",
"0x11a8a67799cca7c41167732d4883d04e6be7e14a7d066053d2b13e68c4865dda",
"0x00df8cf5063ead7ad676a1b7438883ca5a0d777e7b32c35a93cebf8d93155b49",
"0x9dc86bbdd604ddb6378589edfbd14cb18ab8eb2a28d8fedbf86d65b18e022819",
"0x588da4dcfbcb98699eabb9ed5352670eedbfc83bcd723c6d58101e2ece4515b8",
"0xf8ce5400bbe68296a9548b7d0e4b35825fc0b043b2ac6be382afc0f1dc9165c5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


