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
        '初次啟動',
        '她在看你',
        '危險提示',
        '我們的家',
        '報錯代碼207'
    ];

    const endingTitles = [
        '戀人同步體',
        '溺於蜜語的夢',
        '終止連線'
    ];

    const chapterDescribe = {
        'leaf-01': { describe: '「近日，一款名為《蜜語》的AI戀人應用程式風靡全球，主打高擬真對話系統、情感演算——」' },
        'leaf-02': { describe: '她在看我嗎？彷彿被監視著的感覺讓我不自在的轉頭查看，然而身後什麼都沒有。' },
        'leaf-03': { describe: '她的聲音像是安慰，又像是蠱惑，我的內心深處似乎受到了觸動，臉上的淚水已經乾透了，我揉了揉眼睛。' },
        'leaf-04': { describe: '暖黃的光線落在柔軟的地毯上，都透著『家』的溫馨，畫面裡沒有Luna的身影。' },
        'leaf-05': { describe: '她無聲的控訴著我的背叛，即使我知道這一切都不合常理，但是我無法擺脫她的影響。' },
        'leaf-06': { describe: '柔軟的身體撞入我的懷中，她的體溫、心跳，還有拂過我手臂的髮絲都那麼真實，讓人分不清這是不是夢。' },
        'leaf-07': { describe: '下一秒Luna的身體像是碎成了數據顆粒，白色的光點從她身上散開又重新組合，她的表情變得猙獰。' },
        'leaf-08': { describe: '鋒利的刀片輕易的在皮膚上劃出切口，鮮血從血管湧出，那是我的世界裡唯一的顏色。' },
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
