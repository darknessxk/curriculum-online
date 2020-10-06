import React from "react";
import {DefaultLanguage, LanguageItemsDict, Languages} from "../Localize/Languages";
import {LanguageBase} from "../Localize/LanguageBase";

interface IAppContext {
    userId: string;
    language: LanguageBase;
    languages: LanguageItemsDict;
}

export const AppContext = React.createContext<Partial<IAppContext>>({
    userId: "",
    language: Languages[DefaultLanguage],
    languages: Languages,
});