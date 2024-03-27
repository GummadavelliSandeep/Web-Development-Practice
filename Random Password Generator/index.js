// function Genpassword() {
//   const length = 12;
//   const includelowercasechars = true;
//   const includeuppercasechars = true;
//   const includenumbers = true;
//   const includespecialletters = true;
//   const password = generatePassword(
//     length,
//     includelowercasechars,
//     includeuppercasechars,
//     includenumbers,
//     includespecialletters
//   );
//   document.getElementById("p1").textContent = password;
// }
// function generatePassword(
//   length,
//   includelowercasechars,
//   includeuppercasechars,
//   includenumbers,
//   includespecialletters
// ) {
//   let allowedchars = "";
//   let password = "";
//   const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
//   const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numbers = "0123456789";
//   const specialchars = "@.!$%&*_-";
//   allowedchars += includelowercasechars ? lowercasechars : "";
//   allowedchars += includeuppercasechars ? uppercasechars : "";
//   allowedchars += includenumbers ? numbers : "";
//   allowedchars += includespecialletters ? specialchars : "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * allowedchars.length);
//     password += allowedchars[randomIndex];
//   }
//   return password;
// }

function Genpassword() {
  const length = 12;
  const allowedChars = generateAllowedChars(
    true, // includelowercasechars
    true, // includeuppercasechars
    true, // includenumbers
    true // includespecialletters
  );
  const password = generatePassword(length, allowedChars);
  document.getElementById("p1").textContent = password;
}

function generateAllowedChars(
  includelowercasechars,
  includeuppercasechars,
  includenumbers,
  includespecialletters
) {
  let allowedChars = "";
  const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
  const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialchars = "@ !";
  if (includelowercasechars) allowedChars += lowercasechars;
  if (includeuppercasechars) allowedChars += uppercasechars;
  if (includenumbers) allowedChars += numbers;
  if (includespecialletters) allowedChars += specialchars;
  return allowedChars;
}

function generatePassword(length, allowedChars) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}
