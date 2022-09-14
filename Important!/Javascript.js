// searchsystem
const searchopener = document.querySelector('#searchopener');
const searchtype = document.querySelector('.searchtype');
searchopener.onclick = function(){
    searchopener.classList.toggle('active')
}

document.getElementById("searchopener").addEventListener("click", () => {
    document.getElementById("searchplace").focus(); 
    
  });

// searchsystem/