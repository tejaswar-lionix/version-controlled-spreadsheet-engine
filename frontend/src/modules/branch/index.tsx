import React, {useState} from 'react';
export const BranchView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>BRANCH - Branch management - create, switch, list</h2><p>main</p></div>
};
export default BranchView;
