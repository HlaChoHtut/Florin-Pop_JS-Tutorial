    const btn = document.getElementById('btn');
    const container = document.getElementById('container');
    btn.addEventListener('click', () => {
        createNotification();
    });

    function createNotification() {
        const noti = document.createElement('div');
        noti.classList.add('toast');

        noti.innerText = "Internal server error!"
    
        container.appendChild(noti)
        setTimeout( () => {
            noti.remove()
        }, 3000)
    }