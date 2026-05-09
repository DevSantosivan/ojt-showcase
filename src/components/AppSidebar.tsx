import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Images,
  FileText,
  BookOpen,
  Paperclip,
  ExternalLink,
  Mail,
  Github,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";

/* =========================
   📄 RESUME IMPORT (ASSETS)
   ========================= */
import resumeImg from "@/assets/resume.png";

interface MenuItem {
  title: string;
  url?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: MenuItem[];
  external?: boolean;
  download?: boolean; // 👈 added
}

const menuStructure: { label: string; items: MenuItem[] }[] = [
  {
    label: "General",
    items: [
      { title: "Quick Overview", url: "/dashboard", icon: LayoutDashboard },
      { title: "Showcase", url: "/showcase", icon: Images },
    ],
  },
  {
    label: "Portfolio",
    items: [
      {
        title: "Contents",
        icon: FileText,
        children: [
          { title: "Title Page", url: "/contents/title-page" },
          { title: "Acknowledgement", url: "/contents/acknowledgement" },
          { title: "Student Trainee Prayer", url: "/contents/trainee-prayer" },
          {
            title: "Personal Philosophy",
            url: "/contents/personal-philosophy",
          },
          { title: "Career Plan", url: "/contents/career-plan" },
        ],
      },
      {
        title: "Chapters",
        icon: BookOpen,
        children: [
          { title: "Chapter 1", url: "/chapters/1" },
          { title: "Chapter 2", url: "/chapters/2" },
          { title: "Chapter 3", url: "/chapters/3" },
          { title: "Chapter 4", url: "/chapters/4" },
        ],
      },
      {
        title: "Appendices",
        icon: Paperclip,
        children: [
          { title: "Appendix A", url: "/appendices/a" },
          { title: "Appendix B", url: "/appendices/b" },
          { title: "Appendix C", url: "/appendices/c" },
          { title: "Appendix D", url: "/appendices/d" },
          { title: "Appendix E", url: "/appendices/e" },
          { title: "Appendix F", url: "/appendices/f" },
          { title: "Appendix G", url: "/appendices/g" },
          { title: "Appendix H", url: "/appendices/h" },
          { title: "Appendix I", url: "/appendices/i" },
          { title: "Appendix J", url: "/appendices/j" },
          { title: "Appendix K", url: "/appendices/k" },
          { title: "Appendix L", url: "/appendices/l" },
          { title: "Appendix M", url: "/appendices/m" },
          { title: "Appendix N", url: "/appendices/n" },
          { title: "Appendix O", url: "/appendices/o" },
          { title: "Appendix P", url: "/appendices/p" },
          { title: "Appendix Q", url: "/appendices/q" },
        ],
      },
    ],
  },
  {
    label: "Links",
    items: [
      {
        title: "Resume",
        icon: ExternalLink,
        download: true, // 👈 IMPORTANT
      },
      {
        title: "Email Me",
        url: "mailto:ivansantos.bsit@gmail.com",
        icon: Mail,
        external: true,
      },
      {
        title: "GitHub",
        url: "https://github.com/DevSantosivan",
        icon: Github,
        external: true,
      },
    ],
  },
];

function CollapsibleMenu({
  item,
  currentPath,
}: {
  item: MenuItem;
  currentPath: string;
}) {
  const isChildActive =
    item.children?.some((c) => c.url === currentPath) ?? false;
  const [open, setOpen] = useState(isChildActive);
  const navigate = useNavigate();

  return (
    <div>
      <SidebarMenuButton
        onClick={() => setOpen(!open)}
        className={cn(
          "w-full justify-between pr-2 hover:bg-accent/60",
          isChildActive && "text-primary font-medium",
        )}
      >
        <span className="flex items-center gap-2">
          {item.icon && <item.icon className="h-4 w-4" />}
          <span className="text-sm">{item.title}</span>
        </span>
        {open ? (
          <ChevronDown className="h-3.5 w-3.5" />
        ) : (
          <ChevronRight className="h-3.5 w-3.5" />
        )}
      </SidebarMenuButton>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="ml-4 border-l border-border pl-2 mt-0.5 space-y-0.5">
          {item.children?.map((child) => (
            <button
              key={child.title}
              onClick={() => navigate(child.url!)}
              className={cn(
                "block w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors",
                currentPath === child.url
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
              )}
            >
              {child.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  /* =========================
     📥 RESUME DOWNLOAD HANDLER
     ========================= */
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumeImg; // from assets
    link.download = "Ivan-Santos-Resume.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-base font-semibold tracking-tight">
            OJT Portfolio
          </h2>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {menuStructure.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-[11px] uppercase tracking-wider text-muted-foreground/70 font-medium px-2 mb-1">
              {group.label}
            </SidebarGroupLabel>

            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.children ? (
                    <CollapsibleMenu item={item} currentPath={currentPath} />
                  ) : item.external ? (
                    <SidebarMenuButton asChild className="hover:bg-accent/60">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {item.icon && <item.icon className="h-4 w-4" />}
                        <span className="text-sm">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  ) : item.download ? (
                    <SidebarMenuButton
                      onClick={handleResumeDownload}
                      className="hover:bg-accent/60"
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      <span className="text-sm">{item.title}</span>
                    </SidebarMenuButton>
                  ) : (
                    <SidebarMenuButton
                      onClick={() => navigate(item.url!)}
                      className={cn(
                        "hover:bg-accent/60",
                        currentPath === item.url &&
                          "bg-primary/10 text-primary font-medium",
                      )}
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      <span className="text-sm">{item.title}</span>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 pt-2">
        <p className="text-[11px] text-muted-foreground">© 2025 Ivan Santos</p>
      </SidebarFooter>
    </Sidebar>
  );
}
