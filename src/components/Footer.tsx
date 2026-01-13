import { Shield, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        {/* Privacy Notice */}
        <div className="flex items-center justify-center gap-2 mb-8 p-4 rounded-xl bg-muted/50 max-w-xl mx-auto">
          <Shield className="w-5 h-5 text-accent shrink-0" />
          <p className="text-sm text-muted-foreground text-center">
            Chats are temporary. No messages are stored. Your privacy is our priority.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-accent" />
            <span className="font-semibold text-foreground">ChatAnyone</span>
          </div>

          {/* Links */}
          
          
          {/* Copyright */}
          {/* Copyright + Developer */}
          <div className="flex items-start gap-2 text-sm justify-end text-muted-foreground">
            <span>© {new Date().getFullYear()} ChatAnyone</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="#"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors group"
            >

              <span className="group-hover:none">
                Developed by <span className="font-medium">RAY_theDeveloper & Acromat</span>
              </span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}