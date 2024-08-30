let arr = [
    {
        dp:"https://images.unsplash.com/photo-1724646559793-6a1b1462cd8c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://plus.unsplash.com/premium_photo-1664046912483-911576992f5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3Rvcnl8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1566274233415-44f9cf78a9ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1566274233403-96b243bb03d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1569580388550-50907e7bad86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1724566700907-79f2221a5fc8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1724785480561-cd877934be88?q=80&w=1808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1711051506337-200ba1b5eef0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://plus.unsplash.com/premium_photo-1722081393584-895a109a63b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

let str = "";
let stories = document.querySelector('#stories');

arr.forEach(function(elem,i){
    str+=`<div class="story"><img id="${i}" src="${elem.dp}" alt=""></div>`
})

stories.innerHTML=str;

stories.addEventListener('click',function(dets){
    document.querySelector('#full-img').style.display = "block";
    document.querySelector('#full-img').style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector('#full-img').style.display = "none";
    },3000)
})