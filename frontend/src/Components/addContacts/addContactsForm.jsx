import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

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
        (contact) =>
          contact.firstName === dataToSend.firstName &&
          contact.lastName === dataToSend.lastName &&
          contact.email === dataToSend.email &&
          contact.address === dataToSend.address &&
          contact.city === dataToSend.city &&
          contact.postcode === dataToSend.postcode
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

  return (
    <Form className="addContacts-form" onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="firstName" sm={1}>
          First Name
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="lastName" sm={1}>
          Last Name
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="address" sm={1}>
          Address
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="Address"
            id="Address"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="city" sm={1}>
          City
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="city"
            id="city"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="postcode" sm={1}>
          Postcode
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="postcode"
            id="postcode"
            placeholder="Enter Postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={1}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default AddContactsForm;
