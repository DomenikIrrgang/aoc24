type Statement = {
    index: number,
    command: string
}

let input: string = (await Bun.file("./day3/input").text())

let result: number = 0
let tokens: RegExp[] = [
    /mul\(\d+,\d+\)/g,
    /\bdo\b/g,
    /\bdon't\b/g
]
let statements: Statement[] = []

for (let token of tokens) {
    let match
    while ((match = token.exec(input)) !== null) {
        statements.push({
            index: match.index,
            command: match[0]
        })
    }
}

statements.sort((a: Statement, b: Statement) => a.index - b.index)

let enabled: boolean = true
for (let statement of statements) {
    if (statement.command == "do") {
        enabled = true
    }
    if (statement.command == "don't") {
        enabled = false
    }
    if (statement.command.startsWith("mul") && enabled) {
        result += +(statement.command.match(/mul\(([\d,]+)\)/)[1].split(",").reduce((total: string, value: string, index: number) => index === 0 ? value : (+total * +value).toString()))
    }
}

console.log("Result:", result)