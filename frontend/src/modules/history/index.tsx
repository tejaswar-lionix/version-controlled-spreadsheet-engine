import React, {useState} from 'react';
export const HistoryView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>HISTORY - History - log, revert, checkout, tag</h2><p>log</p></div>
};
export default HistoryView;
