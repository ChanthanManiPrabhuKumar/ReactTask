import React from 'react'

const Header = () => {
  return (
    <>
    <div className="container-fluid">
    <div className="row ">
        <div className="col-lg-2 col-sm-4">
            <h1 className='text-light fs-2'>SPACELINK</h1>
        </div>
        <div className=" col-lg-6 col-sm-6 ">
            <input id='input1' type='text' placeholder='Search..'/>
        </div>
        <div className="col-lg-2 col-sm-1 ms-auto"id='img2'>
        <i class="fa-regular fa-bell"></i>
            {/* <i class="fa-regular fa-user"></i> */}
        </div>
        <div className="col-lg-2 col-sm-1 ms-auto "id='img2'>
            <i class="fa-regular fa-user"></i>
        </div>
    </div>
    </div>
    </>
  )
}

export default Header
