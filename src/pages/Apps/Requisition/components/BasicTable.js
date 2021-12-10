import React, { Component } from 'react';
import Moment from 'moment'
import { Table, Row, Col, Card, CardBody, Container } from 'reactstrap';

class BasicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <div className="table-responsive">
              <Table className="mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Request Item</th>
                    <th>Total Cost</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.tableData.map((data) => (
                    <tr>
                      <th scope="row">{data.id}</th>
                      <td>{data.user?.firstName}</td>
                      <td>{data.itemName}</td>
                      <td>{data.totalPrice}</td>
                      <td>{Moment(data.createdAt).format("l")}</td>
                      <td>
                        <span
                          className={` font-size-12 badge badge-soft-${
                            data.status === 1
                              ? 'secondary'
                              : data.status === 6
                              ? 'danger'
                              : 'success'
                          }`}
                        >
                          {data.status === 1
                            ? 'Pending'
                            : data.status === 6
                            ? 'Rejected'
                            : 'Approved'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default BasicTable;
