
async function testVerification() {
  const url = 'http://localhost:5000/api/auth/verify-professional';
  
  const testCases = [
    { name: 'Valid Doc License', data: { licenseNumber: 'MOH-789-DOC', healthWorkerId: '65e000000000000000000001' } },
    { name: 'Invalid License', data: { licenseNumber: 'ROGUE-123', healthWorkerId: '65e000000000000000000001' } }
  ];

  for (const test of testCases) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(test.data)
      });
      const result = await response.json();
      console.log(`Test: ${test.name}`);
      console.log(`Result: ${result.success ? '✅ Success' : '❌ Failed'} - ${result.message}`);
    } catch (e) {
      console.error(`Error in ${test.name}:`, e.message);
    }
  }
}

testVerification();
