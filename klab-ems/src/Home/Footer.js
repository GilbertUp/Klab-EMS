import "./Footer.css"
const Footer = () => {
    return (  
        <div>

        <div className="footer-container">
            <div className="servises">
                <h4 className="heading">OUR SERVICES</h4>
              <span className="ser"><a href="#">Web design</a> 
               <a href="#">Web design</a> 
               <a href="#">Web design</a> 
               <a href="#">Web design</a> 
               <a href="#">Web design</a> 
               </span> 
            </div>
            <div className="contacts">
                <h4 className="headings">Follow us</h4>
            <a href="#">Facebook</a> 
            <a href="#">Linked in</a> 
            <a href="#">Intagram</a> 
            <a href="#">Twitter</a> 
            <a href="#">Github</a> 
            <span className="adress">
            <h4 className="heading3">Adress</h4>
               <ul className="adress-list" >
                <li>Whatsap:07899756</li><br/>
                <li>Email:klab@gmail.com </li>
               </ul>
            </span>
            </div>
            
        </div>
        </div>
    );
}
 
export default Footer;