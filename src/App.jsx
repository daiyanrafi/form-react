import { useState } from "react";


const App = () => {

const [FromObj, setFromObj] = useState({ fName: "", lName: "", city: "", gender: "" });

const onHandlerChange = (property, value) => {
  setFromObj(prevObj=>({
  ...prevObj,
  [property]: value
}))
}

const submitForm = (e)=>{
  e.preventDefault();
  console.log(FromObj);
  // alert(JSON.stringify(FromObj));
}

  return (
    <div className="container">

      <form onSubmit={submitForm}>
        <input onChange={(e)=>{onHandlerChange("fName",e.target.value)}} value={FromObj.fName} placeholder="First Name"/><br/>
        <input onChange={(e)=>{onHandlerChange("lName",e.target.value)}} value={FromObj.lName} placeholder="Last Name"/><br/>
        <select onChange={(e)=>{onHandlerChange("city",e.target.value)}} value={FromObj.city}>
          <option value="">Choose City</option>
          <option value="1">Mumbai</option>
          <option value="2">Pune</option>
          <option value="3">Delhi</option>
        </select>
        <br/>
        <input onChange={()=>{onHandlerChange("gender", 'Male')}} checked={FromObj.gender==="Male"} type="radio" name="gender"/>Male
        <input onChange={()=>{onHandlerChange("gender", 'Female')}} checked={FromObj.gender==="Female"} type="radio" name="gender"/>Female
        <br/>
        <button type="Submit">Submit</button>
      </form>
      
    </div>
  );
};

export default App;