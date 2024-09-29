const { PeerServer } = require("peer");

const customGenerationFunction = () =>
	(Math.random().toString(36) + "0000000000000000000").substr(2, 8);

const peerServer = PeerServer({ port: 9000, path: "/myapp" , generateClientId: customGenerationFunction });