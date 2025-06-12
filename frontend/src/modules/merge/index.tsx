import React, {useState} from 'react';
export const MergeView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>MERGE - Merge - 3-way, conflict, auto-resolve</h2><p>base</p></div>
};
export default MergeView;
