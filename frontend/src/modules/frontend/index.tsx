import React, {useState} from 'react';
export const FrontendView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>FRONTEND - Frontend - grid, formula bar, diff viewe</h2><p>grid</p></div>
};
export default FrontendView;
