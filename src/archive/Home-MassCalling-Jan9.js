import React, { useContext, useRef, useEffect, useState } from 'react';
import { Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { Button, Card, Heading, Text } from '@radix-ui/themes';
import { Heart, Calendar, Check, Chat, Headset, Question, Bank, ChartBar, Buildings, CurrencyDollar, House, Cloud, Play, Pause, Waveform, ChatCircle, SpeakerHigh, Globe, Phone, Plugs, ShieldCheck, ChartLine, ArrowsLeftRight, Voicemail, Users, MapPin, MoneyWavy, Microphone, Briefcase } from '@phosphor-icons/react';
import { useMediaQuery } from '../shared-functions.js';
import { ThemeContext } from '../Theme.js';
import Marquee from "react-fast-marquee";

export default function Home() {

  const outboundRef = useRef(null);
  const industriesRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(new Audio('/assets/audio/kate-fundraiser.wav'));

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

  useEffect(() => {
    const audio = audioRef.current;

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

        {/* Background gradient */}
        {/* <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'linear-gradient(to bottom, rgba(255, 0, 0, 0.1), rgba(147, 51, 234, 0.07), rgba(59, 130, 246, 0.05))' }}></div> */}

        <Navbar justify="true" fixed="top" variant={theme === 'light-theme' ? "light" : "dark"} style={{ padding: '5px 10px', backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
          <Image src="/logo.svg" alt="Voxiply" width={isPageWide ? 140 : 120} style={{ marginLeft: 10 }} />
          <Nav className="ml-auto" style={{ marginRight: 10 }}>
            <Nav.Link onClick={() => scrollEffect(outboundRef)}>Use cases</Nav.Link>
            <Nav.Link onClick={() => scrollEffect(industriesRef)}>Industries</Nav.Link>
            {isPageWide && <Nav.Link onClick={() => scrollEffect(featuresRef)}>Features</Nav.Link>}
            {/* {isPageWide && <Nav.Link onClick={() => scrollEffect(faqRef)}>FAQs</Nav.Link>} */}
          </Nav>
          {isPageWide &&
          <Button
            variant="ghost"
            size="2"
            style={{ marginRight: 0 }}
            onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voxiply-demo'}
          >Book a demo
            </Button>
          }
        </Navbar>

        {/* Hero section */}
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 80, minHeight: '50vh' }}>
          <Col xs={12} sm={12} md={12} lg={9} xl={8} style={{ textAlign: 'center', maxWidth: 800 }}>

            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                <Heading size={isPageWide ? '9' : '8'} as='div'>
                  Make 1000s of phone calls with a click of a button
                </Heading>
              </Col>
            </Row>

            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={10} lg={9} xl={8} style={{ textAlign: 'center' }}>
                <Text size={isPageWide ? '4' : '3'} color="gray" as='div'>Use AI voice agents to run your outbound calling campaigns. Available 24/7/365. 10x cheaper than a service.</Text>
              </Col>
            </Row>

            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
              <Col xs={11} sm={10} md={8} lg={8} xl={6} style={{ textAlign: 'center' }}>
                <Button variant="solid" size={isPageWide ? '4' : '3'} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voxiply-demo'}><Calendar size={18} weight="bold" style={{ marginRight: 0 }} /> Book a demo</Button>

                <Text size='2' color="gray" as='p' style={{ marginTop: 10 }}>30-minute demo. No commitment.</Text>

                <Text size='2' color="gray" as='p' style={{ marginTop: 20 }}>Listen to a sample call</Text>

                <Card style={{
                  padding: '15px 20px',
                  marginLeft: 5,
                  marginBottom: 10,
                  borderRadius: 30,
                  border: '1px solid var(--gray-6)',
                  backgroundColor: 'var(--gray-1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
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
                        audioRef.current.currentTime = percentage * duration;
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
                </Card>

              </Col>
            </Row>
          </Col>

        </Row>

        {/* Social proof - Past experience helping milions of athletes, fitness professionals, and health professionals */}
        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={10} sm={9} md={8} lg={8} xl={8} style={{ padding: 0, textAlign: 'center', maxWidth: 400 }}>
            <Text size='2' color="gray" as='p'>Built by a team of technologists that has built software products for millions of users</Text>
          </Col>
        </Row> */}

        {/* Company logos */}

        <Marquee pauseOnHover={true} gradientColor={'#13103C'} style={{ marginTop: 40 }}>
          <Image src="/assets/logos/ubersense.png" height="22px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/floro.png" height="22px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/fanflow.png" height="28px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/biomarker.png" height="20px" style={{ marginRight: 120 }} />
          {/* <Image src="/assets/logos/ucsb.png" height="40px" style={{ marginRight: 120 }} /> */}
          <Image src="/assets/logos/waveform.png" height="22px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/molecule.png" height="28px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/nikos.png" height="26px" style={{ marginRight: 120 }} />
          <Image src="/assets/logos/unbound.png" height="30px" style={{ marginRight: 120 }} />
        </Marquee>

        {/* use cases */}
        <Row ref={outboundRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'left' }}>
            <Waveform size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size={ isPageWide ? '8' : '6' }>Use cases</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'left', paddingLeft: 0 }}>
                <Text size='4' color="gray">Outbound calling helps businesses proactively reach customers, nurture leads, and drive growth through personalized conversations at scale - without the overhead of a traditional call center.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          {/* <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Users size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Lead Nurturing</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Build relationships with potential customers through personalized follow-ups and engagement calls to move them through your sales pipeline.
              </Text>
            </Card>
          </Col> */}
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Heart size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Membership Drives</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Reach out to potential members with compelling membership offers and benefits to grow your organization's community.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Chat size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Feedback Collection</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Gather valuable insights from customers and stakeholders through automated feedback calls and satisfaction surveys.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Question size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Surveys</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Conduct market research and opinion polls efficiently through automated phone surveys with customized questions.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Headset size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Crisis Communication</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Quickly reach your entire contact list with important updates and emergency notifications when time is critical.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Calendar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Program Enrollment</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Guide potential participants through program registration and enrollment processes with automated assistance.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Check size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Promotions</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Share special offers and promotional campaigns with your customer base to drive sales and engagement.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <MapPin size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Event Invitations</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Personally invite guests to your upcoming events, conferences, or webinars while handling RSVPs automatically.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <MoneyWavy size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Fundraising Campaigns</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Connect with donors and supporters to raise funds for your cause while maintaining personal relationships at scale.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Microphone size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Advocacy</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Mobilize supporters for your cause through targeted outreach campaigns and action-oriented communications.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Briefcase size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Recruiting</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Streamline your hiring process by conducting initial candidate screenings and scheduling interviews automatically.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ChartBar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Polls</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Conduct large-scale phone surveys and gather feedback efficiently and cost-effectively in a tone and language that matches the callee.
              </Text>
            </Card>
          </Col>
        </Row>

        {/* Inbound calling */}
        {/* <Row ref={inboundRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'left' }}>
            <Text size='2' color="gray">Use case</Text>
            <Heading size={ isPageWide ? '8' : '6' }>Inbound calling</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'left', paddingLeft: 0 }}>
                <Text size='4' color="gray">Voxiply is a powerful tool for inbound calling campaigns. It allows you to automate your inbound calling campaigns, so you can focus on what you do best.</Text>
                <Text size='4' color="gray" as='div' style={{ marginTop: 20 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Personalized conversations</Text>
                <Text size='4' color="gray" as='div' style={{ marginTop: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Choose language and voice</Text>
                <Text size='4' color="gray" as='div' style={{ marginTop: 10 }}><Check size={14} weight="bold" style={{ marginBottom: 3, marginRight: 3 }} /> Predictive dialing</Text>
              </Col>
            </Row>
          </Col>
        </Row> */}

        {/* <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Chat size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Customer Support</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Handle common customer inquiries and support requests 24/7. Route complex issues to human agents when needed.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Calendar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Appointment Booking</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Let customers schedule, reschedule, or cancel appointments through automated phone interactions.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Heart size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Feedback Collection</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Gather customer feedback and satisfaction ratings through automated surveys and follow-up calls.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Question size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">FAQ & Information</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Answer frequently asked questions and provide information about products, services, or business hours.
              </Text>
            </Card>
          </Col>
        </Row> */}

        {/* Industries */}
        <Row ref={industriesRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'left' }}>
            <Waveform size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size={ isPageWide ? '8' : '6' }>Industries</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'left', paddingLeft: 0 }}>
                <Text size='4' color="gray">Voxiply serves diverse industries including non-profits for donor outreach, small businesses for customer service, government agencies for citizen services, market research firms for surveys, and real estate companies for property inquiries.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Heart size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Non-profits</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Streamline donor communications and volunteer coordination with automated calling solutions.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Buildings size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">SMBs</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Handle customer service and appointment scheduling efficiently without hiring additional staff.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Bank size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Government</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Improve citizen services with automated information delivery and service request handling.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <House size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Real Estate</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Automate property inquiries and schedule viewings without missing potential buyers.
              </Text>
            </Card>
          </Col>
          {/* <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <GameController size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Gaming</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Provide 24/7 player support and handle in-game purchases and account inquiries.
              </Text>
            </Card>
          </Col> */}
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <CurrencyDollar size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Financial Services</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Handle account inquiries and basic financial transactions with automated support.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Cloud size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">SaaS</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Provide technical support and handle subscription-related queries automatically.
              </Text>
            </Card>
          </Col>
        </Row>

        {/* Features */}
        <Row ref={featuresRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'left' }}>
            <Waveform size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
            <Heading size={ isPageWide ? '8' : '6' }>Features</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 10 }}>
              <Col xs={12} sm={10} md={6} lg={5} xl={4} style={{ textAlign: 'left', paddingLeft: 0 }}>
                <Text size='4' color="gray">Voxiply offers personalized AI conversations, custom brand voices, multi-language support, predictive dialing, and seamless CRM integrations - everything you need to automate and optimize your calling campaigns.</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 0, marginRight: 0, marginTop: 20 }}>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ChatCircle size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Personalized Conversation</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Natural, context-aware conversations that adapt to each caller's needs and preferences.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <SpeakerHigh size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Brand-Aligned Voice</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Customize voice, tone and personality to match your brand identity perfectly.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Globe size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Multi-Language Support</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Engage with customers in their preferred language for better communication.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Phone size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Predictive Dialing</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Optimize call efficiency with smart dialing algorithms and scheduling.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Plugs size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Seamless Integrations</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Connect with your existing tools and CRM systems for streamlined workflows.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ShieldCheck size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">DNC Management</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Automatic compliance with Do Not Call regulations and preferences.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ChartLine size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Quality Monitoring</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Real-time call quality assessment and performance analytics.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <ArrowsLeftRight size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Adaptive Routing</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Smart call routing based on availability, skills, and priority levels.
              </Text>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} style={{ padding: 10 }}>
            <Card style={{ padding: 20, height: '100%' }}>
              <Voicemail size={22} weight="regular" style={{ color: 'var(--accent-9)', marginBottom: 10 }} />
              <Heading size="4">Voicemail Detection</Heading>
              <Text size="2" color="gray" as="p" style={{ marginTop: 10 }}>
                Intelligent voicemail detection and automated message handling.
              </Text>
            </Card>
          </Col>
        </Row>

        {/* Integrations */}
        {/* <Row ref={industriesRef} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'left' }}>
            <Text size='2' color="gray">Use case</Text>
            <Heading size={ isPageWide ? '8' : '6' }>Integrations</Heading>
          </Col>
        </Row> */}

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
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voxiply-demo'}>
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
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voxiply-demo'}>
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
              <Button variant="solid" size="2" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voxiply-demo'}>
                Book a demo
              </Button>
            </Card>
          </Col>
        </Row> */}

        {/* <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 40 }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
            <Text size="2" color="gray" as="div">
              Need a custom deployment?<br />
              <Button variant="solid" size="2" style={{ marginTop: 20 }} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voxiply-demo'}>Let's talk</Button>
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
              <Heading size="4">What scenarios can Voxiply handle?</Heading>  
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                Voxiply can answer questions about your business, schedule appointments, and collect information from callers. Voxiply can be customized to handle custom workflows unique to your business needs.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">What tools does Voxiply integrate with?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                Voxiply integrates seamlessly with popular scheduling tools such as Cal.com, Calendly, and Acuity and can be customized to connect to with any other tools such as CRMs and EHRs.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">How does Voxiply handle phone calls?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                Voxiply uses advanced speech-to-text models and LLM-powered natural language processing to have human-like conversations with callers, understand the caller's intent, answer questions and perform actions.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">How long does it take to set up?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                Voxiply can be configured in 2-3 days for basic use cases but can take longer for custom workflows and integrations.
              </Text>
            </Card>

            <Card style={{ padding: 20, marginBottom: 20 }}>
              <Heading size="4">What happens if Voxiply can't handle a request?</Heading>
              <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>
                If Voxiply is experiencing a scenario that is not covered by it's set of instructions, it can be configured to record the customer's call and let the caller know you'll get back to them as soon as possible.
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
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: isPageWide ? 100 : 40, minHeight: '40vh' }}>
          <Col xs={12} sm={11} md={11} lg={10} xl={10} style={{ textAlign: 'center', maxWidth: 800 }}>
            <Heading size={ isPageWide ? '8' : '6' }>Ready to get started?</Heading>
            <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
              <Col xs={12} sm={11} md={10} lg={8} xl={8} style={{ textAlign: 'center' }}>
                <Text size="3" color="gray" as='div'>Stop losing revenue and customers to missed calls. Book a demo with us today to learn how Voxiply can start helping you today.</Text>
                <Button variant="solid" size="4" style={{ marginTop: 40 }} onClick={() => window.location.href = 'https://cal.com/amit-jardosh/voxiply-demo'}>
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