const ChildComponent = ({text, children}) => {

    console.log('child component...');
    

    return (
        <>
            <p className="txt">{text}</p>
            <div id="children-props">{children}</div>
        </>
        
    );

};

export default ChildComponent;


// ChildComponent.propTypes = {
//     text: propTypes.string.isRequired
// };