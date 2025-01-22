const requestHelper = {
    logResponse: async (response) => {
        console.log(`\n===== API Response =====`);
        console.log(`Status: ${response.status()}`);
        console.log(`URL: ${response.url()}`);
        console.log(`Response: ${JSON.stringify(await response.json(), null, 2)}`);
        console.log(`=========================\n`);
    },
    logRequest: (method, url, payload) => {
        console.log(`\n===== API Request =====`);
        console.log(`Method: ${method}`);
        console.log(`URL: ${url}`);
        console.log(`Payload: ${JSON.stringify(payload, null, 2)}`);
        console.log(`=======================\n`);
    },
};

module.exports = requestHelper;
