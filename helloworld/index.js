module.exports = async function (context, req) {
    context.log("Hello World function processed a request.");

    context.res = {
        status: 200,
        body: "Hello, World!"
    };
};
