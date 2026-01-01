import React from 'react'

function Awards() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src='media/images/largestBroker.svg' alt='Largest Broker' />
        </div>
        <div className='col-6 p-5 mt-5'>

          <h1>Largest stock broker in India</h1>
          <p className='mb-5'>2+ million client contribute to over 15% of all retail order volume in india daily by tranding and investing in:</p>
          {/* <p></p> */}

          <div className='row'>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Future and options</p>
                </li>

                <li>
                  <p>Commodity derivatives</p>
                </li>

                <li>
                  <p>Currency derivatives</p>
                </li>

              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Stock & IPOs</p>
                </li>

                <li>
                  <p>Direct mutal funds</p>
                </li>

                <li>
                  <p>Bond and Govt. Securities</p>
                </li>

              </ul>
            </div>
          </div>

          <img src='media/images/pressLogos.png'style={{width: "90%"}} />

        </div>
      </div>
    </div>
  )
}

export default Awards