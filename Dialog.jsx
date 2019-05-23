import React, { Component } from 'react'
export default class Dialog extends Component {

    render() {
        return (

            <div>
                <button type="button" id="modalBtn" class="d-none btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{this.props.modalTitle}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                {this.props.modalBody}
                        </div>
                            <div class="modal-footer">
                                <button type="button" class="btn" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const showDialog = () => {
    const modalRef = document.getElementById("modalBtn")
    modalRef.click()
}

export { showDialog }