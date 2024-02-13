document.getElementById('no-btn').addEventListener('click', function() {
    var maxX = window.innerWidth - this.offsetWidth;
    var maxY = window.innerHeight - this.offsetHeight;
    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);
    
    this.style.position = 'absolute';
    this.style.left = newX + 'px';
    this.style.top = newY + 'px';
});

function redirectToVideoPage() {
    window.location.href = "video.html";
}