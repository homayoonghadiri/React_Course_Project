import { /*useState*/ useEffect, useReducer } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "./App.css";

const initialState = {
    loading: true,
    data: null,
    error: null
};

const dataReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {loading: true, data: null, error: null};
        case 'FETCH_SUCCESS':
            return {loading: false, data: action.payload, error: null};
        case 'FETCH_ERROR':
            return {loading: false, data: null, error: action.payload};
        default:
            return state;
    }
};

const App = () => {
    
    // const [loading, setLoading] = useState(true);
    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);

    // useEffect (() => {
    //     setLoading(true);
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data);
    //         setLoading(false);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         setError('Error in receiving data');
    //         setLoading(false);
    //     });
    // }, []);

    const [state, dispatch] = useReducer(dataReducer, initialState);

    useEffect (() => {
        dispatch({type: 'FETCH_START'});

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => dispatch({type: 'FETCH_SUCCESS', payload: data})
            .catch(() => dispatch({type: 'FETCH_ERROR', payload: 'Error in receiving data'}))
        );
    }, []);
  


    if (state.loading) return (
        <Container fluid className="min-vh-100 bg-body-tertiary text-center d-flex flex-column align-items-center justify-content-center gap-3">
            <img src="../../public/12-dots-scale-rotate.svg" width="100px" height="100px" alt="" />
            <p className="loading-text text-primary ms-3"><strong>Loading...</strong></p>
        </Container>
    );

    if (state.error) return (
        <Container fluid className="min-vh-100 bg-danger-subtle text-center d-flex align-items-center justify-content-center">
            <Alert className="bg-body border-danger shadow">
                <div>
                    <svg fill="rgb(220,53,69)" width="40px" height="40px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-info"><path d='M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-10a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'/></svg>
                </div>
                <p className="text-danger mb-0 mt-3"><strong>{state.error}</strong></p>
            </Alert>
        </Container>
    );

    if (state.data) return (
        <Container fluid className="min-vh-100 bg-body-tertiary text-center">
            <h1 className="fs-1 pt-5">Users List</h1>
            <Row className="w-100 g-3 p-5">
                {state.data.map((user) =>
                    <Col lg={3} md={6} xs={12} key={user.id}>
                        <div className="bg-body shadow-sm rounded-4">
                            <div className="bg-primary rounded-top-4 py-2 text-light">
                                <h2 className="fs-4">{user.name}</h2>
                                <p>@{user.username}</p>
                            </div>
                            <ul className="list-unstyled text-start d-flex flex-column gap-1 px-4 py-3">
                                <li className="d-flex align-items-center">
                                    <span className="me-2">
                                        <svg fill="#000000" width="21px" height="21px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <path class="clr-i-outline clr-i-outline-path-1" d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0L32,9.21v17.5l-7.36-7.36-1.41,1.41ZM5.31,8H30.38L17.84,20.47Z"></path>
                                        </svg>
                                    </span> 
                                    <span className="mt-1" style={{fontSize: 15}}>{user.email}</span>
                                </li>

                                <li className="d-flex align-items-center">
                                    <span className="me-2">
                                        <svg width="18px" height="18px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.71922 0.5H2.5C1.39543 0.5 0.5 1.39543 0.5 2.5V4.5C0.5 10.0228 4.97715 14.5 10.5 14.5H12.5C13.6046 14.5 14.5 13.6046 14.5 12.5V11.118C14.5 10.7393 14.286 10.393 13.9472 10.2236L11.5313 9.01564C10.987 8.74349 10.3278 9.01652 10.1354 9.59384L9.83762 10.4871C9.64474 11.0658 9.05118 11.4102 8.45309 11.2906C6.05929 10.8119 4.18814 8.94071 3.70938 6.54691C3.58976 5.94882 3.93422 5.35526 4.51286 5.16238L5.62149 4.79284C6.11721 4.6276 6.40214 4.10855 6.2754 3.60162L5.68937 1.25746C5.57807 0.812297 5.17809 0.5 4.71922 0.5Z" stroke="#000000"/>
                                        </svg>
                                    </span>
                                    <span className="mt-1" style={{fontSize: 15}}>{user.phone}</span>
                                </li>

                                 <li className="d-flex align-items-center">
                                    <span className="me-2">
                                        <svg width="21px" height="21px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000"fill="none">
                                             <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/><path d="M37.86,51.1A47,47,0,0,1,32,56.7"/>
                                             <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/>
                                            <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/><line x1="32" y1="6.99" x2="32" y2="56.7"/><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/>
                                            <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/>
                                            <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/>
                                        </svg>
                                    </span> 
                                    <a href="#" className="mt-1 text-decoration-none" style={{fontSize: 15}}>{user.website}</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );

    return <p>No data available</p>;
    
};

export default App;