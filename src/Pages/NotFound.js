import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    className="d-flex justify-content-center align-items-center bg-light"
    style={{ minHeight: "94vh" }}
  >
    <h1>404 - Not Found!</h1>
    <Link className="mx-3"to="/">Go Home</Link>
  </div>
);

export default NotFound;
