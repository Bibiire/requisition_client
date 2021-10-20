import React from 'react';
import {
  Col,
  Card,
  CardBody,
  Row,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
//Simple bar
import SimpleBar from 'simplebar-react';

import UserMedia from './UserMedia';

// Image Media
import { ComplainData } from './index';

const HelpDeskInfo = ({ showDetail }) => {
  return (
    <Card>
      <CardBody>
        <div>
          <Row className="categories-group-card">
            <Col md={6}>
              <div className="form-inline">
                <div className="search-box">
                  <div className="position-relative">
                    <Input
                      type="text"
                      className="form-control rounded border border-white"
                      placeholder="Search..."
                    />
                    <i className="mdi mdi-magnify search-icon"></i>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <SimpleBar style={{ maxHeight: '530px' }}>
            <Row className="no-gutters bg-light">
              {ComplainData.map((complain) => (
                <Col sm={12} className="p-2">
                  <div className="product-box" onClick={() => showDetail()}>
                    <div className="product-img">
                      <div
                        className={`product-ribbon badge badge-${
                          complain.status === 'in_progress'
                            ? 'warning'
                            : complain.status === 'pending'
                            ? 'danger'
                            : 'success'
                        }`}
                      >
                        {complain.status}
                      </div>
                      <div className="product-like">
                        <span>
                          <i className="far fa-comments"></i>
                          <span class="comment-badge badge badge-pill badge-success">
                            {complain.commentCount}
                          </span>
                        </span>
                        <span class="ml-3 float-sm-right font-size-12">
                          22 Jan
                        </span>
                      </div>
                    </div>
                    <UserMedia complainInfo={complain} />
                  </div>
                </Col>
              ))}
            </Row>
          </SimpleBar>

          {/* Help-desk pagination */}
          <Row className="mt-2">
            <Col sm={6}>
              <div>
                <p className="mb-sm-0 mt-2">
                  Page <span className="font-weight-bold">2</span> Of{' '}
                  <span className="font-weight-bold">113</span>
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <div className="float-sm-right">
                <Pagination className="pagination-rounded mb-sm-0">
                  <PaginationItem disabled>
                    <PaginationLink href="#">
                      <i className="mdi mdi-chevron-left"></i>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink hrefo="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      <i className="mdi mdi-chevron-right"></i>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </div>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>
  );
};

export default HelpDeskInfo;
