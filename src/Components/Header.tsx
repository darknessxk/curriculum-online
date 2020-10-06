import React from "react";
import {
    AppBar,
    IconButton,
    Toolbar,
} from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import WorkIcon from "@material-ui/icons/Work";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import TranslateIcon from "@material-ui/icons/Translate";
import { AppContext } from "../Context/AppContext";

export function Header() {
    return(<AppContext.Consumer>
        {(({ userId, language, languages }) => (
            <header>
                <AppBar>
                    <Toolbar>
                        <IconButton key="intro">
                            <AssignmentIndIcon />
                        </IconButton>

                        <IconButton key="works">
                            <WorkIcon />
                        </IconButton>

                        <IconButton key="studies">
                            <MenuBookIcon />
                        </IconButton>

                        <IconButton key="metas">
                            <AssignmentTurnedInIcon />
                        </IconButton>

                        <IconButton key="languages" onClick={() => alert("to be implemented")}>
                            <TranslateIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </header>
        ))}
    </AppContext.Consumer>);
}