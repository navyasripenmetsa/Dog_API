let url="https://dog.ceo/api/breeds/image/random";
fetch(url)
.then((result)=>{
       console.log("Promise is Resolved which is returned by fetch()");
      result.json()
      .then((result)=>{
        console.log(result.message);
        let div=document.createElement("div");
        let body=document.querySelector("body");
        body.appendChild(div);
        div.classList.add("API");
        div.style.backgroundImage=`url(${result.message})`;
        let h1=document.createElement("h1");
        body.appendChild(h1);
        h1.innerText="hehe :) <3"
      })
      .catch((error)=>{
         console.log("Promise is rejected which is returned by result.json()"); 
      })
})
.catch(()=>{
   console.log("Promise is rejected which is returned by fetch()");
})
