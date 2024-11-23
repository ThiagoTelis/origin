import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Layout from "../assets/components/Layout/Layout";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Layout/>}>
                        </Route>
                    </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;