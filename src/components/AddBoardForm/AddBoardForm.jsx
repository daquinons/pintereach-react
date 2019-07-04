import React from 'react';
import withLoading from '../../hoc/withLoading';
import { postBoard } from '../../state/reducers/boards';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const AddBoardForm = props => {
  const refTitleInput = React.createRef();

  const addBoard = async event => {
    event.preventDefault();
    props.setLoading(true);
    await postBoard(refTitleInput.current.value, props.userId);
    props.setLoading(false);
    props.onSuccess(props.userId);
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
          Add a new board
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={addBoard}>
        <Modal.Body>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Board title</Form.Label>
            <Form.Control
              ref={refTitleInput}
              type="text"
              placeholder="Enter title"
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

export default withLoading(AddBoardForm);
