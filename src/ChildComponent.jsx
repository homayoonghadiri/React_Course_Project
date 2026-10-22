const ChildComponent = ({text}) => {

    console.log('child component...');
    

    return (
        <p className="txt">{text}</p>
    );

};

export default ChildComponent;


// ChildComponent.propTypes = {
//     text: propTypes.string.isRequired
// };