import React, {useState} from 'react';
export const Version_storeView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>VERSION_STORE - Version store - commits, snapshots, delt</h2><p>commit</p></div>
};
export default Version_storeView;
