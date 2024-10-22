import React, { useState } from 'react';
import axios from 'axios';

function RuleForm() {
  const [ruleString, setRuleString] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/rules/create', { ruleString });
      alert('Rule created successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={ruleString}
        onChange={(e) => setRuleString(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Enter rule string"
      />
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Create Rule</button>
    </form>
  );
}

export default RuleForm;
