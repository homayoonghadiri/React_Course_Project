import { useState } from "react";
// import UserLogin from "./UserLogin";
// import UserGuest from "./UserGuest";
import ClassComponent from "./ClassComponent";

const App = () => {
    
    // const [isLogined, setLogin] = useState(false);

    const [show, setShow] = useState(true);

    return (
        <>
            {/* <button onClick={() => setLogin(!isLogined)}>
                {isLogined ? 'Logout' : 'Login'}
            </button>
            
            {isLogined ? <UserLogin /> : <UserGuest />} */}

            <br /><br /><br />
            {show && <ClassComponent name='Products inventory' onDelete={() => setShow(false)} />}
        </>
    );

};

export default App;