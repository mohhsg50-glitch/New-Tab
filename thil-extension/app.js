(function(){
  'use strict'
  console.log('Thil Dashboard: loading')

  const SK={
    BG:'thil_bg',
    BG_IMG:'thil_bg_img',
    BG_VID:'thil_bg_vid',
    BG_PRE:'thil_bg_pre',
    LINKS:'thil_links',
    NOTES:'thil_notes',
    TODOS:'thil_todos',
    LOC:'thil_loc'
  }

  const PRE={
    default:'radial-gradient(ellipse at center, #1a1a2e, #0b0b12)',
    dark:'#0b0b12',
    gradient:'linear-gradient(135deg, #667eea, #764ba2)',
    ocean:'linear-gradient(135deg, #0c3483, #a2b6df)',
    sunset:'linear-gradient(135deg, #f12711, #f5af19)',
    forest:'linear-gradient(135deg, #11998e, #38ef7d)'
  }

  const ICON_SVGs={
    globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    music:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
    code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    shop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    game:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>',
    social:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    terminal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>'
  }

  const WTHR_ICONS={
    clear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    cloudy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    partly:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="9" r="4"/><line x1="8" y1="1" x2="8" y2="3"/><line x1="8" y1="15" x2="8" y2="17"/><line x1="1" y1="9" x2="3" y2="9"/><line x1="13" y1="9" x2="15" y2="9"/><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    rain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>',
    snow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/></svg>',
    thunder:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 13 17 11 23"/></svg>',
    mist:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="17" x2="7" y2="17"/><line x1="19" y1="13" x2="5" y2="13"/><line x1="20" y1="9" x2="4" y2="9"/><line x1="18" y1="5" x2="6" y2="5"/></svg>'
  }

  let editingLink=null

  function ld(k){try{const d=localStorage.getItem(k);return d?JSON.parse(d):null}catch{return null}}
  function sv(k,v){localStorage.setItem(k,JSON.stringify(v))}

  function toast(m){
    const t=document.getElementById('toast')
    t.textContent=m;t.classList.add('show')
    clearTimeout(t._h)
    t._h=setTimeout(()=>t.classList.remove('show'),2600)
  }

  function fmtTime(d){
    return d.toLocaleTimeString('ar-SA',{hour:'2-digit',minute:'2-digit',hour12:true})
  }

  function fmtDate(d){
    return d.toLocaleDateString('ar-SA',{weekday:'long',year:'numeric',month:'long',day:'numeric'})
  }

  function tick(){
    const n=new Date()
    document.getElementById('timeDisplay').textContent=fmtTime(n)
    document.getElementById('dateDisplay').textContent=fmtDate(n)
  }

  function applyBg(pre,img,vid){
    const b=document.body
    const video=document.getElementById('bgVideo')
    b.classList.remove('has-bg-image','has-bg-video')
    if(vid){
      video.src=vid
      video.load()
      video.style.display='block'
      b.style.background='none'
      b.classList.add('has-bg-video')
    }else{
      video.src=''
      video.style.display='none'
      if(img){
        b.style.background=`url(${img}) center/cover fixed no-repeat`
        b.classList.add('has-bg-image')
      }else if(pre&&PRE[pre]){
        b.style.background=PRE[pre]
      }else{
        b.style.background=PRE.default
      }
    }
  }

  function initBg(){
    const pre=ld(SK.BG_PRE)||'default'
    const img=ld(SK.BG_IMG)
    const vid=ld(SK.BG_VID)
    applyBg(pre,img,vid)
    document.querySelectorAll('.bg-chip').forEach(e=>e.classList.toggle('active',e.dataset.bg===pre))
  }

  function wthrSVG(code){
    if(code===0) return WTHR_ICONS.clear
    if(code<=2) return WTHR_ICONS.partly
    if(code<=3) return WTHR_ICONS.cloudy
    if(code<=48) return WTHR_ICONS.mist
    if(code<=57) return WTHR_ICONS.rain
    if(code<=67) return WTHR_ICONS.rain
    if(code<=77) return WTHR_ICONS.snow
    if(code<=82) return WTHR_ICONS.rain
    if(code<=86) return WTHR_ICONS.snow
    return WTHR_ICONS.thunder
  }

  function wthrTxt(code){
    const m={
      0:'صافية',1:'صافية',2:'غائمة جزئياً',3:'غائمة',
      45:'ضباب',48:'ضباب',51:'رذاذ',53:'رذاذ',55:'رذاذ',
      61:'مطر',63:'مطر',65:'أمطار غزيرة',
      71:'ثلج',73:'ثلج',75:'ثلوج كثيفة',
      80:'زخات مطر',81:'زخات مطر',82:'زخات غزيرة',
      95:'عاصفة رعدية',96:'عاصفة رعدية',99:'عاصفة شديدة'
    }
    return m[code]||''
  }

  async function fetchWthr(lat,lon){
    const el=document.getElementById('weatherContent')
    try{
      const r=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`)
      if(!r.ok)throw Error()
      const d=await r.json(),c=d.current,code=c.weather_code
      el.innerHTML=`
        <div class="wthr-main">
          <div class="wthr-ico">${wthrSVG(code)}</div>
          <span class="wthr-temp">${Math.round(c.temperature_2m)}°</span>
        </div>
        <div class="wthr-desc">${wthrTxt(code)}</div>
        <div class="wthr-meta">
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> ${Math.round(c.apparent_temperature)}°</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20v-4"/><path d="M6 20V4"/></svg> ${c.relative_humidity_2m}%</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg> ${Math.round(c.wind_speed_10m)}</span>
        </div>`
    }catch{
      el.innerHTML='<div class="dim">تعذر تحميل الطقس</div>'
    }
  }

  function initWthr(){
    const loc=ld(SK.LOC)
    if(loc&&loc.lat&&loc.lon){fetchWthr(loc.lat,loc.lon);return}
    navigator.geolocation.getCurrentPosition(
      p=>{const o={lat:p.coords.latitude,lon:p.coords.longitude};sv(SK.LOC,o);fetchWthr(o.lat,o.lon)},
      ()=>{fetchWthr(24.7136,46.6753)},
      {timeout:5000}
    )
  }

  function svLinks(a){sv(SK.LINKS,a);renderLinks()}

  function renderLinks(){
    const c=document.getElementById('linksContainer')
    const a=ld(SK.LINKS)||[]
    let h=''
    a.forEach((l,i)=>{
      const ico=ICON_SVGs[l.ico]||ICON_SVGs.globe
      h+=`<a class="link-item" href="${l.url}" title="${esc(l.name)}" data-idx="${i}">
        <div class="link-ico-box">${ico}</div>
        <span class="link-label">${esc(l.name)}</span>
        <button class="link-del" data-idx="${i}" aria-label="حذف">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </a>`
    })
    h+=`<button class="link-add" id="addLinkBtn2">
      <div class="link-ico-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </div>
      <span>إضافة</span>
    </button>`
    c.innerHTML='<div class="links-grid">'+h+'</div>'

    c.querySelectorAll('.link-item').forEach(el=>{
      el.addEventListener('click',function(e){
        e.preventDefault()
        if(e.target.closest('.link-del'))return
        const i=this.dataset.idx
        if(i!==undefined){const l=ld(SK.LINKS)||[];if(l[i])window.open(l[i].url,'_blank')}
      })
    })

    c.querySelectorAll('.link-del').forEach(el=>{
      el.addEventListener('click',function(e){
        e.stopPropagation()
        const i=parseInt(this.dataset.idx)
        const a=ld(SK.LINKS)||[]
        if(i>=0&&i<a.length){a.splice(i,1);svLinks(a);toast('تم حذف الرابط')}
      })
    })

    const ab=c.querySelector('#addLinkBtn2')
    if(ab)ab.addEventListener('click',()=>openLinkModal())
  }

  function openLinkModal(id){
    editingLink=id
    const w=document.getElementById('linkModalWrap')
    const t=document.getElementById('linkModalTitle')
    const ni=document.getElementById('linkNameInput')
    const ui=document.getElementById('linkUrlInput')
    const db=document.getElementById('linkDeleteBtn')

    if(id!==undefined&&id!==null){
      const a=ld(SK.LINKS)||[]
      const l=a[id]
      if(l){
        t.textContent='تعديل الرابط'
        ni.value=l.name
        ui.value=l.url
        db.style.display='block'
        document.querySelectorAll('.ico-opt').forEach(e=>e.classList.toggle('selected',e.dataset.ico===l.ico))
        w.classList.add('active');return
      }
    }
    t.textContent='إضافة رابط'
    ni.value='';ui.value=''
    db.style.display='none'
    document.querySelectorAll('.ico-opt').forEach(e=>e.classList.toggle('selected',e.dataset.ico==='globe'))
    w.classList.add('active')
  }

  function svLinkForm(){
    const ni=document.getElementById('linkNameInput'),ui=document.getElementById('linkUrlInput')
    const name=ni.value.trim(),url=ui.value.trim()
    const ico=document.querySelector('.ico-opt.selected')?.dataset.ico||'globe'
    if(!name){toast('أدخل اسم الرابط');return}
    if(!url){toast('أدخل الرابط');return}
    let fu=url
    if(!/^https?:\/\//i.test(fu))fu='https://'+fu
    const a=ld(SK.LINKS)||[]
    if(editingLink!==null&&editingLink!==undefined&&editingLink<a.length){
      a[editingLink]={name,url:fu,ico}
      toast('تم تعديل الرابط')
    }else{
      a.push({name,url:fu,ico})
      toast('تم إضافة الرابط')
    }
    svLinks(a)
    closeLinkModal()
  }

  function closeLinkModal(){
    document.getElementById('linkModalWrap').classList.remove('active')
    editingLink=null
  }

  function delLinkFromModal(){
    if(editingLink===null||editingLink===undefined)return
    const a=ld(SK.LINKS)||[]
    if(editingLink>=0&&editingLink<a.length){a.splice(editingLink,1);svLinks(a);toast('تم حذف الرابط')}
    closeLinkModal()
  }

  function svNotes(a){sv(SK.NOTES,a);renderNotes()}

  function renderNotes(){
    const c=document.getElementById('notesContainer')
    const a=ld(SK.NOTES)||[]
    if(!a.length){c.innerHTML='<div class="note-empty">لا توجد ملاحظات</div>';return}
    c.innerHTML=a.map((n,i)=>`
      <div class="note-item" data-idx="${i}">
        <div class="note-txt">${esc(n)}</div>
        <button class="note-edit" data-idx="${i}" title="تعديل">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
        <button class="note-del" data-idx="${i}" title="حذف">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    `).join('')

    c.querySelectorAll('.note-edit').forEach(el=>{
      el.addEventListener('click',function(){
        const i=parseInt(this.dataset.idx)
        const a=ld(SK.NOTES)||[]
        if(i>=0&&i<a.length){
          const t=prompt('تعديل الملاحظة:',a[i])
          if(t&&t.trim()){a[i]=t.trim();svNotes(a)}
        }
      })
    })

    c.querySelectorAll('.note-del').forEach(el=>{
      el.addEventListener('click',function(){
        const i=parseInt(this.dataset.idx)
        const a=ld(SK.NOTES)||[]
        if(i>=0&&i<a.length){a.splice(i,1);svNotes(a);toast('تم حذف الملاحظة')}
      })
    })
  }

  function esc(t){const d=document.createElement('div');d.textContent=t;return d.innerHTML}

  function addNote(){
    const t=prompt('أكتب ملاحظة جديدة:')
    if(t&&t.trim()){const a=ld(SK.NOTES)||[];a.push(t.trim());svNotes(a);toast('تم إضافة الملاحظة')}
  }

  function svTodos(a){sv(SK.TODOS,a);renderTodos()}

  function renderTodos(){
    const c=document.getElementById('todoContainer')
    const a=ld(SK.TODOS)||[]
    if(!a.length){c.innerHTML='<div class="todo-empty">لا توجد مهام</div>';return}
    c.innerHTML=a.map((t,i)=>`
      <div class="todo-item" data-idx="${i}">
        <input type="checkbox" class="todo-cb" ${t.done?'checked':''} data-idx="${i}">
        <span class="todo-txt ${t.done?'done':''}">${esc(t.text)}</span>
        <button class="todo-del" data-idx="${i}" title="حذف">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    `).join('')

    c.querySelectorAll('.todo-cb').forEach(el=>{
      el.addEventListener('change',function(){
        const i=parseInt(this.dataset.idx)
        const a=ld(SK.TODOS)||[]
        if(i>=0&&i<a.length){a[i].done=this.checked;svTodos(a)}
      })
    })

    c.querySelectorAll('.todo-del').forEach(el=>{
      el.addEventListener('click',function(){
        const i=parseInt(this.dataset.idx)
        const a=ld(SK.TODOS)||[]
        if(i>=0&&i<a.length){a.splice(i,1);svTodos(a);toast('تم حذف المهمة')}
      })
    })
  }

  function addTodo(){
    const f=document.getElementById('todoInput'),t=f.value.trim()
    if(!t){toast('أدخل المهمة');return}
    const a=ld(SK.TODOS)||[];a.push({text:t,done:false});svTodos(a);f.value='';toast('تم إضافة المهمة')
  }

  console.log('Thil Dashboard: registering DOMContentLoaded')
  document.addEventListener('DOMContentLoaded',function(){
    console.log('Thil Dashboard: DOMContentLoaded fired')
    initBg();tick();setInterval(tick,1000)
    initWthr();renderLinks();renderNotes();renderTodos()

    document.getElementById('searchInput').addEventListener('keydown',function(e){
      if(e.key==='Enter'){const q=this.value.trim();if(q)window.open(`https://www.google.com/search?q=${encodeURIComponent(q)}`,'_blank')}
    })

    document.getElementById('settingsBtn').addEventListener('click',()=>document.getElementById('settingsModalWrap').classList.add('active'))
    document.getElementById('modalClose').addEventListener('click',()=>document.getElementById('settingsModalWrap').classList.remove('active'))
    document.getElementById('settingsModalWrap').addEventListener('click',function(e){if(e.target===this)this.classList.remove('active')})

    document.querySelectorAll('.bg-chip').forEach(el=>{
      el.addEventListener('click',function(){
        const p=this.dataset.bg
        document.querySelectorAll('.bg-chip').forEach(e=>e.classList.remove('active'))
        this.classList.add('active')
        sv(SK.BG_PRE,p);sv(SK.BG_IMG,null);sv(SK.BG_VID,null)
        applyBg(p,null,null);toast('تم تغيير الخلفية')
      })
    })

    document.getElementById('bgUpload').addEventListener('change',function(e){
      const f=e.target.files[0];if(!f)return
      const r=new FileReader()
      r.onload=function(ev){
        const d=ev.target.result
        sv(SK.BG_IMG,d);sv(SK.BG_VID,null);sv(SK.BG_PRE,null)
        document.querySelectorAll('.bg-chip').forEach(e=>e.classList.remove('active'))
        applyBg(null,d,null);toast('تم تعيين الصورة')
      }
      r.readAsDataURL(f);this.value=''
    })

    document.getElementById('videoUpload').addEventListener('change',function(e){
      const f=e.target.files[0];if(!f)return
      if(f.size>50*1024*1024){toast('الفيديو كبير جداً (الحد 50MB)');this.value='';return}
      const r=new FileReader()
      r.onload=function(ev){
        const d=ev.target.result
        sv(SK.BG_VID,d);sv(SK.BG_IMG,null);sv(SK.BG_PRE,null)
        document.querySelectorAll('.bg-chip').forEach(e=>e.classList.remove('active'))
        applyBg(null,null,d);toast('تم تعيين الفيديو')
      }
      r.readAsDataURL(f);this.value=''
    })

    document.getElementById('bgReset').addEventListener('click',function(){
      sv(SK.BG_IMG,null);sv(SK.BG_VID,null);sv(SK.BG_PRE,'default')
      document.querySelectorAll('.bg-chip').forEach(e=>e.classList.toggle('active',e.dataset.bg==='default'))
      applyBg('default',null,null);toast('تمت إزالة الخلفية')
    })

    document.getElementById('locationSave').addEventListener('click',async function(){
      const c=document.getElementById('locationInput').value.trim()
      if(!c){toast('أدخل اسم المدينة');return}
      try{
        const r=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(c)}&count=1&language=ar&format=json`)
        const d=await r.json()
        if(d.results&&d.results.length){
          const o={lat:d.results[0].latitude,lon:d.results[0].longitude}
          sv(SK.LOC,o);fetchWthr(o.lat,o.lon)
          toast(`تم تعيين ${d.results[0].name}`)
          document.getElementById('locationInput').value=''
        }else{toast('لم يتم العثور على المدينة')}
      }catch{toast('خطأ في البحث')}
    })

    document.getElementById('detectLocation').addEventListener('click',function(){
      navigator.geolocation.getCurrentPosition(
        p=>{const o={lat:p.coords.latitude,lon:p.coords.longitude};sv(SK.LOC,o);fetchWthr(o.lat,o.lon);toast('تم الكشف عن موقعك')},
        ()=>toast('تعذر الوصول للموقع'),
        {timeout:5000}
      )
    })

    document.getElementById('addNoteBtn').addEventListener('click',addNote)
    document.getElementById('addTodoBtn').addEventListener('click',addTodo)
    document.getElementById('todoSubmit').addEventListener('click',addTodo)
    document.getElementById('todoInput').addEventListener('keydown',function(e){if(e.key==='Enter')addTodo()})
    document.getElementById('addLinkBtn').addEventListener('click',()=>openLinkModal())

    document.getElementById('linkModalClose').addEventListener('click',closeLinkModal)
    document.getElementById('linkModalWrap').addEventListener('click',function(e){if(e.target===this)closeLinkModal()})
    document.getElementById('linkSaveBtn').addEventListener('click',svLinkForm)
    document.getElementById('linkDeleteBtn').addEventListener('click',delLinkFromModal)

    document.querySelectorAll('.ico-opt').forEach(el=>{
      el.addEventListener('click',function(){
        document.querySelectorAll('.ico-opt').forEach(e=>e.classList.remove('selected'))
        this.classList.add('selected')
      })
    })
  })
})()
