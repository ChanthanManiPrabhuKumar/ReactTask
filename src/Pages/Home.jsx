import React from 'react'

const Home = () => {
  return (
    <>

 <div className="container">
       <div className="row gx-1">
        <p className='text-start fs-2'>HOME</p>
           <div className=".col-lg-4 col-md-3 col-sm-6 rounded-4 border border-secondary mx-auto bg-light d-flex">
            <h3 className='fs-6 p-4 ms-0 text-start'>PUBLISHED GUIDES</h3>
            <div className="col text-end ms-5 fs-2 p-2">
            <span>20</span>
            </div>

       </div>
           <div className=".col-lg-4 col-md-3 col-sm-6 rounded-4 border border-secondary mx-auto bg-light d-flex">
           <h3 className='fs-6 p-4 ms-0 text-start '>UNPUBLISHED GUIDES</h3>
           <div className="col text-end ms-5 fs-2 p-2">
            <span>20</span>
            </div>

             </div>
           <div className=".col-lg-4 col-md-3 col-sm-6 rounded-4 border border-secondary mx-auto bg-light d-flex">
           <h3 className='fs-6 p-4 ,ms-0 text-start '>COMPLETED GUIDES</h3>
           <div className="col text-end ms-5 fs-2 p-2">
            <span>20</span>
            </div>
                </div>
             </div>
             
         </div>

         <div className="container text-center">
         <div className="row">
            <div className="col-lg-6">
         <p className='text-start fs-2 mt-4'>Guides Progress</p>
         
         <div className="row ">
         <div className="col-lg-2 col-md-3 col-sm-6">
            <p className='fs-6 ms-0'>Completed</p>
            </div>
            <div className="col-lg-8">
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style={{width:" 25%"}}></div>
</div>
</div>
<div className="col-2">
    20/100
</div>

<div className="col-lg-2 col-md-3 col-sm-6">
            <p className='fs-6 ms-0'>Published</p>
            </div>
            <div className="col-lg-8">
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style={{width:" 25%"}}></div>
</div>
</div>
<div className="col-2">
    20/100
</div>

<div className="col-lg-2 col-md-3 col-sm-6">
            <p className='fs-6 ms-0'>Yet to Start</p>
            </div>
            <div className="col-lg-8">
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style={{width:" 25%"}}></div>
</div>
</div>
<div className="col-2">
    20/100
</div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12">
                <p className='fs-2 ms-2 text-start '>Pie-Chart</p>
                <img width={"300px"} height={"260px"} src='https://www.nicepng.com/png/detail/35-355144_the-dark-blue-part-of-this-pie-chart.png' alt=''/>
            </div>
        </div>
        </div>

        <div className='col-lg-6 mt-4 ' id='over-scroll'>
            <p className='fs-2 ms-0'>Assigned Guides</p>
            <div className="col-lg-6 col-md-8 col-sm-12 rounded-2 border border-secondary bg-dark text-light w-100 mt-1">
                <p className='fs-6 text-start p-2'>Guide 1</p>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 rounded-2 border border-secondary bg-dark text-light w-100 mt-1">
                <p className='fs-6 text-start p-2'>Guide 2</p>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 rounded-2 border border-secondary bg-dark text-light w-100 mt-1">
                <p className='fs-6 text-start p-2'>Guide 3</p>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 rounded-2 border border-secondary bg-success text-light w-100 mt-1">
                <p className='fs-6 text-start p-2'>Guide 4</p>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 rounded-2 border border-secondary bg-success text-light w-100 mt-1">
                <p className='fs-6 text-start p-2'>Guide 5</p>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 rounded-2 border border-secondary bg-success text-light w-100 mt-1">
                <p className='fs-6 text-start p-2'>Guide 6</p>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 rounded-2 border border-secondary bg-secondary text-light w-100 mt-1">
                <p className='fs-6 text-start p-2'>Guide 7</p>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 rounded-2 border border-secondary bg-secondary text-light w-100 mt-1">
                <p className='fs-6 text-start p-2'>Guide 8</p>
            </div>
            </div>
        </div>
        </div>
        
         </>
  )
}

export default Home;
