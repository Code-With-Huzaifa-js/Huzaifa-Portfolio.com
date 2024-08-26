






// these are all the variables stored here

let Sun = document.querySelector(".fa-sun");

let Moon = document.querySelector(".fa-moon");

let Navbar = document.querySelector(".navbar");

let Content = document.querySelector(".content");

let Global = document.querySelector(".fa-globe");

let Social_Media = document.querySelector(".social");

let Bars = document.querySelector(".barsMenu");

let Clsoe = document.querySelector(".fa-xmark");

let AboutClick = document.getElementById("About");

let HomeClick = document.getElementById("Home");

let ServiceClick = document.getElementById("Services");

let PortolioClick = document.getElementById("Portfolio");

let Abtcontainer = document.querySelector(".abtcontainer")

let abtHeading = document.querySelector(".abt");

let abtColums = document.querySelectorAll(".hNames");

let abtparaBorders = document.querySelectorAll(".pBorder");

let abtpercent = document.querySelectorAll(".per");

let ExpBox = document.querySelectorAll(".edBox");

let Servicecontainer = document.querySelector(".SerContainer");

let ServicesBoxes = document.getElementById("icon1");

let iconvisi = document.getElementById("icon");

let showovewrlay = document.querySelector(".overbody");

let readbtn1 = document.getElementById("readbtn1");

let readbtn2 = document.getElementById("readbtn2");

let readbtn3 = document.getElementById("readbtn3");

let appoverlay = document.querySelector(".app-design");

let weboverlay = document.querySelector(".web-design");

let overlayClose = document.querySelector(".fa-close");

let overlayClose2 = document.querySelector(".fa-close2");

let overlayClose3 = document.querySelector(".fa-close3");

let serfontColor = document.querySelector(".ser");

let boxfontColor = document.querySelectorAll(".serboxes");

let AllproSelector = document.getElementById("All");

let WebdevproSelector = document.getElementById("webDev");

let AppDesproSelector = document.getElementById("appDes");

let WebDesproSelector = document.getElementById("webDes");

let removeApp = document.querySelectorAll(".removeAppDes");

let removeWebDes = document.querySelectorAll(".removeWebDes");

let removeWebDev = document.querySelectorAll(".removeWebDev");

let Contact = document.querySelector(".contactContainer");

let ContactClick = document.getElementById("contact");

let blackFont = document.querySelectorAll(".light");


let Social_display = 1;

// variable stored ended






// all dark and Night mode Event listener are here


Sun.addEventListener("click", () => {
    Sun.style.display = "none";
    Moon.style.display = "block";
    document.body.style.background = "rgb(224, 224, 224)";
    document.body.style.transition = "all 0.5s";
    Navbar.style.cssText = "color: black; background: white;";
    Content.style.cssText = "color: black";
    Global.style.cssText = "background: white; color:black;";
    Social_Media.style.cssText = "background: white; color: black;";
    Abtcontainer.style.cssText = 'background:rgb(224, 224, 224); color: black; ';
    abtHeading.style.cssText = "color:black;";
    Bars.style.cssText = "color:black;";
    Servicecontainer.style.cssText="background:rgb(224, 224, 224);";
    serfontColor.style.cssText = "color:black";
    Contact.style.cssText = "background:rgb(224, 224, 224);";

    let PortfolioOpen = document.querySelector(".projectBody");

    PortfolioOpen.style.cssText = "background:rgb(224, 224, 224);";

    let projectHeading = document.querySelectorAll(".head1");

    let projectBoxes = document.querySelectorAll(".probox");

    for(let y of projectBoxes){
        y.style.cssText = "border:2px solid gray;";
    }
    for(let y of projectHeading){
        y.style.cssText = "color:black;";
    }

    for(let y of boxfontColor){
        y.style.cssText = "color:black; background: white;";
    }

    for(let y of abtColums){
        y.style.cssText = "color:black;";
    };
    for(let x of abtparaBorders){
        x.style.cssText = "border-bottom :1px solid black;";
    };

    for(let z of abtpercent){
        z.style.background = " rgb(139, 139, 139, 0.5)";
    };

    for(let z of ExpBox){
        z.style.cssText = "background-color: white;";
    };

    for(let c of blackFont){
        c.style.cssText = "color:black; font-weight :bolder;"
    }

} );

