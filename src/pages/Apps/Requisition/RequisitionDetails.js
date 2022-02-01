import React, { useState, useEffect } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import Moment from 'moment';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { LoadingCard } from '../../../components/Common/index';

// action
import { fetchRequisitionDetails } from '../../../store/actions';

const RequisitionDetail = ({
  previewContentId,
  fetchRequisitionDetails,
  requestDetails,
  loading,
}) => {
  useEffect(() => {
    fetchRequisitionDetails(previewContentId._id);
  }, []);

  return (
    <React.Fragment>
      {requestDetails !== null ? (
        <div>
          {' '}
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Row>
                    <Col xl={12}>
                      <div className="mt-4 mt-xl-3">
                        <Row>
                          <Col xl={6}>
                            <Link to="#" className="text-primary">
                              Item
                            </Link>
                            <h5 className="mt-1 mb-3 text-capitalize">
                              {requestDetails?.itemName}
                            </h5>
                            <hr className="my-4 text-left" />
                            <h5 className="font-size-14 text-primary">
                              Product Image
                            </h5>
                            {requestDetails?.imgUrl ? (
                              <Link
                                target={'_blank'}
                                to={{
                                  pathname: requestDetails?.imgUrl,
                                }}
                                className="text-primary"
                              >
                                Click To View Invoice
                              </Link>
                            ) : (
                              'No attached file'
                            )}
                          </Col>
                          <Col xl={6}>
                            <p className="pb-0 mb-0">
                              {' '}
                              {Moment(requestDetails.createdAt).format(
                                'l'
                              )}{' '}
                            </p>
                            <div
                              className={`badge badge-soft-${
                                requestDetails?.inputter?.status === false
                                  ? 'secondary'
                                  : requestDetails?.approve?.status === true
                                  ? 'success'
                                  : requestDetails?.inputter?.status === true &&
                                    (requestDetails?.verify?.status === false ||
                                      requestDetails?.authorize?.status ===
                                        false ||
                                      requestDetails?.approve?.status === false)
                                  ? 'danger'
                                  : 'warning'
                              } font-size-12`}
                            >
                              {requestDetails?.inputter?.status === false
                                ? 'Pending'
                                : requestDetails?.approve?.status === true
                                ? 'Approved'
                                : requestDetails?.inputter?.status === true &&
                                  (requestDetails?.verify?.status === false ||
                                    requestDetails?.authorize?.status ===
                                      false ||
                                    requestDetails?.approve?.status === false)
                                ? 'Rejected'
                                : 'On-going'}
                            </div>
                            <div className="product-color mt-3">
                              <Row>
                                <Col xs="auto">
                                  <div>
                                    <Link
                                      to="#"
                                      className={`${
                                        requestDetails?.inputter?.status ===
                                          true && 'active'
                                      }`}
                                    >
                                      <div className="product-color-item">
                                        <div className="avatar-xs">
                                          <span className="avatar-title bg-transparent text-body font-size-12">
                                            P
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                    <span className="d-block text-center font-size-12">
                                      {requestDetails.user.name}
                                    </span>
                                  </div>
                                </Col>
                                <Col xs="auto">
                                  <div>
                                    <Link
                                      to="#"
                                      className={`${
                                        requestDetails?.verify && 'active'
                                      }`}
                                    >
                                      <div className="product-color-item">
                                        <div className="avatar-xs">
                                          <span className="avatar-title bg-transparent text-body font-size-12">
                                            S
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                    <span className="d-block text-center font-size-12">
                                      {' '}
                                      {
                                        requestDetails.verify?.verifier?.name
                                      }{' '}
                                    </span>
                                  </div>
                                </Col>
                                <Col xs="auto">
                                  <div>
                                    <Link
                                      to="#"
                                      className={`${
                                        requestDetails?.authorize && 'active'
                                      }`}
                                    >
                                      <div className="product-color-item">
                                        <div className="avatar-xs">
                                          <span className="avatar-title bg-transparent text-body py-1 font-size-12">
                                            MD
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                    <span className="d-block text-center font-size-12">
                                      {
                                        requestDetails.authorize?.authorizer
                                          .name
                                      }
                                    </span>
                                  </div>
                                </Col>
                                <Col xs="auto">
                                  <div>
                                    <Link
                                      to="#"
                                      className={`${
                                        requestDetails?.approve && 'active'
                                      }`}
                                    >
                                      <div className="product-color-item">
                                        <div className="avatar-xs">
                                          <span className="avatar-title bg-transparent text-body font-size-12">
                                            GMD
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                    <span className="d-block text-center font-size-12">
                                      {requestDetails.approve?.approver?.name}
                                    </span>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                        <hr className="my-4" />

                        <Row>
                          <Col md={6}>
                            <div>
                              <h5 className="font-size-14">Specification :</h5>
                              <ul className="list-unstyled product-desc-list">
                                <li>
                                  <i className="mdi mdi-circle-medium mr-1 align-middle"></i>{' '}
                                  Quantity : {requestDetails.quantity}
                                </li>
                                <li>
                                  <i className="mdi mdi-circle-medium mr-1 align-middle"></i>{' '}
                                  Unit Cost : ₦
                                  {requestDetails?.unitPrice?.toLocaleString()}
                                </li>
                                <li>
                                  <i className="mdi mdi-circle-medium mr-1 align-middle"></i>{' '}
                                  Discount : ₦0:00
                                </li>
                              </ul>
                              <div className="p-3 bg-light mb-4">
                                <h5 className="font-size-14 mb-0">
                                  Total Cost{' '}
                                  <span className="float-right ml-2">
                                    ₦
                                    {requestDetails?.totalPrice?.toLocaleString()}
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>

                          <Col md={6}>
                            <h5 className="font-size-14">Vendors :</h5>
                            <ul className="list-unstyled product-desc-list">
                              <li>
                                <i className="mdi mdi-sync text-primary mr-1 align-middle font-size-16"></i>{' '}
                                JP Company Cement
                              </li>
                              <li>
                                <i className="mdi mdi-currency-usd-circle text-primary mr-1 align-middle font-size-16"></i>{' '}
                                Amadia Cement Nig.
                              </li>
                            </ul>
                          </Col>
                        </Row>
                        <div
                          style={{ minHeight: '100px' }}
                          className="bg-light py-2 px-2"
                        >
                          {requestDetails.comments.length !== 0 &&
                            requestDetails.comments.map((comment) => (
                              <div key={comment._id}>
                                <Card className="mb-2">
                                  <CardBody
                                    className={
                                      requestDetails.user.name !==
                                        comment.userId.name && 'text-right'
                                    }
                                  >
                                    <h5 className="text-capitalize font-size-14">
                                      {comment.userId.name}
                                    </h5>
                                    <p>
                                      {comment.value
                                        ? comment.value
                                        : 'No Comment'}
                                    </p>
                                  </CardBody>
                                </Card>
                              </div>
                            ))}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <LoadingCard />
      )}
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { requestDetails, loading, successMsg } = state.Requisition;
  return { requestDetails, loading, successMsg };
};

export default withRouter(
  connect(mapStatetoProps, {
    fetchRequisitionDetails,
  })(RequisitionDetail)
);
