import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


class Navigation extends React.Component {
    render() {
       return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Qjiji - Queen's Textbook Marketplace</Navbar.Brand>
            </Navbar>
       );
    }
 }

 export default Navigation;