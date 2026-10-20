const FunctionalComponent = () => {

    // const value = prompt("1 or 2");

    // return value === '1' ? 'سلام خوش اومدی' : 'خدافظ خوش گلدی';

    // -------------------------------------

    const area = (houseWidth, houseHeight) => {
        return houseWidth * houseHeight;
    }

    return (
        <>
            <div style={{ direction: 'rtl', textAlign: 'right' }}>
                <p>سلام کاربر عزیز،</p>
                <p>مساحت خانه شما <span style={{color: 'red'}}>{ area(150, 200) }</span> متر است.</p>
            </div>
        </>
    )
    
    
};

export default FunctionalComponent;