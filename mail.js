var nodemailer = require('nodemailer');
transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'qianxussui@gmail.com',
        pass: 'zqxssui2015'
    }
});


var app = require('http').createServer(handler)
	, io = require('socket.io').listen(app)
	, fs = require('fs')
app.listen(8888);

function handler (req, res) {
	fs.readFile(__dirname + '/contact.html',
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading index.html');
			}

			res.writeHead(200);
			res.end(data);
		});

}

var user_id = 0;
io.sockets.on('connection', function (socket) {
		socket.emit('user_id', user_id++);
		socket.on('message', function(user_id, message) {
			//io.sockets.emit("message_sent", user_id, message);
			transporter.sendMail({
			    from: 'qianxussui@gmail.com',
			    to: 'vividzengqx@gmail.com',
			    subject: 'message',
			    text: message
			});
		})
	});