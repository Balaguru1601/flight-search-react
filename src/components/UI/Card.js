import classes from "./Card.module.css";

const Card = (props) => {
	return (
		<div className={classes.card}>
			<header className={classes.cardHeader}>
				<h3>{props.title}</h3>
			</header>
			<section></section>
			<footer></footer>
		</div>
	);
};

export default Card;
