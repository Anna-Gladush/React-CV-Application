// eslint-disable no-unused-vars
import SubmittedForm from './components/Submitted'
// import Form from './components/Form'
import { useState } from 'react';

const date = new Date().toLocaleDateString()
const personalInfo = {
  person_name: 'Anna Gladush',
  email: '********@gmail.com',
  phone: '+44 3245 5521 5521',
  adress: 'Honolulu, HI',
  school: [{
    id: crypto.randomUUID(),
    name: 'BFU',
    study: 'Bioengineering and Bioinformatics',
    date_from: date,
    date_until: date,
  }, {
    id: crypto.randomUUID(),
    name: 'BFU',
    study: 'Bioengineering and Bioinformatics',
    date_from: date,
    date_until: date,
  }],
  company: [{
    id: crypto.randomUUID(),
    company_name: 'None',
    position_title: 'Software Engineer',
    main_responsibilities: 'Coding',
    date_from: date,
    date_until: date,
  }, {
    id: crypto.randomUUID(),
    company_name: 'None',
    position_title: 'Software Engineer',
    main_responsibilities: 'Coding',
    date_from: date,
    date_until: date,
  } ]
}

function App() {
  // const [isSent, setIsSent] = useState(false);
  // const [person, setPerson] = useState(personalInfo);



  // const handleSubmit = () => {
  // }

  const [person, setPerson] = useState(personalInfo)

  function handleNameChange(e) {
    setPerson({...person, person_name: e.target.value});
  }
  function handleEmailChange(e) {
    setPerson({...person, email: e.target.value});
  }  
  function handlePhoneChange(e) {
    setPerson({...person, phone: e.target.value});
  }
  function handleAdressChange(e) {
    setPerson({...person, adress: e.target.value});
  }
  // eslint-disable-next-line no-unused-vars
  function handleDateChange(e) {
    // setPerson({...person, person.school[0].date_from: e.target.value});
  }
  return (
    <>
      <div>
        <form>
          <div className='personal-information'>
            <label>Full Name<span className='asterisk'>*</span>: <input type="text" value={person.person_name} onChange={handleNameChange}/></label>
            <label>E-mail<span className='asterisk'>*</span>: <input type="email" value={person.email} onChange={handleEmailChange}/></label>
            <label>Phone<span className='asterisk'>*</span>: <input type="tel" value={person.phone} onChange={handlePhoneChange}/></label>
            <label>Adress<span className='asterisk'>*</span>: <input type="text" value={person.adress} onChange={handleAdressChange}/></label>
          </div>
          <div className='education'>
            {/* school name, title of study, field of study */}
            {/* <label>School: <input type="text" value={person.school} onChange={handleFirstNameChange}/></label>
            <label>Degree: <input type="text" value={lastName} onChange={handleLastNameChange}/></label>
            <label>Start Date: <input type="text" value={person.school.date_from} onChange={handleFirstNameChange}/></label>
            <label>End Date: <input type="text" value={person.school.date_from} onChange={handleFirstNameChange}/></label>*/}
            <label>Location: <input type="text" value={person.school[0].date_from} onChange={handleDateChange}/></label> 
            <button className='add-school'>Add new sk</button>
          </div>
              {/* company name, position title, main responsibilities of your jobs, date from and until */}
            <div className='experience'>
              {/* <label>Company Name: <input type="text" value={firstName} onChange={handleFirstNameChange}/></label>
              <label>Position Title: <input type="text" value={lastName} onChange={handleLastNameChange}/></label>
              <label>Main Responsibilities of Your Job: <input type="text" value={age} onChange={handleFirstNameChange}/></label>
              <label>From: <input type="date" value={age} onChange={handleFirstNameChange}/></label>
              <label>To: <input type="date" value={age} onChange={handleFirstNameChange}/></label> */}
            <button className='add-work'>Add new wk</button>

            </div>
        </form>
      </div>
      <SubmittedForm info={person}/>
    </>
  )
}

export default App
