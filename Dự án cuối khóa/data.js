var data = [
    {
        id: 1,
        img: "./img/homealone1.jpg",
        name: "Home Alone 1"
    },
    {
        id: 2,
        img: "./img/homealone2.jpg",
        name: "Home Alone 2"
    },
    {
        id: 3,
        img: "./img/grinch.jpg",
        name: "How The Grinch Stole Christmas"
    },
    {
        id: 4,
        img: "./img/thesanta.jpg",
        name: "The Santa Claus"
    },
    {
        id: 5,
        img: "./img/elf.jpg",
        name: "Elf"
    },
    {
        id: 6,
        img: "./img/holiday.jpg",
        name: "The Holiday"
    },
    {
        id: 7,
        img: "./img/carol.jpg",
        name: "Christmast Carol"
    },
    {
        id: 8,
        img: "./img/scrooge.jpg",
        name: "Scrooged"
    },
    {
        id: 9,
        img: "./img/polar.jpg",
        name: "The Polar Express"
    },
    {
        id: 10,
        img: "./img/nightmare.jpg",
        name: "The Nightmare Before Christmast"
    }
];
for(let i =0; i < data.length; i++){
    addDiv1(i)
}
function addDiv1(i){
    var add = document.createElement("div")
    Fimg = data[i].img
    Fname = data[i].name
    if(i!=9 && i!=2) var inside = '<div class = "films"><img src='+Fimg+' alt="" width="180px" height="150px"><h3 class = "f">'+Fname+'</h3>'
    else var inside = '<div class = "films" id = "spe"><img src='+Fimg+' alt="" width="180px" height="150px" ><h3 class = "f">'+Fname+'</h3>'
    add.innerHTML = inside
    var mov1 = document.querySelector(".movie1")
    mov1.append(add)
}
var data2 = [
    {
        id: 1,
        img: "./img/acalichristmas.jpg",
        name: "A California Christmas"
    },
    {
        id: 2,
        img: "./img/acastle.jpg",
        name: "A Castle For Christmas"
    },
    {
        id: 3,
        img: "./img/fallingforchristmas.jpg",
        name: "Falling For Christmas"
    },
    {
        id: 4,
        img: "./img/grinch2.jpg",
        name: "Grinch"
    },
    {
        id: 5,
        img: "./img/happiestseason.jpg",
        name: "Happiest Season"
    },
    {
        id: 6,
        img: "./img/holidate.jpg",
        name: "Holidate"
    },
    {
        id: 7,
        img: "./img/klaus.jpg",
        name: "Klaus"
    },
    {
        id: 8,
        img: "./img/lastchristmas.jpg",
        name: "Last Chrismas"
    },
    {
        id: 9,
        img: "./img/lovehard.jpg",
        name: "Love Hard"
    },
    {
        id: 10,
        img: "./img/spirited.jpg",
        name: "Spirited"
    }
];
for(let i =0; i < data2.length; i++){
    addDiv2(i)
}
function addDiv2(i){
    var add = document.createElement("div")
    let Fimg = data2[i].img
    let Fname = data2[i].name
    var inside = '<div class = "films"><img src='+Fimg+' alt="" width="180px" height="150px" ><h3 class = "f">'+Fname+'</h3>'
    add.innerHTML = inside
    var mov2 = document.querySelector(".movie2")
    mov2.append(add)
}
var data3 = [
    {
        id: 1,
        img: "./img/carol.jpg",
        name: "A Christmas Carol"
    },
    {
        id: 2,
        img: "./img/daddy.jpg",
        name: "Daddy's Home 2"
    },
    {
        id: 3,
        img: "./img/chronicles.jpg",
        name: "The Christmas Chronicles"
    },
    {
        id: 4,
        img: "./img/grinch2.jpg",
        name: "Grinch"
    },
    {
        id: 5,
        img: "./img/homealone1.jpg",
        name: "Home Alone 1"
    },
    {
        id: 6,
        img: "./img/homealone2.jpg",
        name: "Home Alone 2"
    },
    {
        id: 7,
        img: "./img/klaus.jpg",
        name: "Klaus"
    },
    {
        id: 8,
        img: "./img/nightmare.jpg",
        name: "The Nightmare Before Chrismas"
    },
    {
        id: 9,
        img: "./img/love.jpg",
        name: "Love Actually"
    },
    {
        id: 10,
        img: "./img/die.jpg",
        name: "Die Hard"
    }
];
for(let i =0; i < data3.length; i++){
    addDiv3(i)
}
function addDiv3(i){
    var add = document.createElement("div")
    let Fimg = data3[i].img
    let Fname = data3[i].name
    var inside = '<div class = "films"><img src='+Fimg+' alt="" width="180px" height="150px" ><h3 class = "f">'+Fname+'</h3>'
    add.innerHTML = inside
    var mov2 = document.querySelector(".movie3")
    mov2.append(add)
}
let arrow2 = document.querySelector(".arrow2")
let movie1 = document.querySelector(".movie1")
var cnt1 = 0;
arrow2.addEventListener("click",()=>{
    cnt1++;
    if(cnt1 > 0) arrow1.style.visibility = "initial"
    if(cnt1 == 5){
        let p = movie1.computedStyleMap().get("transform")[0].x.value
        movie1.style.transform = `translateX(${p-243}px)`
        arrow2.style.visibility = "hidden"
    }
    if(cnt1 < 5){
        let p = movie1.computedStyleMap().get("transform")[0].x.value
        movie1.style.transform = `translateX(${p-243}px)`
    }
})
let arrow1 = document.querySelector(".arrow1")
arrow1.style.visibility = "hidden"
arrow1.addEventListener("click",()=>{
    if(cnt1 <= 5) arrow2.style.visibility = "initial"
    
    if(cnt1 > 0){
        cnt1--;
        arrow1.style.visibility = "visible"
        let p = movie1.computedStyleMap().get("transform")[0].x.value
        movie1.style.transform = `translateX(${p+243}px)`
    }
    if(cnt1 == 0) arrow1.style.visibility = "hidden"
})
let arrow4 = document.querySelector(".arrow4")
let movie2 = document.querySelector(".movie2")
var cnt2 = 0;
arrow4.addEventListener("click",()=>{
    cnt2++;
    if(cnt2 > 0) arrow3.style.visibility = "initial"
    if(cnt2 == 5){
        let p = movie2.computedStyleMap().get("transform")[0].x.value
        movie2.style.transform = `translateX(${p-243}px)`
        arrow4.style.visibility = "hidden"
    }
    if(cnt2 < 5){
        let p = movie2.computedStyleMap().get("transform")[0].x.value
        movie2.style.transform = `translateX(${p-243}px)`
    }
})
let arrow3 = document.querySelector(".arrow3")
arrow3.style.visibility = "hidden"
arrow3.addEventListener("click",()=>{
    if(cnt2 <= 5) arrow3.style.visibility = "initial"
    if(cnt2 > 0){
        cnt2--;
        arrow3.style.visibility = "visible"
        let p = movie2.computedStyleMap().get("transform")[0].x.value
        movie2.style.transform = `translateX(${p+243}px)`
    }
    if(cnt2 == 0) arrow3.style.visibility = "hidden"
})
let arrow6 = document.querySelector(".arrow6")
let movie3 = document.querySelector(".movie3")
var cnt3 = 0;
arrow6.addEventListener("click",()=>{
    cnt3++;
    if(cnt3 > 0) arrow5.style.visibility = "initial"
    if(cnt3 == 5){
        let p = movie3.computedStyleMap().get("transform")[0].x.value
        movie3.style.transform = `translateX(${p-243}px)`
        arrow6.style.visibility = "hidden"
    }
    if(cnt3 < 5){
        let p = movie3.computedStyleMap().get("transform")[0].x.value
        movie3.style.transform = `translateX(${p-243}px)`
    }
})
let arrow5 = document.querySelector(".arrow5")
arrow5.style.visibility = "hidden"
arrow5.addEventListener("click",()=>{
    if(cnt3 <= 5) arrow6.style.visibility = "initial"
    if(cnt3 > 0){
        cnt3--;
        arrow5.style.visibility = "visible"
        let p = movie3.computedStyleMap().get("transform")[0].x.value
        movie3.style.transform = `translateX(${p+243}px)`
    }
    if(cnt3 == 0) arrow5.style.visibility = "hidden"
})
function myFunction(){
    var input = document.getElementById("Input").value
    var search=document.querySelector(".search")
    var filter = input.toUpperCase()
    var vo = document.querySelectorAll(".f")
    for(let x = 0; x < vo.length; x++){
        var a = vo[x].innerText
        var i = vo[x].parentElement
        if(a.toUpperCase().indexOf(filter) > -1){
            search.append(i);
        }
    }
}