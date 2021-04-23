const jwt = require('jsonwebtoken');
require('dotenv').config();
const config = require('../db');
const connection = config.connection;

exports.getPosts = (req, res, next) => {
	connection.query(
		`
		SELECT p.id, p.author, p.title, p.content, p.img, p.date_time, u.username, t.tag AS tag, count(l.liker) AS likersCount
		FROM post AS p
		JOIN users AS u ON p.author = u.id
		JOIN tags AS t ON P.tag = t.id
		LEFT JOIN likes AS l ON p.id = l.postid
		GROUP BY p.id
		`,
		(err, results) => {
			if (err) {
				console.log(err.message);
			}

			res.send(results);
		}
	);
};

exports.getComments = (req, res, next) => {
	connection.query(
		`DELETE FROM comments WHERE post NOT IN(SELECT id FROM post WHERE id is not null) `,
		(err, results) => {
			if (err) {
				console.log(err.message);
			} else {
				res.send(results);
			}
		}
	);
	connection.query(
		`SELECT comments.content,comments.date, users.username 
	FROM comments 
	INNER JOIN users ON comments.author = users.id
	WHERE ${req.params.id} = comments.post
	
	 `,
		(err, results) => {
			res.send(results);
		}
	);
};

exports.createPost = (req, res, next) => {
	const { content, token, title, imgUrl, tag } = req.body;
	const date = Date.now();
	const formatedDate = new Intl.DateTimeFormat().format(date);
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	let tempTag;
	connection.query(
		'INSERT IGNORE INTO tags (tag) VALUES (?)',
		[tag],
		(err, results) => {
			if (results) {
				console.log('tag created');
			} else {
				throw err;
			}
		}
	);
	connection.query('SELECT * FROM tags', (err, results) => {
		if (results) {
			for (const item of results) {
				if (item.tag === tag) {
					tempTag = item.id;
				}
			}
			connection.query(
				`INSERT INTO post (content,title,img, author, date_time,tag) VALUES (?,?,?,?,?,?) `,
				[content, title, imgUrl, decoded.id, formatedDate, tempTag],
				(err, results) => {
					if (results) {
						res.send(results);
					} else {
						res.send(err.code);
					}
				}
			);
		} else {
			throw err;
		}
	});
};

exports.deletePost = (req, res) => {
	const postId = req.params.id;
	const token = req.body.token;
	const user_id = req.body.user_id;
	const decoded = jwt.verify(token, process.env.JWT_SECRET);

	if (user_id === decoded.id) {
		connection.query(
			'DELETE FROM post WHERE id = ?',
			postId,
			(err, results) => {
				if (results) {
					res.send({ message: 'deleted' });
				} else {
					console.log(err);
				}
			}
		);
	} else {
		console.log("Cannot delete another user's post");
	}
};

//Like a post
exports.likePost = (req, res) => {
	connection.query(
		`DELETE FROM likes WHERE postid NOT IN(SELECT id FROM post WHERE id is not null) `,
		(err, results) => {
			if (err) {
				console.log(err.message);
			}
		}
	);
	connection.query(
		`SELECT * FROM likes
	WHERE postid = ${req.params.id} AND liker = ${req.body.user_id} `,
		(err, results) => {
			if (err) {
				console.log(err);
			}
			if (results.length === 0) {
				connection.query(
					`INSERT INTO likes (postid, liker) VALUES (${req.params.id}, ${req.body.user_id})`,
					(err, results) => {
						if (err) {
							console.log(err.message);
						} else {
							res.send(results);
						}
					}
				);
			}
			if (results.length > 0) {
				connection.query(
					`DELETE FROM likes
					WHERE postid = ${req.params.id} AND liker = ${req.body.user_id} `,
					(err, results) => {
						if (err) {
							console.log(err);
						}
						res.send('unliked');
					}
				);
			}
		}
	);
};

// Comment a post
exports.commentPost = (req, res) => {
	const postId = req.body.id;
	const token = req.body.token;
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const date = Date.now();
	const formatedDate = new Intl.DateTimeFormat().format(date);

	connection.query(
		'INSERT INTO comments (author,content,post,date) VALUES (?,?,?,?)',
		[decoded.id, req.body.content, parseInt(postId), formatedDate],
		(err, results) => {
			if (results) {
				res.send(results);
			} else {
				res.send(err.code);
			}
		}
	);
};
