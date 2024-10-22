import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RuleList() {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    const fetchRules = async () => {
      const response = await axios.get('http://localhost:5000/api/rules');
      setRules(response.data);
    };
    fetchRules();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Rules</h2>
      <ul>
        {rules.map((rule) => (
          <li key={rule._id} className="p-2 border-b">
            {rule.ruleString}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RuleList;
