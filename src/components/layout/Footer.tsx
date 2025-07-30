import { Separator } from '@/components/ui/separator';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 h-12 md:h-12 flex items-center justify-between text-sm text-muted-foreground mb-16 md:mb-0">
        <span>© 2025 Designed By Omiii</span>
        <div className="flex items-center gap-4">
          <Separator orientation="vertical" className="h-4" />
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="h-8 w-8 p-0"
          >
            <ArrowUp className="h-4 w-4 bg-white text-black" />
          </Button>
        </div>
      </div>
    </footer>
  );
} 