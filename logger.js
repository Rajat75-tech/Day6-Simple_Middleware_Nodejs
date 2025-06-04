
const logger = (req, res, next) => {
    const startTime = Date.now();
    const { method, url } = req;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} ${url} - Request received by RAJAT SHARMA`);

    res.on("finish", () => {
    const duration = Date.now() - startTime;
    console.log(`[${timestamp}] ${method} ${url} - Completed in ${duration}ms by RAJAT SHARMA`);
  });

  next();

};

module.exports = logger;