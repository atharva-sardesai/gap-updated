import {
  AlertTriangle,
  Brain,
  Building2,
  Cloud,
  FileCheck,
  FileText,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldOff,
  ShieldQuestion,
  ShieldX,
  TestTube,
  UserCog,
  Users,
  GraduationCap,
  BarChart,
  Bot,
  Link,
  Network,
  Camera,
  Activity,
  Database,
  UserCheck,
  FileKey,
  LucideIcon,
  AlertCircle
} from "lucide-react"

export interface SubQuestion {
  id: string
  text: string
  placeholder: string
  unit: string
  defaultValue?: number | string
  min?: number
  max?: number
}

export interface Recommendation {
  id: string
  tier: "open-source" | "standard" | "premium"
  name: string
  shortDescription: string
  description: string
  pros: string[]
  cons: string[]
  pricing: string
  pricingModel: string
  officialWebsite: string
  pricingPage: string
  setupTime: string
  recommendedTimeline: string
  requiredResources: string
  organizationSize: string
  effortHours: string
  priority: "High" | "Medium" | "Low"
  estimatedCostRange: string
  icon?: LucideIcon
  calculateEffort?: (subQuestionValue: number) => string
  calculateTimeline?: (subQuestionValue: number) => string
  calculateCost?: (subQuestionValue: number) => string
}

export interface Question {
  id: number
  category: string
  text: string
  description?: string
  helpText?: string
  icon: LucideIcon
  recommendations: Recommendation[]
  subQuestion?: SubQuestion
}

