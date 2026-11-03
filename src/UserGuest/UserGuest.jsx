import "./UserGuest.css";

const UserGuest = () => {

    return (
        <div>
            <h1 className="title-guest">Guest User</h1>
            <p className="subtitle-guest">Please login to see your information <span>{'=>'}</span></p>
        </div>
    );

};

export default UserGuest;