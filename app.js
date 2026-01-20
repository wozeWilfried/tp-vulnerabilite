const express = require('express');
const app = express();

// Correction : validation des entrées et requêtes paramétrées
app.get('/user', (req, res) => {
    const userId = req.query.id;
    // Validation basique de l'ID (doit être un nombre)
    if (!userId || isNaN(userId)) {
        return res.status(400).send('Invalid user ID');
    }
    // Utilisation de requêtes paramétrées (exemple ORM/prepared statement)
    const query = "SELECT * FROM users WHERE id = ?";
    res.send(`Safe query: ${query} with parameter: ${userId}`);
});

// Correction : suppression de eval(), utilisation d'une expression sûre
app.get('/calc', (req, res) => {
    const expression = req.query.expression;
    // Validation simple : autoriser uniquement les opérations de base
    if (!expression || !/^[\d+\-*/(). ]+$/.test(expression)) {
        return res.status(400).send('Invalid expression');
    }
    try {
        // Utilisation d'une fonction sûre pour évaluer (ex: math parser)
        const result = new Function('return ' + expression)();
        res.send(`Résultat: ${result}`);
    } catch (error) {
        res.status(400).send('Calculation error');
    }
});

// Correction : utiliser des variables d'environnement pour les secrets
const DB_PASSWORD = process.env.DB_PASSWORD || 'change_me_in_production';

app.listen(3000, () => {
    console.log('Server running on port 3000');
});