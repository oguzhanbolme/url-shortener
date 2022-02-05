const express = require("express");
const router = express.Router();

const { nanoid } = require("nanoid");

const UrlModel = require("../models/UrlModel");
const UrlService = require("../services/UrlService");
const urlService = new UrlService();

// redirect to original url
router.get("/go/:id", async (req, res) => {
  const urlId = req.params.id;
  const response = await urlService.getUrlById(urlId);
  const origUrl = response["origUrl"]["S"];

  return res.redirect(origUrl);
});

// create new short url
router.post("/createUrl", async (req, res) => {
  const origUrl = req.body.origUrl;
  const urlModel = new UrlModel(nanoid(), origUrl);
  const response = await urlService.createUrl(urlModel);

  return res.json(response);
});

// get all short urls
router.get("/getUrls", async (req, res) => {
  const response = await urlService.getAllUrls();

  return res.json(response);
});

// get specific url
router.get("/getUrls/:id", async (req, res) => {
  const urlId = req.params.id;
  const response = await urlService.getUrlById(urlId);

  return res.json(response);
});

// update an url
router.post("/updateUrl", async (req, res) => {
  const urlId = req.body.urlId;
  const origUrl = req.body.origUrl;
  const urlModel = new UrlModel(urlId, origUrl);
  const response = await urlService.updateUrl(urlModel);

  return res.json(response);
});

// delete an url
router.get("/deleteUrl/:id", async (req, res) => {
  const urlId = req.params.id;
  const response = await urlService.deleteUrlById(urlId);

  return res.json(response);
});

module.exports = router;
