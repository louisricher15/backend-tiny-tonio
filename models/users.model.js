module.exports = mongoose => {
    return mongoose.model(
        "users",
        mongoose.Schema(
            {
                firstname: String,
                lastname: String,
                mail: String,
                password: String,
                role: Array(String)
            }
        )
    )
}