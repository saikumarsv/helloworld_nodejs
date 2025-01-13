module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body: "Hello, World!"
    };
    console.log("Hello, World!");
};