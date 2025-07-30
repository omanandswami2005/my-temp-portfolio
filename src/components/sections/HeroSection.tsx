import { ChevronDown, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ShinyText from '@/components/ui/ShinyText';
import { useTheme } from '@/providers/theme-provider';
import { techTags } from '@/data/tech-tags';
import { heroContent } from '@/data/hero';
import { OptimizedImage } from '@/components/ui/optimized-image';

export function HeroSection() {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-[90vh] flex items-center relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-sm font-medium">Hello, I'm</span>
              </div>
              
              {theme === 'dark' ? (
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  <ShinyText text={heroContent.title} disabled={false} speed={3} className='custom-class' />
                </div>
              ) : (
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
                  {heroContent.title}
                </h1>
              )}

              <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                {heroContent.subtitle}
              </p>
              <p className="text-1xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                and More...
              </p>
            </div>

            <p className="text-lg text-muted-foreground/80 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              {techTags.map((tag) => (
                <span key={tag} className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative overflow-hidden px-8"
                >
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative overflow-hidden px-8"
                >
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Button>
              </div>
            </div>
          </div>

          {/* Right side avatar */}
          <div className="relative order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/10 to-transparent"></div>
              <OptimizedImage 
                src="/avatar1.png" 
                alt="Omiii" 
                width={320}
                height={320}
                priority={true}
                className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
              />
              {theme === 'dark' ? (
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/20 shadow-lg">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
              ) : (
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/20 shadow-lg">
                  <span className="text-4xl">😎</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
} 