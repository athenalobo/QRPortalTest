function normalize(url){
    if (/(AIP|CARL|AC|HL)/ig.test(url))
        return normalizeFileName(url);
    
    // add AIP as a default prefix
    return 'AIP/'.concat( normalizeFileName(url));
}
 
function normalizeFileName( fileName ){
    // add json as extension file name when required
    if (fileName.endsWith(".json"))
        return fileName;
    if (fileName.endsWith(".csv"))
        return fileName;
    return (fileName + ".json");
}
 
module.exports = normalize;