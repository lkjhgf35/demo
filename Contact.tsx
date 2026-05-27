import PageLayout from "@/components/site/PageLayout";
import PageHeader from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <PageLayout>
    <PageHeader
      eyebrow="Get in Touch"
      title="We'd love to hear from you"
      subtitle="Questions, prayer requests, or just want to say hi — we read every message."
    />
    <section className="container py-20 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">Reach out</h2>
        <ul className="space-y-5">
          <li className="flex gap-3"><MapPin className="text-accent shrink-0 mt-1" /><span className="text-foreground/80">2840 Birchwood Parkway<br />Cedar Falls, IA 50613</span></li>
          <li className="flex gap-3"><Mail className="text-accent shrink-0 mt-1" /><a href="mailto:hello@riverstonechurch.org" className="text-foreground/80 hover:text-primary">hello@riverstonechurch.org</a></li>
          <li className="flex gap-3"><Phone className="text-accent shrink-0 mt-1" /><a href="tel:+13195550148" className="text-foreground/80 hover:text-primary">(319) 555-0148</a></li>
        </ul>
        <div className="mt-8 p-6 bg-muted rounded-lg">
          <h3 className="font-bold text-primary mb-2">Office Hours</h3>
          <p className="text-foreground/70 text-sm">Tuesday – Friday, 9:00 AM – 4:00 PM</p>
        </div>
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" rows={6} placeholder="How can we help?" />
        </div>
        <Button variant="brand" type="submit" className="w-full">Send Message</Button>
      </form>
    </section>
  </PageLayout>
);

export default Contact;
