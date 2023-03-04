import App from "../App";
import AgainstClub from "../pages/AgainstClub";
import Home from "../pages/Home";
import MyClub from "../pages/MyClub";
import NextMatch from "../pages/NextMatch/NextMatch";
import NextMatchDesign from "../pages/NextMatch/NextMatchDesign";

const routes = [
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path: "",
                element: <Home/>
            }
            ,
            {
                path: "myclub",
                element: <MyClub/>
            },
            {
                path: "againstclub",
                element: <AgainstClub/>
            },
            {
                path:"nextmatch",
                element: <NextMatch/>
                
            },
            {
                path:"nextmatch/design",
                element:<NextMatchDesign/>
            }
            ]
            }
        ]

export default routes