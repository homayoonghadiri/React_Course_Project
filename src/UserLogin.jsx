import { useState } from "react";

const UserLogin = () => {

    const [age, setAge] = useState(20);
    return (
        <>
            <h1>Login User</h1>
            <button onClick={() => setAge((prevAge => prevAge + 1))}>
                Change age
            </button>
            <ul>
                <li>Name: Homayoon</li>
                <li>Age: {age}</li>
                <li>Email: hmy@gmail.com</li>
            </ul>
        </>
    );

};

export default UserLogin;