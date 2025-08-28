import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      setIsMobile(false);
      return;
    }

    try {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      const onChange = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      };
      
      // Set initial value
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      
      // Add event listener
      mql.addEventListener("change", onChange);
      
      return () => mql.removeEventListener("change", onChange);
    } catch (error) {
      console.warn('Failed to setup mobile detection:', error);
      setIsMobile(false);
    }
  }, []);

  return !!isMobile;
}
