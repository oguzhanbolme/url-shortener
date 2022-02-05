const {
  PutItemCommand,
  ScanCommand,
  UpdateItemCommand,
  DeleteItemCommand,
} = require("@aws-sdk/client-dynamodb");
const client = require("../config/aws-dynamodb");

class UrlService {
  async createUrl(urlModel) {
    const command = new PutItemCommand({
      TableName: "short_url",
      Item: {
        urlId: { S: urlModel.urlId },
        origUrl: { S: urlModel.origUrl },
        shortUrl: { S: `http://localhost:1999/go/${urlModel.urlId}` },
        createdDate: { S: new Date().toString() },
      },
    });

    const res = await client.send(command).catch((error) => {
      console.log(error);
    });

    return res;
  }

  async getAllUrls() {
    const command = new ScanCommand({
      TableName: "short_url",
      ReturnConsumedCapacity: "TOTAL",
    });

    const res = await client.send(command).catch((error) => {
      console.log(error);
    });

    return res;
  }

  async getUrlById(id) {
    const command = new ScanCommand({
      TableName: "short_url",
      FilterExpression: "urlId = :val",
      ExpressionAttributeValues: { ":val": { S: id } },
      ReturnConsumedCapacity: "TOTAL",
    });

    const res = await client.send(command).catch((error) => {
      console.log(error);
    });

    return res;
  }

  async updateUrl(urlModel) {
    const command = new PutItemCommand({
      TableName: "short_url",
      Item: {
        urlId: { S: urlModel.urlId },
        origUrl: { S: urlModel.origUrl },
        shortUrl: { S: `http://localhost:1999/go/${urlModel.urlId}` },
        createdDate: { S: new Date().toString() },
      },
    });

    const res = await client.send(command).catch((error) => {
      console.log(error);
    });

    return res;
  }

  async deleteUrlById(id) {
    const command = new DeleteItemCommand({
      TableName: "short_url",
      Key: { urlId: { S: id } },
    });

    const res = await client.send(command).catch((error) => {
      console.log(error);
    });

    return res;
  }
}

module.exports = UrlService;
