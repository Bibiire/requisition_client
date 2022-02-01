import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import { Card, CardBody, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import '../../../assets/scss/common/datatables.scss';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { data, dateRangeParams } from './data';
import { LoadingCard } from '../../../components/Common/index';

const RequisitionTable = ({
  user,
  editModal,
  previewModal,
  requestData,
  updateStatus,
  summaryPreview,
  departments,
  addCommentHandler,
  onChangeRequest,
}) => {
  const [newData, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (requestData) {
      setData(updateTableData());
    }
  }, [requestData, user]);

  const onChangeHandler = (e) => {
    const params = {
      role: user,
    };
    if (e.target.value) {
      params.departmentalId = e.target.value;
    }
    onChangeRequest(params);
  };

  const updateTableData = () => {
    const cloneRowsData = requestData.map((request) => {
      const newRequest = {
        item:
          request.itemName.charAt(0).toUpperCase() + request.itemName.slice(1),
        vendor: request.vendor,
        user: <span className="text-capitalize"> {request.user.name} </span>,
        qty: request.quantity,
        date: Moment(request.createdAt).format('l'),
        status: (
          <div
            className={` font-size-12 badge badge-soft-${
              request?.inputter?.status === false
                ? 'secondary'
                : request?.inputter?.status === true &&
                  request?.verify?.status === true &&
                  (request?.directRequest === true ||
                    request?.authorize?.status === true) &&
                  request?.approve?.status === true
                ? 'success'
                : request?.inputter?.status === true &&
                  (request?.verify?.status === false ||
                    request?.authorize?.status === false ||
                    request?.approve?.status === false)
                ? 'danger'
                : request?.inputter?.status === true &&
                  request?.verify?.status === true
                ? 'warning'
                : request?.inputter?.status === true
                ? 'warning'
                : 'danger'
            }`}
          >
            {request.inputter.status === false
              ? 'Pending'
              : request?.inputter?.status === true &&
                request?.verify?.status === true &&
                request?.authorize?.status === true &&
                request?.approve?.status === true &&
                request?.acc_check?.status === true
              ? 'Approved / Paid'
              : request?.inputter?.status === true &&
                request?.verify?.status === true &&
                (request?.directRequest === true ||
                  request?.authorize?.status === true) &&
                request?.approve?.status === true
              ? `Approved ${request?.directRequest ? '- Direct' : ''}`
              : request?.inputter?.status === true &&
                (request?.verify?.status === false ||
                  request?.authorize?.status === false ||
                  request?.approve?.status === false)
              ? 'Rejected'
              : request?.inputter.status === true &&
                request?.verify?.status === true &&
                request?.authorize?.status === true
              ? 'Confirmed'
              : request?.inputter?.status === true &&
                request?.verify?.status === true
              ? `Verified S ${request?.directRequest ? '- Direct' : ''}`
              : request?.inputter?.status === true && request?.isEdited === true
              ? 'On-Going/In-Review'
              : request?.inputter?.status === true
              ? 'On-Going'
              : 'danger'}
          </div>
        ),
        total: request.totalPrice
          ? `₦${request.totalPrice?.toLocaleString()}`
          : '0.00',
        orderId: (
          <Link to="#" className="text-dark font-weight-bold">
            #NZ1572
          </Link>
        ),
        actions: (
          <>
            {user === 'user' ? (
              <>
                {request?.isEdited === false ? (
                  <>
                    <span className="mr-3 text-secondary">
                      <i className="mdi mdi-pencil font-size-18"></i>
                    </span>
                    <span className="mr-3 text-secondary">
                      <i className="far fa-check-circle font-size-18"></i>
                    </span>
                  </>
                ) : (
                  <>
                    <Link
                      to="#"
                      onClick={() => editDataHandler(request)}
                      className="mr-3 text-primary"
                      id="edit"
                    >
                      <i className="mdi mdi-pencil font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="edit">
                      Edit
                    </UncontrolledTooltip>
                    <Link
                      to="#"
                      onClick={() => updateDataHandler(request, true)}
                      className=" mr-3 text-success"
                      id="proceed"
                    >
                      <i className="far fa-check-circle font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="proceed">
                      Proceed
                    </UncontrolledTooltip>
                  </>
                )}
              </>
            ) : user === 'verifier' ? (
              <>
                {request?.verify ||
                request?.authorize?.status === false ||
                request?.approve?.status === false ? (
                  <>
                    <span className="mr-3 text-secondary">
                      <i className="mdi mdi-pencil font-size-18"></i>
                    </span>
                    <span className="mr-3 text-secondary">
                      <i className="far fa-check-circle font-size-18"></i>
                    </span>
                    <span className="mr-3 text-secondary">
                      <i className=" far fa-minus-square font-size-18"></i>
                    </span>
                    <span className="mr-3 text-secondary">
                      <i className="far fa-times-circle font-size-18"></i>
                    </span>
                  </>
                ) : (
                  <>
                    <Link
                      to="#"
                      onClick={() => editDataHandler(request)}
                      className="mr-3 text-primary"
                      id="edit"
                    >
                      <i className="mdi mdi-pencil font-size-18"></i>
                    </Link>

                    <UncontrolledTooltip placement="top" target="edit">
                      Edit
                    </UncontrolledTooltip>
                    <Link
                      to="#"
                      onClick={() => updateDataHandler(request, true)}
                      className=" mr-3 text-success"
                      id="verify"
                    >
                      <i className="far fa-check-circle font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="verify">
                      Verify
                    </UncontrolledTooltip>
                    <Link
                      to="#"
                      onClick={() => addCommentHandler(request)}
                      className=" mr-3 text-warning"
                      id="comment"
                    >
                      <i className=" far fa-minus-square font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="comment">
                      Comment
                    </UncontrolledTooltip>
                    <Link
                      to="#"
                      onClick={() => updateDataHandler(request, false)}
                      className="mr-3 text-danger"
                      id="reject"
                    >
                      <i className=" far fa-times-circle font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="reject">
                      Reject
                    </UncontrolledTooltip>
                  </>
                )}
              </>
            ) : user === 'acc_checker' ? (
              <>
                {request?.approve?.status !== true ||
                request?.acc_check?.status === true ? (
                  <>
                    <span className="mr-3 text-secondary">
                      <i className="far fa-check-circle font-size-18"></i>
                    </span>
                    <span className="mr-3 text-secondary">
                      <i className=" far fa-minus-square font-size-18"></i>
                    </span>
                  </>
                ) : (
                  <>
                    <Link
                      to="#"
                      onClick={() => updateDataHandler(request, true)}
                      className=" mr-3 text-success"
                      id="paid"
                    >
                      <i className="far fa-check-circle font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="paid">
                      Paid
                    </UncontrolledTooltip>
                    <Link
                      to="#"
                      onClick={() => addCommentHandler(request)}
                      className=" mr-3 text-warning"
                      id="comment"
                    >
                      <i className=" far fa-minus-square font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="comment">
                      Comment
                    </UncontrolledTooltip>
                  </>
                )}
              </>
            ) : user === 'authorizer' ? (
              <>
                {request?.authorize || request?.approve?.status === false ? (
                  <>
                    <span className="mr-3 text-secondary">
                      <i className="far fa-check-circle font-size-18"></i>
                    </span>
                    <span className="mr-3 text-secondary">
                      <i className=" far fa-minus-square font-size-18"></i>
                    </span>
                    <span className="mr-3 text-secondary">
                      <i className="far fa-times-circle font-size-18"></i>
                    </span>
                  </>
                ) : (
                  <>
                    <Link
                      to="#"
                      onClick={() => updateDataHandler(request, true)}
                      className=" mr-3 text-success"
                      id="authorize"
                    >
                      <i className="far fa-check-circle font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="authorize">
                      Authorized
                    </UncontrolledTooltip>
                    <Link
                      to="#"
                      onClick={() => addCommentHandler(request)}
                      className=" mr-3 text-warning"
                      id="comment"
                    >
                      <i className=" far fa-minus-square font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="comment">
                      Comment
                    </UncontrolledTooltip>
                    <Link
                      to="#"
                      onClick={() => updateDataHandler(request, false)}
                      className="mr-3 text-danger"
                      id="reject"
                    >
                      <i className=" far fa-times-circle font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="reject">
                      Reject
                    </UncontrolledTooltip>
                  </>
                )}
              </>
            ) : (
              <>
                {request?.acc_check?.status === true ? (
                  <>
                    <span className="mr-3 text-secondary">
                      <i className="far fa-check-circle font-size-18"></i>
                    </span>
                    <span className="mr-3 text-secondary">
                      <i className=" far fa-minus-square font-size-18"></i>
                    </span>
                    <span className="mr-3 text-secondary">
                      <i className="far fa-times-circle font-size-18"></i>
                    </span>
                  </>
                ) : (
                  <>
                    <Link
                      to="#"
                      onClick={() => updateDataHandler(request, true)}
                      className=" mr-3 text-success"
                      id="approve"
                    >
                      <i className="far fa-check-circle font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="approve">
                      Approve
                    </UncontrolledTooltip>

                    <Link
                      to="#"
                      onClick={() => addCommentHandler(request)}
                      className=" mr-3 text-warning"
                      id="comment"
                    >
                      <i className=" far fa-minus-square font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="comment">
                      Comment
                    </UncontrolledTooltip>

                    <Link
                      to="#"
                      onClick={() => updateDataHandler(request, false)}
                      className="mr-3 text-danger"
                      id="reject"
                    >
                      <i className=" far fa-times-circle font-size-18"></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="reject">
                      Reject
                    </UncontrolledTooltip>
                  </>
                )}
              </>
            )}

            <Link
              to="#"
              onClick={() => previewDataHandler(request)}
              className=" mr-3 text-secondary"
              id="preview"
            >
              <i className=" far fa-meh-rolling-eyes font-size-18"></i>
            </Link>
            <UncontrolledTooltip placement="top" target="preview">
              Preview
            </UncontrolledTooltip>
          </>
        ),
      };
      return newRequest;
    });
    setIsLoading(false);
    return {
      columns: data.columns,
      rows: cloneRowsData,
    };
  };

  const updateDataHandler = (row, statusValue) => {
    const editedData = {
      id: row._id,
      status: statusValue,
      role: user,
    };
    updateStatus(editedData);
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
                onClick={() => onChangeRequest()}
              >
                <i className="ri-refresh-line font-size-18 " />
              </span>
              {(user === 'authorizer' || user === 'approver') && (
                <select
                  onChange={onChangeHandler}
                  className="custom-select custom-select-sm mr-2"
                >
                  {departments !== null ? (
                    <>
                      <option value="">Departments</option>{' '}
                      {departments.map((department) => (
                        <option key={department._id} value={department._id}>
                          {department.name}
                        </option>
                      ))}
                    </>
                  ) : (
                    'Loading...'
                  )}
                </select>
              )}
              <select
                onChange={onChangeRequest}
                className="custom-select custom-select-sm"
              >
                {dateRangeParams.map((date) => (
                  <option key={date.id} value={date.value}>
                    {date.name}
                  </option>
                ))}
              </select>
              <span
                className="btn btn-light btn-sm ml-2 py-0"
                onClick={summaryPreview}
              >
                <i className="ri-download-2-fill font-size-15 " />
              </span>
            </div>

            <h4 className="card-title mb-4">Transition</h4>
          </div>
          {isLoading === false ? (
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
