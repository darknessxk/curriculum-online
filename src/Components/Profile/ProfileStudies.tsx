import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Grid, Link} from '@material-ui/core';
import { StudyData } from './Structures/StudyData';
import {generateRandomString} from "../../Utils/StringHelper";
import {AppContext} from "../../Context/AppContext";
import {formatDate} from "../../Utils/DateHelper";

interface IStudiesProps {
    Studies: StudyData[];
}


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export function ProfileStudies(props: IStudiesProps) {
    const classes = useStyles();
    const {Studies} = props;

    return (<AppContext.Consumer>
        {({language}) => language !== undefined ? (
            <Grid className={classes.root} id="studies">
                <Grid item xs={12} key={`${generateRandomString(24, ['Numbers', 'Alpha'])}`}>
                    <Typography align="center" variant="h4">{language.getItem("profileStudy.section.title").value}</Typography>
                </Grid>

                <Timeline align="alternate">
                    {Studies.map(({
                                      Description,
                                      EndedAt,
                                      Name,
                                      StartedAt,
                                      CertificationUrl,
                                      Institute,
                                      Graduation,
                                      Current
                                  }) => (
                        <TimelineItem key={generateRandomString(24, ['Alpha', 'Numbers'])}>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    {language.getItem("profileStudy.startedAt").value} <b>{formatDate('mm/yyyy', StartedAt)}</b>
                                </Typography>

                                <Typography variant="body2" color="textSecondary">
                                    {language.getItem(Current ? "profileStudy.endPreview" : "profileStudy.endedAt").value} <b>{formatDate('mm/yyyy', EndedAt)}</b>
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">{Name}</Typography>
                                    <Typography>{language.getItem("profileStudy.graduationType").value}: {language.getItem(Graduation).value}</Typography>
                                    <Typography>{language.getItem("profileStudy.institute").value}: {Institute}</Typography>
                                    <Typography>
                                        <Link href={CertificationUrl}>{language.getItem("profileStudy.viewCertification").value}</Link>
                                    </Typography>
                                    <Typography>{Description}</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Grid>
        ) : null}
    </AppContext.Consumer>);
}