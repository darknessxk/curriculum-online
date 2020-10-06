import React from 'react';
import {Container, Typography} from "@material-ui/core";
import {StudyData} from "./Structures/StudyData";

interface IStudiesProps {
    Studies: StudyData[];
}

export function ProfileStudies(props: IStudiesProps) {
    return (<Container id="studies">
        <Typography>Studies Segment</Typography>
    </Container>);
}