import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { totalData } from '../../services/dashboard'
import { Graph } from './Graph'
export const Dashboard = () => {

  const [total, setTotal] = useState({})

  const fetch = async () => {
    try {

      let data = await totalData();
      setTotal(data)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetch()
  }, [])
  return (
    <>
      <section id="configuration">
        <div className="mx-5">
          <h1 className="main-heading">Dashboard</h1>
        </div>
        <div className="mx-lg-4 my-2">
          <div className="dashboard-card">
            <div className="row">
              <div className="col-xxl-4 col-xl-6">
                <div className="d-flex align-items-start my-2 my-border-right">
                  <img src="images/dash-1.png" alt="" />
                  <div className="mx-4">
                    <div className="d-flex">
                      <p className="dashboard-card-des me-4">{total?.users}</p>
                      <p className="dashboard-card-per"><img src="images/uparrow.png" className="me-2" />100%</p>
                    </div>
                    <h5 className="dashboard-card-heading">Users</h5>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-6">
                <div className="d-flex align-items-start my-2 my-border-right">
                  <img src="images/dash-2.png" alt="" />
                  <div className="mx-4">
                    <div className="d-flex">
                      <p className="dashboard-card-des me-4">{total?.vendor}</p>
                      <p className="dashboard-card-per"><img src="images/uparrow.png" className="me-2" />100%</p>
                    </div>
                    <h5 className="dashboard-card-heading">Vendors</h5>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-6">
                <div className="d-flex align-items-start my-2">
                  <img src="../../images/dash-3.png" alt="" />
                  <div className="mx-4">
                    <div className="d-flex">
                      <p className="dashboard-card-des me-4">100</p>
                      <p className="dashboard-card-per"><img src="images/uparrow.png" className="me-2" />100%</p>
                    </div>
                    <h5 className="dashboard-card-heading">Commission Amount</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Graphs Start */}
       <Graph/>
        {/* Graphs End */}
      </section>

    </>
  )
}
