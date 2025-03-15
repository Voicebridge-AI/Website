import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Badge, Button, Text, Link } from '@radix-ui/themes';
import { Calendar, SignOut, ReceiptX, ClockCounterClockwise, NumberCircleOne, NumberCircleTwo, NumberCircleThree, NumberCircleFour, PencilLine, Smiley, Brain } from '@phosphor-icons/react';
import { useMediaQuery } from './shared-functions.js';
import { ThemeContext } from './Theme.js';
import Marquee from "react-fast-marquee";
import { faqItems } from './config/faqs.js';
import FaqItem from './components/FaqItem.js';

export default function Home() {

  let isPageWide = useMediaQuery('(min-width: 640px)');
  const { theme } = useContext(ThemeContext);

  const howItWorksRef = useRef(null);
  const useCasesRef = useRef(null);
  const faqsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollEffect = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (

    <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 50 }}>

      <Col xs={12} sm={12} md={12} lg={11} xl={11} style={{ padding: 20 }}>

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '5px 10px', backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
          <Image src="/logo.svg" alt="Voicebridge" width={isPageWide ? 160 : 140} style={{ marginLeft: 5, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <Nav className="ml-auto" style={{ marginRight: 0 }}>
            <Nav.Link onClick={() => scrollEffect(useCasesRef)}>Use cases</Nav.Link>
            <Nav.Link onClick={() => scrollEffect(howItWorksRef)}>How it works</Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(faqsRef)}>FAQs</Nav.Link>}
            {/* {isPageWide && <Nav.Link onClick={() => scrollEffect(pricingRef)}>Pricing</Nav.Link>} */}
          </Nav>
          {isPageWide && <Button variant="ghost" size="1" style={{ marginLeft: 10 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Book a demo</Button>}
        </Navbar>

        {/* Hero section */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={10} style={{ textAlign: 'center', maxWidth: 800, marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <Badge size="3" variant="soft" color="orange" style={{ marginBottom: 10 }}>No more superficial answers</Badge>
            {/* <h1 style={{ marginTop: 5 }}>Capture authentic insights with conversational AI voice surveys</h1> */}
            <h1 style={{ marginTop: 5 }}>Traditional, rigid surveys are out. Conversational voice surveys are in.</h1>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={11} md={10} lg={10} xl={10} style={{ textAlign: 'center', padding: 0 }}>
                <Text size='4' color="gray" as='div' style={{ marginTop: 10 }}>Capture authentic, rich insights with AI-powered voice surveys conducted by human-like AI agents that use natural conversation to allow respondents to share their real thoughts effortlessly.</Text>
                <Button variant="solid" size="3" style={{ marginTop: 24 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Book a demo</Button>
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
          <Col xs={12} sm={11} md={6} style={{ textAlign: 'left', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <h1>Get up to two times higher completion rates</h1>
            <Text size='4' color="gray" as='div' style={{ marginTop: 10 }}>
              Traditional online surveys often see abandonment rates between 40% to 55%. In contrast, AI-enhanced surveys can achieve completion rates of 70% to 80%, attributed to personalized and engaging experiences.
            </Text>
          </Col>
          <Col xs={12} sm={11} md={6} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <div style={{ padding: 20, background: 'linear-gradient(135deg, #e0f7fa 0%, #f8bbd0 50%, #e8f5e9 100%)', display: 'flex', justifyContent: 'flex-start' }}>
              <Image src="/assets/screenshots/nps-survey-record-widget.png" style={{ width: '100%', height: '100%', objectFit: 'cover', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
            </div>
          </Col>
        </Row>

        {/* Benefit: Enhanced engagement and deeper insights */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={6} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <div style={{ padding: 20, background: 'linear-gradient(135deg, #E6E6FA 0%, #E0FFFF 50%, #FAF0E6 100%)', display: 'flex', justifyContent: 'flex-start' }}>
            <Image src="/assets/screenshots/nps-survey-results-details.png" style={{ height: '100%', width: '100%', objectFit: 'cover', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
            </div>
          </Col>
          <Col xs={12} sm={11} md={6} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <h1>Uncover the real story behind every response</h1>
            <Text size='4' color="gray" as='div' style={{ marginTop: 10 }}>
              Rigid multiple-choice formats completely miss emotional context and behavioral nuance, while editing and recall biases prevent respondents from being their authentic selves. Conversational AI surveys create interactive dialogues, leading to higher respondent engagement and more detailed responses.
            </Text>
          </Col>
        </Row>

        {/* Benefit: Data processing and analysis */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={6} style={{ textAlign: 'left', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <h1>Receive instant, multi-dimensional analysis</h1>
            <Text size='4' color="gray" as='div' style={{ marginTop: 10 }}>
              Manual analysis of open-ended responses consumes 34% of researcher time, delaying insights in fast-moving markets. In contrast, conversational AI surveys can process transcribed responses to extract answers and insights instantly. 
            </Text>
          </Col>
          <Col xs={12} sm={11} md={6} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <div style={{ padding: 20, background: 'linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 50%, #fff9c4 100%)', display: 'flex', justifyContent: 'flex-start' }}>
              <Image src="/assets/screenshots/nps-survey-record-results.png" style={{ height: '100%', width: '100%', objectFit: 'cover', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
            </div>
          </Col>
        </Row>

        {/* Traditional surveys, a thing of the past */}
        {/* TODO: Insert image of bored person filling out a survey */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'left', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <h1>Break free from archaic form-based surveys</h1>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 60 }}>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <SignOut size={24} />
                <h3 style={{ marginTop: 10 }}>High Abandonment</h3>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  With 40-55% form abandonment rates, traditional surveys struggle to engage modern respondents. Millennials and Gen Z show particular resistance to static questionnaires, leading to incomplete data collection.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <ReceiptX size={24} />
                <h3 style={{ marginTop: 10 }}>Poor Data Quality</h3>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  Traditional surveys achieve only 45-50% completion rates with shallow responses averaging 12-15 words. According to Forsta's 2024 study, recall bias affects 27% of responses, while rigid formats fail to capture emotional context.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <ClockCounterClockwise size={24} />
                <h3 style={{ marginTop: 10 }}>Processing Delays</h3>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  Manual analysis consumes 34% of researchers' time, with data processing taking 3-5 days. This operational inefficiency from SIS International research shows how traditional methods delay crucial market insights.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <PencilLine size={24} />
                <h3 style={{ marginTop: 10 }}>Editing Bias</h3>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  Text respondents revise answers 4.2X more frequently, filtering authentic reactions through perceived social norms. Voice's stream-of-consciousness delivery preserves initial impulses with 38% higher ecological validity.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <Smiley size={24} />
                <h3 style={{ marginTop: 10 }}>Emotional Obfuscation</h3>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  Form-based surveys miss 41% of negative affect and 53% of mixed emotions detectable through rich conversational analysis. This makes it difficult to get a true understanding of customer sentiment.
                </Text>
              </Col>
              <Col xs={12} sm={11} md={4} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 0 }}>
                <Brain size={24} />
                <h3 style={{ marginTop: 10 }}>Participant Fatigue</h3>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
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
            <h1 style={{ color: 'var(--gray-1)' }}>How it works</h1>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              <Col xs={12} sm={6} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <NumberCircleOne size={24} weight="bold" color="var(--gray-1)" />
                <h3 style={{ marginTop: 10, color: 'var(--gray-1)' }}>Choose a template</h3>
                <Text size='3' color="gray" style={{ marginTop: 10, color: 'var(--gray-4)' }}>
                  Select from pre-built templates for common use cases like NPS, CSAT, product feedback and more. Or start from scratch with a blank canvas.
                </Text>
              </Col>
              <Col xs={12} sm={6} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <NumberCircleTwo size={24} weight="bold" color="var(--gray-1)" />
                <h3 style={{ marginTop: 10, color: 'var(--gray-1)' }}>Configure your survey</h3>
                <Text size='3' color="gray" style={{ marginTop: 10, color: 'var(--gray-4)' }}>
                  Customize the questions, AI agent personality, voice tone, and structured data outputs to match your brand and data collection needs.
                </Text>
              </Col>
              <Col xs={12} sm={6} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <NumberCircleThree size={24} weight="bold" color="var(--gray-1)" />
                <h3 style={{ marginTop: 10, color: 'var(--gray-1)' }}>Share & embed</h3>
                <Text size='3' color="gray" style={{ marginTop: 10, color: 'var(--gray-4)' }}>
                  Share your survey via a direct link or embed it seamlessly into your website with a simple code snippet.
                </Text>
              </Col>
              <Col xs={12} sm={6} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <NumberCircleFour size={24} weight="bold" color="var(--gray-1)" />
                <h3 style={{ marginTop: 10, color: 'var(--gray-1)' }}>Review insights</h3>
                <Text size='3' color="gray" style={{ marginTop: 10, color: 'var(--gray-4)' }}>
                  Access comprehensive analytics including response summaries, sentiment analysis, and structured data outputs in an easy-to-digest format.
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Use cases: Types of surveys, types of roles, types of industries */}
        <Row ref={useCasesRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'left', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <h1>Gather rich data across many use cases</h1>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>NPS Surveys</h4>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  Measure customer loyalty and satisfaction with Net Promoter Score surveys that feel like natural conversations.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>CSAT Surveys</h4>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  Gauge customer satisfaction levels through engaging dialogue rather than traditional forms.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Product Feedback</h4>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  Collect detailed product feedback and feature requests through natural conversations.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Employee Engagement</h4>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  Understand workplace satisfaction and culture through confidential AI-powered discussions.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Market Research</h4>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  Conduct in-depth market research with AI-driven conversations that uncover deeper insights.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Registration Forms</h4>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  Transform tedious registration processes into smooth, conversational experiences.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Patient Intake</h4>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  Streamline medical intake processes with conversational AI that puts patients at ease.
                </Text>
              </Col>
              <Col xs={12} sm={6} md={3} style={{ textAlign: 'left', marginBottom: 30, padding: isPageWide ? 15 : 0 }}>
                <h4>Exit Interviews</h4>
                <Text size='3' color="gray" as='div' style={{ marginTop: 10 }}>
                  Gather honest feedback from departing employees through AI-facilitated conversations.
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* All feedback in one place */}

        {/* Features */}

        {/* Integrations: Excel, Google Sheets, Airtable, Slack, etc. */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'center', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <h2>Integrate with your favorite tools</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              <Image src="/assets/logos/excel.png" alt="Microsoft Excel" style={{ height: 30, marginLeft: 20, marginRight: 20, marginBottom: 20 }} />
              <Image src="/assets/logos/google-sheets.png" alt="Google Sheets" style={{ height: 30, marginLeft: 20, marginRight: 20, marginBottom: 20 }} />
              <Image src="/assets/logos/airtable.png" alt="Airtable" style={{ height: 30, marginLeft: 20, marginRight: 20, marginBottom: 20 }} />
              <Image src="/assets/logos/slack.png" alt="Slack" style={{ height: 30, marginLeft: 20, marginRight: 20, marginBottom: 20 }} />
              <Image src="/assets/logos/zapier.png" alt="Zapier" style={{ height: 30, marginLeft: 20, marginRight: 20, marginBottom: 20 }} />
            </Row>
          </Col>
        </Row>

        {/* FAQs */}
        
        <Row ref={faqsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'center', maxWidth: 1200, marginBottom: 20, padding: isPageWide ? 30 : 0 }}>
            <h2>Frequently asked questions</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              {faqItems.map((faq, index) => (
                <Col xs={12} sm={11} md={10} lg={10} xl={9} style={{ textAlign: 'left' }}>
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
            <h1 style={{ color: 'white' }}>Let your audience truly be heard</h1>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={10} md={9} lg={8} xl={8} style={{ textAlign: 'center' }}>
                <Text size={isPageWide ? "4" : "3"} color="gray" as='div' style={{ color: '#e0e0e0' }}>Transform your data collection with AI-powered voice conversations that capture the depth, nuance and authenticity that traditional surveys miss. Your respondents will thank you.</Text>
                <Button variant="solid" size="4" color="green" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/voicebridge/30-min'}>
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
          <Col xs={12} md={4} style={{ marginBottom: 20, maxWidth: 300 }}>
            <img src="/logo.svg" alt="Voicebridge Logo" style={{ height: 24 }} />
            <Text size="3" color="gray" as="div" style={{ marginTop: 15 }}>
              Capture authentic insights with conversational AI voice surveys
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
            <Text size='1' color="gray" as='div'>Copyright 2025, Voicebridge Labs Inc.</Text>
          </Col>
        </Row>


        <div style={{ height: 100 }}></div>


      </Col>
    </Row>

  )

}
