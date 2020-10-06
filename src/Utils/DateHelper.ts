export function formatDate(format: string, date: Date): string {
    let _return: string = "";

    let replaceTable = [
        {
            regex: /d{2}/,
            padLength: 2,
            padFill: "0",
            method: (obj: Date) => obj.getDate()
        },
        {
            regex: /m{2}/,
            padLength: 2,
            padFill: "0",
            method: (obj: Date) => obj.getMonth() + 1
        },
        {
            "regex": /y{4}/,
            padLength: 4,
            padFill: "0",
            method: (obj: Date) => obj.getFullYear()
        }
    ]

    _return = format;


    replaceTable.forEach(formatItem => {
        const { regex, method, padFill, padLength } = formatItem;
        if (format.match(regex)) {
            const dateFormatted = String(method(date)).padStart(padLength, padFill);

            _return = _return.replace(regex, dateFormatted);
        }
    })

    return _return;
}