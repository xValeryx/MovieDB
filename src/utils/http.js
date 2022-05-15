const BASE_URL  =  "https://edgemony-backend.herokuapp.com/movies";  

// metodo http ritorna una fetch con due parametri 
// resource = sarebbe tipo id 
// options = i metodi  


// GET 

const GET = (id = "") => fetch(`${BASE_URL}/${id}`).then((res) => res.json());


// POST

const POST = (body) =>
 fetch(BASE_URL, {
     method: "POST",
     headers: {
         "Content-type": "application/json",
     },
     body: JSON.stringify(body),
});


// DELETE

const DELETE = (id) => fetch(`${BASE_URL}/${id}`, { method: "DELETE" });


// PUT

const PUT = (id, body) =>
 fetch(`${BASE_URL}/${id}`, 
 { method: "PUT", 
   headers: {
       "Content-type": "application/json",
   },
   body: JSON.stringify(body),
});


export {GET, POST, DELETE, PUT};