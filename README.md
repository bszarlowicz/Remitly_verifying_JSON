# AWS Role Policy JSON Verification

This project contains a simple JavaScript script for verifying the contents of a JSON file containing AWS role policy data.

## Requirements

1. Node.js installed on your system.

## How to Run

1. Clone this repository to your local machine using the command:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <directory-name>
    ```

3. Install the required dependencies by running:

    ```bash
    npm install
    ```

4. To execute the verification script, use the command:

    ```bash
    node verifyJSON.js
    ```

## Description

The `verifyJSON.js` script reads the contents of a JSON file containing AWS role policy data. It then checks if the policy contains valid data, including ensuring that the "Resource" field does not contain only an asterisk (`'*'`). If the policy is valid, it returns `true`; otherwise, it returns `false`.

## JSON File Structure

The `data.json` file contains sample AWS role policy data in JSON format. You can edit this file to customize it according to your needs.
