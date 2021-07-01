import React from 'react'
import "./Home.scss"
import EduARHome from "../../Assets/Eduar.png"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

export default function Home() {

    return (
        <div>

            <Flip left>
                <img src={EduARHome} className="Banner" alt="EduAR Banner" />
            </Flip>

            <Fade bottom>
                <div id="about">
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
            </Fade>

            <footer className="footer_text">&lt;/&gt; with <img alt="love" className="footer_icon" src="https://img.icons8.com/cotton/20/000000/like--v1.png" /> and &nbsp;<img alt="React Js" id="React-logo-footer" src="https://img.icons8.com/officel/20/000000/react.png" /> by Team Hack Elite</footer>

        </div>
    )
}
