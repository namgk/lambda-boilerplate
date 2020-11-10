import "@babel/polyfill";

const asyncHandler = async (event, context) => {
  return event || new Error("Failed");
};

const handler = (event, context, callback) => {
  if (event){
    callback(null, event);
  } else {
    callback(new Error("Failed"));
  }
};

export default { asyncHandler, handler };