import React, { useEffect, useState } from "react";
import { AverageAges } from "../components/AverageAges";
import { ClientCreate } from "../components/ClientCreate";
import { ClientsList } from "../components/ClientsList";
import ReactPaginate from "react-paginate";

export const Clients = () => {
  const [clients, setClients] = useState([]);
  const [pageCount, setPageCount] = useState();

  let limit = 5;

  const fetchClients = async (offset = 1) => {
    try {
      const resp = await fetch(
        `${process.env.REACT_APP_DOMAIN}/clients?limit=${limit}&offset=${offset}`
      );
      const clients = await resp.json();
      console.log(clients.length);
      setPageCount(Math.ceil((clients.length + 1) / limit));
      setClients(clients);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handlePageClick = async (data) => {
    let offset = data.selected + 1;
    await fetchClients(offset);
  };

  return (
    <div className="container my-3">
      <div className="d-flex justify-content-between">
        <div className="fs-1">Clients</div>
        <AverageAges clients={clients} />
      </div>
      <ClientCreate setClients={setClients} />
      <ClientsList clients={clients} />
      <ReactPaginate
        previousLabel={"previus"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-link"}
        nextClassName={"page-link"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};
