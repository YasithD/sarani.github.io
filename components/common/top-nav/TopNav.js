import * as React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Image from 'next-image-export-optimizer';

import Search from '../search/Search';
import { prefix } from '../../../utils/prefix';
import styles from './TopNav.module.css';

const pages = ['Download', 'Playground', 'Learn', 'Central', 'Community', 'Blog'];

const TopNav = (props) => {
  const launcher = props.launcher;
  
  if(global.location.pathname.indexOf('learn') > 0) {
    launcher = launcher + '-learn';
  }  

  return (
    <>
      <Navbar className={styles[launcher]} expand="lg" fixed='top'>
        <Container fluid>
          <Navbar.Brand href={`${prefix}/`}>
            {(launcher !== "home") ? 
              <Image src={`${prefix}/images/ballerina-logo.svg`} height={28} width={150} alt="Ballerina Logo"/> 
              : null
            }
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          {/* <Nav
              className="topNav ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            > */}
            <Nav
              className={`${styles.topNav} ms-auto my-2 my-lg-0`}
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className={(launcher === 'downloads')? `${styles.active} ${styles.navItem}` : `${styles.navItem}`} href={`${prefix}/downloads`}>Download</Nav.Link>
              <Nav.Link className={styles.navItem} href="https://play.ballerina.io/">Playground</Nav.Link>
              <Nav.Link className={(launcher === 'docs-learn')? `${styles.active} ${styles.navItem}` : `${styles.navItem}`} href={`${prefix}/learn`}>Learn</Nav.Link>
              <Nav.Link className={styles.navItem} href="https://central.ballerina.io/">Central</Nav.Link>
              <Nav.Link className={(launcher === 'community')? `${styles.active} ${styles.navItem}` : `${styles.navItem}`} href={`${prefix}/community`}>Community</Nav.Link>
              <Nav.Link className={styles.navItem} href="https://blog.ballerina.io/">Blog</Nav.Link>
              <NavDropdown title="Swan Lake" id={styles.navbarScrollingDropdown}>
                <NavDropdown.Item href={`${prefix}/learn/`}>Swan-Lake</NavDropdown.Item>
                <NavDropdown.Item href={`${prefix}/1.2/learn/`}>V 1.2</NavDropdown.Item>
                <NavDropdown.Item href={`${prefix}/1.1/learn/`}>V 1.1</NavDropdown.Item>
                <NavDropdown.Item href={`${prefix}/1.0/learn/`}>V 1.0</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Search/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  );
};
export default TopNav;
