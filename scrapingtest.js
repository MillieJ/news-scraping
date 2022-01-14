/*const request = require('request');
const cheerio = require('cheerio');


request('https://www.businessdailyafrica.com', (error, response, html) => {
    if (!error && response.statusCode == 200){
        console.log(html);
    }
}); */


//Gives a giant object
//run through load method in cheerio

/*const request = require('request');
const cheerio = require('cheerio');


request('https://www.businessdailyafrica.com', (error, response, html) => {
    if (!error && response.statusCode == 200){
        //window.$ = window.jQuery = require("jquery");
        const $ = cheerio.load(html);
        const siteHeading = $('.ad');
        console.log(siteHeading);
    }
}); */



/*const request = require('request');
const cheerio = require('cheerio');


request('https://www.businessdailyafrica.com', (error, response, html) => {
    if (!error && response.statusCode == 200){
        //window.$ = window.jQuery = require("jquery");
        const $ = cheerio.load(html);
        const siteHeading = $('.page-box-inner');
        //console.log(siteHeading.html());
        //console.log(siteHeading.text());
        const output = siteHeading.find('h3').text();
        console.log(output);
    }
}); */


const request = require('request');
const cheerio = require('cheerio');


request('https://www.businessdailyafrica.com', (error, response, html) => {
    if (!error && response.statusCode == 200){
        //window.$ = window.jQuery = require("jquery");
        const $ = cheerio.load(html);
       $('.page-box-inner').each((i,el)=>{
           const title = $(el)
           .find('.article article-list-aside')
           .text();

           console.log(title);
       });
    }
}); 

