import { useState } from "react";
import UserLogin from "../UserLogin/UserLogin";
import UserGuest from "../UserGuest/UserGuest";
import "./App.css";


const App = () => {
    
    const [isLogined, setLogin] = useState(false);

    return (
        <div className="app-container">
            <div className="header-box">
                <h2 className="logo"><span>R</span>React App 2026</h2>
                <button className="toggle-btn" onClick={() => setLogin(!isLogined)}>
                    {isLogined ? 'Logout' : 'Login'}
                </button>
            </div>
            
            <div className="info-box">
                {isLogined ? <UserLogin /> : <UserGuest />}
            </div>
        </div>
    );
};

export default App;