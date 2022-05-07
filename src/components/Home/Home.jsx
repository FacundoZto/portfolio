import Body from "../Body/Body.jsx";
// import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import './home.css';

const Home = () => {
    return(
        <div className="home">
            <div>
                <Header/>
            </div>
            <div>
                <Body />
            </div>
            {/* <div>
                <Footer/>
            </div> */}
        </div>
    )
}

export default Home;