import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import employeeRoutes from './employees/index.js';
import accountsRoutes from './accounts/index.js';
import bankingRoutes from './banking/index.js';
import claimRoutes from './claims/index.js'

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/employees', employeeRoutes);
app.use('/accounts', accountsRoutes);
app.use('/banking', bankingRoutes);
app.use('/claims', claimRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

