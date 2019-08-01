window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab=document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for (let i = a; i<tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let targ = event.target;
        if (targ && targ.classList.contains('info-header-tab')){
            for (let i = 0; i<tab.length; i++){
                if (targ == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
    //timer

    let deadLine = '2019-09-01';

    function getTimeRemaining(endtime){
        let t=Date.parse(endtime) - Date.parse(new Date());
        let sec = Math.floor((t/1000) % 60),
            minut = Math.floor((t/1000/60) % 60),
            hour = Math.floor(t/1000/60/60);
        return {
            'total' :t,
            'sec': sec,
            'min' : minut,
            'hour' : hour
        };
    }

    function setClock(id, endtime){
        let mtimer = document.getElementById(id),
            mhours = mtimer.querySelector('.hours'),
            mminutes = mtimer.querySelector('.minutes'),
            mseconds = mtimer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock,1000);

        function updateClock(){
            let t = getTimeRemaining(endtime);
            
            if (t.total>0) {
                if (Number(t.hour)>=10) { 
                    mhours.textContent = t.hour;
                } else {
                    mhours.textContent = '0' +  t.hour;
                }
                if (Number(t.min)>=10) {             
                    mminutes.textContent = t.min;
                } else {
                    mminutes.textContent = '0' +  t.min;
                }
                // mseconds.textContent = t.sec;
                if (Number(t.sec)>=10) {
                    mseconds.textContent = t.sec;
                } else {
                    mseconds.textContent ='0' + t.sec;
                }
                // if (t.total<=0) {
                //     clearInterval(timeInterval);
                // }
            } else {
                clearInterval(timeInterval);
                mhours.textContent = '00';
                mminutes.textContent = '00';
                mseconds.textContent ='00';
            }
        }
    }

    setClock('timer', deadLine);

});