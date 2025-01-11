import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Button, Card, Heading, Text } from '@radix-ui/themes';
import { Calendar, Question, Play, Pause, Waveform, ChatCircle, SpeakerHigh, Globe, Phone, Plugs, ShieldCheck, ChartLine, Voicemail, UserCircle, Pill, Check, Person, SquaresFour, CheckFat, PhoneOutgoing, PhoneIncoming, Link } from '@phosphor-icons/react';
import { useMediaQuery } from './shared-functions.js';
import { ThemeContext } from './Theme.js';
import Marquee from "react-fast-marquee";

export default function Home() {

  const agentsRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const pricingRef = useRef(null);
  const integrationsRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const heroAudioRef = useRef(new Audio('/assets/audio/alex-appointment-reminder.wav'));

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
      heroAudioRef.current.pause();
    } else {
      heroAudioRef.current.play();
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

      <Col xs={12} sm={12} md={12} lg={11} xl={11} style={{ padding: 10 }}>

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '5px 10px', backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
          <Image src="/logo.svg" alt="Voicebridge" width={isPageWide ? 160 : 140} style={{ marginLeft: 10 }} />
          <Nav className="ml-auto" style={{ marginRight: 10 }}>
            <Nav.Link onClick={() => scrollEffect(benefitsRef)}>Benefits</Nav.Link>
            <Nav.Link onClick={() => scrollEffect(agentsRef)}>Agents</Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(featuresRef)}>Features</Nav.Link>}
            {/* {isPageWide && <Nav.Link onClick={() => scrollEffect(faqRef)}>FAQs</Nav.Link>} */}
          </Nav>
          {isPageWide &&
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
              <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'left' }}>
                <Heading size={isPageWide ? '9' : '8'} as='div'>
                  AI phone agents for clinics
                </Heading>
              </Col>
            </Row>

            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={10} lg={10} xl={10} style={{ textAlign: 'left' }}>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div'>Appointment reminders, intake calls, medication reminders, health risk assessments, and more.</Text>
                <Text size='4' color="gray" as='div' style={{ marginTop: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Available 24/7</Text>
                <Text size='4' color="gray" as='div' style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> HIPAA compliant</Text>
                <Text size='4' color="gray" as='div' style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Avoid no-shows</Text>
                <Text size='4' color="gray" as='div' style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Better patient engagement</Text>
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
              padding: '20px 20px 15px 20px',
              marginTop: 20,
              borderRadius: 20,
              border: '1px solid var(--gray-6)',
              backgroundColor: 'var(--gray-1)'
            }}>
              <Image src="/assets/agents/appointment-reminder.jpg" width="100%" style={{ marginBottom: 15 }} />
              
              <Text size='5' as='div' style={{ textAlign: 'center', fontWeight: 'bold' }}>Listen to a sample call</Text>
              <Text size='2' color="gray" as='div' style={{ textAlign: 'center' }}>AI Appointment Reminder Agent</Text>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: 10,
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

                <Text size="1" style={{ minWidth: 60 }}>
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
        <Row ref={benefitsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <CheckFat size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size={ isPageWide ? '8' : '6' }>Benefits</Heading>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Calendar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Avoid No-Shows</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Prevent missed appointments through automated reminders and follow-ups. Fill cancelled slots quickly with waitlisted patients to maximize schedule efficiency and revenue.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ChartLine size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Save Staff Time</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Eliminate manual phone tasks through intelligent automation of reminders and scheduling. Let your staff focus on direct patient care and high-value responsibilities.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ChatCircle size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Better Patient Relationships</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Enhance patient satisfaction through consistent communication and proactive outreach. Build stronger connections that improve outcomes and long-term retention.
              </Text>
            </Card>
          </Col>
        </Row>

        {/* Outbound Agents */}
        <Row ref={agentsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'left' }}>
            <PhoneOutgoing size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size={ isPageWide ? '8' : '6' }>Outbound Agents</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'left', paddingLeft: 0 }}>
                <Text size='4' color="gray">Voicebridge's outbound AI phone agents use human-like voice and natural language to conduct calls with your patients with the goal of improving patient engagement and outcomes.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Calendar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              {/* <Image src="/assets/agents/two.jpg" width="100%" style={{ marginBottom: 10 }} /> */}
              <Heading size="4">Appointment Reminder Agent</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Proactively calls patients about upcoming appointments, reduces no-shows through personalized reminders, and assists with scheduling changes when needed.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <UserCircle size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Patient Intake Agent</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Streamlines pre-appointment process by collecting patient information, medical history, symptoms, lifestyle details and verifying insurance information.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Pill size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Medication Reminders Agent</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Enhances medication adherence through scheduled reminder calls, tracks patient compliance, and provides support for treatment plan questions.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Person size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Health Risk Assessments Agent</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Conducts comprehensive health screenings through phone interviews, identifies risk factors, and flags patients who may need preventive care.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Question size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Patient Satisfaction Agent</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Systematically collects patient feedback through post-visit surveys, measures satisfaction levels, and gathers insights for service improvement.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Calendar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Appointment Rescheduling Agent</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Manages schedule changes efficiently by helping patients find convenient alternative appointments while maintaining clinic scheduling protocols.
              </Text>
            </Card>
          </Col>
        </Row>

        {/* Inbound Agents */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'left' }}>
            <PhoneIncoming size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size={ isPageWide ? '8' : '6' }>Inbound Agents</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'left', paddingLeft: 0 }}>
                <Text size='4' color="gray">Voicebridge's inbound AI phone agents use human-like voice and natural language to receive calls from your patients with the goal of improving patient engagement and outcomes.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <PhoneOutgoing size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Phone Answering Agent</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Handles common patient inquiries about billing, insurance, appointments, and clinic policies with accurate, consistent responses available 24/7.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Voicemail size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">After-Hours Agent</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Provides 24/7 coverage for urgent inquiries, routes emergency calls appropriately, and takes detailed messages for non-urgent matters.
              </Text>
            </Card>
          </Col>
        </Row>

        {/* Features */}
        <Row ref={featuresRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Waveform size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size={ isPageWide ? '8' : '6' }>Features</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'center', paddingLeft: 0 }}>
                <Text size='4' color="gray">Voicebridge's agents are built to conduct personalized AI conversations at scale based on the needs of your clinic and patients.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ChatCircle size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Personalized Conversations</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Human-like conversations that patiently listen and respond to each caller's questions and responses.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <SpeakerHigh size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Brand-Aligned Voice</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Customize the AI voice to match your clinic's tone and values for a consistent patient experience.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Globe size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Multi-Language Support</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Communicate with patients in their preferred language for better healthcare access and understanding.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Phone size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Predictive Dialing</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Optimize patient outreach with intelligent call timing and appointment scheduling.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Plugs size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Seamless Integrations</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Connect seamlessly with your EHR, Calendar, and other practice management systems.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ShieldCheck size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">DNC Management</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Automatically comply with Do Not Call regulations and patient preferences.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ChartLine size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Quality Monitoring</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Review call recordings and performance metrics to continuously improve patient outreach.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Voicemail size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Voicemail Detection</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Automatically detect and record voicemails, ensuring no important messages are missed.
              </Text>
            </Card>
          </Col>
        </Row>

        {/* Integrations */}
        <Row ref={integrationsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Link size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size={ isPageWide ? '8' : '6' }>Integrations</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'center', paddingLeft: 0 }}>
                <Text size='4' color="gray">Voicebridge's inbound and outbound agents can be integrated with your existing calendar, EHR, and other tools.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 40 }}>
            <Image src="/assets/integrations/calendly.svg" height="22px" alt="Calendly" />
            <Image src="/assets/integrations/cal.png" height="18px" alt="Cal.com" />
            <Image src="/assets/integrations/acuity.svg" height="22px" alt="Acuity" />
            <Image src="/assets/integrations/epic.png" height="20px" alt="Epic" />
            <Image src="/assets/integrations/cerner.png" height="22px" alt="Cerner" />
            <Image src="/assets/integrations/athena.png" height="20px" alt="Athena" />
            <Image src="/assets/integrations/allscripts.png" height="22px" alt="Allscripts" />
          </Col>
        </Row>

        {/* Pricing */}
        <Row ref={pricingRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Heading size={ isPageWide ? '8' : '6' } style={{ marginTop: 10 }}>Pricing</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center', paddingLeft: 0 }}>
                <Text size='3' color="gray" as='p'>We offer flexible, risk-free pricing based on the number of calls, the number of integrations, and the complexity of workflows.</Text>
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
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}>
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
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}>
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
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}>
                Book a demo
              </Button>
            </Card>
          </Col>
        </Row> */}

        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Text size="2" color="gray" as="div">
              Need a custom deployment?<br />
              <Button variant="solid" size="2" style={{ marginTop: 20 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}>Let's talk</Button>
            </Text>
          </Col>
        </Row> */}

        {/* FAQ */}
        {/* <Row ref={faqRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 120 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Heading size='8' style={{ marginTop: 10 }}>Frequently asked questions</Heading>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
          <Col xs={12} sm={11} md={10} lg={10} xl={9}>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">What scenarios can Voicebridge handle?</Heading>  
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                Voicebridge can answer questions about your business, schedule appointments, and collect information from callers. Voicebridge can be customized to handle custom workflows unique to your business needs.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">What tools does Voicebridge integrate with?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                Voicebridge integrates seamlessly with popular scheduling tools such as Cal.com, Calendly, and Acuity and can be customized to connect to with any other tools such as CRMs and EHRs.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">How does Voicebridge handle phone calls?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                Voicebridge uses advanced speech-to-text models and LLM-powered natural language processing to have human-like conversations with callers, understand the caller's intent, answer questions and perform actions.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">How long does it take to set up?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                Voicebridge can be configured in 2-3 days for basic use cases but can take longer for custom workflows and integrations.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">What happens if Voicebridge can't handle a request?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                If Voicebridge is experiencing a scenario that is not covered by it's set of instructions, it can be configured to record the customer's call and let the caller know you'll get back to them as soon as possible.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">Is it secure and private?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Yes, we take security seriously. All conversations are encrypted, and we comply with industry standards for data protection. You have full control over what information the AI can access and share.
            </Text>
          </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">What does it cost?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              We offer customized pricing based on your workflows and needs. 
            </Text>
          </Card>

            <Card style={{ padding: 20 }}>
            <Heading size="4">When will I see ROI?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              You can expect to see ROI within the first month through reduced administrative costs and improved client engagement.
            </Text>
          </Card>

          </Col>
        </Row> */}

        {/* LLM providers */}

        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
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
        </Row> */}

        {/* Call to action */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={11} md={11} lg={10} xl={10} style={{ textAlign: 'center', maxWidth: 800 }}>
            <Heading size={ isPageWide ? '8' : '6' }>Ready to get started?</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={11} md={10} lg={8} xl={8} style={{ textAlign: 'center' }}>
                <Text size="3" color="gray" as='div'>Start saving time and money by automating your outbound calling. Book a demo with us today to learn how Voicebridge can start helping.</Text>
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