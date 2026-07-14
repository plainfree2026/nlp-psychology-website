// ============================================================
// NLP心理学自助成长网站 - 应用逻辑
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderPresuppositions();
  renderExperts('global');
  renderToolkit();
  renderBooks();
  renderInteractiveTools();
  bindExpertTabs();
});

// ------------------------------------------------------------
// 1. 现状洞察
// ------------------------------------------------------------
function renderStats() {
  document.getElementById('statGrid').innerHTML = crisisData.stats.map(s => `
    <div class="stat-card">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-desc">${s.desc}</div>
    </div>
  `).join('');
}

function renderProblems() {
  document.getElementById('problemGrid').innerHTML = crisisData.problems.map(p => `
    <div class="problem-card">
      <h3>${p.title}</h3>
      <div class="proposer">提出者：${p.proposer}</div>
      <p class="definition">${p.definition}</p>
      <h4>主要表现</h4>
      <div class="tag-list">
        ${p.manifestations.map(m => `<span class="tag tag-manifestation">${m}</span>`).join('')}
      </div>
      <h4>主要成因</h4>
      <div class="tag-list">
        ${p.causes.map(c => `<span class="tag tag-cause">${c}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ------------------------------------------------------------
// 2. NLP前提假设
// ------------------------------------------------------------
function renderPresuppositions() {
  document.getElementById('presupGrid').innerHTML = nlpPresuppositions.map((p, i) => `
    <div class="presup-card">
      <div class="presup-number">${i + 1}</div>
      <div class="presup-text">${p}</div>
    </div>
  `).join('');
}

// ------------------------------------------------------------
// 3. 专家渲染与交互
// ------------------------------------------------------------
function bindExpertTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderExperts(btn.dataset.tab);
    });
  });
}

function renderExperts(type) {
  const grid = document.getElementById('expertGrid');
  if (type === 'global') {
    grid.innerHTML = globalExperts.map((e, i) => `
      <div class="expert-card" onclick="showExpertDetail(${i})">
        <div class="expert-rank">${e.rank}</div>
        <span class="category">${e.category}</span>
        <h3>${e.name_cn}</h3>
        <div class="name-en">${e.name_en} · ${e.nationality}</div>
        <div class="expert-quote">${e.quote}</div>
        <div class="techniques-preview"><strong>特色技术：</strong>${e.techniques.slice(0, 3).join('、')}...</div>
        <div class="click-hint">点击查看详情 →</div>
      </div>
    `).join('');
  } else {
    grid.innerHTML = chinaExperts.map((e, i) => `
      <div class="expert-card" onclick="showChinaExpertDetail(${i})">
        <div class="expert-rank">${e.rank}</div>
        <span class="category">${e.category}</span>
        <h3>${e.name}</h3>
        <div class="name-en">${e.city}</div>
        <div class="expert-quote">${e.quote}</div>
        <div class="techniques-preview"><strong>特色技术：</strong>${e.techniques.slice(0, 3).join('、')}...</div>
        <div class="click-hint">点击查看详情 →</div>
      </div>
    `).join('');
  }
}

