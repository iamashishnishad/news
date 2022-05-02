// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


const API ="https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}";

import { navbar } from "../components/navbar.js";

let n = document.getElementById('navbar');
n.innerHTML=navbar();

import {searchNews, append} from "./fetch.js";

let search = (e) =>{
    if(e.key == "Enter"){
        let value=document.getElementById("search_input").value;
        searchNews(API, value).then((data)=>{
            console.log(data);


            let results = document.getElementById("results");
            results.innerHTML=null;

            append(data.results, results);
        });
    }
};
document.getElementById("search_input").addEventListener("keydown",  search);

let sidebar = document.getElementById("sidebar").children;

function nSearch() {
    console.log(this.id);
    searchNews(API, this.id).then((data)=>{
        console.log(data);


        let results = document.getElementById("results");
        results.innerHTML=null;
        append(data.results, results);
    });
}

for(let el of results){
    el.addEventListener("click", nSearch);
}

// let searchNews = async() =>{

// let value = document.getElementById("search_input").value;
// try{
//     let res = await fetch(
//         `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`
//     );

//     let data = await res.json();

//     console.log(data);
// } catch(err){
//     console.log(err);
// }
// };