import React, { Component } from 'react'
import './toolsbox.css'
import toolspng from '../images/tools.png'

export default class Toolsbox extends Component {
    render() {
        return (
            <div className="tools-box-main">
                <div className="tools-box shadow-lg">
                    <div className="oval-tools d-flex justify-content-center align-items-center">
                        <div className="font-weight-bold text-white"><img src={toolspng} className="oval-tools-image" alt="Dot" /></div>
                    </div>
                    <div className="tools-box-header">
                        Tools
                    </div>
                    <div className="tools-box-body">
                        <div className="project-tool">Project Tool</div>
                    </div>
                </div>
            </div>
        )
    }
}
