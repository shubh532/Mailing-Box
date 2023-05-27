import Modal from "react-bootstrap/esm/Modal";
import MailPage from "../MainPages/MailPage";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        fullscreen={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
            Compose Your Mail
        </Modal.Header>
        <Modal.Body >
         <MailPage/>
        </Modal.Body>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;