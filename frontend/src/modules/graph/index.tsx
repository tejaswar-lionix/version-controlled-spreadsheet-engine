import React, {useState} from 'react';
export const GraphView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>GRAPH - Dependency graph - DAG, topo sort, cycle</h2><p>DAG</p></div>
};
export default GraphView;
