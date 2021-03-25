require('dotenv').config()
var execSync = require('child_process').execSync
execSync(`aws appsync get-introspection-schema --api-id ${process.env.API_ID} --format JSON --include-directives schema.json && amplify codegen`)