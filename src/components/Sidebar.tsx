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
  FileBadge,
} from "lucide-react";
import { Menu } from "lucide-react";
import { FaCertificate } from "react-icons/fa";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [sidebar, setSideBar] = useState(false);

  return (
    <>
      <div className="d-flex">
        <div
          className="sfondoEpicodeGrigio vh-100 sidebar-transition"
          style={{ width: sidebar ? 300 : 100 }}
        >
          <div className="w-100">
            <div className="p-4  d-flex align-items-start flex-column">
              <div className="d-flex align-items-center">
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
              <div className=" mt-4 my-1 d-flex justify-content-center">
                <div className="d-flex align-items-center">
                  <Button variant="" className="text-white">
                    <LayoutDashboard />
                  </Button>
                  {sidebar && (
                    <h6 className="text-white align-content-center mb-0">
                      Dashboard
                    </h6>
                  )}
                </div>
              </div>
              <div className="w-100 iconHover d-flex justify-content-start">
                <div className="  my-1 d-flex justify-content-center  ">
                  <div className="d-flex align-items-center ">
                    <Button variant="" className="text-white">
                      <i className="bi bi-mortarboard fs-4"></i>
                    </Button>
                    {sidebar && (
                      <h6 className="text-white align-content-center mb-0">
                        Corsi
                      </h6>
                    )}
                  </div>
                </div>
              </div>
              <div className="  my-1 d-flex justify-content-center">
                <div className="d-flex align-items-center">
                  <Button variant="" className="text-white">
                    <CalendarDays />
                  </Button>
                  {sidebar && (
                    <h6 className="text-white align-content-center mb-0">
                      Calendario
                    </h6>
                  )}
                </div>
              </div>
              <div className="  my-1 d-flex justify-content-center">
                <div className="d-flex align-items-center">
                  <Button variant="" className="text-white">
                    <PlayCircle />
                  </Button>
                  {sidebar && (
                    <h6 className="text-white align-content-center mb-0">
                      Registrazioni
                    </h6>
                  )}
                </div>
              </div>
              <div className="  my-1 d-flex justify-content-center">
                <div className="d-flex align-items-center">
                  <Button variant="" className="text-white">
                    <FileBadge />
                  </Button>
                  {sidebar && (
                    <h6 className="text-white align-content-center mb-0">
                      Certificati
                    </h6>
                  )}
                </div>
              </div>
              <div className="  my-1 d-flex justify-content-center">
                <div className="d-flex align-items-center">
                  <Button variant="" className="text-white">
                    <Clock />
                  </Button>
                  {sidebar && (
                    <h6 className="text-white align-content-center mb-0">
                      Presenze
                    </h6>
                  )}
                </div>
              </div>
              <div className="  my-1 d-flex justify-content-center">
                <div className="d-flex align-items-center">
                  <Button variant="" className="text-white">
                    <i className="bi bi-calendar-heart fs-4"></i>
                  </Button>
                  {sidebar && (
                    <h6 className="text-white align-content-center mb-0">
                      Eventi
                    </h6>
                  )}
                </div>
              </div>
              <div className="  my-1 d-flex justify-content-center">
                <div className="d-flex align-items-center">
                  <Button variant="" className="text-white">
                    <HelpCircle />
                  </Button>
                  {sidebar && (
                    <h6 className="text-white align-content-center mb-0">
                      Domande Frequenti
                    </h6>
                  )}
                </div>
              </div>
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
