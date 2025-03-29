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
    period: "monthly" | "yearly";
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

const questionsData: Question[] = [
  {
    id: 1,
    category: "Threat Intelligence",
    text: "Do you receive a threat intelligence feed regarding the technology stack of your application to remain up to date with the latest threats?",
    description: "Threat intelligence helps organizations stay informed about emerging threats specific to their technology stack.",
    helpText: "This includes feeds that provide information about vulnerabilities, exploits, and attack patterns relevant to your systems.",
    icon: Shield,
    subQuestion: {
      id: "threat-intelligence-agents",
      text: "How many endpoints/devices need to be monitored for threats?",
      placeholder: "Enter number of endpoints",
      unit: "endpoints",
      defaultValue: "0",
      min: 0
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
          "Community-driven threat intelligence",
          "Real-time updates",
          "API access available"
        ],
        cons: [
          "Limited advanced features",
          "May require more manual analysis",
          "Community support only"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://otx.alienvault.com",
        pricingPage: "https://otx.alienvault.com",
        setupTime: "1-2 days",
        recommendedTimeline: "Within 7 days",
        requiredResources: "Basic IT staff",
        organizationSize: "Any",
        effortHours: "8-16",
        priority: "Medium",
        estimatedCostRange: "₹0/year",
        calculateCost: (endpoints: number) => "₹0/year"
      },
      {
        id: "crowdstrike-falcon",
        tier: "premium",
        name: "CrowdStrike Falcon",
        shortDescription: "Enterprise-grade threat intelligence and endpoint protection",
        description: "Deploy CrowdStrike Falcon for comprehensive threat intelligence and endpoint protection.",
        pros: [
          "Advanced threat detection",
          "Real-time response capabilities",
          "24/7 support",
          "Cloud-native architecture"
        ],
        cons: [
          "Higher cost",
          "May require dedicated staff",
          "Complex setup"
        ],
        pricing: "Per endpoint",
        pricingModel: "Subscription",
        officialWebsite: "https://www.crowdstrike.com",
        pricingPage: "https://www.crowdstrike.com/pricing",
        setupTime: "2-3 days",
        recommendedTimeline: "Within 14 days",
        requiredResources: "Dedicated security team",
        organizationSize: "Medium to Large",
        effortHours: "24-40",
        priority: "High",
        estimatedCostRange: "₹1,500-2,500/endpoint/year",
        perUnitCost: {
          amount: 2000,
          unit: "endpoint",
          period: "yearly"
        },
        calculateCost: (endpoints: number) => `₹${(endpoints * 2000).toLocaleString()}/year`
      }
    ]
  },
  {
    id: 2,
    category: "Access Control",
    text: "Do you have a centralized identity and access management (IAM) system in place?",
    description: "IAM systems help manage user identities and their access to various resources.",
    helpText: "This includes systems that manage user authentication, authorization, and access control across your organization.",
    icon: UserCog,
    subQuestion: {
      id: "iam-users",
      text: "How many users need to be managed in the IAM system?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: "0",
      min: 0
    },
    recommendations: [
      {
        id: "keycloak",
        tier: "open-source",
        name: "Keycloak",
        shortDescription: "Open-source identity and access management",
        description: "Implement Keycloak for open-source identity and access management.",
        pros: [
          "Free to use",
          "Self-hosted option",
          "Multiple protocol support",
          "Active community"
        ],
        cons: [
          "Requires technical expertise",
          "Manual maintenance needed",
          "Limited support"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.keycloak.org",
        pricingPage: "https://www.keycloak.org",
        setupTime: "3-5 days",
        recommendedTimeline: "Within 14 days",
        requiredResources: "Technical staff",
        organizationSize: "Any",
        effortHours: "24-40",
        priority: "High",
        estimatedCostRange: "₹0/year",
        calculateCost: (users: number) => "₹0/year"
      },
      {
        id: "okta",
        tier: "premium",
        name: "Okta",
        shortDescription: "Cloud-based identity management platform",
        description: "Deploy Okta for comprehensive identity and access management.",
        pros: [
          "Easy to use",
          "Cloud-native",
          "Excellent support",
          "Rich feature set"
        ],
        cons: [
          "Higher cost",
          "Cloud dependency",
          "May require training"
        ],
        pricing: "Per user",
        pricingModel: "Subscription",
        officialWebsite: "https://www.okta.com",
        pricingPage: "https://www.okta.com/pricing",
        setupTime: "2-3 days",
        recommendedTimeline: "Within 7 days",
        requiredResources: "Basic IT staff",
        organizationSize: "Medium to Large",
        effortHours: "16-24",
        priority: "High",
        estimatedCostRange: "₹1,200-1,800/user/year",
        perUnitCost: {
          amount: 1500,
          unit: "user",
          period: "yearly"
        },
        calculateCost: (users: number) => `₹${(users * 1500).toLocaleString()}/year`
      }
    ]
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
        perUnitCost: {
          amount: 20,
          unit: "agent",
          period: "monthly"
        },
        calculateCost: (agents: number) => `₹${(agents * 20).toLocaleString()}/month`,
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
    id: 6,
    category: "Data Loss Prevention",
    text: "Is there a Data Loss Prevention (DLP) solution in place?",
    description: "Data Loss Prevention solutions help organizations prevent unauthorized data exfiltration and protect sensitive information.",
    helpText: "This includes having a structured approach to data protection with proper monitoring and controls.",
    icon: Shield,
    subQuestion: {
      id: "dlp-users",
      text: "How many users need DLP protection?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: "0",
      min: 0
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
        perUnitCost: {
          amount: 0,
          unit: "user",
          period: "yearly"
        },
        calculateCost: (users: number) => "₹0/year"
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
        perUnitCost: {
          amount: 25,
          unit: "user",
          period: "yearly"
        },
        calculateCost: (users: number) => `₹${(users * 25).toLocaleString()}/year`
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
        perUnitCost: {
          amount: 50,
          unit: "user",
          period: "yearly"
        },
        calculateCost: (users: number) => `₹${(users * 50).toLocaleString()}/year`
      }
    ]
  },
  {
    id: 9,
    category: "Backup",
    text: "Is there a backup solution in place to protect against data loss?",
    description: "Backup solutions help organizations recover from data loss incidents.",
    helpText: "This includes implementing backup strategies to protect critical data.",
    icon: Database,
    subQuestion: {
      id: "backup-data-volume",
      text: "What is the total data volume that needs to be backed up?",
      placeholder: "Enter data volume (GB)",
      unit: "GB",
      defaultValue: "0",
      min: 0
    },
    recommendations: [
      {
        id: "open-source-backup",
        tier: "open-source",
        name: "Open Source Backup",
        shortDescription: "Free backup solution",
        description: "Implement open source backup solutions like BorgBackup or Duplicacy.",
        pros: [
          "Free to use",
          "Open source",
          "Community support",
          "Customizable"
        ],
        cons: [
          "Requires technical expertise",
          "Manual maintenance needed",
          "Limited support"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.borgbackup.org",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "GB",
          period: "yearly"
        },
        calculateCost: (dataVolume: number) => "₹0/year"
      },
      {
        id: "veeam",
        tier: "standard",
        name: "Veeam",
        shortDescription: "Enterprise-grade backup platform",
        description: "Deploy Veeam for comprehensive backup and recovery.",
        pros: [
          "Rich feature set",
          "Easy to use",
          "Scalable",
          "Integration with various sources"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Requires training",
          "Resource intensive"
        ],
        pricing: "Per TB of data",
        pricingModel: "Subscription",
        officialWebsite: "https://www.veeam.com",
        pricingPage: "https://www.veeam.com/pricing.html",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 2 months",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹500-1,000/TB/year",
        perUnitCost: {
          amount: 750,
          unit: "TB",
          period: "yearly"
        },
        calculateCost: (dataVolume: number) => `₹${(dataVolume * 750).toLocaleString()}/year`
      },
      {
        id: "rubrik",
        tier: "premium",
        name: "Rubrik",
        shortDescription: "Cloud-based backup and recovery platform",
        description: "Use Rubrik for centralized backup and recovery.",
        pros: [
          "Cloud-native",
          "Easy to use",
          "Scalable",
          "Integration with various sources"
        ],
        cons: [
          "Higher cost",
          "Cloud dependency",
          "Requires training",
          "Resource intensive"
        ],
        pricing: "Per TB of data",
        pricingModel: "Subscription",
        officialWebsite: "https://www.rubrik.com",
        pricingPage: "https://www.rubrik.com/pricing/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹1,000-2,000/TB/year",
        perUnitCost: {
          amount: 1500,
          unit: "TB",
          period: "yearly"
        },
        calculateCost: (dataVolume: number) => `₹${(dataVolume * 1500).toLocaleString()}/year`
      }
    ]
  },
  {
    id: 10,
    category: "Security Training",
    text: "Is there a security training program in place to educate employees about security best practices?",
    description: "Security training programs help organizations improve their security posture by educating employees.",
    helpText: "This includes implementing training programs to ensure employees understand security best practices.",
    icon: GraduationCap,
    subQuestion: {
      id: "security-training-employees",
      text: "How many employees need security training?",
      placeholder: "Enter number of employees",
      unit: "employees",
      defaultValue: "0",
      min: 0
    },
    recommendations: [
      {
        id: "open-source-training",
        tier: "open-source",
        name: "Open Source Training",
        shortDescription: "Free security training resources",
        description: "Utilize open source training resources like the OWASP Training Project.",
        pros: [
          "Free to use",
          "Open source",
          "Community support",
          "Customizable"
        ],
        cons: [
          "Requires self-directed learning",
          "May not cover advanced topics",
          "Limited support"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://owasp.org/www-project-training/",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "Employees",
        organizationSize: "Any",
        effortHours: "8-16",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "employee",
          period: "yearly"
        },
        calculateCost: (employees: number) => "₹0/year"
      },
      {
        id: "cybrary",
        tier: "standard",
        name: "Cybrary",
        shortDescription: "Online security training platform",
        description: "Use Cybrary for comprehensive security training.",
        pros: [
          "Rich feature set",
          "Easy to use",
          "Scalable",
          "Integration with various sources"
        ],
        cons: [
          "Higher cost",
          "Requires training",
          "Resource intensive"
        ],
        pricing: "Per employee",
        pricingModel: "Subscription",
        officialWebsite: "https://www.cybrary.it",
        pricingPage: "https://www.cybrary.it/pricing/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "Employees",
        organizationSize: "Medium to Large",
        effortHours: "8-16",
        priority: "High",
        estimatedCostRange: "₹500-1,000/employee/year",
        perUnitCost: {
          amount: 750,
          unit: "employee",
          period: "yearly"
        },
        calculateCost: (employees: number) => `₹${(employees * 750).toLocaleString()}/year`
      },
      {
        id: "knowbe4",
        tier: "premium",
        name: "KnowBe4",
        shortDescription: "Interactive security training platform",
        description: "Use KnowBe4 for interactive security training.",
        pros: [
          "Interactive training",
          "Easy to use",
          "Scalable",
          "Integration with various sources"
        ],
        cons: [
          "Higher cost",
          "Requires training",
          "Resource intensive"
        ],
        pricing: "Per employee",
        pricingModel: "Subscription",
        officialWebsite: "https://www.knowbe4.com",
        pricingPage: "https://www.knowbe4.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "Employees",
        organizationSize: "Large Enterprise",
        effortHours: "8-16",
        priority: "High",
        estimatedCostRange: "₹1,000-2,000/employee/year",
        perUnitCost: {
          amount: 1500,
          unit: "employee",
          period: "yearly"
        },
        calculateCost: (employees: number) => `₹${(employees * 1500).toLocaleString()}/year`
      }
    ]
  },
  {
    id: 11,
    category: "Vulnerability Scanning",
    text: "Is there a vulnerability scanning solution in place to identify and remediate security vulnerabilities?",
    description: "Vulnerability scanning solutions help organizations identify and remediate security vulnerabilities.",
    helpText: "This includes implementing vulnerability scanning to identify and address security weaknesses.",
    icon: ShieldAlert,
    subQuestion: {
      id: "vulnerability-scanning-assets",
      text: "How many assets need to be scanned for vulnerabilities?",
      placeholder: "Enter number of assets",
      unit: "assets",
      defaultValue: "0",
      min: 0
    },
    recommendations: [
      {
        id: "open-source-scanning",
        tier: "open-source",
        name: "Open Source Scanning",
        shortDescription: "Free vulnerability scanning solution",
        description: "Implement open source vulnerability scanning solutions like Nessus or OpenVAS.",
        pros: [
          "Free to use",
          "Open source",
          "Community support",
          "Customizable"
        ],
        cons: [
          "Requires technical expertise",
          "Manual maintenance needed",
          "Limited support"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.tenable.com/products/nessus",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "asset",
          period: "yearly"
        },
        calculateCost: (assets: number) => "₹0/year"
      },
      {
        id: "qualys",
        tier: "standard",
        name: "Qualys",
        shortDescription: "Enterprise-grade vulnerability scanning platform",
        description: "Deploy Qualys for comprehensive vulnerability scanning.",
        pros: [
          "Rich feature set",
          "Easy to use",
          "Scalable",
          "Integration with various sources"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Requires training",
          "Resource intensive"
        ],
        pricing: "Per asset",
        pricingModel: "Subscription",
        officialWebsite: "https://www.qualys.com",
        pricingPage: "https://www.qualys.com/pricing/",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 2 months",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹500-1,000/asset/year",
        perUnitCost: {
          amount: 750,
          unit: "asset",
          period: "yearly"
        },
        calculateCost: (assets: number) => `₹${(assets * 750).toLocaleString()}/year`
      },
      {
        id: "rapid7",
        tier: "premium",
        name: "Rapid7",
        shortDescription: "Cloud-based vulnerability scanning platform",
        description: "Use Rapid7 for centralized vulnerability scanning.",
        pros: [
          "Cloud-native",
          "Easy to use",
          "Scalable",
          "Integration with various sources"
        ],
        cons: [
          "Higher cost",
          "Cloud dependency",
          "Requires training",
          "Resource intensive"
        ],
        pricing: "Per asset",
        pricingModel: "Subscription",
        officialWebsite: "https://www.rapid7.com",
        pricingPage: "https://www.rapid7.com/products/insightvm/pricing/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹1,000-2,000/asset/year",
        perUnitCost: {
          amount: 1500,
          unit: "asset",
          period: "yearly"
        },
        calculateCost: (assets: number) => `₹${(assets * 1500).toLocaleString()}/year`
      }
    ]
  },
  {
    id: 12,
    category: "Network Security",
    text: "Is there a network security solution in place to protect against external threats?",
    description: "Network security solutions help organizations protect their networks from external threats.",
    helpText: "This includes implementing network security measures to protect against unauthorized access.",
    icon: Network,
    subQuestion: {
      id: "network-security-segments",
      text: "How many network segments need to be protected?",
      placeholder: "Enter number of segments",
      unit: "segments",
      defaultValue: "0",
      min: 0
    },
    recommendations: [
      {
        id: "open-source-firewall",
        tier: "open-source",
        name: "Open Source Firewall",
        shortDescription: "Free network security solution",
        description: "Implement open source firewall solutions like pfSense or OPNsense.",
        pros: [
          "Free to use",
          "Open source",
          "Community support",
          "Customizable"
        ],
        cons: [
          "Requires technical expertise",
          "Manual maintenance needed",
          "Limited support"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.pfsense.org",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "segment",
          period: "yearly"
        },
        calculateCost: (segments: number) => "₹0/year"
      },
      {
        id: "fortinet",
        tier: "standard",
        name: "Fortinet",
        shortDescription: "Enterprise-grade network security platform",
        description: "Deploy Fortinet for comprehensive network security.",
        pros: [
          "Rich feature set",
          "Easy to use",
          "Scalable",
          "Integration with various sources"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Requires training",
          "Resource intensive"
        ],
        pricing: "Per segment",
        pricingModel: "Subscription",
        officialWebsite: "https://www.fortinet.com",
        pricingPage: "https://www.fortinet.com/products/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 2 months",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹500-1,000/segment/year",
        perUnitCost: {
          amount: 750,
          unit: "segment",
          period: "yearly"
        },
        calculateCost: (segments: number) => `₹${(segments * 750).toLocaleString()}/year`
      },
      {
        id: "cisco",
        tier: "premium",
        name: "Cisco",
        shortDescription: "Cloud-based network security platform",
        description: "Use Cisco for centralized network security.",
        pros: [
          "Cloud-native",
          "Easy to use",
          "Scalable",
          "Integration with various sources"
        ],
        cons: [
          "Higher cost",
          "Cloud dependency",
          "Requires training",
          "Resource intensive"
        ],
        pricing: "Per segment",
        pricingModel: "Subscription",
        officialWebsite: "https://www.cisco.com",
        pricingPage: "https://www.cisco.com/c/en/us/products/security/index.html",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹1,000-2,000/segment/year",
        perUnitCost: {
          amount: 1500,
          unit: "segment",
          period: "yearly"
        },
        calculateCost: (segments: number) => `₹${(segments * 1500).toLocaleString()}/year`
      }
    ]
  },
  {
    id: 14,
    category: "Data Encryption",
    text: "Is there a data encryption solution in place to protect sensitive data at rest and in transit?",
    description: "Data encryption solutions help organizations protect sensitive data from unauthorized access.",
    helpText: "This includes implementing data encryption measures to protect data at rest and in transit.",
    icon: ShieldCheck,
    subQuestion: {
      id: "data-encryption-volume",
      text: "What is the total data volume that needs to be encrypted?",
      placeholder: "Enter data volume (GB)",
      unit: "GB",
      defaultValue: "0",
      min: 0
    },
    recommendations: [
      {
        id: "open-source-encryption",
        tier: "open-source",
        name: "Open Source Encryption",
        shortDescription: "Free data encryption solution",
        description: "Implement open source encryption solutions like OpenSSL or GnuPG.",
        pros: [
          "Free to use",
          "Open source",
          "Community support",
          "Customizable"
        ],
        cons: [
          "Requires technical expertise",
          "Manual maintenance needed",
          "Limited support"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.openssl.org",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "GB",
          period: "yearly"
        },
        calculateCost: (dataVolume: number) => "₹0/year"
      },
      {
        id: "venafi",
        tier: "standard",
        name: "Venafi",
        shortDescription: "Enterprise-grade data encryption platform",
        description: "Deploy Venafi for comprehensive data encryption.",
        pros: [
          "Rich feature set",
          "Easy to use",
          "Scalable",
          "Integration with various sources"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Requires training",
          "Resource intensive"
        ],
        pricing: "Per TB of data",
        pricingModel: "Subscription",
        officialWebsite: "https://www.venafi.com",
        pricingPage: "https://www.venafi.com/products/data-encryption/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 2 months",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹500-1,000/TB/year",
        perUnitCost: {
          amount: 750,
          unit: "TB",
          period: "yearly"
        },
        calculateCost: (dataVolume: number) => `₹${(dataVolume * 750).toLocaleString()}/year`
      },
      {
        id: "thales",
        tier: "premium",
        name: "Thales",
        shortDescription: "Cloud-based data encryption platform",
        description: "Use Thales for centralized data encryption.",
        pros: [
          "Cloud-native",
          "Easy to use",
          "Scalable",
          "Integration with various sources"
        ],
        cons: [
          "Higher cost",
          "Cloud dependency",
          "Requires training",
          "Resource intensive"
        ],
        pricing: "Per TB of data",
        pricingModel: "Subscription",
        officialWebsite: "https://www.thalesesecbiz.com",
        pricingPage: "https://www.thalesesecbiz.com/products/data-encryption/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹1,000-2,000/TB/year",
        perUnitCost: {
          amount: 1500,
          unit: "TB",
          period: "yearly"
        },
        calculateCost: (dataVolume: number) => `₹${(dataVolume * 1500).toLocaleString()}/year`
      }
    ]
    },
  {
    id: 15,
    category: "Compliance Reporting",
    text: "Is there a solution in place to generate compliance reports?",
    description: "Compliance reporting solutions help organizations generate reports to demonstrate compliance with regulations.",
    helpText: "This includes implementing compliance reporting measures to generate reports for various regulations.",
    icon: FileText,
    subQuestion: {
      id: "compliance-reporting-reports",
      text: "How many compliance reports need to be generated monthly?",
      placeholder: "Enter number of reports",
      unit: "reports",
      defaultValue: "0",
      min: 0
    },
    recommendations: [
      {
        id: "open-source-reporting",
        tier: "open-source",
        name: "Open Source Reporting",
        shortDescription: "Free compliance reporting solution",
        description: "Implement open source reporting solutions like JasperReports or BIRT.",
        pros: [
          "Free to use",
          "Open source",
          "Community support",
          "Customizable"
        ],
        cons: [
          "Requires technical expertise",
          "Manual maintenance needed",
          "Limited support"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://community.jaspersoft.com/project/jasperreports-library",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT team",
        organizationSize: "Any",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "report",
          period: "monthly"
        },
        calculateCost: (reports: number) => "₹0/month"
      },
      {
        id: "logicworks",
        tier: "standard",
        name: "Logicworks",
        shortDescription: "Enterprise-grade compliance reporting platform",
        description: "Deploy Logicworks for comprehensive compliance reporting.",
        pros: [
          "Rich feature set",
          "Easy to use",
          "Scalable",
          "Integration with various sources"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Requires training",
          "Resource intensive"
        ],
        pricing: "Per report",
        pricingModel: "Subscription",
        officialWebsite: "https://www.logicworks.com",
        pricingPage: "https://www.logicworks.com/pricing/",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 2 months",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹500-1,000/report/month",
        perUnitCost: {
          amount: 750,
          unit: "report",
          period: "monthly"
        },
        calculateCost: (reports: number) => `₹${(reports * 750).toLocaleString()}/month`
      },
      {
        id: "alation",
        tier: "premium",
        name: "Alation",
        shortDescription: "Cloud-based compliance reporting platform",
        description: "Use Alation for centralized compliance reporting.",
        pros: [
          "Cloud-native",
          "Easy to use",
          "Scalable",
          "Integration with various sources"
        ],
        cons: [
          "Higher cost",
          "Cloud dependency",
          "Requires training",
          "Resource intensive"
        ],
        pricing: "Per report",
        pricingModel: "Subscription",
        officialWebsite: "https://www.alation.com",
        pricingPage: "https://www.alation.com/pricing/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹1,000-2,000/report/month",
        perUnitCost: {
          amount: 1500,
          unit: "report",
          period: "monthly"
        },
        calculateCost: (reports: number) => `₹${(reports * 1500).toLocaleString()}/month`
      }
    ]
  },

  {
    id: 16,
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
        perUnitCost: {
          amount: 0,
          unit: "test",
          period: "monthly"
        },
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
        estimatedCostRange: "₹25,000/incident/year",
        perUnitCost: {
          amount: 25000,
          unit: "incident",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 500000,
          unit: "year",
          period: "yearly"
        },
        icon: AlertCircle
      }
    ]
  },
  {
    id: 17,
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
        perUnitCost: {
          amount: 0,
          unit: "test",
          period: "monthly"
        },
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
        estimatedCostRange: "₹15,000/workload/year",
        perUnitCost: {
          amount: 15000,
          unit: "workload",
          period: "yearly"
        },
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
        estimatedCostRange: "₹500,000+/year",
        perUnitCost: {
          amount: 500000,
          unit: "year",
          period: "yearly"
        },
        icon: Cloud
      }
    ]
  },
  {
    id: 18,
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
        perUnitCost: {
          amount: 0,
          unit: "assessment",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 150000,
          unit: "year",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 500000,
          unit: "year",
          period: "yearly"
        },
        icon: FileCheck
      }
    ]
  },
  {
    id: 19,
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
        perUnitCost: {
          amount: 0,
          unit: "assessment",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 200000,
          unit: "year",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 1000000,
          unit: "year",
          period: "yearly"
        },
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 20,
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
        perUnitCost: {
          amount: 0,
          unit: "review",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 100000,
          unit: "year",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 500000,
          unit: "year",
          period: "yearly"
        },
        icon: Building2
      }
    ]
  },
  {
    id: 22,
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
        perUnitCost: {
          amount: 0,
          unit: "test",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 100000,
          unit: "year",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 500000,
          unit: "year",
          period: "yearly"
        },
        icon: FileCheck
      }
    ]
  },
  {
    id: 23,
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
        perUnitCost: {
          amount: 0,
          unit: "document",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 2000,
          unit: "user",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 5000,
          unit: "user",
          period: "yearly"
        },
        icon: FileText
      }
    ]
  },
  {
    id: 24,
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
        perUnitCost: {
          amount: 0,
          unit: "training",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 1000,
          unit: "user",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 2500,
          unit: "user",
          period: "yearly"
        },
        icon: GraduationCap
      }
    ]
  },
  {
    id: 25,
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
        perUnitCost: {
          amount: 0,
          unit: "system",
          period: "yearly"
        },
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
        pricing: "Per GB/month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹7500/GB/month",
        perUnitCost: {
          amount: 7500,
          unit: "GB",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 500000,
          unit: "year",
          period: "yearly"
        },
        icon: Activity
      }
    ]
  },
  {
    id: 26,
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
        perUnitCost: {
          amount: 0,
          unit: "scan",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 50000,
          unit: "scanner",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 200000,
          unit: "year",
          period: "yearly"
        },
        icon: ShieldAlert
      }
    ]
  },
  {
    id: 29,
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
        perUnitCost: {
          amount: 0,
          unit: "training",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 3000,
          unit: "user",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 10000,
          unit: "user",
          period: "yearly"
        },
        icon: GraduationCap
      }
    ]
  },
  {
    id: 30,
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
        perUnitCost: {
          amount: 0,
          unit: "system",
          period: "yearly"
        },
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
        pricing: "Per GB/month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹3,000/GB/month",
        perUnitCost: {
          amount: 3000,
          unit: "GB",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 500000,
          unit: "year",
          period: "yearly"
        },
        icon: BarChart
      }
    ]
  },
  {
    id: 31,
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
        perUnitCost: {
          amount: 0,
          unit: "process",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 1000,
          unit: "node",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 50000,
          unit: "year",
          period: "yearly"
        },
        icon: Bot
      }
    ]
  },
  {
    id: 32,
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
        perUnitCost: {
          amount: 0,
          unit: "integration",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 5000,
          unit: "API",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 100000,
          unit: "year",
          period: "yearly"
        },
        icon: Link
      }
    ]
  },
  {
    id: 33,
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
        perUnitCost: {
          amount: 0,
          unit: "assessment",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 200000,
          unit: "year",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 1000000,
          unit: "year",
          period: "yearly"
        },
        icon: AlertCircle
      }
    ]
  },
  {
    id: 36,
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
        perUnitCost: {
          amount: 0,
          unit: "test",
          period: "monthly"
        },
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
        estimatedCostRange: "₹100,000/year",
        perUnitCost: {
          amount: 100000,
          unit: "year",
          period: "yearly"
        },
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
        estimatedCostRange: "₹500,000+/year",
        perUnitCost: {
          amount: 500000,
          unit: "year",
          period: "yearly"
        },
        icon: TestTube
      }
    ]
  },
  {
    id: 37,
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
        perUnitCost: {
          amount: 0,
          unit: "document",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 2000,
          unit: "user",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 5000,
          unit: "user",
          period: "yearly"
        },
        icon: FileText
      }
    ]
  },
  {
    id: 38,
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
        perUnitCost: {
          amount: 0,
          unit: "training",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 1000,
          unit: "user",
          period: "yearly"
        },
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
        estimatedCostRange: "₹2,500+/user/year",
        perUnitCost: {
          amount: 2500,
          unit: "user",
          period: "yearly"
        },
        icon: Brain
      }
    ]
  },
  {
    id: 39,
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
        perUnitCost: {
          amount: 0,
          unit: "system",
          period: "yearly"
        },
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
        pricing: "Per GB/month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹7,500/GB/month",
        perUnitCost: {
          amount: 7500,
          unit: "GB",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 500000,
          unit: "year",
          period: "yearly"
        },
        icon: Activity
      }
    ]
  },
  {
    id: 40,
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
        perUnitCost: {
          amount: 0,
          unit: "scan",
          period: "monthly"
        },
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
        perUnitCost: {
          amount: 50000,
          unit: "scanner",
          period: "yearly"
        },
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
        perUnitCost: {
          amount: 200000,
          unit: "year",
          period: "yearly"
        },
        icon: ShieldAlert
      }
    ]
  },
  {
    id: 43,
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
        estimatedCostRange: "₹25,000/incident/year",
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
    id: 44,
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
        estimatedCostRange: "₹500,000+/year",
        icon: Cloud
      }
    ]
  },
  {
    id: 45,
    category: "PII Protection",
    text: "Is there a comprehensive PII protection plan in place?",
    description: "PII protection helps organizations protect personally identifiable information.",
    helpText: "This includes having proper PII protection and handling processes.",
    icon: Shield,
    subQuestion: {
      id: "pii-count",
      text: "How many PII records need to be protected?",
      placeholder: "Enter number",
      unit: "records",
      defaultValue: 0,
      min: 0,
      max: 1000000000
    },
    recommendations: [
      {
        id: "basic-pii-protection",
        tier: "open-source",
        name: "Basic PII Protection",
        shortDescription: "Free PII protection framework",
        description: "Use basic PII protection tools and guidelines.",
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
        officialWebsite: "https://www.piiprotection.com",
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
        id: "one-trust",
        tier: "standard",
        name: "OneTrust Privacy Management",
        shortDescription: "Standard PII protection platform",
        description: "Implement OneTrust for automated PII protection.",
        pros: [
          "Good features",
          "Automated protection",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per record/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.onetrust.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹150,000/year",
        icon: Shield
      },
      {
        id: "archer",
        tier: "premium",
        name: "Archer GRC Platform",
        shortDescription: "Premium PII protection solution",
        description: "Deploy Archer for comprehensive PII protection.",
        pros: [
          "Advanced features",
          "Integrated protection",
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
        officialWebsite: "https://www.archer-grc.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹500,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 46,
    category: "Security GRC",
    text: "Is there a comprehensive security governance, risk, and compliance program in place?",
    description: "Security GRC helps organizations manage security risks and compliance.",
    helpText: "This includes having proper security GRC and management processes.",
    icon: AlertTriangle,
    subQuestion: {
      id: "grc-frequency",
      text: "How often are security GRC assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-grc",
        tier: "open-source",
        name: "Basic Security GRC",
        shortDescription: "Free security GRC framework",
        description: "Use basic security GRC tools and guidelines.",
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
        officialWebsite: "https://www.securitygrc.com",
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
        id: "service-now-grc",
        tier: "standard",
        name: "ServiceNow GRC",
        shortDescription: "Standard security GRC platform",
        description: "Implement ServiceNow for automated security GRC.",
        pros: [
          "Good features",
          "Automated GRC",
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
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹200,000/year",
        icon: AlertTriangle
      },
      {
        id: "metricstream",
        tier: "premium",
        name: "MetricStream GRC",
        shortDescription: "Premium security GRC solution",
        description: "Deploy MetricStream for comprehensive security GRC.",
        pros: [
          "Advanced features",
          "Integrated GRC",
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
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,000,000+/year",
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 47,
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
        estimatedCostRange: "₹100,000/year",
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
        estimatedCostRange: "₹500,000+/year",
        icon: Building2
      }
    ]
  },
  {
    id: 48,
    category: "Security Training",
    text: "Is there a comprehensive security training program in place?",
    description: "Security training helps organizations educate employees about security best practices.",
    helpText: "This includes having proper security training and awareness programs.",
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
    id: 49,
    category: "Security Metrics",
    text: "Is there a comprehensive security metrics program in place?",
    description: "Security metrics help organizations measure and improve security performance.",
    helpText: "This includes having proper security metrics and monitoring processes.",
    icon: BarChart,
    subQuestion: {
      id: "metrics-frequency",
      text: "How often are security metrics collected and analyzed?",
      placeholder: "Enter frequency",
      unit: "days",
      defaultValue: 0,
      min: 0,
      max: 365
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
        pricing: "Per GB/month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹3,000/GB/month",
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
    id: 50,
    category: "Security Automation",
    text: "Is there a comprehensive security automation program in place?",
    description: "Security automation helps organizations automate security tasks and processes.",
    helpText: "This includes having proper security automation and orchestration processes.",
    icon: Bot,
    subQuestion: {
      id: "automation-frequency",
      text: "How often are security automation tasks executed?",
      placeholder: "Enter frequency",
      unit: "days",
      defaultValue: 0,
      min: 0,
      max: 365
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
          "Automated automation",
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
    id: 51,
    category: "Security Integration",
    text: "Is there a comprehensive security integration program in place?",
    description: "Security integration helps organizations integrate security tools and systems.",
    helpText: "This includes having proper security integration and orchestration processes.",
    icon: Link,
    subQuestion: {
      id: "integration-frequency",
      text: "How often are security integrations tested and updated?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
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
          "Integrated integration",
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
    id: 52,
    category: "Security GRC",
    text: "Is there a comprehensive security governance, risk, and compliance program in place?",
    description: "Security GRC helps organizations manage security risks and compliance.",
    helpText: "This includes having proper security GRC and management processes.",
    icon: AlertTriangle,
    subQuestion: {
      id: "grc-frequency",
      text: "How often are security GRC assessments conducted?",
      placeholder: "Enter frequency",
      unit: "months",
      defaultValue: 0,
      min: 0,
      max: 24
    },
    recommendations: [
      {
        id: "basic-security-grc",
        tier: "open-source",
        name: "Basic Security GRC",
        shortDescription: "Free security GRC framework",
        description: "Use basic security GRC tools and guidelines.",
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
        officialWebsite: "https://www.securitygrc.com",
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
        id: "service-now-grc",
        tier: "standard",
        name: "ServiceNow GRC",
        shortDescription: "Standard security GRC platform",
        description: "Implement ServiceNow for automated security GRC.",
        pros: [
          "Good features",
          "Automated GRC",
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
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹200,000/year",
        icon: AlertTriangle
      },
      {
        id: "metricstream",
        tier: "premium",
        name: "MetricStream GRC",
        shortDescription: "Premium security GRC solution",
        description: "Deploy MetricStream for comprehensive security GRC.",
        pros: [
          "Advanced features",
          "Integrated GRC",
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
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,000,000+/year",
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 53,
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
        estimatedCostRange: "₹100,000/year",
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
        estimatedCostRange: "₹500,000+/year",
        icon: Building2
      }
    ]
  },
  {
    id: 54,
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
        estimatedCostRange: "₹50,000/year",
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
        estimatedCostRange: "₹200,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 55,
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
        name: "Burp Suite",
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
        officialWebsite: "https://www.portswigger.net",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹100,000/year",
        icon: TestTube
      },
      {
        id: "rapid7",
        tier: "premium",
        name: "Rapid7 Security Testing",
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
        icon: TestTube
      }
    ]
  },
  {
    id: 15,
    category: "Compliance Reporting",
    text: "Is there a comprehensive compliance reporting system in place?",
    description: "Compliance reporting helps organizations meet regulatory requirements.",
    helpText: "This includes having proper compliance reporting processes and tools.",
    icon: FileText,
    subQuestion: {
      id: "report-count",
      text: "How many compliance reports are needed per year?",
      placeholder: "Enter number",
      unit: "reports",
      defaultValue: 0,
      min: 0,
      max: 1000
    },
    recommendations: [
      {
        id: "basic-compliance-reporting",
        tier: "open-source",
        name: "Basic Compliance Reporting",
        shortDescription: "Free compliance reporting framework",
        description: "Use basic compliance reporting tools and guidelines.",
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
        officialWebsite: "https://www.compliancereporting.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Small to Medium",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        perUnitCost: {
          amount: 0,
          unit: "report",
          period: "yearly"
        },
        calculateCost: (reports: number) => `₹${(reports * 50).toLocaleString()}/year`,
        icon: FileText
      },
      {
        id: "logicgate",
        tier: "standard",
        name: "LogicGate",
        shortDescription: "Standard compliance reporting platform",
        description: "Implement LogicGate for automated compliance reporting.",
        pros: [
          "Good features",
          "Automated reporting",
          "Progress tracking",
          "Regular updates"
        ],
        cons: [
          "Higher cost",
          "Setup required",
          "Training needed",
          "Resource intensive"
        ],
        pricing: "Per report/year",
        pricingModel: "Subscription",
        officialWebsite: "https://www.logicgate.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,000/report/year",
        perUnitCost: {
          amount: 2000,
          unit: "report",
          period: "yearly"
        },
        calculateCost: (reports: number) => `₹${(reports * 2000).toLocaleString()}/year`,
        icon: FileText
      },
      {
        id: "alcumus",
        tier: "premium",
        name: "Alcumus",
        shortDescription: "Premium compliance reporting solution",
        description: "Deploy Alcumus for comprehensive compliance reporting.",
        pros: [
          "Advanced features",
          "Integrated reporting",
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
        officialWebsite: "https://www.alcumus.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Compliance team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹5,000+/report/year",
        perUnitCost: {
          amount: 5000,
          unit: "report",
          period: "yearly"
        },
        calculateCost: (reports: number) => `₹${(reports * 5000).toLocaleString()}/year`,
        icon: FileText
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
        estimatedCostRange: "₹15,000/workload/year",
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
        estimatedCostRange: "₹500,000+/year",
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
        pricing: "Per GB/month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹7,500/GB/month",
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
        pricing: "Per GB/month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹3,000/GB/month",
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
        estimatedCostRange: "₹2,500/user/year",
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
        estimatedCostRange: "₹5,000+/user/year",
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
        pricing: "Per GB/month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹7,500/GB/month",
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
        estimatedCostRange: "₹25,000/incident/year",
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
        pricing: "Per GB/month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹7,500/GB/month",
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
        pricing: "Per GB/month",
        pricingModel: "Subscription",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "Contact vendor",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to Large",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹3,000/GB/month",
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