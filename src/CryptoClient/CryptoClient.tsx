import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../containers/Home/Home';
import MetaMask from '../containers/MetaMask/MetaMask';
import History from '../helpers/History';
import './CryptoClient.scss';

interface Props { }

function CryptoClient(props: Props) {

    useEffect(() => {
        console.log('props.history', History.location)
    }, [])

    return (
        <div className="App">
            <Switch>
                {/* <Redirect strict exact from="/" to="/home" /> */}
                <Route path="/" exact strict render={(props) => <Home {...props} key='home' />} />
                <Route path="/metamask" render={(props) => <MetaMask {...props} key='metamask' />} />
            </Switch>
        </div>
    )
}

export default CryptoClient