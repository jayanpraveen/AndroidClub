import react from 'react'
import * as RB from 'react-bootstrap'

const Navbar =()=>{ return ( <div> 
<RB.Navbar collapseOnSelect expand="lg" fixed="top" >
  <RB.Navbar.Brand href="#home">Android Club </RB.Navbar.Brand>
  <RB.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <RB.Navbar.Collapse id="responsive-navbar-nav">
    <RB.Nav className="mr-auto">
      <RB.Nav.Link href="#">Events </RB.Nav.Link>
      <RB.Nav.Link href="#">Team </RB.Nav.Link>
    </RB.Nav>
    <RB.Nav>
      <RB.Nav.Link href="#">Contact</RB.Nav.Link>
      <RB.Nav.Link eventKey={2} href="#">
        Event REGISTER
      </RB.Nav.Link>
    </RB.Nav>
  </RB.Navbar.Collapse>
</RB.Navbar>
  </div>
  );
}

export default Navbar;