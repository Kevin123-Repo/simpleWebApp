import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormGroup, Label, Input, Button } from "reactstrap";

const AddContactsForm = ({ handleUpdate }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      address === "" ||
      city === "" ||
      email === "" ||
      postcode === ""
    ) {
      alert("Please fill missing fields");
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstName(value);
      console.log(" New First Name = " + value);
    }
    if (name === "lastName") {
      console.log("New Last Name " + value);
      setLastName(value);
      console.log("New Last Name Value = " + lastName);
    }
    if (name === "city") {
      setCity(value);
      console.log(" New City = " + value);
    }
    if (name === "postcode") {
      setPostcode(value);
      console.log(" New Postcode = " + value);
    }
    if (name === "address") {
      setAddress(value);
      console.log(" New Address = " + value);
    }
    if (name === "email") {
      setEmail(value);
      console.log(" New Email = " + value);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    //checking format
    if (validateForm()) {
      const dataToSend = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        city: city,
        postcode: postcode,
      };
      const response = await axios.get("http://localhost:8080/contacts");
      const existingContacts = response.data;

      // Check for match
      const isDuplicate = existingContacts.find(
        (existingContacts) =>
          existingContacts.firstName === dataToSend.firstName &&
          existingContacts.lastName === dataToSend.lastName &&
          existingContacts.email === dataToSend.email &&
          existingContacts.address === dataToSend.address &&
          existingContacts.city === dataToSend.city &&
          existingContacts.postcode === dataToSend.postcode
      );

      if (isDuplicate) {
        alert("This contact already exists!");
        return;
      }
      //Posting new contact
      await axios
        .post("http://localhost:8080/contacts", dataToSend)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.error(err.message);
        });
      setAddress("");
      setCity("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPostcode("");
      navigate("/");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="inputForm-container">
      <div className="name-row">
        <div className="firstName-col">
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              type="string"
              onChange={handleChange}
            />
          </FormGroup>
        </div>

        <div className="lastName-col">
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              type="string"
              onChange={handleChange}
            />
          </FormGroup>
        </div>
      </div>
      <div class="address-row">
        <div className="address-col">
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              id="address"
              name="address"
              placeholder="Enter Address"
              type="string"
              onChange={handleChange}
            />
          </FormGroup>
        </div>
        <div className="city-col">
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              id="city"
              name="city"
              placeholder="Enter City"
              type="string"
              onChange={handleChange}
            />
          </FormGroup>
        </div>
        <div className="postcode-col">
          <FormGroup>
            <Label for="postcode">Postcode</Label>
            <Input
              id="postcode"
              name="postcode"
              placeholder="Enter Postcode"
              type="string"
              onChange={handleChange}
            />
          </FormGroup>
        </div>
      </div>
      <div className="email-row">
        <div className="email-col">
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter valid Email (e.g.abc@example.com)"
              type="email"
              onChange={handleChange}
            />
          </FormGroup>
        </div>
      </div>
      <div>
        <Button className="input-button-submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button className="input-button-cancel" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddContactsForm;
