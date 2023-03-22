import React from 'react'
import GraphData from '../../components/GraphData'

export const Graph = () => {
  return (
    <div className="box mx-md-4 my-5 p-md-5 p-4">
    <h1 className="main-heading">Amount Analytics</h1>
    <div className="row">
      <div className="col-12">
        <div className="graphs">
          <div className="text-end mb-3">
            <select name id className="primSelect mb-1">
              <option value>2022</option>
              <option value>2021</option>
              <option value>2020</option>
              <option value>2019</option>
            </select>
          </div>
          <div className="graphs-wrapper mb-4">
            <div className="side-text">
              <h3 className="site-heading fw-800 primFont">Amount</h3>
            </div>
            <GraphData/>
          </div>
          <div className="text-center">
            <h3 className="site-heading fw-800 primFont mb-1">Months</h3>
          </div>
        </div>
      </div>
    </div>
  </div>  )
}
