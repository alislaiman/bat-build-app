// Copies the BÂT Build web app (the same files as the website) into www/ for the Android app.
const fs=require('fs'),path=require('path');
const src=path.join(__dirname,'..','site'),dst=path.join(__dirname,'www');
fs.rmSync(dst,{recursive:true,force:true});fs.mkdirSync(dst,{recursive:true});
for(const f of ['index.html','config.js','manifest.webmanifest'])if(fs.existsSync(path.join(src,f)))fs.copyFileSync(path.join(src,f),path.join(dst,f));
fs.cpSync(path.join(src,'assets'),path.join(dst,'assets'),{recursive:true});
console.log('web app copied to www/');
