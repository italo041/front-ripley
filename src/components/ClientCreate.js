import React, { useState } from "react";
import { toast } from "react-toastify";

export const ClientCreate = ({ setClients }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = { firstName, lastName, birthday };

    const response = await fetch(`${process.env.REACT_APP_DOMAIN}/clients`, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("Success:", response);
        if (response.statusCode === 400) {
          return toast.error(response.message);
        }
        toast.success("Done");

        setClients((prevState) => [
          {
            id: response.id,
            firstName: response.firstName,
            lastName: response.lastName,
            birthday: response.birthday,
          },
          ...prevState,
        ]);

        setFirstName("");
        setLastName("");
        setBirthday("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="my-4">
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="form-floating col-auto">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
            id="floatingFistName"
            placeholder="John"
          />
          <label htmlFor="floatingFistName">First name</label>
        </div>
        <div className="form-floating col-auto">
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
            id="floatingLastName"
            placeholder="Doe"
          />
          <label htmlFor="floatingLastName">Last Name</label>
        </div>
        <div className="form-floating col-auto">
          <input
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="form-control"
            type="date"
            id="floatingBirthday"
            placeholder="1998-10-10"
          />
          <label htmlFor="floatingBirthday">Birthday</label>
        </div>
        <button className="btn btn-primary col-auto">Submit</button>
      </form>
    </div>
  );
};
