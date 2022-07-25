$("#iguess").fadeIn(600, ()=>{setTimeout(()=>
    $("#wallet").effect("bounce", {times:10}, 700,()=>{
        $("#gif").fadeIn(200)
        $("#kind").fadeIn(250);
    })
,400)}
)
function cont(plat){
    document.getElementById("kind").innerText = "❝C'mon mr. witer, we have to cook❞"
    setTimeout(()=>{
    if(plat == "tt"){
        window.open('https://twitter.com/_abortmission_', '_blank');
    }else if(plat == "disc"){
        window.open('https://discord.com/users/694783408324476931', '_blank');
    }
    document.getElementById("kind").innerText = "❝Jesse, Jesse i need my keys Jesse pls give me back❞"
}
    ,1200)
}
