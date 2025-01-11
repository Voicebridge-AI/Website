import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Button, Card, Heading, Text } from '@radix-ui/themes';
import { HandWaving, Clock, Heart, Calendar, Trophy, Pause, Check, CurrencyDollar, Play, Headset } from '@phosphor-icons/react';
import { useMediaQuery } from '../shared-functions.js';
import { ThemeContext } from '../Theme.js';

export default function Home() {

  const benefitsRef = useRef(null);
  const faqRef = useRef(null);
  const howItWorksRef = useRef(null);
  const pricingRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(new Audio('/assets/audio/kai-sam-inbound.wav'));

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

  const callKai = () => {
    window.location.href = 'tel:1234567890';
  };

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
      <Col xs={12} sm={12} md={12} lg={11} xl={10} style={{ padding: 10 }}>

        {/* Background gradient */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'linear-gradient(to bottom, rgba(255, 0, 0, 0.1), rgba(147, 51, 234, 0.07), rgba(59, 130, 246, 0.05))' }}></div>

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '5px 10px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <Image src="/logo.svg" alt="Kai" width={isPageWide ? 48 : 48} style={{ marginLeft: 10, marginRight: 10 }} />
          {/* <Heading size='6' style={{ marginLeft: 10, marginRight: 10, fontFamily: 'Roboto Mono' }}>kai</Heading> */}
          <Nav className="ml-auto" style={{ marginRight: 10 }}>
            <Nav.Link onClick={() => scrollEffect(benefitsRef)}><Text size='2'>Benefits</Text></Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(howItWorksRef)}><Text size='2'>How it works</Text></Nav.Link>}
            <Nav.Link onClick={() => scrollEffect(pricingRef)}><Text size='2'>Pricing</Text></Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(faqRef)}><Text size='2'>FAQs</Text></Nav.Link>}
          </Nav>
          <Button
            variant="solid"
            size="1"
            style={{ marginRight: 0 }}
            onClick={() => window.location.href = 'https://calendly.com/kai-assistant/intro-call'}
          >
            <Calendar size={14} weight="bold" style={{ marginRight: 2 }} /> Schedule a demo
          </Button>
        </Navbar>

        {/* Hero section */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20, minHeight: '50vh' }}>
          <Col xs={12} sm={11} md={10} lg={6} xl={6} style={{ textAlign: 'left', padding: 20, maxWidth: 900 }}>

            {/* <Image src="/assets/face.png" alt="Kai" width={60} style={{ border: '2px solid white', borderRadius: 30, marginBottom: 20 }} /> */}

            <Text size='3' color="yellow" as='div'><HandWaving size={14} weight="fill" /> Hello, I'm Kai!</Text>

            <Heading size={isPageWide ? '9' : '8'} as='div' style={{ marginTop: 20 }}>The AI phone agent for health and fitness businesses</Heading>

            {/* <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 20 : 10 }}> */}
            <Text size={isPageWide ? '4' : '3'} color="gray" as="div" style={{ marginTop: 20, marginRight: 20 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Zero missed calls</Text>
            <Text size={isPageWide ? '4' : '3'} color="gray" as="div" style={{ marginTop: 5, marginRight: 20 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 24/7 availability</Text>
            <Text size={isPageWide ? '4' : '3'} color="gray" as="div" style={{ marginTop: 5, marginRight: 20 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Instant responses</Text>
            <Text size={isPageWide ? '4' : '3'} color="gray" as="div" style={{ marginTop: 5, marginRight: 20 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Happy clients</Text>
            {/* </Row> */}

            <Button variant="solid" size={isPageWide ? '4' : '2'} style={{ marginBottom: 10, marginTop: 20 }} onClick={() => window.location.href = 'https://calendly.com/kai-assistant/intro-call'}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Schedule a demo</Button>

          </Col>
          <Col xs={12} sm={11} md={8} lg={6} xl={6} style={{
            width: '100%',
            minHeight: 600,
            maxWidth: 600,
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: 20,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image src="/assets/trainer.jpeg" alt="Kai" width={'100%'} style={{ marginLeft: 20, marginRight: 20, opacity: 0.8, objectFit: 'contain' }} />
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
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={10} sm={9} md={8} lg={8} xl={8} style={{ padding: 0, textAlign: 'center', maxWidth: 400 }}>
            <Text size='2' color="gray" as='p'>Built by a team of technologists that has built health and fitness software products for millions of users</Text>
          </Col>
        </Row>

        {/* Company logos */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Image src="/assets/logos/ubersense.png" alt="Ubersense" width={isPageWide ? 120 : 100} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
            <Image src="/assets/logos/florohealth.png" alt="Floro Health" width={isPageWide ? 120 : 100} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
            <Image src="/assets/logos/biomarker.png" alt="Biomarker" width={isPageWide ? 120 : 80} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
            <Image src="/assets/logos/waveform.png" alt="Waveform" width={isPageWide ? 140 : 100} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
          </Col>
        </Row>

        <Row ref={benefitsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={11} sm={11} md={10} lg={10} xl={9} style={{ padding: 0, textAlign: 'center', maxWidth: 800 }}>
            <Heading size={isPageWide ? '6' : '4'} style={{ marginTop: 10, fontFamily: 'Roboto Mono' }}>Businesses miss 40% of calls on average, each worth hundreds to thousands in lost revenue and wasted marketing spend</Heading>
          </Col>
        </Row>

        {/* Scenarios */}
        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Heading size='8' style={{ marginTop: 10 }}>Kai can handle a wide range of scenarios</Heading>
          </Col>
        </Row> */}

        {/* With and without Kai comparison */}
        <Row ref={benefitsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Heading size='8' style={{ marginTop: 10 }}>Benefits of using Kai</Heading>
            {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
                <Text size='3' color="gray" as='p'>Service-based businesses lose <span style={{ fontWeight: 'bold', color: 'yellow' }}>$1,000s to $10,000s</span> per month from unanswered calls. Kai can help you avoid missed calls and revenue loss.</Text>
              </Col>
            </Row> */}
          </Col>
        </Row>


        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Clock size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">24/7 availability</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Never miss an inquiry. Kai is always available to respond, when you're busy, after hours, weekends, or on holidays.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <CurrencyDollar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Avoid revenue loss</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Avoid losing revenue from potential long-term clients or waste dollars spent on lead-generating marketing campaigns.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Trophy size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Gain a competitive edge</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Don't lose clients to competitors just because you are busy with a project, it's after hours, or it's a holiday.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Heart size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Improve customer experience</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Deliver instant, consistent, and personalized responses to enhance customer satisfaction and loyalty.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Calendar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Enable seamless scheduling</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Enable appointment booking based on the caller's intent and your availability, so you can focus on what you do.
              </Text>
            </Card>
          </Col>
        </Row>

        {/* <Card style={{ padding: 20, marginTop: 80 }}> */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Heading size='8' style={{ marginTop: 10 }}>Types of businesses</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
                <Text size='3' color="gray" as='p'>Kai can help a wide range of health and fitness professionals that rely on responsiveness to succeed.</Text>
                <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Personal trainers</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Sports coaches</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Fitness instructors</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Therapists</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Counsellors</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Yoga teachers</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Pilates studios</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Massage therapists</Text>

                  <Text size="4" color="gray" as="div" style={{ marginRight: 20, marginBottom: 10 }}>and many more...</Text>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* </Card> */}


        {/* How it works */}
        <Row ref={howItWorksRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Heading size='8' style={{ marginTop: 10 }}>How Kai works</Heading>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Text size="4" as="p" weight="bold" style={{ marginBottom: 10, color: 'yellow' }}>1</Text>
              <Heading size="4">Connect a phone number</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                We'll help you buy or connect a phone number to Kai so it can receive calls. Just forward your calls to Kai when you are busy or offline.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Text size="4" as="p" weight="bold" style={{ marginBottom: 10, color: 'yellow' }}>2</Text>
              <Heading size="4">Tell Kai how to respond</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Configure Kai's personality, conversation style, voice and/or language based on your brand voice and values.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Text size="4" as="p" weight="bold" style={{ marginBottom: 10, color: 'yellow' }}>3</Text>
              <Heading size="4">Kai answers calls</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Kai will answer calls and respond to them in a human-like conversational manner, take a message, collect information, book appointments, and let the caller know you'll get back to them.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Text size="4" as="p" weight="bold" style={{ marginBottom: 10, color: 'yellow' }}>4</Text>
              <Heading size="4">Kai follows up</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                After every call, Kai will follow up with the caller and you via group SMS or email so you can get back to them as soon as possible with all the information you need already collected by Kai.
              </Text>
            </Card>
          </Col>
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
            <Image src="/assets/icons/openai-dark.svg" alt="OpenAI" width={24} height={24} style={{ marginLeft: 15, marginRight: 15 }} />
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
                <Text size='3' color="gray" as='p'>We offer a multi-tier pricing model that suits your business needs with no long-term commitments. Cancel anytime.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Heading size="3" style={{ color: 'yellow' }}>Starter</Heading>
              <Text size="8" as="p" style={{ marginTop: 20, fontFamily: 'Inter Regular' }}>$29</Text>
              <Text size="2" color="gray" as="p">per month</Text>
              <Text size="2" color="gray" as="p" style={{ marginTop: 20 }}>
                Perfect for professionals just getting started
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 30 minutes of calls
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Email and Web support
              </Text>
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://calendly.com/kai-assistant/intro-call'}>
                Schedule a demo
              </Button>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Heading size="3" style={{ color: 'yellow' }}>Growth</Heading>
              <Text size="8" as="p" style={{ marginTop: 20, fontFamily: 'Inter Regular' }}>$99</Text>
              <Text size="2" color="gray" as="p">per month</Text>
              <Text size="2" color="gray" as="p" style={{ marginTop: 20 }}>
                For professionals with increasing call volumes
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 180 minutes of calls
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Email, Web, and SMS support
              </Text>
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://calendly.com/kai-assistant/intro-call'}>
                Schedule a demo
              </Button>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Heading size="3" style={{ color: 'yellow' }}>Pro</Heading>
              <Text size="8" as="p" style={{ marginTop: 20, fontFamily: 'Inter Regular' }}>$299</Text>
              <Text size="2" color="gray" as="p">per month</Text>
              <Text size="2" color="gray" as="p" style={{ marginTop: 20 }}>
                For professionals with very high call volumes
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Unlimited calls
              </Text>
              <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Email, Web, and SMS support
              </Text>
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://calendly.com/kai-assistant/intro-call'}>
                Schedule a demo
              </Button>
            </Card>
          </Col>
        </Row>

        {/* FAQ */}
        <Row ref={faqRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Heading size='8' style={{ marginTop: 10 }}>Frequently asked questions</Heading>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
          <Col xs={12} sm={11} md={10} lg={10} xl={9}>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">What scenarios can Kai handle?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                Kai can handle a wide range of common business scenarios including answering frequently asked questions about your business, scheduling appointments, sessions or classes, collecting information from callers, and more. Kai can be customized to handle specific workflows unique to your business needs while maintaining a natural, conversational tone that represents your brand.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">What tools does Kai integrate with?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                Kai integrates seamlessly with popular scheduling tools such as Cal.com, Calendly, and Acuity. Kai can be setup to connect to any CRM or EHR you use to manage your business so that it can automatically schedule appointments, send reminders, and update your records.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">How does Kai handle phone calls?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                Kai uses advanced speech-to-text models and LLM-powered natural language processing to have human-like conversations with callers. It can answer common questions about your business, understand the caller's needs, collect necessary information based on your requirements, and then follow up with the caller and you via group SMS or email so you can get back to them as soon as possible with all the information you need already collected by Kai.
              </Text>
            </Card>

            {/* <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">What types of scheduling tools do you integrate with?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Kai integrates with any calendar, CRM, or EHR you use to manage your business so that it can automatically schedule appointments, send reminders, and update your records.
            </Text>
          </Card> */}

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">How long does it take to set up?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                Kai can be configured in less than 10 minutes as soon as you have your phone number and a few minutes to configure the Kai's personality and conversation style.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">What happens if Kai can't handle a request?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                If Kai is experiencing a scenario that is not covered by it's set of instructions, Kai can be configured to take a message and end the call letting the caller know you'll get back to them as soon as possible or gracefully transfer the call to another specified team member. You can customize these preferences based on your business needs.
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
              <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
                <Text size="3" color="gray" as='div'>Stop losing revenue and clients to missed calls. Schedule a demo with us today to learn how Kai can start helping you today.</Text>
                <Button variant="solid" size="4" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://calendly.com/kai-assistant/intro-call'}>
                  <Calendar size={20} weight="bold" style={{ color: 'white' }} /> Schedule a demo
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
            <Text size='1' color="gray">Copyright 2025, Kai Labs.</Text>
          </Col>
        </Row>


        <div style={{ height: 100 }}></div>

      </Col>
    </Row>

  )

}