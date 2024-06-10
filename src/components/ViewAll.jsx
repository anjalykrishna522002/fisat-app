import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchdata = () => {
        axios.get("https://courseapplogix.onrender.com/getdata").then((response) => {
            changeData(response.data)
            console.log(response.data)
        }).catch((error) => {
            alert.apply(error.message)
        })
    }
    useEffect(
        () => { fetchdata() }, []
    )

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">College</th>
                                    <th scope="col">Dob</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">v</th>

                                </tr>
                            </thead>
                            {data.map(
                                (value, index) => {

                                    return <tbody>
                                        <tr>
                                            <th scope="row">{value._id}</th>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.college}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.course}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td>
                                            <td>{value.__v}</td>
                                        </tr>

                                    </tbody>
                                }
                            )
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll