import React, { Component } from 'react'
import "./Class.scss";
import ClassImg from "../../Assets/Classroom.jpg"
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
                                    <img alt="ClassImg" src={ClassImg} rel="" />
                                </div>
                                <div className="card-title title-black">
                                    <p>Class 1</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={ClassImg} rel="" />
                                </div>
                                <div className="card-title title-black">
                                    <p>Class 2</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={ClassImg} rel="" />
                                </div>
                                <div className="card-title title-black">
                                    <p>Class 3</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={ClassImg} rel="" />
                                </div>
                                <div className="card-title title-black">
                                    <p>Class 4</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={ClassImg} rel="" />
                                </div>
                                <div className="card-title title-black">
                                    <p>Class 5</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={ClassImg} rel="" />
                                </div>
                                <div className="card-title title-black">
                                    <p>Class 6</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={ClassImg} rel="" />
                                </div>
                                <div className="card-title title-black">
                                    <p>Class 7</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={ClassImg} rel="" />
                                </div>
                                <div className="card-title title-black">
                                    <p>Class 8</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={ClassImg} rel="" />
                                </div>
                                <div className="card-title title-black">
                                    <p>Class 9</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={ClassImg} rel="" />
                                </div>
                                <div className="card-title title-black">
                                    <p>Class 10</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={ClassImg} rel="" />
                                </div>
                                <div className="card-title title-black">
                                    <p>Class 11</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    <img alt="ClassImg" src={ClassImg} rel="" />
                                </div>
                                <div className="card-title title-black">
                                    <p>Class 12</p>
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