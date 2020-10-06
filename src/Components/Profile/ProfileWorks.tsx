import React from 'react';
import {Container, Typography} from "@material-ui/core";
import {WorkData} from "./Structures/WorkData";

interface IWorkProps {
    Works: WorkData[];
}

export function ProfileWork(props: IWorkProps) {
    return (<Container id="works">
        <Typography>Works</Typography>
    </Container>);
}