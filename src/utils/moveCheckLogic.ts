export const isColumnOfFour = (
    newBoard: string[],
    boardSize: number,
    formulaForColumnOfFour: number
) => {
    for (let i: number = 0; i <= formulaForColumnOfFour; i++) {
        const isColumnOfFour: number[] = [
            i,
            i + boardSize,
            i + boardSize * 2,
            i + boardSize * 3,
        ]

        const decidedColor: string = newBoard[i]
        const isBlank: boolean = newBoard[i] === ""

        if (isColumnOfFour.every((candy: number) => newBoard[candy] === decidedColor && !isBlank)) {
            isColumnOfFour.forEach((candy: number) => newBoard[candy] = "")
            return true
        }
    }
}

export const isColumnOfThree = (
    newBoard: string[],
    boardSize: number,
    formulaForColumnOfThree: number
) => {
    for (let i: number = 0; i <= formulaForColumnOfThree; i++) {
        const isColumnOfThree: number[] = [
            i,
            i + boardSize,
            i + boardSize * 2,
        ]

        const decidedColor: string = newBoard[i]
        const isBlank: boolean = newBoard[i] === ""

        if (isColumnOfThree.every((candy: number) => newBoard[candy] === decidedColor && !isBlank)) {
            isColumnOfThree.forEach((candy: number) => newBoard[candy] = "")
            return true
        }
    }
}

export const checkForRowOfFour = (
    newBoard: string[],
    boardSize: number,
    invalidMoves: number[]
) => {
    for (let i: number = 0; i < boardSize * boardSize; i++) {
        const rowOfFour = [i, i + 1, i + 2, i + 3]
        const decidedColor: string = newBoard[i]
        const isBlank: boolean = newBoard[i] === ""

        if (invalidMoves.includes(i)) continue
        if (rowOfFour.every((candy: number) => newBoard[candy] === decidedColor && !isBlank)) {
            rowOfFour.forEach((candy: number) => newBoard[candy] = "")
            return true
        }
    }
}