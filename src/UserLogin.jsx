import { useState, useEffect, useRef } from "react";

const UserLogin = () => {
    
    const [age, setAge] = useState(20);
    const [email, setEmail] = useState('h02ghadiri@gmail.com');
    const [newEmail, setNewEmail] = useState('');
    let isFirstRender = useRef(true);

    function changeEmail() {
        if(newEmail.trim() !== ''){
            setEmail(newEmail);
            setNewEmail('');
        }
    }
    
    useEffect(() => {
        // mount
        console.log('Send a request to the server');

        const handleClick = () => {
            console.log('My name is Homayoon');
        }
        const name = document.getElementsByTagName('li')[0];
        name?.addEventListener('click', handleClick);

        return () => {
            // unmount
            console.log('Hope to meet you');
            name?.removeEventListener('click', handleClick);
        }
    }, [])

    useEffect(() => {
        if (age === 34) {
            console.log('*** My age is 34 ***');
        }
    }, [age])

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        console.log(`New email: ${email}`);
    }, [email])



    return (
        <>
            <h1>Login User</h1>
            <button onClick={() => setAge(prevAge => prevAge + 1)}>
                Change age
            </button>
            <br /><br />
            <button id="btnChangeEmail" onClick={changeEmail}>Change email</button>
            <input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
            <ul>
                <li>Name: Homayoon</li>
                <li>Age: {age}</li>
                <li>Email: {email}</li>
            </ul>
        </>
    );

};

export default UserLogin;