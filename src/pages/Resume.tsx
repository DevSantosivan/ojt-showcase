import { FileDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resume() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight">Resume</h1>
      <div className="card-clean rounded-lg border border-border bg-card p-6 text-center space-y-4">
        <div className="w-full aspect-[8.5/11] bg-muted rounded-md flex items-center justify-center">
          <p className="text-muted-foreground text-sm">Resume image preview</p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button size="sm" className="gap-2">
            <FileDown className="h-4 w-4" />
            Download Resume
          </Button>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.location.href = "mailto:ivan.santos@email.com"}>
            <Mail className="h-4 w-4" />
            Email Me
          </Button>
        </div>
      </div>
    </div>
  );
}
