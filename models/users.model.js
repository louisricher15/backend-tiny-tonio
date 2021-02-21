module.exports = mongoose => {
    return mongoose.model(
        "users",
        mongoose.Schema(
            {
                _id: String,
                __v: Number,
                firstname: String,
                lastname: String,
                email: String,
                password: String,
                isConnected: Boolean,
                role: Array(String)
            }
        )
    )
}