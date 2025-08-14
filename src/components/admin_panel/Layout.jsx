import { useState } from 'react';
import Sidebar from './Sidebar';

// Import page components
import Dashboard from './dashboard/Dashboard';
import Leaderboard from './leaderboard/Leaderboard';
import Students from './Students';
import Analytics from './Analytics';
import Settings from './Settings';

const Layout = () => {
  const [activePage, setActivePage] = useState('dashboard');

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
      {/* Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      
      {/* Main content area */}
      <div className="flex-1 overflow-auto p-6">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Layout;