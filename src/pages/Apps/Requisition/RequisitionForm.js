import React, { useState, useEffect } from 'react';
import { Row, Col, FormGroup, Label, Button } from 'reactstrap';

import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';

import { connect } from 'react-redux';

//select
import Select from 'react-select';

import { fetchVendor, clearMsg } from '../../../store/actions';

const qTypeOptions = [
  { value: 'set', label: 'Set' },
  { value: 'pieces', label: 'Pieces' },
  { value: 'pack', label: 'Pack' },
  { value: 'bundle', label: 'bundle' },
];

const RequestForm = ({
  editData,
  vendors,
  successMsg,
  createRequest,
  closeModal,
  fetchVendor,
  clearMsg
}) => {
  const [editedData] = useState(editData);
  const [vendorOptions, setVendorOptions] = useState([]);
  const [siLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
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
    fetchVendor();
    clearMsg();
    if (localStorage.getItem(process.env.REACT_APP_USERSTORAGE)) {
      const obj = JSON.parse(
        localStorage.getItem(process.env.REACT_APP_USERSTORAGE)
      );
      let id = obj?.id;
      setUserID(id);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    vendors !== null &&
      vendors.map((vendor) => {
        const optionObj = {
          value: vendor.id,
          label: vendor.name,
        };
        vendorOptions.push(optionObj);
      });
    setVendorOptions(vendorOptions);
    setLoading(false);
    setVendorOptions(vendorOptions);
    setLoading(false);
  }, [vendors]);

  useEffect(() => {
    if (successMsg) {
      closeModal()
    } 
  }, [successMsg]);

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
  }, [])

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
    createRequest(requestForm);
    // closeModal();
  };

  const OnChangeSelectHandler = (value, field) => {
    if (field === 'qType') return setQType(value);
    setvendor(value);
  };

  return (
    <React.Fragment>
      <div>
        {successMsg && <p className="text-danger"> {successMsg} </p>}
        <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard">
          {vendors !== null ? (
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
                      // defaultValue={editedData !== null &&qTypevendorOptions[1]}
                      onChange={(e) => OnChangeSelectHandler(e, 'qType')}
                      vendorOptions={qTypeOptions}
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
                      isClearable
                      defaultValue={editedData !== null && vendorOptions[0]}
                      name="vendor"
                      onChange={(e) => OnChangeSelectHandler(e, 'vendor')}
                      options={vendorOptions}
                      isLoading={loading}
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
          ) : (
            <span> Loading Vendor data... </span>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { loading, successMsg } = state.Requisition;
  const { vendors } = state.Vendor;
  return { vendors, loading, successMsg };
};

export default connect(mapStatetoProps, {
  fetchVendor, clearMsg
})(RequestForm);
