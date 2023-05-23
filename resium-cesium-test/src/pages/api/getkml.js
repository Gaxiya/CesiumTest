export default async function getKml(req, res){
    const fs = await import('fs');
    const path = await import('path')
    const filepath = path.resolve('./public','2019_03_13_Nadir_g401b40071_f020_.kml')
    const dataKml = fs.readFileSync(filepath)
      console.log(dataKml);
    res.statusCode = 200
  res.json(dataKml);
  }