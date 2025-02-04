import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";

import { Theme } from "@radix-ui/themes";
import { ThemeContext } from "./Theme.js";
import { Container, Row, Col } from 'react-bootstrap';

import NotFound from "./NotFound.js";
import Home from "./Home.js";

export default function App() {

  const { theme } = useContext(ThemeContext);

  document.body.style = 'background: var(--accent-1)';

  return (
    <Router>
      <Theme accentColor="indigo" appearance={ theme === 'dark-theme' ? "dark" : "light" }>
        <Container className={`App ${theme}`} fluid style={{ marginTop: 0, padding: 0, height: '100%' }}>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginTop: 0, marginLeft: 0, marginRight: 0 }}>
              <Col style={{ width: '100%', padding: 0, minHeight: '100vh' }}>
                <Routes>
                  {/* Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </Theme>
      </Router>
  );
}
