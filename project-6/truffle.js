require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
	networks: {
		development: {
			host: '127.0.0.1',
			port: 8545,
			network_id: '*',
		},
		rinkeby: {
			provider: () =>
				new HDWalletProvider(
					process.env.SECRET_PHRASE,
					process.env.NETWORK_ENDPOINTS
				),
			gas: 5000000,
			gasPrice: 1000000000,
			network_id: '*',
		},
	},

	mocha: {
		timeout: 100000,
	},

	compilers: {
		solc: {
			version: '^0.8.0',
		},
	},
};
