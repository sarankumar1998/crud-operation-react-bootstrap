import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import axios from 'axios'

function Viewvendor() {
    const [user, setUser] = useState({
        company: '',
        vendorId: '',
        username: '',
        contact: '',
        website: ''
    })

    const { id } = useParams()

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data)
    }



    return (
        <div>
            {/* <a className='btn btn-primary' href='/'>
            back to home
        </a>
        <h3>Vendor Id: {id}</h3>

        <ul>
            <li>name:{user.company}</li>
            <li>name:{user.vendorId}</li>
            <li>name:{user.username}</li>
            <li>name:{user.contact}</li>
            <li>name:{user.website}</li>
        </ul> */}
            <div className='row'>
                <div className='container card col-4 d-flex justify-content-center mt-5 bg-light'>
                    <h4 className='text-center mt-3' style={{ fontWeight: '600' }}>Vendor Details</h4>
                    <hr/>
                    <form >
                        <p>Id: {id}</p>
                        <ul className='list-group w-100' style={{width:'0rem'}}>
                            <li className='list-group-item'>Company:{user.company}</li>
                            <li className='list-group-item'>VendorId:{user.vendorId}</li>
                            <li className='list-group-item'>Username:{user.username}</li>
                            <li className='list-group-item'>Contact:{user.contact}</li>
                            <li className='list-group-item'>Website Link:{user.website}</li>
                        </ul>
                        <a className='btn btn-sm btn-primary mt-4 mb-4' href='/'>
                          <ChevronLeftIcon/>  back to home
                        </a>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Viewvendor
