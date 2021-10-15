import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';

//select
import Select from 'react-select';

const priorityOptions = [
  { value: '1', label: 'Low' },
  { value: '2', label: 'Moderate' },
  { value: '3', label: 'High' },
];

const recieverOptions = [
  { value: 'TO', label: 'Lekan' },
  { value: 'CF', label: 'Seun' },
  { value: 'NO', label: 'Baloguns' },
];

const statusOptions = [
  { value: 'pending', label: 'pending' },
  { value: 'in-progress', label: 'In-Progress' },
  { value: 'resolved', label: 'Resolved' },
];

const HelpDeskForm = () => {
  const [defaultValues, setDefaultField] = useState({
    title: '',
    desc: '',
    priority: '',
    receiver: '',
    status: '',
  });
  const [selectOption, setSelectOption] = useState({
    priority: '',
    receiver: '',
    status: '',
  });

  const OnChangeSelectHandler = (option, field) => {
    setSelectOption({
      ...selectOption,
      [field]: option.value,
    });
  };

  const handleValidSubmit = (event, values) => {
    alert('Help desk');
    console.log(values);
    console.log(selectOption);
  };

  return (
    <React.Fragment>
      <div>
        <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard">
          <AvForm onValidSubmit={handleValidSubmit} model={defaultValues}>
            <Row>
              <Col lg={12}>
                <FormGroup>
                  <Label htmlFor="title">Title</Label>
                  <AvField
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Title"
                    errorMessage="Field Required"
                    validate={{ required: { value: true } }}
                    className="form-control"
                  />
                </FormGroup>
              </Col>
              <Col lg={12}>
                <FormGroup>
                  <Label htmlFor="desc">Description</Label>
                  <AvInput
                    type="textarea"
                    name="desc"
                    row="5"
                    id="desc"
                    placeholder="How can i be of help today?"
                    errorMessage="Field Required"
                    validate={{ required: { value: true } }}
                    className="form-control"
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label htmlFor="priority" className="control-label">
                    Priority
                  </Label>
                  <Select
                    name="priority"
                    defaultValue={priorityOptions[0]}
                    onChange={(e) => OnChangeSelectHandler(e, 'priority')}
                    options={priorityOptions}
                    className="q-type select2-multiple"
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label htmlFor="receiver" className="control-label">
                    Receiver
                  </Label>
                  <Select
                    name="receiver"
                    defaultValue={recieverOptions[0]}
                    onChange={(e) => OnChangeSelectHandler(e, 'receiver')}
                    options={recieverOptions}
                    className="q-type select2-multiple"
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label htmlFor="status" className="control-label">
                    Status
                  </Label>
                  <Select
                    name="status"
                    defaultValue={statusOptions[0]}
                    onChange={(e) => OnChangeSelectHandler(e, 'status')}
                    options={statusOptions}
                    className="q-type select2-multiple"
                  />
                </FormGroup>
              </Col>
            </Row>

            <div className="text-center mt-4">
              <Button
                color="warning"
                type="submit"
                className="mr-2 waves-effect waves-light"
              >
                HELP NOW!
              </Button>
            </div>
          </AvForm>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HelpDeskForm;
