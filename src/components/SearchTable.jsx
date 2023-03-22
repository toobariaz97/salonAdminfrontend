import React from 'react'
import PropTypes from 'prop-types';
import { debounce } from "lodash";
import { useEffect } from 'react';
import TablePagination from './TablePagination';

export const SearchTable = ({ filterValues, onFilterChange, onSearch, onDateChange, children, 
  entriesValue, onStatusChange ,entries,onEntryChange}) => {
    useEffect(()=>{

    },[])
    // console.log('filterValues',filterValues)
    const handleSearch = debounce((value) => {
      console.log(value);
        onSearch(value);
    }, 500);
    return (
      <div className="d-xl-flex align-items-center justify-content-between mb-3 py-md-4 py-1">
        <div>
          <div className="userInput mb-3 d-md-flex align-items-end">
            <label className="filterLabel d-inline-block mb-3 mb-xxl-2 me-3">Filter By:</label>
            <div className="flex-grow-1 d-block d-sm-flex">
              <div className="mt-md-0 mt-3 date-wrap">
                <p className="filterLabel mb-1 ps-4">From</p>
                <input type="date" className="dashInput date-fliter" name='from' onChange={e=>onDateChange({from:e.target.value})}/>
              </div>
              <div className="mt-md-0 mt-3 date-wrap">
                <p className="filterLabel mb-1 ps-4">To</p>
                <input type="date" className="dashInput ms-md-2 date-fliter" name="to" onChange={e=>onDateChange({to:e.target.value})} />
              </div>
            </div>
          </div>
          <div className="userInput mb-3 d-flex align-items-center">
            <label className="filterLabel d-inline-block mb-3 mb-xxl-0 me-3">Showing</label>
          
             <select className="d-inline-block dashInput sm-dropdown mb-1" onChange={e=>onEntryChange({entries:e.target.value})}>
             {
                entries?.map((data)=>(
                    <option value={data}>{data}</option>
                ))
             }
             
              {/* <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option> */}
            </select> 
            <label className="filterLabel d-inline-block mb-3 mb-xxl-0 ms-3">Entries</label>
          </div>
        </div>
        <div className>
        {children}
        {
          onFilterChange===undefined ? "":

          <div className="userInput mb-3 d-sm-flex align-items-center justify-content-end">

            <label className="filterLabel d-inline-block mb-xxl-0 me-1 mb-2">Sort By:</label>
            <select className="d-inline-block dashInput sm-dropdown" onChange={e=>onFilterChange({status:e.target.value})}>
                <option value={""} selected>All</option>
            {
                filterValues?.map((data)=>(
                    <>
                    <option value={data?.id}>{data?.label}</option>
                    </>
                ))
            }
              {/* <option value={2}>Inactive</option> */}
            </select>
          </div>
        }
          <div className="userInput mb-2">
            <div className="form-field mb-3">
              <div className="d-xl-flex align-items-center justify-content-end">
                <div className="dataTables_filter text-end">
                  <div className="dashSearchWrap">
                    <form action>
                      <input type="text" id="search-inp" className="dashInput search-input w-100 right-icon-input ms-0" name='searchString'
                       placeholder="Search" onChange={e=>handleSearch({searchString:e.target.value})}/>
                      <button type="submit" className="search-icon"><i className="fas fa-search" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
}
SearchTable.propTypes = {
    filterValues: PropTypes.array,
    onFilterChange: PropTypes.func,
    onSearch: PropTypes.func,
    entriesValue: PropTypes.array
};

SearchTable.defaultProps = {
    filterValues: [],
    entriesValue: [],
    onFilterChange: undefined,
    onSearch: undefined,
};
