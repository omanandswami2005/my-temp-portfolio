import { Github, Mail, Linkedin , Youtube} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: 'https://github.com/omanandswami2005',
    label: 'GitHub',
  },
  {
    icon: Mail,
    href: 'mailto:omanandswami2005@gmail.com',
    label: 'Email',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/omanandswami2005',
    label: 'Linkedin',
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/@omanandswami2005',
    label: 'Youtube',

  }
]; 