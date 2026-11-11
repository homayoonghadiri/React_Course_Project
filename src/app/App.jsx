import { useState, useRef, useEffect } from "react";
import { Container, Button, Alert } from "react-bootstrap";

const App = () => {
    
    const [inputValue, setInputVlaue] = useState('');
    const inputRef = useRef(null);

    useEffect (() => {
        inputRef.current.focus();
    }, []);

    
    return (
        <Container fluid className="vh-100 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: '#f6ecf6'}}>
            <div className="bg-primary-subtle text-center border border-primary rounded-4 p-5">
                <h1 className="fs-3">Entry Form</h1>
                <input ref={inputRef} type="text" placeholder="Enter your text..." className="form-control border-info rounded text-secondary fs-5 px-2 py-1" onChange={(e) => setInputVlaue(e.target.value)} />
                {inputValue && (
                    <Alert className="mt-3">Entered Text: <span className="text-success">{inputValue}</span></Alert>
                )}
                <div className="mt-4">
                    <Button className="bg-danger border-danger me-2" onClick={() => {
                        setInputVlaue('');
                        inputRef.current.value = '';
                    }}>Clear</Button>
                    <Button className="bg-success border-success">Send</Button>
                </div>
            </div>
        </Container>
    );
    
};

export default App;