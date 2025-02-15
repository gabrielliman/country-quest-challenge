
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button variant="outline" size="icon" className="ml-auto">
      {theme === 'light' ? (
        <Sun
          onClick={() => setTheme("dark")}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
        />
      ) : (
        <Moon
          onClick={() => setTheme("light")}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
