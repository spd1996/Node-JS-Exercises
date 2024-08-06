import EventEmitter from 'events';

class ClaimProcessor extends EventEmitter {
  constructor() {
    super();
    this.claims = {};
  }

  async fileClaim(claimId, details) {
    if (this.claims[claimId]) {
      console.log(`Claim ${claimId} already exists.`);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 100));

    this.claims[claimId] = { ...details, status: 'filed' };
    this.emit('filed', claimId);
  }

  async reviewClaim(claimId) {
    if (!this.claims[claimId] || this.claims[claimId].status !== 'filed') {
      console.log(`Claim ${claimId} is not in the 'filed' status or does not exist.`);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 100));

    this.claims[claimId].status = 'under review';
    this.emit('underReview', claimId);
  }

  async approveClaim(claimId) {
    if (!this.claims[claimId] || this.claims[claimId].status !== 'under review') {
      console.log(`Claim ${claimId} is not in the 'under review' status or does not exist.`);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 100));

    this.claims[claimId].status = 'approved';
    this.emit('approved', claimId);
  }

  async rejectClaim(claimId) {
    if (!this.claims[claimId] || this.claims[claimId].status !== 'under review') {
      console.log(`Claim ${claimId} is not in the 'under review' status or does not exist.`);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 100));

    this.claims[claimId].status = 'rejected';
    this.emit('rejected', claimId);
  }

  async getClaimStatus(claimId) {
    await new Promise(resolve => setTimeout(resolve, 100));

    if (!this.claims[claimId]) {
      return `Claim ${claimId} does not exist.`;
    }
    return `Claim ${claimId} is currently in '${this.claims[claimId].status}' status.`;
  }
}

export default new ClaimProcessor();
