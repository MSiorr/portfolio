import React, { Component } from 'react';

import javascriptImg from "../../gfx/technologies/javascript-svgrepo-com.svg";
import typescriptImg from "../../gfx/technologies/typescript-logo-svgrepo-com.svg";
import htmlImg from "../../gfx/technologies/html-5-logo-svgrepo-com.svg";
import cssImg from "../../gfx/technologies/css-3-logo-svgrepo-com.svg";
import reactImg from "../../gfx/technologies/react-svgrepo-com.svg";
import nodejsImg from "../../gfx/technologies/node-js-svgrepo-com.svg";
import expressImg from "../../gfx/technologies/express-svgrepo-com.svg";
import pythonImg from "../../gfx/technologies/python-svgrepo-com.svg";
import unityImg from "../../gfx/technologies/unity.svg";

interface IimgSrc {
    [id: string]: string
}
const imgSrc: IimgSrc = {
    "JavaScript": javascriptImg,
    "TypeScript": typescriptImg,
    "HTML": htmlImg,
    "CSS": cssImg,
    "React": reactImg,
    "React Native": reactImg,
    "Node.JS": nodejsImg,
    "Express": expressImg,
    "Python": pythonImg,
    "Unity": unityImg
}

interface technologyProps {
    name: string,
    swap: boolean,
    info: string[]
}

class TechnologyBox extends Component<technologyProps> {
    render() {
        return (
            <div className='technologyBox'>
                {this.props.swap ?
                    <>
                        <div className="techInfo">
                            <img src={imgSrc[this.props.name]} alt="technologyImg" />
                            <p>{this.props.name}</p>
                        </div>
                    </>
                    : null
                }

                <div className="techData">
                    <ul>
                        {this.props.info.map((e, i) => <li key={`${this.props.name}_${i}`}>{e}</li>)}
                    </ul>
                </div>

                {this.props.swap ? null :
                    <>
                        <div className="techInfo">
                            <img src={imgSrc[this.props.name]} alt="technologyImg" />
                            <p>{this.props.name}</p>
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default TechnologyBox;