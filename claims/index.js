import express from 'express';
import claimProcessor from './claim.js'

const router = express.Router();

// Route to file a claim
router.post('/file', async (req, res) => {
  try {
    const { claimId, details } = req.body;
    await claimProcessor.fileClaim(claimId, details);
    res.send(`Claim ${claimId} has been filed.`);
  } catch (error) {
    res.status(500).send(`Error filing claim ${claimId}: ${error.message}`);
  }
});

// Route to review a claim
router.post('/review', async (req, res) => {
  try {
    const { claimId } = req.body;
    await claimProcessor.reviewClaim(claimId);
    res.send(`Claim ${claimId} is under review.`);
  } catch (error) {
    res.status(500).send(`Error reviewing claim ${claimId}: ${error.message}`);
  }
});

// Route to approve a claim
router.post('/approve', async (req, res) => {
  try {
    const { claimId } = req.body;
    await claimProcessor.approveClaim(claimId);
    res.send(`Claim ${claimId} has been approved.`);
  } catch (error) {
    res.status(500).send(`Error approving claim ${claimId}: ${error.message}`);
  }
});

// Route to reject a claim
router.post('/reject', async (req, res) => {
  try {
    const { claimId } = req.body;
    await claimProcessor.rejectClaim(claimId);
    res.send(`Claim ${claimId} has been rejected.`);
  } catch (error) {
    res.status(500).send(`Error rejecting claim ${claimId}: ${error.message}`);
  }
});

// Route to check claim status
router.get('/status/:claimId', async (req, res) => {
  try {
    const { claimId } = req.params;
    const statusMessage = await claimProcessor.getClaimStatus(claimId);
    res.send(statusMessage);
  } catch (error) {
    res.status(500).send(`Error getting status for claim ${claimId}: ${error.message}`);
  }
});

// Event listeners for claim stages
claimProcessor.on('filed', (claimId) => {
  console.log(`Claim ${claimId} has been filed.`);
});

claimProcessor.on('underReview', (claimId) => {
  console.log(`Claim ${claimId} is under review.`);
});

claimProcessor.on('approved', (claimId) => {
  console.log(`Claim ${claimId} has been approved.`);
});

claimProcessor.on('rejected', (claimId) => {
  console.log(`Claim ${claimId} has been rejected.`);
});

export default router;
