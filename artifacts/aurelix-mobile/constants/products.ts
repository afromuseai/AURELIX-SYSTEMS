import type { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";

export type IoniconsName = ComponentProps<typeof Ionicons>["name"];

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  accentColor: string;
  icon: IoniconsName;
  category: string;
  status: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "afromuse",
    name: "AfroMuse AI",
    tagline: "AI-Powered Creative Intelligence",
    description:
      "A revolutionary music production platform that transforms ideas into complete songs. Generate lyrics, create song blueprints with AI-powered arrangement maps, and produce full audio tracks — all within a single creative environment.",
    features: [
      "Intelligent Lyric Studio",
      "AI Song Blueprint Engine",
      "Autonomous Audio Production",
      "Multi-genre Style Adaptation",
      "Real-time Creative Collaboration",
    ],
    accentColor: "#C9921A",
    icon: "musical-notes",
    category: "Creative Intelligence",
    status: "Early Access",
  },
  {
    id: "gtpro",
    name: "GTPro",
    tagline: "Global Trade Intelligence",
    description:
      "Institutional-grade financial market intelligence for the modern trader. Deploy autonomous bot fleets, access AI-driven trading strategies, and execute real-time market operations with precision and confidence.",
    features: [
      "Autonomous Bot Fleets",
      "AI Strategy Engine",
      "Real-time Market Signals",
      "Portfolio Intelligence",
      "Risk Analytics Dashboard",
    ],
    accentColor: "#10b981",
    icon: "trending-up",
    category: "Financial Intelligence",
    status: "Beta",
  },
  {
    id: "stageone",
    name: "StageOne",
    tagline: "Business Infrastructure Intelligence",
    description:
      "Scale your startup from concept to enterprise with AI-powered business infrastructure. Automate operations, generate web presence, and architect growth systems that adapt as you evolve.",
    features: [
      "Instant Website Generation",
      "Automation Architecture",
      "Growth Intelligence Systems",
      "Operations Automation",
      "Startup Scaling Engine",
    ],
    accentColor: "#8b5cf6",
    icon: "rocket",
    category: "Business Intelligence",
    status: "Coming Soon",
  },
  {
    id: "cyber",
    name: "AURELIX Cyber",
    tagline: "Autonomous Security Intelligence",
    description:
      "Next-generation cybersecurity powered by autonomous AI agents. Detect threats before they materialize, defend your digital perimeter, and maintain continuous protection across your entire infrastructure.",
    features: [
      "Autonomous Threat Detection",
      "Real-time Digital Defense",
      "Perimeter Intelligence",
      "Incident Response AI",
      "Continuous Protection Monitoring",
    ],
    accentColor: "#6366f1",
    icon: "shield-checkmark",
    category: "Cyber Intelligence",
    status: "Coming Soon",
  },
];
