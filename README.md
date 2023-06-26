# Node-Example-Verify4js
# Bakcend npm package usage 
PDF файлын Notly системээр блокчэйн дээр баталгаажсан эсэхийг шалгах сан. Node js project хэрэглэж үзэв. 


### Ажиллуулах тайлбар 
const { verify } = require('verify4js');

router.post('/upload', upload.single('file'), (req, res) => {

  const file = req.file;
  console.log("File: ", file); 
  const fileBuffer = fs.readFileSync(file.path);     
  const int8Array = new Int8Array(fileBuffer);

  verify(int8Array, process.env.NODE_URL)
  .then((res1) => {
    console.log(res1);
    return  res.status(200).send("success");
  })
  .catch((err) => {
    console.error("test", err.message); 
  });

  fs.unlinkSync(file.path);
});

post method ashilaj sangaa shalgana.

  const fileBuffer = fs.readFileSync(file.path): pdf file-iig fs san ashiglaj filiig unshij bna. (buffer helbereer unshina)
   const int8Array = new Int8Array(fileBuffer): fs ashiglaj buffer helbereer unshsan filee int8Array turul rvv horwvvlj bid (verify4js sangaa ashiglana)
### Гаралт

```
export interface VerifyResultInterface { 
  state: 'REVOKED' | 'EXPIRED' | 'ISSUED' | 'APPROVE_PENDING' | 'INVALID',
  metadata: MetaDataInterface, 
  cert: {}, 
  issuer: {isActive?: boolean}, 
  isTestnet: boolean, 
  isUniversity?: boolean 
}
```

##### state нь
- ISSUED бол баталгаажсан файл. 
- REVOKED бол хүчингүй болгосон файл
- EXPIRED бол хугацаа нь дууссан файл,
- APPROVE_PENDING бол их сургуулийн диплом БЕГ баталгаажуулахыг хүлээж буй
- INVALID бол баталгаажаагүй файл.
##### metadata нь 
файлд нэмэлтээр бичсэн утгууд.
##### cert нь 
блокчэйн дээр бичигдсэн мэдээлэл.
##### issuer нь 
баталгаажуулагчийн мэдээлэл.
##### isTestnet нь 
тест сүлжээнд баталжуулсан бол true байна.
##### isUniversity нь 
их сургуулийн диплом үед true байна.
  