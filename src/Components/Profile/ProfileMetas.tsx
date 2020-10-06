import React from 'react';
import {Container, Typography} from "@material-ui/core";
import {MetaData} from "./Structures/MetaData";

interface IMetasProps {
    Metas: MetaData[];
}

export function ProfileMetas(props: IMetasProps) {
    return (<Container id="metas">
        <Typography>Metas</Typography>
    </Container>);
}