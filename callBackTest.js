function run() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }
  //run();
  //console.log('Done !!!');

  function run() {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) { }
      const end = Date.now();
      console.log(end - start + 'ms');
    }, 1000);
  }
 
  // run();
  // console.log('Done !!!');

  function run(callback) {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
      callback();
    }, 1000);
  }
 
  // run(() => {
  //   console.log('Done !!!');
  // });


  function run() {
    //resolve, reject 비동기 작업의 처리과정에서 성공/실패를 구분
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 1000);
    });
}
 
//run().then(() => {console.log('Done !!!');});

function run() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 1000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve();
      }, 1000);
  });
}

// run().then(() => {console.log('Done !!!');});
// run().then(() => {return run()}).then(() => {console.log('Done !!!');});

function run() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 1000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve();
      }, 1000);
  });
}

//async 함수는 promise 를 반환하는 함수들을 await 함수명으로 불러 올 수 있다
async function process() {
  await run();
  await run();
  console.log('Done !!!');
}

process();