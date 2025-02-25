import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Badge, Button, Text } from '@radix-ui/themes';
import { Calendar, Pause, Play, Checks } from '@phosphor-icons/react';
import { useMediaQuery } from './shared-functions.js';
import { ThemeContext } from './Theme.js';
import Marquee from "react-fast-marquee";

export default function Home() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const heroAudioRef = useRef(new Audio('/assets/audio/phone-screen-construction-kevin.wav'));

  let isPageWide = useMediaQuery('(min-width: 640px)');
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollEffect = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const toggleAudio = () => {
    if (isPlaying) {
      heroAudioRef.current.pause();
    } else {
      heroAudioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      heroAudioRef.current.pause();
      heroAudioRef.current.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    const audio = heroAudioRef.current;

    audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));

    return () => {
      audio.removeEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
      audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));
    };
  }, []);

  return (

    <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 50 }}>

      <Col xs={12} sm={12} md={12} lg={11} xl={11} style={{ padding: 20 }}>

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '10px 10px', backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
          <Image src="/logo.svg" alt="Voicebridge" width={isPageWide ? 160 : 160} style={{ marginLeft: 10 }} />
          {/* <Nav className="ml-auto" style={{ marginRight: 0 }}>
            <Nav.Link onClick={() => scrollEffect(useCasesRef)}>Use cases</Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(benefitsRef)}>Benefits</Nav.Link>}
            {isPageWide && <Nav.Link onClick={() => scrollEffect(industriesRef)}>Industries</Nav.Link>}
            {isPageWide && <Nav.Link onClick={() => scrollEffect(howItWorksRef)}>How it works</Nav.Link>}
            <Nav.Link onClick={() => scrollEffect(pricingRef)}>Pricing</Nav.Link>
          </Nav> */}
        </Navbar>

        {/* Hero section */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40, minHeight: '50vh' }}>
          <Col xs={12} sm={11} md={11} lg={6} xl={6} style={{ textAlign: 'left', maxWidth: 800, marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <Badge size="3" variant="soft" color="green" style={{ marginBottom: 10 }}>No more manual calling.</Badge>
            <h1 style={{ marginTop: 5 }}>Automate frontline hiring with AI phone interviewers</h1>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={11} md={10} lg={10} xl={10} style={{ textAlign: 'left', padding: 0 }}>
                
                <Text size='5' color="gray" as='div' style={{ marginTop: 10 }}>Human-like AI phone agents conduct screener interviews to instantly gather answers to your hiring questions.</Text>
                
                <Text size="3" color="gray" as='div' style={{ marginTop: 16 }}><Checks size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Available 24/7/365</Text>
                
                <Text size="3" color="gray" as='div'><Checks size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Instant call back to applicants</Text>
                <Text size="3" color="gray" as='div'><Checks size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Easy ATS integrations</Text>
                
                <Button variant="solid" size="4" style={{ marginTop: 24 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Book a demo</Button>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={11} md={11} lg={6} xl={6} style={{
            width: '100%',
            minHeight: 600,
            maxWidth: 600,
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: 20,
            position: 'relative'
          }}>
            <Image
              src="/assets/agents/ai-phone-receptionist.png"
              alt="AI Phone Receptionist"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                padding: 20,
              }}
            />
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              textAlign: 'center',
              width: '80%',
            }}>
              <Button variant="solid" style={{ backgroundColor: 'white', color: 'black', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }} size="4" onClick={toggleAudio}>
                {isPlaying ? (
                  <Pause size={20} weight="bold" style={{ color: 'black' }} />
                ) : (
                  <Play size={20} weight="bold" style={{ color: 'black' }} />
                )}
                {isPlaying ? 'Pause' : 'Play sample call'}
              </Button>
              {/* <Text size='3' as='div' style={{ marginTop: 10, color: 'black' }}>You will talk to Lisa, a demo AI receptionist.</Text> */}
            </div>
          </Col>
        </Row>

        {/* Company logos */}

        <Marquee pauseOnHover={true} gradientColor={'#13103C'} style={{ marginTop: 60 }}>
          <Image src="/assets/logos/ubersense.png" height="20px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/floro.png" height="22px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/fanflow.png" height="28px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/biomarker.png" height="20px" style={{ marginRight: 120 }} />
          {/* <Image src="/assets/logos/ucsb.png" height="40px" style={{ marginRight: 120 }} /> */}
          <Image src="/assets/logos/waveform.png" height="22px" style={{ marginRight: 120 }} />
          {/* <Image src="/assets/logos/molecule.png" height="28px" style={{ marginRight: 120 }} /> */}
          {/* <Image src="/assets/logos/nikos.png" height="26px" style={{ marginRight: 120 }} /> */}
          {/* <Image src="/assets/logos/unbound.png" height="30px" style={{ marginRight: 120 }} /> */}
        </Marquee>

        {/* Sections: Use cases, Getting started steps, How it works diagram, Demos, Call a number live demo, Product features, Success stories, Pricing */}

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
