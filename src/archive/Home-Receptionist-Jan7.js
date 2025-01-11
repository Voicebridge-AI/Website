import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Button, Card, Heading, Text } from '@radix-ui/themes';
import { Clock, Heart, Calendar, Trophy, Pause, Check, CurrencyDollar, Play, HandWaving, Chat, Headset } from '@phosphor-icons/react';
import { useMediaQuery } from '../shared-functions.js';
import { ThemeContext } from '../Theme.js';
import Marquee from "react-fast-marquee";

export default function Home() {

  const benefitsRef = useRef(null);
  const faqRef = useRef(null);
  const howItWorksRef = useRef(null);
  const pricingRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(new Audio('/assets/audio/charlie-sam-inbound.wav'));

  let isPageWide = useMediaQuery('(min-width: 640px)');
  const { theme } = useContext(ThemeContext);

  const scrollEffect = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // const callVoiceRelay = () => {
  //   window.location.href = 'tel:1234567890';
  // };

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));

    return () => {
      audio.removeEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
      audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));
    };
  }, []);

  return (

    <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 50 }}>
      <Col xs={12} sm={12} md={12} lg={11} xl={11} style={{ padding: 10 }}>

        {/* Background gradient */}
        {/* <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'linear-gradient(to bottom, rgba(255, 0, 0, 0.1), rgba(147, 51, 234, 0.07), rgba(59, 130, 246, 0.05))' }}></div> */}

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '5px 10px', backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
          <Image src="/logo.svg" alt="VoiceRelay" width={isPageWide ? 160 : 140} style={{ marginLeft: 10 }} />
          {/* <Heading size='4' style={{ marginLeft: 10, marginRight: 10, fontFamily: 'Roboto Mono', letterSpacing: 1.6 }}>VOICERELAY</Heading> */}
          <Nav className="ml-auto" style={{ marginRight: 10 }}>
            <Nav.Link onClick={() => scrollEffect(benefitsRef)}><Text size='2'>Benefits</Text></Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(howItWorksRef)}><Text size='2'>How it works</Text></Nav.Link>}
            <Nav.Link onClick={() => scrollEffect(pricingRef)}><Text size='2'>Pricing</Text></Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(faqRef)}><Text size='2'>FAQs</Text></Nav.Link>}
          </Nav>
          {isPageWide &&
          <Button
            variant="ghost"
            size="1"
            style={{ marginRight: 0 }}
            onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voicebridge-demo'}
          >
              <Calendar size={14} weight="bold" style={{ marginRight: 2 }} /> Book a demo
            </Button>
          }
        </Navbar>

        {/* Hero section */}
        <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20, minHeight: '50vh' }}>
          <Col xs={12} sm={12} md={12} lg={7} xl={6} style={{ textAlign: 'center', maxWidth: 800 }}>

            {/* <Image src="/assets/face.png" alt="VoiceRelay AI agent, VoiceRelay" width={60} style={{ border: '2px solid white', borderRadius: 30, marginBottom: 20 }} /> */}

            {/* <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={12} sm={10} md={8} lg={8} xl={8} style={{ textAlign: 'center' }}>
                <Text size={ isPageWide ? '2' : '1' } color="tomato" as='div' style={{ fontFamily: 'Roboto Mono', lineHeight: 1.4 }}>Goodbye missed calls.<br />Hello lost revenue.</Text>
              </Col>
            </Row> */}

            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'left' }}>
                <Heading size={isPageWide ? '9' : '8'} as='div'>AI phone receptionist for service businesses</Heading>
              </Col>
            </Row>

            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={10} lg={9} xl={8} style={{ textAlign: 'left' }}>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div'>Answers your calls when you are busy or away, and sends you a follow-up SMS.</Text>
                <Text size='4' color="gray" as='div' style={{ marginTop: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Available 24/7</Text>
                <Text size='4' color="gray" as='div' style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> 10x cheaper than a service</Text>
                <Text size='4' color="gray" as='div' style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Better than voicemail</Text>
              </Col>
            </Row>

            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={11} sm={10} md={8} lg={8} xl={6} style={{ textAlign: 'left' }}>
                <Button variant="solid" size={isPageWide ? '4' : '3'} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voicebridge-demo'}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Book a demo</Button>

                <Text size='2' color="gray" as='p' style={{ marginTop: 10 }}>30-minute demo. No commitment.</Text>
                
                {/* <Text size='2' color="gray" as='p' style={{ marginTop: 20 }}>Listen to a sample call</Text> */}

                {/* <Card style={{
                  padding: '15px 20px',
                  marginLeft: 5,
                  marginBottom: 10,
                  borderRadius: 30,
                  border: '1px solid var(--gray-6)',
                  backgroundColor: 'var(--gray-1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  width: '100%'
                }}>
                  <Button
                    variant="ghost"
                    size="2"
                    onClick={toggleAudio}
                    style={{ padding: 5 }}
                  >
                    {isPlaying ? (
                      <Pause size={18} weight="bold" />
                    ) : (
                      <Play size={18} weight="bold" />
                    )}
                  </Button>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      height: 4,
                      background: 'var(--gray-4)',
                      borderRadius: 2,
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const percentage = x / rect.width;
                        audioRef.current.currentTime = percentage * duration;
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: `${(currentTime / duration) * 100}%`,
                        background: 'var(--accent-9)',
                        borderRadius: 2
                      }} />
                    </div>
                  </div>

                  <Text size="1" style={{ minWidth: 60 }}>
                    {duration ?
                      `${Math.floor(currentTime / 60)}:${String(Math.floor(currentTime % 60)).padStart(2, '0')} / ${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, '0')}` :
                      'Loading...'}
                  </Text>
                </Card> */}

              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={5} xl={6} style={{ 
            width: '100%',
            minHeight: 600,
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: 20,
          }}>
          {/* <Image src="/assets/trainer.jpeg" alt="Kai" width={'100%'} style={{ marginLeft: 20, marginRight: 20, opacity: 0.8, objectFit: 'contain' }} /> */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            textAlign: 'center',
            width: '80%'
          }}>
            <Button variant="solid" style={{ backgroundColor: 'white', color: 'black' }} size="4" onClick={toggleAudio}>
              {isPlaying ? (
                <Pause size={20} weight="bold" style={{ color: 'black' }} />
              ) : (
                <Headset size={20} weight="bold" style={{ color: 'black' }} />
              )}
              {isPlaying ? 'Playing sample call' : 'Play sample call'}
            </Button>
            {/* <Text size='3' as='div' style={{ marginTop: 10, color: 'black' }}>You will talk to Lisa, a demo AI receptionist.</Text> */}
          </div>
        </Col>

        </Row>

        {/* Social proof - Past experience helping milions of athletes, fitness professionals, and health professionals */}
        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={10} sm={9} md={8} lg={8} xl={8} style={{ padding: 0, textAlign: 'center', maxWidth: 400 }}>
            <Text size='2' color="gray" as='p'>Built by a team of technologists that has built software products for millions of users</Text>
          </Col>
        </Row> */}

        {/* Company logos */}

          <Marquee pauseOnHover={true} gradientColor={'#13103C'} style={{ marginTop: 40 }}>
            <Image src="/assets/logos/ubersense.png" height="22px" style={{ marginRight: 120 }} />
            <Image src="/assets/logos/floro.png" height="22px" style={{ marginRight: 120 }} />
            <Image src="/assets/logos/fanflow.png" height="28px" style={{ marginRight: 120 }} />
            <Image src="/assets/logos/biomarker.png" height="20px" style={{ marginRight: 120 }} />
            {/* <Image src="/assets/logos/ucsb.png" height="40px" style={{ marginRight: 120 }} /> */}
            <Image src="/assets/logos/waveform.png" height="22px" style={{ marginRight: 120 }} />
            <Image src="/assets/logos/molecule.png" height="28px" style={{ marginRight: 120 }} />
            <Image src="/assets/logos/nikos.png" height="26px" style={{ marginRight: 120 }} />
            <Image src="/assets/logos/unbound.png" height="30px" style={{ marginRight: 120 }} />
          </Marquee>

        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Image src="/assets/logos/ubersense.png" alt="Ubersense" width={isPageWide ? 120 : 100} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
            <Image src="/assets/logos/biomarker.png" alt="Biomarker" width={isPageWide ? 120 : 80} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
            <Image src='/assets/logos/florohealth.png' alt="Floro Health" width={isPageWide ? 120 : 80} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
            <Image src="/assets/logos/waveform.png" alt="Waveform" width={isPageWide ? 140 : 100} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
          </Col>
        </Row> */}

        <Row ref={benefitsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 80 : 40 }}>
          <Col xs={11} sm={11} md={10} lg={10} xl={9} style={{ padding: 0, textAlign: 'center', maxWidth: 800 }}>
            <Heading size={isPageWide ? '6' : '4'} style={{ marginTop: 10, fontFamily: 'Roboto Mono' }}>Businesses miss 23% to 62% of calls, each worth hundreds to thousands of dollars in lost revenue and wasted marketing spend</Heading>
          </Col>
        </Row>

        {/* Benefits of using VoiceRelay */}
        <Row ref={benefitsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Heading size='8' style={{ marginTop: 10 }}>Benefits of VoiceRelay</Heading>
          </Col>
        </Row>


        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
          <Col xs={12} sm={6} md={5} lg={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Clock size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">24/7 availability</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Never miss an inquiry. VoiceRelay is always available to respond, when you're busy, after hours, weekends, or on holidays.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={5} lg={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <CurrencyDollar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Revenue recovery</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Avoid losing revenue from potential long-term customers or waste dollars spent on lead-generating marketing campaigns.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={5} lg={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Trophy size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Competitive edge</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Don't lose customers to competitors just because you are busy with a project, it's after hours, or it's a holiday.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={5} lg={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Heart size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Customer experience</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Deliver instant, consistent, and personalized responses to enhance customer satisfaction and loyalty.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={5} lg={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Calendar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Seamless scheduling</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Enable appointment booking based on the caller's intent and your availability, so you can focus on what you do.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={5} lg={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Chat size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Instant follow-up</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                After every call, VoiceRelay can follow up with the caller and you via group SMS so you can get back to them as soon as possible.
              </Text>
            </Card>
          </Col>
        </Row>

        {/* <Card style={{ padding: 20, marginTop: 80 }}> */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
              <Heading size='8' style={{ marginTop: 10 }}>Who uses VoiceRelay</Heading>
              <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
                <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
                  <Text size='3' color="gray" as='p'>VoiceRelay can help a wide range of businesses that rely on being responsive and available to their customers.</Text>
                </Col>
              </Row>
              <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
                {/* <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}> */}
                  
                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Personal trainers</Text>
                  
                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Sports coaches</Text>
                  
                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Fitness instructors</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Therapists & counselors</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Plumbers</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Electricians</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Cleaners</Text>
                  
                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Real estate agents</Text>
                  
                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Lawyers</Text>
                  
                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Event planners</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}>and many more...</Text>
                {/* </Col> */}
              </Row>
            </Col>
          </Row>
        {/* </Card> */}


        {/* How it works */}
        <Row ref={howItWorksRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Heading size='8' style={{ marginTop: 10 }}>How it works</Heading>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={5} lg={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Text size="6" as="p" weight="bold" style={{ marginBottom: 10, color: 'tomato' }}>1</Text>
              <Heading size="4">Connect a phone number</Heading>  
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Buy or connect an existing phone number to VoiceRelay, VoiceRelay's AI receptionist. Just forward your calls to VoiceRelay when you are busy, away, on weekends, or holidays.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={5} lg={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Text size="6" as="p" weight="bold" style={{ marginBottom: 10, color: 'tomato' }}>2</Text>
              <Heading size="4">Configure the agent</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Configure VoiceRelay's knowledge about your business, it's tone and personality, conversation style, voice and/or language based on your brand voice and values.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={5} lg={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Text size="6" as="p" weight="bold" style={{ marginBottom: 10, color: 'tomato' }}>3</Text>
              <Heading size="4">Forward calls</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                VoiceRelay will answer your calls and respond to them in a human-like conversational manner, answer their questions, book appointments, and also send the caller a follow-up SMS.
              </Text>
            </Card>
          </Col>
          {/* <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Text size="4" as="p" weight="bold" style={{ marginBottom: 10, color: 'tomato' }}>4</Text>
              <Heading size="4">Receive follow-ups</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                After every call, VoiceRelay can follow up with the caller and you via group SMS so you can get back to them as soon as possible with all the information you need already collected.
              </Text>
            </Card>
          </Col> */}
        </Row>

        {/* LLM providers */}

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Text size='1' color="gray">Works with your choice of LLMs</Text>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Image src="/assets/icons/meta.png" alt="Meta LLama" width={24} height={24} style={{ marginLeft: 15, marginRight: 15 }} />
            <Image src="/assets/icons/mistral.png" alt="Mistral" width={24} height={24} style={{ marginLeft: 15, marginRight: 15 }} />
            <Image src="/assets/icons/anthropic.png" alt="Anthropic" width={24} height={24} style={{ marginLeft: 15, marginRight: 15 }} />
            <Image src="/assets/icons/gemini.png" alt="Gemini" width={24} height={24} style={{ marginLeft: 15, marginRight: 15 }} />
            <Image src="/assets/icons/openai-light.svg" alt="OpenAI" width={24} height={24} style={{ marginLeft: 15, marginRight: 15 }} />
          </Col>
        </Row>

        {/* Integrations */}
        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Key integrations</Heading>
        </Col>
      </Row> */}

        {/* Pricing */}
        <Row ref={pricingRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Heading size='8' style={{ marginTop: 10 }}>Pricing</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
                <Text size='3' color="gray" as='p'>We offer flexible, risk-free pricing based on the number of calls you want to handle, the number of integrations you want to use, and the complexity of your workflows. No long-term commitment and no hidden fees.</Text>
                <Button variant="solid" size="4" style={{ marginTop: 20 }} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voicebridge-demo'}>
                  <Calendar size={20} weight="bold" style={{ color: 'white' }} /> Book a demo
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Heading size="3" style={{ color: 'tomato' }}>Starter</Heading>
              <Text size="8" as="p" style={{ marginTop: 20, fontFamily: 'Inter Regular' }}>$29</Text>
              <Text size="2" color="gray" as="p">per month</Text>
              <Text size="2" color="gray" as="p" style={{ marginTop: 20 }}>
                Perfect for businesses just getting started
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 30 minutes of calls
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Email & web chat support
              </Text>
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voicebridge-demo'}>
                Book a demo
              </Button>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Heading size="3" style={{ color: 'tomato' }}>Growth</Heading>
              <Text size="8" as="p" style={{ marginTop: 20, fontFamily: 'Inter Regular' }}>$99</Text>
              <Text size="2" color="gray" as="p">per month</Text>
              <Text size="2" color="gray" as="p" style={{ marginTop: 20 }}>
                For businesses with increasing call volumes
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 180 minutes of calls
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 1 calendar integration
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Choose your agent's voice
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Email & web chat support
              </Text>
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voicebridge-demo'}>
                Book a demo
              </Button>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Heading size="3" style={{ color: 'tomato' }}>Pro</Heading>
              <Text size="8" as="p" style={{ marginTop: 20, fontFamily: 'Inter Regular' }}>$299</Text>
              <Text size="2" color="gray" as="p">per month</Text>
              <Text size="2" color="gray" as="p" style={{ marginTop: 20 }}>
                For businesses with very high call volumes
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 720 minutes of calls
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Up to 3 integrations
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Choose your agent's voice
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> SMS follow-ups
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Save call recordings
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Email & web chat support
              </Text>
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voicebridge-demo'}>
                Book a demo
              </Button>
            </Card>
          </Col>
        </Row> */}

        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Text size="2" color="gray" as="div">
              Need a custom deployment?<br />
              <Button variant="solid" size="2" style={{ marginTop: 20 }} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voicebridge-demo'}>Let's talk</Button>
            </Text>
          </Col>
        </Row> */}

        {/* FAQ */}
        <Row ref={faqRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 120 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Heading size='8' style={{ marginTop: 10 }}>Frequently asked questions</Heading>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
          <Col xs={12} sm={11} md={10} lg={10} xl={9}>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">What scenarios can VoiceRelay handle?</Heading>  
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                VoiceRelay can answer questions about your business, schedule appointments, and collect information from callers. VoiceRelay can be customized to handle custom workflows unique to your business needs.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">What tools does VoiceRelay integrate with?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                VoiceRelay integrates seamlessly with popular scheduling tools such as Cal.com, Calendly, and Acuity and can be customized to connect to with any other tools such as CRMs and EHRs.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">How does VoiceRelay handle phone calls?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                VoiceRelay uses advanced speech-to-text models and LLM-powered natural language processing to have human-like conversations with callers, understand the caller's intent, answer questions and perform actions.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">How long does it take to set up?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                VoiceRelay can be configured in 2-3 days for basic use cases but can take longer for custom workflows and integrations.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">What happens if VoiceRelay can't handle a request?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                If VoiceRelay is experiencing a scenario that is not covered by it's set of instructions, it can be configured to record the customer's call and let the caller know you'll get back to them as soon as possible.
              </Text>
            </Card>

            {/* <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">Is it secure and private?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Yes, we take security seriously. All conversations are encrypted, and we comply with industry standards for data protection. You have full control over what information the AI can access and share.
            </Text>
          </Card> */}

            {/* <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">What does it cost?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              We offer customized pricing based on your workflows and needs. 
            </Text>
          </Card> */}

            {/* <Card style={{ padding: 20 }}>
            <Heading size="4">When will I see ROI?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              You can expect to see ROI within the first month through reduced administrative costs and improved client engagement.
            </Text>
          </Card> */}

          </Col>
        </Row>

        {/* Call to action */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40, minHeight: '40vh' }}>
          <Col xs={12} sm={11} md={11} lg={10} xl={10} style={{ textAlign: 'center', maxWidth: 800 }}>
            <Heading size="8">Ready to get started?</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={11} md={10} lg={8} xl={8} style={{ textAlign: 'center' }}>
                <Text size="3" color="gray" as='div'>Stop losing revenue and customers to missed calls. Book a demo with us today to learn how VoiceRelay can start helping you today.</Text>
                <Button variant="solid" size="4" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voicebridge-demo'}>
                  <Calendar size={20} weight="bold" style={{ color: 'white' }} /> Book a demo
                </Button>
                <div style={{ marginTop: 20 }}>
                  <Text size="1" color="gray">30-minute call • No commitment</Text>
                </div>
              </Col>    
            </Row>
          </Col>
        </Row>

        {/* Footer */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
          <Col style={{ textAlign: 'center' }}>
            <Text size='1' color="gray">Copyright 2025, VoiceRelay Labs.</Text>
          </Col>
        </Row>


        <div style={{ height: 100 }}></div>

      </Col>
    </Row>

  )

}