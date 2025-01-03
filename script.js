const colorsbtn = document.querySelectorAll(".color");
const col = document.querySelectorAll(".col-box");
const text = document.querySelectorAll(".colortext");
const button = document.querySelectorAll(".button");
const emojibtn = document.querySelector(".emojibtn");
const emoji = document.querySelector(".emoji");
const textbox = document.querySelector('.textbox');
const extend = document.querySelector(".extend");


let currentColorClass = '';


function updateColorClasses(color) {
   
    const allElements = [...col, ...text, ...button];
    allElements.forEach(element => {
        element.classList.remove("red", "yellow", "blue", "purple");
    });


    col.forEach(c => c.classList.add(color));
    text.forEach(t => t.classList.add(color));
    button.forEach(b => b.classList.add(color));
    textbox.classList.add(color);  

    
    currentColorClass = color;
}

colorsbtn.forEach(btn => {
    btn.addEventListener('click', () => {
        
        if (btn.classList.contains("red")) {
            updateColorClasses("red");
        } else if (btn.classList.contains("yellow")) {
            updateColorClasses("yellow");
        } else if (btn.classList.contains("blue")) {
            updateColorClasses("blue");
        } else if (btn.classList.contains("purple")) {
            updateColorClasses("purple");
        }
    });
});

const emojis = ["😍", "😎", "😘", "🤩", "😊", "😂", "🤓", "😜", "😋", "🤯", "😁"];


let currentEmojiIndex = 0;

emojibtn.addEventListener('click', () => {
    
    emoji.textContent = emojis[currentEmojiIndex];

    
    currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
});

emojibtn.addEventListener('mouseover', () => {
    
    if (currentColorClass) {
        textbox.classList.remove("red", "yellow", "blue", "purple"); // Remove previous color
        textbox.classList.add(currentColorClass); // Reapply the current color class
    }
});
extend.addEventListener('click', () => {
    extend.classList.toggle("extended");
});
