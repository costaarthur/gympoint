export default (req, res, next) => {
  const admHeader = req.headers.authorization;
  if (!admHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  console.log(admHeader);

  // const [, token] = admHeader.split(' ');
  return next();
};
