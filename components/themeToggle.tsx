import { useTheme } from 'next-themes'
import { css, styled } from 'stitches.config'

const toggleButton = css({
  borderRadius: '4px',
  background: 'transparent',
  width: '48px',
  height: '48px',
  border: '0',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'accent',
  },
})

export const ThemeToggle = ({ children }) => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }
  return (
    <button className={toggleButton()} onClick={toggleTheme}>
      {children}
    </button>
  )
}
