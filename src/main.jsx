import { createRoot } from 'react-dom/client'

const variable_1 = 'v1';

createRoot(document.getElementById('root')).render(
    <div>
        <div className='section_1'>
            <span style={
                {
                    backgroundColor: 'red',
                    fontSize: '20px',
                    color: '#fff',
                    padding: 10, // px
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
    </div>
);