Moon.addEventListener("click", () => {
    Sun.style.display = "block";
    Moon.style.display = "none";
    document.body.style.background = " rgb(26, 26, 26)";
    document.body.style.transition = "all 0.5s";
    Navbar.style.cssText = "color: white; background: rgba(128, 128, 128, 0.432);";
    Content.style.cssText = "color: white";
    Global.style.cssText = "background: rgba(128, 128, 128, 0.432) ; color: white;";
    Social_Media.cssText = "background: rgba(128, 128, 128, 0.432);";
    Social_Media.style.cssText = "background: rgba(128, 128, 128, 0.432); color: black;";
    Abtcontainer.style.cssText = 'background:rgb(26, 26, 26); color: white;';
    abtHeading.style.cssText = "color:white;";
    Bars.style.cssText = "color:white;";
    Servicecontainer.style.cssText="background:rgb(26, 26, 26);";
    serfontColor.style.cssText = "color:white;";
    Contact.style.cssText = "background:rgb(26, 26, 26);";

    let projectHeading = document.querySelectorAll(".head1");
    let projectBoxes = document.querySelectorAll(".probox");

    for(let y of projectBoxes){
        y.style.cssText = "border:2px solid gray;";
    }

    for(let y of projectHeading){
        y.style.cssText = "color:white;";
    }

    let PortfolioOpen = document.querySelector(".projectBody");

    PortfolioOpen.style.cssText = "background:rgb(26, 26, 26)";

    for(let y of boxfontColor){
        y.style.cssText = "color:white;background-color: rgba(48, 48, 48, 0.548);;";
    }
    for(let y of abtColums){
        y.style.cssText = "color:white;";
    }
    for(let x of abtparaBorders){
        x.style.cssText = "border-bottom :1px solid  rgba(255, 255, 255, 0.322);";
    }
    for(let z of abtpercent){
        z.style.background = " rgb(48, 48, 48)";
    }
    for(let z of ExpBox){
        z.style.cssText = "rgba(48, 48, 48, 0.548)";
    }
    for(let c of blackFont){
        c.style.cssText = "color:white;"
    }
} );

// all dark and Night mode Event listener end here

Global.addEventListener("click", () => {

    if(Social_display == 1){
        Social_Media.classList.add("socialVisi");
        Social_display = 0;
    }else{
        Social_Media.classList.remove("socialVisi"); 
        Social_display = 1;
    }
});

// Social Media Click


// Bars navbar show enevt listener

Bars.addEventListener("click", () => {
    Navbar.classList.add("navVisi");
});

Clsoe.addEventListener("click", () => {
    Navbar.classList.remove("navVisi");
});

// Bar navbar show ended


// navbar Click Section JS Code Start here

AboutClick.addEventListener("click", () => {

    Abtcontainer.classList.add("abtcontainerVisi");
    AboutClick.classList.add("Home");
    HomeClick.classList.remove("Home");
    Navbar.classList.remove("navVisi");
    ServiceClick.classList.remove("Home");
    Servicecontainer.classList.remove("ServiceVisi");
    PortolioClick.classList.remove("Home");
    Contact.classList.remove("contactVisi");
    ContactClick.classList.remove("Home");

    let PortfolioOpen = document.querySelector(".projectBody");
    PortfolioOpen.classList.remove("ProjectVisi");


    gsap.from(".aboutContent .stagger", {
        x:100,
        opacity:0,
        duration:0.8,
        delay:0.5,
        stagger:0.2
    })


});

HomeClick.addEventListener("click", () => {
    Abtcontainer.classList.remove("abtcontainerVisi");
    HomeClick.classList.add("Home");
    AboutClick.classList.remove("Home");
    Navbar.classList.remove("navVisi");
    ServiceClick.classList.remove("Home");
    Servicecontainer.classList.remove("ServiceVisi");
    PortolioClick.classList.remove("Home");
    Contact.classList.remove("contactVisi");
    ContactClick.classList.remove("Home");

    let PortfolioOpen = document.querySelector(".projectBody");
    PortfolioOpen.classList.remove("ProjectVisi");
});

ServiceClick.addEventListener("click", () => {
    Servicecontainer.classList.add("ServiceVisi");
    ServiceClick.classList.add("Home");
    HomeClick.classList.remove("Home");
    AboutClick.classList.remove("Home");
    Navbar.classList.remove("navVisi");
    Abtcontainer.classList.remove("abtcontainerVisi");
    PortolioClick.classList.remove("Home");
    Contact.classList.remove("contactVisi");
    ContactClick.classList.remove("Home");

    let PortfolioOpen = document.querySelector(".projectBody");
    PortfolioOpen.classList.remove("ProjectVisi");

    gsap.from(".ser",{
        y:-30,
        duration:1,
        delay:0.5,
        opacity:0
    });


    gsap.from(".serboxes",{
        y:50,
        duration:0.8,
        delay:0.7,
        opacity:0,
        stagger:0.3
    })

});


PortolioClick.addEventListener("click", () => {
    PortolioClick.classList.add("Home");
    Servicecontainer.classList.remove("ServiceVisi");
    ServiceClick.classList.remove("Home");
    HomeClick.classList.remove("Home");
    AboutClick.classList.remove("Home");
    Navbar.classList.remove("navVisi");
    Abtcontainer.classList.remove("abtcontainerVisi");
    Contact.classList.remove("contactVisi");
    ContactClick.classList.remove("Home");

    let PortfolioOpen = document.querySelector(".projectBody");
    PortfolioOpen.classList.add("ProjectVisi");

    gsap.from(".opa",{
        opacity:0,
        x:20,
        duration:0.8,
        stagger:0.2,
        delay:0.5
    });

    gsap.from(".probox",{
        opacity:0,
        delay:0.7,
        duration:0.5,
        stagger:0.2
    })
});

