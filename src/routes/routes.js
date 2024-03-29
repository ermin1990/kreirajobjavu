import App from "../App";
import AgainstClub from "../pages/AgainstClub";
import Home from "../pages/Home";
import MyClub from "../pages/MyClub";
import NextMatch from "../pages/NextMatch/NextMatch";
import ReportMatch from "../pages/ReportMatch/ReportMatch";
import Info from "../pages/Info";
import NextMatchDesign from "../pages/NextMatch/NextMatchDesign";
import ReportMatchDesign from "../pages/ReportMatch/ReportMatchDesign";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            }
            ,
            {
                path: "info",
                element: <Info />
            },
            {
                path: "myclub",
                element: <MyClub />
            },
            {
                path: "againstclub",
                element: <AgainstClub />
            },
            {
                path: "nextmatch",
                element: <NextMatch />,
                children: [
                    {
                        path: "design",
                        element: <NextMatchDesign />
                    }
                ]

            },
            {
                path: "reportmatch",
                element: <ReportMatch />,

            },
            {
                path: "reportdesign",
                element: <ReportMatchDesign />
            },
        ]
    }

]

export default routes