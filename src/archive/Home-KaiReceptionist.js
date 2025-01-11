import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Button, Card, Heading, Text } from '@radix-ui/themes';
import { HandWaving, Clock, ChartLineUp, Heart, Calendar, ChartBar, Trophy, HandHeart, Headset, Pause, PhoneOutgoing, PhoneIncoming, ChatCircle, ChatText, ArrowsClockwise, Check, Wrench } from '@phosphor-icons/react';
import { useMediaQuery } from '../shared-functions.js';
import { ThemeContext } from '../Theme.js';

export default function Home() {

  const benefitsRef = useRef(null);
  const faqRef = useRef(null);
  const howItWorksRef = useRef(null);
  const skillsRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio('/assets/audio/kai-fitness-inbound.wav'));

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

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  return (
  
    <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 50 }}>
      <Col xs={12} sm={12} md={12} lg={11} xl={10} style={{ padding: 10 }}>

      {/* Background gradient */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'linear-gradient(to bottom, rgba(255, 0, 0, 0.1), rgba(147, 51, 234, 0.07), rgba(59, 130, 246, 0.05))' }}></div>

      <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '5px 10px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          {/* <Image src="/logo.svg" alt="Jetflow" width={ isPageWide ? 80 : 72} style={{ marginLeft: 10, marginRight: 10 }} /> */}
          <Heading size='6' style={{ marginLeft: 10, marginRight: 10, fontFamily: 'Roboto Mono' }}>kai</Heading>
          <Nav className="ml-auto" style={{ marginRight: 10 }}>
            <Nav.Link onClick={() => scrollEffect(benefitsRef)}><Text size='2'>Benefits</Text></Nav.Link>
            <Nav.Link onClick={() => scrollEffect(howItWorksRef)}><Text size='2'>How it works</Text></Nav.Link>
            <Nav.Link onClick={() => scrollEffect(faqRef)}><Text size='2'>FAQs</Text></Nav.Link>
          </Nav>
          <Button 
            variant="solid" 
            size="1" 
            style={{ marginRight: 0 }} 
            onClick={() => window.location.href = 'https://calendly.com/jetflow/intro-call'}
          >
            Schedule a call
          </Button>
      </Navbar>

      {/* Hero section */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 50, minHeight: '20vh' }}>
        <Col xs={12} sm={11} md={8} lg={6} xl={6} style={{ textAlign: 'left', padding: 20, paddingRight: 40, maxWidth: 600 }}>
          <Text size='3' color="yellow" as='div'><HandWaving size={14} weight="fill" /> Hello gyms, fitness studios and coaches</Text>
          <Heading size={ isPageWide ? '9' : '8' } style={{ marginTop: 10 }}>Meet Kai, your 24/7 AI receptionist</Heading>

            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={10} sm={9} md={8} lg={8} xl={8} style={{ padding: 0 }}>
                <Text size='4' color="gray" as='div'>Enhance your productivity, manage costs, and improve customer experience.</Text>
              </Col>
            </Row>

          <Button variant="solid" size="3" style={{ marginTop: 30, marginBottom: 10 }} onClick={() => window.location.href = 'https://calendly.com/jetflow/intro-call'}>Schedule a call</Button>
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
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
        <Col xs={10} sm={9} md={8} lg={8} xl={8} style={{ padding: 0, textAlign: 'center', maxWidth: 400 }}>
          <Text size='2' color="gray" as='p'>From a team that has built tech products for millions in health, sports, and fitness</Text>
        </Col>
      </Row>

      {/* Company logos */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Image src="/assets/logos/ubersense.png" alt="Ubersense" width={120} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
          <Image src="/assets/logos/florohealth.png" alt="Floro Health" width={120} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
          <Image src="/assets/logos/biomarker.png" alt="Biomarker" width={120} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
          <Image src="/assets/logos/waveform.png" alt="Waveform" width={140} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
        </Col>
      </Row>

      <Row  ref={benefitsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Skills</Heading>
          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
              <Text size="3" color="gray" as='div'>
                From answering common questions to sending appointment reminders, Kai can handle a wide range of tasks that would otherwise be time-consuming and repetitive.
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
        <Col xs={12} sm={11} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>

            <PhoneOutgoing size={22} weight="regular" style={{ color: 'orange', marginBottom: 10 }} />
            
            <Heading size="4" style={{ marginTop: 5 }}>Outbound calls & SMS</Heading>
              
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Appointment reminders</Text>
            
            <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Intake questions</Text>

            <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Event invitations & updates</Text>
            
            <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Follow-ups and check-ins</Text>

            <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Surveys</Text>
          
            {/* <Button size="3" variant="solid" style={{ backgroundColor: 'white', color: 'black', marginTop: 20 }} onClick={toggleAudioOutbound}>
              {isPlayingOutbound ? (
                <Pause size={20} weight="bold" style={{ color: 'black' }} />
              ) : (
                <Headset size={20} weight="bold" style={{ color: 'black' }} />
              )}
              {isPlayingOutbound ? 'Pause' : 'Play sample call'}
            </Button> */}

          </Card>
        </Col>
        <Col xs={12} sm={11} md={4} lg={4} xl={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            
            <PhoneIncoming size={22} weight="regular" style={{ color: 'orange', marginBottom: 10 }} />
            
            <Heading size="4" style={{ marginTop: 5 }}>Inbound calls & SMS</Heading>
            
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Respond to inquiries</Text>

            <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Book classes and tours</Text>

            <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Appointment scheduling</Text>

            <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Rescheduling & cancellations</Text>

            <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Call routing & fallback</Text>

            {/* <Button size="3" variant="solid" style={{ backgroundColor: 'white', color: 'black', marginTop: 10 }} onClick={toggleAudioInbound}>
              {isPlayingInbound ? (
                <Pause size={20} weight="bold" style={{ color: 'black' }} />
              ) : (
                <Headset size={20} weight="bold" style={{ color: 'black' }} />
              )}
              {isPlayingInbound ? 'Pause' : 'Play sample call'}
            </Button> */}
          </Card>
        </Col>
      </Row>

      {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
        <Col xs={12} sm={11} md={4} lg={4} xl={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <ChatText size={22} weight="regular" style={{ color: 'orange', marginBottom: 10 }} />
            <Heading size="4">SMS agents</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Send appointment reminders, answer common questions, collect intake information, verify insurance coverage, send health screening reminders, run satisfaction surveys, request feedback and social media reviews, and more.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={11} md={4} lg={4} xl={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <ChatCircle size={22} weight="regular" style={{ color: 'orange', marginBottom: 10 }} />
            <Heading size="4">Web chatbot</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Respond to inquiries</Text>

            <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Book classes and tours</Text>

            <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Appointment scheduling</Text>

            <Text size="2" color="gray" as="div" style={{ marginTop: 5 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 5 }} /> Rescheduling & cancellations</Text>
          </Card>
        </Col>
        <Col xs={12} sm={11} md={4} lg={4} xl={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Wrench size={22} weight="regular" style={{ color: 'orange', marginBottom: 10 }} />
            <Heading size="4">Custom agents</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Let's chat about your specific workflow automations and skills we can build for you.
            </Text>
          </Card>
        </Col>
      </Row> */}

      {/* Integrations logos */}

      {/* Benefits */}
      <Row  ref={benefitsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Benefits</Heading>
          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
              <Text size="3" color="gray" as='div'>
                A typical health and performance professional wastes <span style={{ fontWeight: 'bold' }}>20-30 hours per week</span> on repetitive, time-consuming communications tasks that could have been better spent on client-facing activities and marketing.
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Clock size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">24/7 Availability</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Never miss an inquiry. Your AI assistant is always available to respond, regardless of time zones or holidays.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <ChartLineUp size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Cost Efficiency</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Reduce operational costs while maintaining high-quality customer service through automated support solutions.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Heart size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Improved Customer Experience</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Deliver instant, consistent, and personalized responses to enhance customer satisfaction and loyalty.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Calendar size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Seamless Scheduling</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Automate appointment booking and management, eliminating scheduling conflicts and reducing administrative burden.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <ChartBar size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Enhanced Employee Productivity</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Free up your team's time to focus on high-value tasks while AI handles routine tasks and interactions.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Trophy size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Competitive Edge</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Stay ahead of the competition with cutting-edge AI technology that sets your business apart in customer service.
            </Text>
          </Card>
        </Col>
      </Row>

      {/* LLM providers */}

      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
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

      {/* Capabilities */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Powerful capabilities</Heading>
          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
              <Text size="3" color="gray" as='div'>
                Jetflow's AI agents are designed to deliver a seamless, delightful, and human-like customer experience.
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
        {/* <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <div style={{ 
              width: '100%',
              height: 200,
              background: 'linear-gradient(45deg, #4CAF50, #8BC34A, #FF69B4, #FFB6C1)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Phone size={40} weight="regular" style={{ color: 'black', marginBottom: 10 }} />
            </div>
            <Heading size="4" style={{ marginTop: 10 }}>Handles inbound calls</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Answers questions about classes, pricing, packages, services, hours, facilities access, and health protocols with accurate, detailed responses.
            </Text>
          </Card>
        </Col> */}
        {/* <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <div style={{ 
              width: '100%',
              height: 200,
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <CalendarPlus size={40} weight="regular" style={{ color: 'black', marginBottom: 10 }} />
            </div>
            <Heading size="4" style={{ marginTop: 10 }}>Manages scheduling</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Autonomously schedules facility tours, introductory classes, and training sessions with seamless coordination.
            </Text>
          </Card>
        </Col> */}
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <div style={{ 
              width: '100%',
              height: 200,
              background: 'linear-gradient(45deg, #FF4500, #FF6B6B, #FF8C00, #FFA500)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <HandHeart size={40} weight="regular" style={{ color: 'black', marginBottom: 10 }} />
            </div>
            <Heading size="4" style={{ marginTop: 10 }}>Human-like conversations</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Agents use AI-powered natural language processing and voice synthesis to have human-like conversations with customers, providing personalized assistance and resolving issues efficiently.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <div style={{ 
              width: '100%',
              height: 200,
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <ArrowsClockwise size={40} weight="regular" style={{ color: 'black', marginBottom: 10 }} />
            </div>
            <Heading size="4" style={{ marginTop: 10 }}>Continuous learning</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Agents save transcripts for every chat and conversation for human review so their behavior, internal knowledge, and quality of responses can be continuously improved.
            </Text>
          </Card>
        </Col>
      </Row>


      {/* How we work */}
      <Row ref={howItWorksRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>How it works</Heading>
          {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
              <Text size="3" color="gray" as='div'>
                Jetflow builds, tests, deploys, and optimizes custom AI agents for your particular workflows.
              </Text>
            </Col>
          </Row> */}
        </Col>
      </Row>

      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Text size="4" as="p" weight="bold" style={{ marginBottom: 10, color: 'yellow' }}>1</Text>
            <Heading size="4">Setup</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              We'll work with you to define the specific workflows you want automated, the integrations you want to use, Kai's personality and conversation style based on your brand voice and values, as well as define guardrails and guidelines based on your requirements.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Text size="4" as="p" weight="bold" style={{ marginBottom: 10, color: 'yellow' }}>2</Text>
            <Heading size="4">Test & deploy</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              We'll work with you to thoroughly test Kai for your workflows under a variety of scenarios to ensure it works in line with your requirements. Once we've tested and validated the agent, we'll deploy it to your production environment.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Text size="4" as="p" weight="bold" style={{ marginBottom: 10, color: 'yellow' }}>3</Text>
            <Heading size="4">Optimize</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              We will continue to help review call and message logs and improve Kai's internal knowledge base, guidelines, conversation style, workflows, and improve its overall performance.
            </Text>
          </Card>
        </Col>
      </Row>

      {/* Why Jetflow is different */}
      {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Why Jetflow</Heading>
        </Col>
      </Row> */}

      {/* Integrations */}
      {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Integrations</Heading>
        </Col>
      </Row> */}
       
      {/* FAQ */}
      <Row ref={faqRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 100 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Frequently asked questions</Heading>
        </Col>
      </Row>

      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
        <Col xs={12} sm={11} md={10} lg={10} xl={9}>
          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">How does Kai handle phone calls?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Kai uses advanced speech-to-text models and LLM-powered natural language understanding to have human-like conversations with callers. It can handle scheduling, answer common questions, and seamlessly transfer complex issues to your team when needed - all based on your workflows and requirements that are coded in to the LLM that Kai uses to support its conversations.
            </Text>
          </Card>

          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">What types of scheduling tools do you integrate with?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              We can integrate with any calendar, CRM, EHR, and/or file storage tools that support API integrations or webhooks. Depending on your workflow needs, we can work with you to integrate the tools that make the most sense.
            </Text>
          </Card>

          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">How long does it take to set up?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Depends on the complexity of your workflows and the customizations you want, sometimes it can take a few days and sometimes it can take a few weeks. We'll keep you regularly updated on the progress and test everything before going live.
            </Text>
          </Card>

          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">What happens if Kai can't handle a request?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              If a conversation becomes too complex or is experiencing a scenario that is not covered by it's set of instructions, Kai can be configured to gracefully transfer the call to your specified team member or take a message. You can customize these escalation rules based on your preferences.
            </Text>
          </Card>

          {/* <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">Is it secure and private?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Yes, we take security seriously. All conversations are encrypted, and we comply with industry standards for data protection. You have full control over what information the AI can access and share.
            </Text>
          </Card> */}

          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">What does it cost?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              We offer customized pricing based on your workflows and needs. 
            </Text>
          </Card>

          {/* <Card style={{ padding: 20 }}>
            <Heading size="4">When will I see ROI?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              You can expect to see ROI within the first month through reduced administrative costs and improved client engagement.
            </Text>
          </Card> */}

        </Col>
      </Row>

      {/* Call to action */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80, minHeight: 400 }}>
        <Col xs={12} sm={11} md={11} lg={10} xl={10} style={{ textAlign: 'center', maxWidth: 800 }}>
          <Heading size="8">Activate Kai today to save time, improve customer experience, and grow your business</Heading>
          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
              {/* <Text size="3" color="gray" as='div'>
                It is time to let AI agents handle mundane, time-consuming, and repetitive tasks so your team can focus on what they love to do and are trained to do.
              </Text> */}
              <Button variant="solid" size="4" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://calendly.com/jetflow/intro-call'}>
                Schedule a call
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
          <Text size='1' color="gray">Copyright 2024, Jetflow AI.</Text>
        </Col>
      </Row>


      <div style={{ height: 100 }}></div>

      </Col>
    </Row>
  
  )

}