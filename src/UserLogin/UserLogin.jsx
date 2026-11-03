import { useState, useEffect, useRef } from "react";
import styles from "./UserLogin.module.css";

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
            <h1 className={styles['title-login']}>Login User</h1>
            <button className={styles['btn-change']} onClick={() => setAge(prevAge => prevAge + 1)}>
                Change Age
            </button>
            <br />
            <button id="btnChangeEmail" className={styles['btn-change']} onClick={changeEmail}>Change Email</button>
            <input className={styles.email} type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
            <ul className={styles['list-info']}>
                <li className={styles['list-info-item']}>Name: Homayoon</li>
                <li className={styles['list-info-item']}>Age: <span>{age}</span></li>
                <li className={styles['list-info-item']}>Email: <span>{email}</span></li>
            </ul>
        </>
    );

};

export default UserLogin;