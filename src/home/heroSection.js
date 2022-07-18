import { Fragment } from "react";
import classes from "./heroSection.module.css";


const HeroSection = props => {
    return (
		<Fragment>
			<section className={classes.heroSection}>
				<img
					className={classes.cloud1}
					src="./assets/images/cloud.png"
					alt=""
				/>
				<h1 className={classes.heroHeading}>Flight Deals search</h1>
				<img
					className={classes.cloud2}
					src="./assets/images/cloud.png"
					alt=""
				/>
			</section>
		</Fragment>
	);
}

export default HeroSection;