// middleware to log method, URL, and status code

function logger(req, res, next) {
  res.on("finish", () => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode}`);
  });
  next();
}



export default logger;



