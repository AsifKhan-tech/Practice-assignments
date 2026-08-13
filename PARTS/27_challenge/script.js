const manifest = {
  containerId: 1,
  destination: "    India    ".trim(),
  weight: 40,
  unit: "lb",
  hazmat: false,
};

function normalizeUnits(manifest) {
  const newManifest = structuredClone(manifest);

  if (newManifest.unit === "lb") {
    newManifest.unit = "kg";
    newManifest.weight = newManifest.weight * 0.45;
  }
  return newManifest;
}

normalizeUnits(manifest);
