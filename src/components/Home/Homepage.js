import { Fragment, useState } from "react";
import SearchForm from "../Form/SearchForm";
import AllResults from "../SearchResults/AllResults";
import HeroSection from "./HeroSection";
import classes from "./Homepage.module.css";

const Home = (props) => {
	const [formState, setFormState] = useState({
		isFormSubmitted: false,
		formData: [],
	});

	const onFormSubmit = (formData) => {
		setFormState((prevState) => {
			return {
				isFormSubmitted: true,
				formData: formData,
			};
		});
	};

	return (
		<Fragment>
			<div className={classes.homeBg}>
				<HeroSection></HeroSection>
				<div className={classes.triangle}>
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
					<AllResults formData={formState.formData} />
				)}
			</div>
		</Fragment>
	);
};

export default Home;
