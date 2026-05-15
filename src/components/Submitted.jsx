const SubmittedForm = ({info}) => {
  return (
  <>
    <div class='general-information'>
      <img src="profile.svg" alt="profile icon" width={256} height={256}/>
      <h2>{info.firstName + " " + info.lastName}</h2>
      <div>
        <p>{info.email}</p>
        <p>{info.phone}</p>
      </div>
    </div>
    <div className="educational-experience">
      {info.school.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.study}</p>
            <p>{item.date_from}</p>
            <p>{item.date_until}</p>
          </div>
        )
      })}
    </div>
    <div className="practical-experience">
     { info.company.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.company_name}</p>
            <p>{item.position_title}</p>
            <p>{item.main_responsibilities}</p>
            <p>{item.date_from}</p>
            <p>{item.date_until}</p>
          </div>)
      })}

    </div>
  </>
  )
}

export default SubmittedForm