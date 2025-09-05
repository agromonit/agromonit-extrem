import { SatelliteIcon } from "@/components/satellite-icon";
import almendroImage from "@assets/almendro.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with fixed positioning for branding and satellite icon */}
      <header className="fixed top-0 left-0 right-0 z-10 p-4 sm:p-6">
        <div className="flex justify-between items-start max-w-7xl mx-auto">
          {/* Upper left branding */}
          <div className="brand-text">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary" data-testid="text-brand-title">
              agromonit
            </h1>
            <div className="h-1 w-16 bg-primary rounded-full mt-1"></div>
          </div>
          
          {/* Upper right satellite display */}
          <div className="satellite-icon">
            <SatelliteIcon className="text-3xl sm:text-4xl text-primary drop-shadow-sm" data-testid="icon-satellite" />
          </div>
        </div>
      </header>
      
      {/* Central image display area */}
      <main className="flex items-center justify-center min-h-screen px-4 sm:px-6 pt-20 pb-8">
        <div className="max-w-4xl w-full">
          {/* Main image display with almendro content */}
          <div className="image-container rounded-xl overflow-hidden relative">
            <img 
              src={almendroImage}
              alt="Almendro agricultural monitoring view"
              className="w-full h-auto object-cover"
              loading="eager"
              data-testid="img-almendro-main"
            />
            
            {/* Optional data overlay for agricultural information */}
            <div className="p-4 sm:p-6 bg-gradient-to-t from-black/20 to-transparent absolute bottom-0 left-0 right-0">
              <div className="text-white">
                <p className="text-sm sm:text-base font-medium" data-testid="text-system-title">
                  Agricultural Monitoring System
                </p>
                <p className="text-xs sm:text-sm opacity-90 mt-1" data-testid="text-system-description">
                  Real-time satellite monitoring for precision agriculture
                </p>
              </div>
            </div>
          </div>
          
          {/* System status or connection info */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" data-testid="indicator-connection-status"></div>
            <span className="text-sm text-muted-foreground" data-testid="text-connection-status">
              Connected to Agromonit Network
            </span>
          </div>
        </div>
      </main>
      
      {/* Minimal footer for mobile optimization */}
      <footer className="fixed bottom-0 left-0 right-0 p-3 bg-background/80 backdrop-blur-sm border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-muted-foreground" data-testid="text-footer-url">
            www.agromonit-extrem.com | Agricultural Monitoring Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
