// // ^[\w_\.]+@[a-zA-Z]+\.([a-zA-Z]{2,3})$
// // ^(09)[01239]\d{8}$

// const regex = /(09)[01239]\d{8}/;
// const phone = "this is my Phone number 09935635435";

// console.log(phone);
// // console.log(regex.exec(phone) , '\n' + phone.slice(24 , 35));
// // console.log(phone.replace(regex,'*****'));

// console.log(phone.match(regex));

// // true false
// // regEx.test()
// // String.match()

// // regEx.exec

const axios = require("https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js");

const fetch = async () => {
  try {
    const req = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    const data = request;
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

fetch();
