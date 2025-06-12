import React, {useState} from 'react';
export const CellView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>CELL - Cell - value, formula, format, validatio</h2><p>value</p></div>
};
export default CellView;
