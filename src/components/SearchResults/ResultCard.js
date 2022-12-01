import classes from "./ResultCard.module.css";

const ResultCard = (props) => {
	const { data } = props;
	const arrivalDate = new Date(data.aTime * 1000)
		.toLocaleDateString("en-GB")
		.replaceAll("/", "-");
	const departureDate = new Date(data.dTime * 1000)
		.toLocaleDateString("en-GB")
		.replaceAll("/", "-");

	return (
		<div className={classes.card}>
			<div className={classes.cardHeader}>
				<h2 className={classes.cardHeading}>
					From: {data.cityFrom}({data.flyFrom})
				</h2>
				<h2 className={classes.cardHeading2}>
					To: {data.cityTo}({data.flyTo})
				</h2>
			</div>
			<div className={classes.cardBody}>
				<div className={classes.datesWrapper}>
					<span> Departure: {departureDate}</span>
					<span> Arrival: {arrivalDate}</span>
				</div>
				<div className={classes.descWrapper}>
					<span> Duration: {data.fly_duration}</span>
					<span>Cost: ₹ {data.price}</span>
					<span>Seats Available: {data.availability.seats}</span>
				</div>
				<span className={classes.seatsAvailable}>
					Seats availabile: {data.availability.seats}
				</span>
			</div>
			<div className={classes.cardFooter}>
				<a
					href={data.deep_link}
					target="_blank"
					rel="noreferrer"
					className={classes.bookBtn}
				>
					Book Now
				</a>
			</div>
		</div>
	);
};

export default ResultCard;
