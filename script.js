let Container = document.querySelector('.read-more-container');

Container.addEventListener('click',event=>{

    let current = event.target;

    let isReadlessBtn = current.className.includes('read-less-btn');

    if(!isReadlessBtn) return;

    let currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

    
})
