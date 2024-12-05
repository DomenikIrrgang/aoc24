type LocationId = number

let leftList: LocationId[] = []
let rightList: LocationId[] = []
let distance: number = 0
let similarity: number = 0

let file: string[][] = (await Bun.file("./day1/input")
    .text()).split("\n").map((line: string) => line.split(" ").filter((value: string) => value !== ""))

for (let line of file) {
    leftList.push(+line[0])
    rightList.push(+line[1])
}

leftList.sort()
rightList.sort()

for (let i = 0; i < leftList.length; i++) {
    distance += Math.abs(leftList[i] - rightList[i])
}

console.log("The total distance is:", distance)

for (let value of leftList) {
    let count: number = 0
    similarity += value * rightList.reduce((previousValue: number, currentValue: number) => currentValue == value ? count++ : count)
}

console.log("The similarity is:", similarity)