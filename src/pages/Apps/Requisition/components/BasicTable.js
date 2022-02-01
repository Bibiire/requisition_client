import React, { Component } from 'react';
import Moment from 'moment';
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
                    {/* <th>ID</th> */}
                    {/* <th>Name</th> */}
                    <th>Request Item</th>
                    <th>Total Cost</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.tableData.map((data) => (
                    <tr key={data._id}>
                      <td className="text-capitalize">{data.itemName}</td>
                      <td>₦ {data.totalPrice ? data.totalPrice : '0.00'}</td>
                      <td>{Moment(data.createdAt).format('l')}</td>
                      <td>
                        <span
                          className={` font-size-12 badge badge-soft-${
                            data.approve.status === true ? 'success' : 'danger'
                          }`}
                        >
                          {data.approve.status === true
                            ? 'Approve'
                            : 'Rejected'}
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
