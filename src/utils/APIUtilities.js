import axios from "axios";
const url = "https://tequila-api.kiwi.com";

export const getAirportCodes = async (city) => {
	const response = await axios.get(url + "/locations/query", {
		headers: {
			apikey: process.env.REACT_APP_API_KEY,
		},
		params: { term: city, location_type: "city" },
	});

	if (response.data.locations[0].code === null) {
		console.log(response.data.locations[0].alternative_departure_points);
		let min =
			response.data.locations[0].alternative_departure_points[0].distance;
		let min_item = {};
		for (const departures of response.data.locations[0]
			.alternative_departure_points) {
			if (departures.distance < min) {
				min = departures.distance;
				min_item = departures;
			}
		}
		return response.status === 200 ? min_item.id : false;
	}
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
