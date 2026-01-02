import React from 'react'

function Pricing() {
    return (
        <div className="container">
            {/* <h2>Pricing</h2> */}
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                    <p>we pioneered the concept of discount broking and price transpency in india. Flat fees no hidden charges.</p>
                    <a href='' style={{ textDecoration: "none" }}>See Pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
                <div className='col-2' ></div>
                <div className='col-6  mb-5'>
                    <div className='row text-center'>
                        <div className='col border p-3'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and <br />direct  mutual funds</p>
                        </div>
                        <div className='col border p-3'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Industry and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing