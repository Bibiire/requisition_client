import React, { useState, useEffect } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// action
import { fetchRequisitionDetails } from '../../../store/actions';

const RequisitionDetail = ({
  previewContentId,
  fetchRequisitionDetails,
  requestDetails,
  loading,
}) => {
  useEffect(() => {
    fetchRequisitionDetails(previewContentId.id);
  }, []);
  
  return (
    <React.Fragment>
      {!loading && requestDetails !== null && (
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
                            <p className="mt-3">
                              {requestDetails?.description}
                            </p>
                          </Col>
                          <Col xl={6}>
                            <p> 20-05-2021 </p>
                            <div
                              className={`badge badge-soft-${
                                requestDetails.status === 'Pending'
                                  ? 'secondary'
                                  : requestDetails.status === 'rejected'
                                  ? 'danger'
                                  : 'success'
                              } font-size-12`}
                            >
                              {requestDetails.status}
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
                                  Unit Cost :{' '}
                                  {requestDetails.unitPrice.toLocaleString()}
                                </li>
                                <li>
                                  <i className="mdi mdi-circle-medium mr-1 align-middle"></i>{' '}
                                  Discount : 50000
                                </li>
                              </ul>
                              <div className="p-3 bg-light mb-4">
                                <h5 className="font-size-14 mb-0">
                                  Total Cost{' '}
                                  <span className="float-right ml-2">
                                    {requestDetails.totalPrice.toLocaleString()}
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
                          className="bg-light py-2 px-4"
                        >
                          Note:
                          <p> Reviewer note regarding the request if any...</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
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
