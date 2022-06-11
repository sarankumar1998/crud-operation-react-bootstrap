/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import BootstrapTable from 'react-bootstrap-table-next'


function Home() {
    const [user, setUser] = useState([])

    // CALL IT ONCE IN YOUR APP
    if (typeof window !== "undefined") {
        injectStyle();
    }

    const loadUser = async () => {
        const res = await axios.get('http://localhost:3003/users')
        setUser(res.data)
    }

    useEffect(() => {
        loadUser()
    }, [])

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUser()
        toast.error("Deleted Successfully");
    }

    return (
        <div className='container'>
            <div className='py-1'>
                <ToastContainer />
                <h2 className='text-start'>Home</h2>
                <div className='text-end' style={{ marginRight: '6rem' }}>
                    <a className='btn btn-sm btn-info' style={{ marginRight: '1px' }} href='/adduser/Addvendor'><AddCircleIcon /> Vendor Addition</a>
                    <a className='btn btn-success btn-sm' style={{ marginRight: '1px' }}>Export<PictureAsPdfIcon /></a>

                </div>
                <div className='text-end' style={{ marginRight: '9%' }}>
                    <form class="mt-2">
                        <input type="search" placeholder="Search" aria-label="Search" />

                    </form>
                </div>
                <table class="table table-striped table-hover mt-1">
                    <thead class="bg-dark text-light">
                        <tr>
                            <th scope="col" sort>Company</th>
                            <th scope="col">VendorId</th>
                            <th scope="col">Po</th>
                            <th scope="col">Username</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(userr =>
                                <tr>
                                    <td>{userr.company}</td>
                                    <td>{userr.vendorId}</td>
                                    <td className='text-success'>Active</td>
                                    <td>{userr.username}</td>
                                    <td>
                                        <a style={{ marginRight: '1rem' }} href={`/adduser/${userr.id}`}><VisibilityIcon /></a>
                                        <a className='text-success' style={{ marginRight: '1rem' }} href={`/adduser/editvendor/${userr.id}`}><EditIcon /></a>
                                        <a className='text-danger' onClick={() => deleteUser(userr.id)}><DeleteIcon /></a>

                                    </td>
                                </tr>
                            )

                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home