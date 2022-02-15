const fs = require('fs');

//비동기 방식으로 파일 체크
fs.stat("./sample.txt", (err, stats) =>{ //존재하지 않는 파일 읽기
    if (err.code === "ENOENT") {
        console.log("파일이 존재하지 않습니다.");
    }
})

// 동기 방식으로 파일 체크
try {

  fs.statSync("./sample.txt");

} catch (error) {

	//파일이 없다면 에러 발생
    if (error.code === "ENOENT") {
       console.log("파일이 존재하지 않습니다.");
    }
}