import React from "react";
import ContactsBoard from "./viewContacts/ContactsBoard"



const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage-heading">Welcome to your Contacts Manager</h1>
      <p className="homepare-paragraph">
        Easily manage your contacts, add new addresses, and keep your address book organised.
      </p>
      <ContactsBoard />
    </div>

  );
};

export default HomePage;
