import React from 'react'

function Education() {
  return (
    <div className="container mt-5">
      {/* <h2>Pricing</h2> */}
      <div className='row'>

        <div className='col-6'>
          <img src='media/images/education.svg' style={{width:"70%"}}/>
        </div>

        <div className='col-6'>
          <h1 className='mb-3 fs-2'>Free and open market eductaion</h1>
          <p>Varsity, the largest online stock market Education book in the world coverring everything form the basics to advanced tranding.</p>
          <a href='' style={{ textDecoration: "none" }}>Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

          <p className='mt-5'>trandingQ&A, the most active tranding and investment community in india for all your market related queries.</p>
          <a href='' style={{ textDecoration: "none" }}>TrandingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

        </div>
      </div>
    </div>
  )
}

export default Education