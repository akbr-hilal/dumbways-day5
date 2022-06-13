function submitData(){
    let name = document.getElementById("inputName").value
    let email = document.getElementById("inputEmail").value
    let number = document.getElementById("inputNumber").value
    let subject = document.getElementById("inputSubject").value
    let message = document.getElementById("inputMessage").value

    if (name == ''){
        return alert("Name is Required")
    } else if (email == ''){
        return alert("Email is Required")
    } else if (number == ''){
        return alert("Phone Number is Required")
    } else if (subject == ''){
        return alert("Subject is Required")
    } else if (message == ''){
        return alert("Message is Required")
    }

    console.log(name);
    console.log(email);
    console.log(number);
    console.log(subject);
    console.log(message);

    // Receiver
    let emailReceiver = "akbarhilal169@gmail.com"
    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello nama saya ${name}. ${message}. Silahkan menghubungi saya melalui email ${email} atau nomor telepon ${number} ini. Terimakasih Mas Hilal`

    a.click()

    let dataObject = {
        name,
        email,
        number,
        subject,
        message,
    }

    console.log(dataObject)
}

