import { useState } from "react";

const FormHandlingConcept = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  console.log(formData);
  // const[firstName,setFirstName]=useState("");
  // const[lastName,setLastName]=useState("")
  // const changefirstNameHandler =(e)=>{
  //     setFirstName(e.target.value);
  //     console.log(e.target.value);
  // }
  // const changeLastNameHandler =(e)=>{
  //     setLastName(e.target.value);
  //     console.log(e.target.value);
  // }

  const changeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checked" ? checked : value,
      };
    });
  };
  const submitHandler = (e) => {
e.preventDefault();
// print
console.log(formData)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.LastName}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          type="text"
          placeholder="enter your comment here"
          onChange={changeHandler}
          name="comment"
          value={formData.comment}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am i visible ?</label>
        <br />
        <br />
        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="online-Mode"
            id="online-Mode"
            checked={formData.mode === "online-Mode"}
          />
          <label htmlFor="online-Mode">Online mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="offline-Mode"
            id="offline-Mode"
            checked={formData.mode === "offline-Mode"}
          />
          <label htmlFor="offline-Mode">Offline mode</label>
          <br />
        </fieldset>

        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="fortuner">Fortuner</option>
          <option value="Range Rover">Range Rover</option>
          <option value="defender">Defender</option>
          <option value="AUDI">AUDI</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Thar">Thar</option>
        </select>
        <label htmlFor="favCar">Tell me your Fav car ?</label>
     <button>Submit</button>

     {/* <input type="submit" value="submit"/> */}
     
      </form>
    </div>
  );
};

export default FormHandlingConcept;
