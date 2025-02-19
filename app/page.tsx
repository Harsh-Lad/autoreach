'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, BarChart2, Zap, Shield, Workflow, MessageSquareMore, Link as LinkIcon, ArrowRight, ChevronRight, Globe, Building2, Laptop, User, Bot, Mail, BrainCircuit } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <MessageSquareMore className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">AutoReach</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Solutions</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Documentation</Button>
              <Button size="lg" className="h-10">Start Free</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
          <div className="absolute h-full w-full bg-gradient-to-r from-background via-transparent to-background" />
          <div className="absolute h-full w-full bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4" variant="secondary">New: AI-Powered Analytics →</Badge>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100">
              Customer Support,
              <br />
              Reimagined with AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your customer interactions with AutoReach's intelligent platform that combines AI support agents with personalized marketing automation.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="h-12 px-6">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                No credit card required
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                14-day free trial
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Workflow</Badge>
            <h2 className="text-3xl font-bold mb-4">How AutoReach Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our AI-powered platform transforms customer interactions into seamless experiences
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              <WorkflowStep
                icon={<User className="h-8 w-8" />}
                title="Customer Inquiry"
                description="Customer sends a support request through any channel"
                step="1"
              />
              <WorkflowStep
                icon={<BrainCircuit className="h-8 w-8" />}
                title="AI Analysis"
                description="AutoReach analyzes the query and context"
                step="2"
              />
              <WorkflowStep
                icon={<Bot className="h-8 w-8" />}
                title="Automated Response"
                description="AI agent provides instant, accurate response"
                step="3"
              />
              <WorkflowStep
                icon={<Mail className="h-8 w-8" />}
                title="Follow-up"
                description="Automated personalized follow-up and feedback"
                step="4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for every team</h2>
            <p className="text-muted-foreground">Powerful features for every use case</p>
          </div>
          <Tabs defaultValue="support" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto mb-12">
              <TabsTrigger value="support">Support</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
            </TabsList>
            <TabsContent value="support" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <MetricCard
                  icon={<Globe className="h-8 w-8" />}
                  title="80%"
                  description="Queries Automated"
                />
                <MetricCard
                  icon={<Building2 className="h-8 w-8" />}
                  title="70%"
                  description="Faster Resolution Time"
                />
                <MetricCard
                  icon={<Laptop className="h-8 w-8" />}
                  title="95%"
                  description="Query Response Efficiency"
                />
              </div>
            </TabsContent>
            <TabsContent value="marketing" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <MetricCard
                  icon={<Globe className="h-8 w-8" />}
                  title="2.5x"
                  description="Campaign Performance"
                />
                <MetricCard
                  icon={<Building2 className="h-8 w-8" />}
                  title="60%"
                  description="Higher Engagement"
                />
                <MetricCard
                  icon={<Laptop className="h-8 w-8" />}
                  title="40%"
                  description="Cost Reduction"
                />
              </div>
            </TabsContent>
            <TabsContent value="sales" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <MetricCard
                  icon={<Globe className="h-8 w-8" />}
                  title="3x"
                  description="Lead Conversion"
                />
                <MetricCard
                  icon={<Building2 className="h-8 w-8" />}
                  title="50%"
                  description="Faster Deal Closure"
                />
                <MetricCard
                  icon={<Laptop className="h-8 w-8" />}
                  title="85%"
                  description="Follow-up Rate"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to automate your customer support and marketing efforts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
              title="Automated Quality Audits"
              description="Ensure complete oversight by automating quality checks across all interactions."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-primary" />}
              title="SOP Coverage"
              description="Seamlessly integrate data sources and SOPs to generate accurate responses and actions."
            />
            <FeatureCard
              icon={<MessageSquareMore className="h-8 w-8 text-primary" />}
              title="AI-Powered Support"
              description="Handle 80% of queries automatically, reducing customer frustration and repeat interactions."
            />
            <FeatureCard
              icon={<BarChart2 className="h-8 w-8 text-primary" />}
              title="Agent Co-Pilot"
              description="Improve compliance by 25%, ensuring agents follow best practices."
            />
            <FeatureCard
              icon={<Workflow className="h-8 w-8 text-primary" />}
              title="Optimized Workflows"
              description="Achieve 70% reduction in resolution time, enabling teams to focus on high-value queries."
            />
            <FeatureCard
              icon={<LinkIcon className="h-8 w-8 text-primary" />}
              title="Seamless Integration"
              description="Use AutoReach as a microservice for support on websites and backends."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Get Started</Badge>
          <h2 className="text-4xl font-bold mb-6">Ready to transform your customer experience?</h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join leading businesses using AutoReach to deliver exceptional customer support and marketing automation.
          </p>
          <Button size="lg" className="h-12 px-6">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg border-border/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function MetricCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function WorkflowStep({ icon, title, description, step }: { icon: React.ReactNode; title: string; description: string; step: string }) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium px-2 rounded">
        Step {step}
      </div>
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}