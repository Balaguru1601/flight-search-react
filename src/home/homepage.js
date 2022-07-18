import { Fragment } from "react";
import HeroSection from "./heroSection";
import classes from "./homepage.module.css";

const Home = (props) => {
	return (
		<Fragment>
			<div className={classes.homeBg}>
				<HeroSection></HeroSection>
				<div className={classes.triangle}></div>
				<section className={classes.formSection}>
					<img
						src="./assets/images/flight.gif"
						className={classes.flightGif}
						alt=""
					/>
				</section>
			</div>
		</Fragment>
	);
};

export default Home;
