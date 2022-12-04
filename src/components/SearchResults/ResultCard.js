import moment from "moment";
import classes from "./ResultCard.module.css";

const ResultCard = (props) => {
	const { data } = props;
	const arrival = new Date(data.aTime * 1000);
	const departure = new Date(data.dTime * 1000);
	const arrivalDate = moment(arrival).format("DD-MM-YYYY");
	const departureDate = moment(departure).format("DD-MM-YYYY");
	const arrivalTime = moment(arrival).format("LT").split(" ")[0];
	const departureTime = moment(departure).format("LT").split(" ")[0];
	const arrivalDay = moment(arrival).format("dddd");
	const departureDay = moment(departure).format("dddd");
	const duration = data.fly_duration;
	const arrivalMeridian = moment(arrival).format("A");
	const departureMeridian = moment(departure).format("A");
	const noOfSeats = data.availability.seats;
	const arrivalCode = data.cityCodeTo;
	const departureCode = data.cityCodeFrom;
	const stopovers = data.route.length > 1 ? "Indirect" : "Direct";

	return (
		<div className={classes.card2}>
			<div className={classes.cardContent1}>
				<span className={classes.dday}>{departureDay}</span>
				<span className={classes.duration}>
					Duration: <span>{duration}</span>
				</span>
				<span className={classes.aday}>{arrivalDay}</span>
				<span className={classes.dtime}>
					{departureTime} <span> {departureMeridian}</span>
				</span>
				<span className={classes.travelLine}>
					<span className={classes.dottedLine}> </span>
					<span className={classes.startPoint}></span>
					<span className={classes.lineFlight}>
						<img
							src="/assets/images/airplane-take-off.png"
							alt="airplane-take-off"
						/>
					</span>
					<span className={classes.endPoint}></span>
				</span>
				<span className={classes.atime}>
					{arrivalTime} <span> {arrivalMeridian}</span>
				</span>

				<span className={classes.dcode}>{departureCode}</span>
				<span className={classes.travelType}>{stopovers}</span>
				<span className={classes.acode}>{arrivalCode}</span>
			</div>
			<div className={classes.cardContent2}>
				<span className={classes.cost}>
					₹ {data.price} <span>/PP</span>
				</span>
				<span className={classes.availSeats}>Available seats</span>
				<span className={classes.viewMore}>
					<a href={data.deep_link} target="_blank" rel="noreferrer">
						View More
					</a>
				</span>
				<span className={classes.seatNo}>{noOfSeats}</span>
			</div>
		</div>
	);
};

export default ResultCard;
