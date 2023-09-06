import React, { useEffect, useRef, useState } from 'react'
import './card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import List from '../list/List';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'


const Card = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const cardWidth = 280; // Adjust this to match the width of your cards
  let totalSlides = 5;

  useEffect(() => {
    const container = listRef.current;
    totalSlides = Math.ceil(container.scrollWidth / cardWidth);
  }, []);

  // const handleClick = (direction) => {
  //   setIsMoved(true);
  //   const container = listRef.current;
    
  //   if (direction === 'left' && slideNumber > 0) {
  //     setSlideNumber(slideNumber - 1);
  //     const newTranslate = slideNumber * cardWidth - cardWidth;
  //     container.style.transform = `translateX(-${newTranslate}px)`;
  //   }

  //   if (direction === 'right' && slideNumber < 2.5) { // Assuming you have 3.5 slides
  //     setSlideNumber(slideNumber + 1);
  //     const newTranslate = slideNumber * cardWidth + cardWidth;
  //     container.style.transform = `translateX(-${newTranslate}px)`;
  //   }
  // };
  const handleClick = (direction) => {
    setIsMoved(true);
    const container = listRef.current;

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      const newTranslate = (slideNumber - 1) * cardWidth;
      container.style.transform = `translateX(-${newTranslate}px)`;
    }

    if (direction === 'right' && slideNumber < totalSlides - 1) {
      setSlideNumber(slideNumber + 1);
      const newTranslate = (slideNumber + 1) * cardWidth;
      container.style.transform = `translateX(-${newTranslate}px)`;
    }
  };

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
         

         <div className="consult">
          <div className="topdesc">
            <div className="topdescleft">
              <h1>Consult top doctors online for any health concern</h1>
              <span>Private online consultations with verified doctors in all specialists</span>
            </div>
            <div className="topdescright">
              <button>View all specialities</button>
            </div>
          </div>
          <div className="dowdesc">
            <div className="dowdesc_card">
              <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" alt="" />
              <span className='para2'>period doubts or Pregnancy</span>
              <span className='para3'>Consult Now</span>
            </div>


            <div className="dowdesc_card">
              <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png" alt="" />
              <span className='para2'>period doubts or Pregnancy</span>
              <span className='para3'>Consult Now</span>
            </div>
            <div className="dowdesc_card">
              <img src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" alt="" />
              <span className='para2'>period doubts or Pregnancy</span>
              <span className='para3'>Consult Now</span>
            </div>

            <div className="dowdesc_card">
              <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png" alt="" />
              <span className='para2'>period doubts or Pregnancy</span>
              <span className='para3'>Consult Now</span>
            </div>
            <div className="dowdesc_card">
              <img src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg" alt="" />
              <span className='para2'>period doubts or Pregnancy</span>
              <span className='para3'>Consult Now</span>
            </div>

            <div className="dowdesc_card">
              <img src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png" alt="" />
              <span className='para2'>period doubts or Pregnancy</span>
              <span className='para3'>Consult Now</span>
            </div>
          </div>
         </div>
 
        <div className="book">
          <h3>Book an appointment for an in-clinic consultation</h3>
         <span>Find experienced doctors across all specialties</span>
        
        <div className="list">
       <div className="wrapper">
       <BsArrowLeftCircle  
        className="sliderArrow left" onClick={()=>handleClick("left")}
        style={{ display: !isMoved && "none" }}
       />
       <div className="container1" ref={listRef}>
          <List/>
         


         
       </div>
       <BsArrowRightCircle  
        className="sliderArrow right"onClick={()=>handleClick("right")}

       />
         
       </div>
       

        </div>
        </div>

    </div>
</div>

  )
}

export default Card