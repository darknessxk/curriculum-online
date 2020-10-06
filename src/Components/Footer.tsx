import React from "react";
import { AppContext } from "../Context/AppContext";

export function Footer() {
    return (<AppContext.Consumer>
        {(({language}) => (
            <footer>
                <span>{language?.getItem("mainPage.footerLabel")?.value}</span>
            </footer>
        ))}
    </AppContext.Consumer>)
}