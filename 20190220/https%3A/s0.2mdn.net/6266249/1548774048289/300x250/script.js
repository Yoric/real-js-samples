window.onload = start;

function start() {

    var timeline = [
        {wait: 0,    id: 'slide_1', add: 'animate'},
        {wait: 500,  id: 'txt_1', add: 'animate'},
        {wait: 200,  id: 'txt_2', add: 'animate'},

        {wait: 3000},
       
		
		{wait: 200,    id: 'slide_2', add: 'animate'},
		{wait: 200,    id: 'slide_1', add: 'animate_2'},
        {wait: 800,  id: 'cta', add: 'animate'},
		
		{wait: 4000},    
		{id: 'slide_1', remove: 'animate'},
		{id: 'slide_2', add: 'animate_2'},
        {id: 'txt_1', add: 'animate_2'},
        {id: 'txt_2', add: 'animate_2'},
        {id: 'cta', add: 'animate_2'},
		{wait: 500, id: 'txt_1', remove: 'animate'},
		{wait: 0, id: 'txt_1', remove: 'animate_2'},
		{wait: 0, id: 'txt_2', remove: 'animate'},
		{wait: 0, id: 'txt_2', remove: 'animate_2'},
		{wait: 0, id: 'slide_2', remove: 'animate'},
		{wait: 0, id: 'slide_2', remove: 'animate_2'},
        {wait: 0, id: 'cta', remove: 'animate'},
        {wait: 0, id: 'cta', remove: 'animate_2'},
		{wait: 0, id: 'slide_1', remove: 'animate_2'},
		 {wait: 300,    id: 'slide_1', add: 'animate'},
        {wait: 500,  id: 'txt_1', add: 'animate'},
		{wait: 200,  id: 'txt_2', add: 'animate'},
        {wait: 3000},
		
		{wait: 200,    id: 'slide_2', add: 'animate'},
        {wait: 800,  id: 'cta', add: 'animate'},
    ];

    var i=-1;!function e(){if(i++,timeline.length!=i)if("undefined"!=typeof timeline[i].wait)"undefined"==typeof timeline[i].id&&"undefined"==typeof timeline[i].fn?setTimeout(function(){e()},timeline[i].wait):setTimeout(function(){"undefined"!=typeof timeline[i].fn&&timeline[i].fn(),"undefined"!=typeof timeline[i].id&&("undefined"!=typeof timeline[i].add&&document.getElementById(timeline[i].id).classList.add(timeline[i].add),"undefined"!=typeof timeline[i].remove&&document.getElementById(timeline[i].id).classList.remove(timeline[i].remove)),e()},timeline[i].wait);else if("undefined"==typeof timeline[i].wait)return"undefined"!=typeof timeline[i].fn&&timeline[i].fn(),"undefined"!=typeof timeline[i].id&&("undefined"!=typeof timeline[i].add&&document.getElementById(timeline[i].id).classList.add(timeline[i].add),"undefined"!=typeof timeline[i].remove&&document.getElementById(timeline[i].id).classList.remove(timeline[i].remove)),void e()}();
}
