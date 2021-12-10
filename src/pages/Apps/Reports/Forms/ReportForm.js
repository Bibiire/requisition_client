import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Button } from 'reactstrap';

import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';

//select
import Select from 'react-select';

const priorityOptions = [
  { value: 'TO', label: 'Dangote' },
  { value: 'CF', label: 'Ikeja Pipeline' },
  { value: 'NO', label: 'Iwobi Wire Ng' },
];

const assingnedToOptions = [
  { value: 'L', label: 'Balogun' },
  { value: 'b', label: 'Bibire' },
  { value: 's', label: 'Seun' },
];

const RequestForm = ({ editData }) => {
  const [editedData] = useState(editData);
  const [siLoading, setIsLoading] = useState(true);
  const [defaultValues, setDefaultField] = useState({
    title: '',
    cost: '',
    discount: '',
    quantity: '',
  });
  const [assignedTo, setAssignedTo] = useState('set');
  const [priority, setPriority] = useState([{ value: 'TO', label: 'Dangote' }]);

  useEffect(() => {
    if (editData !== null) {
      setDefaultField({
        item: 'bag or cement',
        cost: '1000',
        discount: '20',
        quantity: '2',
      });
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleValidSubmit = (event, values) => {
    // i am in
  };

  const OnChangeSelectHandler = (value, field) => {
    if (field === 'assignedTo') return setAssignedTo(value);
    setPriority(value);
  };
  return (
    <React.Fragment>
      {/* <div>
        <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard">
          {!siLoading && (
            <AvForm onValidSubmit={handleValidSubmit} model={defaultValues}>
              <Row>
                <Col lg={12}>
                  <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <AvField
                      id="title"
                      name="title"
                      type="text"
                      errorMessage="Field Required"
                      validate={{ required: { value: true } }}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label htmlFor="assignedTo" className="control-label">
                      Assign To:
                    </Label>
                    <Select
                      name="assignedTo"
                      defaultValue={assingnedToOptions[1]}
                      onChange={(e) =>
                        this.OnChangeSelectHandler(e, 'assignedTo')
                      }
                      options={assingnedToOptions}
                      className="assignedTo select2-multiple"
                    />
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup>
                    <Label htmlFor="q-type" className="control-label">
                      Priority
                    </Label>
                    <Select
                      name="q-type"
                      defaultValue={priorityOptions[1]}
                      onChange={(e) => OnChangeSelectHandler(e, 'priority')}
                      options={priorityOptions}
                      className="q-type select2-multiple"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="q-type" className="control-label">
                      Q-type
                    </Label>
                    <Select
                      name="q-type"
                      defaultValue={priorityOptions[1]}
                      onChange={(e) => OnChangeSelectHandler(e, 'qType')}
                      options={priorityOptions}
                      className="q-type select2-multiple"
                    />
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="q-type" className="control-label">
                      Q-type
                    </Label>
                    <Select
                      name="q-type"
                      defaultValue={qTypeOptions[1]}
                      onChange={(e) => this.OnChangeSelectHandler(e, 'qType')}
                      options={qTypeOptions}
                      className="q-type select2-multiple"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label htmlFor="desc">Description</Label>
                <textarea
                  className="form-control"
                  id="desc"
                  rows="5"
                ></textarea>
              </FormGroup>
              <div className="text-center mt-4">
                <Button
                  color="primary"
                  type="submit"
                  className="mr-2 waves-effect waves-light"
                >
                  Send Request
                </Button>
              </div>
            </AvForm>
          )}
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default RequestForm;
