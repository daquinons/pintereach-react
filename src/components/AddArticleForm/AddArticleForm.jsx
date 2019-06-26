import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddArticleForm = props => {
  const refTitleInput = React.createRef();
  const refUrlInput = React.createRef();

  const addArticle = event => {
    event.preventDefault();
    props.addArticle(
      refTitleInput.current.value,
      refUrlInput.current.value,
      props.boardId,
      props.userId
    );
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a new article
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={addArticle}>
        <Modal.Body>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Article title</Form.Label>
            <Form.Control
              ref={refTitleInput}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group controlId="formBasicUrl">
            <Form.Label>URL</Form.Label>
            <Form.Control
              ref={refUrlInput}
              type="url"
              placeholder="Enter the link to the article"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddArticleForm;
