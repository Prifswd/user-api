// middleware to validate

function validateUser(req, res, next) {
  const { firstName, lastName, hobby, email } = req.body;
  if (!firstName || !lastName || !hobby || !email) {
    return res.status(400).json({
      error: "firstName, lastName, hobby, and email are required fields"
    });
  }
  next();
}


export default validateUser;




