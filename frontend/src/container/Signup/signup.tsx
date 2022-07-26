import * as React from "react";
import Index from "../../components/layouts";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

function Signup() {
  return (
    <>
      <Index />
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signup;
