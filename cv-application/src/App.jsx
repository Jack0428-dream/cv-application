import { useState } from 'react'
import './App.css'

function Button (props) {
  const buttonStyle = {
    backgroundImage: props.color,
    fontSize: props.fontSize + 'px'
  }

  return (
    <button style={buttonStyle}>{props.text}</button>
  )
}

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [number, setNumber] = useState('');

  const fullName = firstName + ' ' + lastName;

  function firstNameChange(e) {
    setFirstName(e.target.value);
  }

  function lastNameChange(e) {
    setLastName(e.target.value);
  }

  function emailChange(e) {
    setMail(e.target.value);
  }

  function telChange(e) {
    setNumber(e.target.value);
  }

  const generalInfo = [{name:fullName, email:mail, tel: number}];

  function EducationList(items) {
    return (
      <>
      {items.map((item) => {
        <div>
          <h2>School Name: {item.name}</h2>
          <h2>Major/Study : {item.study}</h2>
          <h2>Date: {item.date}</h2>
        </div>
      })}
      </>
    )
  }

  const educationInfo = [];
  const [experience, setExperience] = useState(initialItems);

  function addEducation() {

  }

  const 
  
  return (
    <>
    <section>
      <h1>General Information</h1>
    <div className="header">
        <div className="namesec">
            <div>
                <label >First Name:</label>
                <input onChange={firstNameChange}/>
            </div>

            <div>
                <label>Last Name:</label>
                <input onChange={lastNameChange}/>
            </div>

            <h2>{fullName}</h2>
        </div>

        <div className="emailsec">
            <label>E-mail Address: </label>
            <input type="email" onChange={emailChange}/>

            <h2>{mail}</h2>
        </div>

        <div className="telsec">
            <label>Phone Number: </label>
            <input type="tel" onChange={telChange}/>

            <h2>{number}</h2>
        </div>
    </div>
    </section>

    <section>
      <h1>Educational Experience</h1>

      <div>
        <div>
          <label>School Name: </label>
          <input type="text" />
        </div>
        
        <div>
          <label>Title of Study: </label>
          <input type="text" />
        </div>

        <div>
          <label>Date of Study: </label>

          <div>
            <label>From</label>
            <input type="date" />
          </div>

          <div>
            <label>Until</label>
            <input type="date" />
          </div>
        </div>

        <Button text="Add" fontSize="15" className="btn"/>
      </div>
    </section>

    <section>
      <h1>Working Experience</h1>
      <div>

        <div>
          <label>Company Name: </label>
          <input type="text" />
        </div>

        <div>
          <label>Position Title: </label>
          <input type="text" />
        </div>

        <div>
          <label>Main Responsibilities of you jobs: </label>
          <textarea />
        </div>


        <div>
          <label>Date of employment: </label>

          <div>
            <label>From</label>
            <input type="date" />
          </div>

          <div>
            <label>Until</label>
            <input type="date" />
          </div>

        </div>

        <Button text="Add" fontSize="15"/>
      </div>
    </section>

    <Button text="Submit" fontSize="20"/>
    </>
  )
}

export default App
