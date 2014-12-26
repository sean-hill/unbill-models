// Utility Provider Model

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var UtilityProviderSchema = new Schema({

   name: { type: String, required: true, unique: true, index: true }

   , auth: {

   		// List of required urls for utility provider authentication
   		urls: {
   			login: { type: String, required: true }
            , signup: String
            , forgotPassword: String
   		}

         // TODO: Actually use this
         , mobileFriendly: Boolean

   		// The name of the file name on the server of the auth script
   		, scriptFileName: String

   		// A list a <input> fields we'll show to the user 
   		, loginFields: [{
   			label: String
   			, name: String
   			, formType: String
   			, placeholder: String
   		}]
   }
   
   , provides: { type: Array, index: true }

   , logo: String

   , created: { type: Date, default: Date.now }

   , updated: { type: Date, default: Date.now }

})

// Unique field plugin (makes better error messages)
UtilityProviderSchema.plugin(uniqueValidator, { message: 'There is already a utility company using {VALUE} for their {PATH}.'})

module.exports = mongoose.model('UtilityProvider', UtilityProviderSchema);