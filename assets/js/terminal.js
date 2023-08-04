const initialSection = document.querySelector("#initial");

const initialPrompt = '<span class="prompt">----(<span style="color:#4293dc;">anish@linux</span>)-[<span style="color:#c6c6c6;">~/WHOISanish</span>]</span><br><span style="color: #67deb2;font-size: bolder;">|--<span style="color:#408ed4;">$</span> </span><input type="text" id="userInput" placeholder="Type a command! \'Help\' to list usable commands" autofocus="" style="width:70%" autocomplete="off"><br><div class="systemOutput"></div>';
initialSection.innerHTML = initialPrompt;

let inputField = document.querySelector("#userInput");
let outputField = document.querySelectorAll(".systemOutput");

let keepValue = inputField.value;

var msg = 'encode "test" test';

function encode(inputString){   
// Find the positions of the first and last quotes
    let firstQuoteIndex = inputString.indexOf('"');
    let lastQuoteIndex = inputString.lastIndexOf('"');

// Extract the three parts
    let part1 = inputString.slice(0, firstQuoteIndex).trim();
    let part2 = inputString.slice(firstQuoteIndex + 1, lastQuoteIndex);
    let part3 = inputString.slice(lastQuoteIndex + 1).trim();
    let formData = new FormData();
    formData.append('message', part2);
    formData.append('todo', part1);
    formData.append('secret', part3);
    fetch('https://anish.vip/secure/encdec.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(data => {
          return JSON.parse(data).final;
      
      })
      .catch(error => {
          console.log(error);
      });
}

