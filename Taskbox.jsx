import React, { Component } from 'react'

export default class Taskbox extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center main"> 
                <div className="task-card">
                    <div className="Rectagle-6">
                           <div className="Tasks">
                               <div>Tasks</div>
                           </div>
                           <div className="">

                           </div>
                    </div>
                    <div className="Mask">
                        <div className="icon">

                        </div>
                    </div>
                    {/* <div className="Oval-3">
                        <div className="-To-Do">10 To Do</div>
                        <div className="-In-Progress">2 in progress</div>
                    </div> */}
                    <div className="Rectangle-4">
                        <div className="-New">New</div>
                    </div>
                </div>
            </div>
        )
    }
}
