import React, { Component } from 'react'
import "./Class.scss";
import Class12 from "../../Assets/12.jpg"
import Class11 from "../../Assets/11.jpg"
import Class10 from "../../Assets/10.jpg"
import Class9 from "../../Assets/9.jpg"
import Class8 from "../../Assets/8.jpg"
import Class7 from "../../Assets/7.jpg"
import Class6 from "../../Assets/6.jpg"
import Class5 from "../../Assets/5.jpg"
import Class4 from "../../Assets/4.jpg"
import Class3 from "../../Assets/3.jpg"
import Class2 from "../../Assets/2.jpg"
import Class1 from "../../Assets/1.jpg"
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export class Class extends Component {
    render() {
        return (
            <div>
                <Fade top>
                    <div className="center">
                        <h2 className="class__heading">Select Your Class</h2>
                    </div>
                </Fade>

                <Fade bottom cascade>
                    <div className="cards-list">

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={Class1} rel="" />
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={Class2} rel="" />
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={Class3} rel="" />
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={Class4} rel="" />
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={Class5} rel="" />
                                </div>

                            </div>
                        </Link>



                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={Class6} rel="" />
                                </div>

                            </div>
                        </Link>
                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={Class7} rel="" />
                                </div>

                            </div>
                        </Link>
                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={Class8} rel="" />
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={Class9} rel="" />
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={Class10} rel="" />
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={Class11} rel="" />
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "20px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={Class12} rel="" />
                                </div>

                            </div>
                        </Link>

                    </div>
                </Fade>

                <footer className="footer_text">&lt;/&gt; with <img alt="love" className="footer_icon" src="https://img.icons8.com/cotton/20/000000/like--v1.png" /> and &nbsp;<img alt="React Js" id="React-logo-footer" src="https://img.icons8.com/officel/20/000000/react.png" /> by Team Hack Elite</footer>

            </div>
        )
    }
}

export default Class
