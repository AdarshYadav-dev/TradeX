import React from 'react'

function stats() {
    return (
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2'>Trust with confidence</h1>

                    <h2 className='fs-4 mb-5'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore Customer Trust platform with $ 3.5+ lakh crore worth of equity investments</p>

                    <h2 className='fs-4'>No Spam or grimmicks</h2>
                    <p className='text-muted'>No grimmicks, span, "gamification", or annoying push notification. High quality apps that you use at your pace, the way you like.</p>

                    <h2 className='fs-4'>The Platform Universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investment in 30+ fintech startups offer you tailored services. specific to your needs.</p>

                    <h2 className='fs-4'>Do better wiht money</h2>
                    <p className='text-muted'>with initiatives like Nudge and kill switch , we don't just facilitate, transaction, but activerly help you do better with your money.</p>
                </div>

                <div className='col-6 p-5'>

                    <img src='media/images/ecosystem.png' style={{ width: "90%" }} />

                    <div className='text-center'>
                        <a href='' className='mx-5' style={{ textDecoration: "none" }}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{ textDecoration: "none" }}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default stats