import React, { Component } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Collapse,
  CardHeader,
  Input,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

// RangeSlider
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

//Import Product Images
import product1 from '../../../assets/images/product/img-1.png';
import product2 from '../../../assets/images/product/img-2.png';
import product3 from '../../../assets/images/product/img-3.png';
import product4 from '../../../assets/images/product/img-4.png';
import product5 from '../../../assets/images/product/img-5.png';
import product6 from '../../../assets/images/product/img-6.png';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: 'Help-Desk', link: '#' },
        { title: 'Help', link: '#' },
      ],
      electronic: false,
      fashion: true,
      baby: false,
      fitness: false,
      discount: true,
      size: true,
      rating: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Help-Desk"
              breadcrumbItems={this.state.breadcrumbItems}
            />

            <Row>
              <Col xl={3} lg={4}>
                <Card>
                  <CardBody>
                    <div className="pb-4">
                      <Button
                        color="primary"
                        type="submit"
                        className="mr-2 waves-effect waves-light w-100"
                      >
                        Help Desk
                      </Button>
                    </div>

                    <div
                      id="accordion"
                      className="custom-accordion categories-accordion mb-5"
                    >
                      <div>
                        <Link
                          to="#"
                          onClick={() =>
                            this.setState({
                              electronic: !this.state.electronic,
                              fashion: false,
                              baby: false,
                              fitness: false,
                            })
                          }
                          className={
                            this.state.electronic
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                        >
                          <i className=" far fa-envelope font-size-16 align-middle mr-2"></i>{' '}
                          Indox
                          <span class="badge badge-pill badge-success float-right">
                            3
                          </span>
                        </Link>
                      </div>

                      <div>
                        <Link
                          to="#"
                          className={
                            this.state.fashion
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                          onClick={() =>
                            this.setState({
                              fashion: !this.state.fashion,
                              electronic: false,
                              baby: false,
                              fitness: false,
                            })
                          }
                        >
                          <i className=" far fa-paper-plane font-size-16 align-middle mr-2"></i>{' '}
                          Sent
                        </Link>
                      </div>

                      <div>
                        <Link
                          to="#"
                          onClick={() =>
                            this.setState({
                              baby: !this.state.baby,
                              fashion: false,
                              electronic: false,
                              fitness: false,
                            })
                          }
                          className={
                            this.state.baby
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                        >
                          <i className=" far fa-trash-alt font-size-16 align-middle mr-2"></i>{' '}
                          Trash
                        </Link>
                      </div>
                    </div>

                    {/* Priority */}
                    <div
                      id="accordion"
                      className="custom-accordion categories-accordion mb-5"
                    >
                      <p className="text-muted mb-2 px-2">Status</p>
                      <div>
                        <Link
                          to="#"
                          onClick={() =>
                            this.setState({
                              electronic: !this.state.electronic,
                              fashion: false,
                              baby: false,
                              fitness: false,
                            })
                          }
                          className={
                            this.state.electronic
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                        >
                          <i className="fas fa-dot-circle text-secondary font-size-16 align-middle mr-2"></i>{' '}
                          All
                        </Link>
                      </div>

                      <div>
                        <Link
                          to="#"
                          className={
                            this.state.fashion
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                          onClick={() =>
                            this.setState({
                              fashion: !this.state.fashion,
                              electronic: false,
                              baby: false,
                              fitness: false,
                            })
                          }
                        >
                          <i className=" fas fa-dot-circle text-danger font-size-8 align-middle mr-2"></i>{' '}
                          Pending
                        </Link>
                      </div>

                      <div>
                        <Link
                          to="#"
                          onClick={() =>
                            this.setState({
                              baby: !this.state.baby,
                              fashion: false,
                              electronic: false,
                              fitness: false,
                            })
                          }
                          className={
                            this.state.baby
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                        >
                          <i className="fas fa-dot-circle text-warning font-size-8 align-middle mr-2"></i>{' '}
                          In-Progress
                        </Link>
                      </div>

                      <div>
                        <Link
                          to="#"
                          onClick={() =>
                            this.setState({
                              baby: !this.state.baby,
                              fashion: false,
                              electronic: false,
                              fitness: false,
                            })
                          }
                          className={
                            this.state.baby
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                        >
                          <i className="fas fa-dot-circle text-success font-size-8 align-middle mr-2"></i>{' '}
                          Resolved
                        </Link>
                      </div>
                    </div>

                    {/* Status */}
                    <div
                      id="accordion"
                      className="custom-accordion categories-accordion mb-5"
                    >
                      <p className="text-muted mb-2 px-2">Priority</p>
                      <div>
                        <Link
                          to="#"
                          className={
                            this.state.fashion
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                          onClick={() =>
                            this.setState({
                              fashion: !this.state.fashion,
                              electronic: false,
                              baby: false,
                              fitness: false,
                            })
                          }
                        >
                          <i className=" fas fa-circle text-success font-size-8 align-middle mr-2"></i>{' '}
                          Low
                        </Link>
                      </div>

                      <div>
                        <Link
                          to="#"
                          onClick={() =>
                            this.setState({
                              baby: !this.state.baby,
                              fashion: false,
                              electronic: false,
                              fitness: false,
                            })
                          }
                          className={
                            this.state.baby
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                        >
                          <i className="fas fa-circle text-warning font-size-8 align-middle mr-2"></i>{' '}
                          Moderate
                        </Link>
                      </div>

                      <div>
                        <Link
                          to="#"
                          onClick={() =>
                            this.setState({
                              baby: !this.state.baby,
                              fashion: false,
                              electronic: false,
                              fitness: false,
                            })
                          }
                          className={
                            this.state.baby
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                        >
                          <i className="fas fa-circle text-danger font-size-8 align-middle mr-2"></i>{' '}
                          High
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={9}>
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
                      <Row className="no-gutters my-3 bg-light">
                        <Col xl={4} sm={6}>
                          <div className="product-box">
                            <div className="product-img">
                              <div className="product-ribbon badge badge-warning">
                                Trending
                              </div>
                              <div className="product-like">
                                <Link to="#">
                                  <i className="mdi mdi-heart-outline"></i>
                                </Link>
                              </div>
                              {/* <img
                                src={product1}
                                alt=""
                                className="img-fluid mx-auto d-block"
                              /> */}
                            </div>

                            <div className="text-center">
                              <p className="font-size-12 mb-1">
                                Blue color, T-shirt
                              </p>
                              <h5 className="font-size-15">
                                <Link to="#" className="text-dark">
                                  Full sleeve T-shirt
                                </Link>
                              </h5>

                              <h5 className="mt-3 mb-0">$240</h5>
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <Row className="mt-4">
                        <Col sm={6}>
                          <div>
                            <p className="mb-sm-0 mt-2">
                              Page <span className="font-weight-bold">2</span>{' '}
                              Of <span className="font-weight-bold">113</span>
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
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
