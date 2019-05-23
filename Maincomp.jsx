import React, { Component } from 'react'
import Dialog, { showDialog } from './Dialog';

export default class Maincomp extends Component {
   constructor(props) {
       super(props);
       this.state = {
           setModalBody: null,
           setTitle: null
       }
   }

    callDialog(){
        const msgBody = <div>msg from modal</div>
        const msgTitle = <div>I'm Title</div>
        this.setState({ setModalBody: msgBody, setTitle: msgTitle })
        showDialog()
    }

    render() {
        return (
            <div>
                <button onClick={e => this.callDialog()}>Show</button>
                <Dialog modalBody={this.state.setModalBody} modalTitle={this.state.setTitle} />
            </div>
        )
    }

}