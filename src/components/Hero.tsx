import { Shield, Clock, Paperclip, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  onCreateRoom: () => void;
  onJoinRoom: () => void;
}

const features = [
  { icon: Shield, label: "Anonymous", description: "No login required" },
  { icon: Clock, label: "Temporary", description: "Messages disappear" },
  { icon: Paperclip, label: "File Sharing", description: "Share securely" },
];

export function Hero({ onCreateRoom, onJoinRoom }: HeroProps) {
  return (
    <section className="relative  overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
            <MessageCircle className="w-8 h-8 text-accent" />
          </div>
          <span className="text-2xl font-bold text-foreground">ChatAnyone</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
          Private Chat with Anyone
          <span className="block text-accent mt-2">Using a Unique ID</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          No login. No database. Messages disappear when you leave.
          <br className="hidden sm:block" />
          Start a private conversation in seconds.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="xl" onClick={onCreateRoom}>
            Create New Chat ID
          </Button>
          <Button variant="hero-outline" size="xl" onClick={onJoinRoom}>
            Join Existing Chat
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:bg-card/80 hover:border-accent/30 hover:shadow-lg"
            >
              <div className="p-3 rounded-lg bg-accent/10 mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{feature.label}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero FAQ */}
      <div className="relative z-10 mt-20 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-center text-foreground mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 text-left">
              <div>
                <h3 className="font-semibold text-foreground">
                  Is ChatAnyone really anonymous?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Yes. We don’t require accounts, emails, or usernames. Chats are temporary and disappear once you leave the room.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">
                  How does a chat room work?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A unique Chat ID is generated. Anyone with that ID can join the same
                  private room instantly chat in real time.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">
                  Are messages or files stored anywhere?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  No. Messages and shared files are never saved to a database and exist
                  only during the session.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">
                  Can I share files securely?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                 Yes. You can share images and files securely inside a room. File size is limited for safety and performance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">
                  Do I need to sign up or install anything?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  No signup, no installation. Just open the site and start chatting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}