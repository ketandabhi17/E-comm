import React from "react";
import Layout from "../../Components/Layouts";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import Input from "../../Components/UI/Input";

const Singup = (props: any) => {
  return (
    <>
      <Layout />
      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            {/* <h2 className="text-align-center">Register Yourself Here</h2> */}
            <Form className="my-4">
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="Enter Your First Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Enter Your Last Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                label="username"
                placeholder="Enter Your username"
                value=""
                type="text"
                onChange={() => {}}
              />
              <Input
                label="Email"
                placeholder="Enter Your Email"
                value=""
                type="text"
                onChange={() => {}}
              />
              <Input
                label="Password"
                placeholder="Enter Your Password"
                value=""
                type="password"
                onChange={() => {}}
              />
              <Input
                label="Confirm Password"
                placeholder="Enter Your Password"
                value=""
                type="password"
                onChange={() => {}}
              />
              <Input
                label="Contact Number"
                placeholder="Enter Your Contact no."
                value=""
                type="text"
                onChange={() => {}}
              />
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Singup;
