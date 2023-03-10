import Footer from "../components/Footer";
import checkers from "../images/checkers.png";

const Error = ({ error }) => {
    return (
        <>
            <div id="error-component-container">
                <img id="error-img-logo" src={checkers} />
                <h1>{error}</h1>
            </div>
            <Footer />
        </>
    );
};

export default Error;
