	
	/*
	 * GET Calculator home page.
	 */
	
	exports.calculator = function(req, res){
			res.render('calculator');
		};
		
	/*
	 * POST Calculator method for addition
	 */
	
	exports.add = function(req, res){
		var n1 = parseFloat(req.param("fnum"));
		var n2 = parseFloat(req.param("snum"));
		
		if(isNaN(n1) || isNaN(n2) )
			res.send(' ');
		
		var n3 = n1 + n2;
		console.log("Result: " + n3);
		res.send(' ' + n3);
	
		};
	
	/*
	 * POST Calculator method for subtraction
	 */

	exports.sub = function(req, res){
		var n1 = parseFloat(req.param("fnum"));
		var n2 = parseFloat(req.param("snum"));
		var n3 = 0;

		if(isNaN(n1) || isNaN(n2) )
			res.send(' ');
		
		if(n1 > n2)
			n3 = n1 - n2;
		else
			n3 = n2 - n1;
		
		res.send(' ' + n3);

		};	
		
	/*
	 * POST Calculator method for multiplication
	 */

	exports.mul = function(req, res){
		var n1 = parseFloat(req.param("fnum"));
		var n2 = parseFloat(req.param("snum"));
		
		if(isNaN(n1) || isNaN(n2) )
			res.send(' ');
		
		var n3 = n1 * n2;
		
		res.send(' ' + n3);

		};	
	
	/*
	 * POST Calculator method for division
	 */

	exports.div = function(req, res){
		var n1 = parseFloat(req.param("fnum"));
		var n2 = parseFloat(req.param("snum"));
		var n3 = 0;
		
		if(isNaN(n1) || isNaN(n2) )
			res.send(' ');
		
		console.log(n1);
		console.log(n2);
		
		if (n2 !== 0)
			n3 = n1/n2;
		else
			n3 = "Cannot divide by 0";
		
		console.log("Result: " + n3);
		res.send(' ' + n3);

		};

		