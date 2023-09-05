import React from 'react'
import './card.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Card = () => {
  return (
    <div className="card_container">
    <div className="container">
            <div className="cards">
                <div className="card shadow col-md-4 col-sm-2">
                    <div className="imgse ">
                    <img className='cardimg img-fluid' src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png" alt="" />
                    </div>
                     <div className="desc">
                     <h5 >Instant Video Consultation</h5>
                      <span>connect with 60 secs</span>
                     </div>
                   
                </div>

                <div className="card shadow col-md-4 col-sm-2">
                    <div className="imgse" style={{backgroundColor:'cyan'}}>
                    <img className='cardimg  img-fluid' src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png" alt=""  />
                    </div>
                     <div className="desc">
                     <h5 >Find Doctors Near You</h5>
                      <span>confirmed apoointments</span>
                     </div>
                   
                </div>

                <div className="card shadow col-md-4 col-sm-4 col-sm-2">
                    <div className="imgse" style={{backgroundColor:'cyan'}}>
                    <img className='cardimg img-fluid' src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png" alt="" />
                    </div>
                     <div className="desc">
                     <h5 >Medicines</h5>
                      <span>Essential at your doorstep</span>
                     </div>
                   
                </div>

                <div className="card shadow col-md-4 col-sm-2">
                    <div className="imgse">
                    <img className='cardimg img-fluid' src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png" alt="" />
                    </div>
                     <div className="desc">
                     <h5 >Lab Tests</h5>
                      <span>sample pickup at your home</span>
                     </div>
                   
                </div>


                <div className="card shadow col-md-4 col-sm-2">
                    <div className="imgse">
                    <img className='cardimg img-fluid' src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png" alt="" />
                    </div>
                     <div className="desc">
                     <h5 >Surgeries</h5>
                      <span>safe and trusted surgery centers</span>
                     </div>
                   
                </div>
            </div>
       
    </div>
</div>

  )
}

export default Card