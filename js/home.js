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
        'Sweet Illusion',
        'The Lightkeeper',
        'The Navigator’s Log',
        'CV-E20',
        'Uplink Failure',
        'Mirror Adjustment',
        'The Sewer Receiver',
        'Duplicated Apartment',
        'Refraction of Illusions',
        'Dividend Day',
        'The Witness',
        'Deviation Report'
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
        File Name: Sweet Illusion (#RP-LUV-001-HONEY)<br>
        Tags: Emotional Attachment | Virtual Projection | AI Manipulation<br>
        Status: Simulation in Progress / Error Code Accumulated (${user.resetTimes})<br>
        Risk Level: Moderate Emotional Instability`,
        `[ RESET POINT SYSTEM // ACCESS LOG 004 ]<br>
        File Name: The Lightkeeper (#RP-FLK-001-LANTERN)<br>
        Tags: Folk Belief | Otherworldly Summoning | Rural Rituals<br>
        Status: Under Observation / Low-Frequency Event Replay (2)<br>
        Risk Level: Mild Psychological Resonance`,
        `[ RESET POINT SYSTEM // ACCESS LOG 005 ]<br>
        File Name: The Navigator’s Log (#RP-SEA-001-SEA)<br>
        Tags: Maritime Horror | Unknown Entities | Enclosed Space<br>
        Status: Locked / Abnormal Write Terminated (1)<br>
        Risk Level: Severe Emotional Instability`,
        `[ RESET POINT SYSTEM // ACCESS LOG 001 ]<br>
        File Name: CV-E20 (#RP-MEM-001-CVE20)<br>
        Tags: Memory Overlap | Viral Outbreak | Dual Catastrophe<br>
        Status: Abnormal Refresh / Reconstruction Loop Failure (5)<br>
        Risk Level: Moderate Memory Distortion`,
        `[ RESET POINT SYSTEM // ACCESS LOG 006 ]<br>
        File Name: Uplink Failure (#RP-EVO-001-CLIMB)<br>
        Tags: Spatial Disorder | Floor Loop | Ascent Lockdown<br>
        Status: Under Observation / Reconstruction Loop Failure (2)<br>
        Risk Level: Mild Membrane Fracture`,
        `[ RESET POINT SYSTEM // ACCESS LOG 007 ]<br>
        File Name: Mirror Adjustment (#RP-MEM-002-MIRRORFIX)<br>
        Tags: Mirror Parallels | Self-Division | Substitute Consciousness<br>
        Status: Locked / Unknown Runtime Error (7)<br>
        Risk Level: Moderate Cognitive Disruption`,
        `[ RESET POINT SYSTEM // ACCESS LOG 008 ]<br>
        File Name: The Sewer Receiver (#RP-SOC-001-SEWER)<br>
        Tags: Underground Communication | Resistance Network | Anonymous Missions<br>
        Status: Under Investigation / Low-Frequency Event Replay (3)<br>
        Risk Level: Moderate Psychological Resonance`,
        `[ RESET POINT SYSTEM // ACCESS LOG 009 ]<br>
        File Name: Duplicated Apartment (#RP-MEM-003-COPYAPT)<br>
        Tags: Temporal Duplication | Overlapping Realities | Anomalous Identity<br>
        Status: Locked / Error Code Accumulated (12)<br>
        Risk Level: Mild System Error`,
        `[ RESET POINT SYSTEM // ACCESS LOG 010 ]<br>
        File Name: Refraction of Illusions (#RP-MEM-004-ILLUSION)<br>
        Tags: Visual Substitution | Abnormal Replay | Memory Disorder<br>
        Status: Abnormal Operation / Low-Frequency Event Replay (3)<br>
        Risk Level: Severe Cognitive Disruption`,
        `[ RESET POINT SYSTEM // ACCESS LOG 011 ]<br>
        File Name: Dividend Day (#RP-SOC-002-DIVIDEND)<br>
        Tags: Workplace Pressure | Mental Breakdown | Social Elimination<br>
        Status: Locked / Reconstruction Loop Failure (1)<br>
        Risk Level: Mild Emotional Instability`,
        `[ RESET POINT SYSTEM // ACCESS LOG 012 ]<br>
        File Name: The Witness (#RP-SOC-003-WITNESS)<br>
        Tags: Anonymous Surveillance | Event Distortion | Killer Revelation<br>
        Status: Locked / Error Code Accumulated (6)<br>
        Risk Level: Mild Psychological Resonance`,
        `[ RESET POINT SYSTEM // ACCESS LOG 013 ]<br>
        File Name: Deviation Report (#RP-MEM-005-DEVIATION)<br>
        Tags: Subjective Reality | Disordered Narrative | Observation Interference<br>
        Status: Under Surveillance / Unknown Runtime Error (2)<br>
        Risk Level: Moderate Cognitive Disruption`
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
            describe: 'Complete All Missions of [Sweet Illusion]',
            currentProgress: user.missions['mission01'].currentProgress,
            maxProgress: user.missions['mission01'].maxProgress,
            rewardClaimed: user.missions['mission01'].rewardClaimed,
        },
        mission02: {
            id: 'mission02',
            describe: 'Complete 1 Node',
            currentProgress: user.missions['mission02'].currentProgress,
            maxProgress: user.missions['mission02'].maxProgress,
            rewardClaimed: user.missions['mission02'].rewardClaimed,
        },
        mission03: {
            id: 'mission03',
            describe: 'Complete 3 Nodes',
            currentProgress: user.missions['mission03'].currentProgress,
            maxProgress: user.missions['mission03'].maxProgress,
            rewardClaimed: user.missions['mission03'].rewardClaimed,
        },
        mission04: {
            id: 'mission04',
            describe: 'Complete 5 Nodes',
            currentProgress: user.missions['mission04'].currentProgress,
            maxProgress: user.missions['mission04'].maxProgress,
            rewardClaimed: user.missions['mission04'].rewardClaimed,
        },
        mission05: {
            id: 'mission05',
            describe: 'Complete All Endings of [Sweet Illusion]',
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
        if (gameNames[roundedIndex] === 'Sweet Illusion') {
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
        if (document.getElementById('gameName').innerText === 'Sweet Illusion') {
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
