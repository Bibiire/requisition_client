import React, { useState, useEffect } from 'react';
import { Row, Col, FormGroup, Label, Button } from 'reactstrap';

import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';

//select
import Select from 'react-select';

const options = [
  { value: 'TO', label: 'Dangote' },
  { value: 'CF', label: 'Ikeja Pipeline' },
  { value: 'NO', label: 'Iwobi Wire Ng' },
];

const qTypeOptions = [
  { value: 'set', label: 'Set' },
  { value: 'pieces', label: 'Pieces' },
  { value: 'pack', label: 'Pack' },
  { value: 'bundle', label: 'bundle' },
];

const RequestForm = ({ editData }) => {
  const [editedData] = useState(editData);
  const [siLoading, setIsLoading] = useState(true);
  const [defaultValues, setDefaultField] = useState({
    item: '',
    cost: '',
    discount: '',
    quantity: '',
  });
  const [qType, setQType] = useState('set');
  const [vendors, setVendors] = useState([{ value: 'TO', label: 'Dangote' }]);

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
    console.log(values);
    console.log(qType);
    console.log(vendors);
  };

  const OnChangeSelectHandler = (value, field) => {
    if (field === 'qType') return setQType(value);
    setVendors(value);
  };
  return (
    <React.Fragment>
      <div>
        <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard">
          {!siLoading && (
            <AvForm onValidSubmit={handleValidSubmit} model={defaultValues}>
              <Row>
                <Col lg={8}>
                  <FormGroup>
                    <Label htmlFor="item">Item Name</Label>
                    <AvField
                      id="item"
                      name="item"
                      type="text"
                      errorMessage="Field Required"
                      validate={{ required: { value: true } }}
                      className="form-control"
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
                      onChange={(e) => OnChangeSelectHandler(e, 'qType')}
                      options={qTypeOptions}
                      className="q-type select2-multiple"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label htmlFor="Cost">Unit Cost</Label>
                    <AvField
                      id="cost"
                      name="cost"
                      type="number"
                      placeholder="Price in Naira"
                      errorMessage="Field Required"
                      validate={{ required: { value: true } }}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Label htmlFor="vendor" className="control-label">
                      Vendors
                    </Label>
                    <Select
                      defaultValue={[options[2], options[3]]}
                      isMulti
                      name="vendor"
                      onChange={(e) => OnChangeSelectHandler(e, 'vendors')}
                      options={options}
                      className="vendor select2-multiple"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <FormGroup>
                    <Label htmlFor="discount">Total Discount</Label>
                    <AvField
                      id="discount"
                      name="discount"
                      type="number"
                      placeholder="Total Discount"
                      errorMessage="Field Required"
                      validate={{ required: { value: true } }}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Label htmlFor="quantity">Quantity</Label>
                    <AvField
                      id="quantity"
                      name="quantity"
                      type="number"
                      errorMessage="Field Required"
                      validate={{ required: { value: true } }}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label htmlFor="note">Note</Label>
                <textarea
                  className="form-control"
                  id="note"
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
      </div>
    </React.Fragment>
  );
};

export default RequestForm;
