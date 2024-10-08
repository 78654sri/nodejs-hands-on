function logInfo(message) {
    console.log(`INFO: ${new Date().toISOString()} - ${message}`);
  }
  
  function logWarning(message) {
    console.log(`WARNING: ${new Date().toISOString()} - ${message}`);
  }
  
  function logError(message) {
    console.log(`ERROR: ${new Date().toISOString()} - ${message}`);
  }
  
  module.exports = { logInfo, logWarning, logError };
  