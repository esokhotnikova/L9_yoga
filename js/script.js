window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab=document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        tabBtns = document.querySelectorAll('.description-btn');
    
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

            function addZero(n){
                if (n>=10) {
                    return n;
                } else {
                    return '0' + n;
                }
            }            
            if (t.total>0) {
                mhours.textContent = addZero(t.hour);
                mseconds.textContent = addZero(t.min);
                mseconds.textContent = addZero(t.sec);
            } else {
                clearInterval(timeInterval);
                mhours.textContent = '00';
                mminutes.textContent = '00';
                mseconds.textContent ='00';
            }
        }
    }

    setClock('timer', deadLine);

    //modal
    let mmore = document.querySelector('.more'),
        moverlay = document.querySelector('.overlay'),
        mclose = document.querySelector('.popup-close');

    function moreInfo(){
        moverlay.style.display = 'block';
        mmore.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; 
    }
    mmore.addEventListener('click', function(){
        // moverlay.style.display = 'block';
        // this.classList.add('more-splash');
        // document.body.style.overflow = 'hidden';
        moreInfo();
    });

    mclose.addEventListener('click', function(){
        moverlay.style.display = 'none';
        mmore.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let parentInfo = document.querySelector('.info');        
    
    parentInfo.addEventListener('click',function(event){
        let targ = event.target;
        if (targ && targ.classList.contains('description-btn')){
            // moverlay.style.display = 'block';
            // mmore.classList.add('more-splash');
            // document.body.style.overflow = 'hidden'; 
            moreInfo();
        }
    });

  
});

// git push -u origin master