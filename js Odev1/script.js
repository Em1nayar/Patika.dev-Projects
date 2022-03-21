
const div = document.querySelector("#main");
let isim = prompt("İsminizi girin...");

let saaat;//saat değerimizi yükleyeceğimiz değişken.

         function digitalsaat()

            {

               const suan = new Date();

               const dsaat = suan.getHours();

               const  ddak = suan.getMinutes();

               const sny = suan.getSeconds();

               const day = suan.getDay();

               function getdays(){
                   if(day ===0){
                    return "Pazar"
                   }
                   else if(day === 1){
                    return "Pazartesi"
                   }
                   else if(day === 2){
                    return "Salı"
                   }
                   else if(day === 3){
                    return "Çarşamba"
                   }
                   else if(day === 4){
                    return "Perşembe"
                   }
                   else if(day === 5){
                    return "Cuma"
                   }
                   else if(day === 6){
                    return "Cumartesi"
                   }
               }

               saaat = dsaat + ':' + ((ddak<10) ? '0' : '') + ddak + ':' + ((sny<10) ? '0' : '') + sny +" "+getdays() ;

               //saat, dakika, saniye değerlerini birleştirdik

               div.innerHTML = `<h4> Merhaba '${isim}' Hoş geldin! </h4>` +saaat + `

                    <p> tarihinde Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümü 1.Ödevdesiniz.</p>
               
               `// div id'li nesneye taşıdık.

               setTimeout("digitalsaat()", 1000); // saniyede bir güncelle

        }

if(isim == ""){
   div.innerHTML=`Lütfen sayfayı yenileyip İsminizi girin!`
}
else{
    digitalsaat();
}



