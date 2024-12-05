let input: string = (await Bun.file("./day4/input").text())
let grid: string[][] = input.split("\n").map((value: string) => Array.from(value))

let count: number = 0
let countTwo: number = 0

for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid.length; column++) {
        if (column + 3 < grid.length && grid[row][column] == "X" && grid[row][column + 1] == "M" && grid[row][column + 2] == "A" && grid[row][column + 3] == "S") {
            count++
        }
        if (column + 3 < grid.length && grid[row][column] == "S" && grid[row][column + 1] == "A" && grid[row][column + 2] == "M" && grid[row][column + 3] == "X") {
            count++
        }
        if (row + 3 < grid.length && grid[row][column] == "X" && grid[row + 1][column] == "M" && grid[row + 2][column] == "A" && grid[row + 3][column] == "S") {
            count++
        }
        if (row + 3 < grid.length && grid[row][column] == "S" && grid[row + 1][column] == "A" && grid[row + 2][column] == "M" && grid[row + 3][column] == "X") {
            count++
        }
        if (row + 3 < grid.length && column + 3 < grid.length && grid[row][column] == "X" && grid[row + 1][column + 1] == "M" && grid[row + 2][column + 2] == "A" && grid[row + 3][column + 3] == "S") {
            count++
        }
        if (row + 3 < grid.length && column + 3 < grid.length && grid[row][column] == "S" && grid[row + 1][column + 1] == "A" && grid[row + 2][column + 2] == "M" && grid[row + 3][column + 3] == "X") {
            count++
        }
        if (row - 3 >= 0 && column + 3 < grid.length && grid[row][column] == "X" && grid[row - 1][column + 1] == "M" && grid[row - 2][column + 2] == "A" && grid[row - 3][column + 3] == "S") {
            count++
        }
        if (row - 3 >= 0 && column + 3 < grid.length && grid[row][column] == "S" && grid[row - 1][column + 1] == "A" && grid[row - 2][column + 2] == "M" && grid[row - 3][column + 3] == "X") {
            count++
        }

        if (row + 2 < grid.length && column + 2 < grid.length && grid[row + 1][column + 1] == "A" && grid[row][column] == "M" && grid[row + 2][column + 2] == "S" && grid[row][column + 2] == "S" && grid[row + 2][column] == "M") {
            countTwo++
        }
        if (row + 2 < grid.length && column + 2 < grid.length && grid[row + 1][column + 1] == "A" && grid[row][column] == "M" && grid[row + 2][column + 2] == "S" && grid[row][column + 2] == "M" && grid[row + 2][column] == "S") {
            countTwo++
        }
        if (row + 2 < grid.length && column + 2 < grid.length && grid[row + 1][column + 1] == "A" && grid[row][column] == "S" && grid[row + 2][column + 2] == "M" && grid[row][column + 2] == "S" && grid[row + 2][column] == "M") {
            countTwo++
        }
        if (row + 2 < grid.length && column + 2 < grid.length && grid[row + 1][column + 1] == "A" && grid[row][column] == "S" && grid[row + 2][column + 2] == "M" && grid[row][column + 2] == "M" && grid[row + 2][column] == "S") {
            countTwo++
        }
    }
}

console.log("Result:", count)
console.log("Result Two:", countTwo)