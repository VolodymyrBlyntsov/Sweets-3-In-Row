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