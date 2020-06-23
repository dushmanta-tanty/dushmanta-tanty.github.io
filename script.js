
const filterContainer = document.querySelector(".portfolio-filter"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItm = portfolioItems.length;

    // portfolioItems filter logic  
    for(i = 0; i<totalFilterBtn; i++) {
        filterBtns[i].addEventListener("click", function() {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for(k=0; k<totalPortfolioItm; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")) {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                } else {
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");
                }
                if(filterValue === "all") {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }
        })
    }  

    // portfolioItem lightbox
    const lightbox = document.querySelector(".lightbox"),
          lightboxImg = document.querySelector(".lightbox-img"),
          lightboxClose = document.querySelector(".lightbox-close"),
          lightboxText = document.querySelector(".caption-text"),
          lightboxCounter = document.querySelector(".caption-counter");
    let itemIndex = 0;
    for(let i = 0; i<totalPortfolioItm; i++) {
        portfolioItems[i].addEventListener("click", function() {
            itemIndex = i;
            changeItem();
            toggleLightbox();
        })
    }      

    function toggleLightbox() {
        lightbox.classList.toggle("open");
    }
    function changeItem() {
        imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src = imgSrc;
        lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalPortfolioItm;
    }
    function prevItem() {
        if (itemIndex === 0) {
            itemIndex = totalPortfolioItm - 1;
        } else {
            itemIndex--;
        }
        changeItem();
    }
    function nextItem() {
        if (itemIndex === totalPortfolioItm - 1) {
            itemIndex = 0;
        } else {
            itemIndex++;
        }
        changeItem();
    }

    lightbox.addEventListener("click", function() {
        if (event.target === lightboxClose) {
            toggleLightbox();
        }
    })

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),      
      navListCount = navList.length,
      allSection = document.querySelectorAll(".section");
      totalSection = allSection.length;
      
    for(i=0; i<navListCount; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            for(j=0; j<navListCount; j++){
                navList[j].querySelector("a").classList.remove("active"); 
            }
            this.classList.add("active");
        })
    }