/* eslint-disable no-unused-vars */
import { useState } from 'react';

import MainView from './components/MainView'
import Form from './components/Form'
import Customize from './components/Customize';
import icon from './assets/settings.svg'

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
  }],
  company: [{
    id: crypto.randomUUID(),
    company_name: 'None',
    position_title: 'Software Engineer',
    main_responsibilities: 'Coding',
    date_from: date,
    date_until: date,
  }]
}

function App() {
  const [person, setPerson] = useState(personalInfo)
  const [submitted, setSubmitted] = useState(false)
  const [settings, setSettings] = useState(false)

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
  
  const handleAdd = (e) => {
    e.preventDefault()
    const { name } = e.target
    const value = name === "school" ?  {
      id: crypto.randomUUID(),
      school_name: '',
      study: '',
      date_from: date,
      date_until: date
    } : {
    id: crypto.randomUUID(),
    company_name: '',
    position_title: '',
    main_responsibilities: ' ',
    date_from: date,
    date_until: date,
  } 
    setPerson(prev => ({
      ...prev,
      [name]: [...prev[name], value]
    }))
    console.log(person[name])

  }
  const handleDelete = (e) => {
    e.preventDefault()

    const {value, name} = e.target
    const filtArr = person[name].filter(exp => exp.id !== value)

    setPerson((prev => ({
      ...prev,
      [name]: filtArr
    })))

  }
  
  const handleSubmit = () => {
    setSubmitted(prev => !prev)
  }

  const handleSettings = () => {
    setSettings(prev => !prev)
  }

  return (
    <>
    <div className='customize'>
      <button className='settings' onClick={handleSettings}><img className="rotate" src={icon} alt="settings icon" height={50} width={50}/></button>
      {settings ? <Customize /> : ""}
    </div>

    {!submitted && 
      <div className='form'>
        <form>
          <h1>CV BUILDER</h1>
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
        </form>
        <form>
          <div className='education'>
            <h2>Education</h2>
            {console.log(person.school)}
            {person.school.map(school => {
              const id = school.id
              const school_name = school.school_name
              const study = school.study
              const date_from = school.date_from
              const date_until = school.date_until
              return (
                <div key={id}>
                  <Form type='school'  id={id} handleComplexInputChange={handleComplexInputChange} name1={school_name} name2={study} date_from={date_from} date_until={date_until}/>
                  <button value={id} className='delete' name="school" onClick={handleDelete}>Delete</button>
                </div>
              )
            })}
              <button className="add" name="school" onClick={handleAdd}>Add</button>
            
          </div>
        </form>
        <form>
            <div className='experience'>
              <h2>Professional Experience</h2>
              {person.company.map(company => {
              const id = company.id
              const company_name = company.company_name
              const position_title = company.position_title
              const responsibility = company.main_responsibilities
              const date_from = company.date_from
              const date_until = company.date_until
              return (
                <div key={id}>
                  <Form type='company' id={id} handleComplexInputChange={handleComplexInputChange} name1={company_name} name2={position_title} date_from={date_from} date_until={date_until} responsibility={responsibility}/>
                  <button value={id} className='delete' name="company" onClick={handleDelete}>Delete</button>
                </div>
              )
            })}
            <button className="add" name="company" onClick={handleAdd}>Add</button>
            </div>
        </form>
        <button className='submit' onClick={handleSubmit}>Submit</button>
      </div>}
        
      {submitted && (<>
        <div className='submitted-form'>
          <MainView info={person}/> 
        </div>
        <button className='submit' onClick={handleSubmit}>Edit</button>
        </>
        )}
    </>
  )
}

export default App
