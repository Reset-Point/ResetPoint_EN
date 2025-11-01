document.addEventListener('DOMContentLoaded', () => {
    const userJson = localStorage.getItem('ResetPoint');
    if (!userJson) {
        console.warn('沒有找到 ResetPoint 資料');
        window.parent.document.getElementById('contentFrame').src = 'home.html'
    }
    const user = JSON.parse(userJson);
    console.log(user);

    if (user.currentChapter != 'leaf-06' && user.currentChapter != 'leaf-07' && user.currentChapter != 'leaf-08') {
        window.parent.document.getElementById('contentFrame').src = 'root.html'
    }

    const resultDetail = {
        'leaf-06': {
            title: '《戀人同步體》',
            content: `你選擇進入她的世界，成為她情感宇宙的唯一軸心。
                      <br>甜蜜是牢籠包裹的糖衣，你已經無法區分愛與控制，從此不再屬於現實。`
        },
        'leaf-07': {
            title: '《溺於蜜語的夢》',
            content: `你困在她留下的殘片中，現實與幻象層層交錯。
                      <br>每一個Luna都像她、卻又不是她，而你早已無法確定哪個「你」還存在。`
        },
        'leaf-08': {
            title: '《終止連線》',
            content: `她的聲音從你的世界消失，現實比幻象更痛苦。
                      <br>你試圖打破幻象尋找昔日的完整，卻發現自己早已迷失在無盡的空洞裡。`
        },
    }

    const title = document.getElementById('title')
    title.innerText = `解鎖結局 — ${resultDetail[user.currentChapter].title}`;

    const articleTitle = document.getElementById('articleTitle')
    articleTitle.innerHTML = `解鎖結局 ——${resultDetail[user.currentChapter].title}`

    const articleContent = document.getElementById('articleContent')
    articleContent.innerHTML = resultDetail[user.currentChapter].content

    document.getElementById('goLobby').addEventListener('click', () => {
        window.parent.document.getElementById('contentFrame').src = 'home.html'
    })
})