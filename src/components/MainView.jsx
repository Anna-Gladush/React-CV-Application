import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import mapIcon from "../assets/map.svg";

const MainView = ({info}) => {
  return (
    <div className="submitted-form">
      <div className='general-information'>
        <h1>{info.person_name}</h1>
        <div className="contact-info">
          <div>
            <img src={emailIcon} alt="mail icon" width={16}/>
            <p>{info.email}</p>
          </div>
          <div>
            <img src={phoneIcon} alt="phone icon" width={16}/>
            <p>{info.phone}</p>
          </div>
          <div>
            <img src={mapIcon} alt="map icon" width={16}/>
            <p>{info.adress}</p>
          </div>
        </div>
      </div>
      <div className="sections">
        <div className="educational-experience">
          <h3 className="header">Education</h3>
          {info.school.map((item) => {
            return (
              <div key={item.id}>
                <div className="date">
                  <p>{item.date_from} — {item.date_until}</p>
                </div>
                <div className="experience-info"></div>
                <p>{item.school_name}</p>
                <p>{item.study}</p>

              </div>
            )
          })}
        </div>
        <div className="practical-experience">
          <h3 className="header">Professional Experience</h3>
          { info.company.map((item) => {
            return (
              <div key={item.id}>
                <div className="date">
                  <p>{item.date_from} — {item.date_until}</p>
                </div>
                <div className="experience-info">
                  <p>{item.company_name}</p>
                  <p>{item.position_title}</p>
                  <p>{item.main_responsibilities}</p>
                </div>
              </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default MainView