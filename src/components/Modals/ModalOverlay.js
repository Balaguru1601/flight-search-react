import classes from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
	return (
		<div className={classes.modalOverlay}>
			<div className={classes.loader}>
				<img src="./assets/images/loading.gif" alt="Loading..." />
			</div>
		</div>
	);
};

export default ModalOverlay;
