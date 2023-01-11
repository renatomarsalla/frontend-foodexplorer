const jwtToken = {
  jwt: {
    // secret: "default",
    secret: process.env.AUTH_SECRET || "default",
    expiresIn: "1d"
  }
}

module.exports = { jwtToken }