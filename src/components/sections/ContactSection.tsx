import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { contactContent } from '@/data/contact';
import { socialLinks } from '@/data/social';
import { logEvent, EventCategories, EventActions } from '@/lib/analytics';


export function ContactSection() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const handleSocialClick = (platform: string, url: string) => {
    logEvent(
      EventCategories.SOCIAL,
      EventActions.CLICK,
      platform
    );
    window.open(url, '_blank');
  };


  return (
    <section id="contact" className="scroll-mt-16 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">{contactContent.title}</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          {contactContent.description}
        </p>
        
        <div className="grid md:grid-cols-1 gap-8">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <h3 className="text-2xl font-semibold">{contactContent.cards.cooperation.title}</h3>
              <p className="text-muted-foreground">
                {contactContent.cards.cooperation.description}
              </p>
              <Separator />
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                 
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={link.label}
                        variant="outline"
                        size="icon"
                        className="hover:scale-110 transition-transform hover:bg-primary hover:text-primary-foreground"
                        aria-label={link.label}
                        onClick={() => handleSocialClick(link.label, link.href)}
                      >
                        <Icon className="h-5 w-5" />
                      </Button>
                    );
                  })}
                </div>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
} 