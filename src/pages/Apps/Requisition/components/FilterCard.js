import React, { useState } from 'react';
import { FilterDropDownData } from '../data';
import { RequisitionSummary } from './index';
import { Modal } from '../../../../components/UiElement/index';
import { userInfo } from '../../../../utils/utilities';

import FilterDropDown from './filterDropdown';

const FilterCard = ({
  filterProp,
  departments,
  updateFilterHandler,
  tableData,
}) => {
  console.log(userInfo().role[0]);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {filterProp && (
        <div className="bg-light rounded p-2">
          Filter
          {departments === null ? (
            <span className="float-right"> loading... </span>
          ) : (
            <div className="float-right d-flex">
              <FilterDropDown
                updateFilterHandler={updateFilterHandler}
                dropDownData={FilterDropDownData.dropDownStatus}
                title="Status"
              />
              {userInfo().role[0] === 'GMD' && (
                <FilterDropDown
                  updateFilterHandler={updateFilterHandler}
                  dropDownData={departments}
                  title="Department"
                />
              )}

              {userInfo().role[0] === 'MD' && (
                <FilterDropDown
                  updateFilterHandler={updateFilterHandler}
                  dropDownData={departments}
                  title="Department"
                />
              )}

              <span
                style={{ cursor: 'pointer' }}
                onClick={() => setOpenModal(!openModal)}
              >
                Preview
                <i className="fas fa-download font-size-14 mr-3 ml-2" />
              </span>
            </div>
          )}
        </div>
      )}

      {/* Requisition form Modal  */}
      <Modal
        modal_static={openModal}
        SetModalStatic={() => setOpenModal(!openModal)}
        title={'Departmental Summary'}
      >
        <RequisitionSummary data={tableData} />
      </Modal>
    </>
  );
};

export default FilterCard;