const terminalCommands = {
    "help": "Use commands like <strong>whois</strong>,<strong>whoami</strong>, <strong>intro</strong>, <strong>about</strong>, <strong>age</strong>, <strong>birthday</strong>, <strong>address</strong>, <strong>education</strong>, <strong>hobbies</strong>, <strong>skills</strong>, <strong>career</strong>, <strong>achievements</strong>, <strong>profession</strong>, <strong>company</strong>, <strong>resume</strong>, <strong>email</strong>, <strong>phone</strong>, <strong>social</strong>, <strong>form</strong>, <strong>font</strong>, and some other system commands!",

    "whoami": "<strong>Anish Khatri<strong> (WHOISanish)",

    "intro": "Full-stack Web Development and Web Penetration Testing enthusiast with an experience of over 5 years in the field of Technology, with deep enthusiasm towards Development, Security, Networking, SysAdmin, Server Administration and Cloud Computing.",

    "about": "Hi! I am <strong>Anish Khatri</strong>.<br>I am a Tech Enthusiastic full-stack web developer, programmer and web penetration tester from Nepal.<br> Check out <a href='https://anishkhatri.com' target='_blank'>anishkhatri.com</a> to know more.",

    "age": "Twenty One (21)",
    "birthday": "January 09, 2002",
    "address": "Address Line 1: Ratopool-02, <br>City: Dhangadhi, <br>District: Kailali<br>>Province: SudurPaschim<br>ZIP Code: 10900<br>Country: Nepal",

    "education": "<p>Studying BSc. HONS Computing at <a onclick=\"window.open('http://islingtoncollege.edu.np', '_blank')\">Islington College</a>, affiliated to <a onclick=\"window.open('https://www.londonmet.ac.uk/', '_blank')\">London Metropolitan University</a>, UK!</p>Find about my education in detail in my website, by <a href='https://anishkhatri.com/#resume' target='_blank'>clicking here</a>",

    "hobbies": "Reading research papers, documentations and RFCs; playing CTFs; doing SysAdmin and DevSecOps stuffs; developing security automation tools;",

    "skills": "<ul><li>Web development,</li><li>Web application penetration testing,</li><li>Web programming with HTML5, CSS3, JavaScript, PHP and MySQL,</li><li>Linux/UNIX (RedHat, Debian, Fedora) and Microsoft Windows System and Server administration,</li><li>Scripting in Bash, Batch, PowerShell and Python,</li><li>Programming in C, C++ and Python,</li><li>Networking and Network Administration,</li><li>Reverse Engineering and Social Engineering.</li></ul>",

    "career": "Bug bounty, web development and interested in startups and businesses. Got any business Idea? Feel free to contact me.",


    "achievements": "<ul><li>Thanked, acknowledged and rewarded by over 20 companies, including Facebook, Microsoft, Alibaba, Paypal, Udemy, Apple and more for responsibly discovering and reporting security vulnerabilities in their platforms!</li><li>Worked closely with some companies like Safsocial, Crea8social, Wowonder, Globex and more</li><li>Created and Sold some php scripts at Envato and ziwee.net/buy .</li><li>Looking for opportunities....</li></ul>",

    "profession": "Undergraduate Computer Engineering student | Independent Full-stack Web Developer, Programmer and Web/Network Penetration Tester",

    "company": "None! I am open to exploring new opportunities.",
    "experience": "Have some experience with web development, bug bounty and security researching. <a href='https://anishkhatri.com/#resume' target='_blank'>Click Here</a> to see all",

    "email": "info@anishkhatri.com",
    "phone": "+977-9865730485",
    "social": "<span>Facebook</span>: <a onclick=\"window.open('https://www.facebook.com/GreatAnishKhatri', '_blank')\">Anish Khatri (@GreatAnishKhatri)</a><br><span>Twitter</span>: <a onclick=\"window.open('https://twitter.com/_AnishKhatri_', '_blank')\">Anish Khatri (@_AnishKhatri_)</a><br><span>LinkedIn</span>: <a onclick=\"window.open('https://www.linkedin.com/in/anishkhatri10/', '_blank')\">Anish Khatri (@anishkhatri10)</a><br><span>YouTube</span>: <a onclick=\"window.open('https://www.youtube.com/channel/UChQJwPzcFGWRj1mbsl61uYQ/', '_blank')\">Ziwee (/channel/UChQJwPzcFGWRj1mbsl61uYQ)</a><br><span>Telegram</span>: <a onclick=\"window.open('https://t.me/AnishKhatri10', '_blank')\">@AnishKhatri10</a><br><span>Instagram</span>: <a onclick=\"window.open('https://www.instagram.com/AnishKhatri10/', '_blank')\">@AnishKhatri10</a><br>All my social media profiles are public. Feel free to contact me anywhere. :)",

    "form": "You can submit your message here: <strong><a onclick=\"window.open('https://anishkhatri.com/#contact', '_blank')\">Contact Form</a></strong>",

    "font": "<strong>Fira Code</strong> <<a onclick=\"window.open('https://fonts.google.com/specimen/Fira+Code', '_blank')\">Find on Google Fonts!</a>>",
    "uname": "Anish",
    "uname -a": "Anish | WHOISanish 3.1",
    "hostname": "WHOISanish.me",
    "pwd": "\\web\\WHOISanish",
    "ls": "<p>assets/<br>anish.webmanifest<br>index.html<br>terminal.html<br>.htaccess",
    "sudo": "This isn't a UNIX-based Operating System.",
    "cd": "You aren't allowed you to change directories.",
    "man": "You aren't allowed you to use this command.",
    "sudo": "You aren't allowed you to use this command.",
    "cat": "You aren't allowed you to use this command.",
    "chmod": "You aren't allowed you to use this command.",
    "touch": "You aren't allowed you to use this command.",
    "locate": "You aren't allowed you to use this command.",
    "curl": "You aren't allowed you to use this command.",
    "echo": "You aren't allowed you to use this command.",
    "ping": "You aren't allowed you to use this command.",
    "rm": "You aren't allowed you to use this command.",
    "haha": "Before running this command, make sure you know that the web front-end can't perform actions in the server."
}

