import {useNavigate} from "react-router-dom";

const Page1 = () => {
    const navigate = useNavigate();

    const btnClickHandler = () => {
        navigate("/page2")
    }

    const goBackHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Page1</h1>
            <button onClick={goBackHandler}>Back</button>
            <button onClick={btnClickHandler}>Page2</button>
        </div>
    );
};

export default Page1;
