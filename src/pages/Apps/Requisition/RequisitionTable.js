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

import { data, options } from './data';

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
            <Link
              to="#"
              onClick={() => editDataHandler(row)}
              className="mr-3 text-primary"
            >
              <i className="mdi mdi-pencil font-size-18"></i>
            </Link>
            <Link
              to="#"
              onClick={() => updateDataHandler(row)}
              className=" mr-3 text-success"
            >
              <i className="far fa-check-circle font-size-18"></i>
            </Link>
            <Link
              to="#"
              onClick={() => deleteDataHandler(row?.id)}
              className="mr-3 text-danger"
            >
              <i className=" far fa-times-circle font-size-18"></i>
            </Link>
            <Link
              to="#"
              onClick={() => previewDataHandler(row)}
              className=" mr-3 text-secondary"
            >
              <i className=" far fa-meh-rolling-eyes font-size-18"></i>
            </Link>
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
          <Dropdown
            isOpen={menu}
            toggle={() => setMenu({ menu: !menu })}
            className="float-right"
          >
            <DropdownToggle tag="i" className="arrow-none card-drop">
              <i className="mdi mdi-dots-vertical"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>2021</DropdownItem>

              <DropdownItem>2020</DropdownItem>

              <DropdownItem>2019</DropdownItem>

              <DropdownItem>2018</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <h4 className="card-title mb-4">Transition</h4>

          {newData !== null && (
            <MDBDataTable responsive data={newData} className="mt-4" />
          )}
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default RequisitionTable;
