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
            title: '《Affection Synchronizer》',
            content: `You chose to enter her world, to become the sole axis of her emotional universe.
                      <br>Sweetness is the sugar-coating of a cage. You can no longer tell love from control, and you no longer belong to reality.`
        },
        'leaf-07': {
            title: '《Dreams of Sweet Lies》',
            content: `You are trapped within the fragments she left behind. Reality and illusion bleed into one another.
                      <br>Every Luna looks like her—yet none of them are. And you can no longer be sure which version of *you* still exists.`
        },
        'leaf-08': {
            title: '《Connection Terminated》',
            content: `Her voice has faded from your world, and reality hurts more than illusion.
                      <br>You tried to shatter the dream and recover what was once whole—only to find yourself lost in an endless hollow.`
        },
    }

    const title = document.getElementById('title')
    title.innerText = `Unlock Ending — ${resultDetail[user.currentChapter].title}`;

    const articleTitle = document.getElementById('articleTitle')
    articleTitle.innerHTML = `Unlock Ending ——${resultDetail[user.currentChapter].title}`

    const articleContent = document.getElementById('articleContent')
    articleContent.innerHTML = resultDetail[user.currentChapter].content

    document.getElementById('goLobby').addEventListener('click', () => {
        window.parent.document.getElementById('contentFrame').src = 'home.html'
    })
})