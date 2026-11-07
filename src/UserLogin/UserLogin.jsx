import { useState, useEffect, useRef } from "react";
import styles from "./UserLogin.module.css";
import { Modal, Button } from 'react-bootstrap';

const UserLogin = () => {
    
    const [age, setAge] = useState(20);
    const [email, setEmail] = useState('h02ghadiri@gmail.com');
    const [newEmail, setNewEmail] = useState('');
    const [show, setShow] = useState(false);
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
        const accountAge = document.getElementById('accountAge');
        
        if (age === 35) {
            console.log('*** My age is 35 ***');
            accountAge.innerHTML = `You are ${age} years old.`;
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
            <button className={styles['btn-change']} onClick={() => {
                    setAge(prevAge => {
                        const newAge = prevAge + 1;
                        if (newAge === 35) {
                            setShow(true);
                        }

                        return newAge;
                    })
                }
            }>
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

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title style={{color: 'var(--icyDark-color)'}}>User Age</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p id="accountAge">** Your Age **</p>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="primary" onClick={() => setShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

};

export default UserLogin;