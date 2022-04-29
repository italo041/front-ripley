import React from "react";

export const ClientsList = ({ clients }) => {
  const renderedClients = clients.map((client) => {
    return (
      <tr key={client.id}>
        <th scope="row">{client.id}</th>
        <td>{client.firstName}</td>
        <td>{client.lastName}</td>
        <td>{new Date(client.birthday).toISOString().split("T")[0]}</td>
      </tr>
    );
  });

  return (
    <table className="table my-3">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Birthday</th>
        </tr>
      </thead>
      <tbody>{renderedClients}</tbody>
    </table>
  );
};
