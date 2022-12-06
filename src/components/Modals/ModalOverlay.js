import classes from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
	if (props.type === "loader")
		return (
			<div className={classes.loaderModalOverlay}>
				<div className={classes.loader}>
					<img src="./assets/images/loading.gif" alt="Loading..." />
				</div>
			</div>
		);
};

export default ModalOverlay;
