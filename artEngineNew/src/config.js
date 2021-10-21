"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const nftName = "Boo Crew";
const description =
  "Boo Crew is a collection of 5,555 algorithmically generated ghosts who are simply adorable!";
const baseUri = "ipfs://QmbDt7b481drbYtzuVxoVLpaDBuUzD6YaQ8XFwkHZLtHoF";

const layerConfigurations = [
  {
    growEditionSizeTo: 5555,
    layersOrder: [
      { name: "Background" },
      { name: "Costume" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Head Accessories" },
      { name: "Hand Accessories" },
      //{ name: "Top lid" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2000,
  height: 2000,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

// lower number, bigger pixels
const pixelFormat = {
  ratio: 10 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 200,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
};
