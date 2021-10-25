import React, { useState, useEffect } from 'react';
import {
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Card,
  CardBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import './datatables.scss';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import { data } from '../widgets/data';

const RequisitionTable = ({ editModal, previewModal }) => {
  const [menu, setMenu] = useState(false);
  const [newData, setData] = useState(null);

  useEffect(() => {
    setData(updateTableData());
  }, []);

  const updateTableData = () => {
    const cloneRowsData = data.rows.map((row) => {
      const newRows = {
        ...row,
        actions: (
          <>
            {/* <Link
              to="#"
              onClick={() => editDataHandler(row)}
              className="mr-3 text-primary"
            >
              <i className="mdi mdi-pencil font-size-18"></i>
            </Link> */}
            {/* <Link
              to="#"
              onClick={() => updateDataHandler(row)}
              className=" mr-3 text-success"
            >
              <i className="far fa-check-circle font-size-18"></i>
            </Link> */}
            <Link
              to="#"
              // onClick={() => deleteDataHandler(row?.id)}
              className="mr-3 text-muted"
            >
              <i className="mdi mdi-dots-vertical font-size-18"></i>
            </Link>
            {/* <Link
              to="#"
              onClick={() => previewDataHandler(row)}
              className=" mr-3 text-secondary"
            >
              <i className=" far fa-meh-rolling-eyes font-size-18"></i>
            </Link> */}
          </>
        ),
      };
      return newRows;
    });

    return {
      columns: data.columns,
      rows: cloneRowsData,
    };
  };

  const updateDataHandler = (row) => {
    alert(`Update table state ${row.id}`);
  };

  const deleteDataHandler = (row) => {
    alert(`delete ${row.id}`);
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
          <div className="float-right">
            <select className="custom-select custom-select-sm">
              <option defaultValue>Projects</option>
              <option value="1">Tasks</option>
              <option value="2">Others</option>
            </select>
          </div>

          <h4 className="card-title mb-4">Projects</h4>
          <hr />

          {newData !== null && (
            <MDBDataTable hover responsive data={newData} className="mt-4" />
          )}
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default RequisitionTable;
