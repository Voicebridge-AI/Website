import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Button, Text, Link, Card } from '@radix-ui/themes';
import { ArrowRight, ArrowUpRight, CaretRight, LinkedinLogo, XLogo } from '@phosphor-icons/react';
import { useMediaQuery } from './shared-functions.js';
import { ThemeContext } from './Theme.js';
import { faqItems } from './config/faqs.js';
import FaqItem from './components/FaqItem.js';
import { toast, Toaster } from 'react-hot-toast';
import Marquee from 'react-fast-marquee';
import AudioIcon from './components/AudioIcon.js';
export default function Home() {

  let isPageWide = useMediaQuery('(min-width: 640px)');
  const { theme } = useContext(ThemeContext);

  const [loading, setLoading] = useState(true);
  
  const howItWorksRef = useRef(null);
  const useCasesRef = useRef(null);
  const faqsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(false);
  }, []);

  const scrollEffect = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };
  
  const openBookDemo = () => {
    window.open('https://cal.com/voicebridge/demo', '_blank', 'noopener,noreferrer');
  };

  return (

    <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>

      <Col xs={12} sm={12} md={12} lg={11} xl={10} style={{ padding: isPageWide ? 20 : 10 }}>

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '10px', backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
          <Image src="/logo.svg" alt="Voicebridge" width={isPageWide ? 180 : 140} style={{ marginLeft: 10, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <Nav className="ml-auto" style={{ marginRight: 0 }}>
            <Nav.Link onClick={() => scrollEffect(useCasesRef)}>Use cases</Nav.Link>
            <Nav.Link onClick={() => scrollEffect(howItWorksRef)}>How it works</Nav.Link>
            {isPageWide && <Nav.Link onClick={() => window.open('https://cal.com/voicebridge/demo', '_blank', 'noopener,noreferrer')}>Book a demo <ArrowUpRight size={16} weight="bold" /></Nav.Link>}
          </Nav>
        </Navbar>

        {/* Hero section */}
        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 30 : 30 }}>
          <Col xs={12} sm={11} md={11} lg={10} xl={10} style={{ textAlign: 'center', maxWidth: 960, marginTop: isPageWide ? 0 : 40, padding: isPageWide ? 40 : 20 }}>
            <h3 style={{ color: 'var(--gray-11)' }}>👋 Say hello to AI interviewers</h3>
            <h1 style={{ marginTop: 20 }}>Collect authentic customer feedback, fast.</h1>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={11} md={9} lg={8} xl={7} style={{ textAlign: 'center', padding: 0 }}>
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Voicebridge helps you find participants, conduct voice interviews, analyze responses, and generate actionable insights.</Text>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: 20 }}>
                  <Button variant="solid" size={isPageWide ? '4' : '3'} onClick={openBookDemo}>Book a demo <ArrowUpRight size={16} weight="bold" /></Button>
                  <Button variant="outline" size={isPageWide ? '4' : '3'}>Try it out <ArrowUpRight size={16} weight="bold" /></Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row> */}

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 30 : 30 }}>
          <Col xs={12} sm={11} md={11} lg={6} xl={6} style={{ textAlign: 'left', maxWidth: 960, marginTop: isPageWide ? 0 : 40, padding: isPageWide ? 40 : 20 }}>
            <h3 style={{ color: 'var(--gray-11)' }}>👋 Say hello to AI interviewers</h3>
            <h1 style={{ marginTop: 20 }}>Collect authentic voice feedback from customers, fast.</h1>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={11} md={9} lg={9} xl={9} style={{ textAlign: 'left', padding: 0 }}>
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Voicebridge helps you find participants, conduct voice interviews, analyze responses, and generate actionable insights.</Text>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-start', marginTop: 20 }}>
                  <Button variant="solid" size={isPageWide ? '4' : '3'} onClick={openBookDemo}>Book a demo <ArrowUpRight size={16} weight="bold" /></Button>
                  <Button variant="outline" size={isPageWide ? '4' : '3'}>Try it out <ArrowUpRight size={16} weight="bold" /></Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={11} md={8} lg={6} xl={6} style={{ textAlign: 'left', maxWidth: 960, marginTop: isPageWide ? 0 : 40, padding: isPageWide ? 40 : 20 }}>
            <Image src="/assets/frontpage/comments.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Col>
        </Row>

        {/* <Marquee pauseOnHover={true} gradientColor={'#13103C'} style={{ marginTop: 80 }}>
          <Image src="/assets/logos/ubersense.png" height="22px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/floro.png" height="22px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/fanflow.png" height="28px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/biomarker.png" height="20px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/ucsb.png" height="40px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/waveform.png" height="22px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/molecule.png" height="28px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/nikos.png" height="26px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/unbound.png" height="30px" style={{ marginRight: 120 }} />
        </Marquee> */}

        {/* Side-by-side comparison of form vs. voicebridge */}

        {/* Use cases:  */}
        <Row ref={useCasesRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Get richer, more in-depth insights</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={11} md={8} lg={7} xl={6} style={{ textAlign: 'left', padding: 0 }}>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 10, marginBottom: 10 }}>
                  Voicebridge's AI-moderated conversational voice survey platform replaces traditional forms, in-depth interviews and focus groups used in various research methods.
                </Text>
              </Col>
            </Row>

            {/* TODO: Vertical bar with tabs for each use case, and a card for each use case  on the right. Select for mobile. */}
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'stretch', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              {isPageWide && (
                <Col xs={12} sm={11} md={11} lg={6} xl={5} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 10 }}>

                {/* Concept Testing */}
                <Card style={{ padding: 20, marginBottom: 10, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text size={isPageWide ? '4' : '3'} as='div'>Concept Testing</Text>
                    <CaretRight size={16} weight="bold" />
                  </div>
                </Card>

                {/* NPS Interview */}
                <Card style={{ padding: 20, marginBottom: 10, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text size={isPageWide ? '4' : '3'} as='div'>NPS Interview</Text>
                    <CaretRight size={16} weight="bold" />
                  </div>
                </Card>

                {/* Ad Creative Testing */}
                <Card style={{ padding: 20, marginBottom: 10, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text size={isPageWide ? '4' : '3'} as='div'>Ad Creative Testing</Text>
                    <CaretRight size={16} weight="bold" />
                  </div>
                </Card>

                {/* Brand Perception Research */}
                <Card style={{ padding: 20, marginBottom: 10, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text size={isPageWide ? '4' : '3'} as='div'>Brand Perception Research</Text>
                    <CaretRight size={16} weight="bold" />
                  </div>
                </Card>

                {/* Value Proposition Testing */}
                <Card style={{ padding: 20, marginBottom: 10, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text size={isPageWide ? '4' : '3'} as='div'>Value Proposition Testing</Text>
                    <CaretRight size={16} weight="bold" />
                  </div>
                </Card>

                {/* Product Feedback */}
                <Card style={{ padding: 20, marginBottom: 10, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text size={isPageWide ? '4' : '3'} as='div'>Product Feedback</Text>
                    <CaretRight size={16} weight="bold" />
                  </div>
                </Card>

                {/* Course Feedback */}
                <Card style={{ padding: 20, marginBottom: 10, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text size={isPageWide ? '4' : '3'} as='div'>Course Feedback</Text>
                    <CaretRight size={16} weight="bold" />
                  </div>
                </Card>

                {/* Diary Study */}
                <Card style={{ padding: 20, marginBottom: 10, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text size={isPageWide ? '4' : '3'} as='div'>Diary Study</Text>
                    <CaretRight size={16} weight="bold" />
                  </div>
                </Card>

              </Col>
              )}
              <Col xs={12} sm={11} md={11} lg={6} xl={6} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
                {/* Insert images here based on tab selected */}
                <Image src="/assets/frontpage/interview.gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: -20 }}>
          <Col xs={12} sm={11} md={10} lg={9} xl={9} style={{ textAlign: 'center', padding: 0 }}>
                <div style={{ borderRadius: '16px', padding: '12px 12px 12px 12px', backgroundColor: '#f0f0f0' }}>
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
                  </div>
                  <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <Image src="/assets/frontpage/interview.gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </Col>
            </Row> */}


        {/* How it works */}
        <Row ref={howItWorksRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Customer insights, accelerated</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={11} md={9} lg={8} xl={7} style={{ textAlign: 'left', padding: 0 }}>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 10, marginBottom: 10 }}>
                  Voicebridge is an AI-moderated conversational voice survey platform that replaces traditional forms, in-depth interviews and focus groups.
                </Text>
              </Col>
            </Row>

            

            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              {/* Step 1 */}
              <Col xs={12} style={{ marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--gray-5)', borderRadius: '8px', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', borderBottom: '1px solid var(--gray-5)' }}>
                    <div style={{ flex: 1, padding: '15px', textAlign: 'left', cursor: 'pointer', backgroundColor: 'var(--gray-2)', borderRight: '1px solid var(--gray-5)' }}>
                      <h3 style={{ margin: 0 }}>1. Create your survey</h3>
                      <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 12 }}>
                        Create a survey using our extensive library of templates or let AI craft the perfect questions for your goals.
                      </Text>
                    </div>
                    <div style={{ flex: 1, padding: '15px', textAlign: 'left', cursor: 'pointer', borderRight: '1px solid var(--gray-5)' }}>
                      <h3 style={{ margin: 0 }}>2. Reach your audience</h3>
                      <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 12 }}>
                        Use our platform to reach your target audience and collect authentic voice feedback.
                      </Text>
                    </div>
                    <div style={{ flex: 1, padding: '15px', textAlign: 'left', cursor: 'pointer' }}>
                      <h3 style={{ margin: 0 }}>3. Get insights</h3>
                      <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 12 }}>
                        Analyze your data with our AI-powered insights and reporting tools.
                      </Text>
                    </div>
                  </div>
                  <div style={{ padding: 0 }}>
                    {/* Insert images here based on tab selected */}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Voicebridge Features */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <h2>Modern qualitative research, powered by AI</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={11} md={9} lg={8} xl={7} style={{ textAlign: 'left', padding: 0 }}>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 10, marginBottom: 10 }}>
                  Transform how you understand customers with automated, conversational interviews and instant insights.
                </Text>
              </Col>
            </Row>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              {/* AI-moderated interviews */}
              <Col xs={12} sm={6} md={6} style={{ marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ height: '100%', padding: 24 }}>
                  <h4 style={{ fontWeight: 600 }}>AI-moderated interviews</h4>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 12 }}>
                    Let AI conduct voice interviews for you—consistent, unbiased, and always available.
                  </Text>
                </Card>
              </Col>
              {/* AI-enhanced analysis */}
              <Col xs={12} sm={6} md={6} style={{ marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ height: '100%', padding: 24 }}>
                  <h4 style={{ fontWeight: 600 }}>AI-enhanced analysis</h4>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 12 }}>
                    Instantly surface key themes, trends, and insights from every conversation—no manual coding required.
                  </Text>
                </Card>
              </Col>
              {/* Natural-language querying */}
              <Col xs={12} sm={6} md={6} style={{ marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ height: '100%', padding: 24 }}>
                  <h4 style={{ fontWeight: 600 }}>Natural-language querying</h4>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 12 }}>
                    Ask questions about your data in plain English and get instant, actionable answers.
                  </Text>
                </Card>
              </Col>
              {/* Stimuli images or video */}
              <Col xs={12} sm={6} md={6} style={{ marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ height: '100%', padding: 24 }}>
                  <h4 style={{ fontWeight: 600 }}>Stimuli images or video</h4>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 12 }}>
                    Show participants images or videos to test reactions, concepts, or creative ideas in real time.
                  </Text>
                </Card>
              </Col>
              {/* Any language */}
              <Col xs={12} sm={6} md={6} style={{ marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ height: '100%', padding: 24 }}>
                  <h4 style={{ fontWeight: 600 }}>Any language</h4>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 12 }}>
                    Run interviews and analyze responses in any language—reach a truly global audience.
                  </Text>
                </Card>
              </Col>
              {/* Recruit participants */}
              <Col xs={12} sm={6} md={6} style={{ marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ height: '100%', padding: 24 }}>
                  <h4 style={{ fontWeight: 600 }}>Recruit participants</h4>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 12 }}>
                    Bring your own audience or let us help you recruit the right participants for your study.
                  </Text>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Quotes */}

        {/* TODO Integrations */}

        {/* FAQs */}
        <Row ref={faqsRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'center', marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
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
            <h2 style={{ color: 'white' }}>Start listening to your customers.</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={10} md={9} lg={8} xl={8} style={{ textAlign: 'center' }}>
                <Text size={isPageWide ? "4" : "3"} color="gray" as='div' style={{ color: '#e0e0e0' }}>Capture feedback with conversational AI voice surveys - authentic insights for you, better experiences for them.</Text>
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
              Collect authentic insights with conversational AI voice surveys
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

          {/* <Col xs={6} md={3} style={{ marginBottom: 20 }}>
            <Text size="3" weight="bold" as="div" style={{ marginBottom: 15 }}>Resources</Text>
            <Text size="2" color="gray" as='div' style={{ marginBottom: 10 }}><Link href="https://blog.voicebridgeai.com/" target="_blank noopener noreferrer">Blog</Link></Text>
            <Text size="2" color="gray" as='div' style={{ marginBottom: 10 }}><Link href="https://blog.voicebridgeai.com/" target="_blank noopener noreferrer">Newsletter</Link></Text>
          </Col> */}

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
