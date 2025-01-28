import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Badge, Button, Card, Heading, Text } from '@radix-ui/themes';
import { Calendar, Play, Pause, Waveform, ChatCircle, SpeakerHigh, Globe, Phone, Plugs, ChartLine, Voicemail, UserCircle, Pill, Check, Person, SquaresFour, CheckFat, Link, CurrencyDollar, Clock, Star, CheckCircle, Steps } from '@phosphor-icons/react';
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

  const heroAudioRef = useRef(new Audio('/assets/audio/sally-sam-studio-inbound.wav'));

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
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20, minHeight: '50vh' }}>

          <Col xs={12} sm={10} md={8} lg={7} xl={7} style={{ textAlign: 'left', maxWidth: 600 }}>

            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'left', padding: 0 }}>
                {/* <Badge size="2" style={{ }}></Badge> */}
                {/* <Heading size={isPageWide ? '9' : '8'} as='div'>The AI Phone Receptionist for Clinics</Heading> */}
                <h1>The AI Phone Receptionist for Clinics</h1>
              </Col>
            </Row>

            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={10} lg={10} xl={10} style={{ textAlign: 'left', padding: 0 }}>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div'>Don't let missed calls cost your business. Voicebridge's AI-powered answering agent ensures every call is answered, especially when you are busy or after hours.</Text>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Available 24/7/365</Text>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Books appointments</Text>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Takes messages</Text>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Delivers summaries</Text>
              </Col>
            </Row>

            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={11} sm={10} md={8} lg={8} xl={6} style={{ textAlign: 'left' }}>
                <Button variant="solid" size={isPageWide ? '4' : '3'} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Book a demo</Button>

                <Text size='2' color="gray" as='p' style={{ marginTop: 10 }}>30-minute demo. No commitment.</Text>

              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={10} md={8} lg={5} xl={5} style={{ textAlign: 'center', maxWidth: 600 }}>
            <Card style={{ 
              marginTop: 20,
            }}>
              <Image src="/assets/agents/appointment-reminder-alex.jpg" width="100%" style={{ marginBottom: 15 }} />
              
              <Text size='5' as='div' style={{ textAlign: 'center', fontWeight: 'bold' }}>Listen to a sample call</Text>
              <Text size='2' color="gray" as='div' style={{ textAlign: 'center' }}>Sally, the AI Receptionist</Text>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: 10,
                width: '100%',
                backgroundColor: '#FFF1F0',
                padding: '10px 16px',
                border: '1px solid var(--accent-6)',
                borderRadius: '32px'
              }}>
                <Button
                  variant="solid"
                  size="2"
                  onClick={() => toggleAudio(heroAudioRef)}
                  style={{ 
                    padding: 8,
                    borderRadius: '50%',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {isPlaying && currentAudio === heroAudioRef ? (
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
                      heroAudioRef.current.currentTime = percentage * duration;
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

                <Text size="3" style={{ minWidth: 60 }}>
                  {duration ?
                    `${Math.floor(currentTime / 60)}:${String(Math.floor(currentTime % 60)).padStart(2, '0')} / ${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, '0')}` :
                    'Loading...'}
                </Text>
              </div>
            </Card>
          </Col>

        </Row>

        {/* Social proof - Past experience helping milions of athletes, fitness professionals, and health professionals */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
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

        {/* Benefits */}
        <Row ref={benefitsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40, paddingTop: isPageWide ? 60 : 40, backgroundColor: '#FFF1F0' }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <CheckFat size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <h2>Why Voicebridge?</h2>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, backgroundColor: '#FFF1F0', paddingBottom: isPageWide ? 60 : 40 }}>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: '#F9F9F9', color: 'black' }}>
              <CurrencyDollar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <h3>Avoid Lost Revenue</h3>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                The average clinic misses 62% of phone calls, with each missed call potentially costing $500-$1,000 in lost revenue. Ensure no potential customer slips through the cracks with our 24/7 call coverage that converts inquiries into appointments.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: '#F9F9F9', color: 'black' }}>
              <Clock size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <h3>Reduce Costs</h3>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                The average clinic spends $36,000 annually on after-hours answering services or staff overtime. Replace expensive staffing with an AI agent that works tirelessly at a fraction of the cost, saving up to 75% on your current phone answering expenses.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: '#F9F9F9', color: 'black' }}>
              <Clock size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <h3>Save Time</h3>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Staff spend an average of 3 hours per day handling routine phone calls, costing over $15,000 annually in lost productivity. Let Voicebridge handle basic inquiries and appointment scheduling while your team focuses on higher-value tasks and patient care.
              </Text>
            </Card>
          </Col>
        </Row>

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
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <SpeakerHigh size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <h3>Custom Voice & Brand</h3>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Choose from multiple AI voices and customize your agent's name and greeting. Create a consistent brand experience that resonates with your callers.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ChatCircle size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="5">Detailed Message Capture</Heading>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Never miss important caller information with comprehensive message taking. Receive organized summaries directly to your inbox with all relevant details.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <SquaresFour size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <h3>Question Handling</h3>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Automatically respond to common customer inquiries with accurate information. Reduce repetitive calls while ensuring consistent responses to frequently asked questions.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Calendar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <h3>Smart Calendar Booking</h3>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Let callers schedule appointments directly through your AI agent. Integrates seamlessly with your existing calendar system to prevent double bookings.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ChartLine size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <h3>Call Summary & Transcripts</h3>
              <Text size="3" color="gray" as="p" style={{ marginTop: 10 }}>
                Receive call summaries and transcripts for every call, allowing you to review and analyze conversations for training and improvement.
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
        <Row ref={howItWorksRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 80, paddingTop: isPageWide ? 60 : 40, backgroundColor: '#FFF1F0' }}>
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

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, backgroundColor: '#FFF1F0', paddingBottom: isPageWide ? 60 : 40 }}>
          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: '#F9F9F9', color: 'black' }}>
              <Text size="8" as="div" style={{ color: 'tomato', marginBottom: 15 }}>1</Text>
              <h3>Train your AI agent</h3>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Simply provide your website URL and Voicebridge will learn your business basics automatically. You can further customize your AI agent by adding specific answers to common caller questions.
              </Text>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: '#F9F9F9', color: 'black' }}>
              <Text size="8" as="div" style={{ color: 'tomato', marginBottom: 15 }}>2</Text>
              <h3>Configure & connect</h3>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Personalize your agent with a custom name and voice, and set up your preferred greeting message. Connect your preferred calendar system to enable seamless appointment scheduling capabilities.
              </Text>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: '#F9F9F9', color: 'black' }}>
              <Text size="8" as="div" style={{ color: 'tomato', marginBottom: 15 }}>3</Text>
              <h3>Forward your calls</h3>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Set up call forwarding to Voicebridge for when you're unavailable or after business hours. The process is quick and compatible with any existing phone system you currently use.
              </Text>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={5} style={{ padding: 20 }}>
            <Card style={{ padding: 20, height: '100%', backgroundColor: '#F9F9F9', color: 'black' }}>
              <Text size="8" as="div" style={{ color: 'tomato', marginBottom: 15 }}>4</Text>
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
                Perfect for businesses just getting started
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 30 minutes of calls
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
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 180 minutes of calls
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 1 calendar integration
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Choose your agent's voice
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
                For businesses with very high call volumes
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 20 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> 720 minutes of calls
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Up to 3 integrations
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Choose your agent's voice
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> SMS follow-ups
              </Text>
              <Text size="3" color="gray" as="div" style={{ marginTop: 5 }}>
                <Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Save call recordings
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
                Voicebridge is an AI-powered phone answering agent that handles calls when you're busy, unavailable, or after business hours.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <h4>Who is Voicebridge for?</h4>
              <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                Voicebridge is designed for small and medium-sized health clinics, therapist offices, and similar businesses that want to ensure they never miss an important call.
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
                Voicebridge can integrate with your calendar to allow callers to book appointments directly.
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
                <Text size={isPageWide ? "4" : "3"} color="gray" as='div'>Don't miss out on opportunities. Voicebridge is your AI-powered partner in delivering exceptional customer service.</Text>
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

        {/* Footer */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
          <Col style={{ textAlign: 'center' }}>
            <Text size='1' color="gray">Copyright 2025, Molecule Climate Inc.</Text>
          </Col>
        </Row>


        <div style={{ height: 100 }}></div>

      </Col>
    </Row>

  )

}