import React, { useState, useEffect } from 'react';
import { Row, Col, FormGroup, Label, Button, Input } from 'reactstrap';

import { AvForm, AvField } from 'availity-reactstrap-validation';

const VendorForm = ({createVendor}) => {
  const handleValidSubmit = (event, values) => {
    const vendor = {
      name: values.name.trim(),
      phone_no: values.phone_no,
      location: values.address + values.state,
      bank_details: {
        bank_name: values.bank_name,
        acc_name: values.acc_name,
        acc_no: values.acc_no,
      },
    };
    createVendor(vendor)
  };
  return (
    <React.Fragment>
      <AvForm onValidSubmit={handleValidSubmit}>
        <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard">
          <Row>
            <Col lg={8}>
              <FormGroup>
                <Label htmlFor="name">Vendor name</Label>
                <AvField
                  id="name"
                  name="name"
                  type="text"
                  errorMessage="Field Required"
                  validate={{ required: { value: true } }}
                  className="form-control"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="phone_no">Phone No</Label>
                <AvField
                  id="phone_no"
                  name="phone_no"
                  type="number"
                  errorMessage="Field Required"
                  validate={{ required: { value: true } }}
                  className="form-control"
                />
              </FormGroup>
            </Col>

            <Label className="px-3 pb-0">Vendor's Address</Label>
            <Col xs={12}>
              <hr className="mt-0 pt-0" />
            </Col>

            {/* Address  */}
            <Col md={8}>
              <FormGroup>
                <Label htmlFor="address">Office Address</Label>
                <AvField
                  id="address"
                  name="address"
                  type="text"
                  errorMessage="Field Required"
                  validate={{ required: { value: true } }}
                  className="form-control"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="state">Local Gov./State</Label>
                <AvField
                  id="state"
                  name="state"
                  type="text"
                  errorMessage="Field Required"
                  validate={{ required: { value: true } }}
                  className="form-control"
                />
              </FormGroup>
            </Col>
            <Label className="px-3 pb-0">Bank Details</Label>
            <Col xs={12}>
              <hr className="mt-0 pt-0" />
            </Col>

            {/* Bank Details */}
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="bank_name">Bank Name</Label>
                <AvField
                  id="bank_name"
                  name="bank_name"
                  type="text"
                  errorMessage="Field Required"
                  validate={{ required: { value: true } }}
                  className="form-control"
                />
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Label htmlFor="acc_name">Acc_Name</Label>
                <AvField
                  id="acc_name"
                  name="acc_name"
                  type="text"
                  errorMessage="Field Required"
                  validate={{ required: { value: true } }}
                  className="form-control"
                />
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Label htmlFor="acc_no">Acc_No</Label>
                <AvField
                  id="acc_no"
                  name="acc_no"
                  type="number"
                  errorMessage="Field Required"
                  validate={{ required: { value: true } }}
                  className="form-control"
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
              Create Vendor
            </Button>
          </div>
        </div>
      </AvForm>
    </React.Fragment>
  );
};

export default VendorForm;