ContactClick.addEventListener("click", () =>{
    PortolioClick.classList.remove("Home");
    Servicecontainer.classList.remove("ServiceVisi");
    ServiceClick.classList.remove("Home");
    HomeClick.classList.remove("Home");
    AboutClick.classList.remove("Home");
    Navbar.classList.remove("navVisi");
    Abtcontainer.classList.remove("abtcontainerVisi");
    Contact.classList.add("contactVisi");
    ContactClick.classList.add("Home");

    let PortfolioOpen = document.querySelector(".projectBody");
    PortfolioOpen.classList.remove("ProjectVisi");

    gsap.from(".cont ",{
        opacity:0,
        duration:1,
        delay:0.5,
        x:-30
    });

    gsap.from(".new1 ",{
        opacity:0,
        duration:0.8,
        delay:0.7,
        x:-50
    })
    gsap.from(".new2 ",{
        opacity:0,
        duration:0.8,
        delay:0.7,
        x:50
    });

    gsap.from(".con", {
        y:100,
        duration:0.8,
        opacity:0,
        delay:1,
        ease:"bounce"
    })

})

// navbar Click codes end here



// Services Code for js start here


ServicesBoxes.addEventListener("mouseover", () => {

    iconvisi.classList.add("iconsvisible");

});

ServicesBoxes.addEventListener("mouseleave", () => {

    iconvisi.classList.remove("iconsvisible");

});

// Services code for js ends here


// service click event code

readbtn1.addEventListener("click", () => {
    showovewrlay.classList.add("overlayVisi");
});

readbtn2.addEventListener("click", () => {
    appoverlay.classList.add("overlayVisi");
});

readbtn3.addEventListener("click", () => {
    weboverlay.classList.add("overlayVisi");
});

overlayClose.addEventListener("click", () => {

    showovewrlay.classList.remove("overlayVisi");

});

overlayClose2.addEventListener("click", () => {

    appoverlay.classList.remove("overlayVisi");

});

overlayClose3.addEventListener("click", () => {

    weboverlay.classList.remove("overlayVisi");

});










// this section is or project selector



AllproSelector.addEventListener("click", () => {
    AllproSelector.classList.add("enablebtn");
    WebDesproSelector.classList.remove("enablebtn");
    AppDesproSelector.classList.remove("enablebtn");
    WebdevproSelector.classList.remove("enablebtn");

    for(let appdes of removeApp){
        appdes.style.cssText = "display: block;"
    };

    for(let webdes of removeWebDes){
        webdes.style.cssText = "display: block;"
    };

    for(let webdev of removeWebDev){
        webdev.style.cssText = "display: block;"
    };

    for(let webdes of removeWebDes){
        webdes.style.cssText = "display: block;"
    };
}); 

WebdevproSelector.addEventListener("click", () => {
    AllproSelector.classList.remove("enablebtn");
    WebdevproSelector.classList.add("enablebtn");
    AppDesproSelector.classList.remove("enablebtn");
    WebDesproSelector.classList.remove("enablebtn");




    for(let appdes of removeApp){
        appdes.style.cssText = "display: none;"
    };

    for(let webdes of removeWebDes){
        webdes.style.cssText = "display: none;"
    };
    for(let webdev of removeWebDev){
        webdev.style.cssText = "display: block;"
    };

}); 
AppDesproSelector.addEventListener("click", () => {
    AllproSelector.classList.remove("enablebtn");
    WebdevproSelector.classList.remove("enablebtn");
    AppDesproSelector.classList.add("enablebtn");
    WebDesproSelector.classList.remove("enablebtn");

    for(let appdes of removeApp){
        appdes.style.cssText = "display: block;"
    };
    for(let webdes of removeWebDes){
        webdes.style.cssText = "display: none;"
    };
    for(let webdev of removeWebDev){
        webdev.style.cssText = "display: none;"
    };

}); 

WebDesproSelector.addEventListener("click", () => {
    AllproSelector.classList.remove("enablebtn");
    WebdevproSelector.classList.remove("enablebtn");
    AppDesproSelector.classList.remove("enablebtn");
    WebDesproSelector.classList.add("enablebtn");

    for(let webdes of removeWebDes){
        webdes.style.cssText = "display: block;"
    };

    for(let webdev of removeWebDev){
        webdev.style.cssText = "display: none;"
    };

    for(let appdes of removeApp){
        appdes.style.cssText = "display: none;"
    };
}); 