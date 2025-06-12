import React, {useState} from 'react';
export const ApiView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>API - API - REST for commit, branch, merge</h2><p>POST commit</p></div>
};
export default ApiView;
