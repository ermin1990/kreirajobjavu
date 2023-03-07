import App from "../App";
import AgainstClub from "../pages/AgainstClub";
import Home from "../pages/Home";
import MyClub from "../pages/MyClub";
import NextMatch from "../pages/NextMatch/NextMatch";
import ReportMatch from "../pages/ReportMatch/ReportMatch";
import Info from "../pages/Info";

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
                path: "info",
                element: <Info/>
            },
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
                path:"reportmatch",
                element:<ReportMatch/>
            }
            ]
            }
        ]

export default routes