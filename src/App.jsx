// eslint-disable no-unused-vars
import SubmittedForm from './components/Submitted'
// import Form from './components/Form'
import { useState } from 'react';

const date = '2026-05-27'
const personalInfo = {
  person_name: 'Anna Gladush',
  email: '********@gmail.com',
  phone: '+44 3245 5521 5521',
  adress: 'Honolulu, HI',
  school: [{
    id: crypto.randomUUID(),
    school_name: 'BFU',
    study: 'Bioengineering and Bioinformatics',
    date_from: date,
    date_until: date,
  }, {
    id: crypto.randomUUID(),
    school_name: 'BFU',
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
  const [person, setPerson] = useState(personalInfo)

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPerson({
      ...person,
      [name]: value,
    });
  }

  const handleComplexInputChange = (e, id) => {
    const {name, className, value} = e.target
    // console.log(name, className, value, id, person[className])
    setPerson({
      ...person,
      [className]: person[className].map(item => 
        item.id === id ? 
        {...item, [name]: value} : item
      )
    })
  }

  return (
    <>
      <div>
        <form>
          <div className='personal-information'>
            <label>Full Name<span className='asterisk'>*</span>: 
              <input type="text" value={person.person_name} name='person_name' onChange={handleInputChange}/>
            </label>
            <label>E-mail<span className='asterisk'>*</span>: 
              <input type="email" value={person.email} name='email' onChange={handleInputChange}/>
            </label>
            <label>Phone<span className='asterisk'>*</span>: 
              <input type="tel" value={person.phone} name='phone' onChange={handleInputChange}/>
            </label>
            <label>Adress<span className='asterisk'>*</span>: 
              <input type="text" value={person.adress} name='adress' onChange={handleInputChange}/>
            </label>
          </div>
          <div className='education'>
            {person.school.map(school => {
              const id = school.id
              // console.log(id)
              // console.log(person.school)
              return (
                <div className='school' key={id} id={id}>
                  <label>School: <input type="text" value={school.school_name} className='school' name='school_name' onChange={(e) => {handleComplexInputChange(e, id)}}/></label>
                  <label>Degree: <input type="text" value={school.study} className='school' name='study' onChange={(e) => {handleComplexInputChange(e, id)}}/></label>
                  <label>From: <input type="date" value={school.date_from} className='school' name='date_from' onChange={(e) => {handleComplexInputChange(e, id)}}/></label>
                  <label>To: <input type="date" value={school.date_until} className='school' name='date_until' onChange={(e) => {handleComplexInputChange(e, id)}}/></label>
                </div>
              )
            })}
            <button className='add-school'>Add new sk</button>
          </div>
            <div className='experience'>
              {person.company.map(company => {
              const id = company.id
              // console.log(id)
              // console.log(person.company)
              return (
                <div className='school' key={id} id={id}>
                  <label>Company Name: <input type="text" value={company.company_name} className='company' name='company_name' onChange={(e) => {handleComplexInputChange(e, id)}}/></label>
                  <label>Position Title: <input type="text" value={company.position_title} className='company' name='position_title' onChange={(e) => {handleComplexInputChange(e, id)}}/></label>
                  <label>Main Responsibilities of Your Job:  <input type="text" value={company.main_responsibilities} className='company' name='main_responsibilities' onChange={(e) => {handleComplexInputChange(e, id)}}/></label>
                  <label>From: <input type="date" value={company.date_from} className='company' name='date_from' onChange={(e) => {handleComplexInputChange(e, id)}}/></label>
                  <label>To: <input type="date" value={company.date_until} className='company' name='date_until' onChange={(e) => {handleComplexInputChange(e, id)}}/></label>
                </div>
              )
            })}
            <button className='add-work'>Add new wk</button>
            </div>
        </form>
      </div>
      <SubmittedForm info={person}/>
    </>
  )
}

export default App
