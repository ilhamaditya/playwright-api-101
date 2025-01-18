const validUser = {
    email: "eve.holt@reqres.in", // Data valid dari dokumentasi Reqres
    password: "cityslicka",
};

const invalidUser = {
    email: "eve.holt@reqres.in", // Data invalid tanpa password
};

module.exports = {
    validUser,
    invalidUser,
};
