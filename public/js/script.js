document.querySelector("#loginForm").addEventListener("submit", event => {
    event.preventDefault();
    const fetchObj = {
        username: document.querySelector("#loginUsername").value,
        password: document.querySelector("#loginPassword").value,
    }
    console.log(fetchObj);
    fetch("/login", {
        method: "POST",
        body: JSON.stringify(fetchObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        console.log(res);
        if (res.ok) {
            console.log("logged in successfully!")
            location.replace("/secretclubpage")
        } else {
            alert("log in failed!")
            location.reload();
        }
    })
})

document.querySelector("#signupForm").addEventListener("submit", event => {
    event.preventDefault();
    const fetchObj = {
        username: document.querySelector("#signupUsername").value,
        password: document.querySelector("#signupPassword").value,
    }
    console.log(fetchObj);
    fetch("/signup", {
        method: "POST",
        body: JSON.stringify(fetchObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        console.log(res);
        if (res.ok) {
            console.log("signed up successfully!")
            location.replace("/secretclubpage")
        } else {
            alert("signup failed!")
            location.reload();
        }
    })
})