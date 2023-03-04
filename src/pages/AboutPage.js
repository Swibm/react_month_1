import { useNavigate } from "react-router-dom";

const AboutPage = () => {

    const navigate = useNavigate()

    return ( 
        <div onClick={() => navigate('/')}>ABOUT PAGE</div>
     );
}
 
export default AboutPage;