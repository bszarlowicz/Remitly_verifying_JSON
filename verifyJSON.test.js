const verifyJSON = require('./verifyJSON');
const fs = require('fs');

test('Verifying JSON file without "*" in "Resource" field', () => {
    const filePath = 'data.json';
    expect(verifyJSON(filePath)).toBe(false);
});

test('Validating AWS IAM role policy data with invalid data', () => {
    const filePath = 'data.json';
    const data = fs.readFileSync(filePath, 'utf8');
    expect(isAWSRolePolicyValid(data.PolicyDocument, PolicyName)).toBe(true);
});