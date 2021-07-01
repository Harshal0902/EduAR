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
                    <h1>हमारे बारे में</h1>
                    <p>
                        लेकिन तरहथा। वार्तालाप भेदनक्षमता पढने बहतर प्रेरना अधिकांश विशेष होसके नयेलिए उपलब्धता वहहर ध्वनि जागरुक विज्ञान विस्तरणक्षमता जाएन रिती बाटते उद्योग बातसमय विज्ञान लगती विवरन विभाजन अधिकांश अन्तरराष्ट्रीयकरन ध्वनि तरहथा। पहोचाना भाषा ध्येय भाषा नयेलिए मेंभटृ करेसाथ कम्प्युटर अर्थपुर्ण बनाने पढाए चुनने पुस्तक सभीकुछ प्रेरना अपने

                    </p>
                    <p>
                        लेकिन तरहथा। वार्तालाप भेदनक्षमता पढने बहतर प्रेरना अधिकांश विशेष होसके नयेलिए उपलब्धता वहहर ध्वनि जागरुक विज्ञान विस्तरणक्षमता जाएन रिती बाटते उद्योग बातसमय विज्ञान लगती विवरन विभाजन अधिकांश अन्तरराष्ट्रीयकरन ध्वनि तरहथा। पहोचाना भाषा ध्येय भाषा नयेलिए मेंभटृ करेसाथ कम्प्युटर अर्थपुर्ण बनाने पढाए चुनने पुस्तक सभीकुछ प्रेरना अपने
                    </p>

                </div>
            </Fade>

            <footer className="footer_text">&lt;/&gt; साथ से <img alt="love" className="footer_icon" src="https://img.icons8.com/cotton/20/000000/like--v1.png" /> तथा &nbsp;<img alt="React Js" id="React-logo-footer" src="https://img.icons8.com/officel/20/000000/react.png" /> टीम हैक एलीट द्वारा </footer>

        </div>
    )
}
