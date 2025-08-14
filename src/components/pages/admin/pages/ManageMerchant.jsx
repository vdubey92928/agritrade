import React, { useEffect, useState } from "react";
import { getAllMerchants } from "../../../../../src/api/userApi";
import { Table, Container, Spinner, Alert } from "react-bootstrap";

const ManageMerchant = () => {
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllMerchants()
      .then((data) => {
        setMerchants(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch merchants");
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h2>Manage Merchants</h2>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && merchants.length > 0 && (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {merchants.map((merchant) => (
              <tr key={merchant.id}>
                <td>{merchant.id}</td>
                <td>{merchant.name}</td>
                <td>{merchant.email}</td>
                <td>{merchant.mobile || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ManageMerchant;
