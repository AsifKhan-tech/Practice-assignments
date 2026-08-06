function maskEmail(email) {
  const idx = email.indexOf("@");

  const domainPart = email.slice(idx);
  const extract = email.slice(1, idx - 1);
  const maskedPart = extract.replace(extract, "*".repeat(extract.length));

  const firstCharacter = email.slice(0, 1);
  const laststCharacter = email.slice(idx - 1, idx);

  const result = firstCharacter + maskedPart + laststCharacter + domainPart;
  return result;
}

const email = "apple.pie@example.com";

console.log(maskEmail(email));
