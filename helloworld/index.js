module.exports = async function (context, req) {
    try {
        context.log("Processing request...");

        // Return a successful response
        context.res = {
            status: 200,
            body: "Hello, Aus!"
        };
    } catch (error) {
        context.log("Error occurred:", error);

        // Return an error response
        context.res = {
            status: 500,
            body: "Internal Server Error"
        };
    }
};
