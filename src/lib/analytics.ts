import ReactGA from 'react-ga4';

// Initialize GA
export const initGA = () => {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (gaId) {
    ReactGA.initialize(gaId);
  }
};

// Log page view
export const logPageView = (path: string, title?: string) => {
  ReactGA.send({ 
    hitType: "pageview", 
    page: path,
    title: title
  });
};

// Log event
export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

// Predefined event categories
export const EventCategories = {
  NAVIGATION: 'Navigation',
  PROJECTS: 'Projects',
  SOCIAL: 'Social',
  CONTACT: 'Contact',
  THEME: 'Theme',
  // BLOG: 'Blog'
} as const;

// Predefined event actions
export const EventActions = {
  CLICK: 'Click',
  SUBMIT: 'Submit',
  TOGGLE: 'Toggle',
  VIEW: 'View',
  COPY: 'Copy'
} as const; 