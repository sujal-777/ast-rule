import React from 'react';
import RuleForm from './components/RuleForm';
import RuleList from './components/RuleList';

function App() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Rule Engine</h1>
      <RuleForm />
      <RuleList />
    </div>
  );
}

export default App;
