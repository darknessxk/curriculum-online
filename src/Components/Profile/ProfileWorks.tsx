import React from 'react';
import {Card, CardContent, createStyles, Divider, Grid, Theme, Typography} from "@material-ui/core";
import {WorkData} from "./Structures/WorkData";
import {makeStyles} from "@material-ui/core/styles";
import {AppContext} from "../../Context/AppContext";
import {formatDate} from "../../Utils/DateHelper";
import {generateRandomString} from "../../Utils/StringHelper";

interface IWorkProps {
    Works: WorkData[];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(2)
    },
    cardsRoot: {
        padding: theme.spacing(1),
    },
    card: {
        minHeight: '256px',
        maxHeight: '256px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    textTitle: {
        margin: 'auto',
        textAlign: 'center'
    },
}));

export function ProfileWork(props: IWorkProps) {
    const { Works } = props;
    const classes = useStyles();

    if (Works === undefined)
        return null;

    if (Works.length === 0)
        return null;

    return (<AppContext.Consumer>
        {({language}) => language !== undefined ? (
            <Grid container className={classes.root} id="works">
                <Grid item xs={12} key={`${generateRandomString(24, ['Numbers', 'Alpha'])}`}>
                    <Typography align="center" variant="h4">{language.getItem("profileWork.section.title").value}</Typography>
                </Grid>
                {Works.map(({StartedAt, Name, Position, Hierarchy, EndedAt, Description, Current}) => (
                <Grid item xs={4} className={classes.cardsRoot} key={`${generateRandomString(24, ['Numbers', 'Alpha'])}-${Name}`}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography align="center" gutterBottom variant="h5" component="h2">
                                {Name}
                            </Typography>

                            <Divider />

                            <Typography gutterBottom variant="caption" component="h2">
                                {language.getItem("profileWork.startedAt").value}: {formatDate(language.getDateFormat(), StartedAt)}
                            </Typography>

                            <Typography gutterBottom variant="caption" component="h2">
                                {language.getItem(Current ? "profileWork.current" : "profileWork.leaveAt").value}{ Current ? null : `: ${formatDate(language.getDateFormat(), EndedAt ?? new Date())}`}
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