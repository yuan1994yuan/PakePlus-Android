window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// 安卓系统文件路径兼容，修复OCR读取本地字库
window.TesseractConfig = {
  langPath: "lib/tesseract/",
  workerPath: "lib/worker.min.js",
  corePath: "lib/tesseract-core-simd.wasm.js"
};
// 修复PDF打印新窗口
window.open = function(url){
    return window.pake.newWindow(url);
}