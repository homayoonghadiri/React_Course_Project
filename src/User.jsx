const User = ({id, fullName, email, phone, address, city, handleDelete}) => {

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
               <li style={{'listStyle': 'none', 'marginTop': 5}}>
                    <button className="btn-del" onClick={() => handleDelete(id)}>Delete</button>
               </li>
            </ul>
        </div>
    );

};

export default User;