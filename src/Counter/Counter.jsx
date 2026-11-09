import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Counter = () => {
    
    const [count, setCount] = useState(0);
    const [notification, setNotification] = useState(null);

    const updateCount = (operation) => {
        const newCount = operation === 'increase' ? count + 1 : Math.max(0, count - 1);

        setCount(newCount);

        if (newCount % 10 === 0 && newCount !== 0) {
            setNotification(`congratulations! You reached ${newCount}.`);
        }

        return;
    }

    const resetCount = () => {
        setCount(0);
        setNotification(null);
    }

    useEffect(() => {
        if (!notification) return;

        const timer = setTimeout(() => setNotification(null), 3000);

        return () => {
            clearTimeout(timer);
            console.log('remove timer');
        };
    }, [notification]);

    return (
        <Container fluid style={{height: '100vh', background: 'linear-gradient(34deg,rgba(161, 255, 255, 1) 0%, rgba(163, 194, 255, 1) 90%)'}}>
            <Row className="justify-content-center align-items-center min-vh-100 d-flex flex-column">
                <Col xs={12} md={6} lg={4} className="text-center border border-primary rounded-4 p-4">
                    <h1 className="text-primary">Smart Counter</h1>
                    <p className="mb-4">
                        <span className="fs-1 d-block">{count}</span>
                        {count !== 0 && (
                            <Badge bg="dark" className="d-inline-block">{count % 2 === 0 ? 'Even' : 'Odd'}</Badge>
                        )}
                    </p>
                    
                    <Button variant="outline-danger" className='w-50' onClick={() => updateCount('decrease')}>-</Button>
                    <Button variant="outline-success" className='w-50' onClick={() => updateCount('increase')}>+</Button>
                    <Button variant="info" className='w-100 mt-2' onClick={resetCount}>Reset</Button>
                </Col>
                <Col xs={12} md={6} lg={4} className="text-center">
                    {notification && (
                        <Alert key={'info'} variant={'info'} className="mt-4">
                            {notification}
                        </Alert>
                    )}
                </Col>
            </Row>
            {/* <Row className="justify-content-center align-items-center vh-20">
                
            </Row> */}
        </Container>
    );

}

export default Counter;