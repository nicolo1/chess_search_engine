import SearchBar from "./../components/Home/SearchBar";
import horse from "../images/horse.png";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <div id="home-page-container">
                <img id="home-img-logo" src={horse} />
                <h1 id="home-title"> Chess Search Engine</h1>
                <SearchBar />
            </div>
            <Footer />
        </>
    );
};

export default Home;
