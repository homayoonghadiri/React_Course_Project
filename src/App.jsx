import { useState } from "react";
import UserLogin from "./UserLogin";
import UserGuest from "./UserGuest";

const App = () => {
    
    const [isLogined, setLogin] = useState(false);

    return (
        <>
            <button onClick={() => setLogin(!isLogined)}>
                {isLogined ? 'Logout' : 'Login'}
            </button>
            
            {isLogined ? <UserLogin /> : <UserGuest />}
        </>
    );
};

export default App;