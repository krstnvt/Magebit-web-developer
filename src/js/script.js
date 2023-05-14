form=document.getElementById("mainDiv");
form.addEventListener('submit', (e)=>
{
    email       = document.getElementById("email");
    button      = document.getElementsByClassName("submitButton");
    checkbox    = document.getElementById("check");

    filter      = "[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+";

    let message=[];
    if(email.value === '')
    {
      button.disabled = true;
      message.push("Email address is required");
    }
    else if(!checkbox.checked)
    {
      button.disabled=true;
      message.push("You must accept the terms and conditions");
    }
    else if(!email.value.match(filter))
    {
      button.disabled = true;
      message.push("Please provide a valid e-mail address");
    }

    if(message.length > 0)
    {
        errorMessage=document.getElementById('errorDiv');
        e.preventDefault();
        errorMessage.innerText=message.join(',');
    }
    else
    {
        cup = document.getElementById("Success");

        form.remove();
        button.disabled = false;
        cup.hidden=false;
    }
});


