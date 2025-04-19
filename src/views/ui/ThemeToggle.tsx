import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative h-9 w-9 text-white hover:bg-white/10"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      >
        <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 20c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      >
        <path d="M14.5 3.5c-6.5 1.9-10.5 8.3-9.7 15 .8 6.7 6.2 11.9 12.9 12.4 4.9.4 9.5-1.6 12.3-5.3.6-.7.1-1.8-.8-1.7-.7.1-1.5.1-2.2.1-7.2 0-13-5.8-13-13 0-2.6.7-5 2-7 .6-1 0-2.3-1.2-1.9-.1.1-.2.2-.3.4z"/>
      </svg>
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
} 