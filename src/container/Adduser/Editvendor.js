import axios  from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

function Editvendor() {

    const navigate = useNavigate()
    const {id} = useParams()
    const [user, setUser] = useState({

        company: '',
        vendorId: '',
        username: ''
    })

        // CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
    injectStyle();
  }

    const {company, vendorId, username} = user
    const onValueChange = e =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        loadUser()
    }, [])

    const onSubmit = async e => {
       e.preventDefault()
       await axios.put(`http://localhost:3003/users/${id}`, user)
       navigate("/")
       toast.success("Updated Successfully");
    }

    const loadUser = async () => {
      const result =  await axios.get(`http://localhost:3003/users/${id}`)
      setUser(result.data)
    }
    return (
        <div className='row'>
            <div className='container card col-4 d-flex justify-content-center mt-5 bg-light'>
            <ToastContainer/>
            <h4 className='text-center mt-3' style={{fontWeight:'600'}}>Update Vendor</h4>
                <form onSubmit={e => onSubmit(e)}>
                    <div class="form-group mt-2">
                        <label>Enter Company Name</label>
                        <input type="text" class="form-control" name='company' value={company} onChange={e => onValueChange (e)} />
                    </div>
                    <div class="form-group mt-2">
                        <label>Enter Vendor Id</label>
                        <input type="text" class="form-control" name='vendorId' value={vendorId} onChange={e => onValueChange (e)} />
                    </div>
                    <div class="form-group mt-2">
                        <label>Enter Username</label>
                        <input type="text" class="form-control" name='username' value={username} onChange={e => onValueChange (e)} />
                    </div>
                    <button type="submit" class="btn btn-warning mt-4 mb-4">Update</button>
                </form>
            </div>
        </div>

    )
}

export default Editvendor
