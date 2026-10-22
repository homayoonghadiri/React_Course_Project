import { useState } from "react";
import User from "./User";
import ChildComponent from "./ChildComponent";


const App = () => {

    const [text, setText] = useState('Hello');
    const changeText1 = () => {
        setText('Mr Mostofi');
        console.log(text);
    }
    const changeText2 = () => {
        setText('Miss Rostami');
    }

    return (
        <>
            <User id="5112" fullName="Ahmad Bagheri" email="ahmad@gmail.com" phone="09124567921" city="Tehran" address="Tajrish, No.28" />
            <User id="5113" fullName="Farhad Rahimi" email="farhad@outlook.com" phone="09359050995" city="Shiraz" address="Hafez street, No.99" />

            <button onClick={changeText1}>Click me</button>
            <button onClick={changeText2}>Click me</button>
            <ChildComponent text={text} />
        </>
    );

};

export default App;