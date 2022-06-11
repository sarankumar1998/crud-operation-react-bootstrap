import axios  from 'axios'
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

function Addvendor() {
    // CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
    injectStyle();
  }
  const navigate = useNavigate()
    const [user, setUser] = useState({

        company: '',
        vendorId: '',
        username: '',
    })

    const {company, vendorId, username, po} = user
    const onValueChange = e =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = async e => {
       e.preventDefault()
       await axios.post('http://localhost:3003/users', user)
       toast.success("Added Successfully");
       navigate("/About")
    }
    return (
        <div className='row'>
            <div className='container card col-4 d-flex justify-content-center mt-5 bg-light'>
                <ToastContainer/>
            <h4 className='text-center mt-3' style={{fontWeight:'600'}}>Add Vendor</h4>
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
                    <button type="submit" class="btn btn-primary mt-4 mb-4">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Addvendor
