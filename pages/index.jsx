import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import { 
  Navbar, 
  Nav,
  Col,
  Row
} from 'react-bootstrap'
import landingImg from '../public/student.png'
import LoginPopup from '../components/LoginPopup'

export default function Home() {

  const [showLoginPopup, setShowLoginPopup] = useState(false)

  return (
    <div className={styles.home}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bg="light" expand="lg" className={styles.navBar}>
          <Navbar.Brand className={styles.logo}>exaam</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className={styles.login} onClick={() => setShowLoginPopup(true)}>Login/Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      <main>
        <Row>
          <Col className={styles.landingText}>
            <h1>Welcome to <span>exaam</span></h1>
            <p>Take and correct exams quickly.</p>
            <button onClick={() => setShowLoginPopup(true)}>Get Started</button>
          </Col>
          <Col>
            <Image 
              src={landingImg}
              className={styles.landingImg}
            />
          </Col>
        </Row>
      </main>
      {showLoginPopup && 
        <LoginPopup />
      }
    </div>
  )
}