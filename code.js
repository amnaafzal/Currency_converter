let dropdowns= document.querySelectorAll(".dropdown select")
let btn=document.querySelector('.btn')
let amt=document.querySelector(".amount input")

for (const select of dropdowns) {
  
  for (const codes in currencyCountryCodes) {
    
    
    let newoption= document.createElement('option')
    
    newoption.innerText=codes;

    newoption.value=codes;

    if (select.name==='from'&& codes==='USD') {

      newoption.selected='selected'
      
    } else if (select.name==='to'&& codes==='PKR') {
      
      newoption.selected='selected'
      
    } 
    
    select.append(newoption);
    
    
  }
  
  select.addEventListener("change",(evt)=>{
    updateFlag(evt.target)
  })
  
  
}


const updateFlag=(element)=>{
  let currcode=element.value;
   console.log(currcode)
  let contryCode=currencyCountryCodes[currcode]
  // console.log(contryCode)
  let NewSrc=`https://flagsapi.com/${contryCode}/flat/64.png`
  let img=element.parentElement.querySelector('img')
  
  img.src=NewSrc;
  
 

  
  
}




btn.addEventListener("click",(evt)=>{
  evt.preventDefault()
  console.log(amt.value)
  let amtVal=amt.value
  if(amtVal==="" || amtVal<1){
    
    amtVal=1;
    amt.value="1"
    
  }
  let Fromoption=document.querySelector("#fromSelect")
   let curencyCodeFrom=Fromoption.value
   console.log(curencyCodeFrom)

  let Tooption=document.querySelector("#toSelect")
   let curencyCodeTo=Tooption.value
   console.log(curencyCodeTo)

   

  
  let url=`https://api.currencyapi.com/v3/latest?apikey=cur_live_GFoXgccVkgVbTHvlLjiZt4LF3RdpejOooQF2o0LO&base_currency=${curencyCodeFrom}`
  
  let conversion= async()=>{
     let response=await fetch(url)
     let data=await response.json()
     let exchangeRate = data.data[curencyCodeTo].value;
     
    
    
   
    console.log(exchangeRate*amtVal)

   document.querySelector(".ratepara").innerText = `${amtVal} ${curencyCodeFrom} = ${(exchangeRate*amtVal).toFixed(3)} ${curencyCodeTo}`;
  
  }
  conversion();
})





 
 


