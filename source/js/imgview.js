(function() {
    const fixBox = document.querySelector('#fullscreen-img');
    const imgList = document.querySelector('.post-content').querySelectorAll('img');
    imgList.forEach((item, i) => {	//给每个图片添加事件
        item.addEventListener("click", (event) => {
            fullscreen(item.src);
            event.stopPropagation();
        }, false);
    });
    function fullscreen(imgUrl){
        const newImg = document.createElement('img');
        newImg.src = imgUrl;
        fixBox.appendChild(newImg);
        fixBox.classList.remove('hide');
        newImg.addEventListener("click", (event) => {
            event.stopPropagation();
        }, false);
        fixBox.addEventListener("click", () => {
            closeImg();
        }, false);
        fixBox.querySelector('.close').addEventListener("click", () => {
            closeImg();
        }, false);
    }
    function closeImg(){
        const img = fixBox.querySelector('img');
        if(img){
            fixBox.removeChild(img);
        }
        fixBox.classList.add('hide');
    }
})();
