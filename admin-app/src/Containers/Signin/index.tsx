import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { login } from "../../actions";
import Layout from "../../Components/Layouts";
import Input from "../../Components/UI/Input";

const Signin = (props: any) => {
  const [email, setEmail] = useState<string | undefined>();
  const [userPassword, setPassword] = useState<string | undefined>();
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const userLogin = async (e: any) => {
    e.preventDefault();
    const user = {
      email,
      userPassword,
    };
    const a:any = await login(user)
    dispatch(a)
  };

  return (
    <>
      <Layout />
      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                controlId="email"
                label="Email"
                placeholder="Enter Your Email"
                value={email ?? ""}
                type="text"
                onChange={(e: any) => setEmail(e.target.value)}
              />

              <Input
                controlId="password"
                label="Password"
                placeholder="Enter Your Password"
                value={userPassword ?? "  "}
                type="password"
                onChange={(e: any) => setPassword(e.target.value)}
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

export default Signin;
