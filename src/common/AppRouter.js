import { Route, Routes } from "react-router-dom";
import { routes } from "./routeConfig";

const AppRouter = () => {
    return ( 
        <Routes>
            {routes.map(({ path, element }) => 
            <Route path={path} element={element}/>
            )}
        </Routes>
     );
}
 
export default AppRouter;