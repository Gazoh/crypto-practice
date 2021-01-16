import React from 'react';
import Button from '../../components/Utils/Button/Button';

import { connect } from 'react-redux';

interface Props {
    history: any
}

function Home(props: Props) {

    return (
        <div id='content-wrapper'>
            <Button className='button' onClick={() => props.history.push('/metamask')}>Metamask</Button>
        </div>
    );
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Function) => { return {}; }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
