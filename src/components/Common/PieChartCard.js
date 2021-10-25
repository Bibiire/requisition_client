import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

//Import Charts
import ReactApexChart from 'react-apexcharts';
import '../../assets/scss/common/dashboard.scss';

const PieChartAnalysis = ({ data }) => {
  console.log(data)
  return (
    <Card>
      <CardBody>
        <div className="float-right">
          <select className="custom-select custom-select-sm">
            <option defaultValue>Apr</option>
            <option value="1">Mar</option>
            <option value="2">Feb</option>
            <option value="3">Jan</option>
          </select>
        </div>
        <h4 className="card-title mb-4">
          {data.title ? data.title : 'Departmental Summary'}
        </h4>

        <div id="donut-chart" className="apex-charts">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="donut"
            height="230"
          />
        </div>

        <Row>
          <Col xs={4}>
            <div className="text-center mt-4">
              <p className="mb-2 text-truncate">
                <i className="mdi mdi-circle text-primary font-size-10 mr-1"></i>{' '}
                {data.department[0]}
              </p>
              <h5>42 %</h5>
            </div>
          </Col>
          <Col xs={4}>
            <div className="text-center mt-4">
              <p className="mb-2 text-truncate">
                <i className="mdi mdi-circle text-success font-size-10 mr-1"></i>{' '}
                {data.department[1]}
              </p>
              <h5>26 %</h5>
            </div>
          </Col>
          <Col xs={4}>
            <div className="text-center mt-4">
              <p className="mb-2 text-truncate">
                <i className="mdi mdi-circle text-warning font-size-10 mr-1"></i>{' '}
                {data.department[2]}
              </p>
              <h5>42 %</h5>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PieChartAnalysis;
