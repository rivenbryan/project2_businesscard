// To do list: Complete footer!


import { SocialIcon } from 'react-social-icons';
const Footer = () => {

    const sty = {
        height: '35px',
        width: '35px',
        marginLeft: '5px',
        marginRight: '5px'
    };
    
    return (
       <footer className="footer">
            <div className="footer-icons">
                <SocialIcon style={sty} url="https://twitter.com"/>
                <SocialIcon style={sty} url="https://facebook.com" network="facebook" />
                <SocialIcon style={sty} url="https://instagram.com" />
                <SocialIcon style={sty} url="https://github.com"/>
            </div>
       </footer>
    )
}

export default Footer