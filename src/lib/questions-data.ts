import {
  AlertTriangle,
  Archive,
  BarChart,
  Bell,
  BookOpen,
  Building2,
  Cable,
  CheckCircle,
  Clock,
  Code,
  FileText,
  Fingerprint,
  Flame,
  GitBranch,
  Key,
  KeyRound,
  Lock,
  Network,
  Shield,
  ShieldCheck,
  ShieldQuestion,
  Smartphone,
  Terminal,
  Users,
  Video,
  Activity,
  UserX,
  FileCheck,
  LucideIcon,
  Monitor,
  HardDrive,
  Share2,
  Zap,
  Wifi,
  Wrench,
  Trash2,
  UserCheck,
  Cloud
} from "lucide-react";

export interface SubQuestion {
  id: string;
  text: string;
  placeholder: string;
  unit: string;
  defaultValue?: number | string;
  min?: number;
  max?: number;
}

export interface Recommendation {
  id: string;
  tier: "open-source" | "standard" | "premium";
  name: string;
  shortDescription: string;
  description: string;
  pros: string[];
  cons: string[];
  pricing: string;
  pricingModel: string;
  officialWebsite: string;
  pricingPage: string;
  setupTime: string;
  recommendedTimeline: string;
  requiredResources: string;
  organizationSize: string;
  effortHours: string;
  priority: "High" | "Medium" | "Low";
  estimatedCostRange: string;
  perUnitCost?: {
    amount: number;
    unit: string;
    period: "monthly" | "yearly" | "one-time";
  };
  icon?: LucideIcon;
  calculateEffort?: (subQuestionValue: number) => string;
  calculateTimeline?: (subQuestionValue: number) => string;
  calculateCost?: (subQuestionValue: number) => string;
}

export interface Question {
  id: number;
  category: string;
  text: string;
  description?: string;
  helpText?: string;
  icon: LucideIcon;
  recommendations: Recommendation[];
  subQuestion?: SubQuestion;
}

