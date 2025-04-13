import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Badge, Button, Text, Link } from '@radix-ui/themes';
import { Calendar, SignOut, ReceiptX, ClockCounterClockwise, NumberCircleOne, NumberCircleTwo, NumberCircleThree, NumberCircleFour, PencilLine, Smiley, Brain, XLogo, LinkedinLogo, ArrowUpRight } from '@phosphor-icons/react';
import { useMediaQuery, validateEmail } from './shared-functions.js';
import { ThemeContext } from './Theme.js';
import Marquee from "react-fast-marquee";
import { faqItems } from './config/faqs.js';
import FaqItem from './components/FaqItem.js';
import { toast, Toaster } from 'react-hot-toast';
import GhostContentAPI from "@tryghost/content-api";
// import PostCard from './components/PostCard.js';
// import NewsletterSignup from './components/NewsletterSignup.js';

export default function Home() {

  let isPageWide = useMediaQuery('(min-width: 640px)');
  const { theme } = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const howItWorksRef = useRef(null);
  const useCasesRef = useRef(null);
  const faqsRef = useRef(null);

  useEffect(() => {
    // getGhostPosts();
    // getWordPressPosts();
    window.scrollTo(0, 0);
    setLoading(false);
  }, []);

  const scrollEffect = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const getGhostPosts = async () => {

    try {
      const api = new GhostContentAPI({
        url: "https://voicebridgeai.ghost.io",
        key: process.env.REACT_APP_GHOST_CONTENT_API_KEY,
        version: "v5.0"
      });

      const posts = await api.posts.browse({
        limit: 3
      });

      if (posts.length > 0) {
        setPosts(posts);
      }

      return true;

    } catch (error) {
      console.error('Error fetching posts:', error);
      return false;
    }
  }
  
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

    <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 50 }}>

      <Col xs={12} sm={12} md={12} lg={11} xl={11} style={{ padding: 10 }}>

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '2px 10px', backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
          <Image src="/logo.svg" alt="Voicebridge" width={isPageWide ? 160 : 120} style={{ marginLeft: 5, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <Nav className="ml-auto" style={{ marginRight: 0 }}>
            <Nav.Link onClick={() => scrollEffect(useCasesRef)}>Use cases</Nav.Link>
            <Nav.Link onClick={() => scrollEffect(howItWorksRef)}>How it works</Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(faqsRef)}>FAQs</Nav.Link>}
            {isPageWide && <Nav.Link onClick={() => window.open('https://blog.voicebridgeai.com', '_blank', 'noopener,noreferrer')}>Blog</Nav.Link>}
          </Nav>
          {isPageWide && <Button variant="ghost" size="2" style={{ marginLeft: 10 }} onClick={() => window.open('https://cal.com/voicebridge/demo', '_blank', 'noopener,noreferrer')}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Book a demo</Button>}
        </Navbar>

        {/* Hero section */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: -10, minHeight: '60vh' }}>
          <Col xs={12} sm={11} md={11} lg={10} xl={9} style={{ textAlign: 'center', maxWidth: 900, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <Badge color="blue" size="3">Qualitative research at scale</Badge>
            <h1 style={{ marginTop: 20 }}>Capture authentic insights with AI-moderated voice surveys</h1>
            {/* <h1 style={{ marginTop: 5 }}>Traditional, rigid surveys are out. Conversational voice surveys are in.</h1> */}
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={11} sm={11} md={9} lg={7} style={{ textAlign: 'center', padding: 0 }}>
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Voicebridge's AI voice agents conduct and analyze in-depth interviews with your audience to gather rich, deep insights with emotional context and behavioral nuance.</Text>
                <Button variant="solid" size="3" style={{ marginTop: 24 }} onClick={openBookDemo}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Book a demo</Button>
                {/* <TextField.Root size="3" placeholder="Enter your email" style={{ marginTop: 20 }} value={email} onChange={(e) => setEmail(e.target.value)} /> */}
                {/* <Button variant="solid" size="3" style={{ marginTop: 10 }} onClick={() => saveEmail(email)}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Book a demo</Button> */}
              </Col>
            </Row>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={12} sm={11} md={11} lg={8} style={{ textAlign: 'center', padding: 0 }}>

              </Col>
            </Row>
          </Col>
        </Row>

        {/* Company logos */}

        <Marquee pauseOnHover={true} gradientColor={'#13103C'} style={{ marginTop: 20 }}>
          <Image src="/assets/logos/ubersense.png" height="20px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/floro.png" height="22px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/fanflow.png" height="28px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/biomarker.png" height="20px" style={{ marginRight: 120 }} />
          {/* <Image src="/assets/logos/ucsb.png" height="40px" style={{ marginRight: 120 }} /> */}
          <Image src="/assets/logos/waveform.png" height="22px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/molecule.png" height="28px" style={{ marginRight: 120 }} />
          {/* <Image src="/assets/logos/nikos.png" height="26px" style={{ marginRight: 120 }} /> */}
          <Image src="/assets/logos/unbound.png" height="30px" style={{ marginRight: 120 }} />
        </Marquee>

        {/* Benefit: Better response rates */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={6} style={{ textAlign: 'left', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Achieve significantly higher completion rates</h2>
            <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 10 }}>
              Traditional online surveys often see abandonment rates between 40% to 55%. In contrast, conversational surveys can achieve completion rates of 70% to 80%, attributed to personalized and engaging dialogue.
            </Text>
          </Col>
          <Col xs={12} sm={11} md={6} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <div style={{ padding: 20, background: 'linear-gradient(135deg, #E0FFFF 0%, #FAF0E6 50%, #E6E6FA 100%)', display: 'flex', justifyContent: 'flex-start' }}>
              <Image src="/assets/screenshots/survey-recording.gif" style={{ width: '100%', height: '100%', objectFit: 'cover', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
            </div>
          </Col>
        </Row>

        {/* Benefit: Enhanced engagement and deeper insights */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={6} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <div style={{ padding: 20, background: 'linear-gradient(135deg, #E6E6FA 0%, #E0FFFF 50%, #FAF0E6 100%)', display: 'flex', justifyContent: 'flex-start' }}>
            <Image src="/assets/screenshots/nps-survey-results-details.png" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>
          </Col>
          <Col xs={12} sm={11} md={6} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Uncover the real story behind every response</h2>
            <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 10 }}>
              Rigid multiple-choice formats completely miss emotional context and behavioral nuance, while editing and recall biases prevent respondents from being their authentic selves. Conversational AI surveys create interactive dialogues, leading to higher respondent engagement and more detailed responses.
            </Text>
          </Col>
        </Row>

        {/* Benefit: Data processing and analysis */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={6} style={{ textAlign: 'left', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Conduct instant multi-dimensional analysis</h2>
            <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 10 }}>
              Analysis of open-ended typed responses consumes 34% of researcher time, delaying insights in fast-moving markets. In contrast, conversational AI surveys can equip researchers with the ability to instantly query transcribed responses and analyze them without delay. 
            </Text>
          </Col>
          <Col xs={12} sm={11} md={6} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <div style={{ padding: 20, background: 'linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 50%, #fff9c4 100%)', display: 'flex', justifyContent: 'flex-start' }}>
              <Image src="/assets/screenshots/nps-survey-results-query.png" style={{ height: '100%', width: '100%', objectFit: 'cover', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
            </div>
          </Col>
        </Row>

        {/* Traditional surveys, a thing of the past */}
        {/* TODO: Insert image of bored person filling out a survey */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'left', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Break free from archaic form-based surveys</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <SignOut size={24} />
                <h3 style={{ marginTop: 10 }}>High Abandonment</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  With 40-55% form abandonment rates, traditional surveys struggle to engage modern respondents. Millennials and Gen Z show particular resistance to static questionnaires, leading to incomplete data collection.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <ReceiptX size={24} />
                <h3 style={{ marginTop: 10 }}>Poor Data Quality</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Traditional surveys achieve only 45-50% completion rates with shallow responses averaging 12-15 words. According to Forsta's 2024 study, recall bias affects 27% of responses, while rigid formats fail to capture emotional context.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <ClockCounterClockwise size={24} />
                <h3 style={{ marginTop: 10 }}>Processing Delays</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Manual analysis consumes 34% of researchers' time, with data processing taking 3-5 days. This operational inefficiency from SIS International research shows how traditional methods delay crucial market insights.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <PencilLine size={24} />
                <h3 style={{ marginTop: 10 }}>Editing Bias</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Text respondents revise answers 4.2X more frequently, filtering authentic reactions through perceived social norms. Voice's stream-of-consciousness delivery preserves initial impulses with 38% higher ecological validity.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <Smiley size={24} />
                <h3 style={{ marginTop: 10 }}>Emotional Obfuscation</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Form-based surveys miss 41% of negative affect and 53% of mixed emotions detectable through rich conversational analysis. This makes it difficult to get a true understanding of customer sentiment.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <Brain size={24} />
                <h3 style={{ marginTop: 10 }}>Participant Fatigue</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Typing induces 2.3X higher cognitive load, leading to 27% shorter responses and 19% more satisficing behavior. The median text survey response contains 14.3 words versus 78.9 in voice equivalents.
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
        

        {/* Social proof: Quotes from scientific papers */}

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
                  Customize the questions, AI agent personality, voice tone, and structured data outputs to match your brand and data collection needs.
                </Text>
              </Col>
              <Col xs={12} sm={6} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <NumberCircleThree size={24} weight="bold" color="var(--gray-1)" />
                <h3 style={{ marginTop: 10, color: 'var(--gray-1)' }}>Share & embed</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" style={{ marginTop: 10, color: 'var(--gray-4)' }}>
                  Share your survey via a direct link or embed it seamlessly into your website with a simple code snippet.
                </Text>
              </Col>
              <Col xs={12} sm={6} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <NumberCircleFour size={24} weight="bold" color="var(--gray-1)" />
                <h3 style={{ marginTop: 10, color: 'var(--gray-1)' }}>Review insights</h3>
                <Text size={isPageWide ? '3' : '2'} color="gray" style={{ marginTop: 10, color: 'var(--gray-4)' }}>
                  Access comprehensive analytics including response summaries, sentiment analysis, and structured data outputs in an easy-to-digest format.
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Use cases: Types of surveys, types of roles, types of industries */}
        <Row ref={useCasesRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 120 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'left', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Gather rich data across many use cases</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>NPS Research</h4>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Measure customer loyalty and satisfaction with Net Promoter Score surveys that feel like natural conversations.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>CSAT Research</h4>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Gauge customer satisfaction levels through engaging dialogue rather than traditional forms.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Brand Perception Research</h4>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Understand how your brand is perceived by your audience through natural conversations.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Ad Campaign Research</h4>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Understand how your audience perceives your ads and messaging through natural conversations.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Product Feedback</h4>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Collect detailed product feedback and feature requests through natural conversations.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Employee Engagement</h4>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Understand workplace satisfaction and culture through confidential AI-powered discussions.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Market Research</h4>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Conduct in-depth market research with AI-driven conversations that uncover deeper insights.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Exit Interviews</h4>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Gather honest feedback from departing employees through AI-facilitated conversations.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Intake Interviews</h4>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Gather detailed information from potential customers, community members, and more through conversational interviews.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Shopper Interviews</h4>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Conduct shopper interviews to understand how your products are perceived in the real world.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Poll</h4>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Conduct polls and capture sentiment especially with open-ended feedback.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Consumer Preference Research</h4>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>
                  Conduct consumer preference research to understand how your products are perceived in the real world.
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* All feedback in one place */}

        {/* Features */}

        {/* Integrations: Excel, Google Sheets, Airtable, Slack, etc. */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'center', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Integrate with your favorite tools</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
              <Image src="/assets/logos/google-sheets.png" alt="Google Sheets" style={{ height: 30, marginLeft: 20, marginRight: 20, marginBottom: 20 }} />
              <Image src="/assets/logos/excel.png" alt="Microsoft Excel" style={{ height: 30, marginLeft: 20, marginRight: 20, marginBottom: 20 }} />
              <Image src="/assets/logos/airtable.png" alt="Airtable" style={{ height: 30, marginLeft: 20, marginRight: 20, marginBottom: 20 }} />
              {/* <Image src="/assets/logos/slack.png" alt="Slack" style={{ height: 30, marginLeft: 20, marginRight: 20, marginBottom: 20 }} /> */}
              {/* <Image src="/assets/logos/zapier.png" alt="Zapier" style={{ height: 30, marginLeft: 20, marginRight: 20, marginBottom: 20 }} /> */}
            </Row>
          </Col>
        </Row>

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

        {/* Render 3 posts here */}
        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'center', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Latest posts</h2>
            {posts.length > 0 && (
              <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
                {posts.map((post, index) => (
                  <Col key={index} xs={12} sm={11} md={6} lg={4} style={{ textAlign: 'left' }}>
                    <PostCard
                      key={index}
                      title={post.title}
                      excerpt={post.excerpt}
                      image={post.feature_image}
                      url={post.url}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row> */}

        {/* Visit our blog */}
        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'center', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <Button variant="ghost" size="4" onClick={() => window.open('https://blog.voicebridgeai.com/', '_blank', 'noopener,noreferrer')}>
              Visit our blog <ArrowUpRight size={20} weight="bold" />
            </Button>
          </Col>
        </Row> */}

        {/* newsletter signup */}
        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'center', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Subscribe to our newsletter</h2>
            <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 10 }}>Get the latest news and product updates from Voicebridge AI delivered straight to your inbox.</Text>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              <Col xs={12} sm={11} md={6} lg={4} style={{ textAlign: 'left' }}>
                <NewsletterSignup />
              </Col>
            </Row>
          </Col>
        </Row> */}

        {/* Final call to action */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 140 : 120, backgroundColor: '#1a1a1a', padding: '80px 20px', borderRadius: 12 }}>
          <Col xs={12} sm={11} md={11} lg={10} xl={10} style={{ textAlign: 'center', maxWidth: 800 }}>
            <h2 style={{ color: 'white' }}>Let your audience truly be heard</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={10} md={9} lg={8} xl={8} style={{ textAlign: 'center' }}>
                <Text size={isPageWide ? "4" : "3"} color="gray" as='div' style={{ color: '#e0e0e0' }}>Transform your data collection with AI-powered voice conversations that capture the depth, nuance and authenticity that traditional surveys miss. Your respondents will thank you.</Text>
                <Button variant="solid" size="4" color="green" style={{ marginTop: 40 }} onClick={() => window.open('https://cal.com/voicebridge/demo', '_blank', 'noopener,noreferrer')}>
                  <Calendar size={20} weight="bold" style={{ color: 'white' }} /> Book a demo
                </Button>
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
            <img src="/logo.svg" alt="Voicebridge Logo" width={isPageWide ? 140 : 100} style={{ height: 24 }} />
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
