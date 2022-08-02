import classes from "./ResultCard.module.css";

const ResultCard = (props) => {
	return (
		<div className={classes.card}>
			<div className={classes.cardHeader}>
				<h1 className={classes.cardHeading}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
			</div>
			<span className={classes.cardBody}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Deleniti, voluptatibus. Sapiente dignissimos nisi molestiae
					itaque eveniet quod iste tempora, delectus, impedit ducimus,
					aperiam totam sequi cupiditate pariatur non exercitationem
					esse.
				</p>
			</span>
			<div className={classes.cardFooter}>
				<h4 className={classes.footerContent}>Lorem ipsum dolor amet consectetur adip</h4>
			</div>
		</div>
	);
};

export default ResultCard;
