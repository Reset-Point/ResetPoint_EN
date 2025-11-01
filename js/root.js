document.addEventListener('DOMContentLoaded', () => {
    const userJson = localStorage.getItem('ResetPoint');
    if (!userJson) {
        alert("使用者資料遺失，請重新開始遊戲。");
        window.parent.document.getElementById('contentFrame').src = 'home.html';
        return;
    }
    const user = JSON.parse(userJson);

    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    const leaves = document.getElementById('leaves');
    const rootIntroContent = document.getElementById('rootIntroContent');
    const enterBtn = document.getElementById('enterBtn');
    const allLeaves = document.querySelectorAll('.leaf');

    const scrollAmount = 160;

    const chapterTitles = [
        'First Launch',
        'She’s Watching You',
        'Danger Alert',
        'Our Home',
        'Error Code 207'
    ];

    const endingTitles = [
        'Affection Synchronizer',
        'Dreams of Sweet Lies',
        'Connection Terminated'
    ];

    const chapterDescribe = {
        'leaf-01': { describe: '“Recently, an AI lover application named *Whisper of Honey* has taken the world by storm, famed for its hyper-realistic dialogue system and emotional computation—”' },
        'leaf-02': { describe: 'Was she watching me? That uncanny feeling of being observed made me turn uneasily to look behind — but of course, there was nothing there.' },
        'leaf-03': { describe: 'Her voice felt like both comfort and temptation. Something deep within me stirred. The tears on my face had long since dried; I rubbed at my eyes.' },
        'leaf-04': { describe: 'A warm, honey-coloured light spread gently across a plush carpet—the scene radiated the comfort of *home*. Luna was nowhere to be seen.' },
        'leaf-05': { describe: 'Her silent gaze accused me of betrayal. Even knowing that none of this was real, I could not free myself from her hold.' },
        'leaf-06': { describe: 'Luna came running towards me. Her soft body collided with mine; her warmth, her heartbeat, the faint tickle of her hair across my arm—all of it felt impossibly real.' },
        'leaf-07': { describe: 'The next moment, her body shattered—fragments of glowing data scattered like snow, and then she reformed, her face contorted with rage.' },
        'leaf-08': { describe: 'The blade was sharp—too sharp—and it sliced my skin with ease. Blood welled from the cut, bright and vivid, the only colour left in my world.' },
    };

    //加入統一樣式設定方法
    function setLeafStatus(leaf, status) {
        leaf.className = `lxgw-wenkai leaf ${status}`;
    }

    function setStatus() {
        for (let i = 1; i <= 5; i++) {
            const leaf = document.getElementById(`leaf-0${i}`);
            if (i <= user.completedChapter + 1) {
                leaf.innerText = `《${chapterTitles[i - 1]}》`;
                const status = i <= user.resetChapter ? 'visited' : 'closed';
                setLeafStatus(leaf, status);
            } else {
                leaf.innerText = '《？？？》';
                setLeafStatus(leaf, 'closed');
            }
        }

        for (let i = 1; i <= 3; i++) {
            const leaf = document.getElementById(`leaf-0${i + 5}`);
            if (user.endings[i]) {
                leaf.innerText = `《${endingTitles[i - 1]}》`;
                setLeafStatus(leaf, 'visited');
            } else {
                leaf.innerText = '《？？？》';
                setLeafStatus(leaf, 'closed');
            }
        }
    }

    function getLeafNumber(id) {
        return parseInt(id.split('-')[1], 10);
    }

    //初始狀態設定
    setStatus();
    const defaultChapter = user.resetChapter + 1 < 6 ? user.resetChapter + 1 : 1
    const defaultLeaf = document.getElementById(`leaf-0${defaultChapter}`);
    setLeafStatus(defaultLeaf, 'clicked');
    rootIntroContent.innerText = chapterDescribe[`leaf-0${defaultChapter}`].describe;
    user.currentChapter = `leaf-0${defaultChapter}`;
    localStorage.setItem('ResetPoint', JSON.stringify(user));

    //滾動控制
    leftBtn.addEventListener('click', () => {
        leaves.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        leaves.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    //點擊章節
    allLeaves.forEach(leaf => {
        const leafNum = getLeafNumber(leaf.id);

        leaf.addEventListener('click', () => {
            if (leaf.innerText === '《？？？》') return;

            const isLocked = (leafNum > user.resetChapter + 1 && leafNum <= 5);
            enterBtn.disabled = isLocked;
            enterBtn.className = `${isLocked ? 'unactive' : 'active'} lxgw-wenkai`;

            allLeaves.forEach(l => l.className = '');
            setStatus();
            setLeafStatus(leaf, 'clicked');

            rootIntroContent.innerText = chapterDescribe[leaf.id]?.describe || '';
            user.currentChapter = leaf.id;
            localStorage.setItem('ResetPoint', JSON.stringify(user));
        });
    });

    //進入章節
    enterBtn.addEventListener('click', () => {
        const chapterNum = getLeafNumber(user.currentChapter);
        const url = chapterNum <= 5 ? 'article.html' : 'ending.html';
        window.parent.document.getElementById('contentFrame').src = url;
    });

});
