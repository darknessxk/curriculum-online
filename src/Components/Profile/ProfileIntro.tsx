import React from 'react';
import {ButtonBase, createStyles, Grid, Link, Paper, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PersonData} from "./Structures/PersonData";
import {AppContext} from "../../Context/AppContext";
import { formatDate } from "../../Utils/DateHelper";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2)
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        typographyList: {
            paddingRight: theme.spacing(1)
        }
    }),
);

interface IIntroProps {
    Person: PersonData,
    Salary: number
}

function ProfileInfo(name: string, value: any) {
    return (
        <Grid container direction="column" justify="space-between">
            <Grid item>
                <Typography>{name}:</Typography>
            </Grid>
            <Grid item>
                {value}
            </Grid>
        </Grid>);
}

export function ProfileIntro(props: IIntroProps) {
    const classes = useStyles();
    const { Person, Salary } = props;
    const {
        Name, Birthday, ProfilePicture, Emails,
        Sex, Sites, Phones, State, City, Country
    } = Person;

    return (<AppContext.Consumer>
        {({language}) => language ? (
            <Paper id="intro" className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt={Name} src={ProfilePicture} />
                        </ButtonBase>
                    </Grid>

                    <Grid item container sm xs={5} direction="column">
                        {ProfileInfo(language.getItem("profileIntro.name").value, <Typography variant="caption">{Name}</Typography>)}
                        {ProfileInfo(language.getItem("profileIntro.sex").value, <Typography variant="caption">{language.getItem(Sex).value}</Typography>)}
                        {ProfileInfo(language.getItem("profileIntro.birthDate").value,
                            <Typography variant="caption">{formatDate(language.getDateFormat(), Birthday)}</Typography>
                        )}
                        {ProfileInfo(language.getItem("profileIntro.salary").value,
                            <Typography variant="caption">
                                {language.getCurrencyFormat(Salary)}
                            </Typography>)}
                    </Grid>

                    <Grid item sm xs={5} container direction="column">
                        {ProfileInfo(language.getItem("profileIntro.phones").value,
                            <Typography variant="caption">{Phones.map(phone => (
                                <Link className={classes.typographyList} key={phone}
                                      href={"tel:" + phone}
                                      target="_blank">{phone}</Link>))}</Typography>
                        )}

                        {ProfileInfo(language.getItem("profileIntro.emails").value,
                            <Typography variant="caption">{Emails.map(email => (
                                <Link className={classes.typographyList} key={email} href={"mailto:" + email}
                                      target="_blank">{email}</Link>))}</Typography>
                        )}

                        {Sites ? Sites.length > 0 ? ProfileInfo(language.getItem("profileIntro.sites").value,
                            <Typography variant="caption">{Sites?.map(site => (
                                <Link className={classes.typographyList} key={site.url} href={site.url}
                                      target="_blank">{site.name}</Link>))}</Typography>
                        ) : null : null}

                        {ProfileInfo(language.getItem("profileIntro.lives").value,
                            <Typography variant="caption">
                                {City}, {State} - {Country}
                            </Typography>)}
                    </Grid>
                </Grid>
            </Paper>
        ) : null}
    </AppContext.Consumer>);
}