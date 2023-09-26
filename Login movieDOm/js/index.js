// https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=all
// https://image.tmdb.org/t/p/w500

let films=document.querySelectorAll(".owl-carousel");
console.log(films);
fetch(" https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=all")
.then(resp=>resp.json())
.then(data=>{
    data.results.forEach((e,i) => {
        if(i<7){
            films[0].innerHTML+=`
            <div class="item">
            <img src="https://image.tmdb.org/t/p/w500${e.backdrop_path}" alt="" />
            <p>${e.original_title}</p>
            <button>Load More</button>
          </div>
            `
        }
        else if(i<14){
            films[1].innerHTML+=`
            <div class="item">
            <img src="https://image.tmdb.org/t/p/w500${e.backdrop_path}" alt="" />
            <p>${e.original_title}</p>
            <button>Load More</button>
          </div>
            ` 
        }else if(i<=20){
            films[2].innerHTML+=`
            <div class="item">
            <img src="https://image.tmdb.org/t/p/w500${e.backdrop_path}" alt="" />
            <p>${e.original_title}</p>
            <button>Load More</button>
          </div>
            `
        }
        
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
    $( ".owl-prev").html('<').css("font-size", "50px").css("color","white");
    $( ".owl-next").html('>').css("font-size", "50px").css("color","white");

})

