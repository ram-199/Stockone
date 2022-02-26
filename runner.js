const cypress = require('cypress')
const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'ramu36985@gmail.com',
		pass: "ramu1234"
	}
});

cypress
  .run({
    // the path is relative to the current working directory
    spec: 'cypress/integration/routing.js',
  })
  .then((results) => {
    let today = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString(); // 11:18:48 AM
	let mailDetails = {
		from: 'ramu36985@gmail.com@gmail.com',
		to: 'naaperuram7@gmail.com',
		subject: today + ' test Report',
		text: "sample test",
		attachments :[{
			filename:time+".html",
			path:"cypress/reports/index.html"
		}]
	};
	mailTransporter.sendMail(mailDetails, function(err, data) {
		if(err) {
			console.log(err);
		} else {
			console.log('Email sent successfully');
		}
	});
  })
  .catch((err) => {
    console.error(err)
  })