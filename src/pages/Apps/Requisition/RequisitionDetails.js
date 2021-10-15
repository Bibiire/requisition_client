import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const RequisitionDetail = () => {
  return (
    <React.Fragment>
      <div>
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
                          <h5 className="mt-1 mb-3">Bag of Cements</h5>
                          <p className="mt-3">
                            This request was approved by your supervisor
                          </p>
                        </Col>
                        <Col xl={6}>
                          <p> 20-05-2021 </p>
                          <div className="badge badge-soft-success font-size-12">
                            Resolved
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
                                Quantity : 100
                              </li>
                              <li>
                                <i className="mdi mdi-circle-medium mr-1 align-middle"></i>{' '}
                                Unit Cost : 2000
                              </li>
                              <li>
                                <i className="mdi mdi-circle-medium mr-1 align-middle"></i>{' '}
                                Discount : 50000
                              </li>
                              <li>
                                <i className="mdi mdi-circle-medium mr-1 align-middle"></i>{' '}
                                Total Cost : 3000000
                              </li>
                            </ul>
                            <div className="p-3 bg-light mb-4">
                              <h5 className="font-size-14 mb-0">
                                Total Cost{' '}
                                <span className="float-right ml-2">
                                  100,000,000
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
    </React.Fragment>
  );
};

export default RequisitionDetail;
