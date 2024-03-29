import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import swal from "sweetalert";

const DeleteUser = () => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  return (
    <>
      <button id="mybtn" type="button" onClick={handleShow}>
        <i class="fas fa-trash text-danger"></i>
      </button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Child Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure you want to delete this child details?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit">
            Yes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteUser;
