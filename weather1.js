import inquirer from 'inquirer'
async function weather(city){
    const cavab=await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city   +'&appid=13ca0c89d8cd04873921fbc32a542965&units=metric')
    if(cavab.status!==200){
        return
    }
    const data=await cavab.json()
    console.log('Hava durumu  '+data.weather[0].description)
    console.log('Temperatur  '+data.main.temp)
    
    
    }
    const prompt=inquirer.createPromptModule()
prompt([{
   message:'Şəhəri daxil edin',
   type:'input',
   name:'city_name'
}]).then(cavab=>{
    weather(cavab.city_name)
})
    
    