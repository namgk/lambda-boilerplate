import "@babel/polyfill";
import worker from './Worker';

const asyncHandler = async (event, context) => {
  return worker.executeAsync(event);
};

const handler = (event, context, callback) => {
  worker.execute(event, (result) => {
    if (result) {
      callback(null, event);
    } else {
      callback(new Error("Failed"));
    }
  });
};

export default { asyncHandler, handler };