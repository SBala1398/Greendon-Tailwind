// mobile nav bar action
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
// product Search Action
var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

 search.addEventListener("keyup",function(){
    var enterdValude = event.target.value.toUpperCase()

    for (count = 0; count<productlist.length; count=count+1)
    {
        var productname = productlist[count].querySelector("h2").textContent

        if (productname.toUpperCase().indexOf(enterdValude)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
 })