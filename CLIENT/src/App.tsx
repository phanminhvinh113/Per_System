import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterDefault from './routes/default.routes';
//
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <RouterDefault />
        </BrowserRouter>
    );
};
//
export default App;
