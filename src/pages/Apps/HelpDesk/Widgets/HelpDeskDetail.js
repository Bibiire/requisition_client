import React, { useState } from 'react';
import { Col, Card, CardBody, Row, Button, Input } from 'reactstrap';
//Simple bar
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';

import UserMedia from './UserMedia';

const complainDetails = {
  fullName: 'Hr',
  title: 'System Failure',
  content:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
  status: 'resolved',
  commentCount: 9,
  email: 'hr@nimco.com',
};

const HelpDeskDetail = ({ showDetail }) => {
  const [replyButton, SetReplyButton] = useState(false);
  return (
    <>
      <Card>
        <CardBody>
          <div>
            <Row className="categories-group-card">
              <Col md={6}>
                <Link
                  to="#"
                  onClick={() => showDetail()}
                  className={'categories-group-list pl-0'}
                >
                  <h6>
                    <i className="fas fa-angle-left font-size-18 align-middle mr-2"></i>{' '}
                    Server Down !!!
                  </h6>
                </Link>
              </Col>
            </Row>
            <SimpleBar style={{ maxHeight: '530px' }}>
              <Row className="no-gutters my-3 bg-light">
                <Col sm={12} className="p-2">
                  <div className="float-right">
                    <select className="custom-select custom-select-sm">
                      <option defaultValue>Status</option>
                      <option value="1">Pending</option>
                      <option value="2">In-Progress</option>
                      <option value="3">Resolved</option>
                    </select>
                  </div>
                  <div className="badge badge-success">Resolved</div>
                </Col>
                <Col sm={12} className="p-2">
                  <div className="product-box">
                    <div className="product-img">
                      <div>
                        <span class="ml-3 float-sm-right font-size-12">
                          22 Jan, 2021
                        </span>
                      </div>
                    </div>
                    <UserMedia complainInfo={complainDetails} detail={true} />
                  </div>
                  {/* Todo:  Please use reply.length to determine the button */}
                  {!replyButton && (
                    <Card className="mt-2 rounded">
                      <CardBody>
                        <h5 className="font-size-14">
                          Click here{' '}
                          <span
                            style={{ cursor: 'pointer' }}
                            className="text-primary"
                            onClick={() => SetReplyButton(true)}
                          >
                            Reply
                          </span>
                        </h5>
                      </CardBody>
                    </Card>
                  )}
                </Col>
              </Row>
            </SimpleBar>
          </div>
          {replyButton && (
            <div className="px-lg-3">
              <div className="p-3 chat-input-section ">
                <Row>
                  <Col>
                    <div className="position-relative">
                      <Input
                        type="text"
                        // value={this.state.curMessage}
                        // onChange={(e) => {
                        //   this.setState({ curMessage: e.target.value });
                        // }}
                        className="form-control chat-input"
                        placeholder="Enter Message..."
                      />
                    </div>
                  </Col>
                  <Col xs={{ size: 'auto' }}>
                    <Button
                      // onClick={this.addMessage}
                      type="submit"
                      color="primary"
                      className="chat-send w-md waves-effect waves-light"
                    >
                      <span className="d-none d-sm-inline-block mr-2">
                        Send
                      </span>{' '}
                      <i className="mdi mdi-send"></i>
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default HelpDeskDetail;
