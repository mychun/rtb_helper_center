// 实现滚动效果
export function toScrollTop() {
  let top = document.documentElement.scrollTop || document.body.scrollTop
  const timeTop = setInterval(() => {
    document.body.scrollTop = document.documentElement.scrollTop = top -= 50
    if (top <= 0) {
      clearInterval(timeTop)
    }
  }, 1)
}
