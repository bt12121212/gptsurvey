module.exports = async (req, res) => {
    const surveyData = req.body;
  
    const response = await fetch("https://native-chow-30493.kv.vercel-storage.com/set/user_1_session/session_token_value", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer AXcdASQgN2NkNGQyMzYtYjE5Mi00NGZmLWIxODItNmMyNzg3MjgxOWQwNzE5Zjk3ZjMyOWNhNDkyMmE0MWUzYTY1MTUxNjI5MjY="
      },
      body: JSON.stringify(surveyData)
    });
  
    if (response.ok) {
      res.status(200).send('Data saved successfully');
    } else {
      res.status(500).send('Error saving data');
    }
  };