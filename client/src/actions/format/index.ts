
export function separateWithComma (data: string): string {
    const split = data.replace(/}\s*{/g, "},{");
    return JSON.parse(`[${split}]`)
}