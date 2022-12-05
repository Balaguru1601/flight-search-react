import moment from "moment/moment";
import { useState } from "react";

const useInput = (
	descriptors = { type: "", name: "", label: "" },
	validationFunction
) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [inpWasTouched, setInpwasTouched] = useState(false);

	const valueIsValid =
		descriptors.type === "date" && descriptors.prevDate
			? validationFunction(enteredValue, moment(descriptors.prevDate))
			: validationFunction(enteredValue);
	const valueIsInvalid = inpWasTouched && !valueIsValid;

	const updateValue = (event) => {
		setEnteredValue((prevState) => event.target.value);
	};

	const inputBlurHandler = () => {
		setInpwasTouched((prevState) => true);
	};

	const resetInput = () => {
		setEnteredValue((prevState) => "");
		setInpwasTouched((prevState) => false);
	};

	return {
		properties: {
			name: descriptors.name,
			type: descriptors.type,
			id: descriptors.name,
			value: enteredValue,
			onChange: updateValue,
			onBlur: inputBlurHandler,
		},
		validities: {
			isInvalid: valueIsInvalid,
			isValid: valueIsValid,
			reset: resetInput,
			label: descriptors.label,
		},
	};
};

export default useInput;
