const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    model: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);

// The Schema is a blueprint for the data, defining the structure and data types for the documents in a collection.
// mongoose.model('Car', carSchema) compiles the schema into a model, providing an interface to interact with the collection of documents in the MongoDB database.
