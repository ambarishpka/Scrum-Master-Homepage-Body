import React, { Component } from 'react'
import './sample.css'
// import svg from '../images/icon.svg'
import png from '../images/icon.png'

export default class Sample extends Component {
    render() {
        return (
            <div className="main">
                <div className="custom-card shadow-lg">
                    <div className="oval d-flex justify-content-center align-items-center">
                        <div className="font-weight-bold text-white"><img src={png} className="oval-image" alt="Dot" /></div>
                    </div>
                    <div className="custom-card-header">
                        Tasks
                    </div>
                    <div className="custom-card-body">
                        <div className="oval-3">
                            <div className="To-Do">
                                <span className="text-right text-black">1</span><span className="text-right text-black">0</span><span className="text-left"> To Do</span>
                            </div>
                            <div className="Progress">
                                <span className="text-right text-white">0</span><span className="text-right">2</span><span className="text-left"> In Progress</span>
                            </div>
                        </div>
                        <div className="oval-2-dot">
                            <div className="float-left">
                                <div className="oval-dot"></div>
                                <div className="oval-dot"></div>
                                <div className="oval-dot"></div>
                                <div className="oval-dot"></div>
                            </div>
                            <div className="float-right">
                                <div className="oval-dot"></div>
                                <div className="oval-dot"></div>
                                <div className="oval-dot"></div>
                                <div className="oval-dot"></div>
                            </div>

                        </div>
                    </div>
                    <div className="new-btn">
                        <button className="new-btn-label">
                            <span className="span-plus">+</span> New
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
