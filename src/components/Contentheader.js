//import { SocialIcon } from 'react-social-icons';
const Contentheader = () => {
    return (
        <>
        <div className="contHeader">
            <h1 className="contHeader--title">Bryan Tay</h1>
            <h2 className="contHeader--subtitle">Frontend Developer</h2>
            <a href="rivenbryan.github.io" className="contHeader--sublink">rivenbryan.github.io</a>
           
        </div>
        <div className="contIcons">
            <button> Email</button>
            <button style={{background: "#5093E2"}}>Linkedln</button>
        </div>
        
         </>
    )
}

export default Contentheader