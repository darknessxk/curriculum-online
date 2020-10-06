import {LanguageBase} from './LanguageBase';
import {ILanguageItem} from "./ILanguageItem";

export class PortugueseBrasil extends LanguageBase {
    items: ILanguageItem[];

    constructor() {
        super();
        this.items = [
            { name: "placeholder", value: "!!Tradução não encontrada!!" },
            { name: "profileIntro.birthDate", value: "Data de nascimento" },
            { name: "profileIntro.name", value: "Nome" },
            { name: "profileIntro.emails", value: "Emails" },
            { name: "profileIntro.sex", value: "Sexo" },
            { name: "profileIntro.sites", value: "Sites" },
            { name: "profileIntro.phones", value: "Telefones" },
            { name: "profileIntro.lives", value: "Moradia" },
            { name: "profileIntro.sectionLabel", value: "Introdução" },
            { name: "profileIntro.salary", value: "Pretensão" },
            { name: "profileWork.section.title", value: "Experiencias" },
            { name: "profileWork.startedAt", value: "Começou em" },
            { name: "profileWork.leaveAt", value: "Saiu em" },
            { name: "profileWork.description", value: "O que fazia?" },
            { name: "profileWork.position", value: "Cargo" },
            { name: "profileWork.hierarchy.default", value: "Pleno" },
            { name: "profileWork.hierarchy.junior", value: "Junior" },
            { name: "profileWork.hierarchy.senior", value: "Senior" },
            { name: "profileWork.hierarchy.director", value: "Diretor" },
            { name: "profileWork.hierarchy.none", value: "" },
            { name: "mainPage.footerLabel", value: "Feito com ♥ por um programador com insonia" },
            { name: "header.languageBtnText", value: "Idioma" },
            { name: "person.sex.Male", value: "Masculino" },
            { name: "person.sex.Female", value: "Feminino" },
            { name: "person.sex.NonBinary", value: "Não binário" },
            { name: "person.sex.Transsexual", value: "Transsexual" },
            { name: "person.sex.None", value: "Não informado" },
        ];
    }

    getId(): string {
        return "pt-br";
    }

    getName(): string {
        return "Português-Brasil";
    }

    getDateFormat(): string {
        return "dd/mm/yyyy";
    }

    getCurrencyFormat(value: Number): string {
        return `R$ ${value.toFixed(2)}`;
    }
}