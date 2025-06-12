import React, {useState} from 'react';
export const EngineView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ENGINE - Calc engine - recalc, volatile, array, i</h2><p>recalc</p></div>
};
export default EngineView;
