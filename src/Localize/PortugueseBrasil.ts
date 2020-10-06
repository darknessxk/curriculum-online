import {LanguageBase} from './LanguageBase';
import {ILanguageItem} from "./ILanguageItem";

export class PortugueseBrasil extends LanguageBase {
    items: ILanguageItem[];

    constructor() {
        super();
        this.items = [
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
            { name: "profileWork.current", value: "Atual" },
            { name: "profileStudy.section.title", value: "Estudos" },
            { name: "profileStudy.current", value: "Termina em" },
            { name: "profileStudy.startedAt", value: "Começou em" },
            { name: "profileStudy.endedAt", value: "Terminou em" },
            { name: "profileStudy.institute", value: "Instituto" },
            { name: "profileStudy.viewCertification", value: "Ver certificado" },
            { name: "profileStudy.graduation.bachelor", value: "Bacharelado" },
            { name: "profileStudy.graduation.technologist", value: "Tecnólogo" },
            { name: "profileStudy.graduation.doctorate", value: "Doutorado" },
            { name: "profileStudy.graduation.master", value: "Mestrado" },
            { name: "profileStudy.graduation.nanodegree", value: "Nano graduação" },
            { name: "profileStudy.graduationType", value: "Graduação" },
            { name: "mainPage.footerLabel", value: "Feito por Luiz \"darknessxk\" Felipe com ♥ e insonia" },
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