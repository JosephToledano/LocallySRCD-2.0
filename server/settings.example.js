// this file contains the example for the configurations necessary for the server
// Rename this file settings.js and replace the examples with you own settings,
// or create a new file called settings.js and copy/paste the code below and
// replace the examples with your own settings

// connection string for MongoDB. If using MongoDB Atlas, use the string given
// by clicking on your cluster -> "connect" -> "Connect your application"
// Don't forget to substitute usename and password!!
const MongoURI = 'mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbName>?retryWrites=true&w=majority';

// your dabatase name inside the cluster.
const dbName = 'locally-srcd';

// your name of collection that stores closed stores
const closedStores = 'closedStores';

module.exports = {
  MongoURI,
  dbName,
  closedStores,
}
