import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Image } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import agriTradeLogo from "../../assets/images/AgriTradeLogo.png";

const Product = () => {
  const thumbnails = [
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100"
  ];

  const [mainImage, setMainImage] = useState(thumbnails[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleThumbnailClick = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  return (
    <Container fluid className="p-4">
      <Row>
        {/* Left Section */}
        <Col md={6} className="text-center">
          <Image src={agriTradeLogo} fluid rounded className="border mb-3 w-50 h-75"  />
          <div className="d-flex justify-content-center align-items-center">
            <Button
              variant="light"
              className="me-2"
              onClick={() =>
                setMainImage(
                  thumbnails[
                    (thumbnails.indexOf(mainImage) - 1 + thumbnails.length) %
                      thumbnails.length
                  ]
                )
              }
            >
              &lt;
            </Button>
            {thumbnails.map((thumb, idx) => (
              <Image
                key={idx}
                src={agriTradeLogo}
                thumbnail
                className="mx-1"
                style={{ width: "70px", cursor: "pointer" }}
                onClick={() => handleThumbnailClick(thumb)}
              />
            ))}
            <Button
              variant="light"
              className="ms-2"
              onClick={() =>
                setMainImage(
                  thumbnails[
                    (thumbnails.indexOf(mainImage) + 1) % thumbnails.length
                  ]
                )
              }
            >
              &gt;
            </Button>
          </div>
        </Col>

        {/* Right Section */}
        <Col md={6}>
          <h4>Product Information</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <p>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
            ipsum.
          </p>
          <Button variant="primary" className="me-2">
            Contact Seller
          </Button>
          <Button variant="success">Get Quote</Button>
        </Col>
      </Row>

      {/* Modal for Thumbnail */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center">
          <Image src={agriTradeLogo} fluid rounded />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Product;