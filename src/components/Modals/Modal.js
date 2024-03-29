import { Fragment } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
	return (
		<Fragment>
			{createPortal(
				<Backdrop />,
				document.getElementById("backdrop-root")
			)}
			{createPortal(
				<ModalOverlay {...props} />,
				document.getElementById("overlay-root")
			)}
		</Fragment>
	);
};

export default Modal;
