import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

interface CourseLayoutProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  children: ReactNode;
}

export function CourseLayout({ title, subtitle, icon: Icon, children }: CourseLayoutProps) {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{title}</h1>
              <p className="text-lg text-muted-foreground">{subtitle}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
