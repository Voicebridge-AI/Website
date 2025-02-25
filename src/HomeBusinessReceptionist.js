import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Badge, Button, Card, Heading, Text, Link } from '@radix-ui/themes';
import { Calendar, Check, CheckFat, CurrencyDollar, Clock, Pause, Headset, Play, Voicemail, User, SquaresFour, QuestionMark, Checks, X, Steps, ChatCentered } from '@phosphor-icons/react';
import { useMediaQuery } from './shared-functions.js';
import { ThemeContext } from './Theme.js';
import Marquee from "react-fast-marquee";
import { faqItems } from './config/faqs.js';
import FAQItem from './components/FaqItem.js';

export default function Home() {

  const useCasesRef = useRef(null);
  const benefitsRef = useRef(null);
  const integrationsRef = useRef(null);
  const faqRef = useRef(null);
  const howItWorksRef = useRef(null);
  const pricingRef = useRef(null);
  const industriesRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const heroAudioRef = useRef(new Audio('/assets/audio/molly-acme-clinic-inbound.wav'));

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

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '5px 10px', backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
          <Image src="/logo.svg" alt="Voicebridge" width={isPageWide ? 160 : 160} style={{ marginLeft: 10 }} />
          <Nav className="ml-auto" style={{ marginRight: 0 }}>
            <Nav.Link onClick={() => scrollEffect(useCasesRef)}>Use cases</Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(benefitsRef)}>Benefits</Nav.Link>}
            {isPageWide && <Nav.Link onClick={() => scrollEffect(industriesRef)}>Industries</Nav.Link>}
            {isPageWide && <Nav.Link onClick={() => scrollEffect(howItWorksRef)}>How it works</Nav.Link>}
            <Nav.Link onClick={() => scrollEffect(pricingRef)}>Pricing</Nav.Link>
          </Nav>
        </Navbar>

        {/* Hero section */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40, minHeight: '50vh' }}>
          <Col xs={12} sm={11} md={11} lg={6} xl={6} style={{ textAlign: 'left', maxWidth: 800, marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <Badge size="3" variant="soft" color="green" style={{ marginBottom: 10 }}>No missed calls. No more voicemail.</Badge>
            <h1 style={{ marginTop: 5 }}>The AI Phone Receptionist for Business Calls</h1>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={11} md={10} lg={10} xl={10} style={{ textAlign: 'left', padding: 0 }}>
                <Text size='4' color="gray" as='div' style={{ marginTop: 10 }}>Missed calls cost businesses $100K to $500K annually in lost revenue. Voicebridge ensures every call is answered, especially when you are busy or after hours.</Text>
                <Text size="3" color="gray" as='div' style={{ marginTop: 10 }}><Checks size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Available 24/7/365</Text>
                <Text size="3" color="gray" as='div'><Checks size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Books appointments</Text>
                <Text size="3" color="gray" as='div'><Checks size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Takes messages</Text>
                <Text size="3" color="gray" as='div'><Checks size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Delivers summaries</Text>
                <Button variant="solid" size="4" style={{ marginTop: 20 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Book a demo</Button>
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

        {/* Use cases */}
        <Row ref={useCasesRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <SquaresFour size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h2 style={{ marginTop: 0 }}>Use cases</h2>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20, paddingLeft: isPageWide ? 40 : 0, paddingRight: isPageWide ? 40 : 0 }}>
          <Col xs={12} sm={6} md={6} lg={6} xl={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Calendar size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Calendar booking</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Allow callers to schedule appointments, book meetings or other calendar events when they call, saving them and you time. Don't miss out on potential customers by not being available when they call.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <User size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Lead qualification</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Ask Voicebridge to ask specific qualifying questions to callers so you can follow up with them equipped with complete information. Save time and resources by not following up with unqualified leads.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <QuestionMark size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Question handling</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Voicebridge responds to common customer inquiries with your business information to reduce repetitive and time-consuming calls while ensuring fast and consistent responses to customers.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ChatCentered size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Message capture</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Voicebridge can be asked to just take detailed messages from callers with message summaries delivered to you, so you can follow up with them with the information you need.
              </Text>
            </Card>
          </Col>
        </Row>
        
        {/* Benefits */}
        <Row ref={benefitsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <CheckFat size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h2 style={{ marginTop: 0 }}>Benefits</h2>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20, paddingLeft: isPageWide ? 40 : 0, paddingRight: isPageWide ? 40 : 0 }}>
          <Col xs={12} sm={12} md={12} lg={6} xl={5} style={{ textAlign: 'left', maxWidth: 500 }}>

              <CurrencyDollar size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Unlock Lost Revenue</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                SMBs miss 25% to 62% of phone calls, leading to an average of $100K to $500K in lost revenue. Ensure no potential customers slip through the cracks with Voicebridge's 24/7/365 AI receptionist.
              </Text>
              <Voicemail size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10, marginTop: 20 }} />
              <Heading size="5">Better Than Voicemail</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Voicemail is a thing of the past. Voicebridge's AI receptionist uses advanced natural language models to capture details from callers so you have all the information you need to follow up.
              </Text>
              <Clock size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10, marginTop: 20 }} />
              <Heading size="5">Increase Customer Satisfaction</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Around 60% of customers abandon calls if they aren't answered within one minute, leading to frustration, decreased loyalty, and switching to competitors.
              </Text>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={7} style={{ padding: 20 }}>
          <div style={{ padding: 20, background: 'linear-gradient(135deg, #e0f7fa 0%, #f8bbd0 50%, #e8f5e9 100%)', display: 'flex', justifyContent: 'flex-start' }}>
            <Image src="/assets/screenshots/calls.png" style={{ height: 700, objectFit: 'cover', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
          </div>
          </Col>
        </Row>

        {/* Industries */}
        <Row ref={industriesRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 80 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Headset size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h2>Industries</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={6} xl={6} style={{ textAlign: 'center', paddingLeft: 0 }}>
                <Text size='4' color="gray">Voicebridge is a great fit for any business that wants to ensure they never miss a call.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={6} sm={6} md={6} lg={4} xl={3} style={{ padding: 10 }}>
            <Card style={{ padding: 20, textAlign: 'center' }}>
              <Heading size="4" as="div">Health clinics</Heading>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={4} xl={3} style={{ padding: 10 }}>
            <Card style={{ padding: 20, textAlign: 'center' }}>
              <Heading size="4" as="div">Service providers</Heading>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={4} xl={3} style={{ padding: 10 }}>
            <Card style={{ padding: 20, textAlign: 'center' }}>
              <Heading size="4" as="div">Real estate</Heading>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={4} xl={3} style={{ padding: 10 }}>
            <Card style={{ padding: 20, textAlign: 'center' }}>
              <Heading size="4" as="div">Law firms</Heading>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={4} xl={3} style={{ padding: 10 }}>
            <Card style={{ padding: 20, textAlign: 'center' }}>
              <Heading size="4" as="div">Landscaping</Heading>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={4} xl={3} style={{ padding: 10 }}>
            <Card style={{ padding: 20, textAlign: 'center' }}>
              <Heading size="4" as="div">Event planners</Heading>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={4} xl={3} style={{ padding: 10 }}>
            <Card style={{ padding: 20, textAlign: 'center' }}>
              <Heading size="4" as="div">Restaurants</Heading>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={4} xl={3} style={{ padding: 10 }}>
            <Card style={{ padding: 20, textAlign: 'center' }}>
              <Heading size="4" as="div">Gyms</Heading>
            </Card>
          </Col>
        </Row>

        {/* Features */}
        {/* <Row ref={featuresRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 80 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Waveform size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h2>Elevate Your Communication</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'center', paddingLeft: 0 }}>
                <Text size='4' color="gray">Voicebridge's receptionist is built to conduct personalized conversations at scale based on the needs of your business and customers.</Text>
              </Col>
            </Row>
          </Col>
        </Row> */}

        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
        <Col xs={12} sm={6} md={6} lg={5} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <QuestionMark size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Question Handling</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Voicebridge automatically responds to common customer inquiries with business information and FAQs provided by your business. Reduce repetitive and time-consuming calls while ensuring consistent responses.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={5} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Calendar size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Calendar Booking</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Let callers schedule appointments directly through your AI receptionist. Voicebridge integrates seamlessly with your existing calendar system to check for availability and book appointments.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={5} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <NotePencil size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Call Summary</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Voicebridge automatically generates call summaries and transcripts for every call, allowing you to review, follow-up, and also analyze conversations for training and improvement.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={5} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ChatCircle size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Message Capture</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Every Never miss important caller information with comprehensive message taking. Receive organized summaries  with all relevant details.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={5} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <SpeakerHigh size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Custom Voice & Brand</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Voicebridge allows you to choose an AI voice and train your receptionist on your own knowledge base and FAQs. Create a consistent brand experience that resonates with your callers.
              </Text>
            </Card>
          </Col>
        </Row> */}

        {/* Integrations */}
        <Row ref={integrationsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 80 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Link size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h2>Seamless Integrations</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'center', paddingLeft: 0 }}>
                <Text size='4' color="gray">Voicebridge's AI receptionist can be connected with your most common tools, including calendars, EHRs, and more.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 40, padding: 20 }}>
          <Image src="/assets/integrations/cal.png" height="20px" alt="Cal.com" />
            <Image src="/assets/integrations/calendly.svg" height="22px" alt="Calendly" />
            <Image src="/assets/integrations/googlecalendar.png" height="36px" alt="Google Calendar" />
            <Image src="/assets/integrations/acuity.svg" height="22px" alt="Acuity" />
          </Col>
          {/* <Col xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 40, padding: 20 }}>
            <Image src="/assets/integrations/epic.png" height="24px" alt="Epic" />
            <Image src="/assets/integrations/cerner.png" height="24px" alt="Cerner" />
            <Image src="/assets/integrations/athena.png" height="24px" alt="Athena" />
            <Image src="/assets/integrations/allscripts.png" height="24px" alt="Allscripts" />
          </Col> */}
        </Row>

        {/* How it works */}
        <Row ref={howItWorksRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 80, paddingTop: isPageWide ? 60 : 40, backgroundColor: 'var(--accent-2)' }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Steps size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h2>How it works</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'center', paddingLeft: 0 }}>
                <Text size='4' color="gray">Get started in minutes and let Voicebridge handle your calls while you focus on your business.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, backgroundColor: 'var(--accent-2)', paddingBottom: isPageWide ? 60 : 40 }}>
          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: 'var(--accent-2)' }}>
              <Text size="8" as="div" style={{ color: 'var(--accent-9)', marginBottom: 15 }}>1</Text>
              <h3>Train your receptionist</h3>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Enter your website URL and let Voicebridge automatically extract your business information including name, address, hours of operation, services offered, and frequently asked caller questions so the receptionist can answer questions correctly and consistently.
              </Text>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: 'var(--accent-2)' }}>
              <Text size="8" as="div" style={{ color: 'var(--accent-9)', marginBottom: 15 }}>2</Text>
              <h3>Configure & connect</h3>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Connect your preferred calendar system to the receptionist so it can check for availability and book appointments. Choose a voice, language, ambient sounds and other settings to personalize the receptionist to your business and your customers.
              </Text>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: 'var(--accent-2)' }}>
              <Text size="8" as="div" style={{ color: 'var(--accent-9)', marginBottom: 15 }}>3</Text>
              <h3>Forward your calls</h3>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Set up call forwarding to Voicebridge when you are busy, after business hours, or on holidays and weekends when you are away from the phone. The process is quick and compatible with any existing phone system you currently use.
              </Text>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: 'var(--accent-2)' }}>
              <Text size="8" as="div" style={{ color: 'var(--accent-9)', marginBottom: 15 }}>4</Text>
              <h3>Review missed calls</h3>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Your AI receptionist professionally answers all incoming calls by taking messages, answering questions, and scheduling appointments. Each call is recorded and documented with summaries, transcripts and recordings for your review.
              </Text>
            </Card>
          </Col>
        </Row>


        {/* Pricing */}
        <Row ref={pricingRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 80 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <CurrencyDollar size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h2>Pricing</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'center', paddingLeft: 0 }}>
                <Text size='4' color="gray">Sign up for a free trial and get 30 minutes of calls. No credit card required and no commitment.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <h4 style={{ color: 'var(--accent-9)' }}>Starter</h4>
              <Text size="8" as="div" style={{ marginTop: 20 }}>$29</Text>
              <Text size="3" color="gray" as="div">per month</Text>
              <Text size="4" weight="medium" as="div" style={{ marginTop: 10 }}>
                Perfect for small businesses or ones just getting started
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 120 minutes of calls
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <X size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> No calendar integration
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Basic voice selection
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <X size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> No follow-ups
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 7-day call recordings
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Email & web chat support
              </Text>
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}>
                Book a demo
              </Button>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <h4 style={{ color: 'var(--accent-9)' }}>Growth</h4>
              <Text size="8" as="div" style={{ marginTop: 20 }}>$99</Text>
              <Text size="3" color="gray" as="div">per month</Text>
              <Text size="4" weight="medium" as="div" style={{ marginTop: 10 }}>
                For businesses with increasing call volumes
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 360 minutes of calls
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 1 calendar integration
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Basic voice selection
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> SMS or email follow-ups
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 30-day call recordings
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Email & web chat support
              </Text>
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}>
                Book a demo
              </Button>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <h4 style={{ color: 'var(--accent-9)' }}>Pro</h4>
              <Text size="8" as="div" style={{ marginTop: 20 }}>$299</Text>
              <Text size="3" color="gray" as="div">per month</Text>
              <Text size="4" weight="medium" as="div" style={{ marginTop: 10 }}>
                For businesses with very high call volumes and need to scale
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 1200 minutes of calls
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> All integrations
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Custom voice selection
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> SMS or email follow-ups
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 1-year call recordings
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Email & web chat support
              </Text>
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}>
                Book a demo
              </Button>
            </Card>
          </Col>
        </Row>

        {/* FAQ */}
        <Row ref={faqRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 80 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <QuestionMark size={22} weight="bold" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h2>Frequently asked questions</h2>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
          <Col xs={12} sm={11} md={10} lg={10} xl={9}>
            {faqItems.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Col>
        </Row>

        {/* Call to action */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 140 : 120 }}>
          <Col xs={12} sm={11} md={11} lg={10} xl={10} style={{ textAlign: 'center', maxWidth: 800 }}>
            <h2>Ready to transform your phone handling?</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={10} md={9} lg={8} xl={8} style={{ textAlign: 'center' }}>
                <Text size={isPageWide ? "4" : "3"} color="gray" as='div'>Don't miss out on opportunities. Voicebridge is your AI-powered partner in delivering exceptional reception and customer engagement - at a fraction of the cost of other services.</Text>
                <Button variant="solid" size="4" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}>
                  <Calendar size={20} weight="bold" style={{ color: 'white' }} /> Book a demo
                </Button>
                <div style={{ marginTop: 20 }}>
                  <Text size="1" color="gray">30-minute call • No commitment</Text>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Footer Links */}
        <Row style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 160, marginBottom: 40 }}>
          <Col xs={12} md={4} style={{ marginBottom: 20, maxWidth: 300 }}>
            <img src="/logo.svg" alt="Voicebridge Logo" style={{ height: 24 }} />
            <Text size="3" color="gray" as="div" style={{ marginTop: 15 }}>
              The AI phone receptionist that answers calls when you can't
            </Text>
          </Col>

          <Col xs={6} md={4} style={{ marginBottom: 20 }}>
            <Text size="3" weight="bold" as="div" style={{ marginBottom: 15 }}>Legal</Text>
            <Text size="2" color="gray" as='div' style={{ marginBottom: 10 }}><Link href="/assets/policies/privacy_policy.pdf" target="_blank">Privacy Policy</Link></Text>
            <Text size="2" color="gray" as='div' style={{ marginBottom: 10 }}><Link href="/assets/policies/terms.pdf" target="_blank">Terms of Service</Link></Text>
          </Col>

          <Col xs={6} md={4} style={{ marginBottom: 20 }}>
            <Text size="3" weight="bold" as="div" style={{ marginBottom: 15 }}>Contact</Text>
            <Text size="2" color="gray" as="div" style={{ marginBottom: 10 }}>
              hello@voicebridgeai.com
            </Text>
            <Text size="2" color="gray" as="div">
              San Francisco, CA
            </Text>
          </Col>
        </Row>

        {/* Footer */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
          <Col style={{ textAlign: 'center' }}>
            <Text size='1' color="gray" as='div'>Copyright 2025, Molecule Climate Inc.</Text>
          </Col>
        </Row>


        <div style={{ height: 100 }}></div>

      </Col>
    </Row>

  )

}
