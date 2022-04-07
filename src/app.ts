import del from 'del';
import fs from "fs";

export default async function newCleanFolder(folderName: string) {
  await del(folderName);
  fs.access(folderName, (error) => {
    if (error) fs.mkdir(folderName, (error) => {
      if (error) throw error;
    });
  });
}