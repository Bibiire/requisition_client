import React, { Component } from 'react';
import {
  Collapse,
  Card,
  Row,
  Col,
  CardBody,
  CardHeader,
  Button,
  Table,
} from 'reactstrap';
import RequestPdfPrint from './RequestPdfPrint';

import { Link } from 'react-router-dom';

import { BasicTable } from '../components/index';

class RequisitionAccordions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PdfPreview: false,
      contents: [
        {
          id: 1,
          title: 'title 1',
          body: 'body 1',
        },
        {
          id: 2,
          title: 'title 2',
          body: 'body 2',
        },
        {
          id: 3,
          title: 'title 3',
          body: 'body 3',
        },
      ],
      activeTab: null,
    };
    this.changeTab = this.changeTab.bind(this);
    this.sumAccount = this.sumAccount.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.totalQty = this.totalQty.bind(this);
  }

  changeTab(id) {
    if (id === this.state.activeTab) {
      this.setState({
        activeTab: null,
      });
      return;
    }
    this.setState({
      activeTab: id,
    });
  }

  sumAccount(data, field) {
    let result = 0;
    data.forEach((element) => {
      if (element[field]) {
        result = result + element[field];
      }
    });
    if (isNaN(result)) return '0.00';
    return result;
  }

  getTotal(arrData, field) {
    let result = 0;
    let clonedData = Object.values(arrData); //?
    clonedData.forEach((val) =>
      val.forEach((element) => {
        result = result + element[field];
      })
    );
    if (isNaN(result)) return '0.00';
    return result;
  }

  totalQty() {
    let qty = 0;

    let dataKey = Object.keys(this.props.reviewData);
    dataKey.forEach((val) => {
      qty += this.props.reviewData[val].length;
    });

    return qty;
  }

  render() {
    console.log(this.props.reviewData);
    return (
      <React.Fragment>
        {Object.keys(this.props.reviewData).length !== 0 ? (
          <>
            {!this.state.PdfPreview ? (
              <>
                <div id="accordion" className="mb-1">
                  <Card className="mb-0">
                    <CardHeader
                      id="headingThree"
                      className="bg-warning text-white"
                    >
                      <Row>
                        <Col>
                          <h6 className="m-0 font-14">Department</h6>
                        </Col>
                        <Col>
                          <h6 className="m-0 font-14">Supervisor</h6>
                        </Col>
                        <Col>
                          <h6 className="m-0 font-14">Discount</h6>
                        </Col>
                        <Col>
                          <h6 className="m-0 font-14">Total</h6>
                        </Col>
                        <Col>
                          <h6 className="m-0 font-14">Qty</h6>
                        </Col>
                        <Col>
                          <h6 className="m-0 font-14">
                            <span className="float-right">More</span>
                          </h6>
                        </Col>
                      </Row>
                    </CardHeader>
                  </Card>
                </div>
                {Object.keys(this.props.reviewData).map((content) => (
                  <div id="accordion" key={content} className="mb-1">
                    <Card className="mb-0">
                      <Link
                        to="#"
                        onClick={() => this.changeTab(content)}
                        style={{ cursor: 'pointer' }}
                        className="text-dark"
                      >
                        <CardHeader id="headingThree">
                          <Row>
                            <Col>
                              <h6 className="m-0 font-14 text-capitalize">
                                {content}
                              </h6>
                            </Col>
                            <Col>
                              <h6 className="m-0 font-14 text-capitalize">
                                {
                                  this.props.reviewData[content][0].verify
                                    .verifier.name
                                }
                              </h6>
                            </Col>
                            <Col>
                              <h6 className="m-0 font-14">
                                <b>₦</b>
                                0:00
                              </h6>
                            </Col>
                            <Col>
                              <h6 className="m-0 font-14">
                                <b>₦</b>
                                {this.sumAccount(
                                  this.props.reviewData[content],
                                  'totalPrice'
                                )}
                              </h6>
                            </Col>
                            <Col>
                              <h6 className="m-0 font-14">
                                <b>{this.props.reviewData[content].length}</b>
                              </h6>
                            </Col>
                            <Col>
                              <h6 className="m-0 font-14">
                                <i
                                  className={
                                    this.state.activeTab === content
                                      ? 'fas fa-angle-up float-right accor-plus-icon'
                                      : 'fas fa-angle-down float-right accor-plus-icon'
                                  }
                                ></i>
                              </h6>
                            </Col>
                          </Row>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.activeTab === content}>
                        <BasicTable
                          tableData={this.props.reviewData[content]}
                        />
                      </Collapse>
                    </Card>
                  </div>
                ))}
                {/* Total SumDiv */}
                <div className="table-responsive col-sm-12 col-md-8 m-0 mt-3 p-0">
                  <Table className="table-centered mb-0 table-nowrap">
                    <tbody className="w-100">
                      <tr className="bg-light text-right">
                        <th scope="row" colSpan="9">
                          Total Count :
                        </th>

                        <td>{this.totalQty()} qty</td>
                      </tr>
                      <tr className="bg-light text-right">
                        <th scope="row" colSpan="9">
                          Total Discount :
                        </th>

                        <td>
                          <b>₦</b>
                          0:00
                        </td>
                      </tr>
                      <tr className="bg-light text-right">
                        <th scope="row" colSpan="9">
                          Total :
                        </th>

                        <td>
                          <b>
                            {this.getTotal(this.props.reviewData, 'totalPrice')}
                          </b>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button
                    className="mt-3 bg-warning"
                    onClick={() =>
                      this.setState({ ...this.state, PdfPreview: true })
                    }
                  >
                    Preview/Print
                    <i className="fas fa-download font-size-14 mx-2" />
                  </Button>
                </div>
              </>
            ) : (
              <RequestPdfPrint
                tableData={this.props.reviewData}
                sumAccount={this.sumAccount}
              />
            )}
          </>
        ) : (
          <p> No Requisition for the date range </p>
        )}
      </React.Fragment>
    );
  }
}

export default RequisitionAccordions;
