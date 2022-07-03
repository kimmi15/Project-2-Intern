//College Model

// { name: { mandatory, unique, example iith}, 
// fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`},
//  logoLink: {mandatory}, isDeleted: {boolean, default: false} }

const mongoose = require('mongoose')
const userSchema = new mongoose.Schema( {  
    name: { type: String, 
		    unique: true,
			required: true,
		    trim: true }, 
	fullName: { type: String, 
		        trim: true,
				required: true,
			    },
	logoLink: { type: String,
	            required: true,
			     },
	isDeleted: {type: Boolean, 
	             default: false},


}, { timestamps: true });


module.exports = mongoose.model('colleges', userSchema)



