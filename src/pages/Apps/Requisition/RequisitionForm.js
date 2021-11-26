import React, { useState, useEffect } from 'react';
import { Row, Col, FormGroup, Label, Button } from 'reactstrap';

import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';

//select
import Select from 'react-select';

let options = [];

const qTypeOptions = [
  { value: 'set', label: 'Set' },
  { value: 'pieces', label: 'Pieces' },
  { value: 'pack', label: 'Pack' },
  { value: 'bundle', label: 'bundle' },
];

const RequestForm = ({ editData, vendors, createRequest, closeModal }) => {
  const [editedData] = useState(editData);
  const [siLoading, setIsLoading] = useState(true);
  const [defaultValues, setDefaultField] = useState({
    item: '',
    cost: '',
    discount: '',
    quantity: '',
  });
  const [qType, setQType] = useState('set');
  const [userId, setUserID] = useState('');
  const [vendor, setvendor] = useState([{ value: 'TO', label: 'Dangote' }]);

  useEffect(() => {
    if (localStorage.getItem('authUser')) {
      const obj = JSON.parse(localStorage.getItem('authUser'));
      let id = obj?.id;
      setUserID(id);
    }
  }, []);

  useEffect(() => {
    vendors.map((vendor) => {
      const optionObj = {
        value: vendor.id,
        label: vendor.name,
      };
      options.push(optionObj);
    });
  }, []);

  useEffect(() => {
    if (editData !== null) {
      setDefaultField({
        item: editData.itemName,
        cost: editedData.totalPrice,
        discount: 0,
        quantity: editedData.quantity,
      });
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleValidSubmit = (event, values) => {
    const requestForm = {
      itemName: values.item,
      quantity: Number(values.quantity),
      unitPrice: Number(values.cost),
      discount: values.discount,
      description: 'description',
      totalPrice:
        Number(values.cost) * Number(values.quantity) - Number(values.discount),
      userId: userId,
      vendorId: vendor.value,
    };
    console.log(requestForm)
    // createRequest(requestForm);
    // closeModal();
  };

  const OnChangeSelectHandler = (value, field) => {
    if (field === 'qType') return setQType(value);
    setvendor(value);
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
                      // defaultValue={editedData !== null &&qTypeOptions[1]}
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
                      Vendor
                    </Label>
                    <Select
                      defaultValue={editedData !== null &&options[0]}
                      name="vendor"
                      onChange={(e) => OnChangeSelectHandler(e, 'vendor')}
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
                  color="warning"
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
