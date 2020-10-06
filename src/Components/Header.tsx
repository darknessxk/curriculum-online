import React from "react";
import {
    AppBar,
    IconButton,
    Toolbar,
} from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import MoneyIcon from "@material-ui/icons/AttachMoney";
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
                        <IconButton>
                            <AssignmentIndIcon />
                        </IconButton>

                        <IconButton>
                            <MoneyIcon />
                        </IconButton>

                        <IconButton>
                            <WorkIcon />
                        </IconButton>

                        <IconButton>
                            <MenuBookIcon />
                        </IconButton>

                        <IconButton>
                            <AssignmentTurnedInIcon />
                        </IconButton>

                        <IconButton>
                            <TranslateIcon onClick={() => alert("to be implemented")} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </header>
        ))}
    </AppContext.Consumer>);
}