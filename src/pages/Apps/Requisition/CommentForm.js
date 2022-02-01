import React, { useState, useEffect } from 'react';
import { Row, Col, FormGroup, Label, Button } from 'reactstrap';

import { AvForm, AvField } from 'availity-reactstrap-validation';

const defaultValue = {
  note: 'General',
};

const CommentForm = ({ closeModal, requestContent, updateRequest }) => {
  const [note, setNote] = useState('');
  const handleValidSubmit = (e, value) => {
    let clonedRequest = {...requestContent}
    clonedRequest.note=`${value.note} : ${note}`
    updateRequest(clonedRequest, requestContent._id)
    closeModal()
  };

  return (
    <React.Fragment>
      <AvForm onValidSubmit={handleValidSubmit} model={defaultValue}>
        <FormGroup>
          <AvField type="select" name="note" id="note" label="Note Type">
            <option>General</option>
            <option>Select 1</option>
            <option>Select 2</option>
            <option>Select 3</option>
            <option>Select 4</option>
          </AvField>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="note">Note</Label>
          <textarea
            className="form-control"
            onChange={(e) => setNote(e.target.value)}
            value={note}
            id="note"
            rows="5"
          ></textarea>
        </FormGroup>
        <div className="text-center mt-4">
          <Button
            color="warning"
            type="submit"
            className="mr-2 waves-effect waves-light"
          >
            Send
          </Button>
        </div>
      </AvForm>
    </React.Fragment>
  );
};

export default CommentForm;
