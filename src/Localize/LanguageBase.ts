import {ILanguageItem} from "./ILanguageItem";

export abstract class LanguageBase {
    abstract items: ILanguageItem[];

    getItem(name: string): ILanguageItem {
        let item = this.items.filter(item => item.name === name).pop();

        if (item === undefined)
            item = this.items.filter(item => item.name === "placeholder").pop();

        if (item === undefined)
            item = { name: "error", value: "Translation not found" };

        if (item.name === "error") {
            console.log("Translation error missing key:", name)
        }

        return item;
    }

    getDateFormat(): string {
        return "yyyy/mm/dd";
    }

    getCurrencyFormat(value: Number): string {
        return `U$ ${value.toFixed(2)}`;
    }

    abstract getName(): string;
    abstract getId(): string;
}