import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Utils/Button/Button';

interface Props {
    history: any
}

function MetaMask(props: Props) {

    return (
        <div id='content-wrapper'>
            <Button className='button'>Kaas</Button>
        </div>
    );
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Function) => { return {}; }

export default connect(mapStateToProps, mapDispatchToProps)(MetaMask)
