const dotenv = requirre('dotenv').config()

const { PORT } = process.env
const { MONGODB_CONNECTION_STRING } = process.env
const { ACCESS_TOKEN_SECRET } = process.env
const { REFRESH_TOKEN_SECRET } = process.env

module.exports = {
  PORT,
  MONGODB_CONNECTION_STRING,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
}
