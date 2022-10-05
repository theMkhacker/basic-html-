var http=require('http');
var fs=require('fs');
var path=require('path');
http.createServer(function (req,res){
   if(req.url === "/"){
   fs.readFile('index.html',function(err,data){
      res.writeHead(200,{
         'Content-Type':'text/html'
      });
      res.write(data);
      res.end();
   });
   
}else if(req.url === "/new"){
   fs.readFile('new.html',function(err,data){
      res.writeHead(200,{
         'Content-Type':'text/html'
      });
      res.write(data);
      res.end();
   });
   
}

else if(req.url.match("\.css$")){
   var cssPath=path.join(__dirname,req.url);
   var fileStream=fs.createReadStream(cssPath,"UTF-8");
   res.writeHead(200,{"Content-Type":"text/css"});
   fileStream.pipe(res);
}else if(req.url.match("\.jpg$")){
   var photoPath=path.join(__dirname,req.url);
   var fileStream=fs.createReadStream(photoPath);
   res.writeHead(200,{"Content-Type":"image/jpg"});
   fileStream.pipe(res);
}else if(req.url.match("\.jpeg$")){
   var imagePath=path.join(__dirname,req.url);
   var fileStream=fs.createReadStream(imagePath);
   res.writeHead(200,{"Content-Type":"image/jpeg"});
   fileStream.pipe(res);
}else if(req.url.match("\.png$")){
   var imgPath=path.join(__dirname,req.url);
   var fileStream=fs.createReadStream(imgPath);
   res.writeHead(200,{"Content-Type":"image/png"});
   fileStream.pipe(res);
}else if(req.url.match("\.js$")){
   var jsPath=path.join(__dirname,req.url);
   var fileStream=fs.createReadStream(jsPath,"UTF-8");
   res.writeHead(200,{"Content-Type":"text/javascript"});
   fileStream.pipe(res);
}
else if(req.url.match("\.html$")){
   var htmlPath=path.join(__dirname,req.url);
   var fileStream=fs.createReadStream(htmlPath,"UTF-8");
   res.writeHead(200,{"Content-Type":"text/html"});
   fileStream.pipe(res);
}
}).listen(8000);