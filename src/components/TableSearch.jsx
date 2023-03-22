import React, { Children, useState } from 'react'
import PropTypes from 'prop-types';
import { debounce } from "lodash";
import { useSearchParams } from 'react-router-dom';

function TableSearch({ filterValues, onFilterChange, onSearch, onDateChange,children }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [search, setSearch] = useState("")

  const handleSearch = debounce((value) => {
    onSearch(value);
  }, 500);
  function handleSubmit(event) {
    // event.preventDefault();
  }
const onReset=()=>{
window.location.reload()
}

  return (
    <>
      <div className="col d-lg-flex align-items-center">
        <div className="d-xl-flex align-items-end justify-content-between mb-1">
          <div className="userInput mb-2 d-xl-flex align-items-end">
            <label className="filterLabel d-inline-block mb-xl-2 mb-1 mr-1 flex-shrink-0 customLable ">Sort By</label>
            <div className="flex-grow-1 d-block d-sm-flex flexgrow-1">
              <div className="date-wrap mt-md-0 w-xl-100">
                <p className="filterLabel mb-1">From</p>
                <input type="date" className="date-fliter form-select-date w-xl-100"  name='startDate' 
                onChange={(e)=>onDateChange({startDate:e.target.value})}
               / >
              </div>
              <div className="date-wrap ml-sm-2 mt-sm-0 mt-1 w-xl-100">
                <p className="filterLabel mb-1">To</p>
                <input type="date" className="date-fliter form-select-date w-xl-100" name='endDate'
                onChange={(e)=>onDateChange({endDate:e.target.value}) }
                 />
              </div>
            </div>
          </div>
          <div className="dataTables_filter mb-2 mt-1 w-100">
            <div className="search-wrap search-wrap-tables position-relative ">
              <input type="search" className="form-control p-1 mr-0 custom-search2" name='search' placeholder="Search" 
              
              onChange={(e) => handleSearch(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="d-xl-flex justify-content-between mb-1">
          <div className="d-xl-flex justify-content-between ml_10">
          {onFilterChange !== undefined?
            <div className="userInput mb-1 d-xl-flex align-items-center mr-xl-1">
              <div className="filter-box">
                <select name="status" id="cms-small-select" className="m-0 mb-1 form-select" onChange={(e)=>(e.target.value)}>
                {
               filterValues.map((value,valueIndex)=>(
                 <option key={valueIndex} value={value.id}>{value.label}</option>
                      ))
                 }
                </select>
              </div>
            </div>
            :''
          }
            {children}
          </div>
        </div>
        {/* <div className="d-xl-flex justify-content-between ml_10">
            <div className="userInput mb-1 d-xl-flex align-items-center mr-xl-1">
              {
                (onFilterChange != undefined)?
                    <>
                      <label className="filterLabel d-inline-block mb-1 mb-xl-2 mr-1 customLable">Select Status</label>
                      <div className="filter-box">
                        <select onChange={(e) => onFilterChange(e.target.value)} className="m-0 mb-1 form-select" id="cms-small-select" aria-label>
                          {
                            filterValues.map((value, valueIndex) => (

                              <>
                                <option key={valueIndex} value={value.id}>{value.label}</option>
                              </>


                            ))
                          }
                        </select>
                      </div>
                    </>
                  :'' 
              }
            </div>
            {children}

          <div className="filter-box">
            <div className="d-md-flex mb-1 justify-content-end">
              <button className="dashboard-btns bg_black filter_btns mr-md-1 " onClick={handleSubmit}>Filter</button>
              <button className="dashboard-btns bg_black filter_btns ">Reset</button>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="row justify-content-between mb-5">
                <div className="col-xl-4 col-lg-5 col-md-7">
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <select onChange={(e)=> onFilterChange(e.target.value)} className="form-select form-field" aria-label>
                                {
                                filterValues.map((value,valueIndex)=>(
                                    <option key={valueIndex} value={value.id}>{value.label}</option>
                                ))
                                }
                            </select>
                        </div>
                        <div className="col-md-6 mb-2">
                            <input id="eventDate" onChange={(e)=> {}} className="form-select form-field" type="date" placeholder="Event Date" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-5 mb-2">
                    <input onChange={(e)=> handleSearch(e.target.value)} type="text" className="form-control form-field search" name id placeholder="Search..." />
                </div>
            </div> */}
    </>
  )
}

TableSearch.propTypes = {
  filterValues: PropTypes.array,
  onFilterChange: PropTypes.func,
  onSearch: PropTypes.func,
};

TableSearch.defaultProps = {
  filterValues: [],
  onFilterChange: undefined,
  onSearch: undefined,
};

export default TableSearch;
