const validUser = {
    email: "eve.holt@reqres.in", // Data valid dari dokumentasi Reqres
    password: "cityslicka",
};

const invalidUser = {
    email: "eve.holt@reqres.in", // Data invalid tanpa password
    password: "", // Tambahkan field password kosong untuk lebih eksplisit
};

module.exports = {
    validUser,
    invalidUser,
};
