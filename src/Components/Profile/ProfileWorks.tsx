import React from 'react';
import {Card, CardContent, createStyles, Divider, Grid, Theme, Typography} from "@material-ui/core";
import {WorkData} from "./Structures/WorkData";
import {makeStyles} from "@material-ui/core/styles";
import {AppContext} from "../../Context/AppContext";
import {formatDate} from "../../Utils/DateHelper";

interface IWorkProps {
    Works: WorkData[];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(2),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    typography: {
        h4: {

        }
    }
}));

export function ProfileWork(props: IWorkProps) {
    const { Works } = props;
    const classes = useStyles();

    return (<AppContext.Consumer>
        {({language}) => language !== undefined ? (
            <Grid container id="works">
                <Grid item xs={12}>
                    <Typography align="center" variant="h4">{language.getItem("profileWork.section.title").value}</Typography>
                </Grid>
                {Works.map(({StartedAt, Name, Position, Hierarchy, EndedAt, Description}) => (<Grid item xs={4} className={classes.root}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {Name}
                            </Typography>

                            <Divider />

                            <Typography gutterBottom variant="caption" component="h2">
                                {language.getItem("profileWork.startedAt").value}: {formatDate(language.getDateFormat(), StartedAt)}
                            </Typography>

                            <Typography gutterBottom variant="caption" component="h2">
                                {language.getItem("profileWork.leaveAt").value}: {formatDate(language.getDateFormat(), EndedAt)}
                            </Typography>

                            <Typography gutterBottom variant="caption" component="h2">
                                {language.getItem("profileWork.position").value}: {Position} @ {language.getItem(Hierarchy).value}
                            </Typography>

                            <Typography gutterBottom variant="caption" component="h2">
                                {language.getItem("profileWork.description").value}
                            </Typography>

                            <Typography gutterBottom variant="caption" component="h2">
                                {Description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>))}
            </Grid>
        ) : null}
    </AppContext.Consumer>);
}