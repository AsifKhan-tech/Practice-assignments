const manifest = {
  containerId: 55,
  destination: "Carmel",
  weight: 400,
  unit: "lb",
  hazmat: false,
};

function normalizeUnits(manifest) {
  const newManifest = { ...manifest };

  if (manifest.unit === "kg") {
    return newManifest;
  }

  if (manifest.unit === "lb") {
    newManifest.unit = "kg";
    newManifest.weight = manifest.weight * 0.45;
  }
  return newManifest;
}

function validateManifest(manifest) {
  const newManifest = {};

  if (manifest.hasOwnProperty("containerId")) {
    if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
      newManifest.containerId = "Invalid";
    }
  } else {
    newManifest.containerId = "Missing";
  }

  if (manifest.hasOwnProperty("destination")) {
    if (
      typeof manifest.destination !== "string" ||
      manifest.destination.trim().length === 0
    ) {
      newManifest.destination = "Invalid";
    }
  } else {
    newManifest.destination = "Missing";
  }

  if (manifest.hasOwnProperty("weight")) {
    /*
     * if (typeof manifest.weight !== "number" || manifest.weight <= 0)
     *  Check for an integer not number
     */

    if (
      typeof manifest.weight !== "number" ||
      Number.isNaN(manifest.weight) ||
      manifest.weight <= 0
    ) {
      newManifest.weight = "Invalid";
    }
  } else {
    newManifest.weight = "Missing";
  }

  if (manifest.hasOwnProperty("unit")) {
    if (
      typeof manifest.unit !== "string" ||
      (manifest.unit !== "kg" && manifest.unit !== "lb")
    ) {
      newManifest.unit = "Invalid";
    }
  } else {
    newManifest.unit = "Missing";
  }

  if (manifest.hasOwnProperty("hazmat")) {
    if (typeof manifest.hazmat !== "boolean") {
      newManifest.hazmat = "Invalid";
    }
  } else {
    newManifest.hazmat = "Missing";
  }

  return newManifest;
}

function processManifest(manifest) {
  const valid = validateManifest(manifest);

  if (Object.keys(valid).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateManifest(manifest));
  }
}

console.log(
  validateManifest({
    containerId: 1,
    destination: "India",
    weight: 40,
    unit: "KG",
    hazmat: false,
  }),
);
