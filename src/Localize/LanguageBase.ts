import {ILanguageItem} from "./ILanguageItem";

export abstract class LanguageBase {
    abstract items: ILanguageItem[];

    getItem(name: string): ILanguageItem {
        let item = this.items.filter(item => item.name === name).pop();

        if (item === undefined)
            item = this.items.filter(item => item.name === "placeholder").pop();

        return item ?? { name: "error", value: "Translation not found" };
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