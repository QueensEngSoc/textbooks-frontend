import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Home extends React.Component {
    render() {
       return (
            <Container className='m-5'>
                <Row>
                    Welcome to the Qjiji web application, a marketplace for students to buy, sell and exchange textbooks!
                </Row>
            </Container>
       );
    }
 }

 export default Home;