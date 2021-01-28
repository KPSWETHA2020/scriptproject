

volumeBtn = document.querySelector('#button_volume');

volumeBtn.volumeEventListener('click',function(e){
    alert("volume button clicked");

    txtRADIUS = document.querySelector('#value_radius');
    txtHEIGHT = document.querySelector('#value_height');
    txtRESULT = document.querySelector('#value_result');
     
    let result;

    result = parseFloat(txtRADIUS.value) + parseFloat(txtHEIGHT.value);

    txtC.value = result;
});

areaBtn = document.querySelector('#button_area');

areaBtn.addEventListener('click',function(e){
    alert('AREA button clicked');

    txtRADIUS = document.querySelector('#value_radius');
    txtRESULT = document.querySelector('#value_result');

    let result;

    result = 3.14156*parseFloat(txtRADIUS.value)*parseFloat(txtRADIUS.value);

    txtRESULT.value = result;
    


});
