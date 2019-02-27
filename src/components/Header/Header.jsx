import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

import React from 'react'
import { Link as _Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => (
    <Navbar bg='light'>
        <Navbar.Brand><Link to='/'>Cinemagic</Link></Navbar.Brand>
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

const Link = styled(_Link)`
    color: black;

    &:hover {
        text-decoration: none;
    }
`

export default Header