import React from 'react'
import propTypes from 'prop-types'
import { SearchTable } from '../../components/SearchTable'
import Table from '../../components/Table'
import { useState } from 'react'
import { bookingField, servicesFields } from './tableFields'

export const VendorLogs = ({ vendorBooking, services }) => {

    const [selectedFieldsCols, setSelectedFieldsCols] = useState(bookingField);
    const [active, setActive] = useState("Booking Log");
    const [data, setData] = useState({})

    const onChange = (e) => {

        if (e.target.value === "Booking Log") {
            setSelectedFieldsCols(bookingField)
            setActive(e.target.value)
            setData(vendorBooking)
        } else if (e.target.value === "Services") {
            setSelectedFieldsCols(servicesFields)
            setActive(e.target.value)
            setData(services)
        }

    }
    return (
        <div className="dataTables_wrapper box mt-lg-5 mt-3">
            <ul className="nav nav-pills my-3 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <input type="button" className={`nav-link ${active == "Booking Log" ? "active" : ""} `}
                        value={"Booking Log"} name="BookingLog" onClick={e => onChange(e)} />
                </li>
                <li className="nav-item" role="presentation">
                    <input type={"button"} className={`nav-link ${active == "Services" ? "active" : ""} `}
                        value={"Services"} name="services" onClick={onChange} />
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-booking" role="tabpanel" aria-labelledby="pills-booking-tab" tabIndex={0}>
                    <h1 className="main-heading">Booking Logs</h1>
                    <SearchTable
                    />

                    <div className="row row-table">
                        <div className="dataTables_wrapper container-fluid dt-bootstrap4">
                            <div className="row">
                                <div className="col-12">
                                    <Table
                                        fields={selectedFieldsCols}
                                        data={data}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
              
                </div>

            </div>
        </div>)
}


VendorLogs.propTypes = {
    vendorBooking: propTypes.array,
    services: propTypes.array
}