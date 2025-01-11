import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Button, Card, Heading, Text } from '@radix-ui/themes';
import { HandWaving, Clock, ChartLineUp, Heart, HandHeart, Headset, Pause, Fire, UserCheck, PhoneOutgoing, PhoneIncoming, ChatCircle, ChatText, Trophy } from '@phosphor-icons/react';
import { useMediaQuery } from '../shared-functions.js';
import { ThemeContext } from '../Theme.js';

export default function Home() {

  const benefitsRef = useRef(null);
  const faqRef = useRef(null);
  const typesRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/assets/audio/sample.mp3'));

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
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
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
          <Image src="/logo.svg" alt="Activeflow" width={120} style={{ marginLeft: 10, marginRight: 10 }} />
          <Nav className="ml-auto" style={{ marginRight: 10 }}>
            <Nav.Link onClick={() => scrollEffect(benefitsRef)}><Text size='2'>Benefits</Text></Nav.Link>
            <Nav.Link onClick={() => scrollEffect(faqRef)}><Text size='2'>FAQ</Text></Nav.Link>
          </Nav>
        <Button 
          variant="solid" 
          size="1" 
          style={{ marginRight: 10 }} 
          onClick={() => window.location.href = 'https://calendly.com/activeflow/activeflow-call'}
        >
          Schedule a call
        </Button>
      </Navbar>

      {/* Hero section */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 50, minHeight: '40vh' }}>
        <Col xs={12} sm={11} md={6} lg={6} xl={6} style={{ textAlign: 'left', padding: 20, paddingRight: 40, maxWidth: 600 }}>
          
          <Text size='2' color="yellow" as='div'><HandWaving size={14} weight="fill" /> Hello health and fitness businesses!</Text>
          
          <Heading size='9' style={{ marginTop: 10 }}>AI agents to automate your operations</Heading>
          
          <Text size='4' color="gray" as='div' style={{ marginTop: 20 }}>From outbound phone outreach to inbound customer support, SMS reminders to website chatbots, Activeflow builds AI agents to automate health and fitness business workflows.</Text>

          <Button variant="solid" size="3" style={{ marginTop: 20, marginBottom: 10 }} onClick={() => window.location.href = 'https://calendly.com/activeflow/activeflow-call'}>Schedule a call</Button>

        </Col>
        <Col xs={12} sm={11} md={6} lg={6} xl={6} style={{ 
            width: '100%',
            minHeight: 600,
            maxWidth: 600,
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: 20,
            position: 'relative'
          }}>
          {/* <Image 
            src="/assets/face.png" 
            alt="AI Assistant" 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              padding: 20
            }} 
          /> */}
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
              {isPlaying ? 'Pause' : 'Play sample call'}
            </Button>
            {/* <Text size='3' as='div' style={{ marginTop: 10, color: 'black' }}>You will talk to Lisa, a demo AI receptionist.</Text> */}
          </div>
        </Col>
      </Row>
       
      {/* Social proof - Past experience helping milions of athletes, fitness professionals, and health professionals */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
        <Col xs={12} sm={10} md={8} lg={6} xl={4} style={{ textAlign: 'center' }}>
          <Text size='2' color="gray" as='p'>By a team with extensive experience building health, fitness and sports technology products used by millions around the world</Text>
        </Col>
      </Row>

      {/* Company logos */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Image src="/assets/logos/ubersense.png" alt="Ubersense" width={120} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
          <Image src="/assets/logos/florohealth.png" alt="Floro Health" width={120} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
          <Image src="/assets/logos/biomarker.png" alt="Biomarker" width={120} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
          <Image src="/assets/logos/waveform.png" alt="Waveform" width={140} style={{ marginLeft: 20, marginRight: 20, opacity: 0.6 }} />
        </Col>
      </Row>

      {/* Benefits */}
      <Row  ref={benefitsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Benefits of AI agents</Heading>
          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
              <Text size="3" color="gray" as='div'>
                Teams waste hours, sometimes days on repetitive, labor-intensive tasks that could be better spent on directly improving client or patient outcomes.
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <UserCheck size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Enhanced employee productivity</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Free up your team's time to focus on high-value tasks while AI handles repetitive, often boring tasks.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <ChartLineUp size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Reduced operational costs</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Reduce operational costs while maintaining high-quality service and outcomes through automated support solutions.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Fire size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Avoid burnout</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Enable your team to focus on what they love to do and are trained to do, while AI handles the rest.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Heart size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Improved customer experience</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Deliver instant, consistent, and personalized responses to enhance client or patient satisfaction and loyalty.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Clock size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">24/7 availability</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Never miss a client or patient inquiry with AI agents that are always available to respond, regardless of time zones or holidays.
            </Text>
          </Card>
        </Col>
        {/* <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Calendar size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Seamless Scheduling</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Automate appointment booking and management, eliminating scheduling conflicts and reducing administrative burden.
            </Text>
          </Card>
        </Col> */}
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Trophy size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Competitive edge</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Stay ahead of the competition with cutting-edge AI technology that sets your business apart in customer service.
            </Text>
          </Card>
        </Col>
      </Row>

      {/* Integrations */}
      {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Key integrations</Heading>
        </Col>
      </Row> */}

      {/* Types of agents */}
      <Row ref={typesRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Activeflow's AI agents</Heading>
          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
              <Text size="3" color="gray" as='div'>
                From outbound calls to inbound calls, SMS messages, email, and chatbots - use AI agents to automate your operations.
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Outbound, inbound, voice calls, SMS messages, email, chatbots, and more */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
        <Col xs={12} sm={11} md={10} lg={8} xl={8} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <PhoneOutgoing size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Outbound phone agents</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Outbound AI phone agents automate outreach with appointment reminders, requesting responses to intake questions, requesting feedback, running surveys, regular check-ins, and more.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={11} md={10} lg={8} xl={8} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <PhoneIncoming size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Inbound phone agents</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Inbound AI phone agents answer phone calls 24/7 for common questions, schedule appointments, record feedback, and more.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={11} md={10} lg={8} xl={8} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <ChatText size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">SMS agents</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              SMS agents automate outbound or inbound SMS messages to clients with the ability to send appointment reminders, answer common questions, request Google reviews, and more.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={11} md={10} lg={8} xl={8} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <ChatCircle size={32} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size="4">Chatbot agents</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Chatbot agents inbound chat messages from your website or social media channels with the ability to answer common questions, book appointments, and manage scheduling.
            </Text>
          </Card>
        </Col>
      </Row>

      {/* Capabilities */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Powerful capabilities</Heading>
          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
              <Text size="3" color="gray" as='div'>Activeflow's AI agents are designed to deliver a seamless, delightful, and human-like customer experience.</Text>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
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
      </Row>

      {/* Why Activeflow */}


      {/* How it works */}
      {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>How it works</Heading>
        </Col>
      </Row>

      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Text size="4" as="p" weight="bold" style={{ marginBottom: 10, color: 'yellow' }}>1</Text>
            <Heading size="4">Setup</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Set up your AI assistant with your business details, class information, policies, and availability. Connect your scheduling tools and get a dedicated support phone number.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Text size="4" as="p" weight="bold" style={{ marginBottom: 10, color: 'yellow' }}>2</Text>
            <Heading size="4">Deploy</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Embed your assistant on your website for direct customer calls. Update your phone number across Google Business, Yelp, and other marketing channels.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} style={{ padding: 20 }}>
          <Card style={{ padding: 20, height: '100%' }}>
            <Text size="4" as="p" weight="bold" style={{ marginBottom: 10, color: 'yellow' }}>3</Text>
            <Heading size="4">Optimize</Heading>
            <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
              Your agent handles calls and manages bookings automatically. Review call logs to fine-tune the agent's responses to match your business workflows and values.
            </Text>
          </Card>
        </Col>
      </Row> */}

      {/* LLM providers */}

      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 100 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Text size='1' color="gray">Work with your choice of LLMs</Text>
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

      {/* Pricing */}
       
      {/* FAQ */}
      {/* <Row ref={faqRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Frequently asked questions</Heading>
        </Col>
      </Row> */}

      {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
        <Col xs={12} sm={11} md={10} lg={10} xl={9}>
          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">How do your AI agents help health and fitness businesses?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Our AI agents handle various operational tasks like appointment reminders, follow-ups, answering common questions about classes and services, managing intake forms, and requesting client feedback. This allows your staff to focus on delivering exceptional care and training to your clients.
            </Text>
          </Card>

          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">Which practice management systems do you integrate with?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              We integrate with popular health and fitness platforms including Mindbody, Practice Better, SimplePractice, and Vagaro. Our AI agents can seamlessly work with your existing systems for scheduling, client management, and communications.
            </Text>
          </Card>

          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">How long does it take to customize an AI agent for my business?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              We typically have AI agents ready within 1-2 weeks. This includes time to understand your specific workflows, customize the agent's responses to match your business tone, and integrate with your existing systems. We'll thoroughly test everything before going live.
            </Text>
          </Card>

          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">How do you handle sensitive health information?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              We take privacy and compliance seriously. Our systems are designed to be HIPAA-compliant, and we implement strict data protection measures. AI agents are programmed to handle sensitive information appropriately and know when to escalate matters to human staff.
            </Text>
          </Card>

          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">What types of tasks can your AI agents handle?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Our AI agents can handle appointment scheduling, send reminders, collect intake information, answer FAQs about services and pricing, request and collect feedback, manage referral requests, and handle basic billing inquiries. They're designed specifically for health and fitness business workflows.
            </Text>
          </Card>

          <Card style={{ padding: 20 }}>
            <Heading size="4">What does it cost?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              We offer customized pricing based on your business size and needs. Most health and fitness businesses see ROI within the first month through reduced administrative costs and improved client engagement. Contact us for a personalized quote.
            </Text>
          </Card>
        </Col>
      </Row> */}

      {/* Call to action */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80, minHeight: 400 }}>
        <Col xs={12} sm={11} md={11} lg={10} xl={10} style={{ textAlign: 'center' }}>
          <Heading size="8">Automate your operations, starting today</Heading>
          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
              <Text size="3" color="gray" as='div'>
                It is time to let AI agents handle mundane, time-consuming, and repetitive tasks so your team can focus on what they love to do and are trained to do.
              </Text>
              <Button variant="solid" size="4" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://calendly.com/activeflow/activeflow-call'}>
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
      <Row style={{ 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        marginTop: 100,
        backgroundColor: '#111',
        padding: '60px 20px',
        color: '#fff'
      }}>
        <Col xs={12} sm={11} md={10} lg={10} xl={10}>

          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            {/* Company Info Column */}
            <Col xs={12} md={4} style={{ marginBottom: 40 }}>
              <Image src="/logo.svg" alt="Activeflow" width={120} style={{ marginBottom: 20 }} />
              <Text size="2" color="gray" as="p" style={{ marginBottom: 20 }}>
                AI agents for health and fitness businesses.
              </Text>
              <Text size="2" color="gray" as="p" style={{ marginBottom: 5 }}>
                Email Us:
              </Text>
              <Text size="2" as="p" style={{ marginBottom: 20 }}>
                hello@activeflow.ai
              </Text>
              <Text size="2" color="gray" as="p" style={{ marginBottom: 5 }}>
                Company:
              </Text>
              <Text size="2" as="p">
                Activeflow Inc<br />
                123 Mission Street, Suite 200<br />
                San Francisco, CA 94102
              </Text>
            </Col>

            {/* Navigation Column */}
            <Col xs={12} md={4} style={{ marginBottom: 40 }}>
              <Text size="3" as="p" style={{ marginBottom: 20 }}>Navigation</Text>
              <Text size="2" as="p" style={{ marginBottom: 10 }}>
                <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Home</a>
              </Text>
              <Text size="2" as="p" style={{ marginBottom: 10 }}>
                <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Case Studies</a>
              </Text>
              <Text size="2" as="p" style={{ marginBottom: 10 }}>
                <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Pricing</a>
              </Text>
              <Text size="2" as="p" style={{ marginBottom: 10 }}>
                <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Contact Us</a>
              </Text>
            </Col>

            {/* Resources Column */}
            <Col xs={12} md={4} style={{ marginBottom: 40 }}>
              <Text size="3" as="p" style={{ marginBottom: 20 }}>Resources</Text>
              <Text size="2" as="p" style={{ marginBottom: 10 }}>
                <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Report a Vulnerability</a>
              </Text>
              <Text size="2" as="p" style={{ marginBottom: 10 }}>
                <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Data Processing Agreement</a>
              </Text>
              <Text size="2" as="p" style={{ marginBottom: 10 }}>
                <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</a>
              </Text>
              <Text size="2" as="p" style={{ marginBottom: 10 }}>
                <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Terms of Service</a>
              </Text>
            </Col>
          </Row>

          {/* Copyright */}
          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40, paddingTop: 20, borderTop: '1px solid #333' }}>
            <Col xs={12} sm={11} md={10} lg={10} xl={10} style={{ textAlign: 'center' }}>
              <Text size="1" color="gray">© 2024 Activeflow Inc. All rights reserved.</Text>
            </Col>
          </Row>
        </Col>
      </Row>

      


      <div style={{ height: 100 }}></div>

      </Col>
    </Row>
  
  )

}