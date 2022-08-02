"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello serverless, Daniel M",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.helloUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello ${event.pathParameters.name}`,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.createUser = async (event) => {
  const user = new URLSearchParams(event["body"]);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Request to create users",
        input: `Hi, ${user.get("user")}`,
      },
      null,
      2
    ),
  };
};
