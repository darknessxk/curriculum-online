interface IStringLib {
    Alpha: string[],
    Symbols: string[],
    Numbers: string[]
}

type StringKey = keyof IStringLib;

const internalStringLib : IStringLib = {
    Alpha: [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ],
    Symbols: [
        '_', '-', '$', '!', '%', '?'
    ],
    Numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
}

const defaultKeys: StringKey[] = ['Alpha', 'Symbols', "Numbers"];

export function generateRandomString(length: number = 6, keys?: StringKey[]): string {
    const _keys = keys || defaultKeys;

    const _lib: string[] = _keys.map((a: StringKey) => internalStringLib[a]).reduce((a, b) => a.concat(b));

    const _libLen = _lib.length;

    let generatedString: string[] = [];

    while (length > 0) {
        generatedString.push(_lib[Math.round(Math.random() * _libLen)]);
        length--;
    }

    return generatedString.join('');
}