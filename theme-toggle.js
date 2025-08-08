const toggleBtn = document.getElementById("theme-toggle");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const savedTheme = localStorage.getItem("theme");

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  lightIcon.style.display = isDark ? "none" : "inline";  // 在暗黑模式下隐藏 light 图标
  darkIcon.style.display = isDark ? "inline" : "none";   // 在亮模式下隐藏 dark 图标
}

// 初次加载时根据存储的主题或者系统默认主题判断
if (savedTheme === "dark" || (!savedTheme && prefersDark.matches)) {
  applyTheme(true);
}

toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  applyTheme(isDark);
});
