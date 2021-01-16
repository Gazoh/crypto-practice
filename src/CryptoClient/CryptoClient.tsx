import React  from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home/Home';
import MetaMask from '../containers/MetaMask/MetaMask';
import './CryptoClient.scss';

interface Props { }

function CryptoClient(props: Props) {

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact strict render={(props) => <Home {...props} key='home' />} />
                <Route path="/metamask" render={(props) => <MetaMask {...props} key='metamask' />} />
            </Switch>
        </div>
    )
}

export default CryptoClient