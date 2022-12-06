import { Fragment, useState } from "react";
import SearchForm from "../Form/SearchForm";
import AllResults from "../SearchResults/AllResults";
import HeroSection from "./HeroSection";
import classes from "./Homepage.module.css";

const Home = (props) => {
	const [formState, setFormState] = useState({
		isFormSubmitted: false,
		searchData: [],
	});

	const onFormSubmit = (searchData) => {
		setFormState((prevState) => {
			return {
				isFormSubmitted: true,
				searchData: searchData,
			};
		});
	};

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
					{!formState.isFormSubmitted && (
						<SearchForm
							onFormSubmit={onFormSubmit}
							formState={formState}
						></SearchForm>
					)}
				</section>
			</div>
			{formState.isFormSubmitted && (
				<AllResults searchData={formState.searchData} />
			)}
		</Fragment>
	);
};

export default Home;
