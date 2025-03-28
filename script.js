const jwt = require('jsonwebtoken');

const secret = 'your_secret_key'; // Replace with your actual secret key

const encrypt = (payload) => {
  // Create a JWT with an expiry time of 1 hour
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};

// Function to verify the token and check for expiry
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    return { error: 'Token is expired or invalid' };
  }
};

// Testing the implementation
const testPayload = { userId: 123 };
const token = encrypt(testPayload);
console.log('Generated Token:', token);

const verificationResult = verifyToken(token);
console.log('Verification Result:', verificationResult);

module.exports = { encrypt, verifyToken };
