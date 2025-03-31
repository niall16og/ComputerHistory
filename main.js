
const contents = document.querySelectorAll('.content');
contents.forEach((element, index) => {
    if ((index + 1) % 2 === 0) {
        element.classList.add('even');
    }
});

const timeline = document.querySelector('.timeline');

function scrollRight() {
	timeline.scrollLeft += 680;
}

function scrollBack() {
	console.log("called");
	console.log("before", timeline.scrollLeft);
	timeline.scrollLeft -= 600;
	console.log("after");
}

//ANIMATION

var classes;

const s40 = document.querySelector(".s40");
const s50 = document.querySelector(".s50");
const s60 = document.querySelector(".s60");
const s70 = document.querySelector(".s70");
const s80 = document.querySelector(".s80");
const s90 = document.querySelector(".s90");
const s00 = document.querySelector(".s00");
const s10 = document.querySelector(".s10");
const s20 = document.querySelector(".s20");
const sPres = document.querySelector(".sPres");
const sFut = document.querySelector(".sFut");
const sCont = document.querySelectorAll(".sCont");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.65,
});


const observerAside = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        //console.log(entry);
        
        classes = entry.target.classList;
        //console.log(classes);
        class1 = [...classes];            
        //console.log(classes);
        class1 = class1.filter(item => item !== "content" && item !== "animate" && item !== "even");
        //console.log(class1);

        if (classes.contains("d40")) {
            decade = s40;
        } else if (classes.contains("d50")) {
            decade = s50;
        } else if (classes.contains("d60")) {
            decade = s60;
        } else if (classes.contains("d70")) {
            decade = s70;
        } else if (classes.contains("d80")) {
            decade = s80;
        } else if (classes.contains("d90")) {
            decade = s90;
        } else if (classes.contains("d00")) {
            decade = s00;
        } else if (classes.contains("d10")) {
            decade = s10;
        } else if (classes.contains("d20")) {
            decade = s20;
        } else if (classes.contains("pres")) {
            decade = sPres;
        } else if (classes.contains("future")) {
            decade = sFut;
        } else {
            decade = "";
        }
        console.log(decade);
        
        let aside = document.querySelector("aside");
        
        //let decText = aside.querySelector(`data-id="${class1[0]}"`);
        
        
        if (entry.isIntersecting) {
            
            if (decade.classList.contains("show")) {
                console.log("Shown");
            } else {
                decade.classList.add("show");
            }
            
            //document.querySelector("aside").innerHTML += `<h1>${decade}</h1><br><p>Lorem Ipsum jfjdsnfjennfnf</p>`;
            
        }
        
        if (entry.isIntersecting === false) {
            //document.querySelector("aside").innerHTML -= `<h1>${decade}</h1><br><p>Lorem Ipsum jfjdsnfjennfnf</p>`;
            sCont.forEach((item) => {
                if (item !== decade) {
                    item.classList.remove("show");
                }});
        }
    });
},{
    threshold: 0.9,
});



const items = document.querySelectorAll('.content');
items.forEach((item) => observer.observe(item));
items.forEach((item) => observerAside.observe(item));

//console.log(classes, "again");

const observerEven = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

const itemsEven = document.querySelectorAll('.even');
itemsEven.forEach((item) => observerEven.observe(item));



const content = document.querySelectorAll('.content');

content.forEach((element) => {
    element.addEventListener('animationend', (event) => {
        if (event.animationName === 'linesN' || event.animationName === 'linesEven') {
            const innerBox = element.querySelector('.innerContent');
            if (innerBox) {
                innerBox.classList.add('show');
            }
        }
    });
});

/*

const s40 = document.querySelectorAll(".s40");
const s50 = document.querySelectorAll(".s50");
const s60 = document.querySelectorAll(".s60");
const s70 = document.querySelectorAll(".s70");
const s80 = document.querySelectorAll(".s80");
const sPres = document.querySelectorAll(".sPres");
const sFut = document.querySelectorAll(".sFut");

var decade;

const observerSide = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
			console.log("on the screen", decade);
			document.querySelector("aside").innerHTML += `<h1>${decade}</h1><br><p>Lorem Ipsum jfjdsnfjennfnf</p>`;
        }
    });
});

function checkIt(a) {
    a.forEach((a) => observerSide.observe(a));
    if (entry.target.classList.contains("d40")) {
        decade = "1940s";
        console.log(decade);
    } else if (entry === d50) {
        decade = "1950s";
    } else if (entry === d60) {
        decade = "1960s";
    } else if (entry === d70) {
        decade = "1970s";
    } else if (entry === d80) {
        decade = "1980s";
    } else if (entry === pres) {
        decade = "Present";
    } else if (entry === future) {
        decade = "Future";
    } else {
        decade = "";
    }
}

/*
const observerSideNeg = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === false) {
			console.log("off the screen");
			document.querySelector("aside").innerHTML = '<h1>Current Document</h1><br>';
        }
    });
});

checkIt(content);

d40.forEach((d40) => observerSide.observe(d40));
d40.forEach((d40) => observerSideNeg.observe(d40));
d50.forEach((d50) => observerSide.observe(d50));
d50.forEach((d50) => observerSideNeg.observe(d50));
d60.forEach((d60) => observerSide.observe(d60));
d60.forEach((d60) => observerSideNeg.observe(d60));
d70.forEach((d70) => observerSide.observe(d70));
d70.forEach((d70) => observerSideNeg.observe(d70));
d80.forEach((d80) => observerSide.observe(d80));
d80.forEach((d80) => observerSideNeg.observe(d80));
pres.forEach((pres) => observerSide.observe(pres));
pres.forEach((pres) => observerSideNeg.observe(pres));
future.forEach((future) => observerSide.observe(future));
future.forEach((future) => observerSideNeg.observe(future));
*/