module.exports = (req, res) => {
  let idToken
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    idToken = req.headers.authorization.split('Bearer ')[1]
    req.idToken = idToken
  } else {
    console.error('No token found')
    return res.status(403).json({ error: 'Unauthorized' })
  }
}
