import {
    Button,
    FormControl,
    Navbar,
    Form as _Form,
    Nav as _Nav
} from 'react-bootstrap'

import React from 'react'
import { Link as _Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => (
    <Navbar bg='light' expand='lg' fixed='bottom'>
        <Navbar.Brand><Link to='/'>Cinemagic</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
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
const Nav = styled(_Nav)`
    text-align: center;
`

const Form = styled(_Form)`
    flex-direction: column;
    justify-content: center;
`
export default Header