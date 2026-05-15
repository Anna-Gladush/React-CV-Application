const Form = () => {
  return (
        <form>
      <div className='general'>
        {/* name, email, phone */}
        <label>First Name: <input type="text" value={firstName} onChange={handleFirstNameChange}/></label>
        <label>Last Name: <input type="text" value={lastName} onChange={handleLastNameChange}/></label>
        <label>Age: <input type="number" value={age} onChange={handleAgeChange}/></label>
        <label>E-mail: <input type="text" value={lastName} onChange={handleLastNameChange}/></label>
        <label>Phone: <input type="text" value={lastName} onChange={handleLastNameChange}/></label>

      </div>
      <div className='education'>
        {/* school name, title of study, field of study */}
        <label>School Name: <input type="text" value={firstName} onChange={handleFirstNameChange}/></label>
        <label>Title of Study: <input type="text" value={lastName} onChange={handleLastNameChange}/></label>
        <label>Date of Study: <input type="text" value={age} onChange={handleFirstNameChange}/></label>
      </div>
        {/* company name, position title, main responsibilities of your jobs, date from and until */}
      <div className='experience'>
        <label>Company Name: <input type="text" value={firstName} onChange={handleFirstNameChange}/></label>
        <label>Position Title: <input type="text" value={lastName} onChange={handleLastNameChange}/></label>
        <label>Main Responsibilities of Your Job: <input type="text" value={age} onChange={handleFirstNameChange}/></label>
        <label>From: <input type="date" value={age} onChange={handleFirstNameChange}/></label>
        <label>To: <input type="date" value={age} onChange={handleFirstNameChange}/></label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}