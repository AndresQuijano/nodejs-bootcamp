const axios = require('axios');



// const someFunction = async ()=>{
//     for(let i = 0; i<100000; i++){
//         let j=1
//         for(let i = 0; i<40000; i++){
//             let j=1
//         }
//     }

//     console.log('someFunction');
// };

const mainFunction = async () => {
    // /*const resp = */await axios({
    //     method: "GET",
    //     url: `http://localhost:3000/testAsyncAwait`,
    // });
    axios({
            method: "GET",
            url: `http://localhost:3000/testAsyncAwait`,
        }).then((res)=>{console.log('res')});

    console.log('mainFunction');
    // console.log('response:', resp.data);
};

mainFunction();