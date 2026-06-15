// eslint-disable no-unused-vars
import SubmittedForm from './components/Submitted'
import Form from './components/Form'
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
    main_responsibilities: '',
    date_from: date,
    date_until: date,
  } 
    setPerson(prev => ({
      ...prev,
      [name]: [...prev[name], value]
    }))
    console.log(person[name])

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
        </form>
        <form>
          <div className='education'>
            {console.log(person.school)}
            {person.school.map(school => {
              const id = school.id
              const school_name = school.school_name
              const study = school.study
              const date_from = school.date_from
              const date_until = school.date_until
              return (
                <Form type='school' key={id} id={id} handleComplexInputChange={handleComplexInputChange} name1={school_name} name2={study} date_from={date_from} date_until={date_until}/>
              )
            })}
            <button name="school" onClick={handleAdd}>Add new sk</button>
          </div>
          </form>
        <form>
            <div className='experience'>
              {person.company.map(company => {
              const id = company.id
              const company_name = company.company_name
              const position_title = company.position_title
              const responsibility = company.main_responsibilities
              const date_from = company.date_from
              const date_until = company.date_until
              return (
                <Form type='company' key={id} id={id} handleComplexInputChange={handleComplexInputChange} name1={company_name} name2={position_title} date_from={date_from} date_until={date_until} responsibility={responsibility}/>
              )
            })}
            <button name="company" onClick={handleAdd}>Add new wk</button>
            </div>
        </form>
      </div>
      <SubmittedForm info={person}/>
    </>
  )
}

export default App
