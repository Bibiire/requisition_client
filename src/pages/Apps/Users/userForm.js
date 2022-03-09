import React, { useState, useEffect } from 'react';
import { Row, Col, FormGroup, Label, Button, Input } from 'reactstrap';

import { AvForm, AvField } from 'availity-reactstrap-validation';

const userForm = ({createUser, departments,}) => {
  const handleValidSubmit = (event, values) => {
    console.log(values);
    const user = {
      name: values.name.trim(),
      email: values.email,
      password: values.password,
    
        position: values.position,
        departmentId: values.departmentId,
        roles: values.roles,
      
    };
    console.log(departments);
    console.log(user);
    createUser(user)
  };
  return (
    <React.Fragment>
      <AvForm onValidSubmit={handleValidSubmit}>
        <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard">
          <Row>
            <Col lg={8}>
              <FormGroup>
                <Label htmlFor="name">Full Name</Label>
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
                <Label htmlFor="email">Email</Label>
                <AvField
                  id="email"
                  name="email"
                  type="email"
                  errorMessage="Field Required"
                  validate={{ required: { value: true } }}
                  className="form-control"
                />
              </FormGroup>
            </Col>

            {/* <Label className="px-3 pb-0">Vendor's Address</Label>
            <Col xs={12}>
              <hr className="mt-0 pt-0" />
            </Col> */}

            {/* Address  */}
            <Col md={8}>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <AvField
                  id="password"
                  name="password"
                  type="password"
                  errorMessage="Field Required"
                  validate={{ required: { value: true } }}
                  className="form-control"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                {/* <Label htmlFor="department">Department</Label> */}
                <AvField type="select" name="departmentId" label="Department" helpMessage="Please select the Department">
                {departments !== null ? (
                    <>
                      <option value="">Departments</option>{' '}
                      {departments.map((department) => (
                        <option key={department._id} value={department._id}>
                          {department.name}
                        </option>
                      ))}
                    </>
                  ) : (
                    'Loading...'
                  )}
                </AvField>
              </FormGroup>
            </Col>
            {/* <Label className="px-3 pb-0">Bank Details</Label>
            <Col xs={12}>
              <hr className="mt-0 pt-0" />
            </Col> */}

            {/* Bank Details */}
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="roles">Role</Label>
                <AvField
                  id="roles"
                  name="roles"
                  type="text"
                  errorMessage="Field Required"
                  validate={{ required: { value: true } }}
                  className="form-control"
                />
              </FormGroup>
            </Col>

            {/* <Col md={4}>
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
            </Col> */}
          </Row>
          <div className="text-center mt-4">
            <Button
              color="warning"
              type="submit"
              className="mr-2 waves-effect waves-light"
            >
              Create User
            </Button>
          </div>
        </div>
      </AvForm>
    </React.Fragment>
  );
};

export default userForm;
