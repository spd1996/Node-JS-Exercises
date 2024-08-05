import express from 'express';
import bodyParser from 'body-parser';
import employeeRoutes from './employees/index.js';
import accountsRoutes from './accounts/index.js';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/employees', employeeRoutes);
app.use('/accounts', accountsRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
