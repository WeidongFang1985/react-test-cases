import HomePage from "./HomePage";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Case1 = () => {
    return (
        <Router>
            <div>
                <Link to="/">Homepage</Link>
                <br />
                <br />
                <Link to="/page1">Page1</Link>
                <br />
                <br />
                <Link to="/page2">Page2</Link>

                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/page1" element={<Page1/>}/>
                    <Route path="/page2" element={<Page2/>}/>
                </Routes>

            </div>
        </Router>
    );
};

export default Case1;
