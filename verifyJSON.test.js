const { verifyJSON, isAWSRolePolicyValid, readJSONfile } = require('./verifyJSON');

it('SHOULD verify JSON file without "*" in "Resource" field', () => {
    const filePath = 'data.json';
    const verifyJsonResult = verifyJSON(filePath)

    expect(verifyJsonResult).toBe(false);
});

it('SHOULD validate AWS IAM role policy data with invalid data', async () => {
    const filePath = 'data.json';
    const data = readJSONfile(filePath)
    const result = isAWSRolePolicyValid(data.PolicyDocument, data.PolicyName)

    expect(result).toBe(true);
});