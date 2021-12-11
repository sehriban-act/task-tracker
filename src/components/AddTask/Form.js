import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Task</label><br/>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Date & Time </label><br/>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>add task</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}> 
              <h4>
                {firstName} {email}
              </h4>
              <button onClick={() => removeItem(id)}>X</button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
