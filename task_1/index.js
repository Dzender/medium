import { encoded, translations } from './data.js'

function decodeFields(data) {
    const decodedData = data.map((item) => {
      const decodedItem = { ...item };
      for (const key in item) {
        if (key.endsWith('Id') && key !== 'groupId' && key !== 'service' && key !== 'formatSize' && key !== 'ca') {
          const id = item[key];
          decodedItem[key] = translations[id] || id;
        }
      }
      return decodedItem;
    });
  
    const uniqueIds = new Set();
    data.forEach((item) => {
      for (const key in item) {
        if (key.endsWith('Id')) {
          uniqueIds.add(item[key]);
        }
      }
    });
  
    return { decodedData, uniqueIds };
}

const { decodedData, uniqueIds } = decodeFields(encoded);

console.log("Let's rock");
console.log(encoded, translations);

console.log(decodedData);
console.log(uniqueIds);

