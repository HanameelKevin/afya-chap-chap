
async function testGemini() {
  const url = 'http://localhost:5000/api/ai/diagnose';
  const data = {
    vitals: {
      bp: '140/90',
      hb: '10.5'
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log('Gemini Insight:', result.insight);
  } catch (error) {
    console.error('Error testing Gemini:', error.message);
  }
}

testGemini();
