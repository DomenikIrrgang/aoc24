type Report = number[]

let reports: Report[] = (await Bun.file("./day2/input")
    .text())
    .split("\n").map((line: string) => line.split(" ").filter((value: string) => value !== "").map((value: string) => +value))

let saveReports: number = 0
let saveReportsDampened: number = 0

function isSafe(report: Report): boolean {
    let isSorted: boolean = report.every((value: number, index: number) => index === 0 || report[index - 1] <= value) || report.every((value: number, index: number) => index === 0 || report[index - 1] >= value) 
    let valueHasProperDistance: boolean = report.every((value: number, index: number) => index === 0 || Math.abs(report[index - 1] - report[index]) > 0 && Math.abs(report[index - 1] - report[index]) <= 3)
    return isSorted && valueHasProperDistance
}

for (let report of reports) {
    let safe: boolean = isSafe(report)
    saveReports += safe ? 1 : 0
    if (!safe) {
        for (let index = 0; index < report.length; index++) {
            let copy: Report = [... report]
            copy.splice(index, 1)
            if (isSafe(copy)) {
                safe = true
                break
            }
        }
    }
    saveReportsDampened += safe? 1 : 0
}

console.log("Save Reports:", saveReports)
console.log("Save Dampened Reports:", saveReportsDampened)