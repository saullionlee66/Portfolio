const moviePic =
	"https://lh3.googleusercontent.com/ghc270S5RBpvMbkIG1NdyFhUEU46ffDMY8Wr1pqvYZuqLU9b_3qXOL8RSEfqcNq3piElTWxdMaAts7YcrX8nLjHPIa55uj6mdCxw3uR9Tdz_ZbrSDs-fBLe3U8P5-QLgaqOsylxDMgg=w2400";

const booksystemPic = `https://lh3.googleusercontent.com/pRKJHKcjuouN2L2JBNRwkGxFxpqG_oMSMBF-ZPsxlpjx_FhQgFw5_nOFgeM3Y92neHdP246eLxmJs2yg8FLl2l2xj-N2TcSgeWUoB9S0cYwNuUDwQzJ41foL3dplBSL5asV1yM_3z6c=w2400`;

const todoPic =
	"https://lh3.googleusercontent.com/wTP4UJ8MfJ70X283RJ0833BbGzn3oTHLqdeMkxLKzQF2PDnF5n-QC3Ypp2GGuv0o4NeZp2cdrJ4NjJ4g0s06ABFV_O3ZPAUbEWMoijYYiubXTq7dZ8cxEMuxWEwSeNgmxNQdr4RfRRU=w2400";
export const projects = [
	{
		id: 1,
		name: "ToDo Application",
		pic: todoPic,
		description:
			"A responsive-designed Todo Application with add, update, toggle, and delete functions. Color mode can be one-click switched.",
		stack: ["React", "Redux Toolkit", "TypeScript", "Chakra-UI", "React-Icons"],
		url: "https://saullionlee66.github.io/React-Redux-ToolKit/",
		sourceURL: "https://github.com/saullionlee66/React-Redux-ToolKit",
	},
	{
		id: 2,
		name: "Movie Search Application",
		pic: moviePic,
		description: `Search movie name and display the results. Fetch data from a 3rd party API.
        Movies can be added to a Nomination List and saved.`,

		stack: [
			"React",
			"React Hooks(Context)",
			"Axios",
			"Bootstrap",
			"reactLocalStorage",
		],
		url: "https://saullionlee66.github.io/shoppies/",
		sourceURL: "https://github.com/saullionlee66/shoppies",
	},
	{
		id: 3,
		name: "Book System Application",
		pic: booksystemPic,
		description: `A React app with CRUD functions combined with Firebase Serverless Authentication and Registration.
		User can Create, Review, Update, and Delete book information. Use can signup and login, update/reset password via firebase service.`,

		stack: [
			"React",
			"React Hooks(Context)",
			"Axios",
			"Bootstrap",
			"material-UI",
			"MongoDB",
			"Node.js/Express",
			"react-cookies",
			"docker",
			"nginx",
		],
		url: "http://book.maptocanada.ca/",
		sourceURL: "https://github.com/saullionlee66/BookSystem",
	},
];

export default projects;
