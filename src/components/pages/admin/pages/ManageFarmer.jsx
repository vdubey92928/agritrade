import React, { useEffect, useState } from "react";
import { userApiService } from "../../../../api/userApi";
import { Table, Container, Spinner, Alert } from "react-bootstrap";

const ManageFarmer = () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    userApiService.getAllFarmers()
      .then((data) => {
        setFarmers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch farmers");
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h2>Farmers : </h2>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && farmers.length > 0 && (
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
            {farmers.map((farmer) => (
              <tr key={farmer.id}>
                <td>{farmer.id}</td>
                <td>{farmer.name}</td>
                <td>{farmer.email}</td>
                <td>{farmer.mobile || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ManageFarmer;
