// eslint-disable-next-line no-unused-vars
import SubmittedForm from './components/Submitted'
import { useState } from 'react';

const date = new Date().toLocaleDateString()
const personalInfo = {
  firstName: 'Anna',
  lastName: 'Gladush',
  email: '********@gmail.com',
  phone: '+7909*******',
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

  // function handleLastNameChange(e) {
  //   // setPerson(...person, lastName: e.target.value);
  // }

  // const handleSubmit = () => {

  // }

  return (
    <>
    {personalInfo.school.map(school => console.log(school))}
    {console.log(personalInfo.school)}
    {personalInfo.company.map(school => console.log(school))}
      <SubmittedForm info={personalInfo}/>
    </>
  )
}

export default App
