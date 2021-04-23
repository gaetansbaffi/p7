const jwt = require('jsonwebtoken');
require('dotenv').config();
const config = require('../db');
const connection = config.connection;

exports.getTags = (req, res, next) => {
	connection.query(
		`DELETE FROM tags WHERE id NOT IN(SELECT tag FROM post WHERE tag is not null) `,
		(err, results) => {
			if (err) {
				console.log(err.message);
			} else {
				console.log(results);
			}
		}
	);
	connection.query(`SELECT * from tags`, (err, results) => {
		if (err) {
			console.log(err);
		} else {
			res.send(results);
		}
	});
};
