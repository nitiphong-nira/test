// server.js - ไฟล์เดียวจบ
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'OK', test: 'SINGLE FILE TEST' });
});

// Webhook
app.post('/webhook', (req, res) => {
  console.log('🎯 WEBHOOK HIT - SINGLE FILE');
  res.status(200).json({ status: 'OK', test: 'webhook' });
});

// Everything else
app.all('*', (req, res) => {
  console.log(`📨 ${req.method} ${req.path}`);
  res.status(200).json({ status: 'OK', path: req.path });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ SINGLE FILE Server on port ${PORT}`);
});
