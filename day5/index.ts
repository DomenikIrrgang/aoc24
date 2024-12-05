import * as DependencyGraph from "dependency-graph"

let input: string = (await Bun.file("./day5/input").text())

type Rule = {
    x: number,
    y: number
}

let rules: Map<number, number[]> = new Map()
let sum: number = 0
let invalidSum: number = 0
let rulesInput: string[] = input.match(/\b\d+\|\d+\b/g)
let orders: number[][] = input.match(/^\d+(,\d+)*$/gm).map((order: string) => order.split(",").map((value: string) => +value))
let invalidOrders: number[][] = []

for (let ruleInput of rulesInput) {
    let rule: Rule = {
        x: +ruleInput.split("|")[0],
        y: +ruleInput.split("|")[1],
    }
    if (rules.get(rule.x) === undefined) {
        rules.set(rule.x, [])
    }
    rules.get(rule.x).push(rule.y)
}

function isOrderValid(order: number[]) {
    for (let index = order.length - 1; index >= 0; index--) {
        for (let checkIndex = index - 1; checkIndex >= 0; checkIndex--) {
            if (rules.get(order[index]).includes(order[checkIndex])) {
                return false
            }
        }
    }
    return true
}

function sortWithGraph(order: number[]): number[] {
    let graph = new DependencyGraph.DepGraph()
    for (let value of order) {
        graph.addNode(value.toString(), value)
    }
    for (let value of order) {
        for (let dependent of rules.get(value)) {
            if (graph.hasNode(dependent.toString())) {
                graph.addDependency(dependent.toString(), value.toString())
            }   
        }
    }
    return graph.overallOrder().map((value: string) => +value)
}

for (let order of orders) {
    if (isOrderValid(order)) {
        sum += order[Math.floor(order.length / 2)]
    } else {
        invalidOrders.push(order)
    }
}

for (let order of invalidOrders) {
    let sortedOrder: number[] = sortWithGraph(order)
    if (isOrderValid(sortedOrder)) {
        invalidSum += sortedOrder[Math.floor(sortedOrder.length / 2)]
    }
}

console.log("Result:", sum)
console.log("Sorted Result:", invalidSum)