Object.assign(terminalCommands, {
    "main": terminalCommands["about"],
    "who": terminalCommands["about"],
    "whois": terminalCommands["about"],
    "who are you": terminalCommands["about"],
    "whoisanish": terminalCommands["about"],
    "anish": terminalCommands["about"],

    "--h": terminalCommands["help"],
    "--help": terminalCommands["help"],
    "h": terminalCommands["help"],
    "?": terminalCommands["help"],

    "get skills": terminalCommands["skills"],
    "get --skills": terminalCommands["skills"],
    "find skills": terminalCommands["skills"],
    "find --skills": terminalCommands["skills"],
    "know skills": terminalCommands["skills"],
    "know --skills": terminalCommands["skills"],
    "your skills": terminalCommands["skills"],
    "my skills": terminalCommands["skills"],

    "what are you studying": terminalCommands["education"],
    "study": terminalCommands["education"],
    "your education": terminalCommands["education"],
    "my education": terminalCommands["education"],

    "what are you doing": terminalCommands["career"],
    "current work": terminalCommands["career"],
    "involvement": terminalCommands["career"],
    "your involvement": terminalCommands["career"],
    "my involvement": terminalCommands["career"],


    "get resume": terminalCommands["resume"],
    "get --resume": terminalCommands["resume"],
    "your resume": terminalCommands["resume"],
    "my resume": terminalCommands["resume"],

    "get font": terminalCommands["font"],
    "get --font": terminalCommands["font"],
    "which font": terminalCommands["font"],
    "which --font": terminalCommands["font"],

    "get email": terminalCommands["email"],
    "get --email": terminalCommands["email"],
    "contact email": terminalCommands["email"],
    "contact --email": terminalCommands["email"],
    "your email": terminalCommands["email"],
    "my email": terminalCommands["email"],

    "get phone": terminalCommands["phone"],
    "get --phone": terminalCommands["phone"],
    "contact phone": terminalCommands["phone"],
    "contact --phone": terminalCommands["phone"],
    "contact number": terminalCommands["phone"],
    "contact --number": terminalCommands["phone"],
    "your phone": terminalCommands["phone"],
    "my phone": terminalCommands["phone"],

    "get social": terminalCommands["social"],
    "get --social": terminalCommands["social"],
    "contact social": terminalCommands["social"],
    "contact --social": terminalCommands["social"],
    "get profile": terminalCommands["social"],
    "get --profile": terminalCommands["social"],
    "contact profile": terminalCommands["social"],
    "contact --profile": terminalCommands["social"],

    "get form": terminalCommands["form"],
    "get --form": terminalCommands["form"],
    "contact form": terminalCommands["form"],
    "contact --form": terminalCommands["form"]
});

const eventListener = () => {
    inputField.addEventListener("keyup", (event) => {
        if(event.keyCode === 13) {
            inputField.setAttribute("readonly", "true");
            keepValue = inputField.value;
            event.preventDefault();
            inputField.disabled = true;
            inputField.setAttribute("value", keepValue);
            inputField.removeAttribute("id");
            if(keepValue.toLowerCase() == "clear" || keepValue.toLowerCase() == "cls") initialSection.innerHTML = initialPrompt;
            else {
                let systemOutput = executeCommand(keepValue.split(' ')[0].toLowerCase());
                outputField[outputField.length - 1].innerHTML = systemOutput;
                initialSection.innerHTML += "<br />" + initialPrompt;
            }
            inputField = document.querySelector("#userInput");
            outputField = document.querySelectorAll(".systemOutput");
            inputField.focus();
            eventListener();
        } else if(event.keyCode === 38){
            inputField.value = keepValue;
        }
    });
}

eventListener();

document.body.addEventListener('click', () => {
    inputField.focus();
}, true);

const executeCommand = (userInput) => {
    if(userInput == "exit" || userInput == "quit"){
        window.parent.postMessage("closeTerminal", '*');
        return "Now, the Terminal will be closed.";
    } else if(userInput.substring(0, 6) == "encode" || userInput.substring(0, 6) == "decode"){
        return encode(userInput);
    } else if(terminalCommands.hasOwnProperty(userInput)){
        return terminalCommands[userInput];
    } else{
        return "Invalid Command! Use <b>'Help'</b> to list usable commands"
    }
}
