import React from 'react'
import './down.css' 

const Down = () => {
  return (
    <div className="container mt-5 bg-variant">
        <div className="row">
            <div className="down">
             
             
                <div className="imgdown">
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="" />
                </div>


                <div className="contdown">
                    <div className="contdownfirst">
                    <h4>Download the Practo app</h4>
                    <p>Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, 
                        available 24/7, from the comfort of your home.</p>
                    </div>
                 <div className="contdownsecond mt-5">
                    <span>Get the link to download the app</span>
                    <div className="cdi mt-3">
                        <div className="border3">
                            <div className="border4">+91</div>
                            <input type="text"  style={{ outline: 'none', padding: '10px' }}/>
                        </div>
                        <button>Send SMS</button>
                    </div>
                    <div className="cdib mt-4">
                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png" alt="" />
                       <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png" alt="" />
                    </div>
                 </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Down