import ResultCard from "./ResultCard";
import classes from "./ResultCard.module.css";

const AllResults = (props) => {
	const { formData } = props;
	const Cards = formData.map((item) => {
		return <ResultCard data={item} key={item.id} />;
	});
	return <div className={classes.allCards}> {Cards}</div>;
};

export default AllResults;
