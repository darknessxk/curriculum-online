import React from 'react';
import './App.scss';
import {Fingerprint} from "./Fingerprint";

function App() {
    const hwid = Fingerprint();


    return (
        <div className="App">
            <header>
                <ul>
                    <li>Intro</li>
                    <li>Pretenção</li>
                    <li>Trabalhos</li>
                    <li>Estudos</li>
                    <li>Meta</li>
                </ul>
            </header>

            <main>
                <div id="Intro">
                    Intro
                </div>
                <div id="Pretencao">
                    Pretencao
                </div>
                <div id="Trabalhos">
                    Trabalhos
                </div>
                <div id="Estudos">
                    Estudos
                </div>
                <div id="Metas">
                    Metas
                </div>
            </main>

            <footer>
                <span>Curriculum Online feito com <span className="Heart">♥</span> por um programador com insonia</span>
            </footer>
        </div>
    );
}

export default App;
