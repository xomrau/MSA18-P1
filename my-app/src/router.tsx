import * as React from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import App from './App';
import {Header} from './components/Header';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import './css/styles.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <main>
                    <Route exact={true} path="/" component={App} />
                </main>
            </div>
        </BrowserRouter>
    )
};


