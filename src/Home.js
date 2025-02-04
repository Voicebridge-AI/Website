import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Badge, Button, Card, Heading, Text, Link } from '@radix-ui/themes';
import { Calendar, Waveform, SpeakerHigh, Check, CheckFat, CurrencyDollar, Clock, Steps, Checks, QuestionMark, NotePencil, X, ArrowDown, Smiley } from '@phosphor-icons/react';
import { useMediaQuery } from './shared-functions.js';
import { ThemeContext } from './Theme.js';
import Marquee from "react-fast-marquee";

export default function Home() {

  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const integrationsRef = useRef(null);
  const faqRef = useRef(null);
  const howItWorksRef = useRef(null);
  const pricingRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const heroAudioRef = useRef(new Audio('/assets/audio/sally-dr-carter-inbound.wav'));

  let isPageWide = useMediaQuery('(min-width: 640px)');
  const { theme } = useContext(ThemeContext);

  const scrollEffect = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const toggleAudio = (audioRef) => {
    // If this is the currently playing audio, toggle play/pause
    if (currentAudio === audioRef) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
    // Otherwise just play the new audio
    else {
      // Pause currently playing audio if any
      if (currentAudio) {
        currentAudio.current.pause();
      }
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentAudio(audioRef);
    }
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

      <Col xs={12} sm={12} md={12} lg={11} xl={11} style={{ padding: 10 }}>

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '5px 10px', backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
          <Image src="/logo.svg" alt="Voicebridge" width={isPageWide ? 160 : 140} style={{ marginLeft: 10 }} />
          <Nav className="ml-auto" style={{ marginRight: 0 }}>
            <Nav.Link onClick={() => scrollEffect(benefitsRef)}>Benefits</Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(featuresRef)}>Features</Nav.Link>}
            {isPageWide && <Nav.Link onClick={() => scrollEffect(faqRef)}>FAQs</Nav.Link>}
            <Nav.Link onClick={() => scrollEffect(howItWorksRef)}>How it works</Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(pricingRef)}>Pricing</Nav.Link>}
          </Nav>
          {isPageWide && false &&
          <Button
            variant="ghost"
            size="2"
            style={{ marginRight: 0 }}
            onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}
          >Book a demo
            </Button>
          }
        </Navbar>

        {/* Hero section */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40, minHeight: '50vh' }}>
          <Col xs={12} sm={11} md={12} lg={12} xl={12} style={{ textAlign: 'center', maxWidth: 1200 }}>
            <h1>The AI Phone Receptionist for Clinics</h1>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center', padding: 0 }}>
                <Text size='4' color="gray" as='div' style={{ marginTop: 10 }}>Missed calls cost clinics $300K to $1M annually in lost revenue. Voicebridge ensures every call is answered, especially when you are busy or after hours.</Text>
                <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
                  <Text size="3" color="gray" as='div' style={{ marginRight: 10 }}><Checks size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Available 24/7/365</Text>
                  <Text size="3" color="gray" as='div' style={{ marginLeft: 10 }}><Checks size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Books appointments</Text>
                </Row>
                <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 5 }}>
                  <Text size="3" color="gray" as='div' style={{ marginRight: 10 }}><Checks size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Takes messages</Text>
                  <Text size="3" color="gray" as='div' style={{ marginLeft: 10 }}><Checks size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Delivers summaries</Text>
                </Row>
                <Button variant="solid" size="4" style={{ marginTop: 20 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Book a demo</Button>

                <Text size='3' as='div' style={{ marginTop: 20 }}>Listen to a sample call</Text>
                <ArrowDown size={22} weight="bold" style={{ color: 'var(--accent-9)', marginTop: 10, marginBottom: 10 }} />
                <div style={{
                  marginTop: 10,
                }}>
                  <video
                    controls
                    poster="/assets/agents/ai-receptionist-sally.jpg"
                    controlsList="nodownload noremoteplayback no-picture-in-picture "
                    width="100%"
                    style={{ marginBottom: 10 }}
                  >
                    <source src="/assets/audiograms/sally-dr-carter-inbound-audiogram.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Social proof - Past experience helping milions of athletes, fitness professionals, and health professionals */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={10} sm={9} md={8} lg={8} xl={8} style={{ padding: 0, textAlign: 'center', maxWidth: 400 }}>
            <Text size='2' color="gray" as='p'>Built by a team that has built multiple health and sports software products benefiting millions of users</Text>
          </Col>
        </Row>

        {/* Company logos */}

        <Marquee pauseOnHover={true} gradientColor={'#13103C'} style={{ marginTop: 40 }}>
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

        <Row ref={benefitsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <CheckFat size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h6>Benefits of Voicebridge</h6>
            <h2 style={{ marginTop: 10 }}>Transform Your Clinic's Performance</h2>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 40 : 40 }}> 
          <Col xs={12} sm={10} md={8} lg={5} xl={5} style={{ padding: 30 }}>
            <CurrencyDollar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h3>Unlock Lost Revenue</h3>
            <Text size='4' color="gray" as='div'>Missed calls cost clinics $300K to $1M annually in lost revenue. Voicebridge ensures every call is answered, especially when you are busy or after hours.</Text>

            <Clock size={22} weight="regular" style={{ color: 'var(--accent-9)', marginTop: 30, marginBottom: 10 }} />
            <h3>Increase Productivity</h3>
            <Text size='4' color="gray" as='div'>Staff spend an average of 3 hours per day handling routine phone calls, costing over $15,000 annually in lost productivity. Voicebridge agents handle inquiries and appointment scheduling while your team focuses on higher-value tasks and patient care.</Text>
            
            <Smiley size={22} weight="regular" style={{ color: 'var(--accent-9)', marginTop: 30, marginBottom: 10 }} />
            <h3>Increase Patient Satisfaction</h3>
            <Text size='4' color="gray" as='div'>Around 60% of patients abandon calls if wait times exceed one minute, leading to provider switching due to dissatisfaction. Voicebridge ensures every call is answered, especially when you are busy or after hours.</Text>

          </Col>
          <Col xs={12} sm={10} md={8} lg={7} xl={5} style={{ textAlign: 'center', padding: 20, background: 'linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 100%)' }}>
            <Image src="/assets/screenshots/calls.png" style={{ height: '100%', maxHeight: 720 }} />
          </Col>
        </Row>

        {/* Benefits */}
        {/* <Row ref={benefitsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40, paddingTop: isPageWide ? 60 : 40, backgroundColor: 'var(--accent-2)' }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <CheckFat size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h6>Benefits of Voicebridge</h6>
            <h2 style={{ marginTop: 10 }}>Transform Your Clinic's Performance</h2>
          </Col>
        </Row> */}

        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, backgroundColor: 'var(--accent-2)', paddingBottom: isPageWide ? 60 : 40, paddingLeft: isPageWide ? 40 : 0, paddingRight: isPageWide ? 40 : 0 }}>
          <Col xs={12} sm={6} md={6} lg={6} xl={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: 'var(--accent-2)' }}>
              <CurrencyDollar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <h3>Unlock Lost Revenue</h3>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Clinics miss 25% to 62% of phone calls, leading to $300K to $1M in lost revenue. Ensure no potential patients slip through the cracks with Voicebridge's 24/7/365 AI agent that answers calls and books appointments.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: 'var(--accent-2)' }}>
              <Clock size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <h3>Increase Productivity</h3>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Staff spend an average of 3 hours per day handling routine phone calls, costing over $15,000 annually in lost productivity. Voicebridge agents handle inquiries and appointment scheduling while your team focuses on higher-value tasks and patient care.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: 'var(--accent-2)', color: 'black' }}>
              <Clock size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <h3>Increase Patient Satisfaction</h3>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Around 60% of patients abandon calls if wait times exceed one minute, leading to provider switching due to dissatisfaction. Voicebridge ensures every call is answered, especially when you are busy or after hours.
              </Text>
            </Card>
          </Col>
        </Row> */}

        {/* Features */}
        <Row ref={featuresRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 80 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Waveform size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h2>Elevate Your Communication</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'center', paddingLeft: 0 }}>
                <Text size='4' color="gray">Voicebridge's agents are built to conduct personalized AI conversations at scale based on the needs of your clinic and patients.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={6} lg={5} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <NotePencil size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Call Summary & Transcripts</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Voicebridge automatically generates call summaries and transcripts for every call, allowing you to review, follow-up, and also analyze conversations for training and improvement.
              </Text>
            </Card>
          </Col>
          {/* <Col xs={12} sm={6} md={6} lg={5} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ChatCircle size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Message Capture</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Every Never miss important caller information with comprehensive message taking. Receive organized summaries  with all relevant details.
              </Text>
            </Card>
          </Col> */}
          <Col xs={12} sm={6} md={6} lg={5} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <QuestionMark size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Question Handling</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Voicebridge automatically responds to common customer inquiries with business information and FAQs provided by your clinic. Reduce repetitive and time-consuming calls while ensuring consistent responses.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={5} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Calendar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Calendar Booking</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Let callers schedule appointments directly through your AI agent. Voicebridge integrates seamlessly with your existing calendar system to check for availability and book appointments.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={5} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <SpeakerHigh size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Custom Voice & Brand</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Voicebridge allows you to choose an AI voice and train your agent on your own knowledge base and FAQs. Create a consistent brand experience that resonates with your callers.
              </Text>
            </Card>
          </Col>
        </Row>

        {/* Integrations */}
        <Row ref={integrationsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 80 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Link size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h2>Seamless Integrations</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'center', paddingLeft: 0 }}>
                <Text size='4' color="gray">Voicebridge's AI agent can be connected with your most common tools, including calendars, EHRs, and more.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 40, padding: 20 }}>
            <Image src="/assets/integrations/calendly.svg" height="22px" alt="Calendly" />
            <Image src="/assets/integrations/cal.png" height="20px" alt="Cal.com" />
            <Image src="/assets/integrations/acuity.svg" height="22px" alt="Acuity" />
          </Col>
          <Col xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 40, padding: 20 }}>
            <Image src="/assets/integrations/epic.png" height="24px" alt="Epic" />
            <Image src="/assets/integrations/cerner.png" height="24px" alt="Cerner" />
            <Image src="/assets/integrations/athena.png" height="24px" alt="Athena" />
            <Image src="/assets/integrations/allscripts.png" height="24px" alt="Allscripts" />
          </Col>
        </Row>

        {/* How it works */}
        <Row ref={howItWorksRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 80, paddingTop: isPageWide ? 60 : 40, backgroundColor: 'var(--accent-2)' }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Steps size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
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
              <h3>Train your AI agent</h3>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Provide your business information including business name, address, hours of operation, services, and common caller questions so Voicebridge agents will answer questions correctly and consistently.
              </Text>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: 'var(--accent-2)' }}>
              <Text size="8" as="div" style={{ color: 'var(--accent-9)', marginBottom: 15 }}>2</Text>
              <h3>Configure & connect</h3>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Connect your preferred calendar system to enable seamless appointment scheduling capabilities and personalize your agent with a custom name and voice.
              </Text>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: 'var(--accent-2)' }}>
              <Text size="8" as="div" style={{ color: 'var(--accent-9)', marginBottom: 15 }}>3</Text>
              <h3>Forward your calls</h3>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Set up call forwarding to Voicebridge for when you are unavailable or after business hours. The process is quick and compatible with any existing phone system you currently use.
              </Text>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: 'var(--accent-2)' }}>
              <Text size="8" as="div" style={{ color: 'var(--accent-9)', marginBottom: 15 }}>4</Text>
              <h3>Let AI handle calls</h3>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Your AI agent professionally answers all incoming calls by taking messages, answering questions, and scheduling appointments. Each conversation is documented with summaries, transcripts and recordings for your review.
              </Text>
            </Card>
          </Col>
        </Row>


        {/* Pricing */}
        <Row ref={pricingRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 80 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
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
                Perfect for small clinics or ones just getting started
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 10 minutes of calls
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
                For clinics with increasing call volumes
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 30 minutes of calls
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
                For clinics with very high call volumes and need to scale
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 120 minutes of calls
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
            <h2>Frequently asked questions</h2>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
          <Col xs={12} sm={11} md={10} lg={10} xl={9}>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <h4>What is Voicebridge?</h4>  
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Voicebridge is an AI-powered phone answering agent that handles incoming calls from current and potential patients when you are busy, unavailable, or after business hours.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <h4>Who is Voicebridge for?</h4>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Voicebridge is designed for small and medium-sized health clinics, therapist offices, telehealth providers, and similar businesses that want to ensure they never miss an important call.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <h4>Can I customize the AI's voice and greeting?</h4>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Yes, you can personalize the agent's name, voice, and greeting to align with your brand.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <h4>How does Voicebridge handle appointment scheduling?</h4>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Voicebridge can integrate with calendars and EHRs to allow callers to book appointments directly.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <h4>Will Voicebridge work during after-hours?</h4>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Absolutely. Voicebridge operates 24/7 to ensure no call is missed.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <h4>What happens if the AI can't answer a caller's question?</h4>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                If the AI cannot answer a question, it will take a detailed message and notify you for follow-up.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <h4>Is Voicebridge secure?</h4>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Yes, we prioritize data security and ensure all interactions are encrypted and confidential.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <h4>Can Voicebridge share documents or links during calls?</h4>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Yes, the AI can provide links to documents, forms, or URLs as needed during the conversation.
              </Text>
            </Card>

            <Card style={{ padding: 20 }}>
              <h4>How do I get started with Voicebridge?</h4>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Sign up for a demo to explore how Voicebridge can work for your business.
              </Text>
            </Card>

          </Col>
        </Row>

        {/* Call to action */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 140 : 120 }}>
          <Col xs={12} sm={11} md={11} lg={10} xl={10} style={{ textAlign: 'center', maxWidth: 800 }}>
            <h2>Ready to transform your phone handling?</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={10} md={9} lg={8} xl={8} style={{ textAlign: 'center' }}>
                <Text size={isPageWide ? "4" : "3"} color="gray" as='div'>Don't miss out on opportunities. Voicebridge is your AI-powered partner in delivering exceptional reception and patient engagement - at a fraction of the cost of other services.</Text>
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
          <Col xs={12} md={4} style={{ marginBottom: 20 }}>
            <img src="/logo.svg" alt="Voicebridge Logo" style={{ height: 30 }} />
            <Text size="3" color="gray" as="div" style={{ marginTop: 15 }}>
              The AI phone receptionist for clinics
            </Text>
          </Col>
          
          <Col xs={12} md={4} style={{ marginBottom: 20 }}>
            <Text size="3" weight="bold" as="div" style={{ marginBottom: 15 }}>Legal</Text>
            <Text size="2" color="gray" as='div' style={{ marginBottom: 10 }}><Link href="/assets/policies/privacy_policy.pdf" target="_blank">Privacy Policy</Link></Text>
            <Text size="2" color="gray" as='div' style={{ marginBottom: 10 }}><Link href="/assets/policies/terms.pdf" target="_blank">Terms of Service</Link></Text>
          </Col>

          <Col xs={12} md={4} style={{ marginBottom: 20 }}>
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