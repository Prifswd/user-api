
// middleware to validate required fields for POST and PUT

function validateUser(req, res, next) {
  const { firstName, lastName, hobby } = req.body;
  if (!firstName || !lastName || !hobby) {
    return res.status(400).json({
      error: "firstName, lastName and hobby are required fields"
    });
  }
  next();
}


export default validateUser;



