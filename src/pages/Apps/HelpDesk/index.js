import React, { Component } from 'react';
import { Container, Card, CardBody, Row, Col, Button } from 'reactstrap';
//Simple bar
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

// Image Media
import { ComplainData, HelpDeskDetail, HelpDeskInfo } from './Widgets/index';

// ** Third Party Components
import classnames from 'classnames';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      openInfo: false,
      showDetail: false,
      breadcrumbItems: [
        { title: 'Help-Desk', link: '#' },
        { title: 'Help', link: '#' },
      ],
      inbox: true,
      sent: false,
      trash: false,
      status_all: true,
      pending: false,
      in_progress: false,
      resolved: false,
      priority_all: true,
      low: false,
      moderate: false,
      high: false,
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

            <Row className="help-desk-application">
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
                              inbox: !this.state.inbox,
                              sent: false,
                              trash: false,
                            })
                          }
                          className={
                            this.state.inbox
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
                            this.state.sent
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                          onClick={() =>
                            this.setState({
                              sent: !this.state.sent,
                              inbox: false,
                              trash: false,
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
                              trash: !this.state.baby,
                              inbox: false,
                              sent: false,
                            })
                          }
                          className={
                            this.state.trash
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                        >
                          <i className=" far fa-trash-alt font-size-16 align-middle mr-2"></i>{' '}
                          Trash
                        </Link>
                      </div>
                    </div>

                    {/* status */}
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
                              status_all: !this.state.status_all,
                              pending: false,
                              in_progress: false,
                              resolved: false,
                            })
                          }
                          className={
                            this.state.status_all
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
                            this.state.pending
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                          onClick={() =>
                            this.setState({
                              pending: !this.state.pending,
                              status_all: false,
                              in_progress: false,
                              resolved: false,
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
                              in_progress: !this.state.in_progress,
                              status_all: false,
                              pending: false,
                              resolved: false,
                            })
                          }
                          className={
                            this.state.in_progress
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
                              resolved: !this.state.resolved,
                              status_all: false,
                              pending: false,
                              in_progress: false,
                            })
                          }
                          className={
                            this.state.resolved
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                        >
                          <i className="fas fa-dot-circle text-success font-size-8 align-middle mr-2"></i>{' '}
                          Resolved
                        </Link>
                      </div>
                    </div>

                    {/* Priority */}
                    <div
                      id="accordion"
                      className="custom-accordion categories-accordion mb-5"
                    >
                      <p className="text-muted mb-2 px-2">Priority</p>
                      <div>
                        <Link
                          to="#"
                          onClick={() =>
                            this.setState({
                              priority_all: !this.state.priority_all,
                              low: false,
                              moderate: false,
                              high: false,
                            })
                          }
                          className={
                            this.state.priority_all
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
                            this.state.low
                              ? 'categories-group-list accordian-bg-products'
                              : 'categories-group-list'
                          }
                          onClick={() =>
                            this.setState({
                              low: !this.state.low,
                              priority_all: false,
                              moderate: false,
                              high: false,
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
                              moderate: !this.state.moderate,
                              priority_all: false,
                              low: false,
                              high: false,
                            })
                          }
                          className={
                            this.state.moderate
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
                              high: !this.state.high,
                              priority_all: false,
                              low: false,
                              moderate: false,
                            })
                          }
                          className={
                            this.state.high
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
                {/* Help-desk detail */}
                <div
                  className={classnames('help-desk-app-details', {
                    show: this.state.openInfo,
                  })}
                >
                  <HelpDeskDetail
                    showDetail={() =>
                      this.setState((prevState) => ({
                        openInfo: !prevState.openInfo,
                      }))
                    }
                  />
                </div>
                {/* Help-dsk info ending */}
                {!this.state.openInfo && (
                  <div
                    className={classnames('help-desk-app-info', {
                      show: this.state.openMail,
                    })}
                  >
                    <HelpDeskInfo
                      showDetail={() =>
                        this.setState((prevState) => ({
                          openInfo: !prevState.openInfo,
                        }))
                      }
                    />
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