export const questions: Question[] = [
  {
    id: 1,
    category: "Threat Intelligence",
    text: "Do you receive a threat intelligence feed regarding the technology stack of your application to remain up to date with the latest threats?",
    description: "Threat intelligence helps organizations stay informed about potential security threats and vulnerabilities.",
    helpText: "This includes having proper threat intelligence feeds and monitoring systems in place.",
    icon: ShieldCheck,
    subQuestion: {
      id: "threat-feed",
      text: "Are you interested in integrating a threat intelligence service to monitor and respond to emerging threats relevant to your technology stack?",
      placeholder: "Enter number of threats",
      unit: "threats",
      defaultValue: 10,
      min: 1,
      max: 100
    },
    recommendations: [
      {
        id: "otx",
        tier: "open-source",
        name: "Open Threat Exchange (OTX)",
        shortDescription: "Free threat intelligence platform",
        description: "Open Threat Exchange (OTX) is a free threat intelligence platform that provides access to threat data and enables collaboration between security researchers.",
        pros: [
          "Free to use",
          "Large community of security researchers",
          "Regular updates",
          "API access available"
        ],
        cons: [
          "Limited advanced features",
          "May require technical expertise",
          "Community-driven support"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://otx.alienvault.com",
        pricingPage: "https://otx.alienvault.com",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: ShieldCheck
      },
      {
        id: "recorded-future",
        tier: "standard",
        name: "Recorded Future",
        shortDescription: "Enterprise threat intelligence platform",
        description: "Recorded Future provides real-time threat intelligence and risk management solutions for enterprises.",
        pros: [
          "Comprehensive threat data",
          "Real-time monitoring",
          "Advanced analytics",
          "Professional support"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Requires dedicated resources"
        ],
        pricing: "₹36,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.recordedfuture.com",
        pricingPage: "https://www.recordedfuture.com/pricing",
        setupTime: "1 week",
        recommendedTimeline: "1 week",
        requiredResources: "Security team",
        organizationSize: "Medium to large",
        effortHours: "20-40",
        priority: "High",
        estimatedCostRange: "₹3,000,000/year",
        perUnitCost: {
          amount: 3000000,
          unit: "year",
          period: "yearly"
        },
        icon: ShieldCheck
      },
      {
        id: "fireeye",
        tier: "premium",
        name: "FireEye Threat Intelligence",
        shortDescription: "Advanced threat intelligence and response",
        description: "FireEye provides comprehensive threat intelligence and advanced threat detection capabilities.",
        pros: [
          "Advanced threat detection",
          "24/7 support",
          "Custom intelligence feeds",
          "Integration with other security tools"
        ],
        cons: [
          "High cost",
          "Complex implementation",
          "Requires significant resources"
        ],
        pricing: "Starting at ₹100,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.fireeye.com",
        pricingPage: "https://www.fireeye.com/products/threat-intelligence.html",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Dedicated security team",
        organizationSize: "Large enterprises",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹8,300,000/year",
        perUnitCost: {
          amount: 8300000,
          unit: "year",
          period: "yearly"
        },
        icon: ShieldCheck
      }
    ]
  },
  {
    id: 2,
    category: "Asset Management",
    text: "Is there an inventory management platform deployed to track the entire lifecycle of IT assets from procurement to destruction?",
    description: "Asset management helps track and manage IT resources throughout their lifecycle.",
    helpText: "This includes having proper asset tracking and management systems.",
    icon: Archive,
    subQuestion: {
      id: "asset-count",
      text: "How many IT assets does your organization manage?",
      placeholder: "Enter number of assets",
      unit: "assets",
      defaultValue: 100,
      min: 1,
      max: 10000
    },
    recommendations: [
      {
        id: "snipe-it",
        tier: "open-source",
        name: "Snipe-IT",
        shortDescription: "Free asset management system",
        description: "Snipe-IT is a free and open-source IT asset management system.",
        pros: [
          "Free to use",
          "Self-hosted",
          "Customizable",
          "Active community"
        ],
        cons: [
          "Requires technical expertise",
          "Limited support",
          "Manual updates"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://snipeitapp.com",
        pricingPage: "https://snipeitapp.com",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Archive
      },
      {
        id: "asset-panda",
        tier: "standard",
        name: "Asset Panda",
        shortDescription: "Cloud-based asset management",
        description: "Asset Panda is a cloud-based asset management platform.",
        pros: [
          "Cloud-based",
          "Easy to use",
          "Mobile app available",
          "Good support"
        ],
        cons: [
          "Monthly subscription",
          "Limited customization",
          "Internet dependent"
        ],
        pricing: "₹1,500/year for up to 500 assets",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.assetpanda.com",
        pricingPage: "https://www.assetpanda.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "20-40",
        priority: "Medium",
        estimatedCostRange: "₹830,000/year",
        perUnitCost: {
          amount: 830000,
          unit: "year",
          period: "yearly"
        },
        icon: Archive
      },
      {
        id: "servicenow",
        tier: "premium",
        name: "ServiceNow IT Asset Management",
        shortDescription: "Enterprise asset management",
        description: "ServiceNow provides comprehensive IT asset management capabilities.",
        pros: [
          "Enterprise-grade",
          "Highly customizable",
          "Integration capabilities",
          "24/7 support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Starting at ₹10,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "https://www.servicenow.com/products/it-asset-management.html",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "60-120",
        priority: "High",
        estimatedCostRange: "₹830,000/year",
        perUnitCost: {
          amount: 830000,
          unit: "year",
          period: "yearly"
        },
        icon: Archive
      }
    ]
  },
  {
    id: 3,
    category: "Identity Management",
    text: "Is there an identity management solution in place?",
    description: "Identity management helps control and secure user access to systems.",
    helpText: "This includes having proper user identity and access management systems.",
    icon: Users,
    subQuestion: {
      id: "user-count",
      text: "How many user identities need to be managed?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 50,
      min: 1,
      max: 10000
    },
    recommendations: [
      {
        id: "openldap",
        tier: "open-source",
        name: "OpenLDAP",
        shortDescription: "Free directory service",
        description: "OpenLDAP is a free and open-source implementation of the Lightweight Directory Access Protocol.",
        pros: [
          "Free to use",
          "Highly customizable",
          "Industry standard",
          "Self-hosted"
        ],
        cons: [
          "Complex setup",
          "Requires expertise",
          "Limited support"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.openldap.org",
        pricingPage: "https://www.openldap.org",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Users
      },
      {
        id: "ad",
        tier: "standard",
        name: "Microsoft Active Directory",
        shortDescription: "Windows-based directory service",
        description: "Microsoft Active Directory is a directory service for Windows domain networks.",
        pros: [
          "Windows integration",
          "Good support",
          "Wide adoption",
          "Regular updates"
        ],
        cons: [
          "Windows dependent",
          "Licensing costs",
          "Complex setup"
        ],
        pricing: "Included with Windows Server licensing (₹500-6,000)",
        pricingModel: "Server license",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com/en-us/windows-server/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹166/user/month",
        perUnitCost: {
          amount: 166,
          unit: "user",
          period: "monthly"
        },
        icon: Users
      },
      {
        id: "okta",
        tier: "premium",
        name: "Okta Identity Management",
        shortDescription: "Cloud-based identity management",
        description: "Okta provides comprehensive identity and access management solutions.",
        pros: [
          "Cloud-based",
          "Easy integration",
          "Strong security",
          "24/7 support"
        ],
        cons: [
          "Higher cost",
          "Internet dependent",
          "Monthly subscription"
        ],
        pricing: "₹2/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://www.okta.com",
        pricingPage: "https://www.okta.com/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹166/user/month",
        perUnitCost: {
          amount: 166,
          unit: "user",
          period: "monthly"
        },
        icon: Users
      }
    ]
  },
  {
    id: 4,
    category: "Incident Management",
    text: "Is there an incident management platform in place?",
    description: "An incident management platform helps track and resolve security incidents efficiently.",
    helpText: "This includes having proper tools for incident tracking, response, and resolution.",
    icon: AlertTriangle,
    subQuestion: {
      id: "incident-count",
      text: "How many incidents does your organization handle monthly?",
      placeholder: "Enter number of incidents",
      unit: "incidents",
      defaultValue: 10,
      min: 1,
      max: 1000
    },
    recommendations: [
      {
        id: "thehive",
        tier: "open-source",
        name: "TheHive",
        shortDescription: "Free incident response platform",
        description: "TheHive is a free and open-source incident response platform.",
        pros: [
          "Free to use",
          "Self-hosted",
          "Customizable",
          "Active community"
        ],
        cons: [
          "Requires expertise",
          "Limited support",
          "Manual updates"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://thehive-project.org",
        pricingPage: "https://thehive-project.org",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Any",
        effortHours: "60-90",
        priority: "High",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: AlertTriangle
      },
      {
        id: "jira",
        tier: "standard",
        name: "Atlassian Jira Service Management",
        shortDescription: "Cloud-based incident management",
        description: "Jira Service Management is a cloud-based incident management platform.",
        pros: [
          "Cloud-based",
          "Easy to use",
          "Good integration",
          "Regular updates"
        ],
        cons: [
          "Monthly subscription",
          "Limited customization",
          "Internet dependent"
        ],
        pricing: "₹20/agent/month",
        pricingModel: "Per agent monthly",
        officialWebsite: "https://www.atlassian.com",
        pricingPage: "https://www.atlassian.com/software/jira/service-management/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "20-40",
        priority: "High",
        estimatedCostRange: "₹830,000/year",
        perUnitCost: {
          amount: 830000,
          unit: "year",
          period: "yearly"
        },
        icon: AlertTriangle
      },
      {
        id: "servicenow-incident",
        tier: "premium",
        name: "ServiceNow Incident Management",
        shortDescription: "Enterprise incident management",
        description: "ServiceNow provides comprehensive incident management capabilities.",
        pros: [
          "Enterprise-grade",
          "Highly customizable",
          "Integration capabilities",
          "24/7 support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Starting at ₹10,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "https://www.servicenow.com/products/incident-management.html",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹830,000/year",
        perUnitCost: {
          amount: 830000,
          unit: "year",
          period: "yearly"
        },
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 5,
    category: "Data Loss Prevention",
    text: "Is there a Data Loss Prevention (DLP) solution in place?",
    description: "DLP solutions help prevent unauthorized data leakage and protect sensitive information.",
    helpText: "This includes having proper tools to monitor and prevent data loss.",
    icon: Shield,
    subQuestion: {
      id: "data-types",
      text: "What types of sensitive data does your organization handle?",
      placeholder: "Enter number of data types",
      unit: "types",
      defaultValue: 5,
      min: 1,
      max: 50
    },
    recommendations: [
      {
        id: "opendlp",
        tier: "open-source",
        name: "OpenDLP",
        shortDescription: "Free DLP solution",
        description: "OpenDLP is a free and open-source data loss prevention solution.",
        pros: [
          "Free to use",
          "Self-hosted",
          "Customizable",
          "Community support"
        ],
        cons: [
          "Complex setup",
          "Limited features",
          "Requires expertise"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://opendlp.org",
        pricingPage: "https://opendlp.org",
        setupTime: "4+ weeks",
        recommendedTimeline: "4+ weeks",
        requiredResources: "Security team",
        organizationSize: "Any",
        effortHours: "160+",
        priority: "High",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Shield
      },
      {
        id: "symantec-dlp",
        tier: "standard",
        name: "Symantec DLP",
        shortDescription: "Enterprise DLP solution",
        description: "Symantec provides comprehensive data loss prevention capabilities.",
        pros: [
          "Good features",
          "Regular updates",
          "Professional support",
          "Wide adoption"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Resource intensive"
        ],
        pricing: "₹25/user/year",
        pricingModel: "Annual per user",
        officialWebsite: "https://www.broadcom.com",
        pricingPage: "https://www.broadcom.com/products/cyber-security/data-loss-prevention",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to large",
        effortHours: "60-90",
        priority: "High",
        estimatedCostRange: "₹4,150/user/year",
        perUnitCost: {
          amount: 4150,
          unit: "user",
          period: "yearly"
        },
        icon: Shield
      },
      {
        id: "forcepoint-dlp",
        tier: "premium",
        name: "Forcepoint DLP",
        shortDescription: "Advanced DLP solution",
        description: "Forcepoint provides advanced data loss prevention capabilities.",
        pros: [
          "Advanced features",
          "Strong security",
          "24/7 support",
          "Cloud integration"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹50/user/year",
        pricingModel: "Annual per user",
        officialWebsite: "https://www.forcepoint.com",
        pricingPage: "https://www.forcepoint.com/products/data-loss-prevention",
        setupTime: "4+ weeks",
        recommendedTimeline: "4+ weeks",
        requiredResources: "Dedicated security team",
        organizationSize: "Large enterprises",
        effortHours: "160+",
        priority: "High",
        estimatedCostRange: "₹4,150/user/year",
        perUnitCost: {
          amount: 4150,
          unit: "user",
          period: "yearly"
        },
        icon: Shield
      }
    ]
  },
  {
    id: 6,
    category: "Data Protection",
    text: "Is there Personally Identifiable Information (PII) redaction technology in place?",
    description: "PII redaction technology helps protect sensitive personal information in documents.",
    helpText: "This includes having proper tools to automatically redact sensitive information from documents.",
    icon: FileCheck,
    subQuestion: {
      id: "pii-volume",
      text: "What volume of documents containing PII does your organization process?",
      placeholder: "Enter number of documents",
      unit: "documents",
      defaultValue: 100,
      min: 1,
      max: 10000
    },
    recommendations: [
      {
        id: "pdfredact",
        tier: "open-source",
        name: "PdfRedactTools",
        shortDescription: "Free PDF redaction tool",
        description: "PdfRedactTools is a free tool for redacting sensitive information from PDF documents.",
        pros: [
          "Free to use",
          "Self-hosted",
          "Basic redaction features",
          "Community support"
        ],
        cons: [
          "Manual processing",
          "Limited automation",
          "Requires technical expertise"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://github.com/pdfredact",
        pricingPage: "https://github.com/pdfredact",
        setupTime: "4+ weeks",
        recommendedTimeline: "4+ weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "160+",
        priority: "High",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: FileCheck
      },
      {
        id: "vera",
        tier: "standard",
        name: "Vera Redaction",
        shortDescription: "Cloud-based redaction solution",
        description: "Vera provides automated redaction capabilities for sensitive documents.",
        pros: [
          "Automated redaction",
          "Cloud-based",
          "Good support",
          "Regular updates"
        ],
        cons: [
          "Monthly subscription",
          "Internet dependent",
          "Limited customization"
        ],
        pricing: "₹830/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://www.vera.com",
        pricingPage: "https://www.vera.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "60-90",
        priority: "High",
        estimatedCostRange: "₹830/user/month",
        perUnitCost: {
          amount: 830,
          unit: "user",
          period: "monthly"
        },
        icon: FileCheck
      },
      {
        id: "ibm-watson",
        tier: "premium",
        name: "IBM Watson Discovery",
        shortDescription: "Enterprise document redaction",
        description: "IBM Watson Discovery provides advanced document redaction capabilities.",
        pros: [
          "Advanced AI capabilities",
          "Enterprise-grade",
          "24/7 support",
          "Highly customizable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Starting at ₹41,500/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.ibm.com/watson",
        pricingPage: "https://www.ibm.com/watson/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹41,500/month",
        perUnitCost: {
          amount: 41500,
          unit: "month",
          period: "monthly"
        },
        icon: FileCheck
      }
    ]
  },
  {
    id: 7,
    category: "Security Training",
    text: "Is there annual or quarterly security awareness training for employees?",
    description: "Security awareness training helps employees understand and prevent security risks.",
    helpText: "This includes having regular training programs for employees on security best practices.",
    icon: BookOpen,
    subQuestion: {
      id: "employee-count",
      text: "How many employees require security awareness training?",
      placeholder: "Enter number of employees",
      unit: "employees",
      defaultValue: 50,
      min: 1,
      max: 10000
    },
    recommendations: [
      {
        id: "staysafe",
        tier: "open-source",
        name: "StaySafeOnline",
        shortDescription: "Free security training materials",
        description: "StaySafeOnline provides free security awareness training materials.",
        pros: [
          "Free to use",
          "Regular updates",
          "Comprehensive materials",
          "Community support"
        ],
        cons: [
          "Manual delivery",
          "Limited tracking",
          "Basic features"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://staysafeonline.org",
        pricingPage: "https://staysafeonline.org",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Any",
        effortHours: "60-90",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: BookOpen
      },
      {
        id: "knowbe4",
        tier: "standard",
        name: "KnowBe4",
        shortDescription: "Cloud-based security training",
        description: "KnowBe4 provides comprehensive security awareness training platform.",
        pros: [
          "Automated delivery",
          "Progress tracking",
          "Regular updates",
          "Good support"
        ],
        cons: [
          "Annual subscription",
          "Internet dependent",
          "Limited customization"
        ],
        pricing: "₹830/user/year",
        pricingModel: "Annual per user",
        officialWebsite: "https://www.knowbe4.com",
        pricingPage: "https://www.knowbe4.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹830/user/year",
        perUnitCost: {
          amount: 830,
          unit: "user",
          period: "yearly"
        },
        icon: BookOpen
      },
      {
        id: "sans",
        tier: "premium",
        name: "SANS Security Awareness",
        shortDescription: "Enterprise security training",
        description: "SANS provides comprehensive enterprise-grade security awareness training.",
        pros: [
          "Enterprise-grade",
          "Highly customizable",
          "Expert content",
          "24/7 support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹4,150/user/year",
        pricingModel: "Annual per user",
        officialWebsite: "https://www.sans.org",
        pricingPage: "https://www.sans.org/security-awareness-training",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Dedicated HR team",
        organizationSize: "Large enterprises",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹4,150/user/year",
        perUnitCost: {
          amount: 4150,
          unit: "user",
          period: "yearly"
        },
        icon: BookOpen
      }
    ]
  },
  {
    id: 8,
    category: "Access Control",
    text: "Is VPN technology or Zero Trust architecture in place?",
    description: "VPN and Zero Trust architecture help secure remote access to organizational resources.",
    helpText: "This includes having proper tools for secure remote access and network security.",
    icon: Network,
    subQuestion: {
      id: "remote-users",
      text: "How many remote users require secure access?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 20,
      min: 1,
      max: 1000
    },
    recommendations: [
      {
        id: "openvpn",
        tier: "open-source",
        name: "OpenVPN",
        shortDescription: "Free VPN solution",
        description: "OpenVPN is a free and open-source VPN solution.",
        pros: [
          "Free to use",
          "Self-hosted",
          "Highly secure",
          "Community support"
        ],
        cons: [
          "Complex setup",
          "Requires expertise",
          "Manual maintenance"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://openvpn.net",
        pricingPage: "https://openvpn.net",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Network
      },
      {
        id: "nordlayer",
        tier: "standard",
        name: "NordLayer",
        shortDescription: "Cloud-based VPN solution",
        description: "NordLayer provides secure remote access capabilities.",
        pros: [
          "Easy setup",
          "Good support",
          "Regular updates",
          "Cloud-based"
        ],
        cons: [
          "Monthly subscription",
          "Internet dependent",
          "Limited customization"
        ],
        pricing: "₹580/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://nordlayer.com",
        pricingPage: "https://nordlayer.com/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹580/user/month",
        perUnitCost: {
          amount: 580,
          unit: "user",
          period: "monthly"
        },
        icon: Network
      },
      {
        id: "zscaler",
        tier: "premium",
        name: "Zscaler Zero Trust Exchange",
        shortDescription: "Enterprise Zero Trust platform",
        description: "Zscaler provides comprehensive Zero Trust security platform.",
        pros: [
          "Enterprise-grade",
          "Advanced security",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.zscaler.com",
        pricingPage: "https://www.zscaler.com/pricing",
        setupTime: "4-5 weeks",
        recommendedTimeline: "4-5 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "160-200",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Network
      }
    ]
  },
  {
    id: 9,
    category: "Physical Security",
    text: "Is there FaceID or fingerprint ID physical access control to the premises?",
    description: "Biometric access control provides secure physical access to premises.",
    helpText: "This includes having proper biometric authentication systems for physical access.",
    icon: Fingerprint,
    subQuestion: {
      id: "entry-points",
      text: "How many entry points require biometric access control?",
      placeholder: "Enter number of entry points",
      unit: "points",
      defaultValue: 2,
      min: 1,
      max: 50
    },
    recommendations: [
      {
        id: "zkteco",
        tier: "standard",
        name: "ZKTeco Biometric Access Control",
        shortDescription: "Standard biometric access control",
        description: "ZKTeco provides reliable biometric access control systems.",
        pros: [
          "Cost-effective",
          "Easy to use",
          "Good support",
          "Regular updates"
        ],
        cons: [
          "Basic features",
          "Limited integration",
          "Manual maintenance"
        ],
        pricing: "₹41,500/entry point",
        pricingModel: "Per entry point",
        officialWebsite: "https://www.zkteco.in",
        pricingPage: "https://www.zkteco.in/products",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹41,500/entry point",
        perUnitCost: {
          amount: 41500,
          unit: "entry point",
          period: "one-time"
        },
        icon: Fingerprint
      },
      {
        id: "hid",
        tier: "premium",
        name: "HID Global Biometric Access Control",
        shortDescription: "Enterprise biometric access control",
        description: "HID Global provides advanced biometric access control systems.",
        pros: [
          "Advanced features",
          "Enterprise-grade",
          "24/7 support",
          "Highly secure"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹83,000-166,000/entry point",
        pricingModel: "Per entry point",
        officialWebsite: "https://www.hidglobal.com",
        pricingPage: "https://www.hidglobal.com/products",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Dedicated facilities team",
        organizationSize: "Large enterprises",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹83,000-166,000/entry point",
        perUnitCost: {
          amount: 124500,
          unit: "entry point",
          period: "one-time"
        },
        icon: Fingerprint
      }
    ]
  },
  {
    id: 10,
    category: "Physical Security",
    text: "Is there CCTV camera monitoring in place for the office premises?",
    description: "CCTV monitoring helps maintain physical security and surveillance of premises.",
    helpText: "This includes having proper video surveillance systems in place.",
    icon: Video,
    subQuestion: {
      id: "camera-areas",
      text: "How many areas or rooms require CCTV monitoring?",
      placeholder: "Enter number of areas",
      unit: "areas",
      defaultValue: 5,
      min: 1,
      max: 100
    },
    recommendations: [
      {
        id: "hikvision",
        tier: "standard",
        name: "Hikvision DVR Kits",
        shortDescription: "Standard CCTV system",
        description: "Hikvision provides reliable CCTV monitoring systems.",
        pros: [
          "Cost-effective",
          "Easy to use",
          "Good support",
          "Regular updates"
        ],
        cons: [
          "Basic features",
          "Limited integration",
          "Manual maintenance"
        ],
        pricing: "₹24,900-83,000 for 4-8 camera setup",
        pricingModel: "Per system",
        officialWebsite: "https://www.hikvision.com",
        pricingPage: "https://www.hikvision.com/products",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹24,900-83,000",
        perUnitCost: {
          amount: 53950,
          unit: "system",
          period: "one-time"
        },
        icon: Video
      },
      {
        id: "arlo",
        tier: "premium",
        name: "Arlo Pro Wireless Camera Systems",
        shortDescription: "Premium wireless CCTV system",
        description: "Arlo provides advanced wireless CCTV monitoring systems.",
        pros: [
          "Wireless setup",
          "Advanced features",
          "Cloud storage",
          "24/7 support"
        ],
        cons: [
          "Higher cost",
          "Internet dependent",
          "Monthly subscription"
        ],
        pricing: "Starting at ₹41,500 for 3-camera system",
        pricingModel: "Per system",
        officialWebsite: "https://www.arlo.com",
        pricingPage: "https://www.arlo.com/products",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Medium to large",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹41,500+",
        perUnitCost: {
          amount: 41500,
          unit: "system",
          period: "one-time"
        },
        icon: Video
      }
    ]
  },
  {
    id: 11,
    category: "Physical Security",
    text: "Are there fire extinguishers placed at designated locations within the premises?",
    description: "Fire extinguishers are essential safety equipment for fire prevention and response.",
    helpText: "This includes having proper fire extinguishers installed at strategic locations.",
    icon: Flame,
    subQuestion: {
      id: "extinguisher-count",
      text: "How many extinguishers are required, based on the size and layout of the premises?",
      placeholder: "Enter number of extinguishers",
      unit: "units",
      defaultValue: 5,
      min: 1,
      max: 50
    },
    recommendations: [
      {
        id: "abc-extinguishers",
        tier: "standard",
        name: "ABC-rated Fire Extinguishers",
        shortDescription: "Standard fire extinguishers",
        description: "ABC-rated fire extinguishers provide protection against common types of fires.",
        pros: [
          "Cost-effective",
          "Easy to install",
          "Good coverage",
          "Regular maintenance"
        ],
        cons: [
          "Basic features",
          "Manual inspection",
          "Limited monitoring"
        ],
        pricing: "₹4,150-8,300 per unit",
        pricingModel: "Per unit",
        officialWebsite: "https://www.fireextinguisher.com",
        pricingPage: "https://www.fireextinguisher.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹4,150-8,300 per unit",
        perUnitCost: {
          amount: 6225,
          unit: "unit",
          period: "one-time"
        },
        icon: Flame
      },
      {
        id: "fire-safety-company",
        tier: "premium",
        name: "Professional Fire Safety Assessment",
        shortDescription: "Comprehensive fire safety solution",
        description: "Professional fire safety company provides assessment and installation services.",
        pros: [
          "Expert assessment",
          "Professional installation",
          "Regular maintenance",
          "Compliance certification"
        ],
        cons: [
          "Higher cost",
          "Scheduling required",
          "Dependent on external vendor"
        ],
        pricing: "Starting at ₹41,500",
        pricingModel: "Custom",
        officialWebsite: "https://www.firesafety.com",
        pricingPage: "https://www.firesafety.com/services",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Medium to large",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹41,500+",
        perUnitCost: {
          amount: 41500,
          unit: "assessment",
          period: "one-time"
        },
        icon: Flame
      }
    ]
  },
  {
    id: 12,
    category: "Infrastructure Security",
    text: "Are cables carrying power, data, or supporting information services protected from interception, interference, or damage?",
    description: "Cable protection ensures the security and reliability of power and data infrastructure.",
    helpText: "This includes having proper protection for all cables and wiring.",
    icon: Cable,
    subQuestion: {
      id: "cable-length",
      text: "How many meters of cabling need protection or reinstallation?",
      placeholder: "Enter length in meters",
      unit: "meters",
      defaultValue: 100,
      min: 1,
      max: 1000
    },
    recommendations: [
      {
        id: "protective-conduits",
        tier: "standard",
        name: "Protective Conduits and Shielding",
        shortDescription: "Standard cable protection",
        description: "Protective conduits and shielding provide basic cable protection.",
        pros: [
          "Cost-effective",
          "Easy to install",
          "Good protection",
          "Regular maintenance"
        ],
        cons: [
          "Basic features",
          "Manual installation",
          "Limited monitoring"
        ],
        pricing: "₹166-415 per meter",
        pricingModel: "Per meter",
        officialWebsite: "https://www.cableprotection.com",
        pricingPage: "https://www.cableprotection.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹166-415 per meter",
        perUnitCost: {
          amount: 290,
          unit: "meter",
          period: "one-time"
        },
        icon: Cable
      },
      {
        id: "professional-cabling",
        tier: "premium",
        name: "Professional Cabling Services",
        shortDescription: "Professional cable installation",
        description: "Professional cabling company provides comprehensive installation services.",
        pros: [
          "Expert installation",
          "Compliance certified",
          "Regular maintenance",
          "Quality assurance"
        ],
        cons: [
          "Higher cost",
          "Scheduling required",
          "Dependent on external vendor"
        ],
        pricing: "Starting at ₹41,500 for small offices",
        pricingModel: "Custom",
        officialWebsite: "https://www.procabling.com",
        pricingPage: "https://www.procabling.com/services",
        setupTime: "4-5 weeks",
        recommendedTimeline: "4-5 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "160-200",
        priority: "High",
        estimatedCostRange: "₹41,500+",
        perUnitCost: {
          amount: 41500,
          unit: "installation",
          period: "one-time"
        },
        icon: Cable
      }
    ]
  },
  {
    id: 13,
    category: "Endpoint Security",
    text: "Do you have endpoint protection (e.g., antivirus, device encryption) implemented?",
    description: "Endpoint protection helps secure devices and prevent malware infections.",
    helpText: "This includes having proper antivirus and device encryption in place.",
    icon: Shield,
    subQuestion: {
      id: "device-count",
      text: "How many devices require endpoint protection?",
      placeholder: "Enter number of devices",
      unit: "devices",
      defaultValue: 50,
      min: 1,
      max: 1000
    },
    recommendations: [
      {
        id: "norton-mcafee",
        tier: "standard",
        name: "Norton/McAfee Endpoint Security",
        shortDescription: "Standard endpoint protection",
        description: "Norton and McAfee provide reliable endpoint security solutions.",
        pros: [
          "Cost-effective",
          "Easy to manage",
          "Good protection",
          "Regular updates"
        ],
        cons: [
          "Basic features",
          "Resource intensive",
          "Limited customization"
        ],
        pricing: "₹2,490 per device/year",
        pricingModel: "Annual per device",
        officialWebsite: "https://www.norton.com",
        pricingPage: "https://www.norton.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹2,490 per device/year",
        perUnitCost: {
          amount: 2490,
          unit: "device",
          period: "yearly"
        },
        icon: Shield
      },
      {
        id: "crowdstrike",
        tier: "premium",
        name: "CrowdStrike Falcon",
        shortDescription: "Advanced endpoint protection",
        description: "CrowdStrike provides advanced endpoint protection and threat detection.",
        pros: [
          "Advanced protection",
          "Cloud-based",
          "Real-time monitoring",
          "24/7 support"
        ],
        cons: [
          "Higher cost",
          "Internet dependent",
          "Complex setup"
        ],
        pricing: "₹4,990 per device/year",
        pricingModel: "Annual per device",
        officialWebsite: "https://www.crowdstrike.com",
        pricingPage: "https://www.crowdstrike.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹4,990 per device/year",
        perUnitCost: {
          amount: 4990,
          unit: "device",
          period: "yearly"
        },
        icon: Shield
      }
    ]
  },
  {
    id: 14,
    category: "Access Control",
    text: "Are privileged access rights restricted and monitored?",
    description: "Privileged access management helps control and monitor administrative access.",
    helpText: "This includes having proper tools to manage and monitor privileged access.",
    icon: Key,
    subQuestion: {
      id: "privileged-users",
      text: "How many users or accounts need to be monitored and restricted?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 10,
      min: 1,
      max: 100
    },
    recommendations: [
      {
        id: "manageengine",
        tier: "standard",
        name: "ManageEngine PAM",
        shortDescription: "Standard privileged access management",
        description: "ManageEngine provides PAM capabilities for managing privileged access.",
        pros: [
          "Cost-effective",
          "Easy to use",
          "Good features",
          "Regular updates"
        ],
        cons: [
          "Basic monitoring",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "₹83,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.manageengine.com",
        pricingPage: "https://www.manageengine.com/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹83,000/year",
        perUnitCost: {
          amount: 83000,
          unit: "year",
          period: "yearly"
        },
        icon: Key
      },
      {
        id: "cyberark",
        tier: "premium",
        name: "CyberArk PAM",
        shortDescription: "Enterprise privileged access management",
        description: "CyberArk provides comprehensive privileged access management.",
        pros: [
          "Advanced features",
          "Enterprise-grade",
          "24/7 support",
          "Highly secure"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Starting at ₹415,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.cyberark.com",
        pricingPage: "https://www.cyberark.com/pricing",
        setupTime: "4-5 weeks",
        recommendedTimeline: "4-5 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "160-200",
        priority: "High",
        estimatedCostRange: "₹415,000/year",
        perUnitCost: {
          amount: 415000,
          unit: "year",
          period: "yearly"
        },
        icon: Key
      }
    ]
  },
  {
    id: 15,
    category: "Access Control",
    text: "Is access to information and assets restricted as per access control policies?",
    description: "Access control policies help manage and restrict access to organizational resources.",
    helpText: "This includes having proper tools to enforce access control policies.",
    icon: Lock,
    subQuestion: {
      id: "asset-types",
      text: "What type of assets require access control (e.g., files, servers, applications)?",
      placeholder: "Enter number of asset types",
      unit: "types",
      defaultValue: 5,
      min: 1,
      max: 50
    },
    recommendations: [
      {
        id: "group-policy",
        tier: "standard",
        name: "Microsoft Group Policy",
        shortDescription: "Windows-based access control",
        description: "Microsoft Group Policy provides basic access control capabilities.",
        pros: [
          "Included with Windows",
          "Easy to use",
          "Good integration",
          "Regular updates"
        ],
        cons: [
          "Windows only",
          "Limited features",
          "Basic monitoring"
        ],
        pricing: "Included with Windows Server",
        pricingModel: "Included",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com/windows-server",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "Included with Windows Server",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Lock
      },
      {
        id: "okta-access",
        tier: "premium",
        name: "Okta Access Management",
        shortDescription: "Cloud-based access management",
        description: "Okta provides comprehensive access management capabilities.",
        pros: [
          "Cloud-based",
          "Easy integration",
          "Strong security",
          "24/7 support"
        ],
        cons: [
          "Monthly subscription",
          "Internet dependent",
          "Complex setup"
        ],
        pricing: "₹166/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://www.okta.com",
        pricingPage: "https://www.okta.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹166/user/month",
        perUnitCost: {
          amount: 166,
          unit: "user",
          period: "monthly"
        },
        icon: Lock
      }
    ]
  },
  {
    id: 16,
    category: "Development Security",
    text: "Is access to source code, development tools, and software libraries managed securely?",
    description: "Secure source code management helps protect intellectual property and prevent unauthorized access.",
    helpText: "This includes having proper tools to manage and secure access to development resources.",
    icon: Code,
    subQuestion: {
      id: "dev-tools",
      text: "What tools or libraries are currently in use?",
      placeholder: "Enter number of tools",
      unit: "tools",
      defaultValue: 5,
      min: 1,
      max: 50
    },
    recommendations: [
      {
        id: "github-enterprise",
        tier: "standard",
        name: "GitHub Enterprise",
        shortDescription: "Enterprise source code management",
        description: "GitHub Enterprise provides secure source code management with access control features.",
        pros: [
          "Industry standard",
          "Good integration",
          "Regular updates",
          "Strong security"
        ],
        cons: [
          "Monthly subscription",
          "Internet dependent",
          "Complex setup"
        ],
        pricing: "₹1,745/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://github.com/enterprise",
        pricingPage: "https://github.com/enterprise/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Development team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹1,745/user/month",
        perUnitCost: {
          amount: 1745,
          unit: "user",
          period: "monthly"
        },
        icon: Code
      },
      {
        id: "snyk",
        tier: "premium",
        name: "Snyk",
        shortDescription: "Advanced dependency security",
        description: "Snyk provides comprehensive dependency and code security scanning.",
        pros: [
          "Advanced security",
          "Dependency scanning",
          "24/7 support",
          "Automated fixes"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹4,150/developer/month",
        pricingModel: "Per developer monthly",
        officialWebsite: "https://snyk.io",
        pricingPage: "https://snyk.io/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Development team",
        organizationSize: "Medium to large",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹4,150/developer/month",
        perUnitCost: {
          amount: 4150,
          unit: "developer",
          period: "monthly"
        },
        icon: Code
      }
    ]
  },
  {
    id: 17,
    category: "Authentication",
    text: "Do you use secure authentication technologies, such as MFA?",
    description: "Multi-factor authentication adds an extra layer of security to user accounts.",
    helpText: "This includes having proper MFA solutions in place for user authentication.",
    icon: KeyRound,
    subQuestion: {
      id: "mfa-users",
      text: "How many users need MFA solutions?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 50,
      min: 1,
      max: 1000
    },
    recommendations: [
      {
        id: "google-auth",
        tier: "standard",
        name: "Google Authenticator",
        shortDescription: "Free MFA solution",
        description: "Google Authenticator provides free two-factor authentication capabilities.",
        pros: [
          "Free to use",
          "Easy to implement",
          "Wide adoption",
          "Regular updates"
        ],
        cons: [
          "Basic features",
          "Manual setup",
          "Limited management"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://support.google.com/accounts/answer/1066447",
        pricingPage: "https://support.google.com/accounts/answer/1066447",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: KeyRound
      },
      {
        id: "duo",
        tier: "premium",
        name: "Duo Security",
        shortDescription: "Enterprise MFA solution",
        description: "Duo Security provides comprehensive multi-factor authentication.",
        pros: [
          "Advanced features",
          "Easy management",
          "24/7 support",
          "Strong security"
        ],
        cons: [
          "Monthly subscription",
          "Internet dependent",
          "Complex setup"
        ],
        pricing: "₹249/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://duo.com",
        pricingPage: "https://duo.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹249/user/month",
        perUnitCost: {
          amount: 249,
          unit: "user",
          period: "monthly"
        },
        icon: KeyRound
      }
    ]
  },
  {
    id: 18,
    category: "Monitoring",
    text: "Do you have resource monitoring and malware protection in place?",
    description: "Resource monitoring and malware protection help maintain system security and performance.",
    helpText: "This includes having proper tools to monitor resources and protect against malware.",
    icon: Activity,
    subQuestion: {
      id: "monitoring-resources",
      text: "Which resources or endpoints require monitoring?",
      placeholder: "Enter number of resources",
      unit: "resources",
      defaultValue: 10,
      min: 1,
      max: 100
    },
    recommendations: [
      {
        id: "solarwinds",
        tier: "standard",
        name: "SolarWinds Network Performance Monitor",
        shortDescription: "Standard network monitoring",
        description: "SolarWinds provides network performance monitoring capabilities.",
        pros: [
          "Cost-effective",
          "Easy to use",
          "Good features",
          "Regular updates"
        ],
        cons: [
          "Basic protection",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "₹124,500/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.solarwinds.com",
        pricingPage: "https://www.solarwinds.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹124,500/year",
        perUnitCost: {
          amount: 124500,
          unit: "year",
          period: "yearly"
        },
        icon: Activity
      },
      {
        id: "crowdstrike-monitoring",
        tier: "premium",
        name: "CrowdStrike Falcon",
        shortDescription: "Advanced malware protection",
        description: "CrowdStrike provides comprehensive malware protection and monitoring.",
        pros: [
          "Advanced protection",
          "Real-time monitoring",
          "24/7 support",
          "Automated response"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹4,990/device/year",
        pricingModel: "Annual per device",
        officialWebsite: "https://www.crowdstrike.com",
        pricingPage: "https://www.crowdstrike.com/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹4,990/device/year",
        perUnitCost: {
          amount: 4990,
          unit: "device",
          period: "yearly"
        },
        icon: Activity
      }
    ]
  },
  {
    id: 19,
    category: "Data Protection",
    text: "Is production data prevented from being used in non-production environments?",
    description: "Preventing production data usage in non-production environments helps protect sensitive information.",
    helpText: "This includes having proper tools and policies to restrict production data usage.",
    icon: ShieldCheck,
    subQuestion: {
      id: "data-policies",
      text: "What policies or tools are currently in place to restrict production data usage?",
      placeholder: "Enter number of policies",
      unit: "policies",
      defaultValue: 3,
      min: 1,
      max: 20
    },
    recommendations: [
      {
        id: "faker-mockaroo",
        tier: "open-source",
        name: "Faker and Mockaroo",
        shortDescription: "Free test data generation",
        description: "Faker and Mockaroo provide tools for generating synthetic test data.",
        pros: [
          "Free to use",
          "Easy integration",
          "Customizable data",
          "Community support"
        ],
        cons: [
          "Manual setup",
          "Limited features",
          "Basic data types"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://fakerjs.dev",
        pricingPage: "https://fakerjs.dev",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Development team",
        organizationSize: "Any",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: ShieldCheck
      },
      {
        id: "ibm-infosphere",
        tier: "standard",
        name: "IBM InfoSphere Optim",
        shortDescription: "Enterprise data masking",
        description: "IBM InfoSphere Optim provides comprehensive data masking capabilities.",
        pros: [
          "Enterprise-grade",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Complex setup",
          "High cost",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.ibm.com",
        pricingPage: "https://www.ibm.com/products/infosphere-optim",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: ShieldCheck
      },
      {
        id: "delphix",
        tier: "premium",
        name: "Delphix Data Masking",
        shortDescription: "Advanced data protection",
        description: "Delphix provides real-time production data protection and masking.",
        pros: [
          "Real-time protection",
          "Advanced features",
          "24/7 support",
          "Highly secure"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Starting at ₹4,150,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.delphix.com",
        pricingPage: "https://www.delphix.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹4,150,000/year",
        perUnitCost: {
          amount: 4150000,
          unit: "year",
          period: "yearly"
        },
        icon: ShieldCheck
      }
    ]
  },
  {
    id: 20,
    category: "Security Assessment",
    text: "Are audit tests, penetration tests, and other security assessments planned, documented, and approved by management?",
    description: "Regular security assessments help identify and address vulnerabilities.",
    helpText: "This includes having proper tools and processes for security testing.",
    icon: ShieldQuestion,
    subQuestion: {
      id: "assessment-frequency",
      text: "How frequently are security assessments performed?",
      placeholder: "Enter frequency in months",
      unit: "months",
      defaultValue: 6,
      min: 1,
      max: 24
    },
    recommendations: [
      {
        id: "osstmm",
        tier: "open-source",
        name: "OSSTMM",
        shortDescription: "Free security testing methodology",
        description: "OSSTMM provides a comprehensive security testing methodology.",
        pros: [
          "Free to use",
          "Comprehensive",
          "Regular updates",
          "Community support"
        ],
        cons: [
          "Manual process",
          "Requires expertise",
          "Limited automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.isecom.org/OSSTMM.3.pdf",
        pricingPage: "https://www.isecom.org/OSSTMM.3.pdf",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: ShieldQuestion
      },
      {
        id: "qualys",
        tier: "standard",
        name: "Qualys Web Application Scanning",
        shortDescription: "Cloud-based security scanning",
        description: "Qualys provides automated web application security scanning.",
        pros: [
          "Automated scanning",
          "Regular updates",
          "Good support",
          "Cloud-based"
        ],
        cons: [
          "Annual subscription",
          "Limited customization",
          "Internet dependent"
        ],
        pricing: "₹249,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.qualys.com",
        pricingPage: "https://www.qualys.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹249,000/year",
        perUnitCost: {
          amount: 249000,
          unit: "year",
          period: "yearly"
        },
        icon: ShieldQuestion
      },
      {
        id: "third-party-audit",
        tier: "premium",
        name: "Third-Party Security Audit",
        shortDescription: "Comprehensive security assessment",
        description: "Professional security auditing firm provides comprehensive assessment services.",
        pros: [
          "Expert assessment",
          "Comprehensive review",
          "24/7 support",
          "Detailed reporting"
        ],
        cons: [
          "High cost",
          "Scheduling required",
          "Dependent on external vendor"
        ],
        pricing: "Starting at ₹830,000 per audit",
        pricingModel: "Per audit",
        officialWebsite: "https://www.securityaudit.com",
        pricingPage: "https://www.securityaudit.com/services",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹830,000 per audit",
        perUnitCost: {
          amount: 830000,
          unit: "audit",
          period: "one-time"
        },
        icon: ShieldQuestion
      }
    ]
  },
  {
    id: 21,
    category: "Endpoint Security",
    text: "Are anti-malware solutions installed, regularly updated, and capable of detecting and responding to threats?",
    description: "Anti-malware solutions help protect systems from malicious software.",
    helpText: "This includes having proper anti-malware protection in place.",
    icon: Shield,
    subQuestion: {
      id: "endpoint-count",
      text: "How many endpoints require anti-malware protection?",
      placeholder: "Enter number of endpoints",
      unit: "endpoints",
      defaultValue: 50,
      min: 1,
      max: 1000
    },
    recommendations: [
      {
        id: "clamav",
        tier: "open-source",
        name: "ClamAV",
        shortDescription: "Free anti-malware solution",
        description: "ClamAV is a free and open-source anti-malware solution.",
        pros: [
          "Free to use",
          "Self-hosted",
          "Regular updates",
          "Community support"
        ],
        cons: [
          "Basic features",
          "Manual updates",
          "Limited management"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.clamav.net",
        pricingPage: "https://www.clamav.net",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Shield
      },
      {
        id: "malwarebytes",
        tier: "standard",
        name: "Malwarebytes for Business",
        shortDescription: "Cloud-based anti-malware",
        description: "Malwarebytes provides comprehensive anti-malware protection.",
        pros: [
          "Easy to use",
          "Good protection",
          "Regular updates",
          "Cloud-based"
        ],
        cons: [
          "Annual subscription",
          "Internet dependent",
          "Limited customization"
        ],
        pricing: "₹5,820/endpoint/year",
        pricingModel: "Annual per endpoint",
        officialWebsite: "https://www.malwarebytes.com",
        pricingPage: "https://www.malwarebytes.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹5,820/endpoint/year",
        perUnitCost: {
          amount: 5820,
          unit: "endpoint",
          period: "yearly"
        },
        icon: Shield
      },
      {
        id: "crowdstrike-prevent",
        tier: "premium",
        name: "CrowdStrike Falcon Prevent",
        shortDescription: "Advanced endpoint protection",
        description: "CrowdStrike provides advanced endpoint protection and threat prevention.",
        pros: [
          "Advanced protection",
          "Real-time monitoring",
          "24/7 support",
          "Cloud-based"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹4,990/device/year",
        pricingModel: "Annual per device",
        officialWebsite: "https://www.crowdstrike.com",
        pricingPage: "https://www.crowdstrike.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹4,990/device/year",
        perUnitCost: {
          amount: 4990,
          unit: "device",
          period: "yearly"
        },
        icon: Shield
      }
    ]
  },
  {
    id: 22,
    category: "System Management",
    text: "Are all system clocks synchronized with an approved time source and monitored for accuracy?",
    description: "Time synchronization ensures accurate timestamps across systems.",
    helpText: "This includes having proper time synchronization in place.",
    icon: Clock,
    subQuestion: {
      id: "system-count",
      text: "Which systems require time synchronization?",
      placeholder: "Enter number of systems",
      unit: "systems",
      defaultValue: 10,
      min: 1,
      max: 100
    },
    recommendations: [
      {
        id: "ntp",
        tier: "open-source",
        name: "NTP Servers",
        shortDescription: "Free time synchronization",
        description: "NTP provides reliable time synchronization capabilities.",
        pros: [
          "Free to use",
          "Self-hosted",
          "Highly accurate",
          "Community support"
        ],
        cons: [
          "Manual setup",
          "Requires expertise",
          "Limited monitoring"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.ntp.org",
        pricingPage: "https://www.ntp.org",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Clock
      },
      {
        id: "w32time",
        tier: "standard",
        name: "Microsoft Windows Time Service",
        shortDescription: "Windows time synchronization",
        description: "Windows Time Service provides time synchronization for Windows systems.",
        pros: [
          "Included with Windows",
          "Easy to use",
          "Good integration",
          "Regular updates"
        ],
        cons: [
          "Windows only",
          "Limited features",
          "Basic monitoring"
        ],
        pricing: "Included with Windows Server",
        pricingModel: "Included",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com/windows-server",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "Included with Windows Server",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Clock
      },
      {
        id: "gps-time",
        tier: "premium",
        name: "GPS-based Time Synchronization",
        shortDescription: "Enterprise time synchronization",
        description: "GPS-based time synchronization provides highly accurate timekeeping.",
        pros: [
          "Highly accurate",
          "Enterprise-grade",
          "24/7 support",
          "Independent of internet"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires hardware"
        ],
        pricing: "Starting at ₹415,000",
        pricingModel: "One-time purchase",
        officialWebsite: "https://www.timesync.com",
        pricingPage: "https://www.timesync.com/products",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large enterprises",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹415,000+",
        perUnitCost: {
          amount: 415000,
          unit: "system",
          period: "one-time"
        },
        icon: Clock
      }
    ]
  },
  {
    id: 23,
    category: "Logging",
    text: "Are timestamps used in security logs consistent and reliable for forensic investigations?",
    description: "Accurate timestamps in security logs are crucial for forensic analysis.",
    helpText: "This includes having proper logging and timestamp verification in place.",
    icon: FileText,
    subQuestion: {
      id: "log-types",
      text: "Which security logs require timestamp verification?",
      placeholder: "Enter number of log types",
      unit: "types",
      defaultValue: 5,
      min: 1,
      max: 50
    },
    recommendations: [
      {
        id: "chronicle",
        tier: "open-source",
        name: "Chronicle Logging",
        shortDescription: "Free log management",
        description: "Chronicle provides logging capabilities with NTP integration.",
        pros: [
          "Free to use",
          "NTP integration",
          "Basic features",
          "Community support"
        ],
        cons: [
          "Manual setup",
          "Limited features",
          "Basic monitoring"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://chronicle.software",
        pricingPage: "https://chronicle.software",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: FileText
      },
      {
        id: "splunk",
        tier: "standard",
        name: "Splunk",
        shortDescription: "Cloud-based log management",
        description: "Splunk provides centralized log management capabilities.",
        pros: [
          "Easy to use",
          "Good features",
          "Regular updates",
          "Cloud-based"
        ],
        cons: [
          "Annual subscription",
          "Internet dependent",
          "Limited customization"
        ],
        pricing: "₹166,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "https://www.splunk.com/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹166,000/year",
        perUnitCost: {
          amount: 166000,
          unit: "year",
          period: "yearly"
        },
        icon: FileText
      },
      {
        id: "qradar",
        tier: "premium",
        name: "IBM QRadar SIEM",
        shortDescription: "Enterprise log management",
        description: "IBM QRadar provides comprehensive log management and correlation.",
        pros: [
          "Advanced features",
          "Enterprise-grade",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Starting at ₹830,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.ibm.com",
        pricingPage: "https://www.ibm.com/products/qradar-siem",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹830,000/year",
        perUnitCost: {
          amount: 830000,
          unit: "year",
          period: "yearly"
        },
        icon: FileText
      }
    ]
  },
  {
    id: 24,
    category: "Third-Party Security",
    text: "Are third-party network services assessed for compliance with security policies?",
    description: "Regular assessment of third-party services helps ensure security compliance.",
    helpText: "This includes having proper tools and processes to evaluate third-party service security.",
    icon: ShieldCheck,
    subQuestion: {
      id: "third-party-services",
      text: "Which third-party services are currently used, and what compliance requirements apply?",
      placeholder: "Enter number of services",
      unit: "services",
      defaultValue: 5,
      min: 1,
      max: 50
    },
    recommendations: [
      {
        id: "cis-openscap",
        tier: "open-source",
        name: "CIS Benchmarks and OpenSCAP",
        shortDescription: "Free compliance assessment",
        description: "CIS Benchmarks and OpenSCAP provide free compliance assessment tools.",
        pros: [
          "Free to use",
          "Industry standards",
          "Comprehensive",
          "Community support"
        ],
        cons: [
          "Manual process",
          "Requires expertise",
          "Limited automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.cisecurity.org",
        pricingPage: "https://www.cisecurity.org",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: ShieldCheck
      },
      {
        id: "nessus",
        tier: "standard",
        name: "Nessus Professional",
        shortDescription: "Automated compliance scanning",
        description: "Nessus provides automated vulnerability and compliance scanning capabilities.",
        pros: [
          "Automated scanning",
          "Regular updates",
          "Good support",
          "Comprehensive reports"
        ],
        cons: [
          "Annual subscription",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "₹249,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.tenable.com",
        pricingPage: "https://www.tenable.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹249,000/year",
        perUnitCost: {
          amount: 249000,
          unit: "year",
          period: "yearly"
        },
        icon: ShieldCheck
      },
      {
        id: "cortex-xpanse",
        tier: "premium",
        name: "Palo Alto Cortex Xpanse",
        shortDescription: "Enterprise risk assessment",
        description: "Cortex Xpanse provides automated risk assessment and continuous monitoring.",
        pros: [
          "Advanced features",
          "Real-time monitoring",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.paloaltonetworks.com",
        pricingPage: "https://www.paloaltonetworks.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated security team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: ShieldCheck
      }
    ]
  },
  {
    id: 25,
    category: "System Architecture",
    text: "Are secure system architecture and engineering principles applied and reviewed periodically?",
    description: "Regular security architecture reviews help maintain system security.",
    helpText: "This includes having proper tools and processes for architecture review.",
    icon: Building2,
    subQuestion: {
      id: "last-review",
      text: "When was the last security architecture review conducted?",
      placeholder: "Enter months since last review",
      unit: "months",
      defaultValue: 6,
      min: 1,
      max: 24
    },
    recommendations: [
      {
        id: "owasp-cis",
        tier: "open-source",
        name: "OWASP ASVS and CIS Controls",
        shortDescription: "Free security assessment",
        description: "OWASP ASVS and CIS Controls provide comprehensive security assessment frameworks.",
        pros: [
          "Free to use",
          "Industry standards",
          "Comprehensive",
          "Community support"
        ],
        cons: [
          "Manual process",
          "Requires expertise",
          "Limited automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://owasp.org",
        pricingPage: "https://owasp.org",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Building2
      },
      {
        id: "threatmodeler",
        tier: "standard",
        name: "ThreatModeler",
        shortDescription: "Automated architecture review",
        description: "ThreatModeler provides automated security architecture review capabilities.",
        pros: [
          "Automated assessment",
          "Regular updates",
          "Good support",
          "Comprehensive reports"
        ],
        cons: [
          "Annual subscription",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "₹415,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.threatmodeler.com",
        pricingPage: "https://www.threatmodeler.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹415,000/year",
        perUnitCost: {
          amount: 415000,
          unit: "year",
          period: "yearly"
        },
        icon: Building2
      },
      {
        id: "mandiant",
        tier: "premium",
        name: "Mandiant Security Assessment",
        shortDescription: "Enterprise security assessment",
        description: "Mandiant provides comprehensive security architecture assessment services.",
        pros: [
          "Expert assessment",
          "Comprehensive review",
          "24/7 support",
          "Detailed reporting"
        ],
        cons: [
          "High cost",
          "Scheduling required",
          "Dependent on external vendor"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.mandiant.com",
        pricingPage: "https://www.mandiant.com/services",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Building2
      }
    ]
  },
  {
    id: 26,
    category: "Development Security",
    text: "Are outsourced development activities monitored, with security requirements included in contracts?",
    description: "Monitoring outsourced development helps ensure security compliance.",
    helpText: "This includes having proper tools and processes to monitor external development.",
    icon: Code,
    subQuestion: {
      id: "security-requirements",
      text: "Which security requirements are currently enforced in contracts?",
      placeholder: "Enter number of requirements",
      unit: "requirements",
      defaultValue: 5,
      min: 1,
      max: 50
    },
    recommendations: [
      {
        id: "owasp-samm",
        tier: "open-source",
        name: "OWASP SAMM",
        shortDescription: "Free maturity assessment",
        description: "OWASP SAMM provides a framework for assessing software security maturity.",
        pros: [
          "Free to use",
          "Comprehensive",
          "Regular updates",
          "Community support"
        ],
        cons: [
          "Manual process",
          "Requires expertise",
          "Limited automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://owasp.org",
        pricingPage: "https://owasp.org",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Code
      },
      {
        id: "black-duck",
        tier: "standard",
        name: "Synopsys Black Duck",
        shortDescription: "Open-source security monitoring",
        description: "Black Duck provides automated open-source security monitoring.",
        pros: [
          "Automated scanning",
          "Regular updates",
          "Good support",
          "Comprehensive reports"
        ],
        cons: [
          "Annual subscription",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "₹2,075,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.synopsys.com",
        pricingPage: "https://www.synopsys.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹2,075,000/year",
        perUnitCost: {
          amount: 2075000,
          unit: "year",
          period: "yearly"
        },
        icon: Code
      },
      {
        id: "veracode",
        tier: "premium",
        name: "Veracode",
        shortDescription: "Enterprise security monitoring",
        description: "Veracode provides comprehensive secure development monitoring.",
        pros: [
          "Advanced features",
          "Real-time monitoring",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹4,150,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.veracode.com",
        pricingPage: "https://www.veracode.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated security team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹4,150,000/year",
        perUnitCost: {
          amount: 4150000,
          unit: "year",
          period: "yearly"
        },
        icon: Code
      }
    ]
  },
  {
    id: 27,
    category: "Software Security",
    text: "Are security assessments and testing conducted on externally developed software?",
    description: "Regular security testing of external software helps identify vulnerabilities.",
    helpText: "This includes having proper tools and processes for security testing.",
    icon: Shield,
    subQuestion: {
      id: "testing-frequency",
      text: "How frequently is externally developed software tested?",
      placeholder: "Enter frequency in months",
      unit: "months",
      defaultValue: 3,
      min: 1,
      max: 12
    },
    recommendations: [
      {
        id: "owasp-zap",
        tier: "open-source",
        name: "OWASP ZAP",
        shortDescription: "Free security testing",
        description: "OWASP ZAP provides free security testing capabilities.",
        pros: [
          "Free to use",
          "Comprehensive",
          "Regular updates",
          "Community support"
        ],
        cons: [
          "Manual process",
          "Requires expertise",
          "Limited automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://owasp.org",
        pricingPage: "https://owasp.org",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Shield
      },
      {
        id: "burp-suite",
        tier: "standard",
        name: "Burp Suite Professional",
        shortDescription: "Web security testing",
        description: "Burp Suite provides comprehensive web application security testing.",
        pros: [
          "Automated testing",
          "Regular updates",
          "Good support",
          "Comprehensive reports"
        ],
        cons: [
          "Annual subscription",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "₹33,200/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://portswigger.net",
        pricingPage: "https://portswigger.net/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹33,200/year",
        perUnitCost: {
          amount: 33200,
          unit: "year",
          period: "yearly"
        },
        icon: Shield
      },
      {
        id: "pen-testing",
        tier: "premium",
        name: "Third-Party Penetration Testing",
        shortDescription: "Enterprise security testing",
        description: "Professional penetration testing firm provides comprehensive security testing.",
        pros: [
          "Expert assessment",
          "Comprehensive review",
          "24/7 support",
          "Detailed reporting"
        ],
        cons: [
          "High cost",
          "Scheduling required",
          "Dependent on external vendor"
        ],
        pricing: "Starting at ₹830,000 per test",
        pricingModel: "Per test",
        officialWebsite: "https://www.pentest.com",
        pricingPage: "https://www.pentest.com/services",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Security team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹830,000 per test",
        perUnitCost: {
          amount: 830000,
          unit: "test",
          period: "one-time"
        },
        icon: Shield
      }
    ]
  },
  {
    id: 28,
    category: "Environment Security",
    text: "Are development, testing, and production environments properly segregated and access-controlled?",
    description: "Environment segregation helps maintain security and prevent unauthorized access.",
    helpText: "This includes having proper tools and processes for environment management.",
    icon: GitBranch,
    subQuestion: {
      id: "environment-management",
      text: "How are environments currently managed and segregated?",
      placeholder: "Enter number of environments",
      unit: "environments",
      defaultValue: 3,
      min: 1,
      max: 10
    },
    recommendations: [
      {
        id: "docker-k8s",
        tier: "open-source",
        name: "Docker and Kubernetes",
        shortDescription: "Free environment segregation",
        description: "Docker and Kubernetes provide container-based environment segregation.",
        pros: [
          "Free to use",
          "Highly scalable",
          "Good isolation",
          "Community support"
        ],
        cons: [
          "Complex setup",
          "Requires expertise",
          "Manual management"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.docker.com",
        pricingPage: "https://www.docker.com",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: GitBranch
      },
      {
        id: "vault",
        tier: "standard",
        name: "HashiCorp Vault",
        shortDescription: "Access control management",
        description: "HashiCorp Vault provides secure access control for multi-environment setups.",
        pros: [
          "Good features",
          "Regular updates",
          "Professional support",
          "Cloud integration"
        ],
        cons: [
          "Annual subscription",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "₹415,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.hashicorp.com",
        pricingPage: "https://www.hashicorp.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹415,000/year",
        perUnitCost: {
          amount: 415000,
          unit: "year",
          period: "yearly"
        },
        icon: GitBranch
      },
      {
        id: "cyberark-env",
        tier: "premium",
        name: "CyberArk Environment Access",
        shortDescription: "Enterprise access control",
        description: "CyberArk provides comprehensive privileged access management across environments.",
        pros: [
          "Advanced features",
          "Enterprise-grade",
          "24/7 support",
          "Highly secure"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.cyberark.com",
        pricingPage: "https://www.cyberark.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: GitBranch
      }
    ]
  },
  {
    id: 29,
    category: "Change Management",
    text: "Are changes to information systems subject to formal approval, risk evaluation, and rollback procedures?",
    description: "Proper change management helps maintain system stability and security.",
    helpText: "This includes having formal processes for system changes and risk management.",
    icon: GitBranch,
    subQuestion: {
      id: "change-process",
      text: "Is there a documented change management process in place?",
      placeholder: "Enter number of processes",
      unit: "processes",
      defaultValue: 3,
      min: 1,
      max: 20
    },
    recommendations: [
      {
        id: "git-change",
        tier: "open-source",
        name: "Git Version Control",
        shortDescription: "Free change management",
        description: "Git provides version control and change tracking capabilities.",
        pros: [
          "Free to use",
          "Version control",
          "Change tracking",
          "Community support"
        ],
        cons: [
          "Manual process",
          "Requires expertise",
          "Limited automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://git-scm.com",
        pricingPage: "https://git-scm.com",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: GitBranch
      },
      {
        id: "servicenow-change",
        tier: "standard",
        name: "ServiceNow Change Management",
        shortDescription: "ITIL-based change management",
        description: "ServiceNow provides ITIL-based change management capabilities.",
        pros: [
          "ITIL compliant",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Annual subscription",
          "Complex setup",
          "Resource intensive"
        ],
        pricing: "₹830,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "https://www.servicenow.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹830,000/year",
        perUnitCost: {
          amount: 830000,
          unit: "year",
          period: "yearly"
        },
        icon: GitBranch
      },
      {
        id: "jira-change",
        tier: "premium",
        name: "Jira Service Management",
        shortDescription: "Automated change management",
        description: "Jira Service Management provides automated change management workflows.",
        pros: [
          "Automated workflows",
          "Easy integration",
          "24/7 support",
          "Highly customizable"
        ],
        cons: [
          "Monthly subscription",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹1,660/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://www.atlassian.com",
        pricingPage: "https://www.atlassian.com/software/jira/service-management/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,660/user/month",
        perUnitCost: {
          amount: 1660,
          unit: "user",
          period: "monthly"
        },
        icon: GitBranch
      }
    ]
  },
  {
    id: 30,
    category: "Data Protection",
    text: "Is test information anonymized, protected, and securely disposed of after testing?",
    description: "Proper test data management helps protect sensitive information.",
    helpText: "This includes having proper tools for data masking and secure disposal.",
    icon: Shield,
    subQuestion: {
      id: "data-processes",
      text: "What processes are in place for data masking and disposal after testing?",
      placeholder: "Enter number of processes",
      unit: "processes",
      defaultValue: 3,
      min: 1,
      max: 20
    },
    recommendations: [
      {
        id: "faker-dbforge",
        tier: "open-source",
        name: "Faker and dbForge",
        shortDescription: "Free test data management",
        description: "Faker and dbForge provide test data generation capabilities.",
        pros: [
          "Free to use",
          "Easy integration",
          "Customizable data",
          "Community support"
        ],
        cons: [
          "Manual setup",
          "Limited features",
          "Basic data types"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://fakerjs.dev",
        pricingPage: "https://fakerjs.dev",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Development team",
        organizationSize: "Any",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Shield
      },
      {
        id: "informatica",
        tier: "standard",
        name: "Informatica Data Masking",
        shortDescription: "Enterprise data masking",
        description: "Informatica provides comprehensive data masking capabilities.",
        pros: [
          "Enterprise-grade",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Complex setup",
          "High cost",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.informatica.com",
        pricingPage: "https://www.informatica.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Shield
      },
      {
        id: "delphix",
        tier: "premium",
        name: "Delphix Dynamic Data Platform",
        shortDescription: "Advanced test data management",
        description: "Delphix provides automated test data management capabilities.",
        pros: [
          "Automated management",
          "Advanced features",
          "24/7 support",
          "Highly secure"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹4,150,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.delphix.com",
        pricingPage: "https://www.delphix.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹4,150,000/year",
        perUnitCost: {
          amount: 4150000,
          unit: "year",
          period: "yearly"
        },
        icon: Shield
      }
    ]
  },
  {
    id: 31,
    category: "Security Management",
    text: "Are security audit findings tracked and remediated to improve information security?",
    description: "Proper tracking and remediation of security findings helps maintain system security.",
    helpText: "This includes having proper tools for tracking and managing security issues.",
    icon: ShieldCheck,
    subQuestion: {
      id: "audit-management",
      text: "How are security audit findings currently managed and addressed?",
      placeholder: "Enter number of processes",
      unit: "processes",
      defaultValue: 3,
      min: 1,
      max: 20
    },
    recommendations: [
      {
        id: "ossec",
        tier: "open-source",
        name: "OSSEC",
        shortDescription: "Free security monitoring",
        description: "OSSEC provides security event monitoring and tracking capabilities.",
        pros: [
          "Free to use",
          "Real-time monitoring",
          "Event tracking",
          "Community support"
        ],
        cons: [
          "Manual setup",
          "Limited features",
          "Basic reporting"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.ossec.net",
        pricingPage: "https://www.ossec.net",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Any",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: ShieldCheck
      },
      {
        id: "jira-security",
        tier: "standard",
        name: "Jira Service Management",
        shortDescription: "Security issue tracking",
        description: "Jira Service Management provides security issue tracking capabilities.",
        pros: [
          "Good features",
          "Regular updates",
          "Professional support",
          "Cloud-based"
        ],
        cons: [
          "Monthly subscription",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "₹1,660/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://www.atlassian.com",
        pricingPage: "https://www.atlassian.com/software/jira/service-management/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,660/user/month",
        perUnitCost: {
          amount: 1660,
          unit: "user",
          period: "monthly"
        },
        icon: ShieldCheck
      },
      {
        id: "servicenow-security",
        tier: "premium",
        name: "ServiceNow Security Operations",
        shortDescription: "Enterprise security management",
        description: "ServiceNow provides comprehensive security operations management.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹830,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "https://www.servicenow.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated security team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹830,000/year",
        perUnitCost: {
          amount: 830000,
          unit: "year",
          period: "yearly"
        },
        icon: ShieldCheck
      }
    ]
  },
  {
    id: 32,
    category: "Physical Security",
    text: "Are security measures in place for working in secure areas, including access restrictions and monitoring?",
    description: "Proper physical security measures help protect sensitive areas.",
    helpText: "This includes having proper access control and monitoring systems.",
    icon: Lock,
    subQuestion: {
      id: "secure-areas",
      text: "How many secure areas need physical access control measures?",
      placeholder: "Enter number of areas",
      unit: "areas",
      defaultValue: 5,
      min: 1,
      max: 50
    },
    recommendations: [
      {
        id: "hid-rfid",
        tier: "standard",
        name: "HID Global RFID Access Control",
        shortDescription: "RFID-based access control",
        description: "HID Global provides RFID-based access control systems.",
        pros: [
          "Cost-effective",
          "Easy to use",
          "Good support",
          "Regular updates"
        ],
        cons: [
          "Basic features",
          "Limited integration",
          "Manual maintenance"
        ],
        pricing: "₹41,500/door",
        pricingModel: "Per door",
        officialWebsite: "https://www.hidglobal.com",
        pricingPage: "https://www.hidglobal.com/products",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹41,500/door",
        perUnitCost: {
          amount: 41500,
          unit: "door",
          period: "one-time"
        },
        icon: Lock
      },
      {
        id: "zkteco-biometric",
        tier: "premium",
        name: "ZKTeco Biometric Access Control",
        shortDescription: "Biometric access control",
        description: "ZKTeco provides biometric access control solutions.",
        pros: [
          "Advanced features",
          "Highly secure",
          "24/7 support",
          "Enterprise-grade"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹83,000/entry point",
        pricingModel: "Per entry point",
        officialWebsite: "https://www.zkteco.in",
        pricingPage: "https://www.zkteco.in/products",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Medium to large",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹83,000/entry point",
        perUnitCost: {
          amount: 83000,
          unit: "entry point",
          period: "one-time"
        },
        icon: Lock
      }
    ]
  },
  {
    id: 33,
    category: "Physical Security",
    text: "Are employees and visitors required to follow specific security procedures when entering secure areas?",
    description: "Proper visitor management helps maintain security in secure areas.",
    helpText: "This includes having proper visitor management systems and procedures.",
    icon: Users,
    subQuestion: {
      id: "visitor-management",
      text: "Is there a visitor management system or security policy in place?",
      placeholder: "Enter number of policies",
      unit: "policies",
      defaultValue: 3,
      min: 1,
      max: 20
    },
    recommendations: [
      {
        id: "envoy",
        tier: "standard",
        name: "Envoy Visitor Management",
        shortDescription: "Visitor management system",
        description: "Envoy provides visitor management capabilities.",
        pros: [
          "Easy to use",
          "Good features",
          "Regular updates",
          "Cloud-based"
        ],
        cons: [
          "Monthly subscription",
          "Limited customization",
          "Internet dependent"
        ],
        pricing: "₹8,300/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://envoy.com",
        pricingPage: "https://envoy.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹8,300/month",
        perUnitCost: {
          amount: 8300,
          unit: "month",
          period: "monthly"
        },
        icon: Users
      },
      {
        id: "verkada",
        tier: "premium",
        name: "Verkada Visitor Management",
        shortDescription: "Facial recognition visitor management",
        description: "Verkada provides CCTV-based facial recognition visitor management.",
        pros: [
          "Advanced features",
          "Facial recognition",
          "24/7 support",
          "Highly secure"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.verkada.com",
        pricingPage: "https://www.verkada.com/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large enterprises",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Users
      }
    ]
  },
  {
    id: 34,
    category: "Physical Security",
    text: "Are clear desk and clear screen policies defined and enforced to prevent unauthorized access to information?",
    description: "Clear desk and screen policies help prevent unauthorized access to sensitive information.",
    helpText: "This includes having proper policies and tools for enforcing clear desk and screen practices.",
    icon: Monitor,
    subQuestion: {
      id: "policy-awareness",
      text: "Are employees aware of the importance of clear desk and screen policies?",
      placeholder: "Enter awareness level (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "knowbe4",
        tier: "standard",
        name: "KnowBe4 Security Awareness Training",
        shortDescription: "Security awareness training",
        description: "KnowBe4 provides comprehensive security awareness training.",
        pros: [
          "Comprehensive training",
          "Regular updates",
          "Good support",
          "Easy to use"
        ],
        cons: [
          "Annual subscription",
          "Limited customization",
          "Internet dependent"
        ],
        pricing: "₹830/user/year",
        pricingModel: "Per user annually",
        officialWebsite: "https://www.knowbe4.com",
        pricingPage: "https://www.knowbe4.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹830/user/year",
        perUnitCost: {
          amount: 830,
          unit: "user",
          period: "yearly"
        },
        icon: Monitor
      },
      {
        id: "microsoft-intune",
        tier: "premium",
        name: "Microsoft Intune",
        shortDescription: "Policy enforcement",
        description: "Microsoft Intune provides automated policy enforcement capabilities.",
        pros: [
          "Automated enforcement",
          "Cloud-based",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "Monthly subscription",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹664/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹664/user/month",
        perUnitCost: {
          amount: 664,
          unit: "user",
          period: "monthly"
        },
        icon: Monitor
      }
    ]
  },
  {
    id: 35,
    category: "Physical Security",
    text: "Are employees trained and required to lock screens and store sensitive materials securely when unattended?",
    description: "Proper screen locking and material storage helps prevent unauthorized access.",
    helpText: "This includes having proper training and enforcement mechanisms.",
    icon: Lock,
    subQuestion: {
      id: "training-program",
      text: "Is there a security awareness training program in place?",
      placeholder: "Enter program maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "staysafeonline",
        tier: "standard",
        name: "StaySafeOnline Training",
        shortDescription: "Free security training",
        description: "StaySafeOnline provides free security awareness training resources.",
        pros: [
          "Free to use",
          "Comprehensive content",
          "Regular updates",
          "Community support"
        ],
        cons: [
          "Manual delivery",
          "Limited tracking",
          "Basic features"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://staysafeonline.org",
        pricingPage: "https://staysafeonline.org",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Any",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Lock
      },
      {
        id: "microsoft-endpoint",
        tier: "premium",
        name: "Microsoft Endpoint Manager",
        shortDescription: "Policy enforcement",
        description: "Microsoft Endpoint Manager provides automated policy enforcement.",
        pros: [
          "Automated enforcement",
          "Cloud-based",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "Monthly subscription",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹830/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹830/user/month",
        perUnitCost: {
          amount: 830,
          unit: "user",
          period: "monthly"
        },
        icon: Lock
      }
    ]
  },
  {
    id: 36,
    category: "Endpoint Security",
    text: "Are endpoints configured to automatically lock or blank the screen after 1 minute of inactivity to prevent unauthorized access?",
    description: "Automatic screen locking helps prevent unauthorized access to endpoints.",
    helpText: "This includes having proper technical controls and policies in place.",
    icon: Monitor,
    subQuestion: {
      id: "technical-restrictions",
      text: "Are there any technical or policy restrictions preventing auto-lock implementation?",
      placeholder: "Enter number of restrictions",
      unit: "restrictions",
      defaultValue: 0,
      min: 0,
      max: 10
    },
    recommendations: [
      {
        id: "group-policy",
        tier: "standard",
        name: "Windows Group Policy",
        shortDescription: "Screen lock enforcement",
        description: "Windows Group Policy provides built-in screen lock capabilities.",
        pros: [
          "Free to use",
          "Built-in feature",
          "Easy to configure",
          "Regular updates"
        ],
        cons: [
          "Windows only",
          "Limited customization",
          "Manual setup"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Monitor
      },
      {
        id: "mdm-solution",
        tier: "premium",
        name: "MDM Solution",
        shortDescription: "Device management",
        description: "MDM solutions provide comprehensive device management capabilities.",
        pros: [
          "Cross-platform",
          "Advanced features",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "Monthly subscription",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹664/device/month",
        pricingModel: "Per device monthly",
        officialWebsite: "https://www.jamf.com",
        pricingPage: "https://www.jamf.com/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹664/device/month",
        perUnitCost: {
          amount: 664,
          unit: "device",
          period: "monthly"
        },
        icon: Monitor
      }
    ]
  },
  {
    id: 37,
    category: "Data Security",
    text: "Is storage media securely managed throughout its lifecycle, including acquisition, usage, transportation, and disposal?",
    description: "Proper storage media management helps protect sensitive information.",
    helpText: "This includes having proper tools and processes for media management.",
    icon: HardDrive,
    subQuestion: {
      id: "data-storage",
      text: "How is sensitive data currently stored and disposed of?",
      placeholder: "Enter number of processes",
      unit: "processes",
      defaultValue: 3,
      min: 1,
      max: 20
    },
    recommendations: [
      {
        id: "bitlocker",
        tier: "standard",
        name: "BitLocker/FileVault",
        shortDescription: "Disk encryption",
        description: "Built-in disk encryption for Windows and Mac systems.",
        pros: [
          "Free to use",
          "Built-in feature",
          "Easy to configure",
          "Regular updates"
        ],
        cons: [
          "OS specific",
          "Limited features",
          "Manual setup"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: HardDrive
      },
      {
        id: "iron-mountain",
        tier: "premium",
        name: "Iron Mountain",
        shortDescription: "Secure storage and destruction",
        description: "Iron Mountain provides enterprise-grade secure storage and destruction services.",
        pros: [
          "Enterprise-grade",
          "Comprehensive service",
          "24/7 support",
          "Highly secure"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires contracting"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.ironmountain.com",
        pricingPage: "https://www.ironmountain.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: HardDrive
      }
    ]
  },
  {
    id: 38,
    category: "Data Security",
    text: "Are there clear rules and processes to ensure sensitive data is stored safely and shared securely?",
    description: "Proper data storage and sharing policies help protect sensitive information.",
    helpText: "This includes having proper tools and processes for data management.",
    icon: Share2,
    subQuestion: {
      id: "data-tools",
      text: "What tools are currently used for secure data storage and sharing?",
      placeholder: "Enter number of tools",
      unit: "tools",
      defaultValue: 3,
      min: 1,
      max: 20
    },
    recommendations: [
      {
        id: "onedrive-dlp",
        tier: "standard",
        name: "Microsoft OneDrive with DLP",
        shortDescription: "Secure file storage",
        description: "Microsoft OneDrive provides secure file storage with DLP capabilities.",
        pros: [
          "Integrated with M365",
          "Good features",
          "Regular updates",
          "Cloud-based"
        ],
        cons: [
          "Monthly subscription",
          "Limited customization",
          "Internet dependent"
        ],
        pricing: "₹1,040/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹1,040/user/month",
        perUnitCost: {
          amount: 1040,
          unit: "user",
          period: "monthly"
        },
        icon: Share2
      },
      {
        id: "forcepoint-dlp",
        tier: "premium",
        name: "Forcepoint DLP",
        shortDescription: "Enterprise DLP",
        description: "Forcepoint provides enterprise-grade data loss prevention capabilities.",
        pros: [
          "Advanced features",
          "Comprehensive protection",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "₹4,150/user/year",
        pricingModel: "Per user annually",
        officialWebsite: "https://www.forcepoint.com",
        pricingPage: "https://www.forcepoint.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹4,150/user/year",
        perUnitCost: {
          amount: 4150,
          unit: "user",
          period: "yearly"
        },
        icon: Share2
      }
    ]
  },
  {
    id: 39,
    category: "Infrastructure Security",
    text: "Are information processing facilities protected from power failures with backup solutions like UPS or generators?",
    description: "Power backup solutions help maintain system availability during outages.",
    helpText: "This includes having proper backup power solutions for critical infrastructure.",
    icon: Zap,
    subQuestion: {
      id: "infrastructure-location",
      text: "Does your company host critical infrastructure on-premises or rely on cloud services?",
      placeholder: "Enter infrastructure type",
      unit: "type",
      defaultValue: 1,
      min: 1,
      max: 2
    },
    recommendations: [
      {
        id: "apc-ups",
        tier: "standard",
        name: "APC Smart-UPS",
        shortDescription: "Essential power backup",
        description: "APC Smart-UPS provides reliable power backup for essential infrastructure.",
        pros: [
          "Cost-effective",
          "Easy to install",
          "Good support",
          "Regular updates"
        ],
        cons: [
          "Limited runtime",
          "Basic features",
          "Manual maintenance"
        ],
        pricing: "₹41,500/unit",
        pricingModel: "Per unit",
        officialWebsite: "https://www.apc.com",
        pricingPage: "https://www.apc.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹41,500/unit",
        perUnitCost: {
          amount: 41500,
          unit: "unit",
          period: "one-time"
        },
        icon: Zap
      },
      {
        id: "generac",
        tier: "premium",
        name: "Generac Data Center Backup",
        shortDescription: "Full-scale backup solution",
        description: "Generac provides comprehensive data center backup solutions.",
        pros: [
          "Long runtime",
          "Advanced features",
          "24/7 support",
          "Highly reliable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires maintenance"
        ],
        pricing: "₹830,000+",
        pricingModel: "One-time purchase",
        officialWebsite: "https://www.generac.com",
        pricingPage: "https://www.generac.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹830,000+",
        perUnitCost: {
          amount: 830000,
          unit: "solution",
          period: "one-time"
        },
        icon: Zap
      }
    ]
  },
  {
    id: 40,
    category: "Infrastructure Security",
    text: "Are measures in place to prevent disruptions from failures in supporting utilities such as cooling, water, or internet connectivity?",
    description: "Utility protection helps maintain system availability and reliability.",
    helpText: "This includes having proper backup solutions for critical utilities.",
    icon: Wifi,
    subQuestion: {
      id: "critical-utilities",
      text: "Which supporting utilities are most critical to business operations?",
      placeholder: "Enter number of utilities",
      unit: "utilities",
      defaultValue: 3,
      min: 1,
      max: 10
    },
    recommendations: [
      {
        id: "sd-wan",
        tier: "standard",
        name: "SD-WAN with 4G/5G Backup",
        shortDescription: "Cloud-based failover",
        description: "SD-WAN provides reliable internet connectivity with backup options.",
        pros: [
          "Cost-effective",
          "Easy to implement",
          "Good support",
          "Regular updates"
        ],
        cons: [
          "Monthly subscription",
          "Limited bandwidth",
          "Dependent on cellular"
        ],
        pricing: "₹16,600/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.cisco.com",
        pricingPage: "https://www.cisco.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹16,600/month",
        perUnitCost: {
          amount: 16600,
          unit: "month",
          period: "monthly"
        },
        icon: Wifi
      },
      {
        id: "liebert",
        tier: "premium",
        name: "Liebert Precision Cooling",
        shortDescription: "Redundant cooling solution",
        description: "Liebert provides enterprise-grade precision cooling solutions.",
        pros: [
          "Highly reliable",
          "Advanced features",
          "24/7 support",
          "Energy efficient"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires maintenance"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.vertiv.com",
        pricingPage: "https://www.vertiv.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Wifi
      }
    ]
  },
  {
    id: 41,
    category: "Equipment Management",
    text: "Is equipment regularly maintained to ensure availability, integrity, and confidentiality of information?",
    description: "Regular equipment maintenance helps maintain system reliability and security.",
    helpText: "This includes having proper maintenance procedures and tools in place.",
    icon: Wrench,
    subQuestion: {
      id: "maintenance-frequency",
      text: "How often is IT equipment inspected and maintained?",
      placeholder: "Enter frequency in months",
      unit: "months",
      defaultValue: 3,
      min: 1,
      max: 12
    },
    recommendations: [
      {
        id: "servicenow-itsm",
        tier: "standard",
        name: "ServiceNow ITSM",
        shortDescription: "Asset management",
        description: "ServiceNow provides comprehensive IT service management capabilities.",
        pros: [
          "Good features",
          "Regular updates",
          "Professional support",
          "Cloud-based"
        ],
        cons: [
          "Annual subscription",
          "Complex setup",
          "Resource intensive"
        ],
        pricing: "₹830,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "https://www.servicenow.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹830,000/year",
        perUnitCost: {
          amount: 830000,
          unit: "year",
          period: "yearly"
        },
        icon: Wrench
      },
      {
        id: "ibm-maximo",
        tier: "premium",
        name: "IBM Maximo",
        shortDescription: "AI-driven maintenance",
        description: "IBM Maximo provides AI-driven predictive maintenance capabilities.",
        pros: [
          "Advanced features",
          "AI-powered",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.ibm.com",
        pricingPage: "https://www.ibm.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Wrench
      }
    ]
  },
  {
    id: 42,
    category: "Maintenance Security",
    text: "Are maintenance activities performed securely to prevent unauthorized access or tampering?",
    description: "Secure maintenance procedures help protect system integrity.",
    helpText: "This includes having proper access controls and monitoring for maintenance activities.",
    icon: Lock,
    subQuestion: {
      id: "maintenance-monitoring",
      text: "How are maintenance activities currently logged and monitored for security risks?",
      placeholder: "Enter number of processes",
      unit: "processes",
      defaultValue: 3,
      min: 1,
      max: 20
    },
    recommendations: [
      {
        id: "jira-maintenance",
        tier: "standard",
        name: "Jira Service Management",
        shortDescription: "Change management",
        description: "Jira Service Management provides change management capabilities.",
        pros: [
          "Good features",
          "Regular updates",
          "Professional support",
          "Cloud-based"
        ],
        cons: [
          "Monthly subscription",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "₹1,660/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://www.atlassian.com",
        pricingPage: "https://www.atlassian.com/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,660/user/month",
        perUnitCost: {
          amount: 1660,
          unit: "user",
          period: "monthly"
        },
        icon: Lock
      },
      {
        id: "cyberark-pam",
        tier: "premium",
        name: "CyberArk PAM",
        shortDescription: "Privileged access management",
        description: "CyberArk provides comprehensive privileged access management.",
        pros: [
          "Advanced features",
          "Highly secure",
          "24/7 support",
          "Enterprise-grade"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.cyberark.com",
        pricingPage: "https://www.cyberark.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Lock
      }
    ]
  },
  {
    id: 43,
    category: "Data Disposal",
    text: "Are items of equipment containing storage media securely wiped, overwritten, or destroyed before disposal or reuse?",
    description: "Secure media disposal helps prevent data breaches.",
    helpText: "This includes having proper tools and processes for media sanitization.",
    icon: Trash2,
    subQuestion: {
      id: "sanitization-method",
      text: "What method is currently used for data sanitization?",
      placeholder: "Enter number of methods",
      unit: "methods",
      defaultValue: 1,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "dban",
        tier: "standard",
        name: "DBAN",
        shortDescription: "Secure erasure",
        description: "DBAN provides secure data wiping capabilities.",
        pros: [
          "Free to use",
          "Easy to use",
          "Regular updates",
          "Community support"
        ],
        cons: [
          "Manual process",
          "Limited features",
          "Time-consuming"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://dban.org",
        pricingPage: "https://dban.org",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Trash2
      },
      {
        id: "iron-mountain-disposal",
        tier: "premium",
        name: "Iron Mountain Media Destruction",
        shortDescription: "Certified disposal service",
        description: "Iron Mountain provides certified media destruction services.",
        pros: [
          "Certified service",
          "Comprehensive solution",
          "24/7 support",
          "Highly secure"
        ],
        cons: [
          "Volume-based pricing",
          "Location dependent",
          "Requires contracting"
        ],
        pricing: "Based on volume",
        pricingModel: "Volume-based",
        officialWebsite: "https://www.ironmountain.com",
        pricingPage: "https://www.ironmountain.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "Based on volume",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Trash2
      }
    ]
  },
  {
    id: 44,
    category: "Asset Management",
    text: "Is licensed software removed from devices before disposal to prevent unauthorized use?",
    description: "Proper software removal helps prevent unauthorized use and license violations.",
    helpText: "This includes having proper tools and processes for software decommissioning.",
    icon: Trash2,
    subQuestion: {
      id: "decommissioning-process",
      text: "Is there an asset decommissioning process in place?",
      placeholder: "Enter process maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "sccm-intune",
        tier: "standard",
        name: "SCCM/Intune",
        shortDescription: "Automated software removal",
        description: "SCCM and Intune provide automated software removal capabilities.",
        pros: [
          "Integrated with M365",
          "Good features",
          "Regular updates",
          "Cloud-based"
        ],
        cons: [
          "Requires E3 license",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "Included with M365 E3",
        pricingModel: "Included in license",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "Included with M365 E3",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Trash2
      },
      {
        id: "servicenow-itam",
        tier: "premium",
        name: "ServiceNow IT Asset Management",
        shortDescription: "Enterprise asset management",
        description: "ServiceNow provides comprehensive IT asset management capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "https://www.servicenow.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Trash2
      }
    ]
  },
  {
    id: 45,
    category: "Personnel Security",
    text: "Are background verification checks conducted before hiring and periodically afterward, considering legal, ethical, and business requirements?",
    description: "Background verification helps ensure personnel security and compliance.",
    helpText: "This includes having proper processes and tools for background screening.",
    icon: UserCheck,
    subQuestion: {
      id: "background-policy",
      text: "Is there a policy in place for employee background screening?",
      placeholder: "Enter policy maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "checkr",
        tier: "standard",
        name: "Checkr Background Screening",
        shortDescription: "Background verification",
        description: "Checkr provides comprehensive background screening services.",
        pros: [
          "Cost-effective",
          "Easy to use",
          "Good support",
          "Regular updates"
        ],
        cons: [
          "Per-employee cost",
          "Limited features",
          "Manual process"
        ],
        pricing: "₹2,490-8,300/employee",
        pricingModel: "Per employee",
        officialWebsite: "https://checkr.com",
        pricingPage: "https://checkr.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹2,490-8,300/employee",
        perUnitCost: {
          amount: 8300,
          unit: "employee",
          period: "one-time"
        },
        icon: UserCheck
      },
      {
        id: "equifax-workforce",
        tier: "premium",
        name: "Equifax Workforce Solutions",
        shortDescription: "Continuous monitoring",
        description: "Equifax provides continuous employee risk monitoring capabilities.",
        pros: [
          "Continuous monitoring",
          "Advanced features",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Based on company size",
        pricingModel: "Custom",
        officialWebsite: "https://www.equifax.com",
        pricingPage: "https://www.equifax.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated HR team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "Based on company size",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: UserCheck
      }
    ]
  },
  {
    id: 46,
    category: "Personnel Security",
    text: "Do employment contracts clearly define both personnel and organizational responsibilities for information security?",
    description: "Clear security responsibilities help maintain organizational security.",
    helpText: "This includes having proper documentation and enforcement mechanisms.",
    icon: FileText,
    subQuestion: {
      id: "security-clause",
      text: "Do employment contracts include an information security clause?",
      placeholder: "Enter clause maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "contract-update",
        tier: "standard",
        name: "Contract Security Clause Update",
        shortDescription: "Security obligations",
        description: "Update employment contracts to include explicit security obligations.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Legal review required"
        ],
        pricing: "Internal HR/legal review required",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR and Legal teams",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "Medium",
        estimatedCostRange: "Internal effort",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: FileText
      },
      {
        id: "workday",
        tier: "premium",
        name: "Workday HR Compliance",
        shortDescription: "HR compliance management",
        description: "Workday provides HR compliance and policy management capabilities.",
        pros: [
          "Automated enforcement",
          "Advanced features",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.workday.com",
        pricingPage: "https://www.workday.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated HR team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: FileText
      }
    ]
  },
  {
    id: 47,
    category: "Personnel Security",
    text: "Is there a formalized and communicated disciplinary process to address violations of information security policies?",
    description: "Proper disciplinary processes help enforce security policies.",
    helpText: "This includes having proper documentation and enforcement mechanisms.",
    icon: AlertTriangle,
    subQuestion: {
      id: "violation-handling",
      text: "How are security policy violations currently handled?",
      placeholder: "Enter process maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "handbook-policy",
        tier: "standard",
        name: "Security Violation Policy",
        shortDescription: "Policy documentation",
        description: "Develop and communicate an official security violation policy.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited tracking"
        ],
        pricing: "Internal HR effort",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "Medium",
        estimatedCostRange: "Internal effort",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: AlertTriangle
      },
      {
        id: "bamboohr",
        tier: "premium",
        name: "BambooHR Case Management",
        shortDescription: "Incident tracking",
        description: "BambooHR provides case management capabilities for tracking incidents.",
        pros: [
          "Automated tracking",
          "Good features",
          "Regular updates",
          "Cloud-based"
        ],
        cons: [
          "Monthly subscription",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "₹664-1,245/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://www.bamboohr.com",
        pricingPage: "https://www.bamboohr.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹664-1,245/user/month",
        perUnitCost: {
          amount: 1245,
          unit: "user",
          period: "monthly"
        },
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 48,
    category: "Personnel Security",
    text: "Are information security responsibilities enforced and communicated to personnel after termination or role changes?",
    description: "Proper offboarding processes help maintain security after personnel changes.",
    helpText: "This includes having proper tools and processes for access management.",
    icon: UserX,
    subQuestion: {
      id: "offboarding-process",
      text: "Is there a formal offboarding process for employees?",
      placeholder: "Enter process maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "okta",
        tier: "standard",
        name: "Okta Access Management",
        shortDescription: "Account deactivation",
        description: "Okta provides automated account deactivation capabilities.",
        pros: [
          "Automated process",
          "Good features",
          "Regular updates",
          "Cloud-based"
        ],
        cons: [
          "Monthly subscription",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "₹498-1,245/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://www.okta.com",
        pricingPage: "https://www.okta.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹498-1,245/user/month",
        perUnitCost: {
          amount: 1245,
          unit: "user",
          period: "monthly"
        },
        icon: UserX
      },
      {
        id: "servicenow-security",
        tier: "premium",
        name: "ServiceNow Security Operations",
        shortDescription: "Security clearance tracking",
        description: "ServiceNow provides security clearance revocation tracking capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "https://www.servicenow.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: UserX
      }
    ]
  },
  {
    id: 49,
    category: "Personnel Security",
    text: "Are confidentiality or non-disclosure agreements documented, reviewed regularly, and signed by personnel and relevant parties?",
    description: "Proper NDA management helps protect sensitive information.",
    helpText: "This includes having proper documentation and review processes.",
    icon: FileText,
    subQuestion: {
      id: "nda-requirement",
      text: "Are NDAs required for all employees and contractors?",
      placeholder: "Enter coverage level (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "docusign",
        tier: "standard",
        name: "DocuSign",
        shortDescription: "Digital signatures",
        description: "DocuSign provides digital signature capabilities for NDAs.",
        pros: [
          "Easy to use",
          "Good features",
          "Regular updates",
          "Cloud-based"
        ],
        cons: [
          "Monthly subscription",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "₹830-2,075/user/month",
        pricingModel: "Per user monthly",
        officialWebsite: "https://www.docusign.com",
        pricingPage: "https://www.docusign.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹830-2,075/user/month",
        perUnitCost: {
          amount: 2075,
          unit: "user",
          period: "monthly"
        },
        icon: FileText
      },
      {
        id: "ironclad",
        tier: "premium",
        name: "Ironclad",
        shortDescription: "AI contract management",
        description: "Ironclad provides AI-powered contract management capabilities.",
        pros: [
          "AI-powered",
          "Advanced features",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://ironcladapp.com",
        pricingPage: "https://ironcladapp.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated HR team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: FileText
      }
    ]
  },
  {
    id: 50,
    category: "Security Operations",
    text: "Is there a mechanism for personnel to report observed or suspected security incidents in a timely manner?",
    description: "Proper incident reporting helps maintain security awareness.",
    helpText: "This includes having proper tools and processes for reporting.",
    icon: AlertTriangle,
    subQuestion: {
      id: "incident-reporting",
      text: "How are security incidents currently reported?",
      placeholder: "Enter process maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "google-forms",
        tier: "standard",
        name: "Google Forms",
        shortDescription: "Anonymous reporting",
        description: "Google Forms provides anonymous reporting capabilities.",
        pros: [
          "Free to use",
          "Easy to set up",
          "Good features",
          "Cloud-based"
        ],
        cons: [
          "Limited features",
          "Basic security",
          "Manual process"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://forms.google.com",
        pricingPage: "https://forms.google.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "Free",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: AlertTriangle
      },
      {
        id: "splunk-soar",
        tier: "premium",
        name: "Splunk SOAR",
        shortDescription: "Security operations",
        description: "Splunk SOAR provides comprehensive security operations capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "https://www.splunk.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 51,
    category: "Security Governance",
    text: "Are information security policies defined, approved, communicated, acknowledged, and reviewed regularly?",
    description: "Regular policy reviews help maintain security effectiveness.",
    helpText: "This includes having proper documentation and review processes.",
    icon: FileText,
    subQuestion: {
      id: "policy-review",
      text: "When was the last security policy review?",
      placeholder: "Enter review maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "google-drive",
        tier: "standard",
        name: "Google Drive",
        shortDescription: "Policy management",
        description: "Google Drive provides document management capabilities.",
        pros: [
          "Free to use",
          "Easy to set up",
          "Good features",
          "Cloud-based"
        ],
        cons: [
          "Limited features",
          "Basic security",
          "Manual process"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://drive.google.com",
        pricingPage: "https://drive.google.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "Free",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: FileText
      },
      {
        id: "logicgate",
        tier: "premium",
        name: "LogicGate",
        shortDescription: "Policy management",
        description: "LogicGate provides comprehensive policy management capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.logicgate.com",
        pricingPage: "https://www.logicgate.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: FileText
      }
    ]
  },
  {
    id: 52,
    category: "Security Governance",
    text: "Are information security roles and responsibilities clearly defined and assigned based on organizational needs?",
    description: "Clear role definitions help maintain security effectiveness.",
    helpText: "This includes having proper documentation and assignment processes.",
    icon: Users,
    subQuestion: {
      id: "security-governance",
      text: "Is there a formal security governance structure in place?",
      placeholder: "Enter structure maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "policy-documentation",
        tier: "standard",
        name: "Security Role Documentation",
        shortDescription: "Role definitions",
        description: "Document security roles in organizational policies.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited tracking"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR and IT teams",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "Medium",
        estimatedCostRange: "Internal effort",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: Users
      },
      {
        id: "archer",
        tier: "premium",
        name: "Archer GRC",
        shortDescription: "Governance platform",
        description: "Archer provides comprehensive governance capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.archerirm.com",
        pricingPage: "https://www.archerirm.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Users
      }
    ]
  },
  {
    id: 53,
    category: "Security Governance",
    text: "Are conflicting duties and responsibilities identified and segregated to prevent security risks?",
    description: "Proper segregation of duties helps prevent security risks.",
    helpText: "This includes having proper tools and processes for role management.",
    icon: Lock,
    subQuestion: {
      id: "role-conflicts",
      text: "How are roles and responsibilities currently assigned to prevent conflicts of interest?",
      placeholder: "Enter segregation maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "rbac",
        tier: "standard",
        name: "Role-Based Access Control",
        shortDescription: "Access management",
        description: "Implement RBAC in identity management solutions.",
        pros: [
          "Cost-effective",
          "Good features",
          "Regular updates",
          "Cloud-based"
        ],
        cons: [
          "Requires license",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "Included in identity management",
        pricingModel: "Included in license",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "Included in identity management",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Lock
      },
      {
        id: "erp-maestro",
        tier: "premium",
        name: "ERP Maestro",
        shortDescription: "SoD monitoring",
        description: "ERP Maestro provides SoD monitoring capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.erpmaestro.com",
        pricingPage: "https://www.erpmaestro.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Lock
      }
    ]
  },
  {
    id: 54,
    category: "Security Governance",
    text: "Are all personnel required to apply and follow the organization's information security policies and procedures?",
    description: "Proper policy compliance helps maintain organizational security.",
    helpText: "This includes having proper training and enforcement mechanisms.",
    icon: Shield,
    subQuestion: {
      id: "policy-acknowledgment",
      text: "Are security policies formally documented and acknowledged by employees?",
      placeholder: "Enter acknowledgment level (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "knowbe4",
        tier: "standard",
        name: "KnowBe4",
        shortDescription: "Security awareness",
        description: "KnowBe4 provides security awareness training capabilities.",
        pros: [
          "Cost-effective",
          "Good features",
          "Regular updates",
          "Cloud-based"
        ],
        cons: [
          "Annual subscription",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "₹1,660-2,490/user/year",
        pricingModel: "Per user yearly",
        officialWebsite: "https://www.knowbe4.com",
        pricingPage: "https://www.knowbe4.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹1,660-2,490/user/year",
        perUnitCost: {
          amount: 2490,
          unit: "user",
          period: "yearly"
        },
        icon: Shield
      },
      {
        id: "logicgate",
        tier: "premium",
        name: "LogicGate",
        shortDescription: "Policy compliance",
        description: "LogicGate provides comprehensive policy compliance capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.logicgate.com",
        pricingPage: "https://www.logicgate.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Shield
      }
    ]
  },
  {
    id: 55,
    category: "Security Governance",
    text: "Does the organization establish and maintain contact with relevant legal, regulatory, or law enforcement authorities?",
    description: "Proper regulatory contact helps maintain compliance.",
    helpText: "This includes having proper roles and processes for regulatory engagement.",
    icon: Building2,
    subQuestion: {
      id: "compliance-officer",
      text: "Does the organization have a designated compliance officer or security liaison?",
      placeholder: "Enter role maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "compliance-officer",
        tier: "standard",
        name: "Compliance Officer Role",
        shortDescription: "Regulatory liaison",
        description: "Assign a compliance officer to establish regulatory contacts.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited resources"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Legal and IT teams",
        organizationSize: "Any",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "Internal effort",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: Building2
      },
      {
        id: "thomson-reuters",
        tier: "premium",
        name: "Thomson Reuters Regulatory Intelligence",
        shortDescription: "Regulatory monitoring",
        description: "Thomson Reuters provides regulatory compliance monitoring capabilities.",
        pros: [
          "Advanced features",
          "Automated updates",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.thomsonreuters.com",
        pricingPage: "https://www.thomsonreuters.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated compliance team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Building2
      }
    ]
  },
  {
    id: 56,
    category: "Security Governance",
    text: "Does the organization engage with security forums, professional associations, or special interest groups?",
    description: "Security community engagement helps maintain awareness.",
    helpText: "This includes having proper roles and processes for external collaboration.",
    icon: Users,
    subQuestion: {
      id: "security-collaboration",
      text: "Is there a designated team or individual responsible for external cybersecurity collaborations?",
      placeholder: "Enter collaboration maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "security-forums",
        tier: "standard",
        name: "Security Forum Memberships",
        shortDescription: "Community engagement",
        description: "Register for security forums and professional associations.",
        pros: [
          "Cost-effective",
          "Good networking",
          "Regular updates",
          "Community support"
        ],
        cons: [
          "Annual fees",
          "Limited features",
          "Manual process"
        ],
        pricing: "₹4,150-24,900/year",
        pricingModel: "Annual membership",
        officialWebsite: "Various forums",
        pricingPage: "Various forums",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹4,150-24,900/year",
        perUnitCost: {
          amount: 24900,
          unit: "organization",
          period: "yearly"
        },
        icon: Users
      },
      {
        id: "anomali",
        tier: "premium",
        name: "Anomali",
        shortDescription: "Threat intelligence",
        description: "Anomali provides threat intelligence and industry-sharing capabilities.",
        pros: [
          "Advanced features",
          "Automated sharing",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.anomali.com",
        pricingPage: "https://www.anomali.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Users
      }
    ]
  },
  {
    id: 57,
    category: "Security Governance",
    text: "Is information security integrated into project management processes?",
    description: "Security integration helps maintain project security.",
    helpText: "This includes having proper tools and processes for security assessment.",
    icon: FileText,
    subQuestion: {
      id: "security-requirements",
      text: "Are security requirements formally included in project planning and execution?",
      placeholder: "Enter integration maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "security-checklist",
        tier: "standard",
        name: "Security Risk Assessment Checklist",
        shortDescription: "Project security",
        description: "Establish a security risk assessment checklist for projects.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited automation"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "2-4 weeks",
        recommendedTimeline: "2-4 weeks",
        requiredResources: "IT and Project teams",
        organizationSize: "Any",
        effortHours: "80-160",
        priority: "High",
        estimatedCostRange: "Internal effort",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: FileText
      },
      {
        id: "microsoft-threat-modeling",
        tier: "premium",
        name: "Microsoft Threat Modeling Tool",
        shortDescription: "Secure SDLC",
        description: "Microsoft provides threat modeling capabilities for projects.",
        pros: [
          "Advanced features",
          "Automated analysis",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Varies based on licensing",
        pricingModel: "Custom",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Varies based on licensing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: FileText
      }
    ]
  },
  {
    id: 58,
    category: "Security Governance",
    text: "Are rules for acceptable use and procedures for handling assets documented and enforced?",
    description: "Acceptable use policies help maintain asset security.",
    helpText: "This includes having proper documentation and enforcement mechanisms.",
    icon: Shield,
    subQuestion: {
      id: "aup-acknowledgment",
      text: "Does the organization have an Acceptable Use Policy (AUP) that employees acknowledge?",
      placeholder: "Enter policy maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "aup-implementation",
        tier: "standard",
        name: "Acceptable Use Policy",
        shortDescription: "Policy documentation",
        description: "Implement an AUP and ensure employee acknowledgment.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited tracking"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR and IT teams",
        organizationSize: "Any",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "Internal effort",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: Shield
      },
      {
        id: "convercent",
        tier: "premium",
        name: "Convercent",
        shortDescription: "Policy management",
        description: "Convercent provides automated policy management capabilities.",
        pros: [
          "Advanced features",
          "Automated tracking",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.convercent.com",
        pricingPage: "https://www.convercent.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Shield
      }
    ]
  },
  {
    id: 59,
    category: "Asset Management",
    text: "Are personnel required to return all organizational assets upon termination or contract change?",
    description: "Proper asset return helps maintain organizational security.",
    helpText: "This includes having proper processes and tools for asset tracking.",
    icon: HardDrive,
    subQuestion: {
      id: "asset-return",
      text: "Is there a formalized asset return process in place during offboarding?",
      placeholder: "Enter process maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "asset-spreadsheet",
        tier: "standard",
        name: "Asset Tracking Spreadsheet",
        shortDescription: "Asset tracking",
        description: "Implement an asset tracking spreadsheet for offboarding.",
        pros: [
          "Free to use",
          "Easy to set up",
          "Good features",
          "Cloud-based"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic security"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "Google Sheets/Excel",
        pricingPage: "Google Sheets/Excel",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR and IT teams",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "Free",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: HardDrive
      },
      {
        id: "servicenow-itam",
        tier: "premium",
        name: "ServiceNow ITAM",
        shortDescription: "Asset management",
        description: "ServiceNow provides comprehensive IT asset management capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "https://www.servicenow.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: HardDrive
      }
    ]
  },
  {
    id: 60,
    category: "Data Protection",
    text: "Are document classification strategies defined and implemented within the organization?",
    description: "Proper classification helps protect sensitive information.",
    helpText: "This includes having proper frameworks and tools for classification.",
    icon: FileText,
    subQuestion: {
      id: "classification-framework",
      text: "Does the organization have a data classification framework (e.g., Public, Internal, Confidential)?",
      placeholder: "Enter framework maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "classification-policy",
        tier: "standard",
        name: "Data Classification Policy",
        shortDescription: "Policy documentation",
        description: "Define a data classification policy with clear levels.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited automation"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT and Legal teams",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "Internal effort",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: FileText
      },
      {
        id: "microsoft-purview",
        tier: "premium",
        name: "Microsoft Purview",
        shortDescription: "Data protection",
        description: "Microsoft Purview provides comprehensive data protection capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: FileText
      }
    ]
  },
  {
    id: 61,
    category: "Data Protection",
    text: "Are tagging strategies used to label and identify classified information consistently?",
    description: "Proper tagging helps maintain information security.",
    helpText: "This includes having proper tools and processes for labeling.",
    icon: FileText,
    subQuestion: {
      id: "document-labeling",
      text: "Are digital and physical documents labeled according to classification levels?",
      placeholder: "Enter labeling maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "manual-labeling",
        tier: "standard",
        name: "Manual Document Labeling",
        shortDescription: "Labeling guidelines",
        description: "Introduce manual document labeling guidelines using templates.",
        pros: [
          "Free to use",
          "Easy to set up",
          "Good features",
          "Cloud-based"
        ],
        cons: [
          "Manual process",
          "Limited features",
          "Basic security"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "Microsoft Office/Google Docs",
        pricingPage: "Microsoft Office/Google Docs",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "Free",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: FileText
      },
      {
        id: "microsoft-information-protection",
        tier: "premium",
        name: "Microsoft Information Protection",
        shortDescription: "Automated labeling",
        description: "Microsoft provides automated document labeling capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Varies based on licensing",
        pricingModel: "Custom",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "https://www.microsoft.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Varies based on licensing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: FileText
      }
    ]
  },
  {
    id: 62,
    category: "Data Protection",
    text: "Are bucketing strategies in place to group similar types of information for consistent security handling?",
    description: "Proper bucketing helps maintain information security.",
    helpText: "This includes having proper frameworks and tools for categorization.",
    icon: FileText,
    subQuestion: {
      id: "data-matrix",
      text: "Does the organization have a formal data classification matrix to categorize information types?",
      placeholder: "Enter matrix maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "categorization-framework",
        tier: "standard",
        name: "Data Categorization Framework",
        shortDescription: "Framework documentation",
        description: "Develop a data categorization framework for information types.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited automation"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT and Legal teams",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "Internal effort",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: FileText
      },
      {
        id: "collibra",
        tier: "premium",
        name: "Collibra",
        shortDescription: "Data governance",
        description: "Collibra provides comprehensive data governance capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.collibra.com",
        pricingPage: "https://www.collibra.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: FileText
      }
    ]
  },
  {
    id: 63,
    category: "Data Protection",
    text: "Are procedures for labeling information implemented according to the organization's classification scheme?",
    description: "Proper labeling helps maintain information security.",
    helpText: "This includes having proper tools and processes for labeling.",
    icon: FileText,
    subQuestion: {
      id: "labeling-correctness",
      text: "Are digital and physical documents labeled correctly according to security levels?",
      placeholder: "Enter labeling maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "manual-labeling-policy",
        tier: "standard",
        name: "Manual Labeling Policy",
        shortDescription: "Labeling guidelines",
        description: "Use manual labeling policies with document templates.",
        pros: [
          "Free to use",
          "Easy to set up",
          "Good features",
          "Cloud-based"
        ],
        cons: [
          "Manual process",
          "Limited features",
          "Basic security"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "MS Word/Google Docs",
        pricingPage: "MS Word/Google Docs",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "Free",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: FileText
      },
      {
        id: "google-dlp",
        tier: "premium",
        name: "Google Cloud DLP",
        shortDescription: "Automated labeling",
        description: "Google provides automated document labeling capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Subscription-based",
        pricingModel: "Subscription",
        officialWebsite: "https://cloud.google.com",
        pricingPage: "https://cloud.google.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Subscription-based",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: FileText
      }
    ]
  },
  {
    id: 64,
    category: "Data Protection",
    text: "Are secure rules, procedures, and agreements in place for transferring information internally and externally?",
    description: "Secure data transfer helps protect sensitive information.",
    helpText: "This includes having proper protocols and tools for data transfer.",
    icon: Share2,
    subQuestion: {
      id: "data-transfer-policies",
      text: "Are data transfer policies documented and enforced for internal/external communication?",
      placeholder: "Enter policy maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "secure-protocols",
        tier: "standard",
        name: "Secure Data Transfer Protocols",
        shortDescription: "Transfer protocols",
        description: "Implement secure data transfer protocols like SFTP and encrypted email.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited automation"
        ],
        pricing: "Internal setup",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "Internal setup",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: Share2
      },
      {
        id: "axway",
        tier: "premium",
        name: "Axway SecureTransport",
        shortDescription: "Secure file transfer",
        description: "Axway provides comprehensive secure file transfer capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Varies",
        pricingModel: "Custom",
        officialWebsite: "https://www.axway.com",
        pricingPage: "https://www.axway.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Varies",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Share2
      }
    ]
  },
  {
    id: 65,
    category: "Access Control",
    text: "Are access control policies established and enforced based on business and security requirements?",
    description: "Proper access control helps maintain security.",
    helpText: "This includes having proper policies and tools for access management.",
    icon: Lock,
    subQuestion: {
      id: "rbac-implementation",
      text: "Are Role-Based Access Controls (RBAC) implemented and reviewed periodically?",
      placeholder: "Enter implementation maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "rbac-policies",
        tier: "standard",
        name: "RBAC and Least Privilege",
        shortDescription: "Access control",
        description: "Implement RBAC and least privilege policies.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited automation"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "Internal effort",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: Lock
      },
      {
        id: "okta",
        tier: "premium",
        name: "Okta",
        shortDescription: "IAM solution",
        description: "Okta provides comprehensive identity and access management capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.okta.com",
        pricingPage: "https://www.okta.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Lock
      }
    ]
  },
  {
    id: 66,
    category: "Access Control",
    text: "Are access rights regularly reviewed, modified, and removed in line with security policies?",
    description: "Regular access review helps maintain security.",
    helpText: "This includes having proper processes and tools for access review.",
    icon: Shield,
    subQuestion: {
      id: "access-review-process",
      text: "Is there a documented process for periodic access reviews?",
      placeholder: "Enter process maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "quarterly-review",
        tier: "standard",
        name: "Quarterly Access Review",
        shortDescription: "Manual review",
        description: "Establish a quarterly access review process using spreadsheets.",
        pros: [
          "Free to use",
          "Easy to set up",
          "Good features",
          "Cloud-based"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "Ongoing",
        recommendedTimeline: "Ongoing",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "Free",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "monthly"
        },
        icon: Shield
      },
      {
        id: "sailpoint",
        tier: "premium",
        name: "SailPoint",
        shortDescription: "Access review",
        description: "SailPoint provides automated access review capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Subscription-based",
        pricingModel: "Subscription",
        officialWebsite: "https://www.sailpoint.com",
        pricingPage: "https://www.sailpoint.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Subscription-based",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Shield
      }
    ]
  },
  {
    id: 67,
    category: "Supplier Security",
    text: "Are processes in place to manage information security risks related to supplier products and services?",
    description: "Supplier security helps maintain organizational security.",
    helpText: "This includes having proper processes and tools for vendor assessment.",
    icon: Building2,
    subQuestion: {
      id: "vendor-compliance",
      text: "Are vendors required to meet specific security compliance standards (e.g., ISO 27001, SOC 2)?",
      placeholder: "Enter compliance maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "vendor-assessment",
        tier: "standard",
        name: "Vendor Security Assessment",
        shortDescription: "Security checklist",
        description: "Establish a vendor security assessment checklist and conduct periodic audits.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited automation"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT and Procurement teams",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "Internal effort",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: Building2
      },
      {
        id: "prevalent",
        tier: "premium",
        name: "Prevalent",
        shortDescription: "TPRM solution",
        description: "Prevalent provides third-party risk management capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.prevalent.net",
        pricingPage: "https://www.prevalent.net/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Building2
      }
    ]
  },
  {
    id: 68,
    category: "Supplier Security",
    text: "Are security requirements clearly established and agreed upon with all suppliers?",
    description: "Supplier security requirements help maintain organizational security.",
    helpText: "This includes having proper documentation and enforcement mechanisms.",
    icon: FileText,
    subQuestion: {
      id: "security-clauses",
      text: "Are security clauses included in all supplier contracts and SLAs?",
      placeholder: "Enter clause maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "contract-updates",
        tier: "standard",
        name: "Supplier Agreement Updates",
        shortDescription: "Contract updates",
        description: "Update supplier agreements to include security requirements.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Legal fees",
          "Time-consuming",
          "Limited automation"
        ],
        pricing: "Legal consultation fees",
        pricingModel: "One-time",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Legal and Procurement teams",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "Legal consultation fees",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: FileText
      },
      {
        id: "ironclad",
        tier: "premium",
        name: "Ironclad",
        shortDescription: "Contract management",
        description: "Ironclad provides contract management capabilities.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Subscription-based",
        pricingModel: "Subscription",
        officialWebsite: "https://ironcladapp.com",
        pricingPage: "https://ironcladapp.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Subscription-based",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: FileText
      }
    ]
  },
  {
    id: 69,
    category: "Supplier Security",
    text: "Are security risks in the IT supply chain assessed and managed?",
    description: "IT supply chain security helps maintain organizational security.",
    helpText: "This includes having proper processes and tools for supply chain risk assessment.",
    icon: Shield,
    subQuestion: {
      id: "supplier-risk-assessment",
      text: "Are risk assessments conducted for IT suppliers, including software vendors?",
      placeholder: "Enter assessment maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "annual-assessment",
        tier: "standard",
        name: "Annual Supply Chain Risk Assessment",
        shortDescription: "Risk matrices",
        description: "Perform annual supply chain risk assessments using risk matrices.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited automation"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "Ongoing",
        recommendedTimeline: "Ongoing",
        requiredResources: "IT and Procurement teams",
        organizationSize: "Any",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "Internal effort",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "yearly"
        },
        icon: Shield
      },
      {
        id: "riskrecon",
        tier: "premium",
        name: "RiskRecon",
        shortDescription: "AI risk management",
        description: "Use AI-powered risk management tools for continuous monitoring.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.riskrecon.com",
        pricingPage: "https://www.riskrecon.com/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Shield
      }
    ]
  },
  {
    id: 70,
    category: "Cloud Security",
    text: "Are processes for selecting, managing, and exiting cloud services aligned with security requirements?",
    description: "Cloud service security helps maintain organizational security.",
    helpText: "This includes having proper processes and tools for cloud service management.",
    icon: Cloud,
    subQuestion: {
      id: "cloud-provider-assessment",
      text: "Are cloud service providers assessed for security compliance before onboarding?",
      placeholder: "Enter assessment maturity (1-5)",
      unit: "level",
      defaultValue: 3,
      min: 1,
      max: 5
    },
    recommendations: [
      {
        id: "cloud-security-policy",
        tier: "standard",
        name: "Cloud Security Policy",
        shortDescription: "Security framework",
        description: "Develop a cloud security policy aligned with frameworks like NIST CSF or CIS Benchmarks.",
        pros: [
          "Cost-effective",
          "Internal control",
          "Flexible implementation",
          "Direct oversight"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited automation"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal effort",
        officialWebsite: "Internal process",
        pricingPage: "Internal process",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT and Security teams",
        organizationSize: "Any",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "Internal effort",
        perUnitCost: {
          amount: 0,
          unit: "component",
          period: "one-time"
        },
        icon: Cloud
      },
      {
        id: "prisma-cloud",
        tier: "premium",
        name: "Prisma Cloud",
        shortDescription: "CSPM solution",
        description: "Use Cloud Security Posture Management (CSPM) solutions for continuous monitoring.",
        pros: [
          "Advanced features",
          "Automated workflows",
          "24/7 support",
          "Highly scalable"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires training"
        ],
        pricing: "Subscription-based",
        pricingModel: "Subscription",
        officialWebsite: "https://www.paloaltonetworks.com/prisma/cloud",
        pricingPage: "https://www.paloaltonetworks.com/prisma/cloud/pricing",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated IT team",
        organizationSize: "Large enterprises",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "Subscription-based",
        perUnitCost: {
          amount: 0,
          unit: "custom",
          period: "monthly"
        },
        icon: Cloud
      }
    ]
  }
];

export default questions; 