import React from "react";
import {ProfileIntro} from "./ProfileIntro";
import {ProfileWork} from "./ProfileWorks";
import {ProfileStudies} from "./ProfileStudies";
import {ProfileMetas} from "./ProfileMetas";
import {CurriculumContext} from "../../Context/CurriculumContext";

export function ProfileComponent() {
    return (<CurriculumContext.Consumer>
        {(({Curriculum}) => (
            Curriculum ? (<main>
                <ProfileIntro Person={Curriculum.Person} Salary={Curriculum.Salary} />
                <ProfileWork Works={Curriculum.Works} />
                <ProfileStudies Studies={Curriculum.Studies} />
                <ProfileMetas Metas={Curriculum.Metas} />
            </main>) : null
        ))}
    </CurriculumContext.Consumer>)
}