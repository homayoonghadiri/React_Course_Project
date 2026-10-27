import { useState } from "react";
import User from "./User";

const App = () => {
    
    const initialUsers = [
        { id: 5112, fullName: "Ahmad Bagheri", email: "ahmad@gmail.com", phone: 9124567921, city: "Tehran", address: "Tajrish, No.28" },
        { id: 5113, fullName: "Farhad Rahimi", email: "farhad@outlook.com", phone: 9359050995, city: "Shiraz", address: "Hafez street, No.99" },
        { id: 5114, fullName: "Sina Soheili", email: "sina@yahoo.com", phone: 9386525200, city: "Tabriz", address: "Azadi street, No.10" },
        { id: 5115, fullName: "Mina Moslemi", email: "mina@gmail.com", phone: 9223399529, city: "Esfahan", address: "Dastgerdi street, No.1" },
        { id: 5116, fullName: "Sahar Ahmadpoor", email: "sahar@hotmail.com", phone: 9195160040, city: "Abadan", address: "Toghrol street, No.125" }
    ];

    const [users, setUsers] = useState(initialUsers);
    const [search, setSearch] = useState("");

    // function deleteUser(id) {
    //     setUsers(users.filter(user => user.id !== id));
    // }

    // functional update / updater function
    function deleteUser(id) {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    }

    const filteredUsers = users.filter(
        user =>
        user.fullName.toLowerCase().includes(search.toLowerCase())
        ||
        user.email.toLowerCase().includes(search.toLowerCase())
        ||
        String(user.phone).includes(search)
        ||
        user.city.toLowerCase().includes(search.toLowerCase())
        ||
        user.address.toLowerCase().includes(search.toLowerCase())
    );

    return (     
        <>
            <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
            {
                filteredUsers.map((user) => (
                        <User key={user.id} {...user} handleDelete={deleteUser} />
                ))
            }
        </>
    );
};

export default App;