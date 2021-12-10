import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import '../../../assets/scss/common/datatables.scss';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { FilterCard } from './components/index';
import { data, dateRangeParams } from './data';
import { LoadingCard } from '../../../components/Common/index';

const RequisitionTable = ({
  editModal,
  previewModal,
  requestData,
  updateRequestHandler,
  loading,
  departments,
  requisitionFilterHandle,
  onChangeDate,
}) => {
  // const [menu, setMenu] = useState(false);
  const [filter, showFilter] = useState(false);
  const [newData, setData] = useState(null);

  useEffect(() => {
    if (requestData) {
      setData(updateTableData());
    }
  }, [requestData]);

  const updateTableData = () => {
    const role = JSON.parse(localStorage.getItem('userRole'));
    const cloneRowsData = requestData.map((request) => {
      const newRequest = {
        item: request.itemName.toUpperCase(),
        date: Moment(request.createdAt).format('l'),
        status: (
          <div
            className={` font-size-12 badge badge-soft-${
              request.status === 1
                ? 'secondary'
                : request.status === 6
                ? 'danger'
                : 'success'
            }`}
          >
            {request.status === 1
              ? 'Pending'
              : request.status === 6
              ? 'Rejected'
              : 'Approved'}
          </div>
        ),
        total: `₦${request.totalPrice.toLocaleString()}`,
        orderId: (
          <Link to="#" className="text-dark font-weight-bold">
            #NZ1572
          </Link>
        ),
        actions: (
          <>
            <Link
              to="#"
              onClick={() => editDataHandler(request)}
              className="mr-3 text-primary"
            >
              <i className="mdi mdi-pencil font-size-18"></i>
            </Link>
            {role[0] === 'Admin' && (
              <>
                <Link
                  to="#"
                  onClick={() => updateDataHandler(request, 2)}
                  className=" mr-3 text-success"
                >
                  <i className="far fa-check-circle font-size-18"></i>
                </Link>
                <Link
                  to="#"
                  onClick={() => updateDataHandler(request, 6)}
                  className="mr-3 text-danger"
                >
                  <i className=" far fa-times-circle font-size-18"></i>
                </Link>
              </>
            )}

            <Link
              to="#"
              onClick={() => previewDataHandler(request)}
              className=" mr-3 text-secondary"
            >
              <i className=" far fa-meh-rolling-eyes font-size-18"></i>
            </Link>
          </>
        ),
      };
      return newRequest;
    });
    return {
      columns: data.columns,
      rows: cloneRowsData,
    };
  };

  const updateDataHandler = (row, statusValue) => {
    const editedData = {
      ...row,
      status: statusValue,
    };
    updateRequestHandler(editedData);
  };

  const editDataHandler = (row) => {
    editModal(row);
  };

  const previewDataHandler = (row) => {
    previewModal(row);
  };

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <div>
            <div className="float-right d-flex">
              <span
                className="btn btn-light btn-sm mr-2 py-0"
                // style={{ cursor: 'pointer' }}
                onClick={() => showFilter(!filter)}
              >
                <i className=" ri-filter-3-line font-size-18 " />
              </span>
              <select
                onChange={onChangeDate}
                className="custom-select custom-select-sm"
              >
                {dateRangeParams.map((date) => (
                  <option key={date.id} value={date.value}>
                    {date.name}
                  </option>
                ))}
              </select>
            </div>

            <h4 className="card-title mb-4">Transition</h4>
          </div>
          <FilterCard
            updateFilterHandler={requisitionFilterHandle}
            departments={departments}
            filterProp={filter}
            tableData={requestData}
          />
          {!loading && newData !== null ? (
            <MDBDataTable responsive data={newData} className="mt-2" />
          ) : (
            <LoadingCard />
          )}
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default RequisitionTable;
