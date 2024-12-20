function Person({ name, age, email, mobile, city }) {
  return (
    <div className="information">
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>email: {email}</h3>
      <h3>Mobile: {mobile}</h3>
      <h3>City: {city}</h3>
    </div>
  );
}

export default Person;
