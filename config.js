export const mongoUser = process.env["MONGO_USERNAME"]
export const mongoPass = process.env["MONGO_PASSWORD"]
export const mongoUrl = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.pcv5a.mongodb.net/streets?retryWrites=true&w=majority`
