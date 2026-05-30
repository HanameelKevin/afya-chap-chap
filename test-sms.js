
require('dotenv').config({ path: './backend/.env' });
const { sendSMS } = require('./backend/services/smsService');

async function testSMS() {
  const testPhone = '+254700000000'; // Replace with your phone number for testing
  const testMessage = "Afya Chap Chap: This is a test of your live SMS integration!";

  console.log('--- SMS Test Start ---');
  console.log('Config found:', {
    hasKey: !!process.env.AFRICAS_TALKING_API_KEY,
    username: process.env.AFRICAS_TALKING_USERNAME
  });

  const response = await sendSMS(testPhone, testMessage);
  
  if (response.simulated) {
    console.log('ℹ️  Running in SIMULATION mode (Keys missing in .env)');
  } else if (response.success) {
    console.log('🚀 SUCCESS: Real SMS sent!');
  } else {
    console.log('❌ FAILED:', response.error);
  }
  console.log('--- SMS Test End ---');
}

testSMS();
