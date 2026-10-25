const User = ({id, fullName, email, phone, address, city}) => {

    return (
        <div className="user-info">
            {/* <h2>User {id} Information</h2> */}
            <ul>
               <li><strong>ID: </strong>{id}</li>
               <li><strong>Full Name: </strong>{fullName}</li>
               <li><strong>Email: </strong>{email}</li>
               <li><strong>Phone Number: </strong>{phone}</li>
               <li><strong>City: </strong>{city}</li> 
               <li><strong>Address: </strong>{address}</li>
            </ul>
        </div>
    );

};

export default User;