import { Button } from "react-bootstrap";
import {
  LayoutDashboard,
  Calendar,
  Book,
  PlayCircle,
  FileText,
  Clock,
  HelpCircle,
  CalendarDays,
  PanelLeft,
} from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [sidebar, setSideBar] = useState(false);
  return (
    <>
      <div className="d-flex">
        <div
          className="sfondoEpicodeGrigio vh-100"
          style={{ width: sidebar ? 300 : 100 }}
        >
          <div className="w-100">
            <div className="p-4  d-flex align-items-center">
              <img
                src="src/assets/img/logo.png"
                alt="Logo"
                width={55}
                height={55}
              />
              {sidebar && (
                <span className="fs-3 fontEpicodeLogo text-white ">
                  EPICODE
                </span>
              )}
            </div>
          </div>
        </div>
        <div>
          <Button
            variant=""
            className="text-white"
            onClick={() => {
              {
                sidebar ? setSideBar(false) : setSideBar(true);
              }
            }}
          >
            <PanelLeft />
          </Button>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
