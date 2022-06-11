import React from 'react'
function Navbar() {
    return (
        <div>
            <div className='py-0'>
                <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
                   <div className='container'>
                   <a class="navbar-brand" >TRITON</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="/notfound">Not</a>
                            </li>
                    
                        </ul>

                        
                    </div>
                       
                   </div>
                </nav>
            </div>
        </div>
    )
}
export default Navbar