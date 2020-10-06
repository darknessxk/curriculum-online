import { PortugueseBrasil } from "./PortugueseBrasil";
import {LanguageBase} from "./LanguageBase";

const ptBr = new PortugueseBrasil();

export type LanguageItemsDict = { [key: string] : LanguageBase };
const langItems: LanguageItemsDict = {};

langItems[ptBr.getId()] = ptBr;

export const Languages: LanguageItemsDict = langItems;
export const DefaultLanguage: string = ptBr.getId();