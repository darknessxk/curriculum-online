import React from "react";
import {Curriculum} from "../Components/Profile/Structures/Curriculum";

interface ICurriculumContext {
    Curriculum: Curriculum
}

export const CurriculumContext = React.createContext<Partial<ICurriculumContext>>({});