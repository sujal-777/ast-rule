const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ruleRoutes = require('./routes/ruleRoutes');

const app = express();

require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
app.use('/api/rules', ruleRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
