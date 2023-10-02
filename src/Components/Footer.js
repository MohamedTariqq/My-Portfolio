import { Container, Row, Col } from "react-bootstrap";
import { Mailchimpform } from "../Components/Mailchimpform";
import logo from "../assets/img/logo.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/GitHub.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Mailchimpform />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/MohamedTarek253">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/muhamed.tarek0/">
                <img src={navIcon3} alt="" />
              </a>
              <a href="https://github.com/MohamedTariqq">
                <img src={navIcon4} alt="" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