export const questionsData: Question[] = [
  {
    id: 1,
    category: "Threat Intelligence",
    text: "Do you receive a threat intelligence feed regarding the technology stack of your application to remain up to date with the latest threats?",
    description: "Threat intelligence helps organizations stay informed about emerging threats specific to their technology stack.",
    helpText: "This includes feeds that provide information about vulnerabilities, exploits, and attack patterns relevant to your systems.",
    icon: Shield,
    subQuestion: {
      id: "threat-intelligence-interest",
      text: "Are you interested in integrating a threat intelligence service to monitor and respond to emerging threats relevant to your technology stack?",
      placeholder: "Yes/No",
      unit: "",
      defaultValue: "No"
    },
    recommendations: [
      {
        id: "open-threat-exchange",
        tier: "open-source",
        name: "Open Threat Exchange (OTX)",
        shortDescription: "Free threat intelligence platform",
        description: "Utilize free threat intelligence platforms like Open Threat Exchange (OTX).",
        pros: [
          "Free to use",
          "Community-driven",
          "Regular updates",
          "Basic threat data"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "Manual configuration",
          "Resource intensive"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://otx.alienvault.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Shield
      },
      {
        id: "recorded-future",
        tier: "standard",
        name: "Recorded Future",
        shortDescription: "Standard threat intelligence service",
        description: "Subscribe to services like Recorded Future.",
        pros: [
          "Comprehensive coverage",
          "Good reporting",
          "API access",
          "Technical support"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Subscription",
        officialWebsite: "https://www.recordedfuture.com",
        pricingPage: "Contact sales",
        setupTime: "1 week",
        recommendedTimeline: "1 week",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "40",
        priority: "High",
        estimatedCostRange: "₹36,000/year",
        icon: Shield
      },
      {
        id: "fireeye",
        tier: "premium",
        name: "FireEye Threat Intelligence",
        shortDescription: "Premium threat intelligence service",
        description: "Engage with providers like FireEye Threat Intelligence.",
        pros: [
          "Advanced features",
          "Comprehensive solution",
          "Good reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.mandiant.com",
        pricingPage: "Contact sales",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "80",
        priority: "High",
        estimatedCostRange: "₹100,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 2,
    category: "Asset Management",
    text: "Is there an inventory management platform deployed to track the entire lifecycle of IT assets from procurement to destruction?",
    description: "IT asset management helps organizations track and manage their technology assets throughout their lifecycle.",
    helpText: "This includes tracking hardware, software, and other IT assets from purchase to disposal.",
    icon: Database,
    subQuestion: {
      id: "asset-count",
      text: "How many IT assets does your organization manage?",
      placeholder: "Enter number",
      unit: "assets",
      defaultValue: 0,
      min: 0,
      max: 10000
    },
    recommendations: [
      {
        id: "snipe-it",
        tier: "open-source",
        name: "Snipe-IT",
        shortDescription: "Free asset management solution",
        description: "Implement solutions like Snipe-IT.",
        pros: [
          "Free to use",
          "Open source",
          "Basic features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "Manual configuration",
          "Resource intensive"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://snipeitapp.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Database
      },
      {
        id: "asset-panda",
        tier: "standard",
        name: "Asset Panda",
        shortDescription: "Standard asset management platform",
        description: "Use platforms like Asset Panda.",
        pros: [
          "Good features",
          "Automated tracking",
          "Progress monitoring",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Subscription based",
        pricingModel: "Subscription",
        officialWebsite: "https://www.assetpanda.com",
        pricingPage: "Contact vendor",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹1,500/year",
        icon: Database
      },
      {
        id: "servicenow",
        tier: "premium",
        name: "ServiceNow IT Asset Management",
        shortDescription: "Premium asset management solution",
        description: "Deploy systems like ServiceNow IT Asset Management.",
        pros: [
          "Advanced features",
          "Asset tracking",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹10,000+/year",
        icon: Database
      }
    ]
  },
  {
    id: 3,
    category: "Identity Management",
    text: "Is there an identity management solution in place?",
    description: "Identity management solutions help organizations manage user identities and access across systems.",
    helpText: "This includes managing user accounts, permissions, and access controls across your organization.",
    icon: UserCheck,
    subQuestion: {
      id: "user-count",
      text: "How many user identities need to be managed?",
      placeholder: "Enter number",
      unit: "users",
      defaultValue: 0,
      min: 0,
      max: 100000
    },
    recommendations: [
      {
        id: "openldap",
        tier: "open-source",
        name: "OpenLDAP",
        shortDescription: "Free identity management solution",
        description: "Implement OpenLDAP for basic identity management.",
        pros: [
          "Free to use",
          "Open source",
          "Basic features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Complex setup",
          "Manual configuration",
          "Resource intensive"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.openldap.org",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "120-160",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: UserCheck
      },
      {
        id: "active-directory",
        tier: "standard",
        name: "Microsoft Active Directory",
        shortDescription: "Standard identity management solution",
        description: "Use Microsoft Active Directory for identity management.",
        pros: [
          "Good features",
          "Windows integration",
          "User management",
          "Technical support"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Included with Windows Server",
        pricingModel: "License",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "Contact vendor",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹500-6,000",
        icon: UserCheck
      },
      {
        id: "okta",
        tier: "premium",
        name: "Okta Identity Management",
        shortDescription: "Premium identity management solution",
        description: "Deploy Okta Identity Management for comprehensive identity management.",
        pros: [
          "Advanced features",
          "Cloud-based",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Per user/month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.okta.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹2/user/month",
        icon: UserCheck
      }
    ]
  },
  {
    id: 4,
    category: "Incident Management",
    text: "Is there an incident management platform in place?",
    description: "Incident management platforms help organizations track and respond to security incidents effectively.",
    helpText: "This includes having a structured approach to incident management with proper tracking and response procedures.",
    icon: AlertTriangle,
    subQuestion: {
      id: "incident-count",
      text: "How many incidents does your organization handle monthly?",
      placeholder: "Enter number",
      unit: "incidents",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "thehive",
        tier: "open-source",
        name: "TheHive",
        shortDescription: "Free incident management platform",
        description: "Utilize TheHive for basic incident management.",
        pros: [
          "Free to use",
          "Open source",
          "Basic features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual configuration",
          "Basic reporting",
          "Resource intensive"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://thehive-project.org",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: AlertTriangle
      },
      {
        id: "jira",
        tier: "standard",
        name: "Atlassian Jira Service Management",
        shortDescription: "Standard incident management platform",
        description: "Implement Atlassian Jira Service Management for incident tracking.",
        pros: [
          "Good features",
          "Process alignment",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per agent/month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.atlassian.com",
        pricingPage: "Contact vendor",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹20/agent/month",
        icon: AlertTriangle
      },
      {
        id: "servicenow-incident",
        tier: "premium",
        name: "ServiceNow Incident Management",
        shortDescription: "Premium incident management platform",
        description: "Use ServiceNow Incident Management for comprehensive incident handling.",
        pros: [
          "Advanced features",
          "Incident tracking",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/year",
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 5,
    category: "Data Loss Prevention",
    text: "Is there a Data Loss Prevention (DLP) solution in place?",
    description: "Data Loss Prevention solutions help organizations prevent unauthorized data exfiltration and protect sensitive information.",
    helpText: "This includes having a structured approach to data protection with proper monitoring and controls.",
    icon: Shield,
    subQuestion: {
      id: "sensitive-data-types",
      text: "What types of sensitive data does your organization handle?",
      placeholder: "Enter types",
      unit: "",
      defaultValue: "",
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "opendlp",
        tier: "open-source",
        name: "OpenDLP",
        shortDescription: "Free DLP solution",
        description: "Implement OpenDLP for basic data loss prevention.",
        pros: [
          "Free to use",
          "Open source",
          "Basic features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Complex setup",
          "Manual configuration",
          "Resource intensive"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://opendlp.org",
        pricingPage: "N/A",
        setupTime: "4+ weeks",
        recommendedTimeline: "4+ weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "160-200",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Shield
      },
      {
        id: "symantec-dlp",
        tier: "standard",
        name: "Symantec DLP",
        shortDescription: "Standard DLP solution",
        description: "Use Symantec DLP for data protection.",
        pros: [
          "Good features",
          "Data monitoring",
          "Policy management",
          "Technical support"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.broadcom.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹25/user/year",
        icon: Shield
      },
      {
        id: "forcepoint-dlp",
        tier: "premium",
        name: "Forcepoint DLP",
        shortDescription: "Premium DLP solution",
        description: "Deploy Forcepoint DLP for comprehensive data protection.",
        pros: [
          "Advanced features",
          "Data tracking",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.forcepoint.com",
        pricingPage: "Contact sales",
        setupTime: "4+ weeks",
        recommendedTimeline: "4+ weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "160-200",
        priority: "High",
        estimatedCostRange: "₹50/user/year",
        icon: Shield
      }
    ]
  },
  {
    id: 6,
    category: "PII Protection",
    text: "Is there Personally Identifiable Information (PII) redaction technology in place?",
    description: "PII redaction technology helps organizations protect sensitive personal information in documents and data.",
    helpText: "This includes having a structured approach to PII protection with proper redaction tools and processes.",
    icon: FileKey,
    subQuestion: {
      id: "pii-document-volume",
      text: "What volume of documents containing PII does your organization process?",
      placeholder: "Enter volume",
      unit: "documents",
      defaultValue: 0,
      min: 0,
      max: 1000000
    },
    recommendations: [
      {
        id: "pdfredacttools",
        tier: "open-source",
        name: "PdfRedactTools",
        shortDescription: "Free PII redaction tool",
        description: "Use PdfRedactTools for basic PII redaction.",
        pros: [
          "Free to use",
          "Open source",
          "Basic features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual processing",
          "Basic reporting",
          "Resource intensive"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://github.com/pdfredacttools",
        pricingPage: "N/A",
        setupTime: "4+ weeks",
        recommendedTimeline: "4+ weeks",
        requiredResources: "Document team",
        organizationSize: "Small to Medium",
        effortHours: "160-200",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: FileKey
      },
      {
        id: "vera-redaction",
        tier: "standard",
        name: "Vera Redaction",
        shortDescription: "Standard PII redaction tool",
        description: "Implement Vera Redaction for automated PII protection.",
        pros: [
          "Good features",
          "Automated redaction",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.vera.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Document team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹10/user/month",
        icon: FileKey
      },
      {
        id: "ibm-watson",
        tier: "premium",
        name: "IBM Watson Discovery",
        shortDescription: "Premium PII redaction solution",
        description: "Deploy IBM Watson Discovery with redaction capabilities.",
        pros: [
          "Advanced features",
          "AI-powered redaction",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Per month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.ibm.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Document team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500/month",
        icon: FileKey
      }
    ]
  },
  {
    id: 7,
    category: "Security Awareness Training",
    text: "Is there a security awareness training program in place for employees?",
    description: "Security awareness training helps employees understand and follow security best practices.",
    helpText: "This includes regular training sessions, phishing simulations, and security policy education.",
    icon: GraduationCap,
    subQuestion: {
      id: "employee-count",
      text: "How many employees need to be trained?",
      placeholder: "Enter number",
      unit: "employees",
      defaultValue: 0,
      min: 0,
      max: 10000
    },
    recommendations: [
      {
        id: "security-training-templates",
        tier: "open-source",
        name: "Security Training Templates",
        shortDescription: "Free security awareness training materials",
        description: "Use free security awareness training templates and materials.",
        pros: [
          "Free to use",
          "Basic content",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited content",
          "Manual delivery",
          "Basic tracking",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.sans.org/security-awareness-training",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: GraduationCap
      },
      {
        id: "knowbe4",
        tier: "standard",
        name: "KnowBe4",
        shortDescription: "Standard security awareness platform",
        description: "Implement KnowBe4 for automated security awareness training.",
        pros: [
          "Good content",
          "Automated delivery",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.knowbe4.com",
        pricingPage: "Contact vendor",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium to Large",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹1,000/user/year",
        icon: GraduationCap
      },
      {
        id: "proofpoint-training",
        tier: "premium",
        name: "Proofpoint Security Awareness Training",
        shortDescription: "Premium security awareness solution",
        description: "Deploy Proofpoint Security Awareness Training for comprehensive employee education.",
        pros: [
          "Advanced content",
          "Automated delivery",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.proofpoint.com",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,500/user/year",
        icon: GraduationCap
      }
    ]
  },
  {
    id: 8,
    category: "VPN/Zero Trust",
    text: "Is there a VPN or Zero Trust solution in place for remote access?",
    description: "VPN and Zero Trust solutions provide secure remote access to organizational resources.",
    helpText: "This includes having secure remote access controls and authentication mechanisms.",
    icon: Network,
    subQuestion: {
      id: "remote-users",
      text: "How many users need remote access?",
      placeholder: "Enter number",
      unit: "users",
      defaultValue: 0,
      min: 0,
      max: 10000
    },
    recommendations: [
      {
        id: "openvpn",
        tier: "open-source",
        name: "OpenVPN",
        shortDescription: "Free VPN solution",
        description: "Implement OpenVPN for basic remote access.",
        pros: [
          "Free to use",
          "Open source",
          "Basic features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual configuration",
          "Basic reporting",
          "Resource intensive"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://openvpn.net",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Network
      },
      {
        id: "cisco-vpn",
        tier: "standard",
        name: "Cisco AnyConnect",
        shortDescription: "Standard VPN solution",
        description: "Use Cisco AnyConnect for reliable remote access.",
        pros: [
          "Good features",
          "Reliable connection",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.cisco.com",
        pricingPage: "Contact vendor",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹2,000/user/year",
        icon: Network
      },
      {
        id: "zscaler",
        tier: "premium",
        name: "Zscaler Zero Trust Exchange",
        shortDescription: "Premium Zero Trust solution",
        description: "Deploy Zscaler for comprehensive Zero Trust security.",
        pros: [
          "Advanced features",
          "Zero Trust architecture",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.zscaler.com",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹5,000/user/year",
        icon: Network
      }
    ]
  },
  {
    id: 9,
    category: "Physical Access Control",
    text: "Is there a physical access control system in place?",
    description: "Physical access control systems manage and monitor access to physical locations.",
    helpText: "This includes having proper physical security controls and monitoring.",
    icon: Shield,
    subQuestion: {
      id: "access-points",
      text: "How many access points need to be controlled?",
      placeholder: "Enter number",
      unit: "points",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-access-control",
        tier: "open-source",
        name: "Basic Access Control System",
        shortDescription: "Free access control solution",
        description: "Implement a basic access control system.",
        pros: [
          "Free to use",
          "Basic features",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual management",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.accesscontrol.com",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Shield
      },
      {
        id: "honeywell",
        tier: "standard",
        name: "Honeywell Access Control",
        shortDescription: "Standard access control system",
        description: "Use Honeywell for reliable access control.",
        pros: [
          "Good features",
          "Automated management",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per access point/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.honeywell.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹10,000/point/year",
        icon: Shield
      },
      {
        id: "johnson-controls",
        tier: "premium",
        name: "Johnson Controls Access Control",
        shortDescription: "Premium access control solution",
        description: "Deploy Johnson Controls for comprehensive access management.",
        pros: [
          "Advanced features",
          "Integrated management",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.johnsoncontrols.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹25,000/point/year",
        icon: Shield
      }
    ]
  },
  {
    id: 10,
    category: "CCTV Monitoring",
    text: "Is there a CCTV monitoring system in place?",
    description: "CCTV monitoring systems provide surveillance and security monitoring capabilities.",
    helpText: "This includes having proper video surveillance and monitoring controls.",
    icon: Camera,
    subQuestion: {
      id: "camera-count",
      text: "How many cameras need to be installed?",
      placeholder: "Enter number",
      unit: "cameras",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-cctv",
        tier: "open-source",
        name: "Basic CCTV System",
        shortDescription: "Free CCTV monitoring solution",
        description: "Implement a basic CCTV monitoring system.",
        pros: [
          "Free to use",
          "Basic features",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual monitoring",
          "Basic recording",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.cctv.com",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Camera
      },
      {
        id: "hikvision",
        tier: "standard",
        name: "Hikvision CCTV",
        shortDescription: "Standard CCTV monitoring system",
        description: "Use Hikvision for reliable video surveillance.",
        pros: [
          "Good features",
          "Automated monitoring",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per camera/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.hikvision.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹5,000/camera/year",
        icon: Camera
      },
      {
        id: "axis-cctv",
        tier: "premium",
        name: "Axis CCTV System",
        shortDescription: "Premium CCTV monitoring solution",
        description: "Deploy Axis for comprehensive video surveillance.",
        pros: [
          "Advanced features",
          "Integrated monitoring",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.axis.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹15,000/camera/year",
        icon: Camera
      }
    ]
  },
  {
    id: 11,
    category: "Security Monitoring",
    text: "Is there a security monitoring system in place?",
    description: "Security monitoring systems help organizations detect and respond to security threats in real-time.",
    helpText: "This includes having proper monitoring controls and alerting mechanisms.",
    icon: Activity,
    subQuestion: {
      id: "monitoring-scope",
      text: "What is the scope of systems that need to be monitored?",
      placeholder: "Enter scope",
      unit: "systems",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-monitoring",
        tier: "open-source",
        name: "Basic Security Monitoring",
        shortDescription: "Free security monitoring solution",
        description: "Implement basic security monitoring tools.",
        pros: [
          "Free to use",
          "Basic features",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual monitoring",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitymonitoring.com",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Activity
      },
      {
        id: "splunk",
        tier: "standard",
        name: "Splunk Security",
        shortDescription: "Standard security monitoring platform",
        description: "Use Splunk for reliable security monitoring.",
        pros: [
          "Good features",
          "Automated monitoring",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per GB/day",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹100/GB/day",
        icon: Activity
      },
      {
        id: "exabeam",
        tier: "premium",
        name: "Exabeam Fusion SIEM",
        shortDescription: "Premium security monitoring solution",
        description: "Deploy Exabeam for comprehensive security monitoring.",
        pros: [
          "Advanced features",
          "Integrated monitoring",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.exabeam.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500,000+/year",
        icon: Activity
      }
    ]
  },
  {
    id: 12,
    category: "Vulnerability Management",
    text: "Is there a vulnerability management system in place?",
    description: "Vulnerability management systems help organizations identify and remediate security vulnerabilities.",
    helpText: "This includes having proper vulnerability scanning and management processes.",
    icon: ShieldAlert,
    subQuestion: {
      id: "asset-count",
      text: "How many assets need to be scanned for vulnerabilities?",
      placeholder: "Enter number",
      unit: "assets",
      defaultValue: 0,
      min: 0,
      max: 10000
    },
    recommendations: [
      {
        id: "openvas",
        tier: "open-source",
        name: "OpenVAS",
        shortDescription: "Free vulnerability management solution",
        description: "Implement OpenVAS for basic vulnerability scanning.",
        pros: [
          "Free to use",
          "Open source",
          "Basic features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual scanning",
          "Basic reporting",
          "Resource intensive"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.openvas.org",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: ShieldAlert
      },
      {
        id: "nessus",
        tier: "standard",
        name: "Nessus Professional",
        shortDescription: "Standard vulnerability management platform",
        description: "Use Nessus for reliable vulnerability scanning.",
        pros: [
          "Good features",
          "Automated scanning",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per scanner/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.tenable.com",
        pricingPage: "Contact vendor",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹50,000/scanner/year",
        icon: ShieldAlert
      },
      {
        id: "qualys",
        tier: "premium",
        name: "Qualys Vulnerability Management",
        shortDescription: "Premium vulnerability management solution",
        description: "Deploy Qualys for comprehensive vulnerability management.",
        pros: [
          "Advanced features",
          "Integrated scanning",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.qualys.com",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹200,000+/year",
        icon: ShieldAlert
      }
    ]
  },
  {
    id: 13,
    category: "Security Access Control",
    text: "Are access controls implemented and regularly reviewed for all systems and applications?",
    description: "Access controls help organizations manage and monitor user access to systems and applications.",
    helpText: "This includes having proper access management and review processes.",
    icon: UserCog,
    subQuestion: {
      id: "system-count",
      text: "How many systems need access control implementation?",
      placeholder: "Enter number",
      unit: "systems",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-access-control",
        tier: "open-source",
        name: "Basic Access Control Templates",
        shortDescription: "Free access control framework",
        description: "Use basic access control templates and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.accesscontrol.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: UserCog
      },
      {
        id: "beyondtrust",
        tier: "standard",
        name: "BeyondTrust Privileged Access Management",
        shortDescription: "Standard access control platform",
        description: "Implement BeyondTrust for automated access management.",
        pros: [
          "Good features",
          "Automated management",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.beyondtrust.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹5,000/user/year",
        icon: UserCog
      },
      {
        id: "cyberark",
        tier: "premium",
        name: "CyberArk Privileged Access Management",
        shortDescription: "Premium access control solution",
        description: "Deploy CyberArk for comprehensive access management.",
        pros: [
          "Advanced features",
          "Integrated management",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.cyberark.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/user/year",
        icon: UserCog
      }
    ]
  },
  {
    id: 14,
    category: "Identity Management",
    text: "Is there a formal identity management process that includes user provisioning and deprovisioning?",
    description: "Identity management processes help organizations manage user access throughout their lifecycle.",
    helpText: "This includes having proper user lifecycle management processes.",
    icon: Users,
    subQuestion: {
      id: "user-count",
      text: "How many user identities need to be managed?",
      placeholder: "Enter number",
      unit: "users",
      defaultValue: 0,
      min: 0,
      max: 100000
    },
    recommendations: [
      {
        id: "basic-identity-management",
        tier: "open-source",
        name: "Basic Identity Management Templates",
        shortDescription: "Free identity management framework",
        description: "Use basic identity management templates and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.identitymanagement.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Users
      },
      {
        id: "sailpoint",
        tier: "standard",
        name: "SailPoint IdentityNow",
        shortDescription: "Standard identity management platform",
        description: "Implement SailPoint for automated identity management.",
        pros: [
          "Good features",
          "Automated management",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.sailpoint.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,000/user/year",
        icon: Users
      },
      {
        id: "forgerock",
        tier: "premium",
        name: "ForgeRock Identity Platform",
        shortDescription: "Premium identity management solution",
        description: "Deploy ForgeRock for comprehensive identity management.",
        pros: [
          "Advanced features",
          "Integrated management",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.forgerock.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹5,000+/user/year",
        icon: Users
      }
    ]
  },
  {
    id: 15,
    category: "Incident Response",
    text: "Is there a documented incident response plan that is regularly tested and updated?",
    description: "Incident response plans help organizations effectively respond to security incidents.",
    helpText: "This includes having proper incident response procedures and regular testing.",
    icon: AlertCircle,
    subQuestion: {
      id: "test-frequency",
      text: "How often is the incident response plan tested?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-incident-response",
        tier: "open-source",
        name: "Basic Incident Response Templates",
        shortDescription: "Free incident response framework",
        description: "Use basic incident response templates and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.incidentresponse.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: AlertCircle
      },
      {
        id: "demisto",
        tier: "standard",
        name: "Demisto SOAR Platform",
        shortDescription: "Standard incident response platform",
        description: "Implement Demisto for automated incident response.",
        pros: [
          "Good features",
          "Automated response",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per incident/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.demisto.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹100,000/year",
        icon: AlertCircle
      },
      {
        id: "splunk-phantom",
        tier: "premium",
        name: "Splunk Phantom",
        shortDescription: "Premium incident response solution",
        description: "Deploy Splunk Phantom for comprehensive incident response.",
        pros: [
          "Advanced features",
          "Integrated response",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500,000+/year",
        icon: AlertCircle
      }
    ]
  },
  {
    id: 16,
    category: "Disaster Recovery",
    text: "Is there a documented disaster recovery plan that is regularly tested and updated?",
    description: "Disaster recovery plans help organizations recover from major incidents and maintain business continuity.",
    helpText: "This includes having proper disaster recovery procedures and regular testing.",
    icon: Cloud,
    subQuestion: {
      id: "test-frequency",
      text: "How often is the disaster recovery plan tested?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-disaster-recovery",
        tier: "open-source",
        name: "Basic Disaster Recovery Templates",
        shortDescription: "Free disaster recovery framework",
        description: "Use basic disaster recovery templates and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.disasterrecovery.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Cloud
      },
      {
        id: "veeam",
        tier: "standard",
        name: "Veeam Backup & Replication",
        shortDescription: "Standard disaster recovery platform",
        description: "Implement Veeam for automated disaster recovery.",
        pros: [
          "Good features",
          "Automated recovery",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per workload/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.veeam.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹50,000/workload/year",
        icon: Cloud
      },
      {
        id: "zerto",
        tier: "premium",
        name: "Zerto IT Resilience Platform",
        shortDescription: "Premium disaster recovery solution",
        description: "Deploy Zerto for comprehensive disaster recovery.",
        pros: [
          "Advanced features",
          "Integrated recovery",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.zerto.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹200,000+/year",
        icon: Cloud
      }
    ]
  },
  {
    id: 17,
    category: "Security Compliance",
    text: "Are security controls regularly assessed for compliance with regulatory requirements?",
    description: "Security compliance assessments help organizations ensure adherence to regulatory requirements.",
    helpText: "This includes having proper compliance monitoring and assessment processes.",
    icon: FileCheck,
    subQuestion: {
      id: "assessment-frequency",
      text: "How often are security controls assessed for compliance?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-compliance-assessment",
        tier: "open-source",
        name: "Basic Compliance Assessment Templates",
        shortDescription: "Free compliance assessment framework",
        description: "Use basic compliance assessment templates and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.complianceassessment.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: FileCheck
      },
      {
        id: "one-trust",
        tier: "standard",
        name: "OneTrust GRC",
        shortDescription: "Standard compliance management platform",
        description: "Implement OneTrust for automated compliance management.",
        pros: [
          "Good features",
          "Automated assessment",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per assessment/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.onetrust.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹150,000/year",
        icon: FileCheck
      },
      {
        id: "archer",
        tier: "premium",
        name: "Archer GRC Platform",
        shortDescription: "Premium compliance management solution",
        description: "Deploy Archer for comprehensive compliance management.",
        pros: [
          "Advanced features",
          "Integrated assessment",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.archer.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500,000+/year",
        icon: FileCheck
      }
    ]
  },
  {
    id: 18,
    category: "Risk Management",
    text: "Is there a formal risk management process that includes regular risk assessments?",
    description: "Risk management processes help organizations identify and mitigate security risks.",
    helpText: "This includes having proper risk assessment and management procedures.",
    icon: AlertTriangle,
    subQuestion: {
      id: "assessment-frequency",
      text: "How often are risk assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-risk-assessment",
        tier: "open-source",
        name: "Basic Risk Assessment Templates",
        shortDescription: "Free risk assessment framework",
        description: "Use basic risk assessment templates and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.riskassessment.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Risk team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: AlertTriangle
      },
      {
        id: "service-now-grc",
        tier: "standard",
        name: "ServiceNow GRC",
        shortDescription: "Standard risk management platform",
        description: "Implement ServiceNow GRC for automated risk management.",
        pros: [
          "Good features",
          "Automated assessment",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per assessment/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Risk team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹200,000/year",
        icon: AlertTriangle
      },
      {
        id: "metricstream",
        tier: "premium",
        name: "MetricStream GRC Platform",
        shortDescription: "Premium risk management solution",
        description: "Deploy MetricStream for comprehensive risk management.",
        pros: [
          "Advanced features",
          "Integrated assessment",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.metricstream.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Risk team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,000,000+/year",
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 19,
    category: "Security Architecture",
    text: "Is there a documented security architecture that aligns with business objectives?",
    description: "Security architecture helps organizations design and implement effective security controls.",
    helpText: "This includes having proper security architecture documentation and alignment with business goals.",
    icon: Building2,
    subQuestion: {
      id: "review-frequency",
      text: "How often is the security architecture reviewed?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-architecture",
        tier: "open-source",
        name: "Basic Security Architecture Templates",
        shortDescription: "Free security architecture framework",
        description: "Use basic security architecture templates and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securityarchitecture.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Building2
      },
      {
        id: "sabsa",
        tier: "standard",
        name: "SABSA Framework",
        shortDescription: "Standard security architecture framework",
        description: "Implement SABSA for structured security architecture.",
        pros: [
          "Good features",
          "Structured approach",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per license/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.sabsa.org",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹100,000/year",
        icon: Building2
      },
      {
        id: "togaf",
        tier: "premium",
        name: "TOGAF Security Architecture",
        shortDescription: "Premium security architecture framework",
        description: "Deploy TOGAF for comprehensive security architecture.",
        pros: [
          "Advanced features",
          "Integrated approach",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.opengroup.org",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500,000+/year",
        icon: Building2
      }
    ]
  },
  {
    id: 20,
    category: "System Hardening",
    text: "Are systems and applications configured according to security hardening standards?",
    description: "System hardening helps organizations reduce security vulnerabilities in their systems.",
    helpText: "This includes having proper system hardening procedures and standards.",
    icon: Shield,
    subQuestion: {
      id: "assessment-frequency",
      text: "How often are hardening assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-hardening",
        tier: "open-source",
        name: "Basic System Hardening Templates",
        shortDescription: "Free system hardening framework",
        description: "Use basic system hardening templates and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.systemhardening.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Shield
      },
      {
        id: "cis-benchmarks",
        tier: "standard",
        name: "CIS Benchmarks",
        shortDescription: "Standard system hardening framework",
        description: "Implement CIS Benchmarks for structured system hardening.",
        pros: [
          "Good features",
          "Industry standard",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per benchmark/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.cisecurity.org",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹50,000/year",
        icon: Shield
      },
      {
        id: "tenable-sc",
        tier: "premium",
        name: "Tenable Security Center",
        shortDescription: "Premium system hardening solution",
        description: "Deploy Tenable Security Center for comprehensive system hardening.",
        pros: [
          "Advanced features",
          "Integrated hardening",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.tenable.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹200,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 21,
    category: "Security Testing",
    text: "Is there a regular security testing program in place?",
    description: "Security testing helps organizations identify and address security vulnerabilities.",
    helpText: "This includes having proper security testing procedures and tools.",
    icon: FileCheck,
    subQuestion: {
      id: "test-frequency",
      text: "How often is security testing conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-testing",
        tier: "open-source",
        name: "Basic Security Testing Tools",
        shortDescription: "Free security testing framework",
        description: "Use basic security testing tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitytesting.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: FileCheck
      },
      {
        id: "burp-suite",
        tier: "standard",
        name: "Burp Suite Professional",
        shortDescription: "Standard security testing platform",
        description: "Implement Burp Suite for automated security testing.",
        pros: [
          "Good features",
          "Automated testing",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per license/year",
        pricingModel: "Subscription",
        officialWebsite: "https://portswigger.net",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹100,000/year",
        icon: FileCheck
      },
      {
        id: "rapid7",
        tier: "premium",
        name: "Rapid7 Insight Platform",
        shortDescription: "Premium security testing solution",
        description: "Deploy Rapid7 for comprehensive security testing.",
        pros: [
          "Advanced features",
          "Integrated testing",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.rapid7.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500,000+/year",
        icon: FileCheck
      }
    ]
  },
  {
    id: 22,
    category: "Security Documentation",
    text: "Is there comprehensive security documentation in place?",
    description: "Security documentation helps organizations maintain and communicate security policies and procedures.",
    helpText: "This includes having proper documentation of security policies, procedures, and controls.",
    icon: FileText,
    subQuestion: {
      id: "documentation-scope",
      text: "What is the scope of security documentation needed?",
      placeholder: "Enter scope",
      unit: "documents",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-security-documentation",
        tier: "open-source",
        name: "Basic Security Documentation Templates",
        shortDescription: "Free security documentation framework",
        description: "Use basic security documentation templates and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitydocumentation.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Documentation team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: FileText
      },
      {
        id: "confluence",
        tier: "standard",
        name: "Confluence Security Documentation",
        shortDescription: "Standard security documentation platform",
        description: "Implement Confluence for automated security documentation.",
        pros: [
          "Good features",
          "Automated documentation",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.atlassian.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Documentation team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,000/user/year",
        icon: FileText
      },
      {
        id: "sharepoint",
        tier: "premium",
        name: "SharePoint Security Documentation",
        shortDescription: "Premium security documentation solution",
        description: "Deploy SharePoint for comprehensive security documentation.",
        pros: [
          "Advanced features",
          "Integrated documentation",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Documentation team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹5,000+/user/year",
        icon: FileText
      }
    ]
  },
  {
    id: 23,
    category: "Security Training",
    text: "Is there a comprehensive security training program for employees?",
    description: "Security training helps employees understand and follow security best practices.",
    helpText: "This includes having proper security training programs and awareness campaigns.",
    icon: GraduationCap,
    subQuestion: {
      id: "training-frequency",
      text: "How often is security training conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-training",
        tier: "open-source",
        name: "Basic Security Training Materials",
        shortDescription: "Free security training framework",
        description: "Use basic security training materials and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitytraining.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: GraduationCap
      },
      {
        id: "security-awareness",
        tier: "standard",
        name: "Security Awareness Platform",
        shortDescription: "Standard security training platform",
        description: "Implement a security awareness platform for automated training.",
        pros: [
          "Good features",
          "Automated training",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.securityawareness.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹1,000/user/year",
        icon: GraduationCap
      },
      {
        id: "enterprise-training",
        tier: "premium",
        name: "Enterprise Security Training",
        shortDescription: "Premium security training solution",
        description: "Deploy enterprise security training for comprehensive employee education.",
        pros: [
          "Advanced features",
          "Integrated training",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.enterprisetraining.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹2,500+/user/year",
        icon: GraduationCap
      }
    ]
  },
  {
    id: 24,
    category: "Security Monitoring",
    text: "Is there a comprehensive security monitoring system in place?",
    description: "Security monitoring helps organizations detect and respond to security threats.",
    helpText: "This includes having proper security monitoring tools and processes.",
    icon: Activity,
    subQuestion: {
      id: "monitoring-scope",
      text: "What is the scope of systems being monitored?",
      placeholder: "Enter scope",
      unit: "systems",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-monitoring",
        tier: "open-source",
        name: "Basic Security Monitoring",
        shortDescription: "Free security monitoring framework",
        description: "Use basic security monitoring tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitymonitoring.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Activity
      },
      {
        id: "splunk",
        tier: "standard",
        name: "Splunk Security",
        shortDescription: "Standard security monitoring platform",
        description: "Implement Splunk for automated security monitoring.",
        pros: [
          "Good features",
          "Automated monitoring",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per GB/day",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹100/GB/day",
        icon: Activity
      },
      {
        id: "exabeam",
        tier: "premium",
        name: "Exabeam Fusion SIEM",
        shortDescription: "Premium security monitoring solution",
        description: "Deploy Exabeam for comprehensive security monitoring.",
        pros: [
          "Advanced features",
          "Integrated monitoring",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.exabeam.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500,000+/year",
        icon: Activity
      }
    ]
  },
  {
    id: 25,
    category: "Vulnerability Management",
    text: "Is there a comprehensive vulnerability management program in place?",
    description: "Vulnerability management helps organizations identify and address security vulnerabilities.",
    helpText: "This includes having proper vulnerability scanning and management processes.",
    icon: ShieldAlert,
    subQuestion: {
      id: "scan-frequency",
      text: "How often are vulnerability scans conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-vulnerability-management",
        tier: "open-source",
        name: "Basic Vulnerability Management",
        shortDescription: "Free vulnerability management framework",
        description: "Use basic vulnerability management tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.vulnerabilitymanagement.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: ShieldAlert
      },
      {
        id: "nessus",
        tier: "standard",
        name: "Nessus Professional",
        shortDescription: "Standard vulnerability management platform",
        description: "Implement Nessus for automated vulnerability scanning.",
        pros: [
          "Good features",
          "Automated scanning",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per scanner/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.tenable.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹50,000/scanner/year",
        icon: ShieldAlert
      },
      {
        id: "qualys",
        tier: "premium",
        name: "Qualys Vulnerability Management",
        shortDescription: "Premium vulnerability management solution",
        description: "Deploy Qualys for comprehensive vulnerability management.",
        pros: [
          "Advanced features",
          "Integrated scanning",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.qualys.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹200,000+/year",
        icon: ShieldAlert
      }
    ]
  },
  {
    id: 26,
    category: "Security Access Control",
    text: "Is there a comprehensive access control system in place?",
    description: "Access control systems help organizations manage and monitor user access.",
    helpText: "This includes having proper access management and monitoring processes.",
    icon: UserCog,
    subQuestion: {
      id: "user-count",
      text: "How many users need access management?",
      placeholder: "Enter number",
      unit: "users",
      defaultValue: 0,
      min: 0,
      max: 100000
    },
    recommendations: [
      {
        id: "basic-access-control",
        tier: "open-source",
        name: "Basic Access Control",
        shortDescription: "Free access control framework",
        description: "Use basic access control tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.accesscontrol.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: UserCog
      },
      {
        id: "beyondtrust-pam",
        tier: "standard",
        name: "BeyondTrust Privileged Access Management",
        shortDescription: "Standard access control platform",
        description: "Implement BeyondTrust for automated access management.",
        pros: [
          "Good features",
          "Automated management",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.beyondtrust.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹5,000/user/year",
        icon: UserCog
      },
      {
        id: "cyberark-pam",
        tier: "premium",
        name: "CyberArk Privileged Access Management",
        shortDescription: "Premium access control solution",
        description: "Deploy CyberArk for comprehensive access management.",
        pros: [
          "Advanced features",
          "Integrated management",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.cyberark.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/user/year",
        icon: UserCog
      }
    ]
  },
  {
    id: 27,
    category: "Security Architecture",
    text: "Is there a comprehensive security architecture in place?",
    description: "Security architecture helps organizations design and implement secure systems.",
    helpText: "This includes having proper security architecture and design processes.",
    icon: Building2,
    subQuestion: {
      id: "architecture-frequency",
      text: "How often are security architecture reviews conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-architecture",
        tier: "open-source",
        name: "Basic Security Architecture",
        shortDescription: "Free security architecture framework",
        description: "Use basic security architecture tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securityarchitecture.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Building2
      },
      {
        id: "sabsa-framework",
        tier: "standard",
        name: "SABSA Framework",
        shortDescription: "Standard security architecture platform",
        description: "Implement SABSA for automated security architecture.",
        pros: [
          "Good features",
          "Automated architecture",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.sabsa.org",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹5,000/user/year",
        icon: Building2
      },
      {
        id: "togaf-security",
        tier: "premium",
        name: "TOGAF Security Architecture",
        shortDescription: "Premium security architecture solution",
        description: "Deploy TOGAF for comprehensive security architecture.",
        pros: [
          "Advanced features",
          "Integrated architecture",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.opengroup.org",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹20,000+/user/year",
        icon: Building2
      }
    ]
  },
  {
    id: 28,
    category: "Security Training",
    text: "Is there a comprehensive security training program in place?",
    description: "Security training helps organizations educate employees about security best practices.",
    helpText: "This includes having proper security training and education processes.",
    icon: GraduationCap,
    subQuestion: {
      id: "training-frequency",
      text: "How often are security training sessions conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-training",
        tier: "open-source",
        name: "Basic Security Training",
        shortDescription: "Free security training framework",
        description: "Use basic security training tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitytraining.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: GraduationCap
      },
      {
        id: "sans-training",
        tier: "standard",
        name: "SANS Security Training",
        shortDescription: "Standard security training platform",
        description: "Implement SANS for automated security training.",
        pros: [
          "Good features",
          "Automated training",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.sans.org",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹3,000/user/year",
        icon: GraduationCap
      },
      {
        id: "offsec-training",
        tier: "premium",
        name: "Offensive Security Training",
        shortDescription: "Premium security training solution",
        description: "Deploy Offensive Security for comprehensive security training.",
        pros: [
          "Advanced features",
          "Integrated training",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.offensive-security.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/user/year",
        icon: GraduationCap
      }
    ]
  },
  {
    id: 29,
    category: "Security Metrics",
    text: "Is there a comprehensive security metrics program in place?",
    description: "Security metrics help organizations measure and track security performance.",
    helpText: "This includes having proper security metrics and reporting processes.",
    icon: BarChart,
    subQuestion: {
      id: "metrics-frequency",
      text: "How often are security metrics reviewed?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-metrics",
        tier: "open-source",
        name: "Basic Security Metrics",
        shortDescription: "Free security metrics framework",
        description: "Use basic security metrics tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitymetrics.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: BarChart
      },
      {
        id: "splunk-metrics",
        tier: "standard",
        name: "Splunk Security Metrics",
        shortDescription: "Standard security metrics platform",
        description: "Implement Splunk for automated security metrics.",
        pros: [
          "Good features",
          "Automated metrics",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per GB/day",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹100/GB/day",
        icon: BarChart
      },
      {
        id: "exabeam-metrics",
        tier: "premium",
        name: "Exabeam Security Metrics",
        shortDescription: "Premium security metrics solution",
        description: "Deploy Exabeam for comprehensive security metrics.",
        pros: [
          "Advanced features",
          "Integrated metrics",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.exabeam.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500,000+/year",
        icon: BarChart
      }
    ]
  },
  {
    id: 30,
    category: "Security Automation",
    text: "Is there a comprehensive security automation program in place?",
    description: "Security automation helps organizations streamline security processes.",
    helpText: "This includes having proper security automation and orchestration processes.",
    icon: Bot,
    subQuestion: {
      id: "automation-scope",
      text: "What is the scope of security automation needed?",
      placeholder: "Enter scope",
      unit: "processes",
      defaultValue: 0,
      min: 0,
      max: 100
    },
    recommendations: [
      {
        id: "basic-security-automation",
        tier: "open-source",
        name: "Basic Security Automation",
        shortDescription: "Free security automation framework",
        description: "Use basic security automation tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securityautomation.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Bot
      },
      {
        id: "ansible-security",
        tier: "standard",
        name: "Ansible Security Automation",
        shortDescription: "Standard security automation platform",
        description: "Implement Ansible for automated security automation.",
        pros: [
          "Good features",
          "Automated processes",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per node/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.ansible.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹1,000/node/year",
        icon: Bot
      },
      {
        id: "demisto-automation",
        tier: "premium",
        name: "Demisto Security Automation",
        shortDescription: "Premium security automation solution",
        description: "Deploy Demisto for comprehensive security automation.",
        pros: [
          "Advanced features",
          "Integrated automation",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.demisto.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹50,000+/year",
        icon: Bot
      }
    ]
  },
  {
    id: 31,
    category: "Security Integration",
    text: "Is there a comprehensive security integration program in place?",
    description: "Security integration helps organizations connect security tools and processes.",
    helpText: "This includes having proper security integration and interoperability processes.",
    icon: Link,
    subQuestion: {
      id: "integration-scope",
      text: "What is the scope of security integration needed?",
      placeholder: "Enter scope",
      unit: "tools",
      defaultValue: 0,
      min: 0,
      max: 50
    },
    recommendations: [
      {
        id: "basic-security-integration",
        tier: "open-source",
        name: "Basic Security Integration",
        shortDescription: "Free security integration framework",
        description: "Use basic security integration tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securityintegration.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Link
      },
      {
        id: "mulesoft-security",
        tier: "standard",
        name: "MuleSoft Security Integration",
        shortDescription: "Standard security integration platform",
        description: "Implement MuleSoft for automated security integration.",
        pros: [
          "Good features",
          "Automated integration",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per API/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.mulesoft.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹5,000/API/year",
        icon: Link
      },
      {
        id: "boomi-security",
        tier: "premium",
        name: "Boomi Security Integration",
        shortDescription: "Premium security integration solution",
        description: "Deploy Boomi for comprehensive security integration.",
        pros: [
          "Advanced features",
          "Integrated platform",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.boomi.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹100,000+/year",
        icon: Link
      }
    ]
  },
  {
    id: 32,
    category: "Risk Management",
    text: "Is there a comprehensive risk management program in place?",
    description: "Risk management helps organizations identify and mitigate security risks.",
    helpText: "This includes having proper risk assessment and mitigation processes.",
    icon: AlertCircle,
    subQuestion: {
      id: "risk-frequency",
      text: "How often are risk assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-risk-management",
        tier: "open-source",
        name: "Basic Risk Management",
        shortDescription: "Free risk management framework",
        description: "Use basic risk management tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.riskmanagement.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Risk team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: AlertCircle
      },
      {
        id: "servicenow",
        tier: "standard",
        name: "ServiceNow GRC",
        shortDescription: "Standard risk management platform",
        description: "Implement ServiceNow GRC for automated risk management.",
        pros: [
          "Good features",
          "Automated assessment",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Risk team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹200,000/year",
        icon: AlertCircle
      },
      {
        id: "metricstream",
        tier: "premium",
        name: "MetricStream GRC Platform",
        shortDescription: "Premium risk management solution",
        description: "Deploy MetricStream for comprehensive risk management.",
        pros: [
          "Advanced features",
          "Integrated assessment",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.metricstream.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Risk team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,000,000+/year",
        icon: AlertCircle
      }
    ]
  },
  {
    id: 33,
    category: "Security Architecture",
    text: "Is there a comprehensive security architecture in place?",
    description: "Security architecture helps organizations design and implement secure systems.",
    helpText: "This includes having proper security design and implementation processes.",
    icon: Building2,
    subQuestion: {
      id: "architecture-review",
      text: "How often is the security architecture reviewed?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-architecture",
        tier: "open-source",
        name: "Basic Security Architecture",
        shortDescription: "Free security architecture framework",
        description: "Use basic security architecture tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securityarchitecture.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Architecture team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Building2
      },
      {
        id: "sabsa",
        tier: "standard",
        name: "SABSA Framework",
        shortDescription: "Standard security architecture platform",
        description: "Implement SABSA for automated security architecture.",
        pros: [
          "Good features",
          "Automated design",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.sabsa.org",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Architecture team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹100,000/year",
        icon: Building2
      },
      {
        id: "togaf",
        tier: "premium",
        name: "TOGAF Security Architecture",
        shortDescription: "Premium security architecture solution",
        description: "Deploy TOGAF for comprehensive security architecture.",
        pros: [
          "Advanced features",
          "Integrated design",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.opengroup.org",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Architecture team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500,000+/year",
        icon: Building2
      }
    ]
  },
  {
    id: 34,
    category: "System Hardening",
    text: "Is there a comprehensive system hardening program in place?",
    description: "System hardening helps organizations secure their systems and applications.",
    helpText: "This includes having proper system hardening and assessment processes.",
    icon: Shield,
    subQuestion: {
      id: "hardening-frequency",
      text: "How often are hardening assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-system-hardening",
        tier: "open-source",
        name: "Basic System Hardening",
        shortDescription: "Free system hardening framework",
        description: "Use basic system hardening tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.systemhardening.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Shield
      },
      {
        id: "cis-benchmarks",
        tier: "standard",
        name: "CIS Benchmarks",
        shortDescription: "Standard system hardening platform",
        description: "Implement CIS Benchmarks for automated system hardening.",
        pros: [
          "Good features",
          "Automated hardening",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per system/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.cisecurity.org",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹1,000/system/year",
        icon: Shield
      },
      {
        id: "tenable",
        tier: "premium",
        name: "Tenable Security Center",
        shortDescription: "Premium system hardening solution",
        description: "Deploy Tenable for comprehensive system hardening.",
        pros: [
          "Advanced features",
          "Integrated hardening",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.tenable.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹5,000+/system/year",
        icon: Shield
      }
    ]
  },
  {
    id: 35,
    category: "Security Testing",
    text: "Is there a comprehensive security testing program in place?",
    description: "Security testing helps organizations identify and fix security vulnerabilities.",
    helpText: "This includes having proper security testing and assessment processes.",
    icon: TestTube,
    subQuestion: {
      id: "testing-frequency",
      text: "How often are security tests conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-testing",
        tier: "open-source",
        name: "Basic Security Testing",
        shortDescription: "Free security testing framework",
        description: "Use basic security testing tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitytesting.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: TestTube
      },
      {
        id: "burp-suite",
        tier: "standard",
        name: "Burp Suite Professional",
        shortDescription: "Standard security testing platform",
        description: "Implement Burp Suite for automated security testing.",
        pros: [
          "Good features",
          "Automated testing",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://portswigger.net",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹15,000/user/year",
        icon: TestTube
      },
      {
        id: "rapid7",
        tier: "premium",
        name: "Rapid7 Insight Platform",
        shortDescription: "Premium security testing solution",
        description: "Deploy Rapid7 for comprehensive security testing.",
        pros: [
          "Advanced features",
          "Integrated testing",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.rapid7.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹50,000+/year",
        icon: TestTube
      }
    ]
  },
  {
    id: 36,
    category: "Security Documentation",
    text: "Is there a comprehensive security documentation program in place?",
    description: "Security documentation helps organizations maintain and share security knowledge.",
    helpText: "This includes having proper security documentation and knowledge management processes.",
    icon: FileText,
    subQuestion: {
      id: "documentation-scope",
      text: "What is the scope of security documentation needed?",
      placeholder: "Enter scope",
      unit: "documents",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-security-documentation",
        tier: "open-source",
        name: "Basic Security Documentation",
        shortDescription: "Free security documentation framework",
        description: "Use basic security documentation tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitydocumentation.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Documentation team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: FileText
      },
      {
        id: "confluence",
        tier: "standard",
        name: "Confluence Security Documentation",
        shortDescription: "Standard security documentation platform",
        description: "Implement Confluence for automated security documentation.",
        pros: [
          "Good features",
          "Automated documentation",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.atlassian.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Documentation team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,000/user/year",
        icon: FileText
      },
      {
        id: "sharepoint",
        tier: "premium",
        name: "SharePoint Security Documentation",
        shortDescription: "Premium security documentation solution",
        description: "Deploy SharePoint for comprehensive security documentation.",
        pros: [
          "Advanced features",
          "Integrated documentation",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Documentation team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/user/year",
        icon: FileText
      }
    ]
  },
  {
    id: 37,
    category: "Security Awareness",
    text: "Is there a comprehensive security awareness program in place?",
    description: "Security awareness helps organizations educate employees about security risks.",
    helpText: "This includes having proper security awareness and training processes.",
    icon: Brain,
    subQuestion: {
      id: "awareness-frequency",
      text: "How often are security awareness sessions conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-awareness",
        tier: "open-source",
        name: "Basic Security Awareness",
        shortDescription: "Free security awareness framework",
        description: "Use basic security awareness tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securityawareness.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Brain
      },
      {
        id: "knowbe4",
        tier: "standard",
        name: "KnowBe4 Security Awareness",
        shortDescription: "Standard security awareness platform",
        description: "Implement KnowBe4 for automated security awareness.",
        pros: [
          "Good features",
          "Automated training",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.knowbe4.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹1,000/user/year",
        icon: Brain
      },
      {
        id: "proofpoint",
        tier: "premium",
        name: "Proofpoint Security Awareness",
        shortDescription: "Premium security awareness solution",
        description: "Deploy Proofpoint for comprehensive security awareness.",
        pros: [
          "Advanced features",
          "Integrated training",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.proofpoint.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹3,000+/user/year",
        icon: Brain
      }
    ]
  },
  {
    id: 38,
    category: "Security Monitoring",
    text: "Is there a comprehensive security monitoring system in place?",
    description: "Security monitoring helps organizations detect and respond to security threats.",
    helpText: "This includes having proper security monitoring and alerting processes.",
    icon: Activity,
    subQuestion: {
      id: "monitoring-scope",
      text: "What is the scope of systems being monitored?",
      placeholder: "Enter scope",
      unit: "systems",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-security-monitoring",
        tier: "open-source",
        name: "Basic Security Monitoring",
        shortDescription: "Free security monitoring framework",
        description: "Use basic security monitoring tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitymonitoring.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Activity
      },
      {
        id: "splunk-security",
        tier: "standard",
        name: "Splunk Security",
        shortDescription: "Standard security monitoring platform",
        description: "Implement Splunk for automated security monitoring.",
        pros: [
          "Good features",
          "Automated monitoring",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per GB/day",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹100/GB/day",
        icon: Activity
      },
      {
        id: "exabeam-fusion",
        tier: "premium",
        name: "Exabeam Fusion SIEM",
        shortDescription: "Premium security monitoring solution",
        description: "Deploy Exabeam for comprehensive security monitoring.",
        pros: [
          "Advanced features",
          "Integrated monitoring",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.exabeam.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500,000+/year",
        icon: Activity
      }
    ]
  },
  {
    id: 39,
    category: "Vulnerability Management",
    text: "Is there a comprehensive vulnerability management program in place?",
    description: "Vulnerability management helps organizations identify and address security vulnerabilities.",
    helpText: "This includes having proper vulnerability scanning and management processes.",
    icon: ShieldAlert,
    subQuestion: {
      id: "scan-frequency",
      text: "How often are vulnerability scans conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-vulnerability-management",
        tier: "open-source",
        name: "Basic Vulnerability Management",
        shortDescription: "Free vulnerability management framework",
        description: "Use basic vulnerability management tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.vulnerabilitymanagement.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: ShieldAlert
      },
      {
        id: "nessus-professional",
        tier: "standard",
        name: "Nessus Professional",
        shortDescription: "Standard vulnerability management platform",
        description: "Implement Nessus for automated vulnerability scanning.",
        pros: [
          "Good features",
          "Automated scanning",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per scanner/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.tenable.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹50,000/scanner/year",
        icon: ShieldAlert
      },
      {
        id: "qualys-vm",
        tier: "premium",
        name: "Qualys Vulnerability Management",
        shortDescription: "Premium vulnerability management solution",
        description: "Deploy Qualys for comprehensive vulnerability management.",
        pros: [
          "Advanced features",
          "Integrated scanning",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.qualys.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹200,000+/year",
        icon: ShieldAlert
      }
    ]
  },
  {
    id: 40,
    category: "Security Access Control",
    text: "Is there a comprehensive access control system in place?",
    description: "Access control systems help organizations manage and monitor user access.",
    helpText: "This includes having proper access management and monitoring processes.",
    icon: UserCog,
    subQuestion: {
      id: "user-count",
      text: "How many users need access management?",
      placeholder: "Enter number",
      unit: "users",
      defaultValue: 0,
      min: 0,
      max: 100000
    },
    recommendations: [
      {
        id: "basic-access-control",
        tier: "open-source",
        name: "Basic Access Control",
        shortDescription: "Free access control framework",
        description: "Use basic access control tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.accesscontrol.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: UserCog
      },
      {
        id: "beyondtrust-pam",
        tier: "standard",
        name: "BeyondTrust Privileged Access Management",
        shortDescription: "Standard access control platform",
        description: "Implement BeyondTrust for automated access management.",
        pros: [
          "Good features",
          "Automated management",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.beyondtrust.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹5,000/user/year",
        icon: UserCog
      },
      {
        id: "cyberark-pam",
        tier: "premium",
        name: "CyberArk Privileged Access Management",
        shortDescription: "Premium access control solution",
        description: "Deploy CyberArk for comprehensive access management.",
        pros: [
          "Advanced features",
          "Integrated management",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.cyberark.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/user/year",
        icon: UserCog
      }
    ]
  },
  {
    id: 41,
    category: "Identity Management",
    text: "Is there a comprehensive identity management system in place?",
    description: "Identity management helps organizations manage user identities and access rights.",
    helpText: "This includes having proper identity management and access control processes.",
    icon: Users,
    subQuestion: {
      id: "identity-count",
      text: "How many identities need to be managed?",
      placeholder: "Enter number",
      unit: "identities",
      defaultValue: 0,
      min: 0,
      max: 100000
    },
    recommendations: [
      {
        id: "basic-identity-management",
        tier: "open-source",
        name: "Basic Identity Management",
        shortDescription: "Free identity management framework",
        description: "Use basic identity management tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.identitymanagement.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Users
      },
      {
        id: "sailpoint-identitynow",
        tier: "standard",
        name: "SailPoint IdentityNow",
        shortDescription: "Standard identity management platform",
        description: "Implement SailPoint for automated identity management.",
        pros: [
          "Good features",
          "Automated management",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per identity/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.sailpoint.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,000/identity/year",
        icon: Users
      },
      {
        id: "forgerock-identity",
        tier: "premium",
        name: "ForgeRock Identity Platform",
        shortDescription: "Premium identity management solution",
        description: "Deploy ForgeRock for comprehensive identity management.",
        pros: [
          "Advanced features",
          "Integrated management",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.forgerock.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹5,000+/identity/year",
        icon: Users
      }
    ]
  },
  {
    id: 42,
    category: "Incident Response",
    text: "Is there a comprehensive incident response plan in place?",
    description: "Incident response helps organizations detect and respond to security incidents.",
    helpText: "This includes having proper incident response and handling processes.",
    icon: AlertTriangle,
    subQuestion: {
      id: "response-time",
      text: "What is the target incident response time?",
      placeholder: "Enter response time",
      unit: "hours",
      defaultValue: 0,
      min: 0,
      max: 168
    },
    recommendations: [
      {
        id: "basic-incident-response",
        tier: "open-source",
        name: "Basic Incident Response",
        shortDescription: "Free incident response framework",
        description: "Use basic incident response tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.incidentresponse.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: AlertTriangle
      },
      {
        id: "demisto-soar",
        tier: "standard",
        name: "Demisto SOAR Platform",
        shortDescription: "Standard incident response platform",
        description: "Implement Demisto for automated incident response.",
        pros: [
          "Good features",
          "Automated response",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per incident/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.demisto.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹10,000/incident/year",
        icon: AlertTriangle
      },
      {
        id: "splunk-phantom",
        tier: "premium",
        name: "Splunk Phantom",
        shortDescription: "Premium incident response solution",
        description: "Deploy Splunk Phantom for comprehensive incident response.",
        pros: [
          "Advanced features",
          "Integrated response",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹50,000+/year",
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 43,
    category: "Disaster Recovery",
    text: "Is there a comprehensive disaster recovery plan in place?",
    description: "Disaster recovery helps organizations recover from system failures and disasters.",
    helpText: "This includes having proper disaster recovery and business continuity processes.",
    icon: Cloud,
    subQuestion: {
      id: "recovery-time",
      text: "What is the target recovery time objective (RTO)?",
      placeholder: "Enter recovery time",
      unit: "hours",
      defaultValue: 0,
      min: 0,
      max: 168
    },
    recommendations: [
      {
        id: "basic-disaster-recovery",
        tier: "open-source",
        name: "Basic Disaster Recovery",
        shortDescription: "Free disaster recovery framework",
        description: "Use basic disaster recovery tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.disasterrecovery.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Cloud
      },
      {
        id: "veeam-backup",
        tier: "standard",
        name: "Veeam Backup & Replication",
        shortDescription: "Standard disaster recovery platform",
        description: "Implement Veeam for automated disaster recovery.",
        pros: [
          "Good features",
          "Automated recovery",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per workload/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.veeam.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹20,000/workload/year",
        icon: Cloud
      },
      {
        id: "zerto",
        tier: "premium",
        name: "Zerto IT Resilience Platform",
        shortDescription: "Premium disaster recovery solution",
        description: "Deploy Zerto for comprehensive disaster recovery.",
        pros: [
          "Advanced features",
          "Integrated recovery",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.zerto.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹100,000+/year",
        icon: Cloud
      }
    ]
  },
  {
    id: 44,
    category: "Security Compliance",
    text: "Is there a comprehensive security compliance program in place?",
    description: "Security compliance helps organizations meet regulatory requirements.",
    helpText: "This includes having proper compliance assessment and reporting processes.",
    icon: FileCheck,
    subQuestion: {
      id: "compliance-frequency",
      text: "How often are compliance assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-compliance",
        tier: "open-source",
        name: "Basic Security Compliance",
        shortDescription: "Free security compliance framework",
        description: "Use basic security compliance tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitycompliance.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: FileCheck
      },
      {
        id: "onetrust-grc",
        tier: "standard",
        name: "OneTrust GRC",
        shortDescription: "Standard security compliance platform",
        description: "Implement OneTrust for automated security compliance.",
        pros: [
          "Good features",
          "Automated compliance",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.onetrust.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹3,000/user/year",
        icon: FileCheck
      },
      {
        id: "archer-grc",
        tier: "premium",
        name: "Archer GRC Platform",
        shortDescription: "Premium security compliance solution",
        description: "Deploy Archer for comprehensive security compliance.",
        pros: [
          "Advanced features",
          "Integrated compliance",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.archer.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/user/year",
        icon: FileCheck
      }
    ]
  },
  {
    id: 45,
    category: "Risk Management",
    text: "Is there a comprehensive risk management program in place?",
    description: "Risk management helps organizations identify and mitigate security risks.",
    helpText: "This includes having proper risk assessment and mitigation processes.",
    icon: AlertCircle,
    subQuestion: {
      id: "risk-frequency",
      text: "How often are risk assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-risk-management",
        tier: "open-source",
        name: "Basic Risk Management",
        shortDescription: "Free risk management framework",
        description: "Use basic risk management tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.riskmanagement.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Risk team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: AlertCircle
      },
      {
        id: "servicenow-grc",
        tier: "standard",
        name: "ServiceNow GRC",
        shortDescription: "Standard risk management platform",
        description: "Implement ServiceNow for automated risk management.",
        pros: [
          "Good features",
          "Automated assessment",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Risk team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹4,000/user/year",
        icon: AlertCircle
      },
      {
        id: "metricstream-grc",
        tier: "premium",
        name: "MetricStream GRC Platform",
        shortDescription: "Premium risk management solution",
        description: "Deploy MetricStream for comprehensive risk management.",
        pros: [
          "Advanced features",
          "Integrated assessment",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.metricstream.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Risk team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹15,000+/user/year",
        icon: AlertCircle
      }
    ]
  },
  {
    id: 46,
    category: "Security Architecture",
    text: "Is there a comprehensive security architecture in place?",
    description: "Security architecture helps organizations design and implement secure systems.",
    helpText: "This includes having proper security architecture and design processes.",
    icon: Building2,
    subQuestion: {
      id: "architecture-frequency",
      text: "How often are security architecture reviews conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-architecture",
        tier: "open-source",
        name: "Basic Security Architecture",
        shortDescription: "Free security architecture framework",
        description: "Use basic security architecture tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securityarchitecture.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Architecture team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Building2
      },
      {
        id: "sabsa-framework",
        tier: "standard",
        name: "SABSA Framework",
        shortDescription: "Standard security architecture platform",
        description: "Implement SABSA for automated security architecture.",
        pros: [
          "Good features",
          "Automated architecture",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.sabsa.org",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Architecture team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹4,000/user/year",
        icon: Building2
      },
      {
        id: "togaf-security",
        tier: "premium",
        name: "TOGAF Security Architecture",
        shortDescription: "Premium security architecture solution",
        description: "Deploy TOGAF for comprehensive security architecture.",
        pros: [
          "Advanced features",
          "Integrated architecture",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.opengroup.org",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Architecture team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹20,000+/user/year",
        icon: Building2
      }
    ]
  },
  {
    id: 47,
    category: "System Hardening",
    text: "Is there a comprehensive system hardening program in place?",
    description: "System hardening helps organizations secure their systems and applications.",
    helpText: "This includes having proper system hardening and configuration management processes.",
    icon: Shield,
    subQuestion: {
      id: "hardening-frequency",
      text: "How often are hardening assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-system-hardening",
        tier: "open-source",
        name: "Basic System Hardening",
        shortDescription: "Free system hardening framework",
        description: "Use basic system hardening tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.systemhardening.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Shield
      },
      {
        id: "cis-benchmarks",
        tier: "standard",
        name: "CIS Benchmarks",
        shortDescription: "Standard system hardening platform",
        description: "Implement CIS Benchmarks for automated system hardening.",
        pros: [
          "Good features",
          "Automated hardening",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per system/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.cisecurity.org",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,000/system/year",
        icon: Shield
      },
      {
        id: "tenable-security-center",
        tier: "premium",
        name: "Tenable Security Center",
        shortDescription: "Premium system hardening solution",
        description: "Deploy Tenable for comprehensive system hardening.",
        pros: [
          "Advanced features",
          "Integrated hardening",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.tenable.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹50,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 48,
    category: "Security Testing",
    text: "Is there a comprehensive security testing program in place?",
    description: "Security testing helps organizations identify and fix security vulnerabilities.",
    helpText: "This includes having proper security testing and assessment processes.",
    icon: TestTube,
    subQuestion: {
      id: "testing-frequency",
      text: "How often are security tests conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-testing",
        tier: "open-source",
        name: "Basic Security Testing",
        shortDescription: "Free security testing framework",
        description: "Use basic security testing tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitytesting.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: TestTube
      },
      {
        id: "burp-suite-pro",
        tier: "standard",
        name: "Burp Suite Professional",
        shortDescription: "Standard security testing platform",
        description: "Implement Burp Suite for automated security testing.",
        pros: [
          "Good features",
          "Automated testing",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://portswigger.net",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹15,000/user/year",
        icon: TestTube
      },
      {
        id: "rapid7-insight",
        tier: "premium",
        name: "Rapid7 Insight Platform",
        shortDescription: "Premium security testing solution",
        description: "Deploy Rapid7 for comprehensive security testing.",
        pros: [
          "Advanced features",
          "Integrated testing",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.rapid7.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹50,000+/year",
        icon: TestTube
      }
    ]
  },
  {
    id: 49,
    category: "Security Documentation",
    text: "Is there a comprehensive security documentation program in place?",
    description: "Security documentation helps organizations maintain and share security knowledge.",
    helpText: "This includes having proper security documentation and knowledge management processes.",
    icon: FileText,
    subQuestion: {
      id: "documentation-scope",
      text: "What is the scope of security documentation needed?",
      placeholder: "Enter scope",
      unit: "documents",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-security-documentation",
        tier: "open-source",
        name: "Basic Security Documentation",
        shortDescription: "Free security documentation framework",
        description: "Use basic security documentation tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitydocumentation.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Documentation team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: FileText
      },
      {
        id: "confluence-security",
        tier: "standard",
        name: "Confluence Security Documentation",
        shortDescription: "Standard security documentation platform",
        description: "Implement Confluence for automated security documentation.",
        pros: [
          "Good features",
          "Automated documentation",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.atlassian.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Documentation team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,000/user/year",
        icon: FileText
      },
      {
        id: "sharepoint-security",
        tier: "premium",
        name: "SharePoint Security Documentation",
        shortDescription: "Premium security documentation solution",
        description: "Deploy SharePoint for comprehensive security documentation.",
        pros: [
          "Advanced features",
          "Integrated documentation",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Documentation team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/user/year",
        icon: FileText
      }
    ]
  },
  {
    id: 50,
    category: "Security Awareness",
    text: "Is there a comprehensive security awareness program in place?",
    description: "Security awareness helps organizations educate employees about security risks.",
    helpText: "This includes having proper security awareness and training processes.",
    icon: Brain,
    subQuestion: {
      id: "awareness-frequency",
      text: "How often are security awareness sessions conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-awareness",
        tier: "open-source",
        name: "Basic Security Awareness",
        shortDescription: "Free security awareness framework",
        description: "Use basic security awareness tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securityawareness.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Brain
      },
      {
        id: "knowbe4-awareness",
        tier: "standard",
        name: "KnowBe4 Security Awareness",
        shortDescription: "Standard security awareness platform",
        description: "Implement KnowBe4 for automated security awareness.",
        pros: [
          "Good features",
          "Automated training",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.knowbe4.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹1,500/user/year",
        icon: Brain
      },
      {
        id: "proofpoint-awareness",
        tier: "premium",
        name: "Proofpoint Security Awareness",
        shortDescription: "Premium security awareness solution",
        description: "Deploy Proofpoint for comprehensive security awareness.",
        pros: [
          "Advanced features",
          "Integrated training",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.proofpoint.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹3,000+/user/year",
        icon: Brain
      }
    ]
  },
  {
    id: 51,
    category: "Security Monitoring",
    text: "Is there a comprehensive security monitoring system in place?",
    description: "Security monitoring helps organizations detect and respond to security threats.",
    helpText: "This includes having proper security monitoring and alerting processes.",
    icon: Activity,
    subQuestion: {
      id: "monitoring-scope",
      text: "What is the scope of systems being monitored?",
      placeholder: "Enter scope",
      unit: "systems",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-security-monitoring",
        tier: "open-source",
        name: "Basic Security Monitoring",
        shortDescription: "Free security monitoring framework",
        description: "Use basic security monitoring tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitymonitoring.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Activity
      },
      {
        id: "splunk-security",
        tier: "standard",
        name: "Splunk Security",
        shortDescription: "Standard security monitoring platform",
        description: "Implement Splunk for automated security monitoring.",
        pros: [
          "Good features",
          "Automated monitoring",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per GB/day",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹100/GB/day",
        icon: Activity
      },
      {
        id: "exabeam-fusion",
        tier: "premium",
        name: "Exabeam Fusion SIEM",
        shortDescription: "Premium security monitoring solution",
        description: "Deploy Exabeam for comprehensive security monitoring.",
        pros: [
          "Advanced features",
          "Integrated monitoring",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.exabeam.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500,000+/year",
        icon: Activity
      }
    ]
  },
  {
    id: 52,
    category: "Vulnerability Management",
    text: "Is there a comprehensive vulnerability management program in place?",
    description: "Vulnerability management helps organizations identify and remediate security vulnerabilities.",
    helpText: "This includes having proper vulnerability scanning and management processes.",
    icon: ShieldAlert,
    subQuestion: {
      id: "vulnerability-frequency",
      text: "How often are vulnerability scans conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-vulnerability-management",
        tier: "open-source",
        name: "Basic Vulnerability Management",
        shortDescription: "Free vulnerability management framework",
        description: "Use basic vulnerability management tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.vulnerabilitymanagement.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: ShieldAlert
      },
      {
        id: "nessus-professional",
        tier: "standard",
        name: "Nessus Professional",
        shortDescription: "Standard vulnerability management platform",
        description: "Implement Nessus for automated vulnerability management.",
        pros: [
          "Good features",
          "Automated scanning",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per IP/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.tenable.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹5,000/IP/year",
        icon: ShieldAlert
      },
      {
        id: "qualys-vm",
        tier: "premium",
        name: "Qualys Vulnerability Management",
        shortDescription: "Premium vulnerability management solution",
        description: "Deploy Qualys for comprehensive vulnerability management.",
        pros: [
          "Advanced features",
          "Integrated scanning",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.qualys.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹100,000+/year",
        icon: ShieldAlert
      }
    ]
  },
  {
    id: 53,
    category: "Security Access Control",
    text: "Is there a comprehensive access control system in place?",
    description: "Access control helps organizations manage and secure user access to resources.",
    helpText: "This includes having proper access control and user management processes.",
    icon: UserCog,
    subQuestion: {
      id: "access-users",
      text: "How many users need access management?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 0,
      min: 0,
      max: 10000
    },
    recommendations: [
      {
        id: "basic-access-control",
        tier: "open-source",
        name: "Basic Access Control",
        shortDescription: "Free access control framework",
        description: "Use basic access control tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.accesscontrol.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: UserCog
      },
      {
        id: "beyondtrust-pam",
        tier: "standard",
        name: "BeyondTrust Privileged Access Management",
        shortDescription: "Standard access control platform",
        description: "Implement BeyondTrust for automated access control.",
        pros: [
          "Good features",
          "Automated management",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.beyondtrust.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹3,000/user/year",
        icon: UserCog
      },
      {
        id: "cyberark-pam",
        tier: "premium",
        name: "CyberArk Privileged Access Management",
        shortDescription: "Premium access control solution",
        description: "Deploy CyberArk for comprehensive access control.",
        pros: [
          "Advanced features",
          "Integrated management",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.cyberark.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/user/year",
        icon: UserCog
      }
    ]
  },
  {
    id: 54,
    category: "Identity Management",
    text: "Is there a comprehensive identity management system in place?",
    description: "Identity management helps organizations manage user identities and access rights.",
    helpText: "This includes having proper identity management and user provisioning processes.",
    icon: Users,
    subQuestion: {
      id: "identity-count",
      text: "How many identities need management?",
      placeholder: "Enter number of identities",
      unit: "identities",
      defaultValue: 0,
      min: 0,
      max: 100000
    },
    recommendations: [
      {
        id: "basic-identity-management",
        tier: "open-source",
        name: "Basic Identity Management",
        shortDescription: "Free identity management framework",
        description: "Use basic identity management tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.identitymanagement.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Users
      },
      {
        id: "sailpoint-identitynow",
        tier: "standard",
        name: "SailPoint IdentityNow",
        shortDescription: "Standard identity management platform",
        description: "Implement SailPoint for automated identity management.",
        pros: [
          "Good features",
          "Automated management",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per identity/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.sailpoint.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹500/identity/year",
        icon: Users
      },
      {
        id: "forgerock-identity",
        tier: "premium",
        name: "ForgeRock Identity Platform",
        shortDescription: "Premium identity management solution",
        description: "Deploy ForgeRock for comprehensive identity management.",
        pros: [
          "Advanced features",
          "Integrated management",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.forgerock.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,000+/identity/year",
        icon: Users
      }
    ]
  },
  {
    id: 55,
    category: "Incident Response",
    text: "Is there a comprehensive incident response plan in place?",
    description: "Incident response helps organizations detect and respond to security incidents.",
    helpText: "This includes having proper incident response and handling processes.",
    icon: AlertTriangle,
    subQuestion: {
      id: "response-time",
      text: "What is the target incident response time?",
      placeholder: "Enter response time",
      unit: "hours",
      defaultValue: 0,
      min: 0,
      max: 72
    },
    recommendations: [
      {
        id: "basic-incident-response",
        tier: "open-source",
        name: "Basic Incident Response",
        shortDescription: "Free incident response framework",
        description: "Use basic incident response tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.incidentresponse.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: AlertTriangle
      },
      {
        id: "demisto-soar",
        tier: "standard",
        name: "Demisto SOAR Platform",
        shortDescription: "Standard incident response platform",
        description: "Implement Demisto for automated incident response.",
        pros: [
          "Good features",
          "Automated response",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per incident/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.demisto.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹10,000/incident/year",
        icon: AlertTriangle
      },
      {
        id: "splunk-phantom",
        tier: "premium",
        name: "Splunk Phantom",
        shortDescription: "Premium incident response solution",
        description: "Deploy Splunk Phantom for comprehensive incident response.",
        pros: [
          "Advanced features",
          "Integrated response",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹50,000+/year",
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 56,
    category: "Disaster Recovery",
    text: "Is there a comprehensive disaster recovery plan in place?",
    description: "Disaster recovery helps organizations recover from system failures and disasters.",
    helpText: "This includes having proper disaster recovery and business continuity processes.",
    icon: Cloud,
    subQuestion: {
      id: "recovery-time",
      text: "What is the target recovery time objective (RTO)?",
      placeholder: "Enter recovery time",
      unit: "hours",
      defaultValue: 0,
      min: 0,
      max: 168
    },
    recommendations: [
      {
        id: "basic-disaster-recovery",
        tier: "open-source",
        name: "Basic Disaster Recovery",
        shortDescription: "Free disaster recovery framework",
        description: "Use basic disaster recovery tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.disasterrecovery.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Cloud
      },
      {
        id: "veeam-backup",
        tier: "standard",
        name: "Veeam Backup & Replication",
        shortDescription: "Standard disaster recovery platform",
        description: "Implement Veeam for automated disaster recovery.",
        pros: [
          "Good features",
          "Automated recovery",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per workload/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.veeam.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹5,000/workload/year",
        icon: Cloud
      },
      {
        id: "zerto-resilience",
        tier: "premium",
        name: "Zerto IT Resilience Platform",
        shortDescription: "Premium disaster recovery solution",
        description: "Deploy Zerto for comprehensive disaster recovery.",
        pros: [
          "Advanced features",
          "Integrated recovery",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.zerto.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹100,000+/year",
        icon: Cloud
      }
    ]
  },
  {
    id: 57,
    category: "Security Compliance",
    text: "Is there a comprehensive security compliance program in place?",
    description: "Security compliance helps organizations meet regulatory requirements.",
    helpText: "This includes having proper compliance and audit processes.",
    icon: FileCheck,
    subQuestion: {
      id: "compliance-frequency",
      text: "How often are compliance assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-compliance",
        tier: "open-source",
        name: "Basic Security Compliance",
        shortDescription: "Free security compliance framework",
        description: "Use basic security compliance tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitycompliance.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: FileCheck
      },
      {
        id: "onetrust-grc",
        tier: "standard",
        name: "OneTrust GRC",
        shortDescription: "Standard security compliance platform",
        description: "Implement OneTrust for automated security compliance.",
        pros: [
          "Good features",
          "Automated compliance",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.onetrust.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,000/user/year",
        icon: FileCheck
      },
      {
        id: "archer-grc",
        tier: "premium",
        name: "Archer GRC Platform",
        shortDescription: "Premium security compliance solution",
        description: "Deploy Archer for comprehensive security compliance.",
        pros: [
          "Advanced features",
          "Integrated compliance",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.archerirm.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/user/year",
        icon: FileCheck
      }
    ]
  },
  {
    id: 58,
    category: "Risk Management",
    text: "Is there a comprehensive risk management program in place?",
    description: "Risk management helps organizations identify and mitigate security risks.",
    helpText: "This includes having proper risk assessment and management processes.",
    icon: AlertCircle,
    subQuestion: {
      id: "risk-frequency",
      text: "How often are risk assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-risk-management",
        tier: "open-source",
        name: "Basic Risk Management",
        shortDescription: "Free risk management framework",
        description: "Use basic risk management tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.riskmanagement.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Risk team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: AlertCircle
      },
      {
        id: "servicenow-grc",
        tier: "standard",
        name: "ServiceNow GRC",
        shortDescription: "Standard risk management platform",
        description: "Implement ServiceNow for automated risk management.",
        pros: [
          "Good features",
          "Automated risk management",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Risk team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹3,000/user/year",
        icon: AlertCircle
      },
      {
        id: "metricstream-grc",
        tier: "premium",
        name: "MetricStream GRC Platform",
        shortDescription: "Premium risk management solution",
        description: "Deploy MetricStream for comprehensive risk management.",
        pros: [
          "Advanced features",
          "Integrated risk management",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.metricstream.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Risk team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹15,000+/user/year",
        icon: AlertCircle
      }
    ]
  },
  {
    id: 59,
    category: "Security Architecture",
    text: "Is there a comprehensive security architecture in place?",
    description: "Security architecture helps organizations design and implement secure systems.",
    helpText: "This includes having proper security architecture and design processes.",
    icon: Building2,
    subQuestion: {
      id: "architecture-frequency",
      text: "How often are security architecture reviews conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-architecture",
        tier: "open-source",
        name: "Basic Security Architecture",
        shortDescription: "Free security architecture framework",
        description: "Use basic security architecture tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securityarchitecture.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Architecture team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Building2
      },
      {
        id: "sabsa-framework",
        tier: "standard",
        name: "SABSA Framework",
        shortDescription: "Standard security architecture platform",
        description: "Implement SABSA for automated security architecture.",
        pros: [
          "Good features",
          "Automated architecture",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.sabsa.org",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Architecture team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹4,000/user/year",
        icon: Building2
      },
      {
        id: "togaf-security",
        tier: "premium",
        name: "TOGAF Security Architecture",
        shortDescription: "Premium security architecture solution",
        description: "Deploy TOGAF for comprehensive security architecture.",
        pros: [
          "Advanced features",
          "Integrated architecture",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.opengroup.org",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Architecture team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹20,000+/user/year",
        icon: Building2
      }
    ]
  },
  {
    id: 60,
    category: "System Hardening",
    text: "Is there a comprehensive system hardening program in place?",
    description: "System hardening helps organizations secure their systems and applications.",
    helpText: "This includes having proper system hardening and configuration management processes.",
    icon: Shield,
    subQuestion: {
      id: "hardening-frequency",
      text: "How often are hardening assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-system-hardening",
        tier: "open-source",
        name: "Basic System Hardening",
        shortDescription: "Free system hardening framework",
        description: "Use basic system hardening tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.systemhardening.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Shield
      },
      {
        id: "cis-benchmarks",
        tier: "standard",
        name: "CIS Benchmarks",
        shortDescription: "Standard system hardening platform",
        description: "Implement CIS Benchmarks for automated system hardening.",
        pros: [
          "Good features",
          "Automated hardening",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per system/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.cisecurity.org",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,000/system/year",
        icon: Shield
      },
      {
        id: "tenable-security-center",
        tier: "premium",
        name: "Tenable Security Center",
        shortDescription: "Premium system hardening solution",
        description: "Deploy Tenable for comprehensive system hardening.",
        pros: [
          "Advanced features",
          "Integrated hardening",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.tenable.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹50,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 61,
    category: "Security Testing",
    text: "Is there a comprehensive security testing program in place?",
    description: "Security testing helps organizations identify and fix security vulnerabilities.",
    helpText: "This includes having proper security testing and assessment processes.",
    icon: TestTube,
    subQuestion: {
      id: "testing-frequency",
      text: "How often are security tests conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-testing",
        tier: "open-source",
        name: "Basic Security Testing",
        shortDescription: "Free security testing framework",
        description: "Use basic security testing tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitytesting.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: TestTube
      },
      {
        id: "burp-suite-pro",
        tier: "standard",
        name: "Burp Suite Professional",
        shortDescription: "Standard security testing platform",
        description: "Implement Burp Suite for automated security testing.",
        pros: [
          "Good features",
          "Automated testing",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://portswigger.net",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹15,000/user/year",
        icon: TestTube
      },
      {
        id: "rapid7-insight",
        tier: "premium",
        name: "Rapid7 Insight Platform",
        shortDescription: "Premium security testing solution",
        description: "Deploy Rapid7 for comprehensive security testing.",
        pros: [
          "Advanced features",
          "Integrated testing",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.rapid7.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹50,000+/year",
        icon: TestTube
      }
    ]
  },
  {
    id: 62,
    category: "Security Documentation",
    text: "Is there a comprehensive security documentation program in place?",
    description: "Security documentation helps organizations maintain and share security knowledge.",
    helpText: "This includes having proper security documentation and knowledge management processes.",
    icon: FileText,
    subQuestion: {
      id: "documentation-scope",
      text: "What is the scope of security documentation needed?",
      placeholder: "Enter scope",
      unit: "documents",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-security-documentation",
        tier: "open-source",
        name: "Basic Security Documentation",
        shortDescription: "Free security documentation framework",
        description: "Use basic security documentation tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitydocumentation.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Documentation team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: FileText
      },
      {
        id: "confluence-security",
        tier: "standard",
        name: "Confluence Security Documentation",
        shortDescription: "Standard security documentation platform",
        description: "Implement Confluence for automated security documentation.",
        pros: [
          "Good features",
          "Automated documentation",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.atlassian.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Documentation team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,000/user/year",
        icon: FileText
      },
      {
        id: "sharepoint-security",
        tier: "premium",
        name: "SharePoint Security Documentation",
        shortDescription: "Premium security documentation solution",
        description: "Deploy SharePoint for comprehensive security documentation.",
        pros: [
          "Advanced features",
          "Integrated documentation",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.microsoft.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Documentation team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/user/year",
        icon: FileText
      }
    ]
  },
  {
    id: 63,
    category: "Security Awareness",
    text: "Is there a comprehensive security awareness program in place?",
    description: "Security awareness helps organizations educate employees about security risks.",
    helpText: "This includes having proper security awareness and training processes.",
    icon: Brain,
    subQuestion: {
      id: "awareness-frequency",
      text: "How often are security awareness sessions conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-awareness",
        tier: "open-source",
        name: "Basic Security Awareness",
        shortDescription: "Free security awareness framework",
        description: "Use basic security awareness tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securityawareness.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Brain
      },
      {
        id: "knowbe4-awareness",
        tier: "standard",
        name: "KnowBe4 Security Awareness",
        shortDescription: "Standard security awareness platform",
        description: "Implement KnowBe4 for automated security awareness.",
        pros: [
          "Good features",
          "Automated training",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.knowbe4.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹1,500/user/year",
        icon: Brain
      },
      {
        id: "proofpoint-awareness",
        tier: "premium",
        name: "Proofpoint Security Awareness",
        shortDescription: "Premium security awareness solution",
        description: "Deploy Proofpoint for comprehensive security awareness.",
        pros: [
          "Advanced features",
          "Integrated training",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.proofpoint.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹3,000+/user/year",
        icon: Brain
      }
    ]
  },
  {
    id: 64,
    category: "Security Monitoring",
    text: "Is there a comprehensive security monitoring system in place?",
    description: "Security monitoring helps organizations detect and respond to security threats.",
    helpText: "This includes having proper security monitoring and alerting processes.",
    icon: Activity,
    subQuestion: {
      id: "monitoring-scope",
      text: "What is the scope of systems being monitored?",
      placeholder: "Enter scope",
      unit: "systems",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-security-monitoring",
        tier: "open-source",
        name: "Basic Security Monitoring",
        shortDescription: "Free security monitoring framework",
        description: "Use basic security monitoring tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitymonitoring.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Activity
      },
      {
        id: "splunk-security",
        tier: "standard",
        name: "Splunk Security",
        shortDescription: "Standard security monitoring platform",
        description: "Implement Splunk for automated security monitoring.",
        pros: [
          "Good features",
          "Automated monitoring",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per GB/day",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹100/GB/day",
        icon: Activity
      },
      {
        id: "exabeam-fusion",
        tier: "premium",
        name: "Exabeam Fusion SIEM",
        shortDescription: "Premium security monitoring solution",
        description: "Deploy Exabeam for comprehensive security monitoring.",
        pros: [
          "Advanced features",
          "Integrated monitoring",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.exabeam.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500,000+/year",
        icon: Activity
      }
    ]
  },
  {
    id: 65,
    category: "Vulnerability Management",
    text: "Is there a comprehensive vulnerability management program in place?",
    description: "Vulnerability management helps organizations identify and remediate security vulnerabilities.",
    helpText: "This includes having proper vulnerability scanning and management processes.",
    icon: ShieldAlert,
    subQuestion: {
      id: "vulnerability-frequency",
      text: "How often are vulnerability scans conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-vulnerability-management",
        tier: "open-source",
        name: "Basic Vulnerability Management",
        shortDescription: "Free vulnerability management framework",
        description: "Use basic vulnerability management tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.vulnerabilitymanagement.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: ShieldAlert
      },
      {
        id: "nessus-professional",
        tier: "standard",
        name: "Nessus Professional",
        shortDescription: "Standard vulnerability management platform",
        description: "Implement Nessus for automated vulnerability management.",
        pros: [
          "Good features",
          "Automated scanning",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per IP/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.tenable.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹5,000/IP/year",
        icon: ShieldAlert
      },
      {
        id: "qualys-vm",
        tier: "premium",
        name: "Qualys Vulnerability Management",
        shortDescription: "Premium vulnerability management solution",
        description: "Deploy Qualys for comprehensive vulnerability management.",
        pros: [
          "Advanced features",
          "Integrated scanning",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.qualys.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹100,000+/year",
        icon: ShieldAlert
      }
    ]
  },
  {
    id: 65,
    category: "Security Access Control",
    text: "Is there a comprehensive access control system in place?",
    description: "Access control helps organizations manage and secure user access to resources.",
    helpText: "This includes having proper access control and user management processes.",
    icon: UserCog,
    subQuestion: {
      id: "access-users",
      text: "How many users need access management?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 0,
      min: 0,
      max: 10000
    },
    recommendations: [
      {
        id: "basic-access-control",
        tier: "open-source",
        name: "Basic Access Control",
        shortDescription: "Free access control framework",
        description: "Use basic access control tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.accesscontrol.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: UserCog
      },
      {
        id: "beyondtrust-pam",
        tier: "standard",
        name: "BeyondTrust Privileged Access Management",
        shortDescription: "Standard access control platform",
        description: "Implement BeyondTrust for automated access control.",
        pros: [
          "Good features",
          "Automated management",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.beyondtrust.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹3,000/user/year",
        icon: UserCog
      },
      {
        id: "cyberark-pam",
        tier: "premium",
        name: "CyberArk Privileged Access Management",
        shortDescription: "Premium access control solution",
        description: "Deploy CyberArk for comprehensive access control.",
        pros: [
          "Advanced features",
          "Integrated management",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.cyberark.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/user/year",
        icon: UserCog
      }
    ]
  },
  {
    id: 66,
    category: "Identity Management",
    text: "Is there a comprehensive identity management system in place?",
    description: "Identity management helps organizations manage user identities and access rights.",
    helpText: "This includes having proper identity management and user provisioning processes.",
    icon: Users,
    subQuestion: {
      id: "identity-count",
      text: "How many identities need management?",
      placeholder: "Enter number of identities",
      unit: "identities",
      defaultValue: 0,
      min: 0,
      max: 100000
    },
    recommendations: [
      {
        id: "basic-identity-management",
        tier: "open-source",
        name: "Basic Identity Management",
        shortDescription: "Free identity management framework",
        description: "Use basic identity management tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.identitymanagement.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Users
      },
      {
        id: "sailpoint-identitynow",
        tier: "standard",
        name: "SailPoint IdentityNow",
        shortDescription: "Standard identity management platform",
        description: "Implement SailPoint for automated identity management.",
        pros: [
          "Good features",
          "Automated management",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per identity/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.sailpoint.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹500/identity/year",
        icon: Users
      },
      {
        id: "forgerock-identity",
        tier: "premium",
        name: "ForgeRock Identity Platform",
        shortDescription: "Premium identity management solution",
        description: "Deploy ForgeRock for comprehensive identity management.",
        pros: [
          "Advanced features",
          "Integrated management",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.forgerock.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,000+/identity/year",
        icon: Users
      }
    ]
  },
  {
    id: 67,
    category: "Incident Response",
    text: "Is there a comprehensive incident response plan in place?",
    description: "Incident response helps organizations detect and respond to security incidents.",
    helpText: "This includes having proper incident response and handling processes.",
    icon: AlertTriangle,
    subQuestion: {
      id: "response-time",
      text: "What is the target incident response time?",
      placeholder: "Enter response time",
      unit: "hours",
      defaultValue: 0,
      min: 0,
      max: 72
    },
    recommendations: [
      {
        id: "basic-incident-response",
        tier: "open-source",
        name: "Basic Incident Response",
        shortDescription: "Free incident response framework",
        description: "Use basic incident response tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.incidentresponse.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: AlertTriangle
      },
      {
        id: "demisto-soar",
        tier: "standard",
        name: "Demisto SOAR Platform",
        shortDescription: "Standard incident response platform",
        description: "Implement Demisto for automated incident response.",
        pros: [
          "Good features",
          "Automated response",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per incident/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.demisto.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹10,000/incident/year",
        icon: AlertTriangle
      },
      {
        id: "splunk-phantom",
        tier: "premium",
        name: "Splunk Phantom",
        shortDescription: "Premium incident response solution",
        description: "Deploy Splunk Phantom for comprehensive incident response.",
        pros: [
          "Advanced features",
          "Integrated response",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹50,000+/year",
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 68,
    category: "Disaster Recovery",
    text: "Is there a comprehensive disaster recovery plan in place?",
    description: "Disaster recovery helps organizations recover from system failures and disasters.",
    helpText: "This includes having proper disaster recovery and business continuity processes.",
    icon: Cloud,
    subQuestion: {
      id: "recovery-time",
      text: "What is the target recovery time objective (RTO)?",
      placeholder: "Enter recovery time",
      unit: "hours",
      defaultValue: 0,
      min: 0,
      max: 168
    },
    recommendations: [
      {
        id: "basic-disaster-recovery",
        tier: "open-source",
        name: "Basic Disaster Recovery",
        shortDescription: "Free disaster recovery framework",
        description: "Use basic disaster recovery tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.disasterrecovery.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Cloud
      },
      {
        id: "veeam-backup",
        tier: "standard",
        name: "Veeam Backup & Replication",
        shortDescription: "Standard disaster recovery platform",
        description: "Implement Veeam for automated disaster recovery.",
        pros: [
          "Good features",
          "Automated recovery",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per workload/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.veeam.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹5,000/workload/year",
        icon: Cloud
      },
      {
        id: "zerto-resilience",
        tier: "premium",
        name: "Zerto IT Resilience Platform",
        shortDescription: "Premium disaster recovery solution",
        description: "Deploy Zerto for comprehensive disaster recovery.",
        pros: [
          "Advanced features",
          "Integrated recovery",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.zerto.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹100,000+/year",
        icon: Cloud
      }
    ]
  },
  {
    id: 69,
    category: "Security Compliance",
    text: "Is there a comprehensive security compliance program in place?",
    description: "Security compliance helps organizations meet regulatory requirements.",
    helpText: "This includes having proper compliance and audit processes.",
    icon: FileCheck,
    subQuestion: {
      id: "compliance-frequency",
      text: "How often are compliance assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-compliance",
        tier: "open-source",
        name: "Basic Security Compliance",
        shortDescription: "Free security compliance framework",
        description: "Use basic security compliance tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.securitycompliance.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: FileCheck
      },
      {
        id: "onetrust-grc",
        tier: "standard",
        name: "OneTrust GRC",
        shortDescription: "Standard security compliance platform",
        description: "Implement OneTrust for automated security compliance.",
        pros: [
          "Good features",
          "Automated compliance",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.onetrust.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,000/user/year",
        icon: FileCheck
      },
      {
        id: "archer-grc",
        tier: "premium",
        name: "Archer GRC Platform",
        shortDescription: "Premium security compliance solution",
        description: "Deploy Archer for comprehensive security compliance.",
        pros: [
          "Advanced features",
          "Integrated compliance",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.archerirm.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹10,000+/user/year",
        icon: FileCheck
      }
    ]
  },
  {
    id: 70,
    category: "Risk Management",
    text: "Is there a comprehensive risk management program in place?",
    description: "Risk management helps organizations identify and mitigate security risks.",
    helpText: "This includes having proper risk assessment and management processes.",
    icon: AlertCircle,
    subQuestion: {
      id: "risk-frequency",
      text: "How often are risk assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-risk-management",
        tier: "open-source",
        name: "Basic Risk Management",
        shortDescription: "Free risk management framework",
        description: "Use basic risk management tools and guidelines.",
        pros: [
          "Free to use",
          "Basic structure",
          "Easy to implement",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Manual process",
          "Basic reporting",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.riskmanagement.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Risk team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: AlertCircle
      },
      {
        id: "servicenow-grc",
        tier: "standard",
        name: "ServiceNow GRC",
        shortDescription: "Standard risk management platform",
        description: "Implement ServiceNow for automated risk management.",
        pros: [
          "Good features",
          "Automated risk management",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per user/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Risk team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹3,000/user/year",
        icon: AlertCircle
      },
      {
        id: "metricstream-grc",
        tier: "premium",
        name: "MetricStream GRC Platform",
        shortDescription: "Premium risk management solution",
        description: "Deploy MetricStream for comprehensive risk management.",
        pros: [
          "Advanced features",
          "Integrated risk management",
          "Detailed reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.metricstream.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Risk team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹15,000+/user/year",
        icon: AlertCircle
      }
    ]
  }
]

export default questionsData 