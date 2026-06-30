const Form = ({type, id, handleComplexInputChange, name1, name2, date_from, date_until, responsibility}) => {
  return (
    <>
      <div className={type} key={id} id={id}>
        <label>{type === 'school' ? 'School: ' : 'Company Name: ' }<input type="text" value={name1} className={type === 'school' ? 'school' : 'company'} name={type === 'school' ? 'school_name' : 'company_name'} onChange={(e) => {handleComplexInputChange(e, id)}}/></label>
        <label>Degree: <input type="text" value={name2} className={type === 'school' ? 'school' : 'company'} name={type === 'school' ? 'study' : 'position_title'} onChange={(e) => {handleComplexInputChange(e, id)}}/></label>

        { type === 'school' ? "" : <label>Main Responsibilities of Your Job:  <textarea type="textarea" value={responsibility} className='company' name='main_responsibilities' onChange={(e) => {handleComplexInputChange(e, id)}}></textarea></label> }

        <label>From: <input type="date" value={date_from} className={type === 'school' ? 'school' : 'company'} name='date_from' onChange={(e) => {handleComplexInputChange(e, id)}}/></label>
        <label>To: <input type="date" value={date_until} className={type === 'school' ? 'school' : 'company'} name='date_until' onChange={(e) => {handleComplexInputChange(e, id)}}/></label>
      </div>
    </>
  )
}

export default Form;