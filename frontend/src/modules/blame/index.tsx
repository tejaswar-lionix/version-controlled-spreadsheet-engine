import React, {useState} from 'react';
export const BlameView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>BLAME - Blame - per cell history, author</h2><p>blame</p></div>
};
export default BlameView;
