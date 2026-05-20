(function() {
  let originalFile = null
  let compressedFile = null

  const uploadZone = document.getElementById('uploadZone')
  const fileInput = document.getElementById('fileInput')
  const previewArea = document.getElementById('previewArea')
  const originalPreview = document.getElementById('originalPreview')
  const compressedPreview = document.getElementById('compressedPreview')
  const originalInfo = document.getElementById('originalInfo')
  const compressedInfo = document.getElementById('compressedInfo')
  const qualitySlider = document.getElementById('qualitySlider')
  const qualityValue = document.getElementById('qualityValue')
  const maxSizeSlider = document.getElementById('maxSizeSlider')
  const maxSizeValue = document.getElementById('maxSizeValue')
  const maxDimensionSlider = document.getElementById('maxDimensionSlider')
  const maxDimensionValue = document.getElementById('maxDimensionValue')
  const outputFormat = document.getElementById('outputFormat')
  const compressBtn = document.getElementById('compressBtn')
  const downloadBtn = document.getElementById('downloadBtn')
  const resetBtn = document.getElementById('resetBtn')
  const progressBar = document.getElementById('progressBar')
  const progressFill = document.getElementById('progressFill')
  const progressText = document.getElementById('progressText')

  qualitySlider.addEventListener('input', () => {
    qualityValue.textContent = Math.round(qualitySlider.value * 100) + '%'
  })

  maxSizeSlider.addEventListener('input', () => {
    maxSizeValue.textContent = maxSizeSlider.value + ' MB'
  })

  maxDimensionSlider.addEventListener('input', () => {
    maxDimensionValue.textContent = maxDimensionSlider.value
  })

  uploadZone.addEventListener('click', () => fileInput.click())

  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    uploadZone.classList.add('dragover')
  })

  uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover')
  })

  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault()
    uploadZone.classList.remove('dragover')
    const files = e.dataTransfer.files
    if (files.length > 0) handleFile(files[0])
  })

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) handleFile(fileInput.files[0])
  })

  function handleFile(file) {
    if (!file.type.startsWith('image/')) {
      showError('الملف المحدد ليس صورة')
      return
    }
    originalFile = file
    compressedFile = null
    const reader = new FileReader()
    reader.onload = (e) => {
      originalPreview.src = e.target.result
      originalInfo.textContent = formatSize(file.size)
      previewArea.style.display = 'block'
      uploadZone.style.display = 'none'
      compressBtn.disabled = false
      compressBtn.style.display = 'flex'
      downloadBtn.style.display = 'none'
      compressedPreview.src = ''
      compressedInfo.textContent = ''
    }
    reader.readAsDataURL(file)
  }

  compressBtn.addEventListener('click', compressImage)

  async function compressImage() {
    if (!originalFile) return
    compressBtn.disabled = true
    compressBtn.textContent = 'جاري الضغط ...'
    progressBar.style.display = 'flex'
    progressFill.style.width = '0%'
    progressText.textContent = 'بدء الضغط ...'

    try {
      const maxSizeMB = parseFloat(maxSizeSlider.value)
      const options = {
        maxSizeMB: maxSizeMB,
        maxWidthOrHeight: parseInt(maxDimensionSlider.value),
        initialQuality: parseFloat(qualitySlider.value),
        useWebWorker: false,
        fileType: outputFormat.value || undefined,
        onProgress: (p) => {
          progressFill.style.width = p + '%'
          if (p < 50) progressText.textContent = 'جاري المعالجة ...'
          else if (p < 80) progressText.textContent = 'جاري تحسين الجودة ...'
          else progressText.textContent = ' almost done!'
        }
      }

      if (outputFormat.value) options.fileType = outputFormat.value

      compressedFile = await imageCompression(originalFile, options)

      progressFill.style.width = '100%'
      progressText.textContent = 'اكتمل الضغط!'

      const compressedReader = new FileReader()
      compressedReader.onload = (e) => {
        compressedPreview.src = e.target.result
        const saved = originalFile.size - compressedFile.size
        const percent = ((saved / originalFile.size) * 100).toFixed(1)
        const savingsClass = saved > 0 ? 'savings' : ''
        compressedInfo.innerHTML = formatSize(compressedFile.size) + 
          (saved > 0 ? ` <span class="${savingsClass}">(-${percent}%)</span>` : '')
        downloadBtn.style.display = 'flex'
        compressBtn.disabled = false
        compressBtn.textContent = 'إعادة الضغط'
      }
      compressedReader.readAsDataURL(compressedFile)
    } catch (err) {
      showError('حدث خطأ: ' + err.message)
      compressBtn.disabled = false
      compressBtn.textContent = 'ضغط الصورة'
      progressBar.style.display = 'none'
    }
  }

  downloadBtn.addEventListener('click', () => {
    if (!compressedFile) return
    const a = document.createElement('a')
    a.href = URL.createObjectURL(compressedFile)
    const ext = compressedFile.type.split('/')[1] || 'jpg'
    const name = originalFile.name.replace(/\.[^.]+$/, '') + '_compressed.' + ext
    a.download = name
    a.click()
    URL.revokeObjectURL(a.href)
  })

  resetBtn.addEventListener('click', resetAll)

  function resetAll() {
    originalFile = null
    compressedFile = null
    fileInput.value = ''
    previewArea.style.display = 'none'
    uploadZone.style.display = 'block'
    compressBtn.disabled = true
    compressBtn.textContent = 'ضغط الصورة'
    compressBtn.style.display = 'flex'
    downloadBtn.style.display = 'none'
    progressBar.style.display = 'none'
    progressFill.style.width = '0%'
  }

  function formatSize(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    const val = (bytes / Math.pow(k, i)).toFixed(i > 0 ? 1 : 0)
    return val + ' ' + sizes[i]
  }

  function showError(msg) {
    const div = document.createElement('div')
    div.style.cssText = 'position:fixed;bottom:16px;left:16px;right:16px;background:rgba(239,68,68,0.9);color:#fff;padding:10px 14px;border-radius:8px;font-size:13px;font-weight:500;z-index:999;text-align:center;'
    div.textContent = msg
    document.body.appendChild(div)
    setTimeout(() => div.remove(), 3000)
  }
})()
