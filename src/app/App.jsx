import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Counter from "../Counter/Counter";


const App = () => {

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
            >
            <Counter />
        </ThemeProvider>
        
    );
    
};

export default App;