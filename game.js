let player_points = 0;
let cpu_points = 0;
 
let span_player_points = document.getElementById('Player_points');
let span_cpu_points = document.getElementById('Cpu_points');
let cpu_image = document.getElementById('cpu_img');
let player_image = document.getElementById('player_img');
let span_msg = document.getElementById('span_msg');
console.log(span_player_points, span_cpu_points, cpu_image, player_image, span_msg)
let skills = document.querySelectorAll('.pick img');
 
skills.forEach((item) => {
    item.addEventListener('click', pick);
});
 
 
function pick() {
    player_image.setAttribute('src', this.src);
    let cpu_pick = getCPUpick();
    checkResult(this.alt, cpu_pick);
}
 
 
function getCPUpick() {
    let random_num = Math.floor(Math.random() *  3) + 1;
    let cpu_pick;
    let image_src;
    switch (random_num) {
        case 1:
            cpu_pick = 'schere';
            image_src = 'Scissor_Bubble.png';
            break;
        case 2:
            cpu_pick = 'stein';
            image_src = 'Rock_Bubble.png';
            break;
        case 3:
            cpu_pick = 'papier';
            image_src = 'Paper_Bubble.png';
            break;
    }
    cpu_image.setAttribute('src',image_src);
    console.log(cpu_pick)
    return cpu_pick;
    
}
 
 
function checkResult(player_pick, cpu_pick) {
    let win = false;
    let msg;
 
    if (player_pick === cpu_pick) {
        msg = 'Unentschieden';
    }
    else {
        if (player_pick === 'schere') {
            switch (cpu_pick) {
                case 'stein': win = false; cpu_points += 1; msg = 'Stein schleift Schere';break;
                case 'papier': win = true; player_points += 1; msg = 'Schere schneidet Papier';break;
            }
        } else if (player_pick === 'stein') {
            switch (cpu_pick) {
                case 'schere': win = true; player_points += 1; msg = 'Stein schleift Schere';break;
                case 'papier': win = false; cpu_points += 1; msg = 'Papier bedeckt Stein';break;
            }
        } else if (player_pick === 'papier') {
            switch (cpu_pick) {
                case 'schere': win = false; cpu_points += 1; msg = 'Schere schneidet Papier';break;
                case 'stein': win = true; player_points += 1; msg = 'Papier bedeckt Stein';break;
            }
        }
    }
    console.log(win)
 
    span_player_points.innerHTML = player_points;   
    span_cpu_points.innerHTML = cpu_points;
 
    console.log(player_points)
    console.log(cpu_points)
    span_msg.innerHTML = msg;
}
 
 
 
 
