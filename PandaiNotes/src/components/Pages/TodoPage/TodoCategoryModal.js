import { React, useState, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { AiOutlinePlusCircle, AiOutlineEdit } from "react-icons/ai";

function TodoCategoryModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cardTitle = useRef();
  const cardColor = useRef();

  const addTodoCategoryHandler = () => {
    console.log("Adding a category in TodoCategoryModal");
    props.onAddTodoCategory({
      id: props.useCase === "ADD" ? Math.random() : props.category_id,
      title: cardTitle.current.value,
      color: cardColor.current.value,
    });

    handleClose();
  };

  const icon =
    props.useCase === "ADD" ? <AiOutlinePlusCircle /> : <AiOutlineEdit />;
  const cardUseTitle =
    props.useCase === "ADD" ? "Add New Card..." : "Edit Card";
  const defaultTitle = "";
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {icon}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cardUseTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                placeholder="Enter a title here"
                defaultValue={defaultTitle}
                ref={cardTitle}
              />
              <div className="d-flex">
                <Form.Label className="m-2">
                  Pick a color for your card...
                </Form.Label>
                <Form.Control type="color" ref={cardColor} />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addTodoCategoryHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoCategoryModal;
