import React from 'react'
import './ads.css';
const Ads = () => {
  return (
   <div className="container">
    <div className="row">
        <div className="line"></div>
        <div className="content mt-5">
            <div className="adleft">
             <h2>Read top articles from health experts</h2>
             <span className='mb-3'>Health articles that keep you informed about good health practices and achieve your goals.</span>
             <button>See all articles</button>
            </div>
            <div className="adright">
                <div className="first">
                    <img src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910" alt="" />
                    <span className="adrighthead ">CORANAVIRUS</span>
                    <span className="adrightheadpara">12 Coronavirus Myths and Facts That You Should Be Aware Of</span>
                    <span>Dr. Diana Borgio</span>
                </div>
                <div className="first">
                    <img src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c" alt="" />
                    <span className="adrighthead">CORANAVIRUS</span>
                    <span className="adrightheadpara">12 Coronavirus Myths and Facts That You Should Be Aware Of</span>
                    <span>Dr. Diana Borgio</span>
                </div>
              
            </div>
        </div>
        <div className="line mt-5"></div>
    </div>
   </div>
  )
}

export default Ads