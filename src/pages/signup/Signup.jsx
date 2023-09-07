import { useState } from 'react';
import './signup.css';
const Signup = () => {

    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCountryCode, setSelectedCountryCode] = useState('+91');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
    
      
        console.log('Submitted Data:', { fullName, mobileNumber, password });
    

        setFullName('');
        setMobileNumber('');
        setPassword('');
      };
      const toggleDropdown = () => {
        console.log('Toggle Dropdown called');
        setShowDropdown(!showDropdown);
      };
      const handleDropdownSelect = (countryCode) => {

        setSelectedCountryCode(countryCode);
        toggleDropdown(); 
      };
  return (
    <div className="container">
   
   <div className="signupcontent">
    <div className="signupImg">
        <img src="https://accounts.practo.com/static/images/illustration.png" alt="" />
    </div>
    <div className='border'>
      <div className="top">
        <span className='topspan'>Join Practo</span>
        <siv className="topright">
            <span>are you a doctor?<b className='boldfont'>register here?</b></span>
        </siv>
      </div>
      <div className="form">
      <form onSubmit={handleSubmit}>

        <div className='formfirst'>
        <label htmlFor="fullName">Full Name:</label>
        <input
        className='md-12'
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder='full name'
          required
        />
        <br />


        <label htmlFor="mobileNumber " >Mobile Number:</label>
        <div className="mobile-input mt-1">
          <span  className="country-code"
              onClick={toggleDropdown}>
                <span> {selectedCountryCode}</span>  <span> &#9660;</span></span>

{showDropdown && (
              <ul className="dropdown-menu">
                <li onClick={() => handleDropdownSelect('+91(IND)')}>+91(IND)</li>
                <li onClick={() => handleDropdownSelect('+1(USA)')}>+1(USA)</li>
                <li onClick={() => handleDropdownSelect('+54(ARG)')}>+54(ARG)</li>
                <li onClick={() => handleDropdownSelect('+56(CHL)')}>+56(CHL)</li>
                <li onClick={() => handleDropdownSelect('+60(MYS)')}>+60(MYS)</li>
                <li onClick={() => handleDropdownSelect('+97(BH3)')}>+97(BH3)</li>
          
              </ul>
            )}
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            placeholder='Mobile Number'
          />
        </div>
        <br />


        <label htmlFor="password">Create Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='Create Password'
        />
        <br />
        </div>
     
 
        <button type="submit" className='btnsubmit'>Send Otp</button>
      </form>
      </div>
   
    </div>
     


   </div>
  
   
  </div>
  )
}

export default Signup