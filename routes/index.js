var paths = require("../bin/schema");

const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  "get": {
    "/icon": (req, res) => {
      console.log("this")
      res.status(200).sendFile("../favicon.ico");
    },
    "/paths": (req, res) => {
      paths.find({}, (err, data) => {
        res
        .status(200)
        .send(JSON.stringify(data));
      })
    }
  },
  "post": {
    "/paths": (req, res) => {
      var val = new paths({
          ...req.body,
	  _id: new ObjectId()
	}).save();
      res
      .send(202)
      .send(JSON.stringify(val));
    }
  }
}


