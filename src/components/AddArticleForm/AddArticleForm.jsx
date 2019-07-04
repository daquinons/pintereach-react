import React from 'react';
import withLoading from '../../hoc/withLoading';
import { postArticle } from '../../state/reducers/boards';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const AddArticleForm = props => {
  const refTitleInput = React.createRef();
  const refUrlInput = React.createRef();

  const addArticle = async event => {
    event.preventDefault();
    props.setLoading(true);
    await postArticle(
      refTitleInput.current.value,
      refUrlInput.current.value,
      props.boardId,
      props.userId
    );
    props.onSuccess(props.userId);
    props.setLoading(false);
    props.onHide();
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
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
          {props.isLoading ? (
            <Button variant="light" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              &nbsp;Loading...
            </Button>
          ) : (
            <Button variant="light" type="submit">
              Add
            </Button>
          )}
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default withLoading(AddArticleForm);
