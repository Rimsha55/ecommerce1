const validate = (schema) => {
    return (req, res, next) => {
      console.log("dcdcsdcd");
      
        
      const { query, params, body } = req;
      const { error } = schema.validate({query, params, body}, {
        abortEarly: false,
      });
  
      if (error) {
        const errors = error.details;
        return res.status(400).json({ errors });
      }
      next();
    };
  };
  
  module.exports = validate;