const Rule = require('../models/Rule');

// Create a new rule (AST)
exports.createRule = async (req, res) => {
  const { ruleString } = req.body;
  
  // Create AST (simplified)
  const newRule = new Rule({ ruleString, ast: parseRuleString(ruleString) });

  try {
    const savedRule = await newRule.save();
    res.status(201).json(savedRule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Combine multiple rules (AST)
exports.combineRules = async (req, res) => {
  const { ruleIds } = req.body;
  try {
    const rules = await Rule.find({ _id: { $in: ruleIds } });
    const combinedAST = combineRuleASTs(rules.map(rule => rule.ast));
    res.json({ combinedAST });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Evaluate a rule against input data
exports.evaluateRule = async (req, res) => {
  const { ruleId, userData } = req.body;
  try {
    const rule = await Rule.findById(ruleId);
    const result = evaluateAST(rule.ast, userData);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Helper functions to parse, combine, and evaluate AST
function parseRuleString(ruleString) {
  // Logic to parse string into AST (example simplified)
  return { type: 'operator', operator: 'AND', conditions: [] };
}

function combineRuleASTs(asts) {
  // Combine multiple ASTs (example simplified)
  return { type: 'operator', operator: 'OR', conditions: asts };
}

function evaluateAST(ast, data) {
  // Evaluate AST (simplified)
  return true; // or false based on logic
}
