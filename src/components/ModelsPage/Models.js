import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from 'react-reveal/Fade';
import "./Models.scss"
import EarthQR from "../../Assets/Earth-QR"
import SolarSystemQR from "../../Assets/SolarSystemQR"
import H2OrQR from "../../Assets/H2OQR"
import BloediteQR from "../../Assets/BloediteQR"

export default function Models() {
    return (
        <div className="model__body">

            <div className="models">
                {/* Model 1 */}
                <Fade left>
                    <div className="model">
                        <iframe src="https://go.echoar.xyz/HyD5" title="Earth" className="iframe" />
                    </div>
                </Fade>

                <Fade right>
                    <div className="model__info">
                        <div className="model__title">Earth</div>
                        <div className="model__details">
                            Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics.
                        </div>
                        <div className="view">
                            <img className="QRCode" src={EarthQR} alt="Earth QR" />
                            <a href="https://go.echoar.xyz/HyD5" target="_blank" rel="noopener noreferrer">
                                <div className="btn" style={{ color: "white", marginTop: "1.5rem" }}>View in AR
                                </div>
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Model 2 */}
            <div className="models">
                <Fade left>
                    <div className="model">
                        <iframe src="https://go.echoar.xyz/vdgz" title="Solar System" className="iframe" />
                    </div>
                </Fade>

                <Fade right>
                    <div className="model__info">
                        <div className="model__title">Solar System</div>
                        <div className="model__details">
                            The Solar System is the gravitationally bound system of the Sun and the objects that orbit it, either directly or indirectly. Of the objects that orbit the Sun directly, the largest are the eight planets, with the remainder being smaller objects, the dwarf planets and small Solar System bodies. Of the objects that orbit the Sun indirectly—the natural satellites—two are larger than the smallest planet, Mercury.
                        </div>
                        <div className="view">
                            <img className="QRCode" src={SolarSystemQR} alt="Earth QR" />
                            <a href="https://go.echoar.xyz/vdgz" target="_blank" rel="noopener noreferrer">
                                <div className="btn" style={{ color: "white", marginTop: "1.5rem" }}>View in AR
                                </div>
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Model 3 */}
            <div className="models">
                <Fade left>
                    <div className="model">
                        <iframe src="https://go.echoar.xyz/4Dqy" title="Water(H<sub>2</sub>O)" className="iframe" />
                    </div>
                </Fade>

                <Fade right>
                    <div className="model__info">
                        <div className="model__title">Water(H<sub>2</sub>O)</div>
                        <div className="model__details">
                            Water (chemical formula H2O) is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's hydrosphere and the fluids of all known living organisms (in which it acts as a solvent). It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula H2O, indicates that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds. The hydrogen atoms are attached to the oxygen atom at an angle of 104.45°. "Water" is the name of the liquid state of H2O at standard conditions for temperature and pressure.
                        </div>
                        <div className="view">
                            <img className="QRCode" src={H2OrQR} alt="Earth QR" />
                            <a href="https://go.echoar.xyz/4Dqy" target="_blank" rel="noopener noreferrer">
                                <div className="btn" style={{ color: "white", marginTop: "1.5rem" }}>View in AR
                                </div>
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Model 4 */}
            <div className="models">
                <Fade left>
                    <div className="model">
                        <iframe src="https://go.echoar.xyz/Td8S" title="Bloedite" className="iframe" />
                    </div>
                </Fade>

                <Fade right>
                    <div className="model__info">
                        <div className="model__title">Bloedite</div>
                        <div className="model__details">
                            Blödite or bloedite is a hydrated sodium magnesium sulfate mineral with formula: Na2Mg(SO4)2·4H2O. The mineral is clear to yellow in color often darkened by inclusions and forms monoclinic crystals. Blödite was first described in 1821 for an occurrence in a salt deposit in Ischler Salzberg, Bad Ischl, Gmunden, Austria and named for German mineralogist and chemist Karl August Blöde (1773–1820). It is found worldwide in evaporitic sedimentary environments such as the Great Salt Lake, Utah.
                        </div>
                        <div className="view">
                            <img className="QRCode" src={BloediteQR} alt="Earth QR" />
                            <a href="https://go.echoar.xyz/Td8S" target="_blank" rel="noopener noreferrer">
                                <div className="btn" style={{ color: "white", marginTop: "1.5rem" }}>View in AR
                                </div>
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
