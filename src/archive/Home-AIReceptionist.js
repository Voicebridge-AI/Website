import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Button, Card, Heading, Text } from '@radix-ui/themes';
import { HandWaving, Clock, ChartLineUp, Heart, Calendar, ChartBar, Trophy, Info, CalendarPlus, CreditCard, Phone, HandHeart, Headset, Pause } from '@phosphor-icons/react';
import { useMediaQuery } from '../shared-functions.js';
import { Toaster } from 'react-hot-toast';
import { ThemeContext } from '../Theme.js';

export default function Home() {

  const benefitsRef = useRef(null);
  const faqRef = useRef(null);
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

      {/* Navbar */}
      {/* <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: 50, padding: 10, zIndex: 100, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        <Row style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginLeft: 0, marginRight: 0 }}>
            <Heading size='4' style={{ marginLeft: 10, marginRight: 10 }}>Activeflow</Heading>

            <Button variant="solid" size="1" style={{ marginRight: 10 }} onClick={() => console.log('Schedule a demo')}>Schedule a demo</Button>
        </Row>
      </div> */}

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
          onClick={() => window.location.href = 'https://calendly.com/activeflow/activeflow-demo'}
        >
          Schedule a demo
        </Button>
      </Navbar>

      {/* Hero section */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 50, minHeight: '40vh' }}>
        <Col xs={12} sm={11} md={6} lg={6} xl={6} style={{ textAlign: 'left', padding: 20, paddingRight: 40, maxWidth: 600 }}>
          
          <Text size='2' color="yellow" as='div'><HandWaving size={14} weight="fill" /> Hello, busy business owner!</Text>
          
          <Heading size='8' style={{ marginTop: 10 }}>AI receptionist for health and fitness businesses</Heading>
          
          <Text size='4' color="gray" as='div' style={{ marginTop: 20 }}>Answers calls. Books classes and tours. Elevates your customer experience. Never sleeps.</Text>

          <Button variant="solid" size="3" style={{ marginTop: 20, marginBottom: 10 }} onClick={() => window.location.href = 'https://calendly.com/activeflow/activeflow-demo'}>Schedule a demo</Button>

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
              {isPlaying ? 'Pause' : 'Play sample'}
            </Button>
            {/* <Text size='3' as='div' style={{ marginTop: 10, color: 'black' }}>You will talk to Lisa, a demo AI receptionist.</Text> */}
          </div>
        </Col>
      </Row>
       
      {/* Social proof - Past experience helping milions of athletes, fitness professionals, and health professionals */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
        <Col xs={12} sm={10} md={8} lg={6} xl={4} style={{ textAlign: 'center' }}>
          <Text size='2' color="gray" as='p'>Built by a team that has helped millions of athletes, coaches, instructors, fitness and health professionals</Text>
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
          <Heading size='6' style={{ marginTop: 10 }}>Benefits</Heading>
          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
              <Text size="3" color="gray" as='div'>
                An average fitness business spends <span style={{ fontWeight: 'bold' }}>20-30 hours per week</span> on customer support calls which could have been better spent on client-facing activities like training, onboarding, and marketing.
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
              Never miss a customer inquiry with AI agents that are always available to respond, regardless of time zones or holidays.
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
              Free up your team's time to focus on high-value tasks while AI handles routine customer interactions.
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

      {/* Integrations */}
      {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Key integrations</Heading>
        </Col>
      </Row> */}

      {/* Capabilities */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Powerful capabilities</Heading>
          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
              <Text size="3" color="gray" as='div'>
              Activeflow's AI agents are designed to deliver a seamless, delightful, and human-like customer experience.
              </Text>
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
              <CalendarPlus size={40} weight="regular" style={{ color: 'black', marginBottom: 10 }} />
            </div>
            <Heading size="4" style={{ marginTop: 10 }}>Manages scheduling</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Autonomously schedules facility tours, introductory classes, and training sessions with seamless coordination.
            </Text>
          </Card>
        </Col>
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
              Handles inbound calls from customers, providing personalized assistance and resolving issues efficiently.
            </Text>
          </Card>
        </Col>
      </Row>


      {/* How it works */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
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
       
      {/* FAQ */}
      <Row ref={faqRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <Heading size='6' style={{ marginTop: 10 }}>Frequently asked questions</Heading>
        </Col>
      </Row>

      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
        <Col xs={12} sm={11} md={10} lg={10} xl={9}>
          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">How does the AI agent handle phone calls?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Our AI agent uses advanced natural language processing to understand and respond to customer inquiries in real-time. It can handle scheduling, answer common questions about your business, and seamlessly transfer complex issues to your team when needed.
            </Text>
          </Card>

          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">What types of scheduling tools do you integrate with?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              We integrate with popular scheduling platforms like Calendly, Acuity, Mindbody, and more. Our AI agent can check availability, book appointments, and send confirmation details automatically.
            </Text>
          </Card>

          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">How long does it take to set up?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Most businesses are up and running within 24-48 hours. We'll help you configure your AI agent with your business information, connect your scheduling tools, and test everything before going live.
            </Text>
          </Card>

          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">What happens if the AI can't handle a request?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              If a conversation becomes too complex or requires human judgment, the AI agent will gracefully transfer the call to your specified team member or take a message. You can customize these escalation rules based on your preferences.
            </Text>
          </Card>

          <Card style={{ padding: 20, marginBottom: 20 }}>
            <Heading size="4">Is it secure and private?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              Yes, we take security seriously. All conversations are encrypted, and we comply with industry standards for data protection. You have full control over what information the AI can access and share.
            </Text>
          </Card>

          <Card style={{ padding: 20 }}>
            <Heading size="4">What does it cost?</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
              We offer flexible pricing plans based on call volume and features needed. Most businesses save 70-80% compared to traditional customer support costs. Contact us for a custom quote.
            </Text>
          </Card>
        </Col>
      </Row>

      {/* Call to action */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80, minHeight: 400 }}>
        <Col xs={12} sm={11} md={11} lg={10} xl={10} style={{ textAlign: 'center' }}>
          <Heading size="8">Elevate your customer support</Heading>
          <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} sm={11} md={10} lg={8} xl={6} style={{ textAlign: 'center' }}>
              <Text size="3" color="gray" as='div'>
                Schedule a demo to see how Activeflow can help your business deliver exceptional customer experiences, while saving you precious time and money.
              </Text>
              <Button variant="solid" size="4" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://calendly.com/activeflow/activeflow-demo'}>
                Schedule a Demo
              </Button>
              <div style={{ marginTop: 20 }}>
                <Text size="1" color="gray">15-minute demo • Live Q&A • No commitment</Text>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>


      {/* Footer */}
      <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
        <Col style={{ textAlign: 'center' }}>
          <Text size='1' color="gray">Copyright 2024, Activeflow AI.</Text>
        </Col>
      </Row>


      <div style={{ height: 100 }}></div>

      </Col>
    </Row>
  
  )

}