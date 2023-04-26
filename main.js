// generate the ticket number
let min = 100;
let max = 500;
let num = Math.floor(Math.random() * min) + max;

// display random ticket number
document.getElementById('ticketNum').innerHTML = num;

// Decline invitation
const declineAlert = () => {
    var msg = document.getElementById('content');
    msg.innerText = `Thanks for letting us know! We are sorry to hear you can\'t make it! Maybe another time?`;
    msg.className = "newmsg";
    msg.style.color = "#ffffff";
};

// Accept invite
const signUpPrompt = () => {
    // Create form for name and email
    var accept = document.getElementById('content');
    var form = document.createElement("form");
    var FN = document.createElement("input");
    var email = document.createElement("input");
    var br = document.createElement("br");
    var button = document.createElement("button");
    var fnerrormsg = document.createElement("p");
    var emailerrormsg = document.createElement("p");
    FN.className="input";
    email.className="input";
    button.className="submitbtn";
    FN.setAttribute("type", "text");
    FN.setAttribute("placeholder", "Full Name");
    email.setAttribute("type", "email");
    email.setAttribute("placeholder", "Email Address");
    accept.innerText = `Please enter your name and email address:`;
    accept.className = "newmsg";
    accept.style.color = "#ffffff";
    button.innerText="Submit";
    form.appendChild(br.cloneNode());
    accept.appendChild(form)
    form.appendChild(FN);
    form.appendChild(br.cloneNode());
    form.appendChild(email);
    form.appendChild(button);
    form.appendChild(fnerrormsg);
    form.appendChild(emailerrormsg);

    
    // Submit form    
    button.onclick = function() {
        
        // If name input is empty
        if (FN.value == '') {
            FN.setAttribute("aria-hidden", false);
            FN.setAttribute("aria-invalid", true);
            FN.style.border = "solid";
            FN.style.borderColor = "red"; 
            fnerrormsg.innerText = "Please enter your Full Name";
        };

        // If email input is empty
        if (email.value == '') {
            FN.setAttribute("aria-hidden", false);
            FN.setAttribute("aria-invalid", true);
            email.style.border = "solid";
            email.style.borderColor = "red"; 
            emailerrormsg.innerText = "Please enter your Email Address";
            return false;
        };

        // Save name and email input values
        const name = FN.value;
        const emailad = email.value;

        // If name and email input have values display message
        if ((FN.value.length != 0) && (email.value.length != 0)) {
            const submitscreen = document.getElementById('popup');
            submitscreen.style.display = "block";
            
            const submitmsg = document.getElementById("submitmsg");
            submitmsg.innerText = `Thanks ${name}, we hope to see you soon! A confirmation email has been sent to ${emailad}.`;
            submitmsg.style.color = "white";
            return false;
        };
            
        return false;
    };
}

