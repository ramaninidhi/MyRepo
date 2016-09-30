module.exports = function(app, passport) {

	// show the login form
	app.get('/normalLogIn', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('/normalLogIn.jade', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/normalLogIn', passport.authenticate('local-login', {
		successRedirect : '/normalUser', // redirect to the secure profile section
		failureRedirect : '/normalLogIn', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));


	app.get('/signUp', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('signUp.jade', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/normalUser', isLoggedIn, function(req, res) {
		res.render('normalUser.jade', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// FACEBOOK ROUTES =====================
	// =====================================
	// route for facebook authentication and login
	app.get('/auth/facebook', passport.authenticate('facebook'));

	// handle the callback after facebook has authenticated the user
	app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: 'http://localhost:8081/normalUser',
        failureRedirect: '/'
    }),
    function(req, res) {
        res.redirect('/normalUser');
    });

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
