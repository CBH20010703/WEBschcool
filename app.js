var express=require("express")
var fs=require("fs")
var app=express()
app.post("/Logoin",(req,res)=>{
  var d=""
  req.on("data",(postdata)=>{
    d+=postdata
  })
 req.on("end",()=>{
   as={
     U:"123",
     P:"123",
   }
  ad=JSON.parse(d)
  if(as.U==ad.UserId&&as.P==ad.password){
    res.send("1")
   }else{
     res.send("0")
   }
   
 })
})
app.get("/",(req,res)=>{
  fs.readFile("./Logoin.html","utf8",(err,data)=>{
    if(err==null){
      console.log(err)
    }
    res.send(data)
  })
})
app.get("/jquery.min.js",(req,res)=>{
  fs.readFile("./js/jquery.min.js","utf8",(err,data)=>{
    if(err==null){
      console.log(err)
    }
    res.send(data)
  })
})
app.listen(8081,function(){
  console.log("启动成功")
})