import * as React from 'react';


// if a module defines a default export,
// then you can import that default export by omitting the curly braces
// import FirstComponent from './components/FirstComponent'

export default class FirstComponent extends React.Component<{}> {

    public render() {
        return(
            <div className="centerText">
                {/*React components must have a wrapper node/element*/}
                <h1>This is First Component</h1>
            </div>
        );
    };
};