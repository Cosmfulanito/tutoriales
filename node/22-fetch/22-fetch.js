/*

                                                        _____Fetch:_____



 - El uso a api "fetch" es un tema ya visto en el curso de JavaScript. Esta funciona de forma similar en Node 


*/

async function loadData() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');  // Este link es pertenece a una api para hacer pruebas la cual me devuelve un json 
        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

loadData();