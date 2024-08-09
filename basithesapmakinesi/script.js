const buton=document.getElementsByClassName('btn')
const ekran=document.getElementById('display')
const esittir=document.getElementById('esittir')
const temizle=document.getElementById('temizle')


for (let i=0;i<16;i++){
    if(i!=13 &&i!=14){ buton[i].addEventListener('click',function(){
        ekran.value=ekran.value+this.value
      })}
 
}

esittir.addEventListener('click',function(){
    ekran.value=eval(ekran.value)
})

temizle.addEventListener('click',function(){
    ekran.value=" "
})

/*  
     kullanacağımız butonları id ya da calss ile seçiyoruz,16 butonu kapsaması için for döngüsü kullanıyoruz,eşittir ve c butonu ekranda yazılmsaın diye onları devre dışı bırakıyoruz
    





*/