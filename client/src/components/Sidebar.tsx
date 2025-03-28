import { useLocation } from "wouter";

const Sidebar = () => {
  const [location, navigate] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Harvard Crimson Red color
  const harvardCrimson = "#A51C30";

  return (
    <aside
      className="w-64 bg-sidebar text-sidebar-foreground flex flex-col h-full shrink-0"
      style={{ backgroundColor: harvardCrimson }}
    >
      <div className="p-6">
        <h1 className="text-xl font-semibold mb-1 text-white">HGSE Ed</h1>
        <h2 className="text-xl text-white">Policy Advisor</h2>
      </div>

      <div className="px-4 py-2">
        <h3 className="text-sm uppercase tracking-wider text-gray-300 font-medium mb-2">
          Magic Tools
        </h3>
        <ul>
          <li>
            <div
              className={`sidebar-tool ${isActive("/logic-framework") ? "active" : ""} cursor-pointer`}
              onClick={() => handleNavigation("/logic-framework")}
            >
              <span className="mr-2 text-white">•</span>
              <span className="text-white">Logic Framework Generator</span>
            </div>
          </li>
          <li>
            <div
              className={`sidebar-tool ${isActive("/swot-analysis") ? "active" : ""} cursor-pointer`}
              onClick={() => handleNavigation("/swot-analysis")}
            >
              <span className="mr-2 text-white">•</span>
              <span className="text-white">SWOT Analysis</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-auto p-4 text-sm text-gray-300">
        <p>© 2025 Harvard Graduate School of Education</p>
      </div>
    </aside>
  );
};

export default Sidebar;
