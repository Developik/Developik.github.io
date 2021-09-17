import logo from './logo.svg';
import { useState } from 'react';
import selfie from './assets/selfie.jpg';
import './App.css';
//import SocialMediaButtons from 'react-social-media-buttons';
import { SocialIcon } from 'react-social-icons';
//
//<img src={logo} className="App-logo" alt="logo" />
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function App() {
  const links = ['https://github.com/developik/', 'https://www.linkedin.com/in/andrii-provozin/'];
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    backgroundColor: '#000000',
    borderRadius: '50%',
  };

  //, ...( hover ? {margin:'0 0 0 0'} : {} ), 

  const iconStyle = { color: '#ffffff' };

  return (
    <div className="App">
      <header className="App-header">
        <div className="selfie-wrapper">
          <div className="selfie" />
        </div>
        <div style={{ backgroundColor: "rgba(0,0,0,0.8)", borderRadius: 25, padding: 10, borderColor: 'grey', borderWidth: 5, borderStyle: 'solid' }}>
          <p>
            ANDRII PROVOZIN
          </p>
          <p>
            Student at University of Manitoba
          </p>
          <div>
            <span style={{ margin: "0 1vw 0 1vw" }}>
              <SocialIcon url="https://github.com/Developik" bgColor="white" />
            </span>
            <span style={{ margin: "0 1vw 0 1vw" }}>
              <SocialIcon url="https://www.linkedin.com/in/andrii-provozin/" bgColor="white" />
            </span>
          </div>
        </div>

        <Container fluid style={{}}>
          <Row className="justify-content-md-center" style={{ margin: '3vmin 0 0 0' }}>

            <Col sm style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center'
            }}>
              <div className="myblock" onClick={event => window.open('https://play.google.com/store/apps/details?id=com.KudosGraph.KudosGraph', '_blank')}

                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}

                style={{
                  width: '300px', height: '300px', margin: "10px 10px 10px 10px",
                  backgroundColor: "rgba(0,0,0,0.7)", borderRadius: 25, padding: 10, cursor: 'pointer'
                }}>
                <p>Graph/Chart App</p>
                <div className="img-wrapper">
                  <div className="kudosgraph" />
                </div>
              </div>
            </Col>

            <Col sm style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center'
            }}>
              <div style={{ margin: "10px 10px 10px 10px", }}>
                <div className="myblock" onClick={event => window.open('https://stark-everglades-78872.herokuapp.com/djangoapp/', "_blank")}
                  style={{
                    width: '300px', height: '300px',
                    backgroundColor: "rgba(0,0,0,0.7)", borderRadius: 25, padding: 10, cursor: 'pointer'
                  }}>
                  <p>Dealerships Website</p>
                  <div className="img-wrapper">
                    <div className="carwebsite" />
                  </div>
                </div>

              </div>
            </Col>

            <Col sm style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center'
            }}>
              <div className="myblock" style={{
                width: '300px', height: '300px', margin: "10px 10px 10px 10px",
                backgroundColor: "rgba(0,0,0,0.7)", borderRadius: 25, padding: 10, cursor: 'pointer'
              }}>
                <div className="myblock" onClick={event => window.open('https://vctlimited.ca', "_blank")}
                  style={{
                    width: '300px', height: '300px',
                    backgroundColor: "rgba(0,0,0,0.7)", borderRadius: 25, padding: 10, cursor: 'pointer'
                  }}>
                  <p>
                    Local Business
                  </p>
                  <div className="img-wrapper">
                    <div className="vctlimited" />
                  </div>
                </div>
              </div>
            </Col>

            <Col sm style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center'
            }}>
              <div className="myblock" style={{
                width: '300px', height: '300px', margin: "10px 10px 10px 10px",
                backgroundColor: "rgba(0,0,0,0.7)", borderRadius: 25, padding: 10, cursor: 'pointer'
              }}>

                More is coming...
              </div>
            </Col>
          </Row>
        </Container>
      </header>

    </div>
  );
}

export default App;
