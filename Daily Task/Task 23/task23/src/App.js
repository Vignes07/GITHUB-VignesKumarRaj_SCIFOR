import "./App.css";
import Person from "./Person";
import { useState } from "react";

function App() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(25);
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [mobile, setMobile] = useState("1234567890");
  const [city, setCity] = useState("New York");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.Name.value);
    setAge(e.target.Age.value);
    setEmail(e.target.Email.value);
    setMobile(e.target.Mobile.value);
    setCity(e.target.City.value);
  };

  return (
    <div>
      <h1>Person Information</h1>
      <Person name={name} age={age} email={email} mobile={mobile} city={city} />
      <form onSubmit={handleSubmit}>
        <input type="text" name="Name" placeholder="Name" />
        <input type="tele" name="Age" placeholder="Age" />
        <input type="email" name="Email" placeholder="Email" />
        <input type="tele" name="Mobile" placeholder="Mobile" />
        <input type="text" name="City" placeholder="City" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
