import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

            <footer>copyright</footer>
        </div>
    );
};

export default Contact;