
// dropdown list nav
window.addEventListener("DOMContentLoaded",()=>{
    const btnProfile = document.querySelector("#btn-profile");
    const dropdown   = document.querySelector("#dropdown");
    
    btnProfile.addEventListener("click",()=>{
        if(dropdown.classList.contains('hidden')){
            dropdown.classList.remove('hidden');
            dropdown.classList.add('flex','flex-col');
        }else if(!dropdown.classList.contains('hidden')){
            dropdown.classList.remove('flex','flex-col')
            dropdown.classList.add('hidden');

        }
        /*
        dropdown.classList.toggle('hidden');
        dropdown.classList.toggle('flex');
        */
    });        
});


  