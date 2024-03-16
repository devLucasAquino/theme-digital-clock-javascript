function time(){
    today = new Date();

    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();

    if(toggle.mode()){
        document.getElementById('dark-hours').innerHTML = `<h1 class="dark">${hours}</h1><p class="dark">hours</p>`;
        document.getElementById('dark-minutes').innerHTML = `<h1 class="dark">${minutes}</h1><p class="dark">minutes</p>`;
        document.getElementById('dark-seconds').innerHTML = `<h1 class="dark">${seconds}</h1><p class="dark">seconds</p>`;
    }else{
        document.getElementById('hours').innerHTML = `<h1 class="light">${hours}</h1><p class="light">hours</p>`;
        document.getElementById('minutes').innerHTML = `<h1 class="light">${minutes}</h1><p class="light">minutes</p>`;
        document.getElementById('seconds').innerHTML = `<h1 class="light">${seconds}</h1><p class="light">seconds</p>`;
    }

}

setInterval(time, 1000);

function ToggleState() {
    let bool = false; 

    this.mode = function() {
        bool = !bool;
        return bool;
    };
}
var toggle = new ToggleState();

function handleClick(){
    
    if(toggle.mode()){
        const body = document.getElementById('light-body');
        const hours = document.getElementById('hours');
        const minutes = document.getElementById('minutes');
        const seconds = document.getElementById('seconds');
        const section = document.getElementById('light-section');
        const label = document.getElementById('light-label');
        const label1 = document.getElementById('light-label1');

        body.id = 'dark-body';
        hours.id = 'dark-hours';
        minutes.id = 'dark-minutes';
        seconds.id = 'dark-seconds';
        section.id = 'dark-section';
        label.id = 'dark-label';
        label1.id = 'dark-label1';
    }else{
        const body = document.getElementById('dark-body');
        const hours = document.getElementById('dark-hours');
        const minutes = document.getElementById('dark-minutes');
        const seconds = document.getElementById('dark-seconds');
        const section = document.getElementById('dark-section');
        const label = document.getElementById('dark-label');
        const label1 = document.getElementById('dark-label1');

        body.id = 'light-body';
        hours.id = 'hours';
        minutes.id = 'minutes';
        seconds.id = 'seconds'; 
        section.id = 'light-section';
        label.id = 'light-label';
        label1.id = 'dark-label1';
    }

}





