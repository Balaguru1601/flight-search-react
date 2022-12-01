import axios from "axios";
const url = "https://tequila-api.kiwi.com";

export const getAirportCodes = async (city) => {
	const response = await axios.get(url + "/locations/query", {
		headers: {
			apikey: process.env.REACT_APP_API_KEY,
		},
		params: { term: city, location_type: "city" },
	});
	return response.status === 200 ? response.data.locations[0].code : false;
};

export const sendRequest = async (data) => {
	const response = await axios.get(url + "/search", {
		headers: {
			apikey: process.env.REACT_APP_API_KEY,
		},
		params: { ...data, curr: "INR", max_stopovers: 1 },
	});
	return {
		success: response.status === 200,
		data: response.data || {},
	};
};
