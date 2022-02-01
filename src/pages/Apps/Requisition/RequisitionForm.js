import React, { useState, useEffect } from 'react';
import { Row, Col, FormGroup, Label, Button, Input } from 'reactstrap';

import {
  AvForm,
  AvField,
  Form,
  AvRadioGroup,
  AvRadio,
} from 'availity-reactstrap-validation';
import ImageDropZone from './components/Dropzone';

import { connect } from 'react-redux';

//select
import { fetchVendor, clearMsg } from '../../../store/actions';

const RequestForm = ({
  editData = null,
  vendors,
  user,
  successMsg,
  createRequest,
  closeModal,
  fetchVendor,
  updateRequest,
  clearMsg,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [defaultValues, setDefaultField] = useState({
    item: '',
    cost: '',
    discount: '',
    quantity: '',
    vendor: '',
    directRequest: '',
  });
  const [note, setNote] = useState('');
  const [files, setImageFiles] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [toggleSwitch, setToggle] = useState(false);

  useEffect(() => {
    fetchVendor();
    clearMsg();
  }, []);

  useEffect(() => {
    if (successMsg) {
      closeModal();
    }
  }, [successMsg]);

  useEffect(() => {
    if (editData !== null) {
      setDefaultField({
        itemName: editData.itemName,
        unitPrice: editData.unitPrice,
        quantity: editData.quantity,
        discount: editData.discount,
        vendor: editData.vendor,
        directRequest: editData?.directRequest,
        ITRelated: editData.ITRelated === true ? 1 : 2,
      });
      setToggle(editData?.directRequest);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [vendors]);

  const handleValidSubmit = async (event, values) => {
    setDisabled(true);
    const IT_item = values.ITRelated === 1 ? true : false;
    let imgFile;
    if (files) {
      imgFile = await fetchImageUrl();
    }

    const requestForm = {
      itemName: values.itemName,
      quantity: Number(values.quantity),
      discount: values.discount,
      departmentalId: user.departmentId,
      ITRelated: IT_item,
      note: note,
      directRequest: toggleSwitch,
      imgUrl: imgFile,
      vendor: values.vendor,
    };

    if (values.unitPrice) {
      requestForm.unitPrice = Number(values.unitPrice);
      requestForm.totalPrice =
        Number(values.unitPrice) * Number(values.quantity) -
        Number(values.discount);
    }
    if (editData) {
      updateRequest(requestForm, editData._id);
    } else {
      createRequest(requestForm);
    }
    closeModal();
  };

  const fetchImageUrl = async () => {
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'lukhee');
    data.append('cloud_name', 'lukhee');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/look/image/upload',
      {
        method: 'post',
        body: data,
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        return data.url;
      })
      .catch((err) => {
        setDisabled(false);
        console.log(err);
      });
    return result;
  };

  const onNoteHandler = (event) => {
    setNote(event.target?.value);
  };

  const addImageHandler = (files) => {
    setImgError(false);
    setImageFiles(files);
  };

  const ImageErrorHandler = () => {
    setImgError(!imgError);
  };
  return (
    <React.Fragment>
      {user.departmentId === '61bc6545c0c5770d6f802616' &&
        user.roles.includes('verifier') && (
          <div className="custom-control custom-switch mb-2" dir="ltr">
            <Input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              defaultChecked={editData? editData.directRequest : toggleSwitch}
            />
            <Label
              className="custom-control-label"
              htmlFor="customSwitch1"
              onClick={(e) => {
                setToggle(!toggleSwitch);
              }}
            >
              Toggle this switch element
            </Label>
          </div>
        )}
      <div>
        <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard">
          {!isLoading && vendors !== null ? (
            <AvForm
              onValidSubmit={handleValidSubmit}
              model={editData ? defaultValues : null}
            >
              <Row>
                <Col lg={8}>
                  <FormGroup>
                    <Label htmlFor="itemName">Item Name</Label>
                    <AvField
                      id="itemName"
                      name="itemName"
                      type="text"
                      errorMessage="Field Required"
                      validate={{ required: { value: true } }}
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
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
              {!user.roles.includes('user') && (
                <>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label htmlFor="unitPrice">Unit Cost</Label>
                        <AvField
                          id="unitPrice"
                          name="unitPrice"
                          type="number"
                          placeholder="Price in Naira"
                          errorMessage="Field Required"
                          // validate={{ required: { value: true } }}
                          className="form-control"
                        />
                      </FormGroup>
                    </Col>

                    <Col lg={6}>
                      <FormGroup>
                        <Label htmlFor="discount">Total Discount</Label>
                        <AvField
                          id="discount"
                          name="discount"
                          type="number"
                          placeholder="Total Discount"
                          errorMessage="Field Required"
                          // validate={{ required: { value: true } }}
                          className="form-control"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </>
              )}
              <Row>
                <Col lg={6}>
                  <FormGroup>
                    <AvField
                      type="select"
                      name="vendor"
                      label="vendor"
                      required
                    >
                      {vendors.map((vendor) => (
                        <option key={vendor._id}>{vendor.name}</option>
                      ))}
                    </AvField>
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <Label htmlFor="ITRelated">IT Related?</Label>
                  <AvRadioGroup
                    inline
                    name="ITRelated"
                    required
                    className="my-1"
                  >
                    <AvRadio customInput label="Yes" value={1} />
                    <AvRadio customInput label="No" value={2} />
                  </AvRadioGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="card-title-desc mb-1">Upload product image</p>
                  <ImageDropZone
                    addImageHandler={addImageHandler}
                    ImageErrorHandler={ImageErrorHandler}
                  />
                  {imgError && (
                    <p className="text-danger"> Image size too large </p>
                  )}
                </Col>
              </Row>
              {user.roles.includes('user') && (
                <FormGroup>
                  <Label htmlFor="note">Note</Label>
                  <textarea
                    className="form-control"
                    onChange={(e) => onNoteHandler(e)}
                    value={note}
                    id="note"
                    rows="5"
                  ></textarea>
                </FormGroup>
              )}
              <div className="text-center mt-4">
                <Button
                  color="warning"
                  type="submit"
                  disabled={disabled}
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
  const { user } = state.Account;
  return { vendors, loading, successMsg, user };
};

export default connect(mapStatetoProps, {
  fetchVendor,
  clearMsg,
})(RequestForm);
