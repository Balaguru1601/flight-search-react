import useInput from "../../Hooks/use-input";
import moment from "moment";
import InputField from "./InputField";

const SearchForm = (props) => {
	let formIsValid = false;

	const validateString = (value) => value.trim() !== "" ;
	const validateDate = (date) => moment(date, "DD-MM-YYYY", false).isValid();
    const validateNumber = (num) => num > 0;

	const formSubmitHandler = (event) => {
		formIsValid = true;
	};

	const fromField = useInput(
		{ type: "text", id: "fromField", label: "From" },
		validateString
	);

	const toField = useInput(
		{ type: "text", name: "toField", label: "To"},
		validateString
	);

	const startDate = useInput(
		{ type: "date", name: "startDate" , label: "Departure" },
		validateDate
	);

	const endDate = useInput(
		{ type: "date", name: "endDate", label: "Arrival" },
		validateDate
	);

	const budget = useInput(
		{ type: "number", name: "budget",label: "Budget($)" },
		validateNumber
	);

	return (
		<form action="" method="get">
			<InputField fieldInfo={fromField} />
			<InputField fieldInfo={toField} />
			<InputField fieldInfo={startDate} />
			<InputField fieldInfo={endDate} />
			<InputField fieldInfo={budget} />
		</form>
	);
};

export default SearchForm;
