let express = require("express");

let app = express();
let port = process.env.PORT || 80;

app.use(express.static("public_HTML"));
app.listen(port, function(){
    console.log("HTML 서버 시작됨");
});
//https://www.youtube.com/watch?v=-sKd4NYS2sA