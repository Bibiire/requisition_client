import React, { Component } from 'react';
import { Button, Card, CardBody, Row, Col, Table } from 'reactstrap';
import { groupArrObj } from '../../../../utils/utilities';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // requestSummary: [],
      requestSummary: [],
      // data: null,
      doneLoading: false,
      total: 0,
      discount: 0,
      subTotal: 0,
    };
    this.sumArray = this.sumArray.bind(this);
    this.groupArr = this.groupArr.bind(this);
    this.sumAccount = this.sumAccount.bind(this);
    this.viewMoreHandler = this.viewMoreHandler.bind(this);
  }

  componentDidMount() {
    this.groupArr();
    const discount = this.sumArray('discount');
    const total = this.sumArray('total');
    this.setState({
      ...this.state,
      total: total,
      discount: discount,
      doneLoading: true,
    });
  }

  groupArr() {
    const requestStructure = groupArrObj(this.props.data, 'name');
    this.setState({
      ...this.state,
      data: requestStructure,
    });
  }

  sumArray(field) {
    let result = this.state.requestSummary
      .map((item) => item[field])
      .reduce((prev, next) => prev + next, 0);
    return result;
  }

  sumAccount(data, field) {
    let result = 0;
    data.forEach((element) => {
      result = result + element[field];
    });
    return result;
  }

  viewMoreHandler(id) {
    this.setState({
      ...this.state,
      showMore: id,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h3 className="mb-4">Nimco Group Requisition Summary</h3>
                  <div className="table-responsive">
                    <Table className="table-centered mb-0 table-nowrap">
                      <thead className="bg-warning text-white">
                        <tr>
                          <th style={{ width: '20px' }}>More</th>
                          <th style={{ width: '120px' }}>Department</th>
                          <th>Supervisor</th>
                          <th>Discount</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      {this.state.doneLoading && (
                        <tbody>
                          {typeof this.state.data !== null &&
                          this.state.data.length === 0 ? (
                            <p> No Data Found </p>
                          ) : (
                            this.state.data !== null &&
                            Object.keys(this.state.data).map(
                              (request, index) => (
                                <tr key={index}>
                                  <td
                                    className="text-center"
                                    onClick={() => this.viewMoreHandler()}
                                  >
                                    <i className="fas fa-chevron-down" />
                                  </td>
                                  <td>
                                    <h5 className="font-size-14 text-truncate">
                                      <Link to="#" className="text-dark">
                                        {request}
                                      </Link>
                                    </h5>
                                    <p className="mb-0 tex font-size-12 t-muted">
                                      Total Items :{' '}
                                      <span className="font-weight-medium">
                                        {this.state.data[request].length}
                                      </span>
                                    </p>
                                  </td>
                                  <td>HR</td>
                                  <td>
                                    <b>₦</b>
                                    0:00
                                  </td>
                                  <td style={{ width: '90px' }}>
                                    <span>
                                      <b>₦</b>{' '}
                                      {this.sumAccount(
                                        this.state.data[request],
                                        'totalPrice'
                                      )}
                                    </span>
                                  </td>
                                </tr>
                              )
                            )
                          )}
                          <tr className="bg-light text-right">
                            <th scope="row" colSpan="5">
                              Sub Total :
                            </th>

                            <td>
                              <b>₦</b>{' '}
                              {this.sumAccount(this.props.data, 'totalPrice')}
                            </td>
                          </tr>
                          <tr className="bg-light text-right">
                            <th scope="row" colSpan="5">
                              Discount :
                            </th>

                            <td>
                              <b>₦</b>
                              {this.state.discount}
                            </td>
                          </tr>
                          <tr className="bg-light text-right">
                            <th scope="row" colSpan="5">
                              Total :
                            </th>

                            <td>
                              <b>
                                {this.sumAccount(this.props.data, 'totalPrice')}
                              </b>
                            </td>
                          </tr>
                        </tbody>
                      )}
                    </Table>
                  </div>
                  <Button className="mt-3 bg-warning">
                    {' '}
                    PDF Download{' '}
                    <i className="fas fa-download font-size-14 mx-2" />
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
