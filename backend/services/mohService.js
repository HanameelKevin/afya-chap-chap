// backend/services/mohService.js
/**
 * Mock Service to simulate connection with Kenya Ministry of Health (MoH) Database
 */

const VALID_MOH_LICENSES = ['MOH-789-DOC', 'MOH-123-DOC', 'MOH-456-NRS'];
const VALID_NURSE_IDS = ['NURSE-K-001', 'NURSE-K-002'];

async function verifyProfessionalCredentials(licenseNumber, nurseId) {
  // In production, this would be an Axios call to the MoH API
  console.log(`[MoH Verification] Checking License: ${licenseNumber}, NurseID: ${nurseId}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      const isValidLicense = licenseNumber && VALID_MOH_LICENSES.includes(licenseNumber);
      const isValidNurse = nurseId && VALID_NURSE_IDS.includes(nurseId);

      if (isValidLicense || isValidNurse) {
        resolve({
          success: true,
          status: 'verified',
          message: 'Professional credentials verified via MoH Database'
        });
      } else {
        resolve({
          success: false,
          status: 'rejected',
          message: 'Invalid MoH credentials. Please check your license number.'
        });
      }
    }, 1500); // Simulate network delay
  });
}

module.exports = { verifyProfessionalCredentials };
