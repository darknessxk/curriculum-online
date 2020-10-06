import { PersonData } from "./PersonData";
import {WorkData} from "./WorkData";
import {StudyData} from "./StudyData";
import {MetaData} from "./MetaData";

export type Curriculum = {
    Person: PersonData;
    Salary: number;
    Works: WorkData[];
    Studies: StudyData[];
    Metas: MetaData[];
}