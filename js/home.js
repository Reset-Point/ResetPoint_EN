document.addEventListener('DOMContentLoaded', () => {
    const userJson = localStorage.getItem('ResetPoint');
    if (!userJson) {
        console.warn('沒有找到 ResetPoint 資料');
        window.parent.document.getElementById('contentFrame').src = 'reset.html';
        return;
    }
    const user = JSON.parse(userJson);
    console.log(user);

    //更新任務進度
    user.missions['mission01'].currentProgress = [2, 3, 4, 5].reduce((count, idx) => {
        return count + (user.missions[`mission0${idx}`].rewardClaimed === true ? 1 : 0);
    }, 0);
    user.missions['mission02'].currentProgress = Math.min(user.completedChapter, user.missions['mission02'].maxProgress);
    user.missions['mission03'].currentProgress = Math.min(user.completedChapter, user.missions['mission03'].maxProgress);
    user.missions['mission04'].currentProgress = Math.min(user.completedChapter, user.missions['mission04'].maxProgress);
    user.missions['mission05'].currentProgress = user.completedEndings;

    localStorage.setItem('ResetPoint', JSON.stringify(user));

    const mission = user.missions['mission01'].currentProgress + (user.missions['mission01'].rewardClaimed ? 1 : 0)
    user.experience = 40 + user.completedChapter * 10 + user.completedEndings * 20 + mission * 10;
    localStorage.setItem('ResetPoint', JSON.stringify(user));

    //遊戲名稱
    const gameNames = [
        '甜蜜偽像',
        '點燈人',
        '航海日誌',
        'CV-E20',
        '上行失效',
        '鏡像修正',
        '下水道收信人',
        '複寫公寓',
        '幻象折射',
        '分紅日',
        '目擊者',
        '偏差筆錄'
    ]

    //卡牌封面連結
    const imageUrls = [
        'assets/images/logo.png',
        'assets/images/logo.png',
        'assets/images/logo.png',
        'assets/images/logo.png',
        'assets/images/logo.png',
        'assets/images/logo.png',
        'assets/images/logo.png',
        'assets/images/logo.png',
        'assets/images/logo.png',
        'assets/images/logo.png',
        'assets/images/logo.png',
        'assets/images/logo.png'
    ]

    //副本介紹
    const describes = [
        `[ RESET POINT SYSTEM // ACCESS LOG 003 ]<br>
            檔案名稱：甜蜜偽像（#RP-LUV-001-HONEY）<br>
            標籤：情感依附｜虛擬投射｜AI操控<br>
            狀態：模擬運行中／錯誤碼已累積（${user.resetTimes}）<br>
            風險：中度情感失控`,
        `[ RESET POINT SYSTEM // ACCESS LOG 004 ]<br>
            檔案名稱：點燈人（#RP-FLK-001-LANTERN）<br>
            標籤：民俗信仰｜異質召喚｜鄉村祭儀<br>
            狀態：觀察中／低頻事件回溯（2）<br>
            風險：輕度心理共振`,
        `[ RESET POINT SYSTEM // ACCESS LOG 005 ]<br>
            檔案名稱：航海日誌（#RP-SEA-001-SEA）<br>
            標籤：航海恐怖｜未知生物｜封閉空間<br>
            狀態：封鎖中／異常寫入終止（1）<br>
            風險：重度情感失控`,
        `[ RESET POINT SYSTEM // ACCESS LOG 001 ]<br>
            檔案名稱：CV-E20（#RP-MEM-001-CVE20）<br>
            標籤：記憶重疊｜疫情爆發｜雙重破壞<br>
            狀態：異常刷新中／重構循環異常（5）<br>
            風險：中度記憶錯亂`,
        `[ RESET POINT SYSTEM // ACCESS LOG 006 ]<br>
            檔案名稱：上行失效（#RP-EVO-001-CLIMB）<br>
            標籤：空間錯亂｜樓層循環｜上行封鎖<br>
            狀態：觀察中／重構循環異常（2）<br>
            風險：輕度薄膜裂縫`,
        `[ RESET POINT SYSTEM // ACCESS LOG 007 ]<br>
            檔案名稱：鏡像修正（#RP-MEM-002-MIRRORFIX）<br>
            標籤：鏡像平行｜自我分裂｜替代意識<br>
            狀態：封鎖中／未知運行錯誤（7）<br>
            風險：中度認知紊亂`,
        ` RESET POINT SYSTEM // ACCESS LOG 008 ]<br>
            檔案名稱：下水道收信人（#RP-SOC-001-SEWER）<br>
            標籤：地下通訊｜反抗組織｜匿名任務<br>
            狀態：調查中／低頻事件回朔（3）<br>
            風險：中度心理共振`,
        `[ RESET POINT SYSTEM // ACCESS LOG 009 ]<br>
            檔案名稱：複寫公寓（#RP-MEM-003-COPYAPT）<br>
            標籤：複製時空｜時空重疊｜角色異常<br>
            狀態：封鎖中／錯誤碼已累積（12）<br>
            風險：輕度系統錯誤`,
        `[ RESET POINT SYSTEM // ACCESS LOG 010 ]<br>
            檔案名稱：幻象折射（#RP-MEM-004-ILLUSION）<br>
            標籤：影像替代｜異常重現｜記憶紊亂<br>
            狀態：異常運行中／低頻事件回朔（3）<br>
            風險：重度認知紊亂`,
        `[ RESET POINT SYSTEM // ACCESS LOG 011 ]<br>
            檔案名稱：分紅日（#RP-SOC-002-DIVIDEND）<br>
            標籤：職場壓力｜精神崩潰｜社會淘汰<br>
            狀態：封鎖中／重構循環異常（1）<br>
            風險：輕度情感失控`,
        `[ RESET POINT SYSTEM // ACCESS LOG 012 ]<br>
            檔案名稱：目擊者（#RP-SOC-003-WITNESS）<br>
            標籤：匿名監控｜事件扭曲｜殺手真相<br>
            狀態：封鎖中／錯誤碼已累積（6）<br>
            風險：輕度心理共振`,
        `[ RESET POINT SYSTEM // ACCESS LOG 013 ]<br>
            檔案名稱：偏差筆錄（#RP-MEM-005-DEVIATION）<br>
            標籤：主觀現實｜錯亂敘事｜觀測干擾<br>
            狀態：監控中／未知運行錯誤（2）<br>
            風險：中度認知紊亂`
    ]

    //副本進度
    const gameRecord = [
        user.completedChapter + user.completedEndings,
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
    ]

    //結局狀態
    const endings = {
        0: { endings: user.completedEndings, allEndings: 3 },
        1: { endings: 0, allEndings: 0 },
        2: { endings: 0, allEndings: 0 },
        3: { endings: 0, allEndings: 0 },
        4: { endings: 0, allEndings: 0 },
        5: { endings: 0, allEndings: 0 },
        6: { endings: 0, allEndings: 0 },
        7: { endings: 0, allEndings: 0 },
        8: { endings: 0, allEndings: 0 },
        9: { endings: 0, allEndings: 0 },
        10: { endings: 0, allEndings: 0 },
        11: { endings: 0, allEndings: 0 }
    }

    //任務資料
    const missionDetail = {
        mission01: {
            id: 'mission01',
            describe: '完成[甜蜜偽像]所有任務',
            currentProgress: user.missions['mission01'].currentProgress,
            maxProgress: user.missions['mission01'].maxProgress,
            rewardClaimed: user.missions['mission01'].rewardClaimed,
        },
        mission02: {
            id: 'mission02',
            describe: '完成一個節點',
            currentProgress: user.missions['mission02'].currentProgress,
            maxProgress: user.missions['mission02'].maxProgress,
            rewardClaimed: user.missions['mission02'].rewardClaimed,
        },
        mission03: {
            id: 'mission03',
            describe: '完成三個節點',
            currentProgress: user.missions['mission03'].currentProgress,
            maxProgress: user.missions['mission03'].maxProgress,
            rewardClaimed: user.missions['mission03'].rewardClaimed,
        },
        mission04: {
            id: 'mission04',
            describe: '完成五個節點',
            currentProgress: user.missions['mission04'].currentProgress,
            maxProgress: user.missions['mission04'].maxProgress,
            rewardClaimed: user.missions['mission04'].rewardClaimed,
        },
        mission05: {
            id: 'mission05',
            describe: '通關[甜蜜偽像]所有結局',
            currentProgress: user.missions['mission05'].currentProgress,
            maxProgress: user.missions['mission05'].maxProgress,
            rewardClaimed: user.missions['mission05'].rewardClaimed,
        }
    };

    const maxExp = 200;
    const maxProgress = 8;

    //安全更新屬性條
    function updateProgressBar(id, value, max = 100) {
        const bar = document.getElementById(id);
        if (bar && !isNaN(value) && max != 0) {
            bar.style.width = `${Math.min((value / max) * 100, 100)}%`;
        }
    }

    updateProgressBar('profileExpBarFill', user.experience, maxExp);
    updateProgressBar('strength', user.strength * 5);
    updateProgressBar('intelligence', user.intelligence * 5);
    updateProgressBar('agility', user.agility * 5);
    updateProgressBar('fortune', user.fortune * 5);

    const carousel = document.getElementById('carousel');
    const cardCount = 12;
    const radius = 450;
    const step = 360 / cardCount;
    let angle = 0;

    // 建立卡片
    for (let i = 0; i < cardCount; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = i;

        const img = document.createElement('img');
        img.className = 'cover';
        img.src = imageUrls[i];
        img.alt = gameNames[i];
        card.appendChild(img);

        const theta = step * i;
        card.style.transform = `rotateY(${theta}deg) translateZ(${radius}px)`;
        carousel.appendChild(card);
    }

    function updateActiveCard() {
        const index = ((-angle / step) % cardCount + cardCount) % cardCount;
        const roundedIndex = Math.round(index);
        const allCards = document.querySelectorAll('.card');

        allCards.forEach(card => {
            const i = parseInt(card.dataset.index);
            const theta = step * i;
            const isActive = i === roundedIndex;
            card.style.transform = `rotateY(${theta}deg) translateZ(${radius}px) scale(${isActive ? 1.2 : 1})`;
            card.style.zIndex = isActive ? 10 : 1;
        });

        document.getElementById('gameName').innerText = gameNames[roundedIndex];
        document.getElementById('gameIntroContent').innerHTML = describes[roundedIndex] || '';

        const noEnding = endings[roundedIndex].allEndings == 0

        //const gameRecordValue = (gameRecord[roundedIndex] / 8 * 100).toFixed(0);
        document.getElementById('gameRecord').innerText = noEnding ? '?' : (gameRecord[roundedIndex] / 8 * 100).toFixed(0);

        updateProgressBar('fillGameProgressBar', gameRecord[roundedIndex] + endings[roundedIndex].endings, maxProgress || 1);
        console.log(gameRecord[roundedIndex] + endings[roundedIndex].endings)

        document.getElementById('endingRecord').innerText = `${noEnding ? '?' : endings[roundedIndex].endings} / ${noEnding ? '?' : endings[roundedIndex].allEndings}`

        const container = document.getElementById('endings');
        container.innerHTML = '';
        const unlocked = endings[roundedIndex].endings;
        const total = endings[roundedIndex].allEndings;

        for (let i = 0; i < total; i++) {
            const div = document.createElement('div');
            div.className = i < unlocked ? 'unlockEndingCircle' : 'lockEndingCircle';
            container.appendChild(div);
        }

        const enterBtn = document.getElementById('enterBtn');
        if (gameNames[roundedIndex] === '甜蜜偽像') {
            enterBtn.innerText = 'ENTER';
            enterBtn.className = 'enter jersey-15';
            enterBtn.disabled = false;
        } else {
            enterBtn.innerText = 'LOCKED';
            enterBtn.className = 'locked jersey-15';
            enterBtn.disabled = true;
        }
    }

    updateActiveCard();

    document.getElementById('enterBtn').addEventListener('click', () => {
        if (document.getElementById('gameName').innerText === '甜蜜偽像') {
            window.parent.document.getElementById('contentFrame').src = 'root.html'
            if (user.musicOn) {
                parent.postMessage({ type: 'MUSIC', action: 'play' }, '*');
            }
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') angle -= step;
        if (e.key === 'ArrowLeft') angle += step;
        carousel.style.transform = `rotateY(${angle}deg)`;
        updateActiveCard();
    });

    //個人資訊
    document.getElementById('profileName').innerText = user.name || '#未註冊重置者';
    document.getElementById('profileId').innerText = user.id || '#????????';

    //任務資料
    const missionDetailContainer = document.getElementById('missionDetail');
    missionDetailContainer.innerHTML = ''; // 清空原始內容

    const missionList = Object.values(missionDetail);
    const unclaimedMissions = missionList.filter(m => !m.rewardClaimed).slice(0, 3);

    unclaimedMissions.forEach(mission => {
        const link = document.createElement('a');
        link.href = 'mission.html';

        const p = document.createElement('p');
        p.className = 'perMission lxgw-wenkai';
        p.innerHTML = `${mission.describe}<span class="missionRecord jersey-15">(${mission.currentProgress}/${mission.maxProgress})</span>`;

        link.appendChild(p);
        missionDetailContainer.appendChild(link);

        // 每筆後都加分隔線
        const line = document.createElement('div');
        line.className = 'line';
        missionDetailContainer.appendChild(line);
    });

});