function showExpertDetail(idx) {
  const e = globalExperts[idx];
  const modal = document.getElementById('modalContent');
  modal.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-category">${e.category}</span>
    <h2>${e.name_cn}</h2>
    <div class="modal-name-en">${e.name_en} · ${e.nationality} · 排名 #${e.rank}</div>
    <div class="modal-section">
      <h4>金句</h4>
      <div class="modal-quote-box">${e.quote}</div>
    </div>
    <div class="modal-section">
      <h4>特色技术方法</h4>
      <ul class="modal-list">${e.techniques.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>代表著作</h4>
      <ul class="modal-list">${e.works.map(w => `<li>${w}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>主要观点</h4>
      <div class="modal-viewpoint">${e.viewpoint}</div>
    </div>
  `;
  document.getElementById('expertModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function showChinaExpertDetail(idx) {
  const e = chinaExperts[idx];
  const modal = document.getElementById('modalContent');
  modal.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-category">${e.category}</span>
    <h2>${e.name}</h2>
    <div class="modal-name-en">${e.city} · 排名 #${e.rank}</div>
    <div class="modal-section">
      <h4>金句</h4>
      <div class="modal-quote-box">${e.quote}</div>
    </div>
    <div class="modal-section">
      <h4>特色技术方法</h4>
      <ul class="modal-list">${e.techniques.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>代表著作/课程</h4>
      <ul class="modal-list">${e.works.map(w => `<li>${w}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>传承背景</h4>
      <div class="modal-viewpoint">${e.lineage || e.viewpoint}</div>
    </div>
    <div class="modal-section">
      <h4>主要贡献</h4>
      <div class="modal-viewpoint">${e.main_contribution || e.viewpoint}</div>
    </div>
  `;
  document.getElementById('expertModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('expertModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ------------------------------------------------------------
// 4. 自助工具箱
// ------------------------------------------------------------
function renderToolkit() {
  document.getElementById('toolGrid').innerHTML = toolkit.map(t => {
    const diffClass = t.difficulty === '初级' ? 'meta-difficulty-easy' : t.difficulty === '中级' ? 'meta-difficulty-mid' : 'meta-difficulty-hard';
    return `
      <div class="tool-card" id="tool-${t.id}">
        <div class="tool-header">
          <h3>${t.title}</h3>
          <div class="subtitle">${t.subtitle}</div>
          <div class="tool-meta">
            <span class="${diffClass}">${t.difficulty}</span>
            <span class="meta-duration">⏱ ${t.duration}</span>
            <span class="meta-duration">👤 ${t.origin}</span>
          </div>
        </div>
        <div class="tool-body">
          <div class="tool-scenario"><strong>适用场景：</strong>${t.scenario}</div>
          <ol class="tool-steps">${t.steps.map(s => `<li>${s}</li>`).join('')}</ol>
          <div class="tool-case">${t.case}</div>
          <div class="tool-tip">${t.tip}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ------------------------------------------------------------
// 5. 书籍精华
// ------------------------------------------------------------
function renderBooks() {
  document.getElementById('bookGrid').innerHTML = bookDigests.map(b => `
    <div class="book-card">
      <h3>${b.title}</h3>
      <div class="book-author">作者：${b.author}</div>
      <div class="core-method">核心方法：${b.core_method}</div>
      <div class="book-key-insight">${b.key_insight}</div>
      <div class="book-ria">
        <div class="book-ria-item"><span class="book-ria-label">R 原文</span>${b.ria.reading}</div>
        <div class="book-ria-item"><span class="book-ria-label">I 重述</span>${b.ria.interpretation}</div>
        <div class="book-ria-item"><span class="book-ria-label">A2 触发</span>${b.ria.application_trigger}</div>
        <div class="book-ria-item"><span class="book-ria-label">E 执行</span>${b.ria.execution}</div>
        <div class="book-ria-item"><span class="book-ria-label">B 边界</span>${b.ria.boundary}</div>
      </div>
    </div>
  `).join('');
}

// ------------------------------------------------------------
// 6. 互动工具
// ------------------------------------------------------------
function renderInteractiveTools() {
  document.getElementById('interactiveGrid').innerHTML = interactiveTools.map(t => `
    <div class="interactive-card" onclick="openToolPanel('${t.id}', '${t.title}', '${t.icon}')">
      <div class="interactive-icon">${t.icon}</div>
      <h3>${t.title}</h3>
      <p>${t.desc}</p>
    </div>
  `).join('');
}

function openToolPanel(id, title, icon) {
  document.getElementById('panelIcon').textContent = icon;
  document.getElementById('panelTitle').textContent = title;
  const body = document.getElementById('panelBody');
  body.innerHTML = '';

  switch(id) {
    case 'mood_meter': body.innerHTML = renderBreathingPrompt() + renderMoodMeter(); initMoodMeter(); break;
    case 'anchor_builder': body.innerHTML = renderBreathingPrompt() + renderAnchorBuilder(); initAnchorBuilder(); break;
    case 'reframe_lab': body.innerHTML = renderBreathingPrompt() + renderReframeLab(); initReframeLab(); break;
    case 'perceptual_wheel': body.innerHTML = renderBreathingPrompt() + renderPerceptualWheel(); initPerceptualWheel(); break;
    case 'belief_detector': body.innerHTML = renderBreathingPrompt() + renderBeliefDetector(); initBeliefDetector(); break;
    case 'belief_converter': body.innerHTML = renderBreathingPrompt() + renderBeliefConverter(); initBeliefConverter(); break;
    case 'belief_list': body.innerHTML = renderBeliefList(); break;
    case 'timeline_visual': body.innerHTML = renderBreathingPrompt() + renderTimelineVisual(); initTimelineVisual(); break;
    case 'self_talk': body.innerHTML = renderBreathingPrompt() + renderSelfTalk(); initSelfTalk(); break;
    case 'goal_aligner': body.innerHTML = renderBreathingPrompt() + renderGoalAligner(); initGoalAligner(); break;
    case 'emotion_release': body.innerHTML = renderBreathingPrompt() + renderEmotionRelease(); initEmotionRelease(); break;
    case 'growth_journal': body.innerHTML = renderBreathingPrompt() + renderGrowthJournal(); initGrowthJournal(); break;
  }
  document.getElementById('toolModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  document.getElementById('toolModalContent').scrollTop = 0;
}

function closeToolPanel() {
  document.getElementById('toolModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ====== 呼吸提示（NLP 4-7-8 呼吸法） ======
function renderBreathingPrompt() {
  return `
    <div id="breathingPrompt" style="background:linear-gradient(135deg,#EBF8FF,#E0E7FF);border-radius:12px;padding:20px;margin-bottom:24px;border:1px solid #BEE3F8;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <span style="font-size:28px;">🫁</span>
        <div>
          <div style="font-size:16px;font-weight:700;color:#2A4365;">开始之前，先做3次深呼吸</div>
          <div style="font-size:13px;color:#4A6FA5;">NLP建议：吸气4秒 → 屏息7秒 → 呼气8秒，帮助大脑进入最佳接收状态</div>
        </div>
      </div>
      <div id="breathingAnim" style="display:none;text-align:center;padding:20px 0;">
        <div id="breathCircle" style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#5B7FFF,#00C4A7);margin:0 auto 16px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:700;transition:transform 4s ease-in-out,background 4s;">准备</div>
        <div id="breathText" style="font-size:15px;color:#2A4365;font-weight:600;">点击下方按钮开始</div>
        <div id="breathCount" style="font-size:13px;color:#4A6FA5;margin-top:8px;">已完成 0/3 次</div>
      </div>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-primary" style="flex:1;padding:10px 20px;font-size:14px;" onclick="startBreathing()">开始呼吸练习</button>
        <button class="btn btn-secondary" style="padding:10px 20px;font-size:14px;" onclick="document.getElementById('breathingPrompt').style.display='none'">跳过，直接开始 →</button>
      </div>
    </div>
  `;
}

let breathTimer = null;
let breathCount = 0;
function startBreathing() {
  const anim = document.getElementById('breathingAnim');
  const circle = document.getElementById('breathCircle');
  const text = document.getElementById('breathText');
  const count = document.getElementById('breathCount');
  anim.style.display = 'block';
  breathCount = 0;

  const phases = [
    { label: '吸气', duration: 4000, scale: 1.4, color: '#5B7FFF' },
    { label: '屏息', duration: 7000, scale: 1.4, color: '#9b7faa' },
    { label: '呼气', duration: 8000, scale: 0.8, color: '#00C4A7' }
  ];

  let phaseIdx = 0;
  function nextPhase() {
    if (breathCount >= 3) {
      text.textContent = '✅ 呼吸完成，感觉好些了吗？';
      count.textContent = '已完成 3/3 次';
      circle.style.transform = 'scale(1)';
      circle.style.background = '#6faa7a';
      circle.textContent = '✓';
      clearInterval(breathTimer);
      setTimeout(() => {
        const prompt = document.getElementById('breathingPrompt');
        if (prompt) prompt.style.display = 'none';
      }, 1500);
      return;
    }
    const phase = phases[phaseIdx];
    circle.textContent = phase.label;
    circle.style.transition = `transform ${phase.duration/1000}s ease-in-out, background ${phase.duration/1000}s`;
    circle.style.transform = `scale(${phase.scale})`;
    circle.style.background = phase.color;
    text.textContent = `${phase.label}中…`;
    phaseIdx = (phaseIdx + 1) % 3;
    if (phaseIdx === 0) {
      breathCount++;
      count.textContent = `已完成 ${breathCount}/3 次`;
    }
  }
  nextPhase();
  breathTimer = setInterval(nextPhase, 1);
  // 用 setTimeout 链替代 setInterval 精确控制
  clearInterval(breathTimer);
  function runPhase() {
    if (breathCount >= 3) {
      text.textContent = '✅ 呼吸完成，现在你处于最佳状态';
      count.textContent = '已完成 3/3 次';
      circle.style.transform = 'scale(1)';
      circle.style.background = '#6faa7a';
      circle.textContent = '✓';
      setTimeout(() => {
        const prompt = document.getElementById('breathingPrompt');
        if (prompt) prompt.style.display = 'none';
      }, 1500);
      return;
    }
    const phase = phases[phaseIdx];
    circle.textContent = phase.label;
    circle.style.transition = `transform ${phase.duration/1000}s ease-in-out, background ${phase.duration/1000}s`;
    circle.style.transform = `scale(${phase.scale})`;
    circle.style.background = phase.color;
    text.textContent = `${phase.label}中…`;
    phaseIdx = (phaseIdx + 1) % 3;
    if (phaseIdx === 0) breathCount++;
    count.textContent = `已完成 ${breathCount}/3 次`;
    setTimeout(runPhase, phase.duration);
  }
  breathCount = 0;
  phaseIdx = 0;
  runPhase();
}

// ====== 工具1：情绪温度计 ======
function renderMoodMeter() {
  return `
    <div id="moodMeterApp">
      <p style="font-size:15px;color:var(--text-secondary);margin-bottom:24px;">花1分钟感受一下你现在的情绪状态。拖动滑块来标记，我们会根据你的状态给出建议。</p>
      <div id="moodStep1">
        <div class="assessment-question">你现在最突出的情绪是什么？</div>
        <div class="assessment-options" id="moodEmotions">
          ${['焦虑','沮丧','愤怒','迷茫','空虚','悲伤','恐惧','烦躁'].map((e,i) => 
            `<div class="assessment-option" onclick="selectMoodEmotion('${e}',${i})"><div class="radio"></div>${e}</div>`
          ).join('')}
        </div>
      </div>
      <div id="moodStep2" style="display:none">
        <div class="assessment-question">这种情绪有多强烈？（0=几乎没有，10=极度强烈）</div>
        <div class="mood-slider-container">
          <input type="range" min="0" max="10" value="5" class="mood-slider" id="moodSlider" oninput="document.getElementById('moodVal').textContent=this.value">
          <div class="mood-labels"><span>0 平静</span><span>5 中等</span><span>10 极度</span></div>
          <div style="text-align:center;font-size:32px;font-weight:800;color:var(--primary);margin-top:12px;" id="moodVal">5</div>
        </div>
        <button class="btn btn-primary" style="width:100%" onclick="showMoodResult()">查看建议 →</button>
      </div>
      <div id="moodResult" style="display:none"></div>
    </div>
  `;
}

let selectedMood = '';
function selectMoodEmotion(emotion, idx) {
  selectedMood = emotion;
  document.querySelectorAll('#moodEmotions .assessment-option').forEach((el, i) => {
    el.classList.toggle('selected', i === idx);
  });
  setTimeout(() => {
    document.getElementById('moodStep1').style.display = 'none';
    document.getElementById('moodStep2').style.display = 'block';
  }, 300);
}

function initMoodMeter() { selectedMood = ''; }

function showMoodResult() {
  const score = parseInt(document.getElementById('moodSlider').value);
  let level, color, suggestions;
  if (score <= 3) {
    level = '🟢 轻微'; color = '#48BB78';
    suggestions = [
      { text: '你的情绪状态良好，继续保持' },
      { text: '试试"心锚技术"把这个好状态固定下来', tool: 'anchor_builder', icon: '🎯' },
      { text: '花5分钟写感恩日记，强化积极感受', tool: 'growth_journal', icon: '📓' },
      { text: '用"目标锚定器"设定一个积极的成长目标', tool: 'goal_aligner', icon: '🏔️' }
    ];
  } else if (score <= 6) {
    level = '🟡 中等'; color = '#ECC94B';
    suggestions = [
      { text: '你的情绪需要关注，但不严重' },
      { text: '试试"情绪释放引导"从情绪中退后一步', tool: 'emotion_release', icon: '🌊' },
      { text: '用"换框练习器"看看这件事的其他角度', tool: 'reframe_lab', icon: '🖼️' },
      { text: '用"信念检测器"检查是否有限制性想法', tool: 'belief_detector', icon: '🔍' },
      { text: '找一个信任的人聊聊你的感受' }
    ];
  } else {
    level = '🔴 强烈'; color = '#F56565';
    suggestions = [
      { text: '你的情绪比较强烈，请认真对待' },
      { text: '现在就试试"情绪释放引导"让自己平复', tool: 'emotion_release', icon: '🌊' },
      { text: '查看"次感元调整"方法减弱负面画面冲击', toolkit: 'submodalities', icon: '🎨' },
      { text: '用"自我对话模拟器"转化消极内心对话', tool: 'self_talk', icon: '💬' },
      { text: '如果持续如此，请寻求专业心理咨询' },
      { text: '记住：寻求帮助是勇敢的表现' }
    ];
  }
  document.getElementById('moodStep2').style.display = 'none';
  const result = document.getElementById('moodResult');
  result.style.display = 'block';
  result.innerHTML = `
    <div class="result-card">
      <div class="result-icon">${level.split(' ')[0]}</div>
      <h4>你的情绪评估</h4>
      <div style="font-size:18px;margin-bottom:8px;">主导情绪：<strong>${selectedMood}</strong></div>
      <div class="result-score" style="color:${color}">${score}/10</div>
      <div class="result-desc">${level}</div>
      <ul class="result-suggestions" id="moodSuggestions">
        ${suggestions.map((s, i) => {
          if (s.tool) {
            const t = interactiveTools.find(t => t.id === s.tool);
            const title = t ? t.title : s.text;
            return `<li>${s.icon||''} <span class="suggestion-link" data-action="tool" data-tool-id="${s.tool}" data-tool-title="${title}" data-tool-icon="${s.icon||''}">${s.text}</span></li>`;
          } else if (s.toolkit) {
            return `<li>${s.icon||''} <span class="suggestion-link" data-action="toolkit" data-toolkit-id="${s.toolkit}">${s.text}</span></li>`;
          } else {
            return `<li>${s.text}</li>`;
          }
        }).join('')}
      </ul>
      <button class="btn btn-secondary" onclick="closeToolPanel()">完成评估</button>
    </div>
  `;
  // 绑定点击事件
  result.querySelectorAll('.suggestion-link').forEach(el => {
    el.addEventListener('click', function() {
      const action = this.dataset.action;
      if (action === 'tool') {
        openToolPanel(this.dataset.toolId, this.dataset.toolTitle, this.dataset.toolIcon);
      } else if (action === 'toolkit') {
        scrollToToolkit(this.dataset.toolkitId);
      }
    });
  });
}

function scrollToToolkit(toolId) {
  closeToolPanel();
  setTimeout(() => {
    const cards = document.querySelectorAll('#toolGrid .tool-card');
    const target = document.getElementById('tool-' + toolId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.style.transition = 'box-shadow 0.3s';
      target.style.boxShadow = '0 0 0 4px var(--primary), var(--shadow-lg)';
      setTimeout(() => { target.style.boxShadow = ''; }, 3000);
    } else {
      document.getElementById('toolkit').scrollIntoView({ behavior: 'smooth' });
    }
  }, 200);
}

// ====== 工具2：心锚设置器 ======
function renderAnchorBuilder() {
  const steps = [
    { title: '第一步：选择目标状态', desc: '你想通过心锚触发什么状态？（如：自信、平静、专注、快乐）', input: true, placeholder: '例如：考试前的自信状态', hint: '想一个你最需要的场景——考试前？演讲前？跟人吵架后？选定一个具体的状态。' },
    { title: '第二步：回忆巅峰时刻', desc: '回忆一个你完全处于这种状态的时刻。越具体越好——你在哪里？看到了什么？听到了什么？感受到了什么？', input: true, placeholder: '详细描述那个场景...', hint: '用5感来回忆：视觉（看到什么）、听觉（听到什么）、身体感觉（温度、触感）。越详细，记忆越真实，效果越强。' },
    { title: '第三步：选择心锚动作', desc: '选择一个独特、你平时不会做的身体动作。这将是你的"触发开关"。', input: false, options: ['握紧右拳3秒', '按住左手腕内侧', '深呼吸同时触摸右耳垂', '双手交叉拍肩膀', '自定义动作（请在下方描述）'] },
    { title: '第四步：设定心锚', desc: '现在闭上眼睛，充分沉浸在那个巅峰记忆中。当感受最强烈时，执行你选择的心锚动作，保持2-3秒。', input: false, info: true },
    { title: '第五步：测试心锚', desc: '打破状态（想些无关的事），然后做心锚动作。感受是否自动出现？如果没有，重复步骤2-4。', input: true, placeholder: '测试结果如何？感受出现了吗？', hint: '如果没有立即出现也没关系——心锚需要重复3-5次才能牢固。写下你的真实测试感受。' },
  ];
  return renderGuidedTool('anchorBuilder', steps, '心锚已设定', '记住在接下来的7天里，每天至少练习3次你的心锚。当你在真实情境中需要那种状态时，做心锚动作即可触发它。');
}

// ====== 工具3：换框练习器 ======
function renderReframeLab() {
  const steps = [
    { title: '第一步：写出困扰你的想法', desc: '用一句话描述让你困扰的事件或想法。', input: true, placeholder: '例如：我考试又考砸了，我太笨了', hint: '写出你脑子里真实出现的那句话，不要修饰。越真实，换框效果越好。' },
    { title: '第二步：情境换框', desc: '在什么情况下，这件事会有积极意义？', input: true, placeholder: '例如：这次失败让我提前发现了知识漏洞', hint: '问自己：这件事在什么时间、什么场景下反而是好事？例如"幸好现在发现了，而不是高考时才发现"。' },
    { title: '第三步：意义换框', desc: '这件事还能意味着什么？写出至少3个不同的解读。', input: true, placeholder: '1. ...\n2. ...\n3. ...', hint: '强迫自己写出3个完全不同的角度。例如：① 这是一次学习机会 ② 这让我更了解自己的弱点 ③ 这证明我还在尝试而不是放弃。' },
    { title: '第四步：行为换框', desc: '这种负面反应背后的正面动机是什么？', input: true, placeholder: '例如：感到挫败是因为我在乎自己的未来', hint: '每个负面情绪都有一个正面意图。焦虑=在乎、愤怒=边界被侵犯、悲伤=重视失去的东西。找到那个正面意图。' },
    { title: '第五步：选择新框架', desc: '从上面的新解读中，选择一个让你感觉最好的。把它写成新的陈述句。', input: true, placeholder: '你的新陈述...', hint: '好的新框架应该让你身体感到更轻松。如果写完没有身体变化，换一个角度再试。' },
  ];
  return renderGuidedTool('reframeLab', steps, '换框完成', '注意你身体的感受——当你用新框架思考时，是否更轻松了？反复强化这个新视角，它会逐渐成为你的默认反应。');
}

// ====== 工具4：感知位置轮盘 ======
function renderPerceptualWheel() {
  const steps = [
    { title: '第一位置：你自己', desc: '回忆一个让你困扰的冲突场景。从你的角度描述：我感到什么？因为什么？我希望什么？', input: true, placeholder: '我感到...因为...我希望...', hint: '例如：我感到很委屈，因为我已经解释了很多遍但他还是不信我。我希望他能听我说完。' },
    { title: '第二位置：对方', desc: '现在想象自己变成了对方。从对方的角度看这件事：他/她感到什么？因为什么？希望什么？', input: true, placeholder: '他/她感到...因为...希望...', hint: '试着真的"变成"那个人，用他/她的语气写。例如：我感到着急，因为这件事拖了很久，我希望尽快有个结论。' },
    { title: '第三位置：旁观者', desc: '作为一个中立的旁观者，客观地看这两个人。你看到了什么他们各自没看到的东西？', input: true, placeholder: '我看到两个人各自有合理的需要，但...', hint: '想象你是一个聪明的第三方顾问。例如：两个人其实想要同一个结果，只是在用不同的方式表达。' },
    { title: '整合智慧', desc: '带着第三位置的洞察回到你自己：现在你会怎么做？你对对方的理解有什么变化？', input: true, placeholder: '我现在会...', hint: '例如：我会先承认他的着急，然后提出一个我们都能接受的时间表。我发现他不是不信我，是太焦虑了。' },
  ];
  return renderGuidedTool('perceptualWheel', steps, '视角整合完成', '感知位置切换的核心是：当你真正站到对方的位置时，很多愤怒会自然消解。这不是原谅对方，而是释放自己。');
}

// 感知位置轮盘汇总输出
function show_perceptualWheel_summary(data, steps, title, msg) {
  const labels = ['🧑 第一位置（你自己）', '👥 第二位置（对方）', '👁️ 第三位置（旁观者）', '✨ 整合智慧'];
  return `
    <div class="result-card">
      <div class="result-icon">🔄</div>
      <h4>✅ ${title}</h4>
      <div class="result-desc" style="margin-bottom:20px;">${msg}</div>
      <div style="text-align:left;">
        <div style="font-size:16px;font-weight:700;color:var(--primary);margin-bottom:16px;text-align:center;">📋 你的感知位置练习汇总</div>
        ${labels.map((label, i) => {
          const content = data[i] || '(未填写)';
          return `
            <div style="background:var(--bg-card);border-radius:12px;padding:16px;margin-bottom:12px;border-left:4px solid var(--primary-light);box-shadow:var(--shadow-sm);">
              <div style="font-size:14px;font-weight:700;color:var(--primary);margin-bottom:8px;">${label}</div>
              <div style="font-size:14px;color:var(--text-secondary);line-height:1.7;white-space:pre-wrap;">${content}</div>
            </div>
          `;
        }).join('')}
      </div>
      <div style="padding:16px;background:linear-gradient(135deg,#F0FFF4,#E6FFFA);border-radius:12px;margin:16px 0;">
        <p style="font-size:14px;color:#276749;line-height:1.7;">💡 <strong>建议：</strong>把这份汇总截图保存。下次再遇到类似冲突时翻出来看看——你会发现自己已经拥有了多角度智慧。</p>
      </div>
      <button class="btn btn-secondary" onclick="closeToolPanel()">完成</button>
    </div>
  `;
}

// ====== 工具5：信念检测器 ======
function renderBeliefDetector() {
  return `
    <div id="beliefApp">
      <p style="font-size:15px;color:var(--text-secondary);margin-bottom:24px;">用NLP元模型的提问技术，破解那些困住你的限制性信念。</p>
      <div class="assessment-question">写下你脑海中反复出现的限制性想法：</div>
      <textarea id="beliefInput" style="width:100%;min-height:80px;padding:16px;border:2px solid var(--border);border-radius:12px;font-size:14px;font-family:inherit;resize:vertical;margin-bottom:20px;" placeholder="例如：我永远学不好数学 / 没人会喜欢我 / 学习根本没有用"></textarea>
      <button class="btn btn-primary" style="width:100%" onclick="analyzeBelief()">检测信念 →</button>
      <div id="beliefResult" style="display:none;margin-top:24px"></div>
    </div>
  `;
}

function analyzeBelief() {
  const belief = document.getElementById('beliefInput').value.trim();
  if (!belief) return;
  
  const patterns = [
    { name: '泛化检测', question: '你用了"总是""永远""从不""什么都"这样的词吗？', 
      hint: '试着把泛化词替换为具体事实：不是"永远学不好"，而是"这次XX知识点没掌握"。' },
    { name: '删减检测', question: '你怎么知道这是真的？有什么具体证据？',
      hint: '很多时候我们的信念缺乏具体证据支撑。找一找反例——有没有哪次你做得还不错？' },
    { name: '扭曲检测', question: '这是谁说的？你自己判断的，还是别人告诉你的？',
      hint: '区分事实和解读。事实是"这次考了60分"，解读是"我太笨了"。解读可以改变。' },
    { name: '因果检测', question: '"学不好"会导致什么后果？这个因果逻辑真的成立吗？',
      hint: '检查你假设的因果链。"学不好数学"≠"人生完蛋"。打破虚假的因果连接。' },
    { name: '等价检测', question: '"学不好"对你来说意味着什么？你等于什么？',
      hint: '你 ≠ 你的成绩。一个人的价值不取决于某个科目的表现。' },
  ];

  const result = document.getElementById('beliefResult');
  result.style.display = 'block';
  result.innerHTML = `
    <div class="result-card">
      <div class="result-icon">🔍</div>
      <h4>信念分析报告</h4>
      <div class="result-desc">你的原始信念：<strong style="color:var(--accent)">"${belief}"</strong></div>
      <div style="text-align:left;margin:20px 0">
        ${patterns.map((p, i) => `
          <div style="padding:16px;background:var(--bg-soft);border-radius:12px;margin-bottom:12px">
            <div style="font-weight:700;color:var(--primary);margin-bottom:8px">${i+1}. ${p.name}</div>
            <div style="font-size:14px;color:var(--text-secondary);margin-bottom:8px">${p.question}</div>
            <div style="font-size:13px;color:var(--secondary)">💡 ${p.hint}</div>
          </div>
        `).join('')}
      </div>
      <div style="padding:20px;background:linear-gradient(135deg,#F0FFF4,#E6FFFA);border-radius:12px;margin-bottom:20px">
        <div style="font-weight:700;color:#276749;margin-bottom:8px">现在试着重新表述：</div>
        <div style="font-size:14px;color:var(--text-secondary)">用更准确、更具体的语言重写你的信念。去掉泛化词，加入具体事实，区分事实和解读。</div>
        <textarea id="newBeliefInput" style="width:100%;min-height:60px;padding:12px;border:2px solid var(--border);border-radius:8px;font-size:14px;font-family:inherit;margin-top:12px" placeholder="你的新表述..."></textarea>
        <button class="btn btn-primary" style="margin-top:12px" onclick="saveNewBelief()">确认新信念</button>
      </div>
      <div id="newBeliefResult"></div>
    </div>
  `;
}

function saveNewBelief() {
  const newBelief = document.getElementById('newBeliefInput').value.trim();
  if (!newBelief) return;
  document.getElementById('newBeliefResult').innerHTML = `
    <div class="guided-result">
      <h4>✅ 信念已更新</h4>
      <p style="font-size:15px">旧信念已被新的、更准确的表述替代：<br><strong style="color:var(--primary)">${newBelief}</strong></p>
      <p style="font-size:13px;color:var(--text-secondary);margin-top:12px">建议你在接下来一周里，每次旧信念出现时，立刻用新信念替换它。重复21天，新的思维模式就会成为习惯。</p>
    </div>
  `;
}

// ====== 工具5b：信念转换器 ======
function renderBeliefConverter() {
  return `
    <div id="beliefConverterApp">
      <p style="font-size:15px;color:var(--text-secondary);margin-bottom:8px;">输入你脑海中那句困住你的话，系统会基于NLP换框法和语言魔术（Sleight of Mouth）自动帮你转换。</p>
      <div style="font-size:13px;color:var(--text-light);margin-bottom:20px;">💡 不知道怎么写？试试这些：「我永远学不好英语」「没有人会理解我」「我这辈子就这样了」</div>
      <textarea id="converterInput" style="width:100%;min-height:80px;padding:16px;border:2px solid var(--border);border-radius:12px;font-size:14px;font-family:inherit;resize:vertical;margin-bottom:20px;" placeholder="例如：我永远学不好英语"></textarea>
      <button class="btn btn-primary" style="width:100%" onclick="convertBelief()">转换信念 →</button>
      <div id="converterResult" style="display:none;margin-top:24px"></div>
    </div>
  `;
}

function initBeliefConverter() {}

function convertBelief() {
  const input = document.getElementById('converterInput').value.trim();
  if (!input) return;

  // NLP换框规则库
  const rules = [
    { match: /永远|总是|从不|从来不|从来不曾/, fix: b => b.replace(/永远|总是/g,'目前').replace(/从不/g,'还没有'), reason: '「永远/总是」是泛化——把时间从"永恒"缩小到"目前"，就有了改变的空间。' },
    { match: /什么都|什么也|一切/, fix: b => b.replace(/什么都|什么也/g,'有些方面').replace(/一切/g,'部分'), reason: '「什么都」是删减——并非什么都做不好，只是某些方面还需要加强。' },
    { match: /太笨|太蠢|太差|没天赋|不行/, fix: b => b.replace(/太笨|太蠢/g,'还在学习中').replace(/太差/g,'还有提升空间').replace(/没天赋/g,'还没找到适合我的方法').replace(/不行/g,'还没找到方法'), reason: '「笨/差/不行」是人格等价——把行为表现等同于人格。你≠你的表现。' },
    { match: /没有人|没人|谁都不/, fix: b => b.replace(/没有人|没人/g,'不是所有人').replace(/谁都不/g,'暂时还没遇到对的人'), reason: '「没有人」是泛化——否定所有可能性。只需要一个对的人就够了。' },
    { match: /做不到|不可能|没办法/, fix: b => b.replace(/做不到/g,'还没找到方法做到').replace(/不可能/g,'目前看起来有难度，但不是不可能').replace(/没办法/g,'还没找到合适的办法'), reason: '「做不到」是因果删减——把"还没做到"等同于"永远做不到"。' },
    { match: /完了|毁了|没救了|全完了/, fix: b => b.replace(/完了|全完了/g,'遇到了一个挫折').replace(/毁了/g,'需要调整方向').replace(/没救了/g,'需要换个方法'), reason: '「完了」是灾难化——把一个挫折放大成终局。挫折是信息，不是终局。' },
    { match: /没用|没意义|没意思/, fix: b => b.replace(/没用/g,'效果还不明显').replace(/没意义/g,'我还没找到它的意义').replace(/没意思/g,'暂时提不起兴趣'), reason: '「没意义」是删减——意义不是发现的，是创造的。先行动，意义会浮现。' },
    { match: /不应该|不能|不可以/, fix: b => b.replace(/不应该/g,'可以选择不').replace(/不能/g,'可以暂时不').replace(/不可以/g,'有其他选择'), reason: '「不应该」是规则扭曲——把"选择"变成"禁令"。你有选择权。' },
    { match: /必须|一定|非得/, fix: b => b.replace(/必须/g,'更希望').replace(/一定/g,'倾向于').replace(/非得/g,'优先选择'), reason: '「必须」是绝对化——制造虚假的紧迫感。很少有事情是"必须"的。' },
    { match: /别人都|大家都|所有人都/, fix: b => b.replace(/别人都|大家都/g,'有些人').replace(/所有人都/g,'部分人'), reason: '「别人都」是虚假比较——你看到的"别人"只是幸存者偏差。' },
  ];

  let converted = input;
  let appliedRules = [];
  for (const r of rules) {
    if (r.match.test(converted)) {
      const before = converted;
      converted = r.fix(converted);
      if (before !== converted) appliedRules.push(r);
    }
  }

  // 如果没有匹配到任何规则，用通用换框
  if (appliedRules.length === 0) {
    converted = input.replace(/我/g,'我正在学习').replace(/是/g,'暂时是') + '，但这不是终点。';
    appliedRules.push({ reason: '通用换框：在原句基础上加入"正在"和"暂时"，把固定状态变为过程。' });
  }

  // 生成3个不同角度的转换版本
  const versions = [
    { label: '🎯 精确化版本', text: converted, method: '元模型精确化：把泛化词替换为具体、可验证的表述。' },
    { label: '🔄 换框版本', text: input.replace(/永远|总是/g,'有时候').replace(/做不到|不行/g,'还在学习中').replace(/太笨|太差/g,'有提升空间') + '——这只是一个阶段，不是终点。', method: '意义换框：改变事件的意义框架，从"终局"变为"阶段"。' },
    { label: '💪 赋能版本', text: `虽然${input.replace(/我/g,'').replace(/永远|总是/g,'暂时')}，但我选择相信改变是可能的，今天我迈出一小步。`, method: '行为换框：承认现状的同时加入行动意图和选择权。' },
  ];

  document.getElementById('converterResult').style.display = 'block';
  document.getElementById('converterResult').innerHTML = `
    <div class="result-card">
      <div class="result-icon">🔄</div>
      <h4>信念转换结果</h4>
      <div style="background:#fdf0f0;padding:14px 16px;border-radius:8px;margin-bottom:20px;border-left:4px solid #c97a7a;">
        <div style="font-size:13px;color:#c97a7a;margin-bottom:4px;">原始限制性信念：</div>
        <div style="font-size:15px;color:#c97a7a;font-weight:600;">"${input}"</div>
      </div>
      ${versions.map((v,i) => `
        <div style="background:#f0f9f0;padding:16px;border-radius:8px;margin-bottom:14px;border-left:4px solid #6faa7a;">
          <div style="font-size:14px;font-weight:700;color:#3a6f3a;margin-bottom:8px;">${v.label}</div>
          <div style="font-size:15px;color:#3a6f3a;font-weight:600;line-height:1.7;margin-bottom:8px;">"${v.text}"</div>
          <div style="font-size:12px;color:var(--text-light);">💡 ${v.method}</div>
        </div>
      `).join('')}
      <div style="padding:16px;background:var(--bg-soft);border-radius:8px;margin-bottom:16px;">
        <div style="font-weight:700;color:var(--primary);margin-bottom:8px;">📊 检测到的语言模式：</div>
        ${appliedRules.map(r => `<div style="font-size:13px;color:var(--text-secondary);padding:4px 0;">• ${r.reason}</div>`).join('')}
      </div>
      <div style="padding:16px;background:linear-gradient(135deg,#EEF2FF,#E0E7FF);border-radius:8px;margin-bottom:16px;">
        <div style="font-size:14px;font-weight:700;color:var(--primary);margin-bottom:8px;">📌 选择一个最打动你的版本，抄下来：</div>
        <textarea id="chosenBelief" style="width:100%;min-height:60px;padding:12px;border:2px solid var(--border);border-radius:8px;font-size:14px;font-family:inherit;" placeholder="把你选中的那句话抄在这里…"></textarea>
        <button class="btn btn-primary" style="margin-top:12px;width:100%;" onclick="saveConvertedBelief()">保存为我的新信念</button>
      </div>
      <div id="convertedBeliefResult"></div>
      <button class="btn btn-secondary" style="margin-top:12px" onclick="closeToolPanel()">完成</button>
    </div>
  `;
}

function saveConvertedBelief() {
  const text = document.getElementById('chosenBelief').value.trim();
  if (!text) return;
  document.getElementById('convertedBeliefResult').innerHTML = `
    <div class="guided-result">
      <h4>✅ 新信念已保存</h4>
      <p style="font-size:15px"><strong style="color:var(--primary)">${text}</strong></p>
      <p style="font-size:13px;color:var(--text-secondary);margin-top:12px">把这句话写在手机备忘录里，设置成壁纸，或者贴在镜子上。每当旧信念冒出来，立刻用这句替换它。21天后，你的大脑会自动运行这个新程序。</p>
    </div>
  `;
}

// ====== 工具5c：20种信念对照表 ======
function renderBeliefList() {
  return `
    <div>
      <p style="font-size:15px;color:var(--text-secondary);margin-bottom:8px;">这是最常见的20种限制性信念，以及NLP换框后的赋能版本。涵盖自我价值、掌控选择、失败与完美、人际沟通、成长可能五个维度。</p>
      <p style="font-size:13px;color:var(--text-light);margin-bottom:24px;">参考：《高效能人士的7个习惯》《沟通的艺术》《重塑心灵》《非暴力沟通》</p>
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${beliefComparisons.map((b,i) => `
          <div style="background:var(--bg-card);border-radius:12px;overflow:hidden;border:1px solid var(--border);box-shadow:var(--shadow-sm);">
            <div style="display:flex;align-items:center;gap:8px;padding:8px 16px;background:var(--bg-soft);">
              <span style="font-size:14px;font-weight:700;color:var(--text-light);">#${i+1}</span>
            </div>
            <div style="padding:12px 16px;">
              <div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:10px;">
                <span style="background:#fdf0f0;color:#c97a7a;padding:2px 8px;border-radius:4px;font-size:12px;font-weight:600;white-space:nowrap;flex-shrink:0;">限制性</span>
                <span style="font-size:14px;color:#c97a7a;line-height:1.6;">${b.limiting}</span>
              </div>
              <div style="display:flex;align-items:flex-start;gap:8px;">
                <span style="background:#f0f9f0;color:#6faa7a;padding:2px 8px;border-radius:4px;font-size:12px;font-weight:600;white-space:nowrap;flex-shrink:0;">赋能</span>
                <span style="font-size:14px;color:#3a6f3a;line-height:1.6;font-weight:500;">${b.empowering}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="padding:20px;background:linear-gradient(135deg,#EEF2FF,#E0E7FF);border-radius:12px;margin-top:24px;text-align:center;">
        <p style="font-size:15px;color:var(--primary);font-weight:600;margin-bottom:8px;">💡 发现自己有这些限制性信念？</p>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px;">用「信念检测器」深入分析，或用「信念转换器」自动转换</p>
        <div style="display:flex;gap:10px;justify-content:center;">
          <button class="btn btn-primary" style="padding:10px 20px;font-size:14px;" onclick="openToolPanel('belief_detector','信念检测器','🔍')">去检测</button>
          <button class="btn btn-secondary" style="padding:10px 20px;font-size:14px;" onclick="openToolPanel('belief_converter','信念转换器','🔄')">去转换</button>
        </div>
      </div>
    </div>
  `;
}

// ====== 工具6：时间线可视化 ======
function renderTimelineVisual() {
  return `
    <div id="timelineApp">
      <p style="font-size:15px;color:var(--text-secondary);margin-bottom:24px;">你的"时间线"是你无意识中组织时间的方式。让我们先发现你的时间线方向，然后做一次简单的情绪释放。</p>
      <div class="assessment-question">闭上眼睛想一想：当你想到"过去"时，它在哪里？</div>
      <div class="assessment-options" id="timelineDir">
        ${['身后（过去在背后）','左边（过去在左侧）','下方（过去在脚下）','前方（过去在前面）','不确定'].map((d,i) => 
          `<div class="assessment-option" onclick="selectTimelineDir('${d}',${i})"><div class="radio"></div>${d}</div>`
        ).join('')}
      </div>
      <div id="timelineRelease" style="display:none">
        <div class="assessment-question" style="margin-top:24px">现在，想一件过去让你不舒服的事。简短描述它：</div>
        <textarea id="timelineEvent" style="width:100%;min-height:80px;padding:16px;border:2px solid var(--border);border-radius:12px;font-size:14px;font-family:inherit;resize:vertical;margin-bottom:16px" placeholder="例如：小学时被同学嘲笑..."></textarea>
        <div class="assessment-question">从上方俯瞰这件事，你学到了什么？</div>
        <textarea id="timelineLearn" style="width:100%;min-height:80px;padding:16px;border:2px solid var(--border);border-radius:12px;font-size:14px;font-family:inherit;resize:vertical;margin-bottom:16px" placeholder="我从这件事中学到了..."></textarea>
        <div class="assessment-question">对那个过去的自己说一句温暖的话：</div>
        <textarea id="timelineWords" style="width:100%;min-height:60px;padding:16px;border:2px solid var(--border);border-radius:12px;font-size:14px;font-family:inherit;resize:vertical;margin-bottom:20px" placeholder="例如：没关系，你已经做得很好了..."></textarea>
        <button class="btn btn-primary" style="width:100%" onclick="completeTimeline()">释放情绪 →</button>
      </div>
      <div id="timelineResult" style="display:none"></div>
    </div>
  `;
}

let timelineDir = '';
function selectTimelineDir(dir, idx) {
  timelineDir = dir;
  document.querySelectorAll('#timelineDir .assessment-option').forEach((el, i) => {
    el.classList.toggle('selected', i === idx);
  });
  setTimeout(() => {
    document.getElementById('timelineRelease').style.display = 'block';
  }, 300);
}

function initTimelineVisual() { timelineDir = ''; }

function completeTimeline() {
  const event = document.getElementById('timelineEvent').value.trim();
  const learn = document.getElementById('timelineLearn').value.trim();
  const words = document.getElementById('timelineWords').value.trim();
  if (!event || !learn || !words) return;
  document.getElementById('timelineRelease').style.display = 'none';
  document.getElementById('timelineResult').style.display = 'block';
  document.getElementById('timelineResult').innerHTML = `
    <div class="result-card">
      <div class="result-icon">🌊</div>
      <h4>情绪释放完成</h4>
      <div class="result-desc">
        你已经从更高视角重新审视了：<strong>${event}</strong><br><br>
        你获得的智慧：<strong style="color:var(--secondary)">${learn}</strong><br><br>
        你对过去的自己说：<strong style="color:var(--primary)">"${words}"</strong>
      </div>
      <div style="padding:16px;background:#F0FFF4;border-radius:12px;margin-bottom:20px">
        <p style="font-size:14px;color:#276749">深呼吸三次。想象那些积压的情绪像云一样从你身上飘走。你已经拿到了这段经历给你的礼物，可以放下包袱了。</p>
      </div>
      <button class="btn btn-secondary" onclick="closeToolPanel()">完成</button>
    </div>
  `;
}

// ====== 工具7：自我对话模拟器 ======
function renderSelfTalk() {
  return `
    <div id="selfTalkApp">
      <p style="font-size:15px;color:var(--text-secondary);margin-bottom:20px;">你的内在对话塑造你的现实。这个模拟器帮你把消极的自我对话转化为积极的NLP式对话。</p>
      <div class="chat-container" id="chatContainer">
        <div class="chat-message bot">
          <div class="chat-bubble">你好！我是你的内在智慧助手。告诉我，你现在对自己说了什么消极的话？</div>
        </div>
      </div>
      <div class="chat-input">
        <input type="text" id="chatInput" placeholder="输入你的想法..." onkeypress="if(event.key==='Enter')sendChatMessage()">
        <button onclick="sendChatMessage()">发送</button>
      </div>
    </div>
  `;
}

const selfTalkResponses = {
  '笨': '你说自己"笨"——这真的是事实吗？NLP告诉我们：你 ≠ 你的表现。这次没做好不等于你笨。试着说："这个知识点我还需要多练习"。',
  '做不到': '"做不到"——是现在做不到，还是永远做不到？NLP的假设说"凡事必有至少三个解决方法"。也许现在还没找到方法，但不代表不存在。',
  '没用': '你觉得"没用"——对什么没用？对谁没用？很多时候我们用模糊的"没用"来概括一切，但具体化之后你会发现并非全盘如此。',
  '讨厌': '你说"讨厌"自己——NLP认为每个行为背后都有正面动机。你讨厌的那个部分，可能正在以它的方式保护你。试着对它说："我知道你在试图保护我，但我们来找一个更好的方法好吗？"',
  '害怕': '恐惧是大脑的保护机制。NLP的次感元技术可以帮你减弱恐惧的画面感。试试把害怕的画面推远10米、变成黑白——感受有变化吗？',
  '失败': 'NLP说"没有挫败，只有回应信息"。失败不是终点，而是反馈——它在告诉你"这条路走不通，试试另一条"。',
  '没人喜欢': '"没人喜欢"——真的一个人都没有吗？NLP的元模型会问：你怎么知道？有没有反例？也许是你放大了负面、缩小了正面。',
  '累': '累——是身体累还是心累？如果是心累，可能是内在冲突消耗了你的能量。试试"核心转化法"，找到那个冲突背后的深层需求。',
  '焦虑': '焦虑是大脑在想象未来的负面画面。NLP的次感元技术可以帮你调整这些画面。也可以试试"逐步抽离法"——退后一步，焦虑就会减轻。',
  '放弃': '想放弃的时候，NLP说"动机和情绪总不会错，只是行为没有效果"。你的疲惫是真实的，但也许只是方法需要调整。深呼吸，给自己一个暂停。',
};

function initSelfTalk() {
  document.getElementById('chatInput').focus();
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  
  const container = document.getElementById('chatContainer');
  container.innerHTML += `<div class="chat-message user"><div class="chat-bubble">${msg}</div></div>`;
  input.value = '';
  container.scrollTop = container.scrollHeight;

  let response = '我听到了。NLP告诉我们：你对自己说的话，就是你在"编程"自己的大脑。试着把这句话改成更具体、更有建设性的表述。比如，把"我不行"改成"我还没有找到方法"。你想试试吗？';
  for (const key in selfTalkResponses) {
    if (msg.includes(key)) { response = selfTalkResponses[key]; break; }
  }

  setTimeout(() => {
    container.innerHTML += `<div class="chat-message bot"><div class="chat-bubble">${response}</div></div>`;
    container.scrollTop = container.scrollHeight;
  }, 600);
}

// ====== 工具8：目标锚定器 ======
function renderGoalAligner() {
  const steps = [
    { title: '第一层：身份', desc: '你想成为一个什么样的人？（不是做什么，而是"是谁"）', input: true, placeholder: '例如：一个终身学习者 / 一个有创造力的人', hint: '身份不是职业，是存在状态。例如不是"程序员"，而是"用技术解决问题的人"。' },
    { title: '第二层：信念/价值观', desc: '成为这样的人，你需要相信什么？什么对你最重要？', input: true, placeholder: '例如：相信成长比成绩重要、重视好奇心', hint: '信念是你深信不疑的东西。例如：我相信每个人都有无限可能。价值观是你做选择的优先级。' },
    { title: '第三层：能力', desc: '你需要发展什么能力来支持上面的信念？', input: true, placeholder: '例如：专注力、时间管理、批判性思维', hint: '能力是"能做什么"，不是"做什么"。例如不是"写代码"，而是"系统化思维能力"。' },
    { title: '第四层：行为', desc: '你每天具体要做什么？', input: true, placeholder: '例如：每天阅读30分钟、做错题分析', hint: '行为要具体、可执行、可衡量。越具体越好——"每天早上7点读20页书"比"多读书"有效100倍。' },
    { title: '第五层：环境', desc: '你需要什么资源和环境支持？', input: true, placeholder: '例如：安静的书桌、学习伙伴、图书馆', hint: '环境包括人、地、物。谁能帮你？去哪里做？需要什么工具？' },
  ];
  return renderGuidedTool('goalAligner', steps, '目标已对齐', '当五个层次从"我是谁"到"我在哪里做什么"完全一致时，你会感到一种内在的贯通感——不纠结、不内耗，行动自然有力量。');
}

// 目标锚定器汇总输出
function show_goalAligner_summary(data, steps, title, msg) {
  const labels = ['🏔️ 身份（我是谁）', '💎 信念/价值观（我相信什么）', '🛠️ 能力（我能做什么）', '🏃 行为（我每天做什么）', '🌍 环境（我在哪里、用什么）'];
  const colors = ['#b86a4a', '#9b7faa', '#7aa89f', '#6faa7a', '#d4896a'];
  const inputs = [data[0]||'', data[1]||'', data[2]||'', data[3]||'', data[4]||''];
  const filledCount = inputs.filter(s => s.trim().length > 0).length;

  // 李中莹人设的智能反馈
  const feedback = generateLiZhongyingFeedback(inputs);

  return `
    <div class="result-card">
      <div class="result-icon">🏔️</div>
      <h4>✅ ${title}</h4>
      <div class="result-desc" style="margin-bottom:20px;">${msg}</div>
      <div style="text-align:left;">
        <div style="font-size:16px;font-weight:700;color:var(--primary);margin-bottom:16px;text-align:center;">📋 你的逻辑层次对齐图</div>
        ${labels.map((label, i) => {
          const content = inputs[i] || '(未填写)';
          return `
            <div style="background:var(--bg-card);border-radius:12px;padding:16px;margin-bottom:10px;border-left:4px solid ${colors[i]};box-shadow:var(--shadow-sm);">
              <div style="font-size:14px;font-weight:700;color:${colors[i]};margin-bottom:8px;">${label}</div>
              <div style="font-size:14px;color:var(--text-secondary);line-height:1.7;white-space:pre-wrap;">${content}</div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- 李中莹反馈 -->
      <div style="margin:24px 0;border-radius:16px;overflow:hidden;border:2px solid #b86a4a;">
        <div style="background:linear-gradient(135deg,#b86a4a,#d4896a);padding:16px 20px;display:flex;align-items:center;gap:12px;">
          <div style="width:48px;height:48px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;">🧑‍🏫</div>
          <div>
            <div style="font-size:16px;font-weight:700;color:#fff;">李中莹的反馈</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.8);">NLP引入中国大陆第一人 · 简快身心积极疗法创始人</div>
          </div>
        </div>
        <div style="background:#faf8f5;padding:20px;">
          ${feedback}
        </div>
      </div>

      <div style="padding:16px;background:linear-gradient(135deg,#F0FFF4,#E6FFFA);border-radius:12px;margin:16px 0;">
        <p style="font-size:14px;color:#276749;line-height:1.7;">💡 <strong>建议：</strong>把这份对齐图和老师反馈截图保存。每天看一眼，检查自己的行为是否还在轨道上。</p>
      </div>
      <button class="btn btn-secondary" onclick="closeToolPanel()">完成</button>
    </div>
  `;
}

// 李中莹人设反馈生成器
function generateLiZhongyingFeedback(inputs) {
  const [identity, belief, capability, behavior, environment] = inputs;
  const filled = inputs.filter(s => s.trim().length > 0).length;
  let feedback = '';

  // 1. 整体评价
  if (filled < 3) {
    feedback += `<p style="margin:0 0 12px;font-size:15px;color:var(--text);line-height:1.8;">你填了${filled}层，还有${5-filled}层没填。没关系，有些层暂时想不清楚是正常的。但我想问你——你今天愿意花时间来做这件事，说明你心里有一个声音在说"我想变得更好"。对不对？<strong style="color:#b86a4a;">那个声音，就是你的自我价值在敲门。</strong></p>`;
  } else if (filled === 5) {
    feedback += `<p style="margin:0 0 12px;font-size:15px;color:var(--text);line-height:1.8;">五层都填了，好。你比我很多学员认真。但我不是来夸你的——我是来帮你看看，你写的这五层，是不是真的"通"了。</p>`;
  } else {
    feedback += `<p style="margin:0 0 12px;font-size:15px;color:var(--text);line-height:1.8;">好，你填了${filled}层。我们一层一层来看。</p>`;
  }

  // 2. 身份层分析
  if (identity.trim()) {
    const id = identity.trim();
    // 检查是否用了职业/角色而非身份
    if (/员|师|生|理|工|人|主|导|裁|员/.test(id) && !/一个|的人|者/.test(id)) {
      feedback += `<div style="padding:12px;background:#fff;border-radius:8px;margin-bottom:10px;border-left:3px solid #b86a4a;">
        <div style="font-size:13px;font-weight:700;color:#b86a4a;margin-bottom:4px;">关于「身份」层：</div>
        <p style="margin:0;font-size:14px;color:var(--text-secondary);line-height:1.7;">你写的是"${id}"。我想提醒你——职业不是身份。程序员会转行，老板会破产，学生会毕业。如果你把身份绑在职业上，职业没了你也就没了。<strong style="color:#b86a4a;">身份是"你是谁"，不是"你做什么"。</strong>试着重新想想：剥掉所有头衔之后，你是一个什么样的人？</p>
      </div>`;
    } else if (/完美|优秀|成功/.test(id)) {
      feedback += `<div style="padding:12px;background:#fff;border-radius:8px;margin-bottom:10px;border-left:3px solid #b86a4a;">
        <div style="font-size:13px;font-weight:700;color:#b86a4a;margin-bottom:4px;">关于「身份」层：</div>
        <p style="margin:0;font-size:14px;color:var(--text-secondary);line-height:1.7;">你想成为"${id}"。我理解你的追求，但注意——"完美""优秀"这些词本身就是一个陷阱。如果你的身份是"完美的人"，那你每次不完美的时候，身份就崩了。<strong style="color:#b86a4a;">试着把身份从"结果"转向"过程"——比如"一个持续成长的人"。</strong></p>
      </div>`;
    } else {
      feedback += `<div style="padding:12px;background:#fff;border-radius:8px;margin-bottom:10px;border-left:3px solid #6faa7a;">
        <div style="font-size:13px;font-weight:700;color:#6faa7a;margin-bottom:4px;">关于「身份」层 ✅</div>
        <p style="margin:0;font-size:14px;color:var(--text-secondary);line-height:1.7;">"${id}"——这个身份不错。它不依赖于外部条件，是你随时可以选择成为的存在状态。记住NLP的一条前提假设：<strong>"每个人都已经具备使自己成功快乐的资源。"</strong>你需要的不是变成另一个人，而是让这个身份在每一层都活出来。</p>
      </div>`;
    }
  }

  // 3. 信念层分析
  if (belief.trim()) {
    const bl = belief.trim();
    if (/必须|应该|不能|不可以|一定要/.test(bl)) {
      feedback += `<div style="padding:12px;background:#fff;border-radius:8px;margin-bottom:10px;border-left:3px solid #c97a7a;">
        <div style="font-size:13px;font-weight:700;color:#c97a7a;margin-bottom:4px;">关于「信念」层 ⚠️</div>
        <p style="margin:0;font-size:14px;color:var(--text-secondary);line-height:1.7;">你的信念里有"必须""应该""不能"这类词。这些叫<strong style="color:#c97a7a;">规则性信念</strong>——它们像锁链一样绑住你。NLP说："动机和情绪总不会错，只是行为没有效果而已。"你的动机是好的，但用"必须"来逼自己，效果往往不好。试着把"必须"换成"选择"——"我选择相信…"，感受一下区别。</p>
      </div>`;
    } else if (/成长|学习|可能|选择|接纳/.test(bl)) {
      feedback += `<div style="padding:12px;background:#fff;border-radius:8px;margin-bottom:10px;border-left:3px solid #6faa7a;">
        <div style="font-size:13px;font-weight:700;color:#6faa7a;margin-bottom:4px;">关于「信念」层 ✅</div>
        <p style="margin:0;font-size:14px;color:var(--text-secondary);line-height:1.7;">你的信念里有"成长""可能""选择"这些词——很好。这些都是<strong style="color:#6faa7a;">赋能型信念</strong>。继续强化它们。NLP有一条假设叫"有效果比有道理更重要"——如果这些信念让你活得更好，那就是对的。</p>
      </div>`;
    } else {
      feedback += `<div style="padding:12px;background:#fff;border-radius:8px;margin-bottom:10px;border-left:3px solid #d4896a;">
        <div style="font-size:13px;font-weight:700;color:#d4896a;margin-bottom:4px;">关于「信念」层：</div>
        <p style="margin:0;font-size:14px;color:var(--text-secondary);line-height:1.7;">你写的信念是"${bl}"。问自己一个问题：<strong style="color:#b86a4a;">这个信念是在支持你，还是在限制你？</strong>如果答案是后者，你需要用我们网站的「信念转换器」把它翻过来。</p>
      </div>`;
    }
  }

  // 4. 对齐度检查
  if (identity.trim() && behavior.trim()) {
    const id = identity.trim();
    const beh = behavior.trim();
    // 简单的语义冲突检测
    const idHasGrowth = /成长|学习|进步|探索|创造/.test(id);
    const behHasPassive = /刷手机|打游戏|躺|睡|拖延|发呆|追剧/.test(beh);
    if (idHasGrowth && behHasPassive) {
      feedback += `<div style="padding:12px;background:#fff0f0;border-radius:8px;margin-bottom:10px;border-left:3px solid #c97a7a;">
        <div style="font-size:13px;font-weight:700;color:#c97a7a;margin-bottom:4px;">⚠️ 对齐度警报</div>
        <p style="margin:0;font-size:14px;color:var(--text-secondary);line-height:1.7;">你的身份是"${id}"，但你的行为里有"${beh}"。这就是<strong style="color:#c97a7a;">不对齐</strong>——上层说要成长，下层在躺平。内耗就是这么来的。NLP说："重复旧的做法，只会得到旧的结果。"你需要从行为层开始改。不需要大改——把每天30分钟刷手机换成30分钟阅读，就是对齐的第一步。</p>
      </div>`;
    } else {
      feedback += `<div style="padding:12px;background:#f0f9f0;border-radius:8px;margin-bottom:10px;border-left:3px solid #6faa7a;">
        <div style="font-size:13px;font-weight:700;color:#6faa7a;margin-bottom:4px;">对齐度检查 ✅</div>
        <p style="margin:0;font-size:14px;color:var(--text-secondary);line-height:1.7;">你的身份和行为看起来是往同一个方向走的。很好。继续问自己：<strong style="color:#6faa7a;">这些行为是否足够支撑你想成为的那个人？</strong>如果还不够，加一个。一个就够。</p>
      </div>`;
    }
  }

  // 5. 三赢检查
  if (filled >= 3) {
    feedback += `<div style="padding:16px;background:linear-gradient(135deg,#EEF2FF,#E0E7FF);border-radius:12px;margin-bottom:10px;">
      <div style="font-size:14px;font-weight:700;color:#b86a4a;margin-bottom:8px;">🤝 三赢检查</div>
      <p style="margin:0;font-size:14px;color:var(--text-secondary);line-height:1.8;">最后我想问你一个问题——你设定的这个目标，是"<strong style="color:#b86a4a;">我好、你好、世界好</strong>"的吗？<br><br>如果只对你好但对别人不好——迟早会反噬。<br>如果对别人好但对你不好——你撑不住。<br>如果对你和身边人好但对社会无益——能量会慢慢消耗。<br><br>真正的对齐，是五个层次加上三赢，全部指向同一个方向。你觉得你的目标满足三赢吗？如果不满足，回去调整一下。调整之后，你会发现行动力自动就上来了——因为你不再内耗了。</p>
    </div>`;
  }

  // 6. 收尾
  feedback += `<div style="padding:14px;background:#fff;border-radius:8px;border:1px dashed #b86a4a;">
    <p style="margin:0;font-size:14px;color:var(--text);line-height:1.8;">最后一句话送给你——<strong style="color:#b86a4a;">"有效果比有道理更重要。"</strong>这份对齐图不是用来"想通"的，是用来"做到"的。今天就开始，做一件跟你的身份层对齐的事。哪怕只是一件小事。<br><br>做完了，你会发现——你本来就有这个能力。你只是忘了。</p>
  </div>`;

  return feedback;
}

// ====== 工具9：情绪释放引导 ======
function renderEmotionRelease() {
  const steps = [
    { title: '第一步：识别情绪', desc: '你现在正在体验什么强烈情绪？给它打分（0-10分）。', input: true, placeholder: '情绪类型和分数，例如：愤怒 8分' },
    { title: '第二步：飘到上方', desc: '想象你可以"飘"出来，飘到身体上方2米处。从上面看着坐在椅子上的自己。', input: false, info: true },
    { title: '第三步：升高视角', desc: '如果从2米高处情绪仍然强烈，再飘高到5米、10米。直到你能平静地观察那个画面。现在几分？', input: true, placeholder: '现在的分数...' },
    { title: '第四步：获取信息', desc: '从高处问自己：这个情绪想告诉我什么？它在保护什么？', input: true, placeholder: '这个情绪的信息是...' },
    { title: '第五步：感谢与回归', desc: '感谢那个情绪给你的信息，然后慢慢飘回身体里。重新评估分数。', input: true, placeholder: '飘回来之后的分数...' },
  ];
  return renderGuidedTool('emotionRelease', steps, '情绪已释放', '记住：情绪是"身在其中"时最强烈。一旦你退后一步成为"观察者"，情绪强度就会自动下降。这不是压抑，而是获得空间。');
}

// ====== 工具10：每日成长日记 ======
function renderGrowthJournal() {
  return `
    <div id="journalApp">
      <p style="font-size:15px;color:var(--text-secondary);margin-bottom:24px;">NLP格式的每日成长日记——不是流水账，而是结构化的自我对话。</p>
      <div id="journalForm">
        <div style="margin-bottom:20px">
          <label style="font-weight:700;color:var(--primary);display:block;margin-bottom:8px">📅 日期</label>
          <input type="date" id="journalDate" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:12px;font-size:14px;font-family:inherit" value="${new Date().toISOString().split('T')[0]}">
        </div>
        <div style="margin-bottom:20px">
          <label style="font-weight:700;color:var(--primary);display:block;margin-bottom:8px">🌟 今天最值得感恩的三件事</label>
          <textarea id="journalGratitude" style="width:100%;min-height:80px;padding:12px;border:2px solid var(--border);border-radius:12px;font-size:14px;font-family:inherit;resize:vertical" placeholder="1. ...\n2. ...\n3. ..."></textarea>
        </div>
        <div style="margin-bottom:20px">
          <label style="font-weight:700;color:var(--primary);display:block;margin-bottom:8px">💭 今天我的内在对话是什么？</label>
          <textarea id="journalSelfTalk" style="width:100%;min-height:80px;padding:12px;border:2px solid var(--border);border-radius:12px;font-size:14px;font-family:inherit;resize:vertical" placeholder="我对自己说了什么？是积极的还是消极的？"></textarea>
        </div>
        <div style="margin-bottom:20px">
          <label style="font-weight:700;color:var(--primary);display:block;margin-bottom:8px">🔄 如果有消极对话，用NLP换框法重写它</label>
          <textarea id="journalReframe" style="width:100%;min-height:80px;padding:12px;border:2px solid var(--border);border-radius:12px;font-size:14px;font-family:inherit;resize:vertical" placeholder="原来的想法 → 新的框架..."></textarea>
        </div>
        <div style="margin-bottom:20px">
          <label style="font-weight:700;color:var(--primary);display:block;margin-bottom:8px">🎯 明天的一个小行动</label>
          <textarea id="journalAction" style="width:100%;min-height:60px;padding:12px;border:2px solid var(--border);border-radius:12px;font-size:14px;font-family:inherit;resize:vertical" placeholder="明天我要做的一件小事..."></textarea>
        </div>
        <div style="margin-bottom:20px">
          <label style="font-weight:700;color:var(--primary);display:block;margin-bottom:8px">📊 今日情绪评分（0-10）</label>
          <input type="range" min="0" max="10" value="6" class="mood-slider" id="journalMood" oninput="document.getElementById('journalMoodVal').textContent=this.value+'分'">
          <div style="text-align:center;font-size:24px;font-weight:700;color:var(--primary);margin-top:8px" id="journalMoodVal">6分</div>
        </div>
        <button class="btn btn-primary" style="width:100%" onclick="saveJournal()">保存日记</button>
      </div>
      <div id="journalHistory" style="margin-top:32px">
        <h4 style="font-size:16px;font-weight:700;margin-bottom:16px;color:var(--primary)">📖 历史日记</h4>
        <div id="journalList"></div>
      </div>
    </div>
  `;
}

function initGrowthJournal() {
  renderJournalList();
}

function renderJournalList() {
  const list = document.getElementById('journalList');
  if (!list) return;
  let entries = [];
  try { entries = JSON.parse(localStorage.getItem('nlp_journal') || '[]'); } catch(e) {}
  if (entries.length === 0) {
    list.innerHTML = '<p style="color:var(--text-light);font-size:14px">还没有日记记录。写下你的第一篇吧！</p>';
    return;
  }
  list.innerHTML = entries.slice().reverse().map(e => `
    <div class="journal-entry">
      <div class="journal-date">📅 ${e.date} · 情绪：${e.mood}分</div>
      <div style="margin-top:8px"><strong>感恩：</strong>${(e.gratitude||'').substring(0,80)}${(e.gratitude||'').length>80?'...':''}</div>
      ${e.reframe ? `<div style="margin-top:4px"><strong>换框：</strong>${(e.reframe||'').substring(0,80)}${(e.reframe||'').length>80?'...':''}</div>` : ''}
      ${e.action ? `<div style="margin-top:4px"><strong>行动：</strong>${(e.action||'').substring(0,60)}</div>` : ''}
    </div>
  `).join('');
}

function saveJournal() {
  const entry = {
    date: document.getElementById('journalDate').value,
    gratitude: document.getElementById('journalGratitude').value,
    selfTalk: document.getElementById('journalSelfTalk').value,
    reframe: document.getElementById('journalReframe').value,
    action: document.getElementById('journalAction').value,
    mood: document.getElementById('journalMood').value
  };
  let entries = [];
  try { entries = JSON.parse(localStorage.getItem('nlp_journal') || '[]'); } catch(e) {}
  entries.push(entry);
  localStorage.setItem('nlp_journal', JSON.stringify(entries));
  renderJournalList();
  
  const form = document.getElementById('journalForm');
  form.innerHTML = `
    <div class="guided-result">
      <h4>✅ 日记已保存</h4>
      <p style="font-size:15px">恭喜你完成了今天的成长日记！</p>
      <p style="font-size:13px;color:var(--text-secondary);margin-top:12px">坚持记录21天，你会发现自己思维模式的变化——这就是NLP的"重新编程"在起作用。</p>
      <button class="btn btn-secondary" style="margin-top:16px" onclick="closeToolPanel()">完成</button>
    </div>
  `;
}

// ====== 通用引导工具渲染器 ======
function renderGuidedTool(id, steps, completeTitle, completeMsg) {
  window[`${id}Steps`] = steps;
  window[`${id}Current`] = 0;
  window[`${id}Data`] = {};
  return `
    <div id="${id}App">
      <div id="${id}Steps">
        ${steps.map((s, i) => `
          <div class="guided-step ${i === 0 ? 'active' : ''}" data-step="${i}">
            <h4>${s.title}</h4>
            <p>${s.desc}</p>
            ${s.hint ? `<div style="font-size:13px;color:var(--text-light);padding:8px 12px;background:var(--bg-soft);border-radius:8px;margin-bottom:12px;">💡 ${s.hint}</div>` : ''}
            ${s.input ? `<textarea class="guided-input" data-step="${i}" data-id="${id}" placeholder="${s.placeholder||''}" style="width:100%;min-height:100px;padding:16px;border:2px solid var(--border);border-radius:12px;font-size:14px;font-family:inherit;resize:vertical"></textarea>` : ''}
            ${s.options ? `<div class="assessment-options">${s.options.map(o => `<div class="assessment-option" onclick="this.parentNode.querySelectorAll('.assessment-option').forEach(e=>e.classList.remove('selected'));this.classList.add('selected')"><div class="radio"></div>${o}</div>`).join('')}</div>` : ''}
            ${s.info ? `<div style="padding:20px;background:linear-gradient(135deg,#EEF2FF,#E0E7FF);border-radius:12px;font-size:14px;color:var(--primary)"><strong>练习提示：</strong>找一个安静的地方，闭上眼睛，花2-3分钟充分体验这一步的感受。准备好后点击"下一步"。</div>` : ''}
            <div class="guided-nav">
              ${i > 0 ? `<button class="btn btn-secondary" onclick="guidedPrev('${id}')">← 上一步</button>` : '<div></div>'}
              ${i < steps.length - 1 ? `<button class="btn btn-primary" onclick="guidedNext('${id}')">下一步 →</button>` : `<button class="btn btn-primary" onclick="guidedComplete('${id}','${completeTitle}','${completeMsg}')">完成 ✓</button>`}
            </div>
          </div>
        `).join('')}
      </div>
      <div id="${id}Result" style="display:none"></div>
    </div>
  `;
}

function guidedNext(id) {
  const steps = window[`${id}Steps`];
  let current = window[`${id}Current`];
  // 保存当前步骤的输入
  const currentStep = document.querySelector(`#${id}App .guided-step[data-step="${current}"]`);
  const textarea = currentStep.querySelector('textarea');
  if (textarea) window[`${id}Data`][current] = textarea.value;
  const selectedOption = currentStep.querySelector('.assessment-option.selected');
  if (selectedOption) window[`${id}Data`]['option_'+current] = selectedOption.textContent.trim();
  // 切换
  const stepEls = document.querySelectorAll(`#${id}App .guided-step`);
  stepEls[current].classList.remove('active');
  current++;
  window[`${id}Current`] = current;
  stepEls[current].classList.add('active');
  // 恢复已有输入
  const newStep = document.querySelector(`#${id}App .guided-step[data-step="${current}"]`);
  const newTextarea = newStep.querySelector('textarea');
  if (newTextarea && window[`${id}Data`][current]) newTextarea.value = window[`${id}Data`][current];
}

function guidedPrev(id) {
  let current = window[`${id}Current`];
  // 保存当前步骤的输入
  const currentStep = document.querySelector(`#${id}App .guided-step[data-step="${current}"]`);
  const textarea = currentStep.querySelector('textarea');
  if (textarea) window[`${id}Data`][current] = textarea.value;
  const stepEls = document.querySelectorAll(`#${id}App .guided-step`);
  stepEls[current].classList.remove('active');
  current--;
  window[`${id}Current`] = current;
  stepEls[current].classList.add('active');
  // 恢复已有输入
  const newStep = document.querySelector(`#${id}App .guided-step[data-step="${current}"]`);
  const newTextarea = newStep.querySelector('textarea');
  if (newTextarea && window[`${id}Data`][current]) newTextarea.value = window[`${id}Data`][current];
}

function guidedComplete(id, title, msg) {
  // 保存最后一步的输入
  const current = window[`${id}Current`];
  const currentStep = document.querySelector(`#${id}App .guided-step[data-step="${current}"]`);
  if (currentStep) {
    const textarea = currentStep.querySelector('textarea');
    if (textarea) window[`${id}Data`][current] = textarea.value;
    const selectedOption = currentStep.querySelector('.assessment-option.selected');
    if (selectedOption) window[`${id}Data`]['option_'+current] = selectedOption.textContent.trim();
  }

  const resultEl = document.getElementById(`${id}Result`);
  document.getElementById(`${id}Steps`).style.display = 'none';
  resultEl.style.display = 'block';

  // 检查是否有自定义汇总函数
  const summaryFn = window[`show_${id}_summary`];
  if (typeof summaryFn === 'function') {
    resultEl.innerHTML = summaryFn(window[`${id}Data`], window[`${id}Steps`], title, msg);
  } else {
    resultEl.innerHTML = `
      <div class="guided-result">
        <h4>✅ ${title}</h4>
        <p style="font-size:15px;color:var(--text-secondary);line-height:1.8">${msg}</p>
        <button class="btn btn-secondary" style="margin-top:20px" onclick="closeToolPanel()">返回工具列表</button>
      </div>
    `;
  }
}

// 初始化引导工具的函数占位
function initAnchorBuilder() {}
function initReframeLab() {}
function initPerceptualWheel() {}
function initBeliefDetector() {}
function initGoalAligner() {}
function initEmotionRelease() {}

// ====== ESC关闭弹窗 ======
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeToolPanel();
  }
});
