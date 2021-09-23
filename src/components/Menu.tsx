import React from 'react';
import Header from './styles/Header.styled';

interface Props {
  rows: number,
  cols: number,
  setRows: React.Dispatch<React.SetStateAction<number>>,
  setCols: React.Dispatch<React.SetStateAction<number>>
}

export const Menu: React.FC<Props> = ({ rows, cols, setRows, setCols }) => {
  return (
    <Header>
      <button onClick={() => setRows(row => row - 1)}>{"-"}</button>
      <input type="range" onChange={(e) => setRows(parseInt(e.target.value))} />
      <button onClick={() => setRows(row => row + 1)}>{"+"}</button>

      <button onClick={() => setCols(col => col - 1)}>{"-"}</button>
      <input type="range" onChange={(e) => setCols(parseInt(e.target.value))}/>
      <button onClick={() => setCols(col => col + 1)}>{"+"}</button>
    </Header>
  )
}
