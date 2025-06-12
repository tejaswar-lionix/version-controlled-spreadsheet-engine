import React, {useState} from 'react';
export const ParserView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>PARSER - Formula parser - tokenizer, AST, 100+ fu</h2><p>SUM</p></div>
};
export default ParserView;
