const config = require('../db');
const bcrypt = require('bcryptjs');
const connection = config.connection;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const maxAge = 259200;

exports.createUser = (req, res, next) => {
	const { username, firstName, lastName, job, email, password } = req.body;
	const newPass = bcrypt.hashSync(password, 8);
	if (!username || !firstName || !lastName || !job || !email || !password) {
		return res.json({ message: 'merci de remplir tous les champs' });
	}
	connection.query(
		'INSERT INTO users (username ,firstname, lastname, job, email, password) VALUES (?,?,?,?,?,?)',
		[username, firstName, lastName, job, email, newPass],
		(err, results) => {
			if (results) {
				res.send(results);
			} else {
				console.log(err.code);
				res.json({ message: err.code });
			}
		}
	);
};

exports.logout = (req, res) => {
	res.clearCookie('token', { path: '/', domain: 'localhost' });
	res.clearCookie('id', { path: '/', domain: 'localhost' });

	res.json({ status: 'ok' });
};

exports.login = (req, res, next) => {
	const { email, password } = req.body;
	console.log(req.body);
	if (!email || !password) {
		res.json({ message: 'email ou password manquant' });
	} else {
		connection.query(
			'select * from users where email = ? ',
			[email],

			(err, results) => {
				if (results.length > 0) {
					if (bcrypt.compareSync(password, results[0].password)) {
						const token = jwt.sign(
							{
								id: results[0].id,
								email,
								username: results[0].username,
								role: results[0].role,
							},
							process.env.JWT_SECRET
						);
						res.cookie('token', token, {
							httpOnly: false,
							path: '/',
							domain: 'localhost',
						});
						res.cookie('id', results[0].id, {
							httpOnly: false,
							path: '/',
							domain: 'localhost',
						});

						res.status(200).json({ status: 'connecté', token });
					} else {
						res.json({
							status: 'erreur',
							message: 'Informations de connexion erronées, veuillez réessayer',
						});
					}
				}
			}
		);
	}
};

exports.showProfil = (req, res) => {
	const id = req.params.id;
	connection.query('select * from users where id = ?', [id], (err, result) => {
		if (err) console.log(err);
		else {
			res.send(result[0]);
		}
	});
};
