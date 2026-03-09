const wrestlers=[

{name:"Lebron",stars:3,wins:12,losses:2,userId:1},
{name:"Jibcoo",stars:3,wins:10,losses:3,userId:1},
{name:"Hunt",stars:2,wins:8,losses:5,userId:1},
{name:"Igor",stars:2,wins:7,losses:5,userId:1}

]

function calculateScore(w){

return (w.wins*3)-(w.losses*2)+(w.stars*5)

}

function updateRankings(){

wrestlers.sort((a,b)=>calculateScore(b)-calculateScore(a))

renderRankings()
renderP4P()

}

function renderRankings(){

const table=document.getElementById("rankingTableBody")

if(!table) return

table.innerHTML=""

wrestlers.forEach((w,i)=>{

table.innerHTML+=`

<tr onclick="openStats('${w.name}')">

<td>${i+1}</td>

<td>
<img class="avatar"
src="https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${w.userId}&size=150x150&format=Png">
${w.name}
</td>

<td>${w.stars}⭐</td>

<td>${w.wins}-${w.losses}</td>

</tr>

`

})

}

function renderP4P(){

const list=document.getElementById("p4pList")

if(!list) return

list.innerHTML=""

wrestlers.slice(0,5).forEach(w=>{

list.innerHTML+=`<li>${w.name} ${w.stars}⭐</li>`

})

}

function openStats(name){

const w=wrestlers.find(x=>x.name===name)

document.getElementById("wrestlerCard").style.display="block"

document.getElementById("cardName").innerText=w.name
document.getElementById("cardRecord").innerText="Record: "+w.wins+"-"+w.losses

}

function submitMatch(){

let name=document.getElementById("matchName").value
let link=document.getElementById("matchLink").value

let feed=document.getElementById("matchFeed")

feed.innerHTML+=`

<div class="match">

<h3>${name}</h3>

<iframe width="300" height="200"
src="${link.replace('watch?v=','embed/')}"
allowfullscreen></iframe>

</div>

`

}

function loginAdmin(){

let pass=document.getElementById("adminPass").value

if(pass==="flowadmin"){

document.getElementById("adminTools").style.display="block"

}

}

window.onload=updateRankings

const ctx=document.getElementById('performanceChart')

if(ctx){

new Chart(ctx,{
type:'line',
data:{
labels:['Week1','Week2','Week3','Week4'],
datasets:[{
label:'Lebron',
data:[3,4,5,6],
borderWidth:3
}]
}
})

}