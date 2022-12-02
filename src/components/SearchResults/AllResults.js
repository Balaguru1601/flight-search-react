import ResultCard from "./ResultCard";
import classes from "./ResultCard.module.css";

const AllResults = (props) => {
	// const { formData } = props;
	// console.log(formData);
	// const Cards = formData.map((item) => {
	// 	return <ResultCard data={item} key={item.id} />;
	// });
	return (
		<div className={classes.allCards}>
			<div className={classes.card2}>
				<div className={classes.cardContent1}>
					<span className={classes.dday}>Friday</span>
					<span className={classes.duration}>Duration: 1h 40min</span>
					<span className={classes.aday}>Friday</span>
					<span className={classes.dtime}>7:40 AM</span>
					<span className={classes.travelLine}>Line</span>
					<span className={classes.atime}>9:40 AM</span>

					<span className={classes.acode}>DEL</span>
					<span className={classes.travelType}>Direct</span>
					<span className={classes.dcode}>MAA</span>
				</div>
				<div className={classes.cardContent2}>
					<div className={classes.content4}>
						<span className={classes.Cost}>₹ 4000/PP</span>
						<span>View more</span>
					</div>
					<div className={classes.content5}>
						<span className={classes.availSeats}>
							Available seats
						</span>
						<span className={classes.seatNo}>5</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllResults;
