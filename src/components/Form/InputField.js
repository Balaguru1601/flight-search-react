import classes from "./InputField.module.css";

const InputField = (props) => {
	const { properties: fieldProperties, validities } = props.fieldInfo;

	const inputClasses = validities.isInvalid
		? `${classes.inputField} ${classes.invalid}`
		: `${classes.inputField}`;

	return (
		<div>
			<label htmlFor={fieldProperties.id}>{validities.label}: </label>
			<input {...fieldProperties} className={inputClasses} />
		</div>
	);
};

export default InputField;
