require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space strong response predict cluster gown light army gentle'; 
let testAccounts = [
"0x6fd0626266c4bda741df52a50ae8a89ba93c0821debe7e0ba58419bba7fd4a3f",
"0x4d3355b07125fe4d461c8b95521fdceea66885f36331b34e4f15c0e612217ced",
"0x23027fa0b58f3f7bf0e38a71e8687e5cda796a7ca263739a5730a44d892597e2",
"0xe5d66fb8f307bf64683a0adb49bcb1f3f87b3b4a5db49f581032c6e6fe0b678a",
"0x363157db819ae8758fef22f544d072477117e42f5b1a5088937764f6bab8df4c",
"0xabd79a67b6c3111d50d729b04713a013a8e9a30ada535a1caca739de49f55f42",
"0x7da9dedc3c977653eb31cc95f8a48a4fb4e2eed3632072dba74b877e9b0764f9",
"0xa1b21aea89af076d6982e90eb0f1feceef31f37fe87eb6b5751108089b690c64",
"0x3b73bfa8492ae3fc9927341fd024edc3dfb58a63ffca8442b726eb604e9facf0",
"0x67610e649a0eacacbb1df8e6ae06f3268823b532d71f080f2a2f6cae911ea30f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

