import React from 'react'
import "./Home.scss"
import EduARHome from "../../Assets/Eduarh.png"
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
                        वर्तमान महामारी ने पूरी दुनिया में शिक्षा प्रणाली को प्रभावित किया है। हर कोई दूर से सीख रहा है। वरिष्ठ छात्रों के लिए यह अभी भी ठीक है लेकिन जूनियर छात्र वे हैं जिन्हें नियमित बातचीत की आवश्यकता होती है और हमारी वर्तमान शिक्षा प्रणाली उन्हें यह प्रदान करने में सक्षम नहीं है।

                    </p>
                    <p>
                        हमने एक एआर-आधारित वेबसाइट एडुआर बनाई है जहां किसी भी पृष्ठभूमि के छात्र साइट पर जा सकते हैं और 3 डी मॉडल की मदद से विभिन्न अवधारणाओं को सीख सकते हैं, जो सीखने को मजेदार और आसान बनाता है। EduAR छात्रों को विषय वस्तु में विज़ुअलाइज़ेशन और पूर्ण विसर्जन के माध्यम से बेहतर परिणाम प्राप्त करने में मदद कर सकता है। इंटरएक्टिव एआर लर्निंग छात्रों पर महत्वपूर्ण सकारात्मक प्रभाव डाल सकता है। यह उन्हें पूरे पाठ में व्यस्त रखता है हमने अपनी वेबसाइट में एक चैटबॉट और बहु-भाषा समर्थन भी बनाया है जो छात्रों के लिए सीखने के लिए इसे और भी सुविधाजनक बनाता है।    
                    </p>

                </div>
            </Fade>

            <footer className="footer_text">&lt;/&gt; साथ से <img alt="love" className="footer_icon" src="https://img.icons8.com/cotton/20/000000/like--v1.png" /> तथा &nbsp;<img alt="React Js" id="React-logo-footer" src="https://img.icons8.com/officel/20/000000/react.png" /> टीम हैक एलीट द्वारा </footer>

        </div>
    )
}
