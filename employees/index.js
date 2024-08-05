import { Router } from 'express';

const router = Router();

let employees = [
  { empCode: '001', empName: 'John Doe', designation: 'Developer', baseLocation: 'New York', passportNo: '123456' },
  { empCode: '002', empName: 'Jane Smith', designation: 'Designer', baseLocation: 'San Francisco', passportNo: '789101' },
];

// Get all employee details
router.get('/', (req, res) => res.json(employees));

// Get employee details by empCode
router.get('/:empCode', (req, res) => {
  const { empCode } = req.params;
  const employee = employees.find(emp => emp.empCode === empCode);
  employee ? res.json(employee) : res.status(404).json({ message: 'Employee not found' });
});

// Add a new employee
router.post('/', (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// Modify baseLocation for a specific employee
router.put('/:empCode', (req, res) => {
  const { empCode } = req.params;
  const { baseLocation } = req.body;
  const employee = employees.find(emp => emp.empCode === empCode);
  if (employee) {
    employee.baseLocation = baseLocation;
    res.json(employee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

// Delete one employee record
router.delete('/:empCode', (req, res) => {
  const { empCode } = req.params;
  const employeeIndex = employees.findIndex(emp => emp.empCode === empCode);
  if (employeeIndex !== -1) {
    const [deletedEmployee] = employees.splice(employeeIndex, 1);
    res.json(deletedEmployee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

export default router;
