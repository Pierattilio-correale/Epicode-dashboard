import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";
import MyForm from "./components/MyForm";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      {" "}
      <Container className="m-0 p-0">
        <Row>
          <Col>
            {" "}
            <Sidebar />
          </Col>
          <Col>
            {" "}
            <MyForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
