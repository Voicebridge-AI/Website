import React, { useContext, useRef, useEffect } from 'react';
import { Row, Col, Image, Navbar } from 'react-bootstrap';
import { Button, Text } from '@radix-ui/themes';
import { Calendar } from '@phosphor-icons/react';
import { useMediaQuery } from './shared-functions.js';
import { ThemeContext } from './Theme.js';

export default function Home() {

  let isPageWide = useMediaQuery('(min-width: 640px)');
  const { theme } = useContext(ThemeContext);

  const howItWorksRef = useRef(null);
  const useCasesRef = useRef(null);
  const faqsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollEffect = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (

    <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, paddingTop: 50 }}>

      <Col xs={12} sm={12} md={12} lg={11} xl={11} style={{ padding: 20 }}>

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '5px 10px', backgroundColor: 'transparent' }}>
          <Image src="/logo.svg" alt="Voicebridge" width={isPageWide ? 160 : 140} style={{ marginLeft: 5, marginTop: 5, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </Navbar>

        {/* Hero section */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40, minHeight: `calc(100vh - 400px)` }}>
          <Col xs={12} sm={11} md={10} style={{ textAlign: 'center', maxWidth: 900, marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            {/* <Text size="3" color="gray" style={{ marginBottom: 10 }}>AI-powered Qualitative Research at Scale</Text> */}
            <h1 style={{ marginTop: 0 }}>Capture rich, authentic insights with AI-moderated voice surveys</h1>
            {/* <h1 style={{ marginTop: 5 }}>Traditional, rigid surveys are out. Conversational voice surveys are in.</h1> */}
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={11} sm={11} md={8} style={{ textAlign: 'center', padding: 0 }}>
                <Text size='4' color="gray" as='div' style={{ marginTop: 10 }}>Human-like AI voice agents conduct and analyze deep, conversational voice interviews to gather detailed insights that are impossible to get with traditional, rigid survey methods.</Text>
                <Button variant="solid" size="3" style={{ marginTop: 24 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Book a demo</Button>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Footer */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
          <Col style={{ textAlign: 'center' }}>
            <Text size='1' color="gray" as='div'>Copyright 2025, Voicebridge Labs Inc.</Text>
          </Col>
        </Row>


        <div style={{ height: 100 }}></div>


      </Col>
    </Row>

  )

}
