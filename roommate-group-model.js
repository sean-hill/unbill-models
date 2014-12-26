// Roommate Group Model

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var RoommateGroupSchema = new Schema({

	leader: { type: Schema.ObjectId, ref: "User" }

	, roommates: [ { type: Schema.ObjectId, ref: "User" } ]

	, groupSize: { type: Number, required: true }

	, invite: {
		token: { type: String, required: true, unique: true, index: true }
		, pending: { type: Boolean, default: true }
		, disabledOn: Date
	}

	, propertyComplex: {
		token: String
		, apartmentNumber: String
	}

	, created: { type: Date, default: Date.now }

	, updated: { type: Date, default: Date.now }

});

// Unique field plugin (makes better error messages)
RoommateGroupSchema.plugin(uniqueValidator, { message: 'There is already an group invite using {VALUE} for its {PATH}.'})

module.exports = mongoose.model('RoommateGroup', RoommateGroupSchema);