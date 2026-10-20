import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

const App = () => {

    // const variable_1 = 10;

    return (

    <>
        {/* <div>Hello my friend</div>
        <div>
            <div className='section_1'>
                <span style={
                    {
                        backgroundColor: 'red',
                        fontSize: '20px',
                        color: '#fff',
                        padding: 10, // px
                        margin: '120px',
                        cursor: 'pointer'
                    }
                }>Button span</span>
                <span>{variable_1}</span>
            </div>


            <div className='section_2'>
                <p>Hello my friend</p>
                <img src="" alt="" />
                <input type="text" />
            </div>
        </div> */}
        
        <FunctionalComponent />
        <ClassComponent />
    </>


    );

};

export default App;