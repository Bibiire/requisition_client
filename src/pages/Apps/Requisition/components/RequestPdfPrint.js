import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Moment from 'moment';
import { Table, Row, Col, Card, CardBody, Container } from 'reactstrap';
import { BasicTable } from '../components/index';

class RequestPdfPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <Card>
        <CardBody>
          {/* Summary Table here */}{' '}
          <div className="table-responsive">
            <Table className="mb-0">
              <thead className="bg-warning">
                <tr>
                  <th>Department</th>
                  <th>Supervisor</th>
                  <th>Discount</th>
                  <th>Totals</th>
                  <th>Qty</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(this.props.tableData).map((data) => (
                  <tr key={data}>
                    <td className="text-capitalize">{data}</td>
                    <td>
                      {this.props.tableData[data][0]?.verify?.verifier.name}
                    </td>
                    <td>
                      <b>₦</b>
                      0:00
                    </td>
                    <td>
                      <b>₦</b>
                      {this.props.sumAccount(
                        this.props.tableData[data],
                        'totalPrice'
                      )}
                    </td>
                    <td>
                      <b>{this.props.tableData[data].length}</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {/* General Table here */}
          <div>
            {Object.keys(this.props.tableData).map((data) => (
              <BasicTable tableData={this.props.tableData[data]} />
            ))}
          </div>
        </CardBody>
      </Card>
    );
  }
}

const PrintComponent = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <RequestPdfPrint
        ref={componentRef}
        {...props}
        // tableData={tableData}
        // sumAccount={sumAccount}
      />
      <button className="btn btn-success" onClick={handlePrint}>
        {' '}
        Print{' '}
      </button>
    </div>
  );
};

export default PrintComponent;
