import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Badge, Button, Text, Link } from '@radix-ui/themes';
import { Calendar, NumberCircleOne, NumberCircleTwo, NumberCircleThree, NumberCircleFour, PencilLine, Smiley, Brain, XLogo, LinkedinLogo, Globe, UserSound, ChatsCircle, Presentation, CurrencyCircleDollar, Lightning, Sparkle, ArrowUpRight } from '@phosphor-icons/react';
import { useMediaQuery, validateEmail } from './shared-functions.js';
import { ThemeContext } from './Theme.js';
import Marquee from "react-fast-marquee";
import { faqItems } from './config/faqs.js';
import FaqItem from './components/FaqItem.js';
import { toast, Toaster } from 'react-hot-toast';

export default function Home() {

  let isPageWide = useMediaQuery('(min-width: 640px)');
  const { theme } = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState(['customers', 'audience', 'employees', 'subscribers']);
  const [currentWord, setCurrentWord] = useState(words[0]);
  
  const howItWorksRef = useRef(null);
  const useCasesRef = useRef(null);
  const faqsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, [words]);

  const scrollEffect = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };
  
  // const saveEmail = (email) => {
  //   // console.log(email, encodeURIComponent(email.trim()));
  //   if (email && email.trim() !== '' && validateEmail(email.trim())) {
  //     window.open(`https://cal.com/voicebridge/demo?email=${encodeURIComponent(email.trim())}`, '_blank', 'noopener,noreferrer');
  //   } else {
  //     toast.error('Please enter a valid email address');
  //     // window.open('https://cal.com/voicebridge/demo', '_blank', 'noopener,noreferrer');
  //   }
  // };

  const openBookDemo = () => {
    window.open('https://cal.com/voicebridge/demo', '_blank', 'noopener,noreferrer');
  };

  return (

    <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>

      <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ padding: isPageWide ? 20 : 10 }}>

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '10px', backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
          <Image src="/logo.svg" alt="Voicebridge" width={isPageWide ? 180 : 140} style={{ marginLeft: 10, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <Nav className="ml-auto" style={{ marginRight: 0 }}>
            <Nav.Link onClick={() => scrollEffect(useCasesRef)}>Use cases</Nav.Link>
            <Nav.Link onClick={() => scrollEffect(howItWorksRef)}>How it works</Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(faqsRef)}>FAQs</Nav.Link>}
            {isPageWide && <Nav.Link onClick={() => window.open('https://blog.voicebridgeai.com', '_blank', 'noopener,noreferrer')}>Blog <ArrowUpRight size={16} weight="bold" /></Nav.Link>}
            {isPageWide && <Nav.Link onClick={() => window.open('https://cal.com/voicebridge/demo', '_blank', 'noopener,noreferrer')}>Book a demo <ArrowUpRight size={16} weight="bold" /></Nav.Link>}
          </Nav>
        </Navbar>

        {/* Hero section */}
        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0, minHeight: '70vh', backgroundImage: 'url("/assets/background.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: 12 }}>
          <Col xs={12} sm={11} md={10} style={{ textAlign: 'center', maxWidth: 900, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h1 style={{ marginTop: 20 }}>Capture deep, rich & authentic customer insights at scale.</h1>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={11} sm={11} md={9} lg={8} style={{ textAlign: 'center', padding: 0 }}>
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Voicebridge's AI voice agents have 10s to 1000s of natural human-like conversations to find out what they really think and feel.</Text>
                <Button variant="solid" size="3" style={{ marginTop: 24 }} onClick={openBookDemo}>Book a demo <ArrowUpRight size={16} weight="bold" /></Button>
                <div style={{ border: '1px solid var(--gray-6)', borderRadius: '16px', padding: '12px 12px 12px 12px', backgroundColor: '#111111', marginTop: 84 }}>
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
                  </div>
                  <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <Image src="/assets/screenshots/nps-survey-record-widget-2.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row> */}

        {/* Hero section */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 30 : 40, minHeight: '60vh', backgroundImage: 'url("/assets/frontpage/background-blue.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: 12 }}>
          <Col xs={12} sm={11} md={10} lg={6} xl={6} style={{ textAlign: 'left', maxWidth: 900, marginTop: isPageWide ? 0 : 40, marginBottom: 20, padding: isPageWide ? 40 : 20 }}>
            <h1 style={{ marginTop: 0 }}>Start conversations with your audience. <span style={{ color: 'var(--accent-9)' }}>Don't make them fill out forms.</span></h1>
            {/* <h1 style={{ marginTop: 0 }}>AI-moderated conversational voice surveys capture authentic insights at scale.</h1> */}
            {/* <h1 style={{ marginTop: 0 }}>Begin conversations with your customers - at scale.</h1> */}
            {/* <h1 style={{ marginTop: 0 }}>Capture your customers' voice - at scale.</h1> */}
            {/* <h1 style={{ marginTop: 0 }}>Capture your audience's true voice, at scale.</h1> */}
            {/* <h1 style={{ marginTop: 0 }}>Capture authentic insights from your audience - at scale</h1> */}
            {/* <h1 style={{ marginTop: 0 }}>Capture in-depth insights from your {currentWord}</h1> */}
            {/* <h1 style={{ marginTop: 0 }}>Don't survey your audience. <span style={{ color: 'var(--gray-9)' }}>Have conversations with them.</span></h1> */}
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={11} sm={11} md={9} lg={9} style={{ textAlign: 'left', padding: 0 }}>
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Voicebridge's AI voice agents conduct & analyze 10s to 1000s of natural human-like interviews to find out what they really think.</Text>
                <Button variant="solid" size={isPageWide ? '4' : '3'} style={{ marginTop: 24 }} onClick={openBookDemo}>Book a demo <ArrowUpRight size={16} weight="bold" /></Button>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={11} md={11} lg={6} xl={6} style={{ textAlign: 'center', maxWidth: 900, marginBottom: 20, padding: isPageWide ? 40 : 10 }}>
            <div style={{ borderRadius: '16px', padding: '12px 12px 12px 12px', backgroundColor: 'var(--gray-12)' }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/assets/screencaptures/nps-survey-record-widget.gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {/* <Image src="/assets/screenshots/nps-survey-record-widget.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
              </div>
            </div>
          </Col>  
        </Row>

        {/* Benefits */}

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'left', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            {/* <h2>Get deeper, more meaningful insights faster</h2> */}
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={11} md={10} style={{ textAlign: 'center', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
                <h2>AI-moderated conversational voice interviews capture authentic insights at scale.</h2>
              </Col>
            </Row>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <ChatsCircle size={24} />
                <h3 style={{ marginTop: 10 }}>Natural Conversations</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Voice surveys feel like natural conversations, leading to 3x higher completion rates and responses that are 5.5x longer compared to traditional form-based surveys.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <Brain size={24} />
                <h3 style={{ marginTop: 10 }}>Effortless Participation</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Speaking requires 2.3x less cognitive effort than typing, resulting in longer, more detailed responses. Voice responses average 78.9 words compared to just 14.3 words in text surveys.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <Smiley size={24} />
                <h3 style={{ marginTop: 10 }}>Authentic Responses</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Voice responses are 38% more authentic as participants speak naturally instead of self-editing. Text respondents revise answers 4.2x more frequently, filtering their true reactions.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <Globe size={24} />
                <h3 style={{ marginTop: 10 }}>Universal Access</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Break down language and literacy barriers with AI voice agents that can conduct interviews in any language, making surveys accessible to broader, more diverse audiences.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <UserSound size={24} />
                <h3 style={{ marginTop: 10 }}>Adaptive Follow-ups</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Unlike rigid forms, our AI dynamically adjusts follow-up questions based on responses, diving deeper into interesting topics and uncovering unexpected insights.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <Sparkle size={24} />
                <h3 style={{ marginTop: 10 }}>Natural Language Querying</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Ask questions in plain English to explore your data. Our AI understands context and nuance, making it easy to discover patterns and insights across thousands of responses instantly.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <Presentation size={24} />
                <h3 style={{ marginTop: 10 }}>Presentation-ready Reports</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Our AI agents automatically generate comprehensive reports with key findings, sentiment analysis, and actionable recommendations - ready to share with stakeholders in minutes.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <CurrencyCircleDollar size={24} />
                <h3 style={{ marginTop: 10 }}>Lower Cost Insights</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  AI-conducted conversational interviews dramatically reduce costs compared to traditional research methods, while maintaining high quality insights through consistent, unbiased questioning.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <Lightning size={24} />
                <h3 style={{ marginTop: 10 }}>Instant Scalability</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Whether you need a few focused interviews or thousands of responses, our AI can conduct multiple conversations simultaneously, delivering results within hours or days instead of weeks and months.
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Use case categories */}
        <Row ref={useCasesRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'left', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Use cases</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              
              {/* Market and Brand Research */}
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <div style={{ height: '100%', padding: 30, backgroundColor: 'var(--gray-2)', borderRadius: 12, border: '1px solid var(--gray-5)' }}>
                  <h3>Market & Brand Research</h3>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 20, marginBottom: 20 }}>
                    Understand market trends, brand perception, and competitive positioning through natural conversations.
                  </Text>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Brand perception studies</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Market opportunity research</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Competitive analysis</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Ad campaign testing</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Consumer behavior research</Text></li>
                    <li><Text size="2">• Price sensitivity studies</Text></li>
                  </ul>
                </div>
              </Col>

              {/* Customer and User Insights */}
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <div style={{ height: '100%', padding: 30, backgroundColor: 'var(--gray-2)', borderRadius: 12, border: '1px solid var(--gray-5)' }}>
                  <h3>Customer & User Insights</h3>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 20, marginBottom: 20 }}>
                    Gather detailed feedback about your products, services, and customer experience.
                  </Text>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: 10 }}><Text size="2">• NPS surveys</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• CSAT research</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Product feedback</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• User experience research</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Customer journey mapping</Text></li>
                    <li><Text size="2">• Feature request collection</Text></li>
                  </ul>
                </div>
              </Col>

              {/* Employee Engagement */}
              {/* <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <div style={{ height: '100%', padding: 30, backgroundColor: 'var(--gray-2)', borderRadius: 12, border: '1px solid var(--gray-5)' }}>
                  <h3>Employee Engagement</h3>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 20, marginBottom: 20 }}>
                    Measure and improve workplace satisfaction, culture, and employee experience.
                  </Text>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Employee satisfaction surveys</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Exit interviews</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Onboarding feedback</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Culture assessment</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Training effectiveness</Text></li>
                    <li><Text size="2">• Remote work experience</Text></li>
                  </ul>
                </div>
              </Col> */}

              {/* Government & Academic Research */}
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <div style={{ height: '100%', padding: 30, backgroundColor: 'var(--gray-2)', borderRadius: 12, border: '1px solid var(--gray-5)' }}>
                  <h3>Government & Academic Research</h3>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 20, marginBottom: 20 }}>
                    Conduct research studies and gather insights for policy making, academic work, and public initiatives.
                  </Text>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Policy impact assessment</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Public opinion research</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Academic studies</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Program evaluation</Text></li>
                    <li style={{ marginBottom: 10 }}><Text size="2">• Community needs assessment</Text></li>
                    <li><Text size="2">• Social impact measurement</Text></li>
                  </ul>
                </div>
              </Col>

            </Row>
          </Col>
        </Row>

        {/* How it works */}
        <Row ref={howItWorksRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40, backgroundColor: 'var(--gray-12)', padding: '60px 0', borderRadius: 12 }}>
          <Col xs={12} sm={11} md={11} lg={10} style={{ textAlign: 'left', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 20 }}>
            <h2 style={{ color: 'var(--gray-1)' }}>How it works</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              <Col xs={12} sm={6} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <NumberCircleOne size={24} weight="bold" color="var(--gray-1)" />
                <h3 style={{ marginTop: 10, color: 'var(--gray-1)' }}>Choose a template</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" style={{ marginTop: 10, color: 'var(--gray-4)' }}>
                  Select from a collection of pre-built templates for common use cases like NPS, CSAT, product feedback, polls, brand perception research, and more.
                </Text>
              </Col>
              <Col xs={12} sm={6} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <NumberCircleTwo size={24} weight="bold" color="var(--gray-1)" />
                <h3 style={{ marginTop: 10, color: 'var(--gray-1)' }}>Configure your survey</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" style={{ marginTop: 10, color: 'var(--gray-4)' }}>
                  Customize the questions the AI agent asks, the question types, the agent's voice, language, and an accompanying context to match your brand and data collection needs as well as the audience you're surveying.
                </Text>
              </Col>
              <Col xs={12} sm={6} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <NumberCircleThree size={24} weight="bold" color="var(--gray-1)" />
                <h3 style={{ marginTop: 10, color: 'var(--gray-1)' }}>Share & embed</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" style={{ marginTop: 10, color: 'var(--gray-4)' }}>
                  Share your survey via a direct link, embed it on your website, or share it via email or social media.
                </Text>
              </Col>
              <Col xs={12} sm={6} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <NumberCircleFour size={24} weight="bold" color="var(--gray-1)" />
                <h3 style={{ marginTop: 10, color: 'var(--gray-1)' }}>Analyze results</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" style={{ marginTop: 10, color: 'var(--gray-4)' }}>
                  Use natural language querying to get answers to your questions or use our AI to generate comprehensive reports, ready to share with stakeholders in minutes.
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* All feedback in one place */}

        {/* Features */}

        {/* Integrations */}

        {/* FAQs */}
        <Row ref={faqsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'center', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Frequently asked questions</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              {faqItems.map((faq, index) => (
                <Col key={index} xs={12} sm={11} md={10} lg={10} xl={9} style={{ textAlign: 'left' }}>
                  <FaqItem 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Final call to action */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 140 : 120, backgroundColor: '#1a1a1a', padding: '80px 20px', borderRadius: 12 }}>
          <Col xs={12} sm={11} md={11} lg={10} xl={10} style={{ textAlign: 'center', maxWidth: 800 }}>
            <h2 style={{ color: 'white' }}>Let your audience truly be heard</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={10} md={9} lg={8} xl={8} style={{ textAlign: 'center' }}>
                <Text size={isPageWide ? "4" : "3"} color="gray" as='div' style={{ color: '#e0e0e0' }}>Transform your data collection with AI-powered voice conversations that capture the depth, nuance and authenticity that traditional surveys miss. Your respondents will thank you.</Text>
                <Button variant="solid" size="4" color="green" style={{ marginTop: 40 }} onClick={() => window.open('https://cal.com/voicebridge/demo', '_blank', 'noopener,noreferrer')}>Book a demo<ArrowUpRight size={16} weight="bold" /></Button>
                <div style={{ marginTop: 20 }}>
                  <Text size="1" style={{ color: '#a0a0a0' }}>30-minute call • No commitment</Text>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Footer Links */}
        <Row style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 160, marginBottom: 40 }}>
          <Col xs={12} md={3} style={{ marginBottom: 20, maxWidth: 300 }}>
            <Image src="/logo.svg" alt="Voicebridge Logo" width={isPageWide ? 160 : 140} style={{ height: 24 }} />
            <Text size="3" color="gray" as="div" style={{ marginTop: 15 }}>
              Capture authentic insights with conversational AI voice surveys
            </Text>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Link href="https://x.com/voicebridgeai" target="_blank noopener noreferrer" className="social-icon" style={{ marginRight: 10 }}><XLogo size={20} weight="bold" style={{ color: 'gray' }} /></Link>
              <Link href="https://www.linkedin.com/company/voicebridge-ai" target="_blank noopener noreferrer" className="social-icon"><LinkedinLogo size={20} weight="bold" style={{ color: 'gray' }} /></Link>
            </Row>
          </Col>

          <Col xs={6} md={3} style={{ marginBottom: 20 }}>
            <Text size="3" weight="bold" as="div" style={{ marginBottom: 15 }}>Legal</Text>
            <Text size="2" color="gray" as='div' style={{ marginBottom: 10 }}><Link href="/assets/policies/privacy_policy.pdf" target="_blank">Privacy Policy</Link></Text>
            <Text size="2" color="gray" as='div' style={{ marginBottom: 10 }}><Link href="/assets/policies/terms.pdf" target="_blank">Terms of Service</Link></Text>
          </Col>

          <Col xs={6} md={3} style={{ marginBottom: 20 }}>
            <Text size="3" weight="bold" as="div" style={{ marginBottom: 15 }}>Contact</Text>
            <Text size="2" color="gray" as="div" style={{ marginBottom: 10 }}>
              hello@voicebridgeai.com
            </Text>
            <Text size="2" color="gray" as="div">
              San Francisco, CA
            </Text>
          </Col>

          <Col xs={6} md={3} style={{ marginBottom: 20 }}>
            <Text size="3" weight="bold" as="div" style={{ marginBottom: 15 }}>Resources</Text>
            <Text size="2" color="gray" as='div' style={{ marginBottom: 10 }}><Link href="https://blog.voicebridgeai.com/" target="_blank noopener noreferrer">Blog</Link></Text>
            <Text size="2" color="gray" as='div' style={{ marginBottom: 10 }}><Link href="https://blog.voicebridgeai.com/" target="_blank noopener noreferrer">Newsletter</Link></Text>
          </Col>
        </Row>

        {/* Footer */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
          <Col style={{ textAlign: 'center' }}>
            <Text size='1' color="gray" as='div'>Copyright 2025, Voicebridge Labs Inc.</Text>
          </Col>
        </Row>


        <div style={{ height: 100 }}></div>

        <Toaster position="top-center" toastOptions={{ className: 'toast', duration: 5000 }} />


      </Col>
    </Row>

  )

}
