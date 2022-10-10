import React, { useEffect } from 'react'
import { updateBoard } from './store'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { createBoard } from './utils/createBoard'

const App = () => {

  const dispatch = useAppDispatch()

  const board = useAppSelector(({candyCrush: { board } }) => board)
  const boardSize = useAppSelector(({candyCrush: { boardSize } }) => boardSize)

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)))
  }, [boardSize, dispatch])
  

  return (
    <div>App</div>
  )
}

export default App
