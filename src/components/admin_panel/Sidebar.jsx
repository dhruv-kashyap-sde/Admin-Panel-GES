import { Home, Users, BarChart2, Settings, LogOut, Trophy, X, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { SheetClose } from "../ui/sheet";

const Sidebar = ({ activePage, setActivePage, isMobile = false }) => {
  // Navigation items with icons and labels
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="h-5 w-5" /> },
    { id: 'leaderboard', label: 'Leaderboard', icon: <Trophy className="h-5 w-5" /> },
    { id: 'students', label: 'Students', icon: <Users className="h-5 w-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart2 className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div className="h-full w-56 lg:w-64 bg-white border-r flex flex-col">
      {/* Logo and header */}
      <div className="p-4 flex items-center space-x-3">
        {isMobile && (
          <SheetClose asChild>
            {/* <Button variant="ghost" size="icon" className="absolute right-4 top-4">
            </Button> */}
          </SheetClose>
        )}
        <div className="rounded-lg bg-gradient p-2">
          <Sparkles />
        </div>
        <div>
          <h1 className="text-gradient font-bold">SpeakGenie</h1>
          <p className="text-xs text-gray-500">Admin Panel</p>
        </div>
      </div>

      <Separator />
      {/* Navigation links */}
      <nav className="mt-5 flex-1">
        <ul className="space-y-1 px-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <Button
                variant={activePage === item.id ? "default" : "ghost"}
                className={`w-full justify-start ${
                  activePage === item.id 
                    ? "bg-gradient hover:bg-[#0D47A1]/90" 
                    : "text-gray-700"
                }`}
                onClick={() => setActivePage(item.id)}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User info at bottom */}
      <div className="p-4 mt-auto">
        <Separator className="my-4" />
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-md bg-gradient flex items-center justify-center text-white">
            S
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">School Admin</p>
            <p className="text-xs text-gradient truncate">Greenwood Elementary</p>
          </div>
          {!isMobile ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <LogOut className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Logout</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button variant="ghost" size="icon" className="text-gray-500">
              <LogOut className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;