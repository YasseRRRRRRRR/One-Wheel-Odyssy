// // "use client";

// import React, { useState } from "react";

// const TranslationHandler = () => {
//   const [language, setLanguage] = useState("EN"); // Default language

//   const languages = ["EN", "FI", "SV"]; // List of supported languages
//   const handleLanguageChange = (event: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setLanguage(event.target.value);
//   };
//   return (
//     <select
//       value={language}
//       onChange={handleLanguageChange}
//       className="bg-white border border-gray-300 rounded-md shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
//     >
//       {languages.map((lang) => (
//         <option key={lang} value={lang}>
//           {lang}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default TranslationHandler;
