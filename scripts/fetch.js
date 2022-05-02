

let searchNews = async (API, value) =>{
    try{
        let res = await fetch(
            `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`
        );

        let data = await res.json();

        return data;


        }catch (err){
            console.log(err);
        }
};


let append = (data, results) => {
    data.forEach(({urlToImage, title, description}) =>{

        let div =document.createElement('div');
        div.setAttribute('class', "image"); 

        let img =document.createElement("img");
        let h3=document.createElement('h3');
        let h4=document.createElement('h4');

        img.src=urlToImage;
        h3.innerText=title;
        h4.innerText=description;


        div.append(img, h3, h4);
        results.append(div);
    });

}
export {searchNews, append};
