//  require("dotenv").config();
// const HDWalletProvider = require("@truffle/hdwallet-provider");

//to use bsc test net
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

//to use private key
// const yargs = require('yargs');
// var provider, address;
// //const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
// const privKeyrinkeby = "715436cfd4505b33340d7c99c16d89fa0b915a91a47ecc707c60ebf4070234d9"
// const PrivateKeyProvider = require("truffle-privatekey-provider");

// const HDWalletProvider = require('@truffle/hdwallet-provider');

// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  //  networks: {
  //   development: {
  //    host: "127.0.0.1",     // Localhost (default: none)
  //    port: 8545,            // Standard Ethereum port (default: none)
  //    network_id: "*",       // Any network (default: none)
  //   },
  //   ropsten: {
  //     provider: () =>
  //       new HDWalletProvider(
  //         process.env.MNEMONIC,
  //         `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`
  //       ),
  //     network_id: 3, // Ropsten's id
  //     gas: 5500000, // Ropsten has a lower block limit than mainnet
  //     confirmations: 2, // # of confs to wait between deployments. (default: 0)
  //     timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
  //     skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
  //   }

  //for bsc test net 
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    testnet: {
      networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 400,
      skipDryRun: true
    },
    bsc: {
      networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      //gas: 5500000,
      //from: "0x7bA9a42bcB796cEF1e8cA72F29642594D9274279",
      confirmations: 10,
      timeoutBlocks: 400,
      skipDryRun: true
    },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websocket: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
    // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    // network_id: 3,       // Ropsten's id
    // gas: 5500000,        // Ropsten has a lower block limit than mainnet
    // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.7.3",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};
