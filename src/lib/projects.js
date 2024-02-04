const projects = [
	{
		slug: 'sita',
		title: 'SITA ETHGlobal Paris 2023',
		description:
			'🌾 Tailored credit lines for farmers using real-time soil insights from IoT & satellite tech. Empowering growth, one harvest at a time. 🛰️🌱',
		links: { github: '', ethGlobal: '', devpost: '', youtube: '', news: '', website: '' },
		details: {
			Role: '[Leader]',
			Team: '[Member1, Member2, Member3]',
			Technologies:
				'Blockchain\nIot\nExpressJs\nReactJs\nSolidity\nTruffle\nWeb3.js\nNodeJs\nMongoDB\nExpressJs',
			Accomplishments:
				'🧞Worldcoin — Most Creative\n🤝 Polygon — 🥇 Best Public Good with Account Abstraction'
		},
		elaboration:
			"Inspired by the Indian goddess Sita, known for her association with fertility and prosperity, our platform, SITA, brings a fresh start to agricultural financing. Just as Sita linked different worlds, our platform connects the old with the new.\
			Building A Future on Hope and Prosperity: SITA combines traditional principles with cutting-edge technology to create a global network. This system allows farmers to get the funding they need based on the future productivity of their land, not their past.\
			From Ground to Space: Moving beyond traditional credit assessments, we've established a unique credit line based on real-time data from the farmers' fields. IoT devices and satellite data provide us with information to predict a farmer's potential income for the next season.\
			A Clear Vision of Trust: For lenders, SITA provides clear and detailed information. Tools and insights about a farmer's ability to repay loans and the historical productivity of their land, enable lenders to make informed decisions. They're not just providing funds; they're helping to build futures.\
			Drawing from the story of Sita and the benefits of modern technology, we combine tradition and innovation on a worldwide scale.\
			SITA, inspired by fertile soil. SITA, linking lenders' confidence and farmers' dreams. SITA, thriving on the mix of real-time data and lasting principles. #SITAFarmingRevolution.\
			Utilizing IoT, satellite data, and a broad perspective, we've planted our roots in the richest digital soil.",
		images: [],
		video: '',
		how: "Our project leverages advanced tools to benefit farmers. Using the ESP32 hardware, we extract real-time soil data, capturing metrics such as Nitrogen, Phosphorus, Potassium levels, as well as temperature and humidity.\
		To amplify our data collection, we integrate Chainlink, which fetches this soil data and complements it with information from satellites. By merging these data streams using Chainlink Functions, we can accurately assess the potential creditworthiness of a farmer using Distributed Oracles and bring the data on-chain.\
		For user convenience, we've integrated Biconomy Social login and Walletconnect. The added benefit of Biconomy's Paymaster feature ensures users aren't burdened with transaction costs, streamlining their experience on the platform.\
		We employ WorldCoin to ensure each farmer on our platform is a distinct user, and it also facilitates a transparent voting system, letting community opinions be heard.\
		Central to our platform's functionality is the ERC 6551 standard. This allows us to facilitate liquidity flow, distribute debt signifying tokens, and store crucial loan terms, among other benefits.\
		Central to our commitment to decentralization, we've chosen nft.storage to house our vital data. This platform offers robust, decentralized storage, ensuring that loan details and other vital records remain secure and easily accessible.\
		For reliability and security, all operations are facilitated through the Polygon Mumbai testnet."
	},
	{
		slug: 'project2',
		title: 'Project Two',
		description: 'Description of Project Two...'
	}
];

export default projects;
