let myDiv = document.createElement('div');

// The preferred method
let shadow = myDiv.attachShadow({mode: 'open'});

// The paranoid method
let shadow = myDiv.attachShadow({mode: 'closed'});
