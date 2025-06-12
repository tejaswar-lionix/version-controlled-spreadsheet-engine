import React, {useState} from 'react';
export const SheetView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>SHEET - Sheet - create, delete, rename, copy</h2><p>create</p></div>
};
export default SheetView;
