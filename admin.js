const tableEl = document.getElementById("table")
    let subscribers = JSON.parse(localStorage.getItem("fullList"));
    if(subscribers){
        subscribers.forEach((subscriber, idx) => {
            let tr = document.createElement('tr');
            tr.setAttribute('id', idx)
            tr.innerHTML = `<td>${subscriber.name}</td><td><a href="mailto:${subscriber.email}">${subscriber.email}</td>`
            tableEl.appendChild(tr)
        })
    }
    console.log(subscribers)
