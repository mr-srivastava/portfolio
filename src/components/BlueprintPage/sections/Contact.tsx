import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { ContactInfoData } from "../../../app/blueprint/types";

interface ContactProps {
  data: ContactInfoData;
}

export default function Contact({ data }: ContactProps) {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border border-blueprint-primary/30 rounded-lg px-4 py-2 mb-6">
            <Send className="w-4 h-4 text-blueprint-primary animate-pulse" />
            <span className="text-sm font-mono font-medium text-blueprint-primary">
              COMMUNICATION.PROTOCOL
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blueprint-primary to-blueprint-secondary bg-clip-text text-transparent">
              CONTACT
            </span>
          </h2>
          <p className="text-xl text-blueprint-muted font-mono font-medium">
            Initialize Connection Request
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-blueprint-grid bg-secondary/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-mono font-bold text-blueprint-primary">
                SEND_MESSAGE.FORM
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-mono font-semibold text-blueprint-primary">
                    NAME:
                  </label>
                  <Input
                    placeholder="John Doe"
                    className="font-mono font-medium bg-background/50 border-blueprint-grid focus:border-blueprint-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono font-semibold text-blueprint-primary">
                    EMAIL:
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="font-mono font-medium bg-background/50 border-blueprint-grid focus:border-blueprint-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono font-semibold text-blueprint-primary">
                  SUBJECT:
                </label>
                <Input
                  placeholder="Project Collaboration"
                  className="font-mono font-medium bg-background/50 border-blueprint-grid focus:border-blueprint-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono font-semibold text-blueprint-primary">
                  MESSAGE:
                </label>
                <Textarea
                  placeholder="Let's discuss your project requirements..."
                  rows={6}
                  className="font-mono font-medium bg-background/50 border-blueprint-grid focus:border-blueprint-primary resize-none"
                />
              </div>

              <Button className="w-full font-mono font-semibold bg-blueprint-primary hover:bg-blueprint-secondary transition-colors">
                TRANSMIT_MESSAGE.EXE
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-blueprint-grid bg-secondary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-mono font-bold text-blueprint-primary">
                  CONTACT_INFO.DATA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 font-mono text-sm font-medium">
                  <Mail className="w-5 h-5 text-blueprint-primary" />
                  <span className="text-blueprint-primary">EMAIL:</span>
                  <span className="text-foreground">{data.email}</span>
                </div>
                <div className="flex items-center space-x-3 font-mono text-sm font-medium">
                  <Phone className="w-5 h-5 text-blueprint-primary" />
                  <span className="text-blueprint-primary">PHONE:</span>
                  <span className="text-foreground">{data.phone}</span>
                </div>
                <div className="flex items-center space-x-3 font-mono text-sm font-medium">
                  <MapPin className="w-5 h-5 text-blueprint-primary" />
                  <span className="text-blueprint-primary">LOCATION:</span>
                  <span className="text-foreground">{data.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-blueprint-grid bg-secondary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-mono font-bold text-blueprint-primary">
                  SOCIAL_NETWORKS.LINK
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {data.social.map((social) => {
                    const iconMap: Record<string, React.ComponentType<any>> = {
                      Github,
                      Linkedin,
                      Twitter,
                      Mail,
                    };
                    const IconComponent = iconMap[social.icon];

                    return (
                      <Button
                        key={social.platform}
                        variant="outline"
                        className="font-mono font-semibold border-blueprint-grid hover:border-blueprint-primary hover:bg-blueprint-primary/10 flex items-center justify-center space-x-2"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{social.platform}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Status */}
            <Card className="border-blueprint-primary/30 bg-blueprint-primary/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div
                    className={`w-3 h-3 rounded-full ${data.status.isAvailable ? "bg-status-online" : "bg-status-inactive"} animate-pulse`}
                  ></div>
                  <span className="font-mono font-semibold text-blueprint-primary">
                    STATUS:{" "}
                    {data.status.isAvailable ? "AVAILABLE" : "UNAVAILABLE"}
                  </span>
                </div>
                <p className="text-sm text-foreground font-mono font-medium">
                  {data.status.message} Response time:{" "}
                  {data.status.responseTime}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
