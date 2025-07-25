import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Button, Text, Link, Card } from '@radix-ui/themes';
import { ArrowUpRight, LinkedinLogo, Microphone, XLogo, NotePencil, SquaresFour, Sparkle, Lightbulb, Star, SquareLogo, AppleLogo, Handshake, Browser, Book } from '@phosphor-icons/react';
import { useMediaQuery } from './shared-functions.js';
import { ThemeContext } from './Theme.js';
import { faqItems } from './config/faqs.js';
import FaqItem from './components/FaqItem.js';
import { toast, Toaster } from 'react-hot-toast';
// import Marquee from 'react-fast-marquee';
// import { SAMPLE_RESPONSES_1, SAMPLE_RESPONSES_2 } from './config/responses.js';
// import AudioIcon from './components/AudioIcon.js';

export default function Home() {

  let isPageWide = useMediaQuery('(min-width: 640px)');
  const { theme } = useContext(ThemeContext);

  const [selectedUseCase, setSelectedUseCase] = useState('concept-testing');
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

      <Col xs={12} sm={12} md={12} lg={11} xl={11} style={{ padding: isPageWide ? 20 : 10 }}>

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '10px', backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
          <Image src="/logo.svg" alt="Voicebridge" width={isPageWide ? 180 : 140} style={{ marginLeft: 10, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <Nav className="ml-auto" style={{ marginRight: 0 }}>
            <Nav.Link onClick={() => scrollEffect(useCasesRef)}>Use cases</Nav.Link>
            <Nav.Link onClick={() => scrollEffect(howItWorksRef)}>How it works</Nav.Link>
            {isPageWide && <Nav.Link onClick={() => window.open('https://cal.com/voicebridge/demo', '_blank', 'noopener,noreferrer')}>Book a demo <ArrowUpRight size={16} weight="bold" /></Nav.Link>}
          </Nav>
        </Navbar>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 80 : 30 }}>
          <Col xs={12} sm={11} md={11} lg={6} xl={6} style={{ textAlign: 'left', maxWidth: 960, marginTop: isPageWide ? 0 : 40, padding: isPageWide ? 40 : 20 }}>
            <h3 style={{ color: 'var(--gray-11)' }}>👋 Goodbye survey forms</h3>
            <h1 style={{ marginTop: 16 }}>AI interviewers collect in-depth insights, fast.</h1>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={11} md={9} lg={9} xl={9} style={{ textAlign: 'left', padding: 0 }}>
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>For feedback, reviews, testimonials, and research, use Voicebridge to conduct voice interviews, analyze responses, and generate actionable insights.</Text>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-start', marginTop: 20 }}>
                  <Button variant="solid" size={isPageWide ? '4' : '3'} onClick={openBookDemo}>Book a demo <ArrowUpRight size={16} weight="bold" /></Button>
                  {/* <Button variant="outline" size={isPageWide ? '4' : '3'} onClick={() => window.open('https://surveys.voicebridgeai.com/s/0cbcfb60-af23-41c3-bb8f-824bfd6495db', '_blank', 'noopener,noreferrer')}>Try it out <ArrowUpRight size={16} weight="bold" /></Button> */}
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={11} md={8} lg={6} xl={6} style={{ maxWidth: 660, marginTop: isPageWide ? 0 : 0, padding: isPageWide ? 10 : 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', borderRadius: 16, padding: 12, backgroundColor: '#fafafa', border: '1px solid var(--gray-6)' }}>
              <div style={{ display: 'flex', gap: '6px', position: 'absolute', top: '12px', left: '12px', zIndex: 1 }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
              </div>
              <Image src={'/assets/screencaptures/demo.gif'} style={{ maxWidth: 400, objectFit: 'contain', marginTop: 24 }} />
            </div>
          </Col>
        </Row>

        {/* <Marquee pauseOnHover={true} gradientColor={'#13103C'} speed={40} direction="left" style={{ marginTop: 40 }}>
          {SAMPLE_RESPONSES_1.map((response, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginRight: 10, width: 400, height: 120, backgroundColor: '#fff3e6', padding: 15, borderRadius: 10 }}>
              <Image src={response.image} width={50} height={50} style={{ borderRadius: '50%', marginRight: 15 }} />
              <div>
                <Text size="3" as='div' style={{ lineHeight: '1.2' }}>{response.text}</Text>
                <Text size="2" color="gray" as='div' style={{ marginTop: 5 }}>{response.author}</Text>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover={true} gradientColor={'#13103C'} speed={40} direction="right" style={{ marginTop: 10 }}>
          {SAMPLE_RESPONSES_2.map((response, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginRight: 10, width: 400, height: 120, backgroundColor: '#ffe6e6', padding: 15, borderRadius: 10 }}>
              <Image src={response.image} width={50} height={50} style={{ borderRadius: '50%', marginRight: 15 }} />
              <div>
                <Text size="3" as='div' style={{ lineHeight: '1.2' }}>{response.text}</Text>
                <Text size="2" color="gray" as='div' style={{ marginTop: 5 }}>{response.author}</Text>
              </div>
            </div>
          ))}
        </Marquee> */}


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
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 20 : 10 }}>
            <h2>Authentic and rich insights, delivered</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={11} md={8} lg={7} xl={6} style={{ textAlign: 'left', padding: 0 }}>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 10, marginBottom: 10 }}>
                  Voicebridge's AI-moderated conversational voice interviews replace traditional forms, in-depth interviews and focus groups because they capture deeper insights at a fraction of the cost.
                </Text>
              </Col>
            </Row>

            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={12} md={6} style={{ padding: isPageWide ? 30 : 10 }}>
                <h3>Traditional Survey</h3>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 10, marginBottom: 10 }}>Short, generic answers that lack depth, context, and emotion.</Text>

                <Card style={{ width: '100%', padding: 24, marginTop: 20, minHeight: 320, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
                  <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div>
                      <Text size={isPageWide ? '4' : '3'} as='label' style={{ fontWeight: 500, display: 'block', marginBottom: 8 }}>How likely are you to recommend us to a friend?</Text>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          {[...Array(11)].map((_, i) => (
                            <div key={i} style={{ 
                              width: '20px', 
                              height: '20px', 
                              border: '1px solid #ccc',
                              borderRadius: '4px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '12px',
                              backgroundColor: i === 7 ? '#007AFF' : 'transparent',
                              color: i === 7 ? 'white' : 'black'
                            }}>
                              {i}
                            </div>
                          ))}
                      </div>
                    </div>
                    <div>
                      <Text size={isPageWide ? '4' : '3'} as='label' style={{ fontWeight: 500, display: 'block', marginBottom: 8 }}>What is the primary reason for your score?</Text>
                      <input type="text" defaultValue="Good product" style={{ width: '100%', padding: '8px', borderRadius: 4, border: '1px solid #ccc' }} />
                    </div>
                    <div>
                      <Text size={isPageWide ? '4' : '3'} as='label' style={{ fontWeight: 500, display: 'block', marginBottom: 8 }}>What can we improve?</Text>
                      <textarea defaultValue="Export could be better" style={{ width: '100%', padding: '8px', borderRadius: 4, border: '1px solid #ccc', minHeight: 80 }}></textarea>
                    </div>
                  </form>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={6} style={{ padding: isPageWide ? 30 : 10 }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  Voicebridge Interview Report
                </h3>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 10, marginBottom: 10 }}>Rich, contextual insights that capture the nuances of customer feedback.</Text>
                <Card style={{ width: '100%', padding: 24, marginTop: 20, minHeight: 320, backgroundColor: '#f5f5f5', borderRadius: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: '#ffffff', padding: '8px 12px', borderRadius: 8, marginBottom: 20 }}>
                    <div style={{ backgroundColor: '#007AFF', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '12px solid white', marginLeft: 3 }}></div>
                    </div>
                    <div style={{ flex: 1, height: 4, backgroundColor: '#e0e0e0', borderRadius: 2 }}>
                      <div style={{ width: '60%', height: '100%', backgroundColor: '#007AFF', borderRadius: 2 }}></div>
                    </div>
                    <Text size={isPageWide ? '2' : '1'} color="gray">4:32</Text>
                  </div>
                  <div style={{ borderBottom: '2px solid #007AFF', paddingBottom: 12, marginBottom: 20 }}>
                    <Text size={isPageWide ? '5' : '4'} as='div' style={{ fontWeight: 700, color: '#007AFF' }}>Strong UX with Room for Export Improvements</Text>
                    <Text size={isPageWide ? '2' : '1'} color="gray" as='div'>Interview conducted on May 11, 2025</Text>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <Text size={isPageWide ? '4' : '3'} as='div' style={{ fontWeight: 600 }}>Summary</Text>
                    <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 5 }}>Participant rated the dashboard and analytics 7/10, but found the export functionality clunky. They expressed interest in additional data visualization features.</Text>
                  </div>
                  <div style={{ display: 'flex', gap: 24, marginBottom: 20 }}>
                    <div>
                      <Text size={isPageWide ? '3' : '2'} as='div' style={{ fontWeight: 600 }}>Tone</Text>
                      <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>Thoughtful, honest</Text>
                    </div>
                    <div>
                      <Text size={isPageWide ? '3' : '2'} as='div' style={{ fontWeight: 600 }}>Sentiment</Text>
                      <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>Positive</Text>
                    </div>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <Text size={isPageWide ? '4' : '3'} as='div' style={{ fontWeight: 600, marginBottom: 8 }}>Key Highlights</Text>
                    <ul style={{ paddingLeft: 20, margin: 0 }}>
                      <li><Text size={isPageWide ? '3' : '2'} color="gray" as='div'>Highlights streamlined user experience: "The dashboard is super intuitive and easy to navigate" (1:03)</Text></li>
                      <li><Text size={isPageWide ? '3' : '2'} color="gray" as='div'>Appreciates data visualization capabilities: "I love how I can see all our key metrics at a glance" (2:15)</Text></li>
                      <li><Text size={isPageWide ? '3' : '2'} color="gray" as='div'>Suggests simplifying data export workflow: "The export process requires too many steps to complete" (3:42)</Text></li>
                    </ul>
                  </div>
                  <div>
                    <Text size={isPageWide ? '4' : '3'} as='div' style={{ fontWeight: 600, marginBottom: 8 }}>Ideas & suggestions</Text>
                    <ul style={{ paddingLeft: 20, margin: 0 }}>
                      <li><Text size={isPageWide ? '3' : '2'} color="gray" as='div'>Add batch export options and customizable templates</Text></li>
                      <li><Text size={isPageWide ? '3' : '2'} color="gray" as='div'>Create video tutorials for advanced analytics features</Text></li>
                    </ul>
                  </div>
                </Card>
              </Col>
            </Row>

          </Col>
        </Row>

        {/* Use cases */}
        <Row ref={useCasesRef} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 100 }}>
          <Col xs={12} sm={11} md={8} lg={7} xl={6} style={{ textAlign: 'left', padding: 0 }}>
            <Text as='div' color="gray" style={{ marginBottom: 10 }}>Use cases</Text>
            <h2>Perfect for when the "why" matters</h2>
            <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 10, marginBottom: 10 }}>
              AI-moderated voice interviews use natural dialogue to capture deeper thoughts and the real intent behind responses that.
            </Text>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
          <Col xs={6} sm={6} md={6} lg={3} xl={3} style={{ textAlign: 'left', marginBottom: 20, padding: 10 }}>
            <Card style={{ padding: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Browser size={24} />
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10, fontWeight: 600 }}>Product Feedback</Text>
                <div style={{ marginTop: 10 }}>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Qualitative NPS feedback</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Concept testing</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Value proposition validation</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Feature requests</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Creative testing</Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col xs={6} sm={6} md={6} lg={3} xl={3} style={{ textAlign: 'left', marginBottom: 20, padding: 10 }}>
            <Card style={{ padding: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Star size={24} />
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10, fontWeight: 600 }}>Reviews & Testimonials</Text>
                <div style={{ marginTop: 10 }}>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Customer reviews</Text>

                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Case study interviews</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Success stories</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Product reviews</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Service feedback</Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col xs={6} sm={6} md={6} lg={3} xl={3} style={{ textAlign: 'left', marginBottom: 20, padding: 10 }}>
            <Card style={{ padding: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Handshake size={24} />
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10, fontWeight: 600 }}>Customer Success</Text>
                <div style={{ marginTop: 10 }}>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Onboarding feedback</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Customer satisfaction</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Exit interviews</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Support quality</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Churn analysis</Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col xs={6} sm={6} md={6} lg={3} xl={3} style={{ textAlign: 'left', marginBottom: 20, padding: 10 }}>
            <Card style={{ padding: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Book size={24} />
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10, fontWeight: 600 }}>Market Research</Text>
                <div style={{ marginTop: 10 }}>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Competitor analysis</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Market validation</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Buyer personas</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Price sensitivity</Text>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div'>• Market trends</Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
          
          <Col xs={6} sm={6} md={4} lg={3} xl={3} style={{ textAlign: 'left', marginBottom: 20, padding: 10 }}>
            <Card style={{ marginBottom: 10, padding: 20, minHeight: 200 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Lightbulb size={24} />
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Concept Testing</Text>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 5 }}>
                  Save time and money by catching product issues early with real customer feedback.
                </Text>
              </div>
            </Card>
          </Col>

          <Col xs={6} sm={6} md={4} lg={3} xl={3} style={{ textAlign: 'left', marginBottom: 20, padding: 10 }}>
            <Card style={{ marginBottom: 10, padding: 20, minHeight: 200 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Star size={24} />
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Qualitative NPS</Text>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 5 }}>
                  Understand the real reasons behind your NPS scores with authentic, unfiltered customer feedback.
                </Text>
              </div>
            </Card>
          </Col>

          <Col xs={6} sm={6} md={4} lg={3} xl={3} style={{ textAlign: 'left', marginBottom: 20, padding: 10 }}>
            <Card style={{ marginBottom: 10, padding: 20, minHeight: 200 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <SquareLogo size={24} />
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Creative Testing</Text> 
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 5 }}>
                  Maximize ROI, avoid costly mistakes, and create campaigns that truly resonate with your audience.
                </Text>
              </div>
            </Card>
          </Col>

          <Col xs={6} sm={6} md={4} lg={3} xl={3} style={{ textAlign: 'left', marginBottom: 20, padding: 10 }}>
            <Card style={{ marginBottom: 10, padding: 20, minHeight: 200 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <AppleLogo size={24} />
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Brand Perception Research</Text>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 5 }}>
                  Learn how your brand is perceived and identify opportunities to strengthen your market position.
                </Text>
              </div>
            </Card>
          </Col>

          <Col xs={6} sm={6} md={4} lg={3} xl={3} style={{ textAlign: 'left', marginBottom: 20, padding: 10 }}>
            <Card style={{ marginBottom: 10, padding: 20, minHeight: 200 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Handshake size={24} />
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Value Proposition Testing</Text>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 5 }}>
                  Refine your value propositions to ensure your messaging hits the mark.
                </Text>
              </div>
            </Card>
          </Col>

          <Col xs={6} sm={6} md={4} lg={3} xl={3} style={{ textAlign: 'left', marginBottom: 20, padding: 10 }}>
            <Card style={{ marginBottom: 10, padding: 20, minHeight: 200 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Browser size={24} />
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Product Feedback</Text>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 5 }}>
                  Identify pain points, validate features, and build products people love.
                </Text>
              </div>
            </Card>
          </Col>

          <Col xs={6} sm={6} md={4} lg={3} xl={3} style={{ textAlign: 'left', marginBottom: 20, padding: 10 }}>
            <Card style={{ marginBottom: 10, padding: 20, minHeight: 200 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Book size={24} />
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Course Feedback</Text>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 5 }}>
                  Enhance course content, improve learning outcomes, and boost student satisfaction.
                </Text>
              </div>
            </Card>
          </Col>

          <Col xs={6} sm={6} md={4} lg={3} xl={3} style={{ textAlign: 'left', marginBottom: 20, padding: 10 }}>
            <Card style={{ marginBottom: 10, padding: 20, minHeight: 200 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <NotePencil size={24} />
                <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginTop: 10 }}>Diary Study</Text>
                <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 5 }}>
                  Understand user behavior and pain points over time.
                </Text>
              </div>
            </Card>
          </Col>
        </Row> */}

                {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} style={{ textAlign: 'center', padding: 0 }}>
                <div style={{ borderRadius: '16px', padding: '12px 12px 12px 12px', backgroundColor: 'var(--gray-1)', border: '1px solid var(--gray-5)' }}>
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
                  </div>
                  <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <Image src="/assets/frontpage/shoe.gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </Col>
            </Row> */}

        {/* How it works */}
        <Row ref={howItWorksRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 100 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginBottom: 10 }}>How it works</Text>
            <h2>Customer insights, accelerated</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={11} md={9} lg={8} xl={7} style={{ textAlign: 'left', padding: 0 }}>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div' style={{ marginTop: 10, marginBottom: 10 }}>
                  Setting up a voice interview and sharing it with your audience takes just a few minutes with the help of our AI survey building assistant.
                </Text>
              </Col>
            </Row>

            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
              {/* Step 1 */}
              <Col xs={12} sm={11} md={6} lg={4} xl={4} style={{ marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ height: '100%', padding: '15px' }}>
                  <div style={{ 
                    backgroundColor: 'var(--gray-2)', 
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '20px',
                    aspectRatio: '1/1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '12px'
                  }}>
                    <Button variant="outline" size="2" style={{ width: '100%', justifyContent: 'center' }}>
                      <SquaresFour size={16} /> Choose template
                    </Button>
                    <Button variant="outline" size="2" style={{ width: '100%', justifyContent: 'center' }}>
                      <Sparkle size={16} /> Create with AI
                    </Button>
                    <Button variant="outline" size="2" style={{ width: '100%', justifyContent: 'center' }}>
                      <NotePencil size={16} /> Start from scratch
                    </Button>
                  </div>
                  <h3 style={{ margin: 0 }}>1</h3>
                  <h4 style={{ marginTop: 5 }}>Create your survey</h4>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 12 }}>
                    Create a survey using our extensive library of templates or let AI craft the perfect questions for your goals.
                  </Text>
                </Card>
              </Col>

              {/* Step 2 */}
              <Col xs={12} sm={11} md={6} lg={4} xl={4} style={{ marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ height: '100%', padding: '15px' }}>
                <div style={{ 
                    backgroundColor: 'var(--gray-2)', 
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '20px',
                    aspectRatio: '1/1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="/assets/frontpage/responses/emma.png" alt="Emma" style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid white', position: 'relative', zIndex: 5, marginRight: -10 }} />
                      <img src="/assets/frontpage/responses/sofia.png" alt="Sofia" style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid white', position: 'relative', zIndex: 4, marginRight: -10 }} />
                      <img src="/assets/frontpage/responses/priya.png" alt="Priya" style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid white', position: 'relative', zIndex: 3, marginRight: -10 }} />
                      <img src="/assets/frontpage/responses/dave.png" alt="Dave" style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid white', position: 'relative', zIndex: 2, marginRight: -10 }} />
                      <img src="/assets/frontpage/responses/michael.png" alt="Michael" style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid white', position: 'relative', zIndex: 1 }} />
                    </div>
                  </div>
                  <h3 style={{ margin: 0 }}>2</h3>
                  <h4 style={{ marginTop: 5 }}>Reach your audience</h4>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 12 }}>
                    Use our platform to reach your target audience and collect authentic voice feedback.
                  </Text>
                </Card>
              </Col>

              {/* Step 3 */}
              <Col xs={12} sm={11} md={6} lg={4} xl={4} style={{ marginBottom: 30, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ height: '100%', padding: '15px' }}>
                  <div style={{ 
                    backgroundColor: 'var(--gray-2)', 
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '20px',
                    aspectRatio: '1/1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <Button size="3" style={{ padding: '20px 32px' }}>
                      <Lightbulb size={16} style={{ marginRight: 4 }} />
                      Generate insights
                    </Button>
                  </div>
                  <h3 style={{ margin: 0 }}>3</h3>
                  <h4 style={{ marginTop: 5 }}>Get insights</h4>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 12 }}>
                    View interview analysis and generate reports with our AI-powered insights and reporting tools.
                  </Text>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Voicebridge Features */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80 }}>
          <Col xs={12} sm={11} md={12} style={{ textAlign: 'left', marginBottom: 20, padding: isPageWide ? 30 : 10 }}>
            <Text size={isPageWide ? '4' : '3'} as='div' style={{ marginBottom: 10 }}>Features</Text>
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
              <Col xs={12} sm={6} md={6} style={{ marginBottom: 20, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ padding: 24 }}>
                  <div style={{
                    width: '100%',
                    height: 300,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      width: 80,
                      height: 80,
                      backgroundColor: '#FF4444',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center', 
                      alignItems: 'center',
                      animation: 'throb 1.5s ease-in-out infinite',
                      boxShadow: '0 0 20px rgba(255, 68, 68, 0.3)'
                    }}>
                      <Microphone size={32} color="white" weight="fill" />
                    </div>
                    <style>
                      {`
                      @keyframes throb {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.1); }
                        100% { transform: scale(1); }
                      }
                      `}
                    </style>
                  </div>
                  <h3 style={{ fontWeight: 600, marginTop: 20 }}>AI-moderated interviews</h3>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 0 }}>
                    Let AI conduct voice interviews for you—consistent, unbiased, and always available.
                  </Text>
                </Card>
              </Col>
              {/* AI-enhanced analysis */}
              <Col xs={12} sm={6} md={6} style={{ marginBottom: 20, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ padding: 24 }}>
                  <Image src="/assets/screenshots/ai-analysis-report.png" style={{ width: '100%', maxHeight: 300, objectFit: 'contain', margin: '0 auto', display: 'block' }} />
                  <h3 style={{ fontWeight: 600, marginTop: 20 }}>AI-enhanced analysis</h3>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 0 }}>
                    Instantly surface key themes, trends, and insights from every conversation—no manual coding required.
                  </Text>
                </Card>
              </Col>
              {/* Natural-language querying */}
              <Col xs={12} sm={6} md={6} style={{ marginBottom: 20, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ padding: 24 }}>
                  <Image src="/assets/screenshots/nps-survey-results-query.png" style={{ width: '100%', maxHeight: 300, objectFit: 'cover', margin: '0 auto', display: 'block' }} />
                  <h3 style={{ fontWeight: 600, marginTop: 20 }}>Natural-language querying</h3>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 20 }}>
                    Ask questions about your data in plain English and get instant, actionable answers.
                  </Text>
                </Card>
              </Col>
              {/* Stimuli images */}
              <Col xs={12} sm={6} md={6} style={{ marginBottom: 20, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ padding: 24 }}>
                  <Image src="/assets/frontpage/shoe.gif" style={{ width: '100%', maxHeight: 300, objectFit: 'contain', margin: '0 auto', display: 'block' }} />
                  <h3 style={{ fontWeight: 600, marginTop: 20 }}>Stimuli images</h3>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 20 }}>
                    Show participants images to test reactions, concepts, or creative ideas while they speak.
                  </Text>
                </Card>
              </Col>
              {/* Multi-language support */}
              <Col xs={12} sm={6} md={6} style={{ marginBottom: 20, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ padding: 24 }}>
                  <div style={{ width: '100%', maxWidth: 300, height: 200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
                    <Text size="4" style={{ color: '#007AFF' }}>English</Text>
                    <Text size="4" style={{ color: '#007AFF' }}>Español</Text>
                    <Text size="4" style={{ color: '#007AFF' }}>中文</Text>
                    <Text size="4" style={{ color: '#007AFF' }}>Français</Text>
                    <Text size="4" style={{ color: '#007AFF' }}>日本語</Text>
                    <Text size="4" style={{ color: '#007AFF' }}>Deutsch</Text>
                    <Text size="4" style={{ color: '#007AFF' }}>한국어</Text>
                    <Text size="4" style={{ color: '#007AFF' }}>Português</Text>
                    <Text size="4" style={{ color: '#007AFF' }}>हिंदी</Text>
                    <Text size="4" style={{ color: '#007AFF' }}>Italiano</Text>
                  </div>
                  <h3 style={{ fontWeight: 600, marginTop: 20 }}>Multi-language support</h3>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 20 }}>
                    Run interviews in multiple languages—reach a truly global audience.
                  </Text>
                </Card>
              </Col>
              {/* Recruit participants */}
              <Col xs={12} sm={6} md={6} style={{ marginBottom: 20, padding: isPageWide ? 15 : 10 }}>
                <Card style={{ padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '-12px', margin: '0 auto', maxWidth: 300, height: 200 }}>
                    <img src="/assets/frontpage/responses/emma.png" alt="Emma" style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid white' }} />
                    <img src="/assets/frontpage/responses/sofia.png" alt="Sofia" style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid white', marginLeft: -12 }} />
                    <img src="/assets/frontpage/responses/priya.png" alt="Priya" style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid white', marginLeft: -12 }} />
                    <img src="/assets/frontpage/responses/dave.png" alt="Dave" style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid white', marginLeft: -12 }} />
                    <img src="/assets/frontpage/responses/michael.png" alt="Michael" style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid white', marginLeft: -12 }} />
                  </div>
                  <h3 style={{ fontWeight: 600, marginTop: 20 }}>Recruit participants</h3>
                  <Text size={isPageWide ? '3' : '2'} color="gray" as='div' style={{ marginTop: 20 }}>
                    Bring your own audience, share on social media, or let us help you recruit the right participants for your study.
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
            <h2 style={{ color: 'white' }}>Start conversations, don't send surveys.</h2>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={10} md={9} lg={8} xl={8} style={{ textAlign: 'center' }}>
                <Text size={isPageWide ? "4" : "3"} color="gray" as='div' style={{ color: '#e0e0e0' }}>Capture authentic insights with conversational AI voice interviews. Better experience for them, better decisions for you.</Text>
                <Button variant="solid" size="4" color="green" style={{ marginTop: 40 }} onClick={() => window.open('https://cal.com/voicebridge/demo', '_blank', 'noopener,noreferrer')}>Book a demo<ArrowUpRight size={16} weight="bold" /></Button>
                <div style={{ marginTop: 20 }}>
                  <Text size="1" style={{ color: '#a0a0a0' }}>60-minute call • No commitment</Text>
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
