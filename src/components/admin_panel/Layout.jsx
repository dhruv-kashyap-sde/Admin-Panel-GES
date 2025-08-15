import { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

// Import page components
import Dashboard from './dashboard/Dashboard';
import Leaderboard from './leaderboard/Leaderboard';
import Students from './Students';
import Analytics from './Analytics';
import Settings from './Settings';

const Layout = () => {
  const [activePage, setActivePage] = useState('leaderboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Function to handle page changes from mobile sidebar
  const handlePageChange = (page) => {
    setActivePage(page);
    setIsMobileOpen(false);
  };

  // Render active component based on selected page
  const renderComponent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'students':
        return <Students />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar - hidden on small screens */}
      <div className="hidden md:block">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
      </div>
      
      {/* Main content area with mobile header */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header with hamburger */}
        <div className="md:hidden flex items-center p-4 border-b">
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <Sidebar activePage={activePage} setActivePage={handlePageChange} isMobile={true} />
            </SheetContent>
          </Sheet>
          
          <div className="flex items-center space-x-2">
            <div className="rounded-lg bg-gradient p-1">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
            <div>
              <h1 className="text-gradient text-lg font-bold">SpeakGenie</h1>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Layout;