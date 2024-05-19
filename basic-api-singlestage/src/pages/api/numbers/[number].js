export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(400).json({ error: 'Bad Request. Only GET method is allowed.' });
    }

    const { number } = req.query;
  
    const numberToWordMap = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
    };
  
    const word = numberToWordMap[number];
  
    if (word) {
      res.status(200).json({ word });
    } else {
      res.status(400).json({ error: 'Invalid number' });
    }
  }
  