import { useState } from "react";
import User from "./User";

const App = () => {
    
    const [users, setUsers] = useState([
        { id: 5112, fullName: "Ahmad Bagheri", email: "ahmad@gmail.com", phone: 9124567921, city: "Tehran", address: "Tajrish, No.28" },
        { id: 5113, fullName: "Farhad Rahimi", email: "farhad@outlook.com", phone: 9359050995, city: "Shiraz", address: "Hafez street, No.99" },
        { id: 5114, fullName: "Sina Soheili", email: "Sina@yahoo.com", phone: 9386525200, city: "Tabriz", address: "Azadi street, No.10" },
        { id: 5115, fullName: "Mina Moslemi", email: "Mina@gmail.com", phone: 9223399529, city: "Esfahan", address: "Dastgerdi street, No.1" },
        { id: 5116, fullName: "Sahar Ahmadpoor", email: "Sahar@hotmail.com", phone: 9195160040, city: "Abadan", address: "Toghrol street, No.125" }
    ]);

    function deleteUser(id) {
        setUsers(users.filter(user => user.id !== id));
    }

    return (
        <>
            {
                users.map((user) => (
                    <User key={user.id} id={user.id} fullName={user.fullName} email={user.email} phone={user.phone} city={user.city} address={user.address} handleDelete={deleteUser}  />
                ))
            }
        </>
    );
};

export default App;