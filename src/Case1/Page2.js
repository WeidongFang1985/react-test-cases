import {useNavigate} from "react-router-dom";

const Page2 = () => {
    const navigate = useNavigate();
    const btnClickHandler = () => {
        navigate("/page1")
    }
    const goBackHandler = () => {
        navigate(-1)
    }
    return (

        <div>
            <h1>Page2</h1>
            <button onClick={goBackHandler}>GoBack</button>
            <button onClick={btnClickHandler}>Page1</button>
        </div>
    );
};

export default Page2;
