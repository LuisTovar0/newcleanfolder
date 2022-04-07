const del = require('del');
const fs = require('fs');

export default async function newCleanFolder(folderName) {
  await del(folderName);
  fs.access(folderName, (error) => {
    if (error) fs.mkdir(folderName, (error) => {
      if (error) throw error;
    });
  });
}