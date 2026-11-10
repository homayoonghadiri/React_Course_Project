import { useState, useRef } from "react";
import { Container, Button } from "react-bootstrap";

const App = () => {
    
    const [count, setCount] = useState(0);
    let countValue = useRef(0);

    const handleClick = () => {
        countValue.current += 2;
        setCount(countValue.current + 1);
    }
    
    return (
        <Container fluid className="vh-100 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: '#f6ecf6'}}>
            <div className="bg-primary-subtle text-center border border-primary rounded p-4">
                <div className="mb-5 fs-2">{count}</div>
                <Button className="bg-primary" onClick={handleClick}>Increase</Button>
            </div>
        </Container>
    );
    
};

export default App;