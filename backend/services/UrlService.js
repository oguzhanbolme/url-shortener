const {
  PutItemCommand,
  ScanCommand,
  UpdateItemCommand,
  DeleteItemCommand,
} = require("@aws-sdk/client-dynamodb");
const client = require("../config/aws-dynamodb");

const TABLE_NAME = "short_url";

class UrlService {
  async createUrl(urlModel, host) {
    const command = new PutItemCommand({
      TableName: TABLE_NAME,
      Item: {
        urlId: { S: urlModel.urlId },
        origUrl: { S: urlModel.origUrl },
        shortUrl: { S: `http://${host}/go/${urlModel.urlId}` },
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
      TableName: TABLE_NAME,
      ReturnConsumedCapacity: "TOTAL",
    });

    const res = await client.send(command).catch((error) => {
      console.log(error);
    });

    return res["Items"] || [];
  }

  async getUrlById(id) {
    const command = new ScanCommand({
      TableName: TABLE_NAME,
      FilterExpression: "urlId = :val",
      ExpressionAttributeValues: { ":val": { S: id } },
      ReturnConsumedCapacity: "TOTAL",
    });

    const res = await client.send(command).catch((error) => {
      console.log(error);
    });

    return res["Count"] > 0 ? res["Items"][0] : {};
  }

  async updateUrl(urlModel) {
    const command = new UpdateItemCommand({
      TableName: TABLE_NAME,
      Key: {
        urlId: { S: urlModel.urlId },
      },
      UpdateExpression: "set origUrl = :val1, updatedDate = :val2",
      ExpressionAttributeValues: {
        ":val1": { S: urlModel.origUrl },
        ":val2": { S: new Date().toString() },
      },
      ReturnValues: "UPDATED_NEW",
    });

    const res = await client.send(command).catch((error) => {
      console.log(error);
    });

    return res;
  }

  async deleteUrlById(id) {
    const command = new DeleteItemCommand({
      TableName: TABLE_NAME,
      Key: { urlId: { S: id } },
    });

    const res = await client.send(command).catch((error) => {
      console.log(error);
    });

    return res;
  }
}

module.exports = UrlService;
