import { Fragment } from "react";
import SearchForm from "../Form/SearchForm";
import ResultCard from "../SearchResults/ResultCard";
import HeroSection from "./HeroSection";
import classes from "./Homepage.module.css";

const Home = (props) => {
	return (
		<Fragment>
			<div className={classes.homeBg}>
				<HeroSection></HeroSection>
				<div className={classes.triangle}></div>
				<section className={classes.formSection}>
					{/* <img
						src="./assets/images/flight.gif"
						className={classes.flightGif}
						alt=""
                    /> */}
                    <SearchForm></SearchForm>
                </section>
                    <ResultCard></ResultCard>
			</div>
		</Fragment>
	);
};

export default Home;
