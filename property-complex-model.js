// Roommate Group Model

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var PropertyComplexSchema = new Schema({

	invite: {
		token: { type: String, required: true, unique: true, index: true }
		, pending: { type: Boolean, default: true }
		, disabledOn: Date
	}

	, name: String

	, geo: {
		loc: { type: Object, index: '2d' }
		, zipcode: String
		, state_short: String
		, address: String
	}

	, created: { type: Date, default: Date.now }

	, updated: { type: Date, default: Date.now }

});

// Unique field plugin (makes better error messages)
PropertyComplexSchema.plugin(uniqueValidator, { message: 'There is already a property complex using {VALUE} for its {PATH}.'})

module.exports = mongoose.model('PropertyComplex', PropertyComplexSchema);