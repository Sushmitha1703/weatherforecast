const degree= document.querySelector('.w1')
const place=document.querySelector('.small')
const dateTime=document.querySelector('.w2')
const symbol=document.querySelector('.icon')
const conditions=document.querySelector('.w3 span')
const form=document.querySelector('form')
const inputsearch=document.querySelector('input')

let target ='delhi'
const fetchdata=async(target)=>{
    try{
    const url=`http://api.weatherapi.com/v1/current.json?key=15a97f155d6043149a8103638223108&q=${target}`
    const response= await fetch(url);
    const data=await response.json();
    console.log(data)
    const {            
        current:{
            temp_c,   //temp_c=data.temp_c
            condition:{text,icon},
        },
        location:{name,localtime}//name=location.name
     }=data;
    update(temp_c,name,icon,text,localtime)}
    catch(error){
        alert('please enter a valid location');
    }
}

function update(temp,location,icon,text,time){
    degree.innerHTML=`${temp}&deg`
    place.innerHTML=location
    symbol.src=`http://${icon}`
    const correctdate=time.split(" ")[0]
    const correctTime=time.split(" ")[1]
    const daynum=new Date(correctdate).getDay()
    const day=getDay(daynum)
    dateTime.innerHTML=`${correctdate} ${day}  ${correctTime}`
    conditions.innerHTML=text
}



function getDay(num){
    switch (num) {
        case 0:
            return "Sunday"
            
        case 1:
            return "Monday"
            

        case 2:
            return "Tuesday"
            

        case 3:
            return "Wednesday"
            

        case 4:
            return "Thursday"
            

        case 5:
            return "Friday"
            

        case 6:
            return "Saturday"
            
        default:
            return "Cant find day sorry :("
            
    }
}

//fetchdata();

const search=(e)=>{
    e.preventDefault();
    target=inputsearch.value;
    fetchdata(target)
}


form.addEventListener('submit',search)
