// Correction : utiliser SHA-256 au lieu de MD5
const crypto = require('crypto');

function hashPassword(password) {
    // Meilleure pratique : utiliser un algorithme fort (SHA-256) avec salt
    // Idéalement, utiliser bcrypt ou argon2
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.createHash('sha256').update(salt + password).digest('hex');
    return `${salt}:${hash}`;
}

// Correction : utiliser une regex simple et efficace (sans ReDoS)
function validateEmail(email) {
    // Regex simplifiée et sûre
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

module.exports = { hashPassword, validateEmail };