import "../Footer/Footer.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return( 
  <div >
    
    <br/><br/><br/><br/><br/>

  <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} ShopLane. All Rights
                        Reserved.

                        

                    </span>
                    <p className="foot">ShopLane.com</p>
                </div>
              
               
               

               
            </div>
        </footer>
        </div>
        );
}

export default Footer;
