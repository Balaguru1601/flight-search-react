import useInput from "../../Hooks/use-input";
import moment from "moment";
import InputField from "./InputField";
import { Fragment, useState } from "react";
import { getAirportCodes, sendRequest } from "../../utils/APIUtilities";
import Modal from "../Modals/Modal";

import classes from "./SearchForm.module.css";

const SearchForm = (props) => {
	let formIsValid = false;
	const formData = {};

	const validateString = (value) => value.trim() !== "";
	const validateDate = (date, prev = moment()) =>
		moment(date).format("DD-MM-YYYY") >= prev.format("DD-MM-YYYY");

	const validateNumber = (num) => num > 0;
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState({ status: false, message: "" });

	const closeErrorModal = () => {
		setHasError((prev) => ({ status: false, message: "" }));
	};

	const resetForm = () => {
		fromField.validities.reset();
		toField.validities.reset();
		startDate.validities.reset();
		endDate.validities.reset();
		budget.validities.reset();
	};

	const formSubmitHandler = async (event) => {
		event.preventDefault();

		formIsValid =
			fromField.validities.isValid &&
			toField.validities.isValid &&
			startDate.validities.isValid &&
			endDate.validities.isValid &&
			budget.validities.isValid;

		if (!formIsValid) {
			fromField.properties.onBlur();
			toField.properties.onBlur();
			startDate.properties.onBlur();
			endDate.properties.onBlur();
			budget.properties.onBlur();
			return;
		}
		setIsLoading((prevState) => true);
		try {
			formData.fly_from = await getAirportCodes(
				fromField.properties.value
			);
			formData.fly_to = await getAirportCodes(toField.properties.value);

			if (!formData.fly_from && !formData.fly_to) {
				setIsLoading(false);
				resetForm();
				return setHasError({
					status: true,
					message: "Locations are invalid",
				});
			} else if (!formData.fly_from) {
				setIsLoading(false);
				resetForm();
				return setHasError({
					status: true,
					message: "Start location is invalid",
				});
			} else if (!formData.fly_to) {
				setIsLoading(false);
				resetForm();
				return setHasError({
					status: true,
					message: "Destination location is invalid",
				});
			}

			formData.date_from = moment(startDate.properties.value).format(
				"DD/MM/YYYY"
			);
			formData.date_to = moment(endDate.properties.value).format(
				"DD/MM/YYYY"
			);
			formData.price_to = budget.properties.value;

			const response = await sendRequest(formData);
			const resultData = response.data.data.filter(
				(item) => item.availability.seats
			);
			if (resultData.length === 0) {
				setIsLoading(false);
				resetForm();
				return setHasError({
					status: true,
					message: "No deals available",
				});
			}

			props.onFormSubmit(resultData);
		} catch (error) {
			setIsLoading(false);
			resetForm();
			return setHasError({
				status: true,
				message: "Start location is invalid",
			});
		}
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
		{ type: "date", name: "startDate", label: "Start date" },
		validateDate
	);

	const endDate = useInput(
		{
			type: "date",
			name: "endDate",
			label: "End date",
			prevDate: startDate.properties.value,
		},
		validateDate
	);

	const budget = useInput(
		{ type: "number", name: "budget", label: "Budget(₹)" },
		validateNumber
	);

	return (
		<Fragment>
			{hasError.status && (
				<div className={classes.errorModalOverlay}>
					<h4 className={classes.error}>{hasError.message}</h4>
					<button onClick={closeErrorModal}>X</button>
				</div>
			)}
			{!isLoading && (
				<form
					method="get"
					className={classes.inputForm}
					onSubmit={formSubmitHandler}
				>
					<InputField fieldInfo={fromField} key={1} />
					<InputField fieldInfo={toField} key={2} />
					<InputField fieldInfo={startDate} />
					<InputField fieldInfo={endDate} />
					<InputField fieldInfo={budget} />
					<button disabled={formIsValid}>Submit</button>
				</form>
			)}
			{isLoading && <Modal type="loader" />}
		</Fragment>
	);
};

export default SearchForm;
