import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

import React from 'react'

const Header = () => (
    <Navbar bg='light'>
        <Navbar.Brand>Cinemagic</Navbar.Brand>
        <Navbar.Collapse>
            <Nav className='mr-auto'>
                <Nav.Link>Favorites</Nav.Link>
                <Nav.Link>90s</Nav.Link>
                <Nav.Link>80s</Nav.Link>
                <Nav.Link>70s</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type='text' placeholder='Search' />
                <Button>Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)

export default Header