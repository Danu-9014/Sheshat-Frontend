import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import swal from "sweetalert";

const EditUser = () => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
  return (
    <>
      <button id="mybtn" type="button" onClick={handleShow}>
        <i class="fas fa-pencil-alt text-info"></i>
      </button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Child Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row justify-content-center">
              
            </div>
            <Col sm={10}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  User Id
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    type="text"
                    placeholder="Enter User Id "
                    // value={name}
                    // onChange={(e) => {
                    //   setName(e.target.value);
                    // }}
                    disabled
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Your Name
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    // value={address}
                    // onChange={(e) => {
                    //   setAddress(e.target.value);
                    // }}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Password
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    type="text"
                    placeholder="Enter Password"
                    // value={contact_number}
                    // onChange={(e) => {
                    //   setContactNumber(e.target.value);
                    // }}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  User Type
                </Form.Label>
                <Col sm="3">
                  <Form.Control
                    type="text"
                    placeholder="User Type"
                    // value={type_of_service}
                  />
                </Col>
                <Col sm={3}>
                  <select
                    className="Col-3"
                    aria-label="Default select example"
                    style={{ height: "35px", width: "200px" }}
                    // onChange={(e) => setTypeOfService(e.target.value)}
                  >
                    <option selected>Select User Type</option>
                    <option value="Self Drive">Reader</option>
                    <option value="With Driver">Author</option>
                  </select>
                </Col>
              </Form.Group>
            </Col>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit">
            Edit
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUser
