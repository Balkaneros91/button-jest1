const buttonClick = require('../button');

beforeEach(() => {
    // document.body.innerHTML = "<p id='par'></p>";     // if it one component or many, but if you make changes in HTML you gotta make changes in the test as well !
    let fs = require('fs');                             // a file system handling module built into Node that allows us to open read and write files !
    let fileContent = fs.readFileSync('index.html', 'utf-8');
    document.open();
    document.write(fileContent);
    document.close();                         
});

describe('DOM tests', () => {
    test('Expects p content to change', () => {
        buttonClick();
        expect(document.getElementById('par').innerHTML).toEqual('You Clicked');
    });
    test('h1 should exist', () => {
        expect(document.getElementsByTagName('h1').length).toBe(1);
    }); 
});

// had to install this //   npm install --save-dev jest@26.6.3

// /**
//  * @jest-environment jsdom
//  */

// // const { beforeEach } = require('node:test');
// const buttonClick = require("../button");

// beforeEach(() => {
//     document.body.innerHTML = '<p id="par"></p>';
// });

// describe("DOM tests", () => {
//     test("Expects p content to change", () => {
//         buttonClick();
//         expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
//     });
// });