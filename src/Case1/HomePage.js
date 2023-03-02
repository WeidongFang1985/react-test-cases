import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const btnClickHandler = () => {
      navigate(-1)
    }
    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={btnClickHandler}>GoBack</button>
        </div>
    );
};

export default HomePage;
