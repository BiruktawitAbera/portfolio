import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }

    emailjs
      .send(
        "service_uv8zdpi", // Replace with your EmailJS service ID
        "template_regz9pj", // Replace with your EmailJS template ID
        {
          to_name: "Biruktawit", // Replace with the recipient's name
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "GaE9WYcQOg4gnuIot" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccess(true);
          setError("");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setError(err.text || "Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Contact Me</h2>
          {success && <Alert variant="success">Message sent successfully!</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactMe;