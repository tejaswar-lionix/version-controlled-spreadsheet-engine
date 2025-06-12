import React, {useState} from 'react';
export const DiffView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>DIFF - Diff - cell-level, sheet diff, range</h2><p>cell diff</p></div>
};
export default DiffView;
