import React, {} from 'react';
import './App.scss';
import {Fingerprint} from './Utils/Fingerprint';
import {Box} from '@material-ui/core';
import {DefaultLanguage, Languages} from "./Localize/Languages";
import {AppContext} from './Context/AppContext';
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {ProfileComponent} from "./Components/Profile/ProfileComponent";
import {CurriculumContext} from "./Context/CurriculumContext";

function App() {
    return (
        <AppContext.Provider value={{
            languages: Languages,
            language: Languages[DefaultLanguage],
            userId: Fingerprint()
        }}>
            <CurriculumContext.Provider value={{
                Curriculum: {
                    Works: [
                        {
                            Name: "Test",
                            Hierarchy: "profileWork.hierarchy.default",
                            Position: "Engenheiro de software",
                            Description: "Testando...",
                            EndedAt: new Date(Date.parse('2020-12-01')),
                            StartedAt: new Date(Date.parse('2020-06-01'))
                        },
                        {
                            Name: "Test",
                            Hierarchy: "profileWork.hierarchy.junior",
                            Position: "Analista de softwares",
                            Description: "Testando...",
                            EndedAt: new Date(Date.parse('2020-12-01')),
                            StartedAt: new Date(Date.parse('2020-06-01'))
                        },
                        {
                            Name: "Test",
                            Hierarchy: "profileWork.hierarchy.senior",
                            Position: "Qualidade de produtos",
                            Description: "Testando...",
                            EndedAt: new Date(Date.parse('2020-12-01')),
                            StartedAt: new Date(Date.parse('2020-06-01'))
                        },
                        {
                            Name: "Test",
                            Hierarchy: "profileWork.hierarchy.director",
                            Position: "Marketing",
                            Description: "Testando...",
                            EndedAt: new Date(Date.parse('2020-12-01')),
                            StartedAt: new Date(Date.parse('2020-06-01'))
                        },
                        {
                            Name: "Test",
                            Hierarchy: "profileWork.hierarchy.junior",
                            Position: "Software Developer",
                            Description: "Testando...",
                            EndedAt: new Date(Date.parse('2020-12-01')),
                            StartedAt: new Date(Date.parse('2020-06-01'))
                        },
                        {
                            Name: "Test",
                            Hierarchy: "profileWork.hierarchy.senior",
                            Position: "Software Developer",
                            Description: "Testando...",
                            EndedAt: new Date(Date.parse('2020-12-01')),
                            StartedAt: new Date(Date.parse('2020-06-01'))
                        },
                    ],
                    Metas: [],
                    Studies: [],
                    Salary: 8600,
                    Person: {
                        Birthday: new Date(Date.parse("1994-09-20")),
                        ProfilePicture: "https://via.placeholder.com/256x256",
                        Sites: [
                            { name: "Github", url: "https://github.com/darknessxk" },
                            { name: "Site", url: "https://darknessxk.com" },
                            { name: "Portfolio", url: "https://katsuhiro.gg" },
                        ],
                        Country: "Brazil",
                        City: "São Paulo",
                        State: "São Paulo",
                        Sex: "person.sex.Male",
                        Emails: ["me@darknessxk.com", "work@darknessxk.com", "darknessxk@katsuhiro.gg"],
                        Phones: ["+5519981218170"],
                        Name: "Luiz Felipe"
                    }
                }
            }}>
                <Box className="App">
                    <Header />
                    <ProfileComponent />
                    <Footer />
                </Box>
            </CurriculumContext.Provider>
        </AppContext.Provider>
    );
}

export default App;
