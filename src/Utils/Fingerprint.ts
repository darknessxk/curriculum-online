export function Fingerprint(): string {
    const canvas = document.createElement('canvas');

    if (canvas === null) return "";

    const ctx = canvas.getContext('2d');

    if (ctx === null) return "";

    const spaceX = 42;
    const spaceY = 24;
    for (let i = 0; i < 4; i ++) {
        ctx.strokeText(window.location.hostname, spaceX * i, spaceY * i, 42);
        ctx.fillText(window.location.hostname, spaceX * i , spaceY * i, 42);
    }

    const fingerprint = ctx.getImageData(0, 0, 1024, 1024).data;
    return new Buffer(fingerprint).toString('hex');
}