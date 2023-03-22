import React from 'react'
import PropTypes from 'prop-types'

const TablePagination = ({ filterValues, onFilterChange }) => {

  return (
    // <select className="d-inline-block dashInput sm-dropdown mb-1" onChange={e=>onFilterChange({status:e.target.value})}>
    //              {
//                 filterValues?.map((data)=>(
//                     <option value={data?.id}>{data?.label}</option>
//                 ))
//              }
             
//               <option value={25}>25</option>
//               <option value={50}>50</option>
//               <option value={100}>100</option>
//             </select> 
      <>
<select name="entries" id="cms-primary-select" className='cd-inline-block dashInput sm-dropdown mb-1'
          onChange={(e) => onFilterChange({entries:e.target.value})}>
          {filterValues.map((value, valueIndex) => (

            <option key={valueIndex} value={value}>

              {value}

            </option>

          ))}
        </select>
    
    </>
  )
}

TablePagination.propTypes = {

  filterValues: PropTypes.array,
  onFilterChange: PropTypes.func,
}

TablePagination.defaultProps = {
  filterValues: [],
  onFilterChange: undefined,
};


export default TablePagination