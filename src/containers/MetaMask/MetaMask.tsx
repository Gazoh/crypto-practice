import React, { useEffect, useState } from 'react';
import Button from '../../components/Utils/Button/Button';

import { connect } from 'react-redux';
import { getAccounts, connectWeb3 } from '../../helpers/web3';

interface Props {
    history: any
}

function MetaMask(props: Props) {
    const [address, setAddress] = useState('0x2de590b83F80323A81B2170ab169a408bC3E6c3b')
    const [privateKey, setPrivateKey] = useState('b7873f676b01bbb4f720d3bbcb27c43c153f3d1256d81f2e689636647c4edf64')
    const [receiver, setReceiver] = useState('0x959c9d7cA8EbC043C332A05A7CAaC3DB8c57c6fC')


    useEffect(() => {

    }, [])

    return (
        <div id='content-wrapper'>
            <Button className='button'>Send</Button>
        </div>
    );
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Function) => { return {}; }

export default connect(mapStateToProps, mapDispatchToProps)(MetaMask)
