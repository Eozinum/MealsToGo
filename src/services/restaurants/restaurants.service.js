import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((res, rej) => {
    const mock = mocks[location];

    if (!mock) {
      rej("not found such location");
    }
    res(mock);
  });
};

restaurantsRequest()
  .then((res) => camelize(res))
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
