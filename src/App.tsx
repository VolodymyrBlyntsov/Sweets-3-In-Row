import React, { useEffect } from 'react'
import Board from './components/Board'
import { updateBoard } from './store'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { createBoard } from './utils/createBoard'
import { formulaForColumnOfFour, formulaForColumnOfThree } from './utils/formulas'
import { isColumnOfFour, isColumnOfThree } from './utils/moveCheckLogic'

const App = () => {

  const dispatch = useAppDispatch()

  const board = useAppSelector(({ candyCrush: { board } }) => board)
  const boardSize = useAppSelector(({ candyCrush: { boardSize } }) => boardSize)

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)))
  }, [boardSize, dispatch])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board]
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize))
      isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize))
      dispatch(updateBoard(newBoard))
    }, 150)
    return () => clearTimeout(timeout)
  }, [dispatch, board, boardSize])

  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  )
}

export default App
