var mongoose = require("mongoose");

User = mongoose.model('User');

function UserObj(){
	var _this = this;
		this.create= function(req, res){
			var user = new User({name: req.body.name});
			user.save(function(err, user){
				if(err){
					console.log(err+"  ====PErmission Denied+++")
				}else{
					console.log('User was INSERTED INTO DATABSE', user);
					res.json(user);
				}
			});

		}
		this.pullUser= function(req ,res){
			User.findOne({name: req.body.name},
				function(err, user){
					if(err){
						console.log("cant find USER"+err);
					}else if(!user){
						_this.create(req, res);
					}else{
						res.json(user);
					}
				});
		}
		this.show=function(req, res){
			User.findOne({_id: req.body.id},
				function(err, user){
					if(err){
						console.log("CANNOT SHOW USER"+ err)
					}else{
						res.json(user);
					}
				});
		}
		this.index= function(req, res){
			res.json({key: 'value'})
		}
	}

module.exports = (function(){
return new UserObj();
})();




