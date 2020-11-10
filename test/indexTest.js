import { expect } from 'chai';
import testData from './testData';
const index = require('../dist/main');

describe("non async handler", () => {
  testData.forEach(
    ({i, o}, idx) => {
      it("input: " + i + ", expect output: " + JSON.stringify(o), done => {
        index.handler(i, "context", (err, result) => {
          if (err){
            expect(err.message).to.equal("Failed");
          } else {
            expect(result).to.equal(o);
          }
          done();
        })
      });
    }
  )
});

describe("async handler", () => {
  testData.forEach(
    ({i, o}, idx) => {
      it("input: " + i + ", expect output: " + JSON.stringify(o), async () => {
        const result = await index.asyncHandler(i, "context");
        if (o === false){
          expect(result.message).to.equal("Failed");
        } else {
          expect(result).to.equal(o);
        }
      });
    }
  )
});
