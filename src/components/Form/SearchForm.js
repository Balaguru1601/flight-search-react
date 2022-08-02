import useInput from "../../Hooks/use-input";
import moment from "moment";
import InputField from "./InputField";
import axios from "axios";

const SearchForm = (props) => {
    const url = "https://tequila-api.kiwi.com";
	let formIsValid = false;
	const formData = {};

	const validateString = (value) => value.trim() !== "";
	const validateDate = (date) => moment(date, "DD-MM-YYYY", false).isValid();
    const validateNumber = (num) => num > 0;
    
    const getAirportCodes = async (city) => {
        const response = await axios.get(url + "/locations/query", {
			headers: {
				apikey: "4Ed5su60sZbQoJYiYl8W_SYbWCY6SICs",
			},
			params: { term: city, location_type: "city" },
        });
        console.log(response.data);
        return response.status === 200 ? response.data.locations[0].code : false;
    }

    const sendRequest = async (data) => {
        const response = await axios.get(url + "/search", {
			headers: {
				apikey: "4Ed5su60sZbQoJYiYl8W_SYbWCY6SICs",
			},
			params: { ...data, curr: "INR", max_stopovers : 1},
		});
        return {
            success: response.status === 200,
            data: response.data || {}
        };
    }

	const formSubmitHandler = async (event) => {
		event.preventDefault();

		formIsValid =
			fromField.validities.isValid &&
			toField.validities.isValid &&
			startDate.validities.isValid &&
			endDate.validities.isValid &&
			budget.validities.isValid;

		if (!formIsValid) return alert("Enter all the details!");

		formData.fly_from = await getAirportCodes(fromField.properties.value);
        formData.fly_to = await getAirportCodes(toField.properties.value);
        if (!formData.fly_from || !formData.fly_to)
            return alert("Enter valid destination cities!");
        console.log(formData.fly_from);
		formData.date_from = moment(startDate.properties.value).format(
			"DD/MM/YYYY"
		);
		formData.date_to = moment(endDate.properties.value).format(
			"DD/MM/YYYY"
		);
        formData.price_to = budget.properties.value;
        
        const result = await sendRequest(formData);
        console.log(result);
	};

	const fromField = useInput(
		{ type: "text", id: "fromField", label: "From" },
		validateString
	);

	const toField = useInput(
		{ type: "text", name: "toField", label: "To" },
		validateString
	);

	const startDate = useInput(
		{ type: "date", name: "startDate", label: "Departure" },
		validateDate
	);

	const endDate = useInput(
		{ type: "date", name: "endDate", label: "Arrival" },
		validateDate
	);

	const budget = useInput(
		{ type: "number", name: "budget", label: "Budget(₹)" },
		validateNumber
	);

	return (
		<form action="" method="get" onSubmit={formSubmitHandler}>
			<InputField fieldInfo={fromField} />
			<InputField fieldInfo={toField} />
			<InputField fieldInfo={startDate} />
			<InputField fieldInfo={endDate} />
            <InputField fieldInfo={budget} />
            <button disabled={formIsValid}>Submit</button>
		</form>
	);
};

export default SearchForm;
