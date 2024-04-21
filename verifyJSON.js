const fs = require('fs') // Import module responsible for file operations

/**
 * Function readJSONfile is used to read data from a JSON file.
 * @param {string} filePath - The path to the JSON file to be read.
 * @returns {Object} - An object containing data from the JSON file.
 */
function readJSONfile(filePath){
    try{
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }catch (error){
        console.error('Error while parsing JSON file', error);
    }
}

/**
 * Function isAWSRolePolicyValid is used to check the validity of AWS IAM role policy data.
 * @param {Object} policyDocument - The AWS IAM policy object.
 * @param {string} policyName - The name of the AWS IAM policy.
 * @returns {boolean} - A boolean value, true if the data is valid, false otherwise.
 */
function isAWSRolePolicyValid(policyDocument, policyName){
        const pattern = /^[\w+=,.@-]+$/;
        if (!policyDocument || typeof policyDocument !== 'object' || !policyName || typeof policyName !== 'string' || !pattern.test(policyName) || policyName.length < 1 || policyName.length > 128)
            return false;
        return true;
}

/**
 * Function verifyJSON checks the contents of the "Statement" field in an AWS IAM role policy.
 * @param {string} filePath - The path to the JSON file containing AWS IAM role policy data.
 * @returns {boolean} - A boolean value, false if the "Resource" field contains a single asterisk, true otherwise.
 */
function verifyJSON(filePath){
    const dataJSON = readJSONfile(filePath);
    if(isAWSRolePolicyValid(dataJSON.PolicyDocument, dataJSON.PolicyName)){
        let result = true;
        for (const statement of dataJSON.PolicyDocument.Statement){
            if (statement.Resource === '*')
                result = false;
        }
        return result;
    }else
        console.error("Error: AWS IAM properties are not valid.");
}


//output result
console.log(verifyJSON('data.json'));

module.exports = {
    verifyJSON,
    isAWSRolePolicyValid,
    readJSONfile,
  };
  