import {
  Shield,
  Lock,
  Database,
  FileText,
  Users,
  AlertTriangle,
  Network,
  UserCheck,
  Eye,
  Camera,
  type LucideIcon,
  Flame,
  Cable,
  ShieldAlert,
  UserCog,
  FileKey,
  Code,
  Key,
  Activity,
  DatabaseIcon,
  ClipboardCheck,
  Clock,
  Building,
  HardDrive,
  Zap,
  Wifi,
  Wrench,
  Trash2,
  PackageX,
  UserX,
  CheckCircle,
  Building2,
  AlertCircle,
  FileCheck,
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
  effortHours: string // Effort in hours (e.g., "4–8")
  priority: "High" | "Medium" | "Low" // Priority level
  estimatedCostRange: string // Cost range (e.g., "₹500–1,000/year")
  icon?: LucideIcon
  // Estimation functions
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

// First 10 questions
export const questionsData: Question[] = [
  {
    id: 1,
    category: "Threat Intelligence",
    text: "Do you receive a threat intelligence feed regarding the technology stack of your application to remain up to date with the latest threats?",
    description:
      "Threat intelligence helps organizations stay informed about emerging threats specific to their technology stack.",
    helpText:
      "This includes feeds that provide information about vulnerabilities, exploits, and attack patterns relevant to your systems.",
    icon: Shield,
    subQuestion: {
      id: "threat-intelligence-interest",
      text: "Are you interested in integrating a threat intelligence service to monitor and respond to emerging threats relevant to your technology stack?",
      placeholder: "Yes/No",
      unit: "",
      defaultValue: 1,
      min: 0,
      max: 1,
    },
    recommendations: [
      {
        id: "open-threat-exchange",
        tier: "open-source",
        name: "Open Threat Exchange (OTX)",
        shortDescription: "Free threat intelligence platform",
        description:
          "Open Threat Exchange (OTX) is a free threat intelligence platform that provides community-driven threat data, indicators of compromise, and analysis tools.",
        pros: ["Free to use", "Community-driven intelligence", "Regular updates", "API access available"],
        cons: ["Limited enterprise support", "Requires manual analysis", "May include false positives"],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://otx.alienvault.com/",
        pricingPage: "https://otx.alienvault.com/",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "Security analyst for research and configuration",
        organizationSize: "Organizations of all sizes",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Shield,
        calculateEffort: (interest) => {
          return "40–80"
        },
        calculateTimeline: (interest) => {
          return "Within 2 weeks"
        },
        calculateCost: (interest) => {
          return "₹0"
        },
      },
      {
        id: "recorded-future",
        tier: "standard",
        name: "Recorded Future",
        shortDescription: "Comprehensive threat intelligence service",
        description:
          "Recorded Future provides real-time threat intelligence powered by machine learning to help organizations proactively defend against emerging threats.",
        pros: [
          "Real-time intelligence",
          "Machine learning analysis",
          "Integration with security tools",
          "Customizable alerts",
        ],
        cons: ["Significant investment required", "Complex implementation", "Requires dedicated resources"],
        pricing: "Approximately ₹30,06,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.recordedfuture.com/",
        pricingPage: "https://www.recordedfuture.com/contact/",
        setupTime: "1 week with security team",
        recommendedTimeline: "Within 1 week",
        requiredResources: "Security team for implementation and monitoring",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "40",
        priority: "High",
        estimatedCostRange: "₹30,06,000/year",
        icon: Shield,
        calculateEffort: (interest) => {
          return "40"
        },
        calculateTimeline: (interest) => {
          return "Within 1 week"
        },
        calculateCost: (interest) => {
          return "₹30,06,000/year"
        },
      },
      {
        id: "fireeye-threat-intelligence",
        tier: "premium",
        name: "FireEye Threat Intelligence",
        shortDescription: "Enterprise-grade threat intelligence",
        description:
          "FireEye Threat Intelligence provides comprehensive, contextual intelligence about threats specific to your organization and industry.",
        pros: ["Industry-leading intelligence", "Contextual analysis", "Advanced threat detection", "Expert support"],
        cons: ["Premium pricing", "Complex integration", "Requires specialized expertise"],
        pricing: "Starting at ₹83,50,000 annually",
        pricingModel: "Annual contract",
        officialWebsite: "https://www.fireeye.com/products/cyber-threat-intelligence.html",
        pricingPage: "https://www.fireeye.com/company/contact.html",
        setupTime: "1-2 weeks with security team",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "Dedicated security team with threat intelligence experience",
        organizationSize: "Large organizations (100+ employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹83,50,000+/year",
        icon: Shield,
        calculateEffort: (interest) => {
          return "40–80"
        },
        calculateTimeline: (interest) => {
          return "Within 2 weeks"
        },
        calculateCost: (interest) => {
          return "₹83,50,000+/year"
        },
      },
    ],
  },
  {
    id: 2,
    category: "Asset Management",
    text: "Is there an inventory management platform deployed to track the entire lifecycle of IT assets from procurement to destruction?",
    description: "Asset management platforms help track hardware and software assets throughout their lifecycle.",
    helpText: "This includes tracking procurement, deployment, maintenance, and secure disposal of IT assets.",
    icon: Database,
    subQuestion: {
      id: "asset-count",
      text: "How many IT assets does your organization manage?",
      placeholder: "Enter number of assets",
      unit: "assets",
      defaultValue: 100,
      min: 1,
    },
    recommendations: [
      {
        id: "snipe-it",
        tier: "open-source",
        name: "Snipe-IT",
        shortDescription: "Free asset management solution",
        description:
          "Snipe-IT is a free, open-source IT asset management system that helps you track physical assets, licenses, accessories, and consumables.",
        pros: ["Free and open-source", "Customizable", "Active community support", "Regular updates"],
        cons: [
          "Self-hosted infrastructure needed",
          "Limited enterprise support",
          "Requires technical expertise to deploy",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://snipeitapp.com/",
        pricingPage: "https://snipeitapp.com/hosting",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator for installation and configuration",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Database,
        calculateEffort: (assets) => {
          // Base effort + additional effort based on assets
          const baseEffort = 40
          const additionalEffort = Math.ceil(assets / 100) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (assets) => {
          // Base timeline + additional time based on assets
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(assets / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (assets) => {
          return "₹0"
        },
      },
      {
        id: "asset-panda",
        tier: "standard",
        name: "Asset Panda",
        shortDescription: "Flexible asset tracking platform",
        description:
          "Asset Panda is a flexible and customizable asset tracking platform that helps organizations track and manage their assets throughout their lifecycle.",
        pros: [
          "User-friendly interface",
          "Customizable fields and workflows",
          "Mobile app available",
          "Cloud-based solution",
        ],
        cons: [
          "Subscription cost scales with assets",
          "Some advanced features only in higher tiers",
          "May require customization for specific needs",
        ],
        pricing: "Approximately ₹1,25,250 annually for up to 500 assets",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.assetpanda.com/",
        pricingPage: "https://www.assetpanda.com/pricing/",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator for setup and user training",
        organizationSize: "Small to medium organizations (10-500 employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹1,25,250/year for up to 500 assets",
        icon: Database,
        calculateEffort: (assets) => {
          // Base effort + additional effort based on assets
          const baseEffort = 40
          const additionalEffort = Math.ceil(assets / 100) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (assets) => {
          // Base timeline + additional time based on assets
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(assets / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (assets) => {
          // Cost based on number of assets
          if (assets <= 500) {
            return "₹1,25,250/year"
          } else {
            const additionalCost = Math.ceil((assets - 500) / 100) * 25000
            return `₹${(125250 + additionalCost).toLocaleString()}/year`
          }
        },
      },
      {
        id: "servicenow-asset",
        tier: "premium",
        name: "ServiceNow IT Asset Management",
        shortDescription: "Enterprise asset management solution",
        description:
          "ServiceNow IT Asset Management provides comprehensive asset lifecycle management with advanced reporting, automation, and integration capabilities.",
        pros: [
          "Comprehensive asset lifecycle management",
          "Integration with ITSM processes",
          "Advanced reporting and analytics",
          "Automation capabilities",
        ],
        cons: ["Higher implementation complexity", "Significant investment required", "Requires dedicated resources"],
        pricing: "Starting at ₹8,35,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.servicenow.com/products/it-asset-management.html",
        pricingPage: "https://www.servicenow.com/company/contact.html",
        setupTime: "2-3 weeks with IT team",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Dedicated IT team with ServiceNow experience",
        organizationSize: "Medium to large organizations (100+ employees)",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹8,35,000+/year",
        icon: Database,
        calculateEffort: (assets) => {
          // Base effort + additional effort based on assets
          const baseEffort = 80
          const additionalEffort = Math.ceil(assets / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (assets) => {
          // Base timeline + additional time based on assets
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(assets / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (assets) => {
          // Base cost + per asset cost
          const baseCost = 835000
          const perAssetCost = 1000
          const totalCost = baseCost + assets * perAssetCost
          return `₹${totalCost.toLocaleString()}/year`
        },
      },
    ],
  },
  {
    id: 3,
    category: "Identity Management",
    text: "Is there an identity management solution in place?",
    description: "Identity management solutions help manage user identities, authentication, and access control.",
    helpText: "This includes user provisioning, authentication, authorization, and identity lifecycle management.",
    icon: UserCheck,
    subQuestion: {
      id: "identity-count",
      text: "How many user identities need to be managed?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 50,
      min: 1,
    },
    recommendations: [
      {
        id: "openldap",
        tier: "open-source",
        name: "OpenLDAP",
        shortDescription: "Open-source directory service",
        description:
          "OpenLDAP is a free, open-source implementation of the Lightweight Directory Access Protocol (LDAP) that provides a centralized directory service for managing user identities.",
        pros: ["Free and open-source", "Highly customizable", "Widely supported", "Scalable"],
        cons: [
          "Complex configuration",
          "Steep learning curve",
          "Limited GUI management tools",
          "Requires technical expertise",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://www.openldap.org/",
        pricingPage: "https://www.openldap.org/",
        setupTime: "3-4 weeks with IT support",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "IT administrator with LDAP experience",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "120–160",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: UserCheck,
        calculateEffort: (users) => {
          // Base effort + additional effort based on users
          const baseEffort = 120
          const additionalEffort = Math.ceil(users / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on users
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(users / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          return "₹0"
        },
      },
      {
        id: "active-directory",
        tier: "standard",
        name: "Microsoft Active Directory",
        shortDescription: "Windows-based directory service",
        description:
          "Microsoft Active Directory is a directory service included with Windows Server that provides authentication, authorization, and directory services for Windows-based networks.",
        pros: [
          "Tight integration with Windows",
          "User-friendly management tools",
          "Widely supported",
          "Comprehensive features",
        ],
        cons: [
          "Requires Windows Server licenses",
          "Limited cross-platform support",
          "Can be complex for advanced scenarios",
        ],
        pricing: "Included with Windows Server licensing (approximately ₹41,750–₹5,01,000 depending on edition)",
        pricingModel: "One-time purchase + Software Assurance",
        officialWebsite:
          "https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview",
        pricingPage: "https://www.microsoft.com/en-us/windows-server/pricing",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with Windows Server experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹41,750–₹5,01,000 depending on edition",
        icon: UserCheck,
        calculateEffort: (users) => {
          // Base effort + additional effort based on users
          const baseEffort = 40
          const additionalEffort = Math.ceil(users / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on users
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(users / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Cost based on Windows Server edition and number of users
          if (users <= 25) {
            return "₹41,750 (Windows Server Essentials)"
          } else if (users <= 100) {
            return "₹1,67,000 (Windows Server Standard)"
          } else {
            return "₹5,01,000 (Windows Server Datacenter)"
          }
        },
      },
      {
        id: "okta-identity",
        tier: "premium",
        name: "Okta Identity Management",
        shortDescription: "Cloud-based identity platform",
        description:
          "Okta Identity Management is a cloud-based identity platform that provides secure, scalable, and reliable identity management with single sign-on and multi-factor authentication.",
        pros: [
          "Cloud-based solution",
          "Extensive application integrations",
          "User-friendly interface",
          "Comprehensive features",
        ],
        cons: [
          "Subscription cost scales with users",
          "Advanced features require higher tiers",
          "May require customization for specific needs",
        ],
        pricing: "Starting at ₹167 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.okta.com/products/",
        pricingPage: "https://www.okta.com/pricing/",
        setupTime: "3-4 weeks with IT support",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "IT administrator with identity management experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "120–160",
        priority: "High",
        estimatedCostRange: "₹1,00,200+/year for 50 users",
        icon: UserCheck,
        calculateEffort: (users) => {
          // Base effort + additional effort based on users
          const baseEffort = 120
          const additionalEffort = Math.ceil(users / 25) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on users
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(users / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Cost based on number of users
          const monthlyCost = users * 167
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year`
        },
      },
    ],
  },
  {
    id: 4,
    category: "Incident Management",
    text: "Is there an incident management platform in place?",
    description: "Incident management platforms help track, manage, and resolve security incidents.",
    helpText: "This includes incident detection, analysis, containment, eradication, and recovery processes.",
    icon: AlertTriangle,
    subQuestion: {
      id: "incident-count",
      text: "How many incidents does your organization handle monthly?",
      placeholder: "Enter number of incidents",
      unit: "incidents",
      defaultValue: 10,
      min: 1,
    },
    recommendations: [
      {
        id: "thehive",
        tier: "open-source",
        name: "TheHive",
        shortDescription: "Open-source incident response platform",
        description:
          "TheHive is a free, open-source security incident response platform designed to make security analysts and incident responders more efficient.",
        pros: [
          "Free and open-source",
          "Scalable architecture",
          "Integration with MISP and Cortex",
          "Collaborative investigation",
        ],
        cons: ["Complex setup and configuration", "Limited enterprise support", "Requires technical expertise"],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://thehive-project.org/",
        pricingPage: "https://thehive-project.org/",
        setupTime: "2-3 weeks with security team",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Security analyst with incident response experience",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: AlertTriangle,
        calculateEffort: (incidents) => {
          // Base effort + additional effort based on incidents
          const baseEffort = 80
          const additionalEffort = Math.ceil(incidents / 10) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (incidents) => {
          // Base timeline + additional time based on incidents
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(incidents / 20) * 10
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (incidents) => {
          return "₹0"
        },
      },
      {
        id: "jira-service-management",
        tier: "standard",
        name: "Atlassian Jira Service Management",
        shortDescription: "IT service management platform",
        description:
          "Jira Service Management is a service management platform that helps IT teams provide great service experiences and increase operational efficiency.",
        pros: [
          "User-friendly interface",
          "Customizable workflows",
          "Integration with other Atlassian products",
          "Extensive marketplace apps",
        ],
        cons: [
          "Subscription cost scales with agents",
          "Complex for advanced customizations",
          "May require additional apps for specific needs",
        ],
        pricing: "Starting at ₹1,670 per agent/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.atlassian.com/software/jira/service-management",
        pricingPage: "https://www.atlassian.com/software/jira/service-management/pricing",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with ITSM experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹20,040+/year for 1 agent",
        icon: AlertTriangle,
        calculateEffort: (incidents) => {
          // Base effort + additional effort based on incidents
          const baseEffort = 40
          const additionalEffort = Math.ceil(incidents / 20) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (incidents) => {
          // Base timeline + additional time based on incidents
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(incidents / 50)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (incidents) => {
          // Cost based on number of agents needed
          const agentsNeeded = Math.max(1, Math.ceil(incidents / 50))
          const monthlyCost = agentsNeeded * 1670
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year for ${agentsNeeded} agent${agentsNeeded > 1 ? "s" : ""}`
        },
      },
      {
        id: "servicenow-incident",
        tier: "premium",
        name: "ServiceNow Incident Management",
        shortDescription: "Enterprise incident management solution",
        description:
          "ServiceNow Incident Management provides comprehensive incident management capabilities with advanced workflow automation, reporting, and integration features.",
        pros: [
          "Comprehensive incident management",
          "Advanced automation capabilities",
          "Extensive integration options",
          "Enterprise-grade reporting",
        ],
        cons: ["Higher implementation complexity", "Significant investment required", "Requires dedicated resources"],
        pricing: "Starting at ₹8,35,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.servicenow.com/products/itsm/incident-management.html",
        pricingPage: "https://www.servicenow.com/company/contact.html",
        setupTime: "3-4 weeks with IT team",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "Dedicated IT team with ServiceNow experience",
        organizationSize: "Medium to large organizations (100+ employees)",
        effortHours: "120–160",
        priority: "Medium",
        estimatedCostRange: "₹8,35,000+/year",
        icon: AlertTriangle,
        calculateEffort: (incidents) => {
          // Base effort + additional effort based on incidents
          const baseEffort = 120
          const additionalEffort = Math.ceil(incidents / 10) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (incidents) => {
          // Base timeline + additional time based on incidents
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(incidents / 20)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (incidents) => {
          // Base cost + additional cost based on incidents
          const baseCost = 835000
          const additionalCost = Math.ceil(incidents / 10) * 10000
          const totalCost = baseCost + additionalCost
          return `₹${totalCost.toLocaleString()}/year`
        },
      },
    ],
  },
  {
    id: 5,
    category: "Data Loss Prevention",
    text: "Is there a Data Loss Prevention (DLP) solution in place?",
    description: "DLP solutions help prevent sensitive data from leaving the organization's control.",
    helpText: "This includes monitoring, blocking, and alerting on sensitive data transfers.",
    icon: FileText,
    subQuestion: {
      id: "dlp-data-types",
      text: "What types of sensitive data does your organization handle?",
      placeholder: "Enter data types (e.g., PII, financial data)",
      unit: "",
      defaultValue: "PII, Financial Data",
      min: 0,
    },
    recommendations: [
      {
        id: "opendlp",
        tier: "open-source",
        name: "OpenDLP",
        shortDescription: "Open-source data loss prevention",
        description:
          "OpenDLP is a free, open-source data loss prevention solution that helps organizations identify and protect sensitive data across their networks.",
        pros: ["Free and open-source", "Customizable scanning rules", "Network-based scanning", "Regular updates"],
        cons: [
          "Complex configuration",
          "Limited enterprise support",
          "Requires technical expertise",
          "Limited features compared to commercial solutions",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://code.google.com/archive/p/opendlp/",
        pricingPage: "https://code.google.com/archive/p/opendlp/",
        setupTime: "4+ weeks with security team",
        recommendedTimeline: "Within 6 weeks",
        requiredResources: "Security analyst with DLP experience",
        organizationSize: "Small to medium organizations (10-100 employees)",
        effortHours: "160+",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: FileText,
        calculateEffort: (dataTypes) => {
          // Base effort + additional effort based on data types
          const baseEffort = 160
          const numDataTypes = typeof dataTypes === "string" ? dataTypes.split(",").length : 1
          const additionalEffort = numDataTypes * 20
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}+`
        },
        calculateTimeline: (dataTypes) => {
          // Base timeline + additional time based on data types
          const baseTimeline = 4
          const numDataTypes = typeof dataTypes === "string" ? dataTypes.split(",").length : 1
          const additionalTimeline = numDataTypes
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (dataTypes) => {
          return "₹0"
        },
      },
      {
        id: "symantec-dlp",
        tier: "standard",
        name: "Symantec DLP",
        shortDescription: "Comprehensive data protection",
        description:
          "Symantec Data Loss Prevention provides comprehensive protection for sensitive data with endpoint, network, and cloud coverage.",
        pros: [
          "Comprehensive data protection",
          "Centralized management",
          "Advanced detection capabilities",
          "Integration with other security tools",
        ],
        cons: ["Subscription cost scales with users", "Complex implementation", "Requires dedicated resources"],
        pricing: "Approximately ₹2,088 per user annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.broadcom.com/products/cyber-security/information-protection/data-loss-prevention",
        pricingPage: "https://www.broadcom.com/company/contact",
        setupTime: "2-3 weeks with security team",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Security team with DLP experience",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "80–120",
        priority: "High",
        estimatedCostRange: "₹1,04,400+/year for 50 users",
        icon: FileText,
        calculateEffort: (dataTypes) => {
          // Base effort + additional effort based on data types
          const baseEffort = 80
          const numDataTypes = typeof dataTypes === "string" ? dataTypes.split(",").length : 1
          const additionalEffort = numDataTypes * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (dataTypes) => {
          // Base timeline + additional time based on data types
          const baseTimeline = 3
          const numDataTypes = typeof dataTypes === "string" ? dataTypes.split(",").length : 1
          const additionalTimeline = Math.ceil(numDataTypes / 2)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (dataTypes) => {
          // Cost based on number of users (assuming 50 users)
          const users = 50
          const annualCost = users * 2088
          return `₹${annualCost.toLocaleString()}/year for ${users} users`
        },
      },
      {
        id: "forcepoint-dlp",
        tier: "premium",
        name: "Forcepoint DLP",
        shortDescription: "Enterprise data protection",
        description:
          "Forcepoint Data Loss Prevention provides enterprise-grade protection for sensitive data with advanced analytics and behavioral monitoring.",
        pros: [
          "Advanced analytics",
          "Behavioral monitoring",
          "Comprehensive coverage",
          "Regulatory compliance features",
        ],
        cons: ["Premium pricing", "Complex implementation", "Requires specialized expertise"],
        pricing: "Starting at ₹4,175 per user annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.forcepoint.com/product/dlp-data-loss-prevention",
        pricingPage: "https://www.forcepoint.com/form/contact-us",
        setupTime: "4+ weeks with security team",
        recommendedTimeline: "Within 6 weeks",
        requiredResources: "Dedicated security team with DLP experience",
        organizationSize: "Large organizations (100+ employees)",
        effortHours: "160+",
        priority: "Medium",
        estimatedCostRange: "₹2,08,750+/year for 50 users",
        icon: FileText,
        calculateEffort: (dataTypes) => {
          // Base effort + additional effort based on data types
          const baseEffort = 160
          const numDataTypes = typeof dataTypes === "string" ? dataTypes.split(",").length : 1
          const additionalEffort = numDataTypes * 20
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}+`
        },
        calculateTimeline: (dataTypes) => {
          // Base timeline + additional time based on data types
          const baseTimeline = 4
          const numDataTypes = typeof dataTypes === "string" ? dataTypes.split(",").length : 1
          const additionalTimeline = numDataTypes
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (dataTypes) => {
          // Cost based on number of users (assuming 50 users)
          const users = 50
          const annualCost = users * 4175
          return `₹${annualCost.toLocaleString()}/year for ${users} users`
        },
      },
    ],
  },
  {
    id: 6,
    category: "PII Protection",
    text: "Is there Personally Identifiable Information (PII) redaction technology in place?",
    description: "PII redaction technology helps protect sensitive personal information from unauthorized access.",
    helpText:
      "This includes tools that automatically identify and redact personal information from documents and data.",
    icon: Eye,
    subQuestion: {
      id: "pii-volume",
      text: "What volume of documents containing PII does your organization process?",
      placeholder: "Enter approximate number of documents monthly",
      unit: "documents/month",
      defaultValue: 100,
      min: 1,
    },
    recommendations: [
      {
        id: "pdf-redact-tools",
        tier: "open-source",
        name: "PDF Redact Tools",
        shortDescription: "Open-source PDF redaction",
        description:
          "PDF Redact Tools is a free, open-source tool that helps redact sensitive information from PDF documents.",
        pros: [
          "Free and open-source",
          "Command-line interface for automation",
          "Permanently removes sensitive data",
          "Works with PDF documents",
        ],
        cons: ["Limited to PDF format", "Manual processing required", "No GUI interface", "Limited features"],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://github.com/firstlookmedia/pdf-redact-tools",
        pricingPage: "https://github.com/firstlookmedia/pdf-redact-tools",
        setupTime: "4+ weeks for technical setup",
        recommendedTimeline: "Within 6 weeks",
        requiredResources: "Developer for setup and automation",
        organizationSize: "Small organizations (5-50 employees)",
        effortHours: "160+",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Eye,
        calculateEffort: (documents) => {
          // Base effort + additional effort based on document volume
          const baseEffort = 160
          const additionalEffort = Math.ceil(documents / 100) * 20
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}+`
        },
        calculateTimeline: (documents) => {
          // Base timeline + additional time based on document volume
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(documents / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (documents) => {
          return "₹0"
        },
      },
      {
        id: "vera-redaction",
        tier: "standard",
        name: "Vera Redaction",
        shortDescription: "Document redaction solution",
        description:
          "Vera Redaction provides automated redaction capabilities for sensitive information in various document formats.",
        pros: [
          "User-friendly interface",
          "Supports multiple document formats",
          "Automated redaction capabilities",
          "Audit trail for compliance",
        ],
        cons: ["Subscription cost scales with users", "Limited advanced features", "May require customization"],
        pricing: "Approximately ₹835 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.vera.com/",
        pricingPage: "https://www.vera.com/contact/",
        setupTime: "2-3 weeks with IT support",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "IT administrator for setup and user training",
        organizationSize: "Small to medium organizations (10-100 employees)",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹1,00,200+/year for 10 users",
        icon: Eye,
        calculateEffort: (documents) => {
          // Base effort + additional effort based on document volume
          const baseEffort = 80
          const additionalEffort = Math.ceil(documents / 100) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (documents) => {
          // Base timeline + additional time based on document volume
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(documents / 500)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (documents) => {
          // Cost based on number of users needed
          const usersNeeded = Math.max(10, Math.ceil(documents / 100))
          const monthlyCost = usersNeeded * 835
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year for ${usersNeeded} users`
        },
      },
      {
        id: "ibm-watson-discovery",
        tier: "premium",
        name: "IBM Watson Discovery with Redaction",
        shortDescription: "AI-powered document analysis",
        description:
          "IBM Watson Discovery with redaction capabilities uses AI to automatically identify and redact sensitive information from documents.",
        pros: ["AI-powered redaction", "Automated document processing", "Advanced analytics", "Comprehensive coverage"],
        cons: ["Premium pricing", "Complex implementation", "Requires specialized expertise"],
        pricing: "Starting at ₹41,750 per month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.ibm.com/cloud/watson-discovery",
        pricingPage: "https://www.ibm.com/products/watson-discovery/pricing",
        setupTime: "3-4 weeks with IT team",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "Dedicated IT team with AI/ML experience",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "120–160",
        priority: "Medium",
        estimatedCostRange: "₹5,01,000+/year",
        icon: Eye,
        calculateEffort: (documents) => {
          // Base effort + additional effort based on document volume
          const baseEffort = 120
          const additionalEffort = Math.ceil(documents / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (documents) => {
          // Base timeline + additional time based on document volume
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(documents / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (documents) => {
          // Base cost + additional cost based on document volume
          const baseCost = 41750 * 12 // Annual cost
          const additionalCost = Math.ceil(documents / 100) * 5000
          const totalCost = baseCost + additionalCost
          return `₹${totalCost.toLocaleString()}/year`
        },
      },
    ],
  },
  {
    id: 7,
    category: "Security Awareness",
    text: "Is there annual or quarterly security awareness training for employees?",
    description: "Security awareness training helps employees recognize and respond to security threats.",
    helpText: "This includes phishing simulations, social engineering awareness, and security best practices training.",
    icon: Users,
    subQuestion: {
      id: "training-employees",
      text: "How many employees require security awareness training?",
      placeholder: "Enter number of employees",
      unit: "employees",
      defaultValue: 50,
      min: 1,
    },
    recommendations: [
      {
        id: "staysafeonline",
        tier: "open-source",
        name: "StaySafeOnline Materials",
        shortDescription: "Free security awareness resources",
        description:
          "StaySafeOnline provides free security awareness training materials and resources for organizations of all sizes.",
        pros: ["Free resources", "Regularly updated content", "Variety of topics covered", "Ready-to-use materials"],
        cons: ["Limited tracking capabilities", "No automated phishing simulations", "Requires internal management"],
        pricing: "Free",
        pricingModel: "Free resources",
        officialWebsite: "https://staysafeonline.org/",
        pricingPage: "https://staysafeonline.org/resources/",
        setupTime: "2-3 weeks for program development",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Internal trainer or security champion",
        organizationSize: "Small organizations (5-50 employees)",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Users,
        calculateEffort: (employees) => {
          // Base effort + additional effort based on employee count
          const baseEffort = 80
          const additionalEffort = Math.ceil(employees / 25) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (employees) => {
          // Base timeline + additional time based on employee count
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(employees / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (employees) => {
          return "₹0"
        },
      },
      {
        id: "knowbe4",
        tier: "standard",
        name: "KnowBe4 Security Awareness Training",
        shortDescription: "Comprehensive training platform",
        description:
          "KnowBe4 provides a comprehensive security awareness training platform with phishing simulations, training modules, and compliance tracking.",
        pros: [
          "Extensive training library",
          "Automated phishing simulations",
          "User-friendly dashboard",
          "Compliance reporting",
        ],
        cons: [
          "Subscription cost scales with users",
          "Advanced features require higher tiers",
          "May require customization",
        ],
        pricing: "Starting at ₹835 per user annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.knowbe4.com/",
        pricingPage: "https://www.knowbe4.com/pricing-kevin-mitnick-security-awareness-training/",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator for setup and management",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹41,750+/year for 50 employees",
        icon: Users,
        calculateEffort: (employees) => {
          // Base effort + additional effort based on employee count
          const baseEffort = 40
          const additionalEffort = Math.ceil(employees / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (employees) => {
          // Base timeline + additional time based on employee count
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(employees / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (employees) => {
          // Cost based on number of employees
          const annualCost = employees * 835
          return `₹${annualCost.toLocaleString()}/year`
        },
      },
      {
        id: "sans-security-awareness",
        tier: "premium",
        name: "SANS Security Awareness Training",
        shortDescription: "Expert-led security training",
        description:
          "SANS Security Awareness Training provides expert-led security awareness training with comprehensive content and deployment program support.",
        pros: [
          "Industry-leading content quality",
          "Comprehensive training materials",
          "Expert-led instruction",
          "Regular content updates",
        ],
        cons: ["Premium pricing", "May require additional resources to manage", "Complex for small organizations"],
        pricing: "Approximately ₹4,175 per user annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.sans.org/security-awareness-training/",
        pricingPage: "https://www.sans.org/security-awareness-training/pricing/",
        setupTime: "2-3 weeks with security team",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Security team for program management",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹2,08,750+/year for 50 employees",
        icon: Users,
        calculateEffort: (employees) => {
          // Base effort + additional effort based on employee count
          const baseEffort = 80
          const additionalEffort = Math.ceil(employees / 25) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (employees) => {
          // Base timeline + additional time based on employee count
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(employees / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (employees) => {
          // Cost based on number of employees
          const annualCost = employees * 4175
          return `₹${annualCost.toLocaleString()}/year`
        },
      },
    ],
  },
  {
    id: 8,
    category: "Secure Remote Access",
    text: "Is VPN technology or Zero Trust architecture in place?",
    description: "Secure remote access solutions help protect access to corporate resources from outside the network.",
    helpText: "This includes VPN, Zero Trust Network Access (ZTNA), and other secure remote access technologies.",
    icon: Network,
    subQuestion: {
      id: "remote-users",
      text: "How many remote users require secure access?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 25,
      min: 1,
    },
    recommendations: [
      {
        id: "openvpn",
        tier: "open-source",
        name: "OpenVPN",
        shortDescription: "Open-source VPN solution",
        description:
          "OpenVPN is a free, open-source VPN solution that provides secure remote access to corporate resources.",
        pros: ["Free and open-source", "Strong encryption", "Cross-platform support", "Active community"],
        cons: [
          "Complex setup and configuration",
          "Limited scalability",
          "Requires technical expertise",
          "Limited support options",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://openvpn.net/community/",
        pricingPage: "https://openvpn.net/community/",
        setupTime: "2-3 weeks with IT support",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "IT administrator with networking experience",
        organizationSize: "Small to medium organizations (5-100 employees)",
        effortHours: "80–120",
        priority: "High",
        estimatedCostRange: "₹0",
        icon: Network,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 80
          const additionalEffort = Math.ceil(users / 25) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(users / 50)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          return "₹0"
        },
      },
      {
        id: "nordlayer",
        tier: "standard",
        name: "NordLayer (formerly NordVPN Teams)",
        shortDescription: "Business VPN solution",
        description:
          "NordLayer is a business VPN solution that provides secure remote access with easy deployment and management.",
        pros: ["User-friendly interface", "Easy deployment", "Centralized management", "24/7 support"],
        cons: [
          "Subscription cost scales with users",
          "Limited advanced features",
          "May not meet all enterprise requirements",
        ],
        pricing: "Starting at ₹585 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://nordlayer.com/",
        pricingPage: "https://nordlayer.com/pricing/",
        setupTime: "3-4 weeks with IT support",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "IT administrator for deployment and management",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "120–160",
        priority: "High",
        estimatedCostRange: "₹1,75,500+/year for 25 users",
        icon: Network,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 120
          const additionalEffort = Math.ceil(users / 20) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(users / 50)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Cost based on number of users
          const monthlyCost = users * 585
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year`
        },
      },
      {
        id: "zscaler-zero-trust",
        tier: "premium",
        name: "Zscaler Zero Trust Exchange",
        shortDescription: "Enterprise zero trust platform",
        description:
          "Zscaler Zero Trust Exchange is a cloud-native security platform that provides secure access to applications and resources based on zero trust principles.",
        pros: [
          "Comprehensive zero trust architecture",
          "Cloud-native solution",
          "Advanced security features",
          "Global cloud platform",
        ],
        cons: ["Premium pricing", "Complex implementation", "Requires specialized expertise"],
        pricing: "Custom pricing",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.zscaler.com/products/zscaler-zero-trust-exchange",
        pricingPage: "https://www.zscaler.com/company/contact",
        setupTime: "4-5 weeks with security team",
        recommendedTimeline: "Within 5 weeks",
        requiredResources: "Dedicated security team with zero trust experience",
        organizationSize: "Medium to large organizations (100+ employees)",
        effortHours: "160–200",
        priority: "Medium",
        estimatedCostRange: "Custom pricing, typically ₹8,35,000+/year",
        icon: Network,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 160
          const additionalEffort = Math.ceil(users / 20) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 5
          const additionalTimeline = Math.ceil(users / 50)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Custom pricing, estimate based on user count
          const estimatedCost = Math.max(835000, users * 10000)
          return `Custom pricing, typically ₹${estimatedCost.toLocaleString()}+/year`
        },
      },
    ],
  },
  {
    id: 9,
    category: "Physical Access Control",
    text: "Is there FaceID or fingerprint ID physical access control to the premises?",
    description: "Biometric access control systems help secure physical access to facilities.",
    helpText: "This includes facial recognition, fingerprint scanners, and other biometric authentication methods.",
    icon: Lock,
    subQuestion: {
      id: "entry-points",
      text: "How many entry points require biometric access control?",
      placeholder: "Enter number of entry points",
      unit: "entry points",
      defaultValue: 3,
      min: 1,
    },
    recommendations: [
      {
        id: "zkteco-biometric",
        tier: "standard",
        name: "ZKTeco Biometric Access Control",
        shortDescription: "Affordable biometric access solution",
        description:
          "ZKTeco provides affordable biometric access control systems with fingerprint, facial recognition, and RFID capabilities.",
        pros: [
          "Cost-effective solution",
          "Multiple authentication methods",
          "Easy installation",
          "Centralized management",
        ],
        cons: ["Limited advanced features", "May require additional hardware", "Limited integration options"],
        pricing: "Approximately ₹41,750 per entry point",
        pricingModel: "One-time purchase",
        officialWebsite: "https://www.zkteco.com/",
        pricingPage: "https://www.zkteco.com/en/contact_us",
        setupTime: "2-3 weeks for installation",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Facilities team and IT support",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹1,25,250 for 3 entry points",
        icon: Lock,
        calculateEffort: (entryPoints) => {
          // Base effort + additional effort based on entry points
          const baseEffort = 80
          const additionalEffort = entryPoints * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (entryPoints) => {
          // Base timeline + additional time based on entry points
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(entryPoints / 5)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (entryPoints) => {
          // Cost based on number of entry points
          const totalCost = entryPoints * 41750
          return `₹${totalCost.toLocaleString()} for ${entryPoints} entry point${entryPoints > 1 ? "s" : ""}`
        },
      },
      {
        id: "hid-global-biometric",
        tier: "premium",
        name: "HID Global Biometric Access Control",
        shortDescription: "Enterprise-grade access control",
        description:
          "HID Global provides enterprise-grade biometric access control systems with advanced security features and integration capabilities.",
        pros: [
          "Enterprise-grade security",
          "Advanced integration capabilities",
          "Comprehensive management system",
          "High reliability and durability",
        ],
        cons: ["Premium pricing", "Complex implementation", "Requires specialized expertise"],
        pricing: "Approximately ₹83,500–₹1,67,000 per entry point",
        pricingModel: "One-time purchase + maintenance",
        officialWebsite: "https://www.hidglobal.com/",
        pricingPage: "https://www.hidglobal.com/contact-us",
        setupTime: "3-4 weeks for installation",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "Facilities team, IT support, and security team",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "120–160",
        priority: "Medium",
        estimatedCostRange: "₹2,50,500–₹5,01,000 for 3 entry points",
        icon: Lock,
        calculateEffort: (entryPoints) => {
          // Base effort + additional effort based on entry points
          const baseEffort = 120
          const additionalEffort = entryPoints * 15
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (entryPoints) => {
          // Base timeline + additional time based on entry points
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(entryPoints / 3)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (entryPoints) => {
          // Cost based on number of entry points
          const minCost = entryPoints * 83500
          const maxCost = entryPoints * 167000
          return `₹${minCost.toLocaleString()}–₹${maxCost.toLocaleString()} for ${entryPoints} entry point${entryPoints > 1 ? "s" : ""}`
        },
      },
    ],
  },
  {
    id: 10,
    category: "Video Surveillance",
    text: "Is there CCTV camera monitoring in place for the office premises?",
    description: "CCTV monitoring helps secure physical premises and provides evidence in case of security incidents.",
    helpText: "This includes cameras, recording systems, and monitoring capabilities forr physical security.",
    icon: Camera,
    subQuestion: {
      id: "cctv-areas",
      text: "How many areas or rooms require CCTV monitoring?",
      placeholder: "Enter number of areas",
      unit: "areas",
      defaultValue: 5,
      min: 1,
    },
    recommendations: [
      {
        id: "hikvision-dvr",
        tier: "standard",
        name: "Hikvision DVR Kit",
        shortDescription: "Cost-effective CCTV solution",
        description:
          "Hikvision DVR kits provide cost-effective CCTV monitoring solutions with reliable cameras and recording capabilities.",
        pros: ["Cost-effective solution", "Easy installation", "Reliable performance", "Remote viewing capabilities"],
        cons: ["Limited advanced features", "May require professional installation", "Limited scalability"],
        pricing: "Approximately ₹25,050–₹83,500 for a basic 4–8 camera setup",
        pricingModel: "One-time purchase",
        officialWebsite: "https://www.hikvision.com/",
        pricingPage: "https://www.hikvision.com/en/support/contact-us/",
        setupTime: "1-2 weeks for installation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "Facilities team and IT support",
        organizationSize: "Small to medium organizations (5-100 employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹25,050–₹83,500 for basic setup",
        icon: Camera,
        calculateEffort: (areas) => {
          // Base effort + additional effort based on areas
          const baseEffort = 40
          const additionalEffort = Math.ceil(areas / 2) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (areas) => {
          // Base timeline + additional time based on areas
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(areas / 10)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (areas) => {
          // Cost based on number of areas
          const camerasNeeded = Math.max(4, areas)
          const costPerCamera = 6000
          const baseCost = 25050 // DVR and basic setup
          const totalCost = baseCost + camerasNeeded * costPerCamera
          return `₹${totalCost.toLocaleString()} for ${camerasNeeded} cameras`
        },
      },
      {
        id: "arlo-pro",
        tier: "premium",
        name: "Arlo Pro Wireless Camera System",
        shortDescription: "Wireless security camera system",
        description:
          "Arlo Pro provides a wireless security camera system with advanced features like cloud storage, motion detection, and mobile app access.",
        pros: ["Wireless installation", "Cloud storage", "Advanced motion detection", "Mobile app access"],
        cons: ["Higher cost", "Requires good Wi-Fi coverage", "Subscription for advanced features"],
        pricing: "Starting at ₹41,750 for a 3-camera system",
        pricingModel: "One-time purchase + optional subscription",
        officialWebsite: "https://www.arlo.com/",
        pricingPage: "https://www.arlo.com/en-us/pricing.html",
        setupTime: "1-2 weeks for installation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT support for setup and configuration",
        organizationSize: "Small to medium organizations (5-100 employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹41,750+ for basic setup",
        icon: Camera,
        calculateEffort: (areas) => {
          // Base effort + additional effort based on areas
          const baseEffort = 40
          const additionalEffort = Math.ceil(areas / 3) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (areas) => {
          // Base timeline + additional time based on areas
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(areas / 15)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (areas) => {
          // Cost based on number of areas
          const camerasNeeded = Math.max(3, areas)
          const costPerCamera = 12000
          const baseCost = 41750 // Base system cost
          const totalCost = baseCost + (camerasNeeded - 3) * costPerCamera
          return `₹${totalCost.toLocaleString()} for ${camerasNeeded} cameras`
        },
      },
    ],
  },
  {
    id: 11,
    category: "Fire Safety",
    text: "Are there fire extinguishers placed at designated locations within the premises?",
    description: "Fire extinguishers are essential for emergency response to small fires.",
    helpText: "This includes proper placement, maintenance, and staff training on fire extinguisher use.",
    icon: Flame,
    subQuestion: {
      id: "extinguisher-count",
      text: "How many extinguishers are required, based on the size and layout of the premises?",
      placeholder: "Enter number of extinguishers",
      unit: "extinguishers",
      defaultValue: 5,
      min: 1,
    },
    recommendations: [
      {
        id: "abc-extinguishers",
        tier: "standard",
        name: "ABC-rated Fire Extinguishers",
        shortDescription: "Standard fire safety equipment",
        description:
          "ABC-rated fire extinguishers are versatile and can handle most common types of fires, including those involving paper, wood, flammable liquids, and electrical equipment.",
        pros: [
          "Versatile for multiple fire types",
          "Cost-effective solution",
          "Easy to install and maintain",
          "Meets basic compliance requirements",
        ],
        cons: [
          "Requires regular maintenance",
          "Staff training needed for proper use",
          "May not be sufficient for specialized environments",
        ],
        pricing: "Approximately ₹4,175–₹8,350 per unit",
        pricingModel: "One-time purchase + maintenance",
        officialWebsite: "https://www.fireextinguishersdirect.co.uk/",
        pricingPage: "https://www.fireextinguishersdirect.co.uk/fire-extinguishers",
        setupTime: "1-2 weeks for procurement and installation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "Facilities team for installation",
        organizationSize: "Organizations of all sizes",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹20,875–₹41,750 for 5 units",
        icon: Flame,
        calculateEffort: (extinguishers) => {
          // Base effort + additional effort based on number of extinguishers
          const baseEffort = 40
          const additionalEffort = Math.ceil(extinguishers / 10) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (extinguishers) => {
          // Base timeline + additional time based on number of extinguishers
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(extinguishers / 20)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (extinguishers) => {
          // Cost based on number of extinguishers
          const minCost = extinguishers * 4175
          const maxCost = extinguishers * 8350
          return `₹${minCost.toLocaleString()}–₹${maxCost.toLocaleString()} for ${extinguishers} units`
        },
      },
      {
        id: "fire-safety-company",
        tier: "premium",
        name: "Professional Fire Safety Assessment",
        shortDescription: "Comprehensive fire safety solution",
        description:
          "A professional fire safety company will assess your premises, recommend appropriate fire extinguisher types and placements, and provide installation and maintenance services.",
        pros: [
          "Expert assessment of requirements",
          "Professional installation",
          "Ongoing maintenance and support",
          "Comprehensive compliance documentation",
        ],
        cons: ["Higher initial cost", "May require scheduling for assessment", "Ongoing service contracts"],
        pricing: "Custom pricing, starting at ₹41,750",
        pricingModel: "Assessment + installation + maintenance contract",
        officialWebsite: "https://www.firesafetyservices.co.uk/",
        pricingPage: "https://www.firesafetyservices.co.uk/contact-us/",
        setupTime: "1-2 weeks for assessment and installation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "Coordination with facilities team",
        organizationSize: "Medium to large organizations (25+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹41,750+ for assessment and installation",
        icon: Flame,
        calculateEffort: (extinguishers) => {
          // Base effort + additional effort based on number of extinguishers
          const baseEffort = 40
          const additionalEffort = Math.ceil(extinguishers / 10) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (extinguishers) => {
          // Base timeline + additional time based on number of extinguishers
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(extinguishers / 15)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (extinguishers) => {
          // Base assessment cost + per extinguisher cost
          const assessmentCost = 41750
          const perExtinguisherCost = 10000
          const totalCost = assessmentCost + extinguishers * perExtinguisherCost
          return `₹${totalCost.toLocaleString()} for assessment and ${extinguishers} units`
        },
      },
    ],
  },
  {
    id: 12,
    category: "Physical Infrastructure",
    text: "Are cables carrying power, data, or supporting information services protected from interception, interference, or damage?",
    description: "Cable protection helps prevent physical tampering, damage, and unauthorized access to data.",
    helpText:
      "This includes proper cable management, conduits, shielding, and physical security measures for cable infrastructure.",
    icon: Cable,
    subQuestion: {
      id: "cable-length",
      text: "How many meters of cabling need protection or reinstallation?",
      placeholder: "Enter length in meters",
      unit: "meters",
      defaultValue: 100,
      min: 1,
    },
    recommendations: [
      {
        id: "cable-conduits",
        tier: "standard",
        name: "Protective Conduits and Shielding",
        shortDescription: "Basic cable protection solution",
        description:
          "Protective conduits and shielding provide physical protection for cables against damage, interference, and unauthorized access.",
        pros: [
          "Cost-effective solution",
          "Relatively easy installation",
          "Provides basic protection",
          "Suitable for most office environments",
        ],
        cons: [
          "May require some disruption during installation",
          "Limited protection against sophisticated attacks",
          "Requires proper planning for future expansion",
        ],
        pricing: "Approximately ₹167–₹418 per meter",
        pricingModel: "One-time purchase + installation",
        officialWebsite: "https://www.panduit.com/",
        pricingPage: "https://www.panduit.com/en/support/contact-us.html",
        setupTime: "2-3 weeks for installation",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Facilities team or IT support",
        organizationSize: "Organizations of all sizes",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹16,700–₹41,800 for 100 meters",
        icon: Cable,
        calculateEffort: (meters) => {
          // Base effort + additional effort based on cable length
          const baseEffort = 80
          const additionalEffort = Math.ceil(meters / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (meters) => {
          // Base timeline + additional time based on cable length
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(meters / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (meters) => {
          // Cost based on cable length
          const minCost = meters * 167
          const maxCost = meters * 418
          return `₹${minCost.toLocaleString()}–₹${maxCost.toLocaleString()} for ${meters} meters`
        },
      },
      {
        id: "professional-cabling",
        tier: "premium",
        name: "Professional Cabling Company",
        shortDescription: "Enterprise-grade cable management",
        description:
          "A professional cabling company will assess your infrastructure, design a comprehensive cable management system, and provide professional installation with proper documentation.",
        pros: [
          "Expert assessment and design",
          "Professional installation",
          "Comprehensive documentation",
          "Future-proof planning",
        ],
        cons: ["Higher cost", "May require significant downtime", "Requires coordination with IT and facilities"],
        pricing: "Custom pricing, starting at ₹41,750 for small offices",
        pricingModel: "Assessment + design + installation",
        officialWebsite: "https://www.blackbox.com/",
        pricingPage: "https://www.blackbox.com/en-us/contact-us",
        setupTime: "4-5 weeks for assessment, design, and installation",
        recommendedTimeline: "Within 5 weeks",
        requiredResources: "IT team and facilities coordination",
        organizationSize: "Medium to large organizations (25+ employees)",
        effortHours: "160–200",
        priority: "Medium",
        estimatedCostRange: "₹41,750+ for assessment and installation",
        icon: Cable,
        calculateEffort: (meters) => {
          // Base effort + additional effort based on cable length
          const baseEffort = 160
          const additionalEffort = Math.ceil(meters / 25) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (meters) => {
          // Base timeline + additional time based on cable length
          const baseTimeline = 5
          const additionalTimeline = Math.ceil(meters / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (meters) => {
          // Base assessment cost + per meter cost
          const baseCost = 41750
          const perMeterCost = 500
          const totalCost = baseCost + meters * perMeterCost
          return `₹${totalCost.toLocaleString()} for ${meters} meters`
        },
      },
    ],
  },
  {
    id: 13,
    category: "Endpoint Security",
    text: "Do you have endpoint protection (e.g., antivirus, device encryption) implemented?",
    description: "Endpoint protection helps secure devices from malware, unauthorized access, and data breaches.",
    helpText:
      "This includes antivirus software, device encryption, application control, and other endpoint security measures.",
    icon: ShieldAlert,
    subQuestion: {
      id: "endpoint-count",
      text: "How many devices require endpoint protection?",
      placeholder: "Enter number of devices",
      unit: "devices",
      defaultValue: 25,
      min: 1,
    },
    recommendations: [
      {
        id: "norton-mcafee",
        tier: "standard",
        name: "Norton or McAfee Endpoint Security",
        shortDescription: "Standard endpoint protection",
        description:
          "Norton and McAfee provide comprehensive endpoint security solutions that include antivirus, firewall, device encryption, and web protection features.",
        pros: [
          "Comprehensive protection",
          "User-friendly interface",
          "Regular updates",
          "Centralized management console",
        ],
        cons: [
          "May impact system performance",
          "Limited advanced threat protection",
          "May require additional solutions for complete security",
        ],
        pricing: "Approximately ₹2,505 per device annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.norton.com/products/norton-360-for-business",
        pricingPage: "https://www.norton.com/products/norton-360-for-business",
        setupTime: "1-2 weeks for deployment",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator for deployment and management",
        organizationSize: "Small to medium organizations (5-250 employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹62,625/year for 25 devices",
        icon: ShieldAlert,
        calculateEffort: (devices) => {
          // Base effort + additional effort based on device count
          const baseEffort = 40
          const additionalEffort = Math.ceil(devices / 25) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (devices) => {
          // Base timeline + additional time based on device count
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(devices / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (devices) => {
          // Cost based on number of devices
          const annualCost = devices * 2505
          return `₹${annualCost.toLocaleString()}/year for ${devices} devices`
        },
      },
      {
        id: "crowdstrike-falcon",
        tier: "premium",
        name: "CrowdStrike Falcon",
        shortDescription: "Advanced endpoint protection",
        description:
          "CrowdStrike Falcon is an enterprise-grade endpoint protection platform that uses AI and behavioral analytics to detect and prevent advanced threats.",
        pros: [
          "Advanced threat detection",
          "Minimal performance impact",
          "Cloud-based management",
          "Comprehensive visibility and reporting",
        ],
        cons: ["Premium pricing", "Complex deployment", "May require specialized expertise"],
        pricing: "Starting at ₹5,009 per device annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.crowdstrike.com/",
        pricingPage: "https://www.crowdstrike.com/products/endpoint-security/",
        setupTime: "2-3 weeks for deployment",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Security team for deployment and management",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "80–120",
        priority: "High",
        estimatedCostRange: "₹1,25,225+/year for 25 devices",
        icon: ShieldAlert,
        calculateEffort: (devices) => {
          // Base effort + additional effort based on device count
          const baseEffort = 80
          const additionalEffort = Math.ceil(devices / 20) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (devices) => {
          // Base timeline + additional time based on device count
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(devices / 50)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (devices) => {
          // Cost based on number of devices
          const annualCost = devices * 5009
          return `₹${annualCost.toLocaleString()}/year for ${devices} devices`
        },
      },
    ],
  },
  {
    id: 14,
    category: "Access Management",
    text: "Are privileged access rights restricted and monitored?",
    description: "Privileged access management helps control and monitor access to critical systems and data.",
    helpText:
      "This includes restricting administrative privileges, monitoring privileged user activities, and implementing least privilege principles.",
    icon: UserCog,
    subQuestion: {
      id: "privileged-users",
      text: "How many users or accounts need to be monitored and restricted?",
      placeholder: "Enter number of privileged users",
      unit: "users",
      defaultValue: 10,
      min: 1,
    },
    recommendations: [
      {
        id: "manageengine-pam",
        tier: "standard",
        name: "ManageEngine PAM360",
        shortDescription: "Privileged access management solution",
        description:
          "ManageEngine PAM360 provides comprehensive privileged access management capabilities, including password vaulting, session monitoring, and access control.",
        pros: ["Comprehensive PAM features", "User-friendly interface", "Scalable solution", "Detailed audit trails"],
        cons: [
          "Requires dedicated resources for management",
          "May require customization for specific needs",
          "Limited advanced features compared to premium solutions",
        ],
        pricing: "Starting at ₹83,500 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.manageengine.com/privileged-access-management/",
        pricingPage: "https://www.manageengine.com/privileged-access-management/get-quote.html",
        setupTime: "3-4 weeks for deployment",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "IT administrator with security experience",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "120–160",
        priority: "High",
        estimatedCostRange: "₹83,500+/year",
        icon: UserCog,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 120
          const additionalEffort = Math.ceil(users / 10) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(users / 20)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Base cost + per user cost
          const baseCost = 83500
          const perUserCost = 5000
          const totalCost = baseCost + Math.max(0, users - 10) * perUserCost
          return `₹${totalCost.toLocaleString()}/year for ${users} users`
        },
      },
      {
        id: "cyberark-pam",
        tier: "premium",
        name: "CyberArk Privileged Access Management",
        shortDescription: "Enterprise-grade PAM solution",
        description:
          "CyberArk provides an enterprise-grade privileged access management solution with advanced features for securing, managing, and monitoring privileged accounts.",
        pros: [
          "Industry-leading PAM solution",
          "Comprehensive security features",
          "Advanced monitoring and analytics",
          "Enterprise-grade support",
        ],
        cons: ["Premium pricing", "Complex implementation", "Requires specialized expertise"],
        pricing: "Custom pricing, typically starting at ₹4,17,500 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.cyberark.com/",
        pricingPage: "https://www.cyberark.com/contact-us/",
        setupTime: "4-5 weeks for deployment",
        recommendedTimeline: "Within 5 weeks",
        requiredResources: "Dedicated security team with PAM experience",
        organizationSize: "Medium to large organizations (100+ employees)",
        effortHours: "160–200",
        priority: "High",
        estimatedCostRange: "₹4,17,500+/year",
        icon: UserCog,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 160
          const additionalEffort = Math.ceil(users / 5) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 5
          const additionalTimeline = Math.ceil(users / 10)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Base cost + per user cost
          const baseCost = 417500
          const perUserCost = 10000
          const totalCost = baseCost + users * perUserCost
          return `₹${totalCost.toLocaleString()}/year for ${users} users`
        },
      },
    ],
  },
  {
    id: 15,
    category: "Access Control",
    text: "Is access to information and assets restricted as per access control policies?",
    description: "Access control policies help ensure that only authorized users can access specific resources.",
    helpText:
      "This includes role-based access control, attribute-based access control, and other mechanisms to restrict access to information and assets.",
    icon: FileKey,
    subQuestion: {
      id: "asset-types",
      text: "What type of assets require access control (e.g., files, servers, applications)?",
      placeholder: "Enter asset types",
      unit: "",
      defaultValue: "Files, Servers, Applications",
      min: 0,
    },
    recommendations: [
      {
        id: "microsoft-group-policy",
        tier: "standard",
        name: "Microsoft Group Policy",
        shortDescription: "Windows-based access control",
        description:
          "Microsoft Group Policy provides centralized access control for Windows-based environments, allowing administrators to define and enforce security policies.",
        pros: [
          "Included with Windows Server",
          "Centralized management",
          "Extensive configuration options",
          "Integration with Active Directory",
        ],
        cons: [
          "Limited to Windows environments",
          "Complex for advanced scenarios",
          "Requires Windows Server infrastructure",
        ],
        pricing: "Included with Windows Server licensing",
        pricingModel: "Included with Windows Server",
        officialWebsite:
          "https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-security-configuration-framework/windows-security-baselines",
        pricingPage: "https://www.microsoft.com/en-us/windows-server/pricing",
        setupTime: "1-2 weeks for configuration",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with Windows Server experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "Included with Windows Server licensing",
        icon: FileKey,
        calculateEffort: (assetTypes) => {
          // Base effort + additional effort based on asset types
          const baseEffort = 40
          const numAssetTypes = typeof assetTypes === "string" ? assetTypes.split(",").length : 1
          const additionalEffort = numAssetTypes * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (assetTypes) => {
          // Base timeline + additional time based on asset types
          const baseTimeline = 2
          const numAssetTypes = typeof assetTypes === "string" ? assetTypes.split(",").length : 1
          const additionalTimeline = Math.ceil(numAssetTypes / 3)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (assetTypes) => {
          return "Included with Windows Server licensing"
        },
      },
      {
        id: "okta-access-management",
        tier: "premium",
        name: "Okta Access Management",
        shortDescription: "Cloud-based access control",
        description:
          "Okta Access Management provides cloud-based access control for applications, servers, and resources with single sign-on and multi-factor authentication.",
        pros: [
          "Cloud-based solution",
          "Platform-agnostic",
          "Extensive integration options",
          "Advanced security features",
        ],
        cons: [
          "Subscription cost scales with users",
          "Complex for advanced scenarios",
          "May require customization for specific needs",
        ],
        pricing: "Starting at ₹167 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.okta.com/products/access-management/",
        pricingPage: "https://www.okta.com/pricing/",
        setupTime: "1-2 weeks for configuration",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with identity management experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹2,00,400+/year for 100 users",
        icon: FileKey,
        calculateEffort: (assetTypes) => {
          // Base effort + additional effort based on asset types
          const baseEffort = 40
          const numAssetTypes = typeof assetTypes === "string" ? assetTypes.split(",").length : 1
          const additionalEffort = numAssetTypes * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (assetTypes) => {
          // Base timeline + additional time based on asset types
          const baseTimeline = 2
          const numAssetTypes = typeof assetTypes === "string" ? assetTypes.split(",").length : 1
          const additionalTimeline = Math.ceil(numAssetTypes / 3)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (assetTypes) => {
          // Assuming 100 users as a baseline
          const users = 100
          const monthlyCost = users * 167
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year for ${users} users`
        },
      },
    ],
  },
  {
    id: 16,
    category: "Development Security",
    text: "Is access to source code, development tools, and software libraries managed securely?",
    description:
      "Secure development practices help protect source code and prevent unauthorized access to development resources.",
    helpText:
      "This includes secure code repositories, access controls for development tools, and secure management of software libraries and dependencies.",
    icon: Code,
    subQuestion: {
      id: "dev-tools",
      text: "What tools or libraries are currently in use?",
      placeholder: "Enter development tools and libraries",
      unit: "",
      defaultValue: "GitHub, VS Code, npm",
      min: 0,
    },
    recommendations: [
      {
        id: "github-enterprise",
        tier: "standard",
        name: "GitHub Enterprise",
        shortDescription: "Secure code repository platform",
        description:
          "GitHub Enterprise provides secure source code management with access control features, code scanning, and secure development workflows.",
        pros: [
          "Comprehensive access controls",
          "Code scanning and security features",
          "Familiar developer experience",
          "Integration with CI/CD pipelines",
        ],
        cons: [
          "Subscription cost scales with users",
          "Requires proper configuration for security",
          "May require additional tools for complete security",
        ],
        pricing: "Starting at ₹1,754 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://github.com/enterprise",
        pricingPage: "https://github.com/pricing",
        setupTime: "1-2 weeks for configuration",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "DevOps engineer or IT administrator",
        organizationSize: "Small to large organizations (5+ developers)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹2,10,480+/year for 10 developers",
        icon: Code,
        calculateEffort: (tools) => {
          // Base effort + additional effort based on tools
          const baseEffort = 40
          const numTools = typeof tools === "string" ? tools.split(",").length : 1
          const additionalEffort = numTools * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (tools) => {
          // Base timeline + additional time based on tools
          const baseTimeline = 2
          const numTools = typeof tools === "string" ? tools.split(",").length : 1
          const additionalTimeline = Math.ceil(numTools / 5)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (tools) => {
          // Assuming 10 developers as a baseline
          const developers = 10
          const monthlyCost = developers * 1754
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year for ${developers} developers`
        },
      },
      {
        id: "snyk",
        tier: "premium",
        name: "Snyk for Advanced Dependency and Code Security",
        shortDescription: "Comprehensive code security platform",
        description:
          "Snyk provides advanced security for code, open source dependencies, containers, and infrastructure as code with continuous monitoring and remediation.",
        pros: [
          "Comprehensive security coverage",
          "Automated vulnerability detection",
          "Integration with development workflows",
          "Remediation advice",
        ],
        cons: ["Premium pricing", "Complex for advanced scenarios", "May require developer training"],
        pricing: "Starting at ₹4,092 per developer/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://snyk.io/",
        pricingPage: "https://snyk.io/plans/",
        setupTime: "3-4 weeks for implementation",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "DevOps engineer and security team",
        organizationSize: "Medium to large organizations (10+ developers)",
        effortHours: "120–160",
        priority: "High",
        estimatedCostRange: "₹4,91,040+/year for 10 developers",
        icon: Code,
        calculateEffort: (tools) => {
          // Base effort + additional effort based on tools
          const baseEffort = 120
          const numTools = typeof tools === "string" ? tools.split(",").length : 1
          const additionalEffort = numTools * 15
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (tools) => {
          // Base timeline + additional time based on tools
          const baseTimeline = 4
          const numTools = typeof tools === "string" ? tools.split(",").length : 1
          const additionalTimeline = Math.ceil(numTools / 3)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (tools) => {
          // Assuming 10 developers as a baseline
          const developers = 10
          const monthlyCost = developers * 4092
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year for ${developers} developers`
        },
      },
    ],
  },
  {
    id: 17,
    category: "Authentication",
    text: "Do you use secure authentication technologies, such as MFA?",
    description: "Multi-factor authentication adds an additional layer of security beyond passwords.",
    helpText:
      "This includes two-factor authentication (2FA), biometric authentication, and other methods to verify user identity.",
    icon: Key,
    subQuestion: {
      id: "mfa-users",
      text: "How many users need MFA solutions?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 50,
      min: 1,
    },
    recommendations: [
      {
        id: "google-microsoft-authenticator",
        tier: "standard",
        name: "Google Authenticator or Microsoft Authenticator",
        shortDescription: "Free MFA mobile apps",
        description:
          "Google Authenticator and Microsoft Authenticator are free mobile apps that provide time-based one-time passwords (TOTP) for multi-factor authentication.",
        pros: ["Free to use", "Easy to implement", "Widely supported", "User-friendly mobile apps"],
        cons: [
          "Limited enterprise management features",
          "No centralized reporting",
          "Limited support options",
          "Requires user device",
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.microsoft.com/en-us/security/mobile-authenticator-app",
        pricingPage: "https://www.microsoft.com/en-us/security/mobile-authenticator-app",
        setupTime: "1-2 weeks for implementation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator for configuration",
        organizationSize: "Small to medium organizations (5-100 employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹0",
        icon: Key,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 40
          const additionalEffort = Math.ceil(users / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(users / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          return "₹0"
        },
      },
      {
        id: "duo-security",
        tier: "premium",
        name: "Duo Security MFA",
        shortDescription: "Enterprise MFA solution",
        description:
          "Duo Security provides an enterprise-grade multi-factor authentication solution with advanced security features, user management, and reporting capabilities.",
        pros: [
          "Comprehensive MFA solution",
          "User-friendly interface",
          "Extensive integration options",
          "Advanced security features",
        ],
        cons: [
          "Subscription cost scales with users",
          "May require customization for specific needs",
          "Advanced features require higher tiers",
        ],
        pricing: "Starting at ₹251 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://duo.com/",
        pricingPage: "https://duo.com/pricing",
        setupTime: "1-2 weeks for implementation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with security experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹1,50,300+/year for 50 users",
        icon: Key,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 40
          const additionalEffort = Math.ceil(users / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(users / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Cost based on number of users
          const monthlyCost = users * 251
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year for ${users} users`
        },
      },
    ],
  },
  {
    id: 18,
    category: "Monitoring",
    text: "Do you have resource monitoring and malware protection in place?",
    description: "Resource monitoring and malware protection help detect and prevent security incidents.",
    helpText:
      "This includes system monitoring, network monitoring, malware detection, and other security monitoring capabilities.",
    icon: Activity,
    subQuestion: {
      id: "monitoring-resources",
      text: "Which resources or endpoints require monitoring?",
      placeholder: "Enter resource types",
      unit: "",
      defaultValue: "Servers, Workstations, Network",
      min: 0,
    },
    recommendations: [
      {
        id: "solarwinds-npm",
        tier: "standard",
        name: "SolarWinds Network Performance Monitor",
        shortDescription: "Network monitoring solution",
        description:
          "SolarWinds Network Performance Monitor provides comprehensive network monitoring capabilities with performance analysis, alerting, and reporting features.",
        pros: [
          "Comprehensive network monitoring",
          "User-friendly interface",
          "Detailed performance metrics",
          "Customizable alerts and reports",
        ],
        cons: [
          "Significant investment required",
          "Complex implementation",
          "Limited malware protection features",
          "Requires additional solutions for complete security",
        ],
        pricing: "Starting at ₹1,25,250 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.solarwinds.com/network-performance-monitor",
        pricingPage: "https://www.solarwinds.com/network-performance-monitor/pricing",
        setupTime: "1-2 weeks for implementation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with networking experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹1,25,250+/year",
        icon: Activity,
        calculateEffort: (resources) => {
          // Base effort + additional effort based on resource types
          const baseEffort = 40
          const numResources = typeof resources === "string" ? resources.split(",").length : 1
          const additionalEffort = numResources * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (resources) => {
          // Base timeline + additional time based on resource types
          const baseTimeline = 2
          const numResources = typeof resources === "string" ? resources.split(",").length : 1
          const additionalTimeline = Math.ceil(numResources / 3)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (resources) => {
          // Base cost + additional cost based on resource types
          const baseCost = 125250
          const numResources = typeof resources === "string" ? resources.split(",").length : 1
          const additionalCost = (numResources - 1) * 25000
          const totalCost = baseCost + Math.max(0, additionalCost)
          return `₹${totalCost.toLocaleString()}/year`
        },
      },
      {
        id: "crowdstrike-falcon-monitoring",
        tier: "premium",
        name: "CrowdStrike Falcon for Malware Protection",
        shortDescription: "Advanced endpoint protection and monitoring",
        description:
          "CrowdStrike Falcon provides advanced endpoint protection with real-time monitoring, threat detection, and response capabilities.",
        pros: [
          "Advanced threat detection",
          "Real-time monitoring",
          "Comprehensive protection",
          "Minimal performance impact",
        ],
        cons: ["Premium pricing", "Complex implementation", "Requires specialized expertise"],
        pricing: "Starting at ₹5,009 per device annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.crowdstrike.com/",
        pricingPage: "https://www.crowdstrike.com/products/endpoint-security/",
        setupTime: "3-4 weeks for implementation",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "Security team for deployment and management",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "120–160",
        priority: "High",
        estimatedCostRange: "₹2,50,450+/year for 50 devices",
        icon: Activity,
        calculateEffort: (resources) => {
          // Base effort + additional effort based on resource types
          const baseEffort = 120
          const numResources = typeof resources === "string" ? resources.split(",").length : 1
          const additionalEffort = numResources * 15
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (resources) => {
          // Base timeline + additional time based on resource types
          const baseTimeline = 4
          const numResources = typeof resources === "string" ? resources.split(",").length : 1
          const additionalTimeline = Math.ceil(numResources / 2)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (resources) => {
          // Assuming 50 devices as a baseline
          const devices = 50
          const annualCost = devices * 5009
          return `₹${annualCost.toLocaleString()}/year for ${devices} devices`
        },
      },
    ],
  },
  {
    id: 19,
    category: "Data Protection",
    text: "Is production data prevented from being used in non-production environments?",
    description:
      "Using production data in test or development environments can lead to data breaches and compliance issues.",
    helpText:
      "This includes data masking, synthetic data generation, and other techniques to protect sensitive production data.",
    icon: DatabaseIcon,
    subQuestion: {
      id: "data-protection-policies",
      text: "What policies or tools are currently in place to restrict production data usage?",
      placeholder: "Enter current policies or tools",
      unit: "",
      defaultValue: "None",
      min: 0,
    },
    recommendations: [
      {
        id: "faker-mockaroo",
        tier: "open-source",
        name: "Faker and Mockaroo",
        shortDescription: "Synthetic test data generation",
        description:
          "Faker and Mockaroo are open-source tools that generate realistic synthetic test data for development and testing environments, eliminating the need for production data.",
        pros: [
          "Free to use",
          "Easy to integrate with testing frameworks",
          "Customizable data generation",
          "No exposure of sensitive data",
        ],
        cons: [
          "Requires development effort to implement",
          "May not cover all complex data scenarios",
          "Limited enterprise support",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://fakerjs.dev/",
        pricingPage: "https://fakerjs.dev/",
        setupTime: "2-3 weeks for integration",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Developer for implementation",
        organizationSize: "Organizations of all sizes",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: DatabaseIcon,
        calculateEffort: (policies) => {
          // Base effort + additional effort based on complexity
          const baseEffort = 80
          const additionalEffort = typeof policies === "string" && policies.toLowerCase() !== "none" ? 20 : 40
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (policies) => {
          // Base timeline + additional time based on complexity
          const baseTimeline = 3
          const additionalTimeline = typeof policies === "string" && policies.toLowerCase() !== "none" ? 0 : 1
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (policies) => {
          return "₹0"
        },
      },
      {
        id: "ibm-infosphere-optim",
        tier: "standard",
        name: "IBM InfoSphere Optim",
        shortDescription: "Data masking solution",
        description:
          "IBM InfoSphere Optim provides comprehensive data masking capabilities to protect sensitive production data when used in non-production environments.",
        pros: [
          "Enterprise-grade data masking",
          "Preserves data relationships",
          "Supports multiple database platforms",
          "Automated masking processes",
        ],
        cons: ["Significant investment required", "Complex implementation", "Requires specialized expertise"],
        pricing: "Custom pricing",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.ibm.com/products/infosphere-optim",
        pricingPage: "https://www.ibm.com/products/infosphere-optim/pricing",
        setupTime: "4-6 weeks for deployment",
        recommendedTimeline: "Within 6 weeks",
        requiredResources: "Database administrator and security team",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "160–240",
        priority: "High",
        estimatedCostRange: "Custom pricing, typically ₹16,70,000+/year",
        icon: DatabaseIcon,
        calculateEffort: (policies) => {
          // Base effort + additional effort based on complexity
          const baseEffort = 160
          const additionalEffort = typeof policies === "string" && policies.toLowerCase() !== "none" ? 40 : 80
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (policies) => {
          // Base timeline + additional time based on complexity
          const baseTimeline = 6
          const additionalTimeline = typeof policies === "string" && policies.toLowerCase() !== "none" ? 0 : 2
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (policies) => {
          return "Custom pricing, typically ₹16,70,000+/year"
        },
      },
      {
        id: "delphix-data-masking",
        tier: "premium",
        name: "Delphix Data Masking",
        shortDescription: "Real-time data protection",
        description:
          "Delphix Data Masking provides real-time production data protection with advanced masking algorithms and automated compliance controls.",
        pros: [
          "Real-time data protection",
          "Advanced masking algorithms",
          "Comprehensive compliance controls",
          "Enterprise-grade support",
        ],
        cons: ["Premium pricing", "Complex implementation", "Requires dedicated resources"],
        pricing: "Starting at ₹41,75,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.delphix.com/platform/data-masking",
        pricingPage: "https://www.delphix.com/contact",
        setupTime: "6-8 weeks for implementation",
        recommendedTimeline: "Within 8 weeks",
        requiredResources: "Dedicated data security team",
        organizationSize: "Large organizations (100+ employees)",
        effortHours: "240–320",
        priority: "High",
        estimatedCostRange: "₹41,75,000+/year",
        icon: DatabaseIcon,
        calculateEffort: (policies) => {
          // Base effort + additional effort based on complexity
          const baseEffort = 240
          const additionalEffort = typeof policies === "string" && policies.toLowerCase() !== "none" ? 40 : 80
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (policies) => {
          // Base timeline + additional time based on complexity
          const baseTimeline = 8
          const additionalTimeline = typeof policies === "string" && policies.toLowerCase() !== "none" ? 0 : 2
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (policies) => {
          return "₹41,75,000+/year"
        },
      },
    ],
  },
  {
    id: 20,
    category: "Security Testing",
    text: "Are audit tests, penetration tests, and other security assessments planned, documented, and approved by management?",
    description:
      "Regular security assessments help identify vulnerabilities and ensure compliance with security standards.",
    helpText:
      "This includes vulnerability scanning, penetration testing, security audits, and other assessment activities.",
    icon: ClipboardCheck,
    subQuestion: {
      id: "assessment-frequency",
      text: "How frequently are security assessments performed?",
      placeholder: "Enter frequency (e.g., quarterly, annually)",
      unit: "",
      defaultValue: "Annually",
      min: 0,
    },
    recommendations: [
      {
        id: "osstmm",
        tier: "open-source",
        name: "OSSTMM (Open Source Security Testing Methodology Manual)",
        shortDescription: "Self-assessment methodology",
        description:
          "OSSTMM provides a comprehensive methodology for security testing and assessment that can be implemented internally without specialized tools.",
        pros: [
          "Free to use",
          "Comprehensive methodology",
          "Industry-recognized standard",
          "Customizable to organizational needs",
        ],
        cons: [
          "Requires internal expertise",
          "Time-intensive implementation",
          "Limited automation capabilities",
          "No external validation",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://www.isecom.org/OSSTMM.3.pdf",
        pricingPage: "https://www.isecom.org/OSSTMM.3.pdf",
        setupTime: "3-4 weeks for documentation and implementation",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "Security analyst with assessment experience",
        organizationSize: "Small to medium organizations (10-100 employees)",
        effortHours: "120–160",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: ClipboardCheck,
        calculateEffort: (frequency) => {
          // Base effort + additional effort based on frequency
          const baseEffort = 120
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 1.5 : 1
          const totalEffort = Math.round(baseEffort * frequencyFactor)
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (frequency) => {
          // Base timeline + additional time based on frequency
          const baseTimeline = 4
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 1.5 : 1
          const totalTimeline = Math.round(baseTimeline * frequencyFactor)
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (frequency) => {
          return "₹0"
        },
      },
      {
        id: "qualys-was",
        tier: "standard",
        name: "Qualys Web Application Scanning",
        shortDescription: "Automated vulnerability scanning",
        description:
          "Qualys Web Application Scanning provides automated vulnerability scanning for web applications with detailed reporting and remediation guidance.",
        pros: [
          "Automated scanning",
          "Detailed vulnerability reports",
          "Regular updates to vulnerability database",
          "Compliance reporting",
        ],
        cons: [
          "Limited to web applications",
          "May produce false positives",
          "Requires configuration for accurate results",
        ],
        pricing: "Starting at ₹2,50,500 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.qualys.com/apps/web-app-scanning/",
        pricingPage: "https://www.qualys.com/forms/web-app-scanning/",
        setupTime: "4-6 weeks for implementation",
        recommendedTimeline: "Within 6 weeks",
        requiredResources: "Security analyst for configuration and analysis",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "160–240",
        priority: "High",
        estimatedCostRange: "₹2,50,500+/year",
        icon: ClipboardCheck,
        calculateEffort: (frequency) => {
          // Base effort + additional effort based on frequency
          const baseEffort = 160
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 1.5 : 1
          const totalEffort = Math.round(baseEffort * frequencyFactor)
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (frequency) => {
          // Base timeline + additional time based on frequency
          const baseTimeline = 6
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 1.5 : 1
          const totalTimeline = Math.round(baseTimeline * frequencyFactor)
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (frequency) => {
          // Base cost + additional cost based on frequency
          const baseCost = 250500
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 2 : 1
          const totalCost = baseCost * frequencyFactor
          return `₹${totalCost.toLocaleString()}+/year`
        },
      },
      {
        id: "third-party-audit",
        tier: "premium",
        name: "Third-Party Security Auditing Firm",
        shortDescription: "Comprehensive security assessment",
        description:
          "Engaging a professional third-party security auditing firm provides comprehensive security assessments with expert analysis and recommendations.",
        pros: [
          "Independent expert assessment",
          "Comprehensive coverage",
          "Detailed recommendations",
          "Compliance certification",
        ],
        cons: ["Premium pricing", "Scheduling constraints", "May disrupt normal operations"],
        pricing: "Custom pricing, starting at ₹8,35,000 per audit",
        pricingModel: "Per audit",
        officialWebsite: "https://www.kpmg.com/cybersecurity",
        pricingPage: "https://www.kpmg.com/cybersecurity/contact",
        setupTime: "6-8 weeks for planning and execution",
        recommendedTimeline: "Within 8 weeks",
        requiredResources: "Management team and security coordinator",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "240–320",
        priority: "High",
        estimatedCostRange: "₹8,35,000+/audit",
        icon: ClipboardCheck,
        calculateEffort: (frequency) => {
          // Base effort + additional effort based on frequency
          const baseEffort = 240
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 1.5 : 1
          const totalEffort = Math.round(baseEffort * frequencyFactor)
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (frequency) => {
          // Base timeline + additional time based on frequency
          const baseTimeline = 8
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 1.5 : 1
          const totalTimeline = Math.round(baseTimeline * frequencyFactor)
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (frequency) => {
          // Base cost + additional cost based on frequency
          const baseCost = 835000
          const frequencyMultiplier =
            typeof frequency === "string"
              ? frequency.toLowerCase().includes("quart")
                ? 4
                : frequency.toLowerCase().includes("semi")
                  ? 2
                  : 1
              : 1
          return `₹${baseCost.toLocaleString()}+/audit (${frequencyMultiplier}x per year)`
        },
      },
    ],
  },
  {
    id: 21,
    category: "Endpoint Security",
    text: "Are anti-malware solutions installed, regularly updated, and capable of detecting and responding to threats?",
    description: "Anti-malware solutions are essential for protecting endpoints from malicious software and cyber threats.",
    helpText: "This includes solutions that provide real-time protection, regular updates, and automated response capabilities.",
    icon: Shield,
    subQuestion: {
      id: "endpoint-count",
      text: "How many endpoints require anti-malware protection?",
      placeholder: "Enter number of endpoints",
      unit: "endpoints",
      defaultValue: 10,
      min: 1,
      max: 1000,
    },
    recommendations: [
      {
        id: "clamav",
        tier: "open-source",
        name: "ClamAV",
        shortDescription: "Open-source antivirus engine",
        description: "ClamAV is a free and open-source antivirus engine for detecting trojans, viruses, malware, and other malicious threats.",
        pros: [
          "Free and open-source",
          "Cross-platform support",
          "Regular updates",
          "Command-line interface"
        ],
        cons: [
          "Basic protection features",
          "Limited management interface",
          "Manual configuration required",
          "No centralized management"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.clamav.net",
        pricingPage: "https://www.clamav.net/downloads",
        setupTime: "2-3 days",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "1-2 servers for management",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹0 (self-hosted)",
        icon: Shield
      },
      {
        id: "malwarebytes-business",
        tier: "standard",
        name: "Malwarebytes for Business",
        shortDescription: "Business-grade endpoint protection",
        description: "Malwarebytes for Business provides comprehensive endpoint protection with advanced threat detection and response capabilities.",
        pros: [
          "User-friendly interface",
          "Real-time protection",
          "Centralized management",
          "Regular updates"
        ],
        cons: [
          "Per-endpoint licensing",
          "Limited advanced features",
          "Basic reporting",
          "No EDR capabilities"
        ],
        pricing: "Starting at $69.99 per endpoint/year",
        pricingModel: "Per Endpoint",
        officialWebsite: "https://www.malwarebytes.com/business",
        pricingPage: "https://www.malwarebytes.com/business/pricing",
        setupTime: "1-2 days",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Cloud-based management",
        organizationSize: "Medium",
        effortHours: "20-40",
        priority: "High",
        estimatedCostRange: "₹5,000-10,000/endpoint/year",
        icon: Shield
      },
      {
        id: "crowdstrike-falcon",
        tier: "premium",
        name: "CrowdStrike Falcon Prevent",
        shortDescription: "Enterprise-grade endpoint protection with EDR",
        description: "CrowdStrike Falcon Prevent provides advanced endpoint protection with EDR capabilities, threat intelligence, and automated response.",
        pros: [
          "Advanced threat detection",
          "EDR capabilities",
          "Cloud-native architecture",
          "AI-powered protection"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Requires dedicated team",
          "Steep learning curve"
        ],
        pricing: "Starting at $59.99 per device/year",
        pricingModel: "Per Device",
        officialWebsite: "https://www.crowdstrike.com/endpoint-security-products/falcon-prevent/",
        pricingPage: "https://www.crowdstrike.com/pricing/",
        setupTime: "3-5 days",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Dedicated security team",
        organizationSize: "Large Enterprise",
        effortHours: "60-100",
        priority: "High",
        estimatedCostRange: "₹4,500-8,000/device/year",
        icon: Shield
      }
    ]
  },
  {
    id: 22,
    category: "System Configuration",
    text: "Are all system clocks synchronized with an approved time source and monitored for accuracy?",
    description: "Accurate system time synchronization is crucial for security logging, authentication, and audit trails.",
    helpText: "This includes having a reliable time source and monitoring system to ensure all systems maintain accurate time.",
    icon: Clock,
    subQuestion: {
      id: "system-types",
      text: "Which systems require time synchronization?",
      placeholder: "Enter system types (e.g., servers, workstations, network devices)",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 100,
    },
    recommendations: [
      {
        id: "ntp",
        tier: "open-source",
        name: "NTP (Network Time Protocol)",
        shortDescription: "Free time synchronization solution",
        description: "NTP is a free and open-source protocol for synchronizing computer clocks over a network.",
        pros: [
          "Free and open-source",
          "Widely supported",
          "Highly accurate",
          "Low resource usage"
        ],
        cons: [
          "Manual configuration",
          "Basic monitoring",
          "No centralized management",
          "Requires technical expertise"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.ntp.org",
        pricingPage: "https://www.ntp.org/download.html",
        setupTime: "2-3 days",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "1-2 NTP servers",
        organizationSize: "Small to Medium",
        effortHours: "20-40",
        priority: "Medium",
        estimatedCostRange: "₹0 (self-hosted)",
        icon: Clock
      },
      {
        id: "w32time",
        tier: "standard",
        name: "Microsoft Windows Time Service (W32Time)",
        shortDescription: "Windows-based time synchronization",
        description: "W32Time is Microsoft's implementation of time synchronization for Windows environments.",
        pros: [
          "Native Windows support",
          "Easy configuration",
          "Active Directory integration",
          "Built-in monitoring"
        ],
        cons: [
          "Windows-only",
          "Limited advanced features",
          "Basic accuracy",
          "No cross-platform support"
        ],
        pricing: "Included with Windows Server licensing",
        pricingModel: "Included",
        officialWebsite: "https://docs.microsoft.com/en-us/windows-server/networking/windows-time-service/windows-time-service-top",
        pricingPage: "N/A",
        setupTime: "1-2 days",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Windows Server infrastructure",
        organizationSize: "Medium",
        effortHours: "20-40",
        priority: "Medium",
        estimatedCostRange: "₹0 (with existing Windows licensing)",
        icon: Clock
      },
      {
        id: "gps-time-sync",
        tier: "premium",
        name: "GPS-based Time Synchronization Appliance",
        shortDescription: "Enterprise-grade time synchronization",
        description: "GPS-based time synchronization appliances provide highly accurate time synchronization for critical infrastructure.",
        pros: [
          "High accuracy",
          "Independent of network",
          "Enterprise-grade reliability",
          "Comprehensive monitoring"
        ],
        cons: [
          "High cost",
          "Hardware installation required",
          "Complex setup",
          "Requires physical access"
        ],
        pricing: "Starting at $5,000",
        pricingModel: "One-time purchase",
        officialWebsite: "https://www.meinbergglobal.com/english/products/",
        pricingPage: "Contact vendor",
        setupTime: "1-2 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Dedicated infrastructure",
        organizationSize: "Large Enterprise",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹375,000+",
        icon: Clock
      }
    ]
  },
  {
    id: 23,
    category: "Logging and Monitoring",
    text: "Are timestamps used in security logs consistent and reliable for forensic investigations?",
    description: "Accurate and consistent timestamps in security logs are essential for forensic investigations and compliance.",
    helpText: "This includes ensuring all security logs have accurate timestamps and are properly synchronized.",
    icon: FileText,
    subQuestion: {
      id: "log-types",
      text: "Which security logs require timestamp verification?",
      placeholder: "Enter log types (e.g., authentication, system, application)",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "chronicle-logging",
        tier: "open-source",
        name: "Chronicle Logging with NTP",
        shortDescription: "Open-source log management with time sync",
        description: "Chronicle Logging provides a free solution for centralized log management with NTP-based timestamp verification.",
        pros: [
          "Free and open-source",
          "NTP integration",
          "Basic log management",
          "Timestamp verification"
        ],
        cons: [
          "Limited features",
          "Basic search capabilities",
          "Manual configuration",
          "No advanced analytics"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://github.com/chronicle/chronicle-logging",
        pricingPage: "N/A",
        setupTime: "2-3 days",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "1-2 servers",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "Medium",
        estimatedCostRange: "₹0 (self-hosted)",
        icon: FileText
      },
      {
        id: "splunk",
        tier: "standard",
        name: "Splunk",
        shortDescription: "Enterprise log management platform",
        description: "Splunk provides comprehensive log management with advanced search, analysis, and visualization capabilities.",
        pros: [
          "Powerful search",
          "Rich visualization",
          "Extensive integrations",
          "Good documentation"
        ],
        cons: [
          "Per GB pricing",
          "Complex setup",
          "Resource intensive",
          "Learning curve"
        ],
        pricing: "Starting at $2,000 annually",
        pricingModel: "Per GB/day",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "https://www.splunk.com/en_us/pricing.html",
        setupTime: "1-2 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Dedicated infrastructure",
        organizationSize: "Medium to Large",
        effortHours: "60-100",
        priority: "High",
        estimatedCostRange: "₹150,000+/year",
        icon: FileText
      },
      {
        id: "qradar",
        tier: "premium",
        name: "IBM QRadar SIEM",
        shortDescription: "Enterprise-grade SIEM solution",
        description: "IBM QRadar SIEM provides advanced security information and event management with comprehensive log analysis and correlation.",
        pros: [
          "Advanced correlation",
          "Threat intelligence",
          "Compliance reporting",
          "Enterprise features"
        ],
        cons: [
          "High cost",
          "Complex deployment",
          "Resource intensive",
          "Requires dedicated team"
        ],
        pricing: "Starting at $10,000 annually",
        pricingModel: "Custom pricing",
        officialWebsite: "https://www.ibm.com/security/security-intelligence/qradar",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated team and infrastructure",
        organizationSize: "Large Enterprise",
        effortHours: "120-200",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: FileText
      }
    ]
  },
  {
    id: 24,
    category: "Third-Party Security",
    text: "Are third-party network services assessed for compliance with security policies?",
    description: "Regular assessment of third-party services is crucial for maintaining security and compliance.",
    helpText: "This includes evaluating third-party services against security policies and compliance requirements.",
    icon: Network,
    subQuestion: {
      id: "service-types",
      text: "Which third-party services are currently used, and what compliance requirements apply?",
      placeholder: "Enter service types and compliance requirements",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 20,
    },
    recommendations: [
      {
        id: "cis-benchmarks",
        tier: "open-source",
        name: "CIS Benchmarks and OpenSCAP",
        shortDescription: "Free compliance assessment tools",
        description: "Use CIS Benchmarks and OpenSCAP for manual compliance assessment of third-party services.",
        pros: [
          "Free and open-source",
          "Industry standards",
          "Comprehensive checks",
          "Regular updates"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited automation",
          "Requires expertise"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.cisecurity.org/benchmarks/",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Network
      },
      {
        id: "nessus",
        tier: "standard",
        name: "Nessus Professional",
        shortDescription: "Vulnerability and compliance scanner",
        description: "Nessus Professional provides automated vulnerability and compliance scanning for third-party services.",
        pros: [
          "Automated scanning",
          "Compliance reporting",
          "Regular updates",
          "Good documentation"
        ],
        cons: [
          "Annual licensing",
          "Limited features",
          "Basic reporting",
          "No continuous monitoring"
        ],
        pricing: "Starting at $2,990 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.tenable.com/products/nessus",
        pricingPage: "https://www.tenable.com/products/nessus/nessus-professional",
        setupTime: "2-3 days",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Dedicated scanner",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹225,000+/year",
        icon: Network
      },
      {
        id: "cortex-xpanse",
        tier: "premium",
        name: "Palo Alto Cortex Xpanse",
        shortDescription: "Automated risk assessment platform",
        description: "Cortex Xpanse provides continuous monitoring and risk assessment of third-party services.",
        pros: [
          "Continuous monitoring",
          "Advanced analytics",
          "Automated assessment",
          "Real-time alerts"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires dedicated team",
          "Custom pricing"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.paloaltonetworks.com/cortex/xpanse",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Large Enterprise",
        effortHours: "120-200",
        priority: "High",
        estimatedCostRange: "₹1,000,000+/year",
        icon: Network
      }
    ]
  },
  {
    id: 25,
    category: "Security Architecture",
    text: "Are secure system architecture and engineering principles applied and reviewed periodically?",
    description: "Regular review of system architecture ensures security controls remain effective and aligned with best practices.",
    helpText: "This includes periodic assessment of security architecture against industry standards and best practices.",
    icon: Building,
    subQuestion: {
      id: "last-review",
      text: "When was the last security architecture review conducted?",
      placeholder: "Enter months since last review",
      unit: "months",
      defaultValue: 12,
      min: 1,
      max: 36,
    },
    recommendations: [
      {
        id: "owasp-asvs",
        tier: "open-source",
        name: "OWASP ASVS and CIS Controls",
        shortDescription: "Free security architecture review framework",
        description: "Use OWASP ASVS and CIS Controls for manual security architecture review and assessment.",
        pros: [
          "Free and open-source",
          "Industry standards",
          "Comprehensive checklist",
          "Regular updates"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Requires expertise",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://owasp.org/www-project-application-security-verification-standard/",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Building
      },
      {
        id: "threatmodeler",
        tier: "standard",
        name: "ThreatModeler",
        shortDescription: "Automated security architecture review",
        description: "ThreatModeler provides automated security architecture review and threat modeling capabilities.",
        pros: [
          "Automated analysis",
          "Visual modeling",
          "Compliance reporting",
          "Regular updates"
        ],
        cons: [
          "Annual licensing",
          "Learning curve",
          "Limited customization",
          "Basic reporting"
        ],
        pricing: "Starting at $5,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://threatmodeler.com",
        pricingPage: "https://threatmodeler.com/pricing/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹375,000+/year",
        icon: Building
      },
      {
        id: "mandiant",
        tier: "premium",
        name: "Mandiant Security Architecture Assessment",
        shortDescription: "Enterprise security architecture review",
        description: "Engage Mandiant for comprehensive security architecture assessment and recommendations.",
        pros: [
          "Expert assessment",
          "Comprehensive review",
          "Detailed reporting",
          "Industry expertise"
        ],
        cons: [
          "High cost",
          "Time-consuming",
          "Limited frequency",
          "Custom pricing"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.mandiant.com/services/security-architecture",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Executive sponsorship",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹2,000,000+/assessment",
        icon: Building
      }
    ]
  },
  {
    id: 26,
    category: "Development Security",
    text: "Are outsourced development activities monitored, with security requirements included in contracts?",
    description: "Monitoring outsourced development activities and including security requirements in contracts is crucial for maintaining security standards.",
    helpText: "This includes having clear security requirements in contracts and monitoring mechanisms for outsourced development work.",
    icon: Code,
    subQuestion: {
      id: "security-requirements",
      text: "Which security requirements are currently enforced in contracts?",
      placeholder: "Enter security requirements",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "owasp-samm",
        tier: "open-source",
        name: "OWASP SAMM",
        shortDescription: "Free software assurance maturity model",
        description: "OWASP SAMM provides a framework for assessing and improving software security practices in outsourced development.",
        pros: [
          "Free and open-source",
          "Comprehensive framework",
          "Regular updates",
          "Community support"
        ],
        cons: [
          "Manual assessment",
          "Time-consuming",
          "Requires expertise",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://owaspsamm.org",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Code
      },
      {
        id: "black-duck",
        tier: "standard",
        name: "Synopsys Black Duck",
        shortDescription: "Open-source security monitoring",
        description: "Black Duck provides automated security monitoring for outsourced development activities.",
        pros: [
          "Automated scanning",
          "Compliance reporting",
          "Integration capabilities",
          "Regular updates"
        ],
        cons: [
          "Annual licensing",
          "Complex setup",
          "Resource intensive",
          "Learning curve"
        ],
        pricing: "Starting at $25,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.synopsys.com/software-integrity/security-testing/software-composition-analysis/black-duck.html",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Medium to Large",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹1,875,000+/year",
        icon: Code
      },
      {
        id: "veracode",
        tier: "premium",
        name: "Veracode",
        shortDescription: "Automated secure development monitoring",
        description: "Veracode provides comprehensive security monitoring and testing for outsourced development activities.",
        pros: [
          "Automated testing",
          "Compliance validation",
          "Policy enforcement",
          "Detailed reporting"
        ],
        cons: [
          "High cost",
          "Complex implementation",
          "Requires dedicated team",
          "Steep learning curve"
        ],
        pricing: "Starting at $50,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.veracode.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹3,750,000+/year",
        icon: Code
      }
    ]
  },
  {
    id: 27,
    category: "Security Testing",
    text: "Are security assessments and testing conducted on externally developed software?",
    description: "Regular security testing of externally developed software is essential for maintaining security standards.",
    helpText: "This includes conducting security assessments and testing on software developed by external parties.",
    icon: Shield,
    subQuestion: {
      id: "testing-frequency",
      text: "How frequently is externally developed software tested?",
      placeholder: "Enter testing frequency (e.g., monthly, quarterly)",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 12,
    },
    recommendations: [
      {
        id: "owasp-zap",
        tier: "open-source",
        name: "OWASP ZAP",
        shortDescription: "Free security testing tool",
        description: "OWASP ZAP is a free and open-source web application security testing tool.",
        pros: [
          "Free and open-source",
          "Regular updates",
          "Community support",
          "Basic automation"
        ],
        cons: [
          "Manual configuration",
          "Basic features",
          "Limited reporting",
          "Requires expertise"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.zaproxy.org",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Shield
      },
      {
        id: "burp-suite",
        tier: "standard",
        name: "Burp Suite Professional",
        shortDescription: "Professional web security testing",
        description: "Burp Suite Professional provides comprehensive web application security testing capabilities.",
        pros: [
          "Advanced features",
          "Good documentation",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Annual licensing",
          "Learning curve",
          "Resource intensive",
          "Limited automation"
        ],
        pricing: "Starting at $399 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://portswigger.net/burp/pro",
        pricingPage: "https://portswigger.net/burp/pro/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹30,000+/year",
        icon: Shield
      },
      {
        id: "pen-testing",
        tier: "premium",
        name: "Third-party Penetration Testing",
        shortDescription: "Comprehensive security testing",
        description: "Engage a third-party firm for comprehensive penetration testing of externally developed software.",
        pros: [
          "Expert assessment",
          "Comprehensive testing",
          "Detailed reporting",
          "Independent review"
        ],
        cons: [
          "High cost",
          "Time-consuming",
          "Limited frequency",
          "Custom pricing"
        ],
        pricing: "Starting at $10,000 per test",
        pricingModel: "Per test",
        officialWebsite: "Contact security firms",
        pricingPage: "Custom pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Executive sponsorship",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/test",
        icon: Shield
      }
    ]
  },
  {
    id: 28,
    category: "Environment Security",
    text: "Are development, testing, and production environments properly segregated and access-controlled?",
    description: "Proper environment segregation and access control are essential for maintaining security.",
    helpText: "This includes having clear separation between environments and proper access controls in place.",
    icon: Database,
    subQuestion: {
      id: "environment-management",
      text: "How are environments currently managed and segregated?",
      placeholder: "Enter current environment management approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "docker-k8s",
        tier: "open-source",
        name: "Docker and Kubernetes",
        shortDescription: "Free container orchestration",
        description: "Use Docker and Kubernetes for environment segregation and management.",
        pros: [
          "Free and open-source",
          "Industry standard",
          "Good documentation",
          "Community support"
        ],
        cons: [
          "Complex setup",
          "Requires expertise",
          "Manual configuration",
          "Resource intensive"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://kubernetes.io",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "DevOps team",
        organizationSize: "Small to Medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹0 (self-hosted)",
        icon: Database
      },
      {
        id: "hashi-vault",
        tier: "standard",
        name: "HashiCorp Vault",
        shortDescription: "Access control management",
        description: "HashiCorp Vault provides secure access control for multi-environment setups.",
        pros: [
          "Comprehensive access control",
          "Good documentation",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Annual licensing",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "Starting at $5,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.hashicorp.com/products/vault",
        pricingPage: "https://www.hashicorp.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "DevOps team",
        organizationSize: "Medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹375,000+/year",
        icon: Database
      },
      {
        id: "cyberark",
        tier: "premium",
        name: "CyberArk",
        shortDescription: "Privileged access management",
        description: "CyberArk provides comprehensive privileged access management across environments.",
        pros: [
          "Advanced security",
          "Comprehensive features",
          "Enterprise support",
          "Detailed reporting"
        ],
        cons: [
          "High cost",
          "Complex implementation",
          "Requires dedicated team",
          "Steep learning curve"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.cyberark.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹3,750,000+/year",
        icon: Database
      }
    ]
  },
  {
    id: 29,
    category: "Change Management",
    text: "Are changes to information systems subject to formal approval, risk evaluation, and rollback procedures?",
    description: "Proper change management procedures are essential for maintaining system stability and security.",
    helpText: "This includes having formal processes for approving, evaluating, and rolling back system changes.",
    icon: FileText,
    subQuestion: {
      id: "change-process",
      text: "Is there a documented change management process in place?",
      placeholder: "Enter current change management approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "git",
        tier: "open-source",
        name: "Git",
        shortDescription: "Free version control",
        description: "Use Git for version control and maintain a structured change log.",
        pros: [
          "Free and open-source",
          "Industry standard",
          "Good documentation",
          "Community support"
        ],
        cons: [
          "Manual process",
          "Basic features",
          "Limited automation",
          "Requires expertise"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://git-scm.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Development team",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "Medium",
        estimatedCostRange: "₹0 (self-managed)",
        icon: FileText
      },
      {
        id: "servicenow",
        tier: "standard",
        name: "ServiceNow",
        shortDescription: "ITIL-based change management",
        description: "ServiceNow provides ITIL-based change management capabilities.",
        pros: [
          "Comprehensive features",
          "Good documentation",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Annual licensing",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "Starting at $10,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: FileText
      },
      {
        id: "jira",
        tier: "premium",
        name: "Jira Service Management",
        shortDescription: "Automated workflow management",
        description: "Jira Service Management provides automated workflows for change management.",
        pros: [
          "Advanced automation",
          "Good integration",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-user pricing",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "Starting at $20 per user per month",
        pricingModel: "Per user",
        officialWebsite: "https://www.atlassian.com/software/jira/service-management",
        pricingPage: "https://www.atlassian.com/software/jira/service-management/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,500+/user/month",
        icon: FileText
      }
    ]
  },
  {
    id: 30,
    category: "Test Data Security",
    text: "Is test information anonymized, protected, and securely disposed of after testing?",
    description: "Proper handling of test data is crucial for maintaining data security and privacy.",
    helpText: "This includes having processes for data masking, protection, and secure disposal of test data.",
    icon: Database,
    subQuestion: {
      id: "data-processes",
      text: "What processes are in place for data masking and disposal after testing?",
      placeholder: "Enter current data handling processes",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "faker",
        tier: "open-source",
        name: "Faker and dbForge",
        shortDescription: "Free test data generation",
        description: "Use Faker and dbForge for generating and managing test data.",
        pros: [
          "Free and open-source",
          "Good documentation",
          "Community support",
          "Basic features"
        ],
        cons: [
          "Manual process",
          "Basic features",
          "Limited automation",
          "Requires expertise"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://fakerjs.dev",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Development team",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "Medium",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Database
      },
      {
        id: "informatica",
        tier: "standard",
        name: "Informatica Data Masking",
        shortDescription: "Data masking solution",
        description: "Informatica provides data masking capabilities for test environments.",
        pros: [
          "Comprehensive features",
          "Good documentation",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Custom pricing",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.informatica.com/products/data-masking.html",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: Database
      },
      {
        id: "delphix",
        tier: "premium",
        name: "Delphix Dynamic Data Platform",
        shortDescription: "Automated test data management",
        description: "Delphix provides comprehensive test data management capabilities.",
        pros: [
          "Advanced automation",
          "Comprehensive features",
          "Enterprise support",
          "Detailed reporting"
        ],
        cons: [
          "High cost",
          "Complex implementation",
          "Requires dedicated team",
          "Steep learning curve"
        ],
        pricing: "Starting at $50,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.delphix.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹3,750,000+/year",
        icon: Database
      }
    ]
  },
  {
    id: 31,
    category: "Security Audit",
    text: "Are security audit findings tracked and remediated to improve information security?",
    description: "Proper tracking and remediation of security audit findings is essential for maintaining security standards.",
    helpText: "This includes having processes for tracking, managing, and resolving security audit findings.",
    icon: ClipboardCheck,
    subQuestion: {
      id: "audit-management",
      text: "How are security audit findings currently managed and addressed?",
      placeholder: "Enter current management approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "ossec",
        tier: "open-source",
        name: "OSSEC",
        shortDescription: "Free security event monitoring",
        description: "OSSEC provides free security event monitoring and tracking capabilities.",
        pros: [
          "Free and open-source",
          "Real-time monitoring",
          "Good documentation",
          "Community support"
        ],
        cons: [
          "Manual configuration",
          "Basic features",
          "Limited reporting",
          "Requires expertise"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.ossec.net",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: ClipboardCheck
      },
      {
        id: "jira-security",
        tier: "standard",
        name: "Jira Service Management",
        shortDescription: "Security tracking and remediation",
        description: "Jira Service Management provides workflow capabilities for tracking and remediating security findings.",
        pros: [
          "Good workflow",
          "Integration options",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-user pricing",
          "Learning curve",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Starting at $20 per user per month",
        pricingModel: "Per user",
        officialWebsite: "https://www.atlassian.com/software/jira/service-management",
        pricingPage: "https://www.atlassian.com/software/jira/service-management/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,500+/user/month",
        icon: ClipboardCheck
      },
      {
        id: "servicenow-security",
        tier: "premium",
        name: "ServiceNow Security Operations",
        shortDescription: "Automated security tracking",
        description: "ServiceNow Security Operations provides automated tracking and remediation of security findings.",
        pros: [
          "Advanced automation",
          "Comprehensive features",
          "Enterprise support",
          "Detailed reporting"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires dedicated team",
          "Steep learning curve"
        ],
        pricing: "Starting at $10,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.servicenow.com/products/security-operations.html",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: ClipboardCheck
      }
    ]
  },
  {
    id: 32,
    category: "Physical Security",
    text: "Are security measures in place for working in secure areas, including access restrictions and monitoring?",
    description: "Physical security measures are crucial for protecting sensitive areas and information.",
    helpText: "This includes having proper access controls and monitoring for secure areas.",
    icon: Lock,
    subQuestion: {
      id: "secure-areas",
      text: "How many secure areas need physical access control measures?",
      placeholder: "Enter number of secure areas",
      unit: "areas",
      defaultValue: 1,
      min: 1,
      max: 50,
    },
    recommendations: [
      {
        id: "hid-global",
        tier: "standard",
        name: "HID Global RFID Access Control",
        shortDescription: "RFID-based access control",
        description: "HID Global provides RFID-based access control systems for secure areas.",
        pros: [
          "Reliable technology",
          "Easy to use",
          "Good documentation",
          "Professional support"
        ],
        cons: [
          "Per-door cost",
          "Installation required",
          "Limited features",
          "Basic monitoring"
        ],
        pricing: "Starting at $500 per door",
        pricingModel: "Per door",
        officialWebsite: "https://www.hidglobal.com/products/access-control",
        pricingPage: "Contact sales",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹37,500+/door",
        icon: Lock
      },
      {
        id: "zkteco",
        tier: "premium",
        name: "ZKTeco Biometric Access Control",
        shortDescription: "Biometric access control",
        description: "ZKTeco provides biometric access control solutions for secure areas.",
        pros: [
          "High security",
          "Advanced features",
          "Good documentation",
          "Professional support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Maintenance needed"
        ],
        pricing: "$1,000+ per entry point",
        pricingModel: "Per entry point",
        officialWebsite: "https://www.zkteco.com",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹75,000+/entry point",
        icon: Lock
      }
    ]
  },
  {
    id: 33,
    category: "Visitor Management",
    text: "Are employees and visitors required to follow specific security procedures when entering secure areas?",
    description: "Proper visitor management is essential for maintaining security in secure areas.",
    helpText: "This includes having clear procedures and systems for managing visitors.",
    icon: Users,
    subQuestion: {
      id: "visitor-system",
      text: "Is there a visitor management system or security policy in place?",
      placeholder: "Enter current visitor management approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "envoy",
        tier: "standard",
        name: "Envoy",
        shortDescription: "Visitor management system",
        description: "Envoy provides a comprehensive visitor management system.",
        pros: [
          "Easy to use",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Monthly subscription",
          "Limited customization",
          "Basic reporting",
          "Internet dependent"
        ],
        pricing: "Starting at $99 per month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://envoy.com",
        pricingPage: "https://envoy.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Reception team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "Medium",
        estimatedCostRange: "₹7,500+/month",
        icon: Users
      },
      {
        id: "verkada",
        tier: "premium",
        name: "Verkada",
        shortDescription: "CCTV-based visitor management",
        description: "Verkada provides CCTV-based facial recognition visitor management.",
        pros: [
          "Advanced security",
          "Facial recognition",
          "Cloud-based",
          "Professional support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Privacy concerns"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.verkada.com",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: Users
      }
    ]
  },
  {
    id: 34,
    category: "Clear Desk Policy",
    text: "Are clear desk and clear screen policies defined and enforced to prevent unauthorized access to information?",
    description: "Clear desk and clear screen policies are essential for preventing unauthorized access to information.",
    helpText: "This includes having and enforcing policies for keeping desks and screens clear of sensitive information.",
    icon: FileText,
    subQuestion: {
      id: "policy-awareness",
      text: "Are employees aware of the importance of clear desk and screen policies?",
      placeholder: "Enter current awareness level",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "knowbe4",
        tier: "standard",
        name: "KnowBe4",
        shortDescription: "Security awareness training",
        description: "KnowBe4 provides security awareness training for employees.",
        pros: [
          "Comprehensive training",
          "Regular updates",
          "Good content",
          "Professional support"
        ],
        cons: [
          "Annual licensing",
          "Limited customization",
          "Basic reporting",
          "Time commitment"
        ],
        pricing: "Starting at $10 per user annually",
        pricingModel: "Per user",
        officialWebsite: "https://www.knowbe4.com",
        pricingPage: "https://www.knowbe4.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹750+/user/year",
        icon: FileText
      },
      {
        id: "microsoft-intune",
        tier: "premium",
        name: "Microsoft Intune",
        shortDescription: "Policy enforcement",
        description: "Microsoft Intune provides automated policy enforcement for clear desk and screen policies.",
        pros: [
          "Automated enforcement",
          "Comprehensive features",
          "Good integration",
          "Professional support"
        ],
        cons: [
          "Per-user pricing",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "$8 per user/month",
        pricingModel: "Per user",
        officialWebsite: "https://www.microsoft.com/en-us/microsoft-365/intune",
        pricingPage: "https://www.microsoft.com/en-us/microsoft-365/intune/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹600+/user/month",
        icon: FileText
      }
    ]
  },
  {
    id: 35,
    category: "Employee Training",
    text: "Are employees trained and required to lock screens and store sensitive materials securely when unattended?",
    description: "Employee training on security practices is crucial for maintaining security standards.",
    helpText: "This includes training employees on proper screen locking and secure storage of sensitive materials.",
    icon: UserCheck,
    subQuestion: {
      id: "training-program",
      text: "Is there a security awareness training program in place?",
      placeholder: "Enter current training approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "staysafeonline",
        tier: "standard",
        name: "StaySafeOnline",
        shortDescription: "Free security training",
        description: "StaySafeOnline provides free security awareness training resources.",
        pros: [
          "Free",
          "Good content",
          "Regular updates",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "No customization",
          "Manual tracking"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://staysafeonline.org",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "Medium",
        estimatedCostRange: "₹0 (self-managed)",
        icon: UserCheck
      },
      {
        id: "microsoft-endpoint",
        tier: "premium",
        name: "Microsoft Endpoint Manager",
        shortDescription: "Automated policy enforcement",
        description: "Microsoft Endpoint Manager provides automated policy enforcement for screen locking and security.",
        pros: [
          "Automated enforcement",
          "Comprehensive features",
          "Good integration",
          "Professional support"
        ],
        cons: [
          "Per-user pricing",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "$10 per user/month",
        pricingModel: "Per user",
        officialWebsite: "https://www.microsoft.com/en-us/microsoft-365/microsoft-endpoint-manager",
        pricingPage: "https://www.microsoft.com/en-us/microsoft-365/microsoft-endpoint-manager/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹750+/user/month",
        icon: UserCheck
      }
    ]
  },
  {
    id: 36,
    category: "Endpoint Security",
    text: "Are endpoints configured to automatically lock or blank the screen after 1 minute of inactivity to prevent unauthorized access?",
    description: "Automatic screen locking is essential for preventing unauthorized access to unattended devices.",
    helpText: "This includes having proper screen lock policies and enforcement mechanisms.",
    icon: Lock,
    subQuestion: {
      id: "auto-lock-restrictions",
      text: "Are there any technical or policy restrictions preventing auto-lock implementation?",
      placeholder: "Enter current restrictions",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "group-policy",
        tier: "standard",
        name: "Windows Group Policy",
        shortDescription: "Screen lock enforcement",
        description: "Enforce Group Policy for screen lock timers in Windows environments.",
        pros: [
          "Built-in solution",
          "No additional cost",
          "Centralized management",
          "Good documentation"
        ],
        cons: [
          "Windows only",
          "Limited features",
          "Basic reporting",
          "Manual configuration"
        ],
        pricing: "Included with Windows Server",
        pricingModel: "Included",
        officialWebsite: "https://docs.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-manage-in-organization",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹0 (included with Windows)",
        icon: Lock
      },
      {
        id: "mdm-solutions",
        tier: "premium",
        name: "MDM Solutions",
        shortDescription: "Device management",
        description: "Use MDM solutions like Jamf (Mac) or Microsoft Intune (Windows) for comprehensive device management.",
        pros: [
          "Cross-platform",
          "Advanced features",
          "Good reporting",
          "Professional support"
        ],
        cons: [
          "Per-device cost",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "Starting at $8 per device/month",
        pricingModel: "Per device",
        officialWebsite: "https://www.microsoft.com/en-us/microsoft-365/intune",
        pricingPage: "https://www.microsoft.com/en-us/microsoft-365/intune/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹600+/device/month",
        icon: Lock
      }
    ]
  },
  {
    id: 37,
    category: "Storage Security",
    text: "Is storage media securely managed throughout its lifecycle, including acquisition, usage, transportation, and disposal?",
    description: "Secure storage media management is crucial for protecting sensitive data throughout its lifecycle.",
    helpText: "This includes having proper processes for handling storage media from acquisition to disposal.",
    icon: HardDrive,
    subQuestion: {
      id: "data-storage-disposal",
      text: "How is sensitive data currently stored and disposed of?",
      placeholder: "Enter current approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "bitlocker-filevault",
        tier: "standard",
        name: "OS Encryption",
        shortDescription: "Storage encryption",
        description: "Implement BitLocker (Windows) or FileVault (Mac) for encryption.",
        pros: [
          "Built-in solution",
          "No additional cost",
          "Good security",
          "Easy to use"
        ],
        cons: [
          "OS specific",
          "Limited features",
          "Basic reporting",
          "Manual management"
        ],
        pricing: "Free (included with OS)",
        pricingModel: "Included",
        officialWebsite: "https://docs.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹0 (included with OS)",
        icon: HardDrive
      },
      {
        id: "iron-mountain",
        tier: "premium",
        name: "Iron Mountain",
        shortDescription: "Secure storage and destruction",
        description: "Use enterprise-grade secure storage and destruction services.",
        pros: [
          "Professional service",
          "Comprehensive solution",
          "Good compliance",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Contract required",
          "External dependency",
          "Complex setup"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.ironmountain.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: HardDrive
      }
    ]
  },
  {
    id: 38,
    category: "Data Security",
    text: "Are there clear rules and processes to ensure sensitive data is stored safely and shared securely?",
    description: "Clear rules and processes for data handling are essential for maintaining security.",
    helpText: "This includes having proper policies and tools for secure data storage and sharing.",
    icon: FileText,
    subQuestion: {
      id: "data-tools",
      text: "What tools are currently used for secure data storage and sharing?",
      placeholder: "Enter current tools",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "onedrive-dlp",
        tier: "standard",
        name: "Microsoft OneDrive with DLP",
        shortDescription: "Secure data storage",
        description: "Use Microsoft OneDrive with Data Loss Prevention (DLP).",
        pros: [
          "Good integration",
          "Regular updates",
          "Easy to use",
          "Professional support"
        ],
        cons: [
          "Subscription required",
          "Limited features",
          "Basic reporting",
          "Learning curve"
        ],
        pricing: "Included in Microsoft 365 Business ($12.50 per user/month)",
        pricingModel: "Per user",
        officialWebsite: "https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage",
        pricingPage: "https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹950+/user/month",
        icon: FileText
      },
      {
        id: "forcepoint-dlp",
        tier: "premium",
        name: "Forcepoint DLP",
        shortDescription: "Enterprise DLP",
        description: "Deploy enterprise-grade DLP solutions like Forcepoint DLP.",
        pros: [
          "Advanced features",
          "Comprehensive solution",
          "Good reporting",
          "Professional support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "$50 per user annually",
        pricingModel: "Per user",
        officialWebsite: "https://www.forcepoint.com/product/dlp",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹3,750+/user/year",
        icon: FileText
      }
    ]
  },
  {
    id: 39,
    category: "Infrastructure Security",
    text: "Are information processing facilities protected from power failures with backup solutions like UPS or generators?",
    description: "Power backup solutions are essential for maintaining business continuity.",
    helpText: "This includes having proper backup power solutions for critical infrastructure.",
    icon: Zap,
    subQuestion: {
      id: "infrastructure-location",
      text: "Does your company host critical infrastructure on-premises or rely on cloud services?",
      placeholder: "Enter infrastructure setup",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "apc-ups",
        tier: "standard",
        name: "APC Smart-UPS",
        shortDescription: "Power backup",
        description: "Install APC Smart-UPS for essential infrastructure.",
        pros: [
          "Reliable solution",
          "Good features",
          "Easy to use",
          "Professional support"
        ],
        cons: [
          "Limited capacity",
          "Basic monitoring",
          "Manual maintenance",
          "Physical space needed"
        ],
        pricing: "Starting at $500 per unit",
        pricingModel: "Per unit",
        officialWebsite: "https://www.apc.com/products/category/ups",
        pricingPage: "Contact sales",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹37,500+/unit",
        icon: Zap
      },
      {
        id: "generac",
        tier: "premium",
        name: "Generac Generators",
        shortDescription: "Full-scale backup",
        description: "Implement full-scale data center backup solutions.",
        pros: [
          "High capacity",
          "Advanced features",
          "Good monitoring",
          "Professional support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Regular maintenance",
          "Space intensive"
        ],
        pricing: "$10,000+",
        pricingModel: "One-time",
        officialWebsite: "https://www.generac.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+",
        icon: Zap
      }
    ]
  },
  {
    id: 40,
    category: "Utility Protection",
    text: "Are measures in place to prevent disruptions from failures in supporting utilities such as cooling, water, or internet connectivity?",
    description: "Protection against utility failures is crucial for maintaining business operations.",
    helpText: "This includes having proper backup solutions for critical utilities.",
    icon: Wifi,
    subQuestion: {
      id: "critical-utilities",
      text: "Which supporting utilities are most critical to business operations?",
      placeholder: "Enter critical utilities",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "sd-wan",
        tier: "standard",
        name: "SD-WAN with 4G/5G",
        shortDescription: "Internet backup",
        description: "Use cloud-based failover internet services.",
        pros: [
          "Reliable backup",
          "Easy to use",
          "Good features",
          "Professional support"
        ],
        cons: [
          "Monthly cost",
          "Limited bandwidth",
          "Basic monitoring",
          "Dependent on cellular"
        ],
        pricing: "Starting at $200 per month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.cisco.com/c/en/us/solutions/software-defined-wan/index.html",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹15,000+/month",
        icon: Wifi
      },
      {
        id: "liebert-cooling",
        tier: "premium",
        name: "Liebert Precision Cooling",
        shortDescription: "Redundant cooling",
        description: "Implement redundant cooling and power solutions.",
        pros: [
          "High reliability",
          "Advanced features",
          "Good monitoring",
          "Professional support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Regular maintenance",
          "Space intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.vertiv.com/en-us/products/critical-infrastructure/precision-cooling/",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: Wifi
      }
    ]
  },
  {
    id: 41,
    category: "Equipment Maintenance",
    text: "Is equipment regularly maintained to ensure availability, integrity, and confidentiality of information?",
    description: "Regular equipment maintenance is crucial for maintaining security and reliability.",
    helpText: "This includes having proper maintenance schedules and procedures for IT equipment.",
    icon: Wrench,
    subQuestion: {
      id: "maintenance-frequency",
      text: "How often is IT equipment inspected and maintained?",
      placeholder: "Enter maintenance frequency",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "servicenow-itsm",
        tier: "standard",
        name: "ServiceNow ITSM",
        shortDescription: "Asset management",
        description: "Implement asset management with ServiceNow ITSM.",
        pros: [
          "Comprehensive solution",
          "Good workflow",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "Starting at $10,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.servicenow.com/products/itsm.html",
        pricingPage: "Contact sales",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: Wrench
      },
      {
        id: "ibm-maximo",
        tier: "premium",
        name: "IBM Maximo",
        shortDescription: "AI-driven maintenance",
        description: "Use AI-driven predictive maintenance tools like IBM Maximo.",
        pros: [
          "Advanced features",
          "AI capabilities",
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
        officialWebsite: "https://www.ibm.com/products/maximo",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Wrench
      }
    ]
  },
  {
    id: 42,
    category: "Secure Maintenance",
    text: "Are maintenance activities performed securely to prevent unauthorized access or tampering?",
    description: "Secure maintenance procedures are essential for protecting systems during maintenance.",
    helpText: "This includes having proper security controls during maintenance activities.",
    icon: Shield,
    subQuestion: {
      id: "maintenance-monitoring",
      text: "How are maintenance activities currently logged and monitored for security risks?",
      placeholder: "Enter current monitoring approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "jira-service",
        tier: "standard",
        name: "Jira Service Management",
        shortDescription: "Change management",
        description: "Implement a change management system.",
        pros: [
          "Good workflow",
          "Integration options",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-user pricing",
          "Learning curve",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Starts at $20 per user/month",
        pricingModel: "Per user",
        officialWebsite: "https://www.atlassian.com/software/jira/service-management",
        pricingPage: "https://www.atlassian.com/software/jira/service-management/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,500+/user/month",
        icon: Shield
      },
      {
        id: "cyberark",
        tier: "premium",
        name: "CyberArk",
        shortDescription: "Privileged access management",
        description: "Use a Privileged Access Management (PAM) solution to restrict access during maintenance.",
        pros: [
          "Advanced security",
          "Comprehensive features",
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
        officialWebsite: "https://www.cyberark.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 43,
    category: "Data Sanitization",
    text: "Are items of equipment containing storage media securely wiped, overwritten, or destroyed before disposal or reuse?",
    description: "Secure data sanitization is crucial for preventing data breaches during equipment disposal.",
    helpText: "This includes having proper procedures for securely erasing or destroying storage media.",
    icon: Trash2,
    subQuestion: {
      id: "sanitization-method",
      text: "What method is currently used for data sanitization?",
      placeholder: "Enter current method",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "dban",
        tier: "standard",
        name: "DBAN",
        shortDescription: "Secure erasure",
        description: "Use open-source wiping tools for secure erasure.",
        pros: [
          "Free",
          "Good security",
          "Easy to use",
          "Community support"
        ],
        cons: [
          "Manual process",
          "Limited features",
          "Basic reporting",
          "Time consuming"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://dban.org",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Trash2
      },
      {
        id: "iron-mountain-destruction",
        tier: "premium",
        name: "Iron Mountain Media Destruction",
        shortDescription: "Professional destruction",
        description: "Contract with certified disposal services for media destruction.",
        pros: [
          "Professional service",
          "Comprehensive solution",
          "Good compliance",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Contract required",
          "External dependency",
          "Complex setup"
        ],
        pricing: "Based on volume and location",
        pricingModel: "Custom",
        officialWebsite: "https://www.ironmountain.com/services/secure-media-destruction",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large Enterprise",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹75,000+/year",
        icon: Trash2
      }
    ]
  },
  {
    id: 44,
    category: "Software Decommissioning",
    text: "Is licensed software removed from devices before disposal to prevent unauthorized use?",
    description: "Proper software decommissioning is essential for preventing license violations.",
    helpText: "This includes having proper procedures for removing licensed software before device disposal.",
    icon: PackageX,
    subQuestion: {
      id: "decommissioning-process",
      text: "Is there an asset decommissioning process in place?",
      placeholder: "Enter current process",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "sccm-intune",
        tier: "standard",
        name: "SCCM/Intune",
        shortDescription: "Automated removal",
        description: "Use SCCM or Intune to automate software removal before disposal.",
        pros: [
          "Built-in solution",
          "No additional cost",
          "Good automation",
          "Professional support"
        ],
        cons: [
          "Windows only",
          "Limited features",
          "Basic reporting",
          "Manual configuration"
        ],
        pricing: "Included with Microsoft 365 E3",
        pricingModel: "Included",
        officialWebsite: "https://www.microsoft.com/en-us/microsoft-365/microsoft-endpoint-manager",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0 (included with E3)",
        icon: PackageX
      },
      {
        id: "servicenow-itam",
        tier: "premium",
        name: "ServiceNow ITAM",
        shortDescription: "Automated decommissioning",
        description: "Implement automated software decommissioning tools.",
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
        officialWebsite: "https://www.servicenow.com/products/itam.html",
        pricingPage: "Contact sales",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: PackageX
      }
    ]
  },
  {
    id: 45,
    category: "Background Verification",
    text: "Are background verification checks conducted before hiring and periodically afterward, considering legal, ethical, and business requirements?",
    description: "Background verification is essential for maintaining security and trust.",
    helpText: "This includes having proper procedures for conducting and maintaining background checks.",
    icon: UserCheck,
    subQuestion: {
      id: "background-policy",
      text: "Is there a policy in place for employee background screening?",
      placeholder: "Enter current policy",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "checkr-hireright",
        tier: "standard",
        name: "Background Screening Services",
        shortDescription: "Third-party screening",
        description: "Use third-party background screening services.",
        pros: [
          "Professional service",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-employee cost",
          "Limited customization",
          "Basic reporting",
          "External dependency"
        ],
        pricing: "$30–$100 per employee",
        pricingModel: "Per employee",
        officialWebsite: "https://checkr.com",
        pricingPage: "Contact sales",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹2,250–7,500/employee",
        icon: UserCheck
      },
      {
        id: "equifax-workforce",
        tier: "premium",
        name: "Equifax Workforce Solutions",
        shortDescription: "Continuous monitoring",
        description: "Implement continuous employee risk monitoring solutions.",
        pros: [
          "Advanced features",
          "Continuous monitoring",
          "Good reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Based on company size",
        pricingModel: "Custom",
        officialWebsite: "https://www.equifaxworkforce.com",
        pricingPage: "Contact sales",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: UserCheck
      }
    ]
  },
  {
    id: 46,
    category: "Employment Security",
    text: "Do employment contracts clearly define both personnel and organizational responsibilities for information security?",
    description: "Clear security responsibilities in employment contracts are essential for maintaining security standards.",
    helpText: "This includes having explicit security obligations defined in employment contracts.",
    icon: FileText,
    subQuestion: {
      id: "security-clause",
      text: "Do employment contracts include an information security clause?",
      placeholder: "Enter current contract status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "contract-update",
        tier: "standard",
        name: "Contract Updates",
        shortDescription: "Security obligations",
        description: "Update employment contracts to include explicit security obligations.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Legal compliance"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Legal review needed",
          "Resource intensive"
        ],
        pricing: "Internal HR/legal review required",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: FileText
      },
      {
        id: "workday",
        tier: "premium",
        name: "Workday",
        shortDescription: "HR compliance",
        description: "Use HR compliance tools to enforce security policy acknowledgments.",
        pros: [
          "Automated process",
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
        officialWebsite: "https://www.workday.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: FileText
      }
    ]
  },
  {
    id: 47,
    category: "Security Discipline",
    text: "Is there a formalized and communicated disciplinary process to address violations of information security policies?",
    description: "A clear disciplinary process is essential for enforcing security policies.",
    helpText: "This includes having proper procedures for handling security policy violations.",
    icon: AlertTriangle,
    subQuestion: {
      id: "violation-handling",
      text: "How are security policy violations currently handled?",
      placeholder: "Enter current process",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "handbook-policy",
        tier: "standard",
        name: "Employee Handbook Policy",
        shortDescription: "Security violations",
        description: "Develop and communicate an official security violation policy in the employee handbook.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Legal compliance"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Legal review needed",
          "Resource intensive"
        ],
        pricing: "Internal HR effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: AlertTriangle
      },
      {
        id: "bamboohr",
        tier: "premium",
        name: "BambooHR",
        shortDescription: "Case management",
        description: "Implement HR case management tools to track incidents.",
        pros: [
          "Automated process",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-user cost",
          "Learning curve",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "$8–$15 per user/month",
        pricingModel: "Per user",
        officialWebsite: "https://www.bamboohr.com",
        pricingPage: "https://www.bamboohr.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹600–1,125/user/month",
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 48,
    category: "Security Responsibilities",
    text: "Are information security responsibilities enforced and communicated to personnel after termination or role changes?",
    description: "Proper handling of security responsibilities during role changes is crucial.",
    helpText: "This includes having proper procedures for managing security access during transitions.",
    icon: UserX,
    subQuestion: {
      id: "offboarding-process",
      text: "Is there a formal offboarding process for employees?",
      placeholder: "Enter current process",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "okta-entra",
        tier: "standard",
        name: "Okta/Microsoft Entra ID",
        shortDescription: "Account deactivation",
        description: "Use automated account deactivation tools.",
        pros: [
          "Automated process",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-user cost",
          "Learning curve",
          "Limited features",
          "Resource intensive"
        ],
        pricing: "$6–$15 per user/month",
        pricingModel: "Per user",
        officialWebsite: "https://www.okta.com",
        pricingPage: "https://www.okta.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹450–1,125/user/month",
        icon: UserX
      },
      {
        id: "servicenow-security",
        tier: "premium",
        name: "ServiceNow Security",
        shortDescription: "Clearance tracking",
        description: "Implement security clearance revocation tracking in ServiceNow.",
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
        officialWebsite: "https://www.servicenow.com/products/security-operations.html",
        pricingPage: "Contact sales",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: UserX
      }
    ]
  },
  {
    id: 49,
    category: "Confidentiality Agreements",
    text: "Are confidentiality or non-disclosure agreements documented, reviewed regularly, and signed by personnel and relevant parties?",
    description: "Proper NDA management is essential for protecting sensitive information.",
    helpText: "This includes having proper procedures for managing NDAs.",
    icon: FileCheck,
    subQuestion: {
      id: "nda-requirement",
      text: "Are NDAs required for all employees and contractors?",
      placeholder: "Enter current NDA status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "docusign",
        tier: "standard",
        name: "DocuSign",
        shortDescription: "Digital signatures",
        description: "Ensure NDAs are part of the onboarding process using DocuSign.",
        pros: [
          "Easy to use",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-user cost",
          "Limited features",
          "Basic reporting",
          "Resource intensive"
        ],
        pricing: "$10–$25 per user/month",
        pricingModel: "Per user",
        officialWebsite: "https://www.docusign.com",
        pricingPage: "https://www.docusign.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹750–1,875/user/month",
        icon: FileCheck
      },
      {
        id: "ironclad",
        tier: "premium",
        name: "Ironclad",
        shortDescription: "Contract management",
        description: "Implement AI-powered contract management.",
        pros: [
          "Advanced features",
          "AI capabilities",
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
        officialWebsite: "https://ironcladapp.com",
        pricingPage: "Contact sales",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Legal team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: FileCheck
      }
    ]
  },
  {
    id: 50,
    category: "Incident Reporting",
    text: "Is there a mechanism for personnel to report observed or suspected security incidents in a timely manner?",
    description: "Proper incident reporting is crucial for maintaining security.",
    helpText: "This includes having proper procedures for reporting security incidents.",
    icon: AlertCircle,
    subQuestion: {
      id: "incident-reporting",
      text: "How are security incidents currently reported?",
      placeholder: "Enter current process",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "google-forms",
        tier: "standard",
        name: "Google Forms",
        shortDescription: "Anonymous reporting",
        description: "Set up an anonymous reporting tool.",
        pros: [
          "Free",
          "Easy to use",
          "Good features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "No automation",
          "Manual process"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.google.com/forms/about",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: AlertCircle
      },
      {
        id: "splunk-soar",
        tier: "premium",
        name: "Splunk SOAR",
        shortDescription: "Incident management",
        description: "Use a security incident management platform.",
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
        officialWebsite: "https://www.splunk.com/en_us/software/splunk-security-orchestration-and-automation.html",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: AlertCircle
      }
    ]
  },
  {
    id: 51,
    category: "Security Policies",
    text: "Are information security policies defined, approved, communicated, acknowledged, and reviewed regularly?",
    description: "Regular policy review and communication is essential for maintaining security.",
    helpText: "This includes having proper procedures for managing security policies.",
    icon: FileText,
    subQuestion: {
      id: "policy-review",
      text: "When was the last security policy review?",
      placeholder: "Enter last review date",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "google-drive",
        tier: "standard",
        name: "Google Drive/SharePoint",
        shortDescription: "Policy management",
        description: "Conduct quarterly policy reviews using Google Drive or SharePoint.",
        pros: [
          "Free",
          "Easy to use",
          "Good features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "No automation",
          "Manual process"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.google.com/drive",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: FileText
      },
      {
        id: "logicgate",
        tier: "premium",
        name: "LogicGate",
        shortDescription: "Policy management",
        description: "Implement policy management software.",
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
        officialWebsite: "https://www.logicgate.com",
        pricingPage: "Contact sales",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: FileText
      }
    ]
  },
  {
    id: 52,
    category: "Security Roles",
    text: "Are information security roles and responsibilities clearly defined and assigned based on organizational needs?",
    description: "Clear security roles are essential for maintaining security.",
    helpText: "This includes having proper procedures for defining security roles.",
    icon: Users,
    subQuestion: {
      id: "governance-structure",
      text: "Is there a formal security governance structure in place?",
      placeholder: "Enter current structure",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "policy-documentation",
        tier: "standard",
        name: "Policy Documentation",
        shortDescription: "Role definition",
        description: "Define security roles in organizational policies.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Legal compliance"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Legal review needed",
          "Resource intensive"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: Users
      },
      {
        id: "archer",
        tier: "premium",
        name: "Archer",
        shortDescription: "GRC platform",
        description: "Implement a governance risk compliance (GRC) tool.",
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
        officialWebsite: "https://www.archerirm.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Users
      }
    ]
  },
  {
    id: 53,
    category: "Duty Segregation",
    text: "Are conflicting duties and responsibilities identified and segregated to prevent security risks?",
    description: "Proper segregation of duties is essential for maintaining security.",
    helpText: "This includes having proper procedures for managing role conflicts.",
    icon: Shield,
    subQuestion: {
      id: "role-conflicts",
      text: "How are roles and responsibilities currently assigned to prevent conflicts of interest?",
      placeholder: "Enter current approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "rbac",
        tier: "standard",
        name: "RBAC Model",
        shortDescription: "Access control",
        description: "Implement a Role-Based Access Control (RBAC) model in identity management.",
        pros: [
          "Built-in solution",
          "No additional cost",
          "Good security",
          "Easy to use"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "Manual configuration",
          "Resource intensive"
        ],
        pricing: "Included in Microsoft Entra ID, Okta, or AWS IAM",
import {
  Shield,
  Lock,
  Database,
  FileText,
  Users,
  AlertTriangle,
  Network,
  UserCheck,
  Eye,
  Camera,
  type LucideIcon,
  Flame,
  Cable,
  ShieldAlert,
  UserCog,
  FileKey,
  Code,
  Key,
  Activity,
  DatabaseIcon,
  ClipboardCheck,
  Clock,
  Building,
  HardDrive,
  Zap,
  Wifi,
  Wrench,
  Trash2,
  PackageX,
  UserX,
  CheckCircle,
  Building2,
  AlertCircle,
  FileCheck,
} from "lucide-react"

export interface SubQuestion {
  id: string
  text: string
  placeholder: string
  unit: string
  defaultValue?: number
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
  effortHours: string // Effort in hours (e.g., "4–8")
  priority: "High" | "Medium" | "Low" // Priority level
  estimatedCostRange: string // Cost range (e.g., "₹500–1,000/year")
  icon?: LucideIcon
  // Estimation functions
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

// First 10 questions
export const questionsData: Question[] = [
  {
    id: 1,
    category: "Threat Intelligence",
    text: "Do you receive a threat intelligence feed regarding the technology stack of your application to remain up to date with the latest threats?",
    description:
      "Threat intelligence helps organizations stay informed about emerging threats specific to their technology stack.",
    helpText:
      "This includes feeds that provide information about vulnerabilities, exploits, and attack patterns relevant to your systems.",
    icon: Shield,
    subQuestion: {
      id: "threat-intelligence-interest",
      text: "Are you interested in integrating a threat intelligence service to monitor and respond to emerging threats relevant to your technology stack?",
      placeholder: "Yes/No",
      unit: "",
      defaultValue: 1,
      min: 0,
      max: 1,
    },
    recommendations: [
      {
        id: "open-threat-exchange",
        tier: "open-source",
        name: "Open Threat Exchange (OTX)",
        shortDescription: "Free threat intelligence platform",
        description:
          "Open Threat Exchange (OTX) is a free threat intelligence platform that provides community-driven threat data, indicators of compromise, and analysis tools.",
        pros: ["Free to use", "Community-driven intelligence", "Regular updates", "API access available"],
        cons: ["Limited enterprise support", "Requires manual analysis", "May include false positives"],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://otx.alienvault.com/",
        pricingPage: "https://otx.alienvault.com/",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "Security analyst for research and configuration",
        organizationSize: "Organizations of all sizes",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Shield,
        calculateEffort: (interest) => {
          return "40–80"
        },
        calculateTimeline: (interest) => {
          return "Within 2 weeks"
        },
        calculateCost: (interest) => {
          return "₹0"
        },
      },
      {
        id: "recorded-future",
        tier: "standard",
        name: "Recorded Future",
        shortDescription: "Comprehensive threat intelligence service",
        description:
          "Recorded Future provides real-time threat intelligence powered by machine learning to help organizations proactively defend against emerging threats.",
        pros: [
          "Real-time intelligence",
          "Machine learning analysis",
          "Integration with security tools",
          "Customizable alerts",
        ],
        cons: ["Significant investment required", "Complex implementation", "Requires dedicated resources"],
        pricing: "Approximately ₹30,06,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.recordedfuture.com/",
        pricingPage: "https://www.recordedfuture.com/contact/",
        setupTime: "1 week with security team",
        recommendedTimeline: "Within 1 week",
        requiredResources: "Security team for implementation and monitoring",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "40",
        priority: "High",
        estimatedCostRange: "₹30,06,000/year",
        icon: Shield,
        calculateEffort: (interest) => {
          return "40"
        },
        calculateTimeline: (interest) => {
          return "Within 1 week"
        },
        calculateCost: (interest) => {
          return "₹30,06,000/year"
        },
      },
      {
        id: "fireeye-threat-intelligence",
        tier: "premium",
        name: "FireEye Threat Intelligence",
        shortDescription: "Enterprise-grade threat intelligence",
        description:
          "FireEye Threat Intelligence provides comprehensive, contextual intelligence about threats specific to your organization and industry.",
        pros: ["Industry-leading intelligence", "Contextual analysis", "Advanced threat detection", "Expert support"],
        cons: ["Premium pricing", "Complex integration", "Requires specialized expertise"],
        pricing: "Starting at ₹83,50,000 annually",
        pricingModel: "Annual contract",
        officialWebsite: "https://www.fireeye.com/products/cyber-threat-intelligence.html",
        pricingPage: "https://www.fireeye.com/company/contact.html",
        setupTime: "1-2 weeks with security team",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "Dedicated security team with threat intelligence experience",
        organizationSize: "Large organizations (100+ employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹83,50,000+/year",
        icon: Shield,
        calculateEffort: (interest) => {
          return "40–80"
        },
        calculateTimeline: (interest) => {
          return "Within 2 weeks"
        },
        calculateCost: (interest) => {
          return "₹83,50,000+/year"
        },
      },
    ],
  },
  {
    id: 2,
    category: "Asset Management",
    text: "Is there an inventory management platform deployed to track the entire lifecycle of IT assets from procurement to destruction?",
    description: "Asset management platforms help track hardware and software assets throughout their lifecycle.",
    helpText: "This includes tracking procurement, deployment, maintenance, and secure disposal of IT assets.",
    icon: Database,
    subQuestion: {
      id: "asset-count",
      text: "How many IT assets does your organization manage?",
      placeholder: "Enter number of assets",
      unit: "assets",
      defaultValue: 100,
      min: 1,
    },
    recommendations: [
      {
        id: "snipe-it",
        tier: "open-source",
        name: "Snipe-IT",
        shortDescription: "Free asset management solution",
        description:
          "Snipe-IT is a free, open-source IT asset management system that helps you track physical assets, licenses, accessories, and consumables.",
        pros: ["Free and open-source", "Customizable", "Active community support", "Regular updates"],
        cons: [
          "Self-hosted infrastructure needed",
          "Limited enterprise support",
          "Requires technical expertise to deploy",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://snipeitapp.com/",
        pricingPage: "https://snipeitapp.com/hosting",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator for installation and configuration",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Database,
        calculateEffort: (assets) => {
          // Base effort + additional effort based on assets
          const baseEffort = 40
          const additionalEffort = Math.ceil(assets / 100) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (assets) => {
          // Base timeline + additional time based on assets
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(assets / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (assets) => {
          return "₹0"
        },
      },
      {
        id: "asset-panda",
        tier: "standard",
        name: "Asset Panda",
        shortDescription: "Flexible asset tracking platform",
        description:
          "Asset Panda is a flexible and customizable asset tracking platform that helps organizations track and manage their assets throughout their lifecycle.",
        pros: [
          "User-friendly interface",
          "Customizable fields and workflows",
          "Mobile app available",
          "Cloud-based solution",
        ],
        cons: [
          "Subscription cost scales with assets",
          "Some advanced features only in higher tiers",
          "May require customization for specific needs",
        ],
        pricing: "Approximately ₹1,25,250 annually for up to 500 assets",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.assetpanda.com/",
        pricingPage: "https://www.assetpanda.com/pricing/",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator for setup and user training",
        organizationSize: "Small to medium organizations (10-500 employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹1,25,250/year for up to 500 assets",
        icon: Database,
        calculateEffort: (assets) => {
          // Base effort + additional effort based on assets
          const baseEffort = 40
          const additionalEffort = Math.ceil(assets / 100) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (assets) => {
          // Base timeline + additional time based on assets
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(assets / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (assets) => {
          // Cost based on number of assets
          if (assets <= 500) {
            return "₹1,25,250/year"
          } else {
            const additionalCost = Math.ceil((assets - 500) / 100) * 25000
            return `₹${(125250 + additionalCost).toLocaleString()}/year`
          }
        },
      },
      {
        id: "servicenow-asset",
        tier: "premium",
        name: "ServiceNow IT Asset Management",
        shortDescription: "Enterprise asset management solution",
        description:
          "ServiceNow IT Asset Management provides comprehensive asset lifecycle management with advanced reporting, automation, and integration capabilities.",
        pros: [
          "Comprehensive asset lifecycle management",
          "Integration with ITSM processes",
          "Advanced reporting and analytics",
          "Automation capabilities",
        ],
        cons: ["Higher implementation complexity", "Significant investment required", "Requires dedicated resources"],
        pricing: "Starting at ₹8,35,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.servicenow.com/products/it-asset-management.html",
        pricingPage: "https://www.servicenow.com/company/contact.html",
        setupTime: "2-3 weeks with IT team",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Dedicated IT team with ServiceNow experience",
        organizationSize: "Medium to large organizations (100+ employees)",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹8,35,000+/year",
        icon: Database,
        calculateEffort: (assets) => {
          // Base effort + additional effort based on assets
          const baseEffort = 80
          const additionalEffort = Math.ceil(assets / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (assets) => {
          // Base timeline + additional time based on assets
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(assets / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (assets) => {
          // Base cost + per asset cost
          const baseCost = 835000
          const perAssetCost = 1000
          const totalCost = baseCost + assets * perAssetCost
          return `₹${totalCost.toLocaleString()}/year`
        },
      },
    ],
  },
  {
    id: 3,
    category: "Identity Management",
    text: "Is there an identity management solution in place?",
    description: "Identity management solutions help manage user identities, authentication, and access control.",
    helpText: "This includes user provisioning, authentication, authorization, and identity lifecycle management.",
    icon: UserCheck,
    subQuestion: {
      id: "identity-count",
      text: "How many user identities need to be managed?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 50,
      min: 1,
    },
    recommendations: [
      {
        id: "openldap",
        tier: "open-source",
        name: "OpenLDAP",
        shortDescription: "Open-source directory service",
        description:
          "OpenLDAP is a free, open-source implementation of the Lightweight Directory Access Protocol (LDAP) that provides a centralized directory service for managing user identities.",
        pros: ["Free and open-source", "Highly customizable", "Widely supported", "Scalable"],
        cons: [
          "Complex configuration",
          "Steep learning curve",
          "Limited GUI management tools",
          "Requires technical expertise",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://www.openldap.org/",
        pricingPage: "https://www.openldap.org/",
        setupTime: "3-4 weeks with IT support",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "IT administrator with LDAP experience",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "120–160",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: UserCheck,
        calculateEffort: (users) => {
          // Base effort + additional effort based on users
          const baseEffort = 120
          const additionalEffort = Math.ceil(users / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on users
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(users / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          return "₹0"
        },
      },
      {
        id: "active-directory",
        tier: "standard",
        name: "Microsoft Active Directory",
        shortDescription: "Windows-based directory service",
        description:
          "Microsoft Active Directory is a directory service included with Windows Server that provides authentication, authorization, and directory services for Windows-based networks.",
        pros: [
          "Tight integration with Windows",
          "User-friendly management tools",
          "Widely supported",
          "Comprehensive features",
        ],
        cons: [
          "Requires Windows Server licenses",
          "Limited cross-platform support",
          "Can be complex for advanced scenarios",
        ],
        pricing: "Included with Windows Server licensing (approximately ₹41,750–₹5,01,000 depending on edition)",
        pricingModel: "One-time purchase + Software Assurance",
        officialWebsite:
          "https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview",
        pricingPage: "https://www.microsoft.com/en-us/windows-server/pricing",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with Windows Server experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹41,750–₹5,01,000 depending on edition",
        icon: UserCheck,
        calculateEffort: (users) => {
          // Base effort + additional effort based on users
          const baseEffort = 40
          const additionalEffort = Math.ceil(users / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on users
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(users / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Cost based on Windows Server edition and number of users
          if (users <= 25) {
            return "₹41,750 (Windows Server Essentials)"
          } else if (users <= 100) {
            return "₹1,67,000 (Windows Server Standard)"
          } else {
            return "₹5,01,000 (Windows Server Datacenter)"
          }
        },
      },
      {
        id: "okta-identity",
        tier: "premium",
        name: "Okta Identity Management",
        shortDescription: "Cloud-based identity platform",
        description:
          "Okta Identity Management is a cloud-based identity platform that provides secure, scalable, and reliable identity management with single sign-on and multi-factor authentication.",
        pros: [
          "Cloud-based solution",
          "Extensive application integrations",
          "User-friendly interface",
          "Comprehensive features",
        ],
        cons: [
          "Subscription cost scales with users",
          "Advanced features require higher tiers",
          "May require customization for specific needs",
        ],
        pricing: "Starting at ₹167 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.okta.com/products/",
        pricingPage: "https://www.okta.com/pricing/",
        setupTime: "3-4 weeks with IT support",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "IT administrator with identity management experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "120–160",
        priority: "High",
        estimatedCostRange: "₹1,00,200+/year for 50 users",
        icon: UserCheck,
        calculateEffort: (users) => {
          // Base effort + additional effort based on users
          const baseEffort = 120
          const additionalEffort = Math.ceil(users / 25) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on users
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(users / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Cost based on number of users
          const monthlyCost = users * 167
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year`
        },
      },
    ],
  },
  {
    id: 4,
    category: "Incident Management",
    text: "Is there an incident management platform in place?",
    description: "Incident management platforms help track, manage, and resolve security incidents.",
    helpText: "This includes incident detection, analysis, containment, eradication, and recovery processes.",
    icon: AlertTriangle,
    subQuestion: {
      id: "incident-count",
      text: "How many incidents does your organization handle monthly?",
      placeholder: "Enter number of incidents",
      unit: "incidents",
      defaultValue: 10,
      min: 1,
    },
    recommendations: [
      {
        id: "thehive",
        tier: "open-source",
        name: "TheHive",
        shortDescription: "Open-source incident response platform",
        description:
          "TheHive is a free, open-source security incident response platform designed to make security analysts and incident responders more efficient.",
        pros: [
          "Free and open-source",
          "Scalable architecture",
          "Integration with MISP and Cortex",
          "Collaborative investigation",
        ],
        cons: ["Complex setup and configuration", "Limited enterprise support", "Requires technical expertise"],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://thehive-project.org/",
        pricingPage: "https://thehive-project.org/",
        setupTime: "2-3 weeks with security team",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Security analyst with incident response experience",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: AlertTriangle,
        calculateEffort: (incidents) => {
          // Base effort + additional effort based on incidents
          const baseEffort = 80
          const additionalEffort = Math.ceil(incidents / 10) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (incidents) => {
          // Base timeline + additional time based on incidents
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(incidents / 20) * 10
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (incidents) => {
          return "₹0"
        },
      },
      {
        id: "jira-service-management",
        tier: "standard",
        name: "Atlassian Jira Service Management",
        shortDescription: "IT service management platform",
        description:
          "Jira Service Management is a service management platform that helps IT teams provide great service experiences and increase operational efficiency.",
        pros: [
          "User-friendly interface",
          "Customizable workflows",
          "Integration with other Atlassian products",
          "Extensive marketplace apps",
        ],
        cons: [
          "Subscription cost scales with agents",
          "Complex for advanced customizations",
          "May require additional apps for specific needs",
        ],
        pricing: "Starting at ₹1,670 per agent/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.atlassian.com/software/jira/service-management",
        pricingPage: "https://www.atlassian.com/software/jira/service-management/pricing",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with ITSM experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹20,040+/year for 1 agent",
        icon: AlertTriangle,
        calculateEffort: (incidents) => {
          // Base effort + additional effort based on incidents
          const baseEffort = 40
          const additionalEffort = Math.ceil(incidents / 20) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (incidents) => {
          // Base timeline + additional time based on incidents
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(incidents / 50)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (incidents) => {
          // Cost based on number of agents needed
          const agentsNeeded = Math.max(1, Math.ceil(incidents / 50))
          const monthlyCost = agentsNeeded * 1670
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year for ${agentsNeeded} agent${agentsNeeded > 1 ? "s" : ""}`
        },
      },
      {
        id: "servicenow-incident",
        tier: "premium",
        name: "ServiceNow Incident Management",
        shortDescription: "Enterprise incident management solution",
        description:
          "ServiceNow Incident Management provides comprehensive incident management capabilities with advanced workflow automation, reporting, and integration features.",
        pros: [
          "Comprehensive incident management",
          "Advanced automation capabilities",
          "Extensive integration options",
          "Enterprise-grade reporting",
        ],
        cons: ["Higher implementation complexity", "Significant investment required", "Requires dedicated resources"],
        pricing: "Starting at ₹8,35,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.servicenow.com/products/itsm/incident-management.html",
        pricingPage: "https://www.servicenow.com/company/contact.html",
        setupTime: "3-4 weeks with IT team",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "Dedicated IT team with ServiceNow experience",
        organizationSize: "Medium to large organizations (100+ employees)",
        effortHours: "120–160",
        priority: "Medium",
        estimatedCostRange: "₹8,35,000+/year",
        icon: AlertTriangle,
        calculateEffort: (incidents) => {
          // Base effort + additional effort based on incidents
          const baseEffort = 120
          const additionalEffort = Math.ceil(incidents / 10) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (incidents) => {
          // Base timeline + additional time based on incidents
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(incidents / 20)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (incidents) => {
          // Base cost + additional cost based on incidents
          const baseCost = 835000
          const additionalCost = Math.ceil(incidents / 10) * 10000
          const totalCost = baseCost + additionalCost
          return `₹${totalCost.toLocaleString()}/year`
        },
      },
    ],
  },
  {
    id: 5,
    category: "Data Loss Prevention",
    text: "Is there a Data Loss Prevention (DLP) solution in place?",
    description: "DLP solutions help prevent sensitive data from leaving the organization's control.",
    helpText: "This includes monitoring, blocking, and alerting on sensitive data transfers.",
    icon: FileText,
    subQuestion: {
      id: "dlp-data-types",
      text: "What types of sensitive data does your organization handle?",
      placeholder: "Enter data types (e.g., PII, financial data)",
      unit: "",
      defaultValue: "PII, Financial Data",
      min: 0,
    },
    recommendations: [
      {
        id: "opendlp",
        tier: "open-source",
        name: "OpenDLP",
        shortDescription: "Open-source data loss prevention",
        description:
          "OpenDLP is a free, open-source data loss prevention solution that helps organizations identify and protect sensitive data across their networks.",
        pros: ["Free and open-source", "Customizable scanning rules", "Network-based scanning", "Regular updates"],
        cons: [
          "Complex configuration",
          "Limited enterprise support",
          "Requires technical expertise",
          "Limited features compared to commercial solutions",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://code.google.com/archive/p/opendlp/",
        pricingPage: "https://code.google.com/archive/p/opendlp/",
        setupTime: "4+ weeks with security team",
        recommendedTimeline: "Within 6 weeks",
        requiredResources: "Security analyst with DLP experience",
        organizationSize: "Small to medium organizations (10-100 employees)",
        effortHours: "160+",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: FileText,
        calculateEffort: (dataTypes) => {
          // Base effort + additional effort based on data types
          const baseEffort = 160
          const numDataTypes = typeof dataTypes === "string" ? dataTypes.split(",").length : 1
          const additionalEffort = numDataTypes * 20
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}+`
        },
        calculateTimeline: (dataTypes) => {
          // Base timeline + additional time based on data types
          const baseTimeline = 4
          const numDataTypes = typeof dataTypes === "string" ? dataTypes.split(",").length : 1
          const additionalTimeline = numDataTypes
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (dataTypes) => {
          return "₹0"
        },
      },
      {
        id: "symantec-dlp",
        tier: "standard",
        name: "Symantec DLP",
        shortDescription: "Comprehensive data protection",
        description:
          "Symantec Data Loss Prevention provides comprehensive protection for sensitive data with endpoint, network, and cloud coverage.",
        pros: [
          "Comprehensive data protection",
          "Centralized management",
          "Advanced detection capabilities",
          "Integration with other security tools",
        ],
        cons: ["Subscription cost scales with users", "Complex implementation", "Requires dedicated resources"],
        pricing: "Approximately ₹2,088 per user annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.broadcom.com/products/cyber-security/information-protection/data-loss-prevention",
        pricingPage: "https://www.broadcom.com/company/contact",
        setupTime: "2-3 weeks with security team",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Security team with DLP experience",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "80–120",
        priority: "High",
        estimatedCostRange: "₹1,04,400+/year for 50 users",
        icon: FileText,
        calculateEffort: (dataTypes) => {
          // Base effort + additional effort based on data types
          const baseEffort = 80
          const numDataTypes = typeof dataTypes === "string" ? dataTypes.split(",").length : 1
          const additionalEffort = numDataTypes * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (dataTypes) => {
          // Base timeline + additional time based on data types
          const baseTimeline = 3
          const numDataTypes = typeof dataTypes === "string" ? dataTypes.split(",").length : 1
          const additionalTimeline = Math.ceil(numDataTypes / 2)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (dataTypes) => {
          // Cost based on number of users (assuming 50 users)
          const users = 50
          const annualCost = users * 2088
          return `₹${annualCost.toLocaleString()}/year for ${users} users`
        },
      },
      {
        id: "forcepoint-dlp",
        tier: "premium",
        name: "Forcepoint DLP",
        shortDescription: "Enterprise data protection",
        description:
          "Forcepoint Data Loss Prevention provides enterprise-grade protection for sensitive data with advanced analytics and behavioral monitoring.",
        pros: [
          "Advanced analytics",
          "Behavioral monitoring",
          "Comprehensive coverage",
          "Regulatory compliance features",
        ],
        cons: ["Premium pricing", "Complex implementation", "Requires specialized expertise"],
        pricing: "Starting at ₹4,175 per user annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.forcepoint.com/product/dlp-data-loss-prevention",
        pricingPage: "https://www.forcepoint.com/form/contact-us",
        setupTime: "4+ weeks with security team",
        recommendedTimeline: "Within 6 weeks",
        requiredResources: "Dedicated security team with DLP experience",
        organizationSize: "Large organizations (100+ employees)",
        effortHours: "160+",
        priority: "Medium",
        estimatedCostRange: "₹2,08,750+/year for 50 users",
        icon: FileText,
        calculateEffort: (dataTypes) => {
          // Base effort + additional effort based on data types
          const baseEffort = 160
          const numDataTypes = typeof dataTypes === "string" ? dataTypes.split(",").length : 1
          const additionalEffort = numDataTypes * 20
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}+`
        },
        calculateTimeline: (dataTypes) => {
          // Base timeline + additional time based on data types
          const baseTimeline = 4
          const numDataTypes = typeof dataTypes === "string" ? dataTypes.split(",").length : 1
          const additionalTimeline = numDataTypes
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (dataTypes) => {
          // Cost based on number of users (assuming 50 users)
          const users = 50
          const annualCost = users * 4175
          return `₹${annualCost.toLocaleString()}/year for ${users} users`
        },
      },
    ],
  },
  {
    id: 6,
    category: "PII Protection",
    text: "Is there Personally Identifiable Information (PII) redaction technology in place?",
    description: "PII redaction technology helps protect sensitive personal information from unauthorized access.",
    helpText:
      "This includes tools that automatically identify and redact personal information from documents and data.",
    icon: Eye,
    subQuestion: {
      id: "pii-volume",
      text: "What volume of documents containing PII does your organization process?",
      placeholder: "Enter approximate number of documents monthly",
      unit: "documents/month",
      defaultValue: 100,
      min: 1,
    },
    recommendations: [
      {
        id: "pdf-redact-tools",
        tier: "open-source",
        name: "PDF Redact Tools",
        shortDescription: "Open-source PDF redaction",
        description:
          "PDF Redact Tools is a free, open-source tool that helps redact sensitive information from PDF documents.",
        pros: [
          "Free and open-source",
          "Command-line interface for automation",
          "Permanently removes sensitive data",
          "Works with PDF documents",
        ],
        cons: ["Limited to PDF format", "Manual processing required", "No GUI interface", "Limited features"],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://github.com/firstlookmedia/pdf-redact-tools",
        pricingPage: "https://github.com/firstlookmedia/pdf-redact-tools",
        setupTime: "4+ weeks for technical setup",
        recommendedTimeline: "Within 6 weeks",
        requiredResources: "Developer for setup and automation",
        organizationSize: "Small organizations (5-50 employees)",
        effortHours: "160+",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Eye,
        calculateEffort: (documents) => {
          // Base effort + additional effort based on document volume
          const baseEffort = 160
          const additionalEffort = Math.ceil(documents / 100) * 20
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}+`
        },
        calculateTimeline: (documents) => {
          // Base timeline + additional time based on document volume
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(documents / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (documents) => {
          return "₹0"
        },
      },
      {
        id: "vera-redaction",
        tier: "standard",
        name: "Vera Redaction",
        shortDescription: "Document redaction solution",
        description:
          "Vera Redaction provides automated redaction capabilities for sensitive information in various document formats.",
        pros: [
          "User-friendly interface",
          "Supports multiple document formats",
          "Automated redaction capabilities",
          "Audit trail for compliance",
        ],
        cons: ["Subscription cost scales with users", "Limited advanced features", "May require customization"],
        pricing: "Approximately ₹835 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.vera.com/",
        pricingPage: "https://www.vera.com/contact/",
        setupTime: "2-3 weeks with IT support",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "IT administrator for setup and user training",
        organizationSize: "Small to medium organizations (10-100 employees)",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹1,00,200+/year for 10 users",
        icon: Eye,
        calculateEffort: (documents) => {
          // Base effort + additional effort based on document volume
          const baseEffort = 80
          const additionalEffort = Math.ceil(documents / 100) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (documents) => {
          // Base timeline + additional time based on document volume
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(documents / 500)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (documents) => {
          // Cost based on number of users needed
          const usersNeeded = Math.max(10, Math.ceil(documents / 100))
          const monthlyCost = usersNeeded * 835
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year for ${usersNeeded} users`
        },
      },
      {
        id: "ibm-watson-discovery",
        tier: "premium",
        name: "IBM Watson Discovery with Redaction",
        shortDescription: "AI-powered document analysis",
        description:
          "IBM Watson Discovery with redaction capabilities uses AI to automatically identify and redact sensitive information from documents.",
        pros: ["AI-powered redaction", "Automated document processing", "Advanced analytics", "Comprehensive coverage"],
        cons: ["Premium pricing", "Complex implementation", "Requires specialized expertise"],
        pricing: "Starting at ₹41,750 per month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.ibm.com/cloud/watson-discovery",
        pricingPage: "https://www.ibm.com/products/watson-discovery/pricing",
        setupTime: "3-4 weeks with IT team",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "Dedicated IT team with AI/ML experience",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "120–160",
        priority: "Medium",
        estimatedCostRange: "₹5,01,000+/year",
        icon: Eye,
        calculateEffort: (documents) => {
          // Base effort + additional effort based on document volume
          const baseEffort = 120
          const additionalEffort = Math.ceil(documents / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (documents) => {
          // Base timeline + additional time based on document volume
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(documents / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (documents) => {
          // Base cost + additional cost based on document volume
          const baseCost = 41750 * 12 // Annual cost
          const additionalCost = Math.ceil(documents / 100) * 5000
          const totalCost = baseCost + additionalCost
          return `₹${totalCost.toLocaleString()}/year`
        },
      },
    ],
  },
  {
    id: 7,
    category: "Security Awareness",
    text: "Is there annual or quarterly security awareness training for employees?",
    description: "Security awareness training helps employees recognize and respond to security threats.",
    helpText: "This includes phishing simulations, social engineering awareness, and security best practices training.",
    icon: Users,
    subQuestion: {
      id: "training-employees",
      text: "How many employees require security awareness training?",
      placeholder: "Enter number of employees",
      unit: "employees",
      defaultValue: 50,
      min: 1,
    },
    recommendations: [
      {
        id: "staysafeonline",
        tier: "open-source",
        name: "StaySafeOnline Materials",
        shortDescription: "Free security awareness resources",
        description:
          "StaySafeOnline provides free security awareness training materials and resources for organizations of all sizes.",
        pros: ["Free resources", "Regularly updated content", "Variety of topics covered", "Ready-to-use materials"],
        cons: ["Limited tracking capabilities", "No automated phishing simulations", "Requires internal management"],
        pricing: "Free",
        pricingModel: "Free resources",
        officialWebsite: "https://staysafeonline.org/",
        pricingPage: "https://staysafeonline.org/resources/",
        setupTime: "2-3 weeks for program development",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Internal trainer or security champion",
        organizationSize: "Small organizations (5-50 employees)",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: Users,
        calculateEffort: (employees) => {
          // Base effort + additional effort based on employee count
          const baseEffort = 80
          const additionalEffort = Math.ceil(employees / 25) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (employees) => {
          // Base timeline + additional time based on employee count
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(employees / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (employees) => {
          return "₹0"
        },
      },
      {
        id: "knowbe4",
        tier: "standard",
        name: "KnowBe4 Security Awareness Training",
        shortDescription: "Comprehensive training platform",
        description:
          "KnowBe4 provides a comprehensive security awareness training platform with phishing simulations, training modules, and compliance tracking.",
        pros: [
          "Extensive training library",
          "Automated phishing simulations",
          "User-friendly dashboard",
          "Compliance reporting",
        ],
        cons: [
          "Subscription cost scales with users",
          "Advanced features require higher tiers",
          "May require customization",
        ],
        pricing: "Starting at ₹835 per user annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.knowbe4.com/",
        pricingPage: "https://www.knowbe4.com/pricing-kevin-mitnick-security-awareness-training/",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator for setup and management",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹41,750+/year for 50 employees",
        icon: Users,
        calculateEffort: (employees) => {
          // Base effort + additional effort based on employee count
          const baseEffort = 40
          const additionalEffort = Math.ceil(employees / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (employees) => {
          // Base timeline + additional time based on employee count
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(employees / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (employees) => {
          // Cost based on number of employees
          const annualCost = employees * 835
          return `₹${annualCost.toLocaleString()}/year`
        },
      },
      {
        id: "sans-security-awareness",
        tier: "premium",
        name: "SANS Security Awareness Training",
        shortDescription: "Expert-led security training",
        description:
          "SANS Security Awareness Training provides expert-led security awareness training with comprehensive content and deployment program support.",
        pros: [
          "Industry-leading content quality",
          "Comprehensive training materials",
          "Expert-led instruction",
          "Regular content updates",
        ],
        cons: ["Premium pricing", "May require additional resources to manage", "Complex for small organizations"],
        pricing: "Approximately ₹4,175 per user annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.sans.org/security-awareness-training/",
        pricingPage: "https://www.sans.org/security-awareness-training/pricing/",
        setupTime: "2-3 weeks with security team",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Security team for program management",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹2,08,750+/year for 50 employees",
        icon: Users,
        calculateEffort: (employees) => {
          // Base effort + additional effort based on employee count
          const baseEffort = 80
          const additionalEffort = Math.ceil(employees / 25) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (employees) => {
          // Base timeline + additional time based on employee count
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(employees / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (employees) => {
          // Cost based on number of employees
          const annualCost = employees * 4175
          return `₹${annualCost.toLocaleString()}/year`
        },
      },
    ],
  },
  {
    id: 8,
    category: "Secure Remote Access",
    text: "Is VPN technology or Zero Trust architecture in place?",
    description: "Secure remote access solutions help protect access to corporate resources from outside the network.",
    helpText: "This includes VPN, Zero Trust Network Access (ZTNA), and other secure remote access technologies.",
    icon: Network,
    subQuestion: {
      id: "remote-users",
      text: "How many remote users require secure access?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 25,
      min: 1,
    },
    recommendations: [
      {
        id: "openvpn",
        tier: "open-source",
        name: "OpenVPN",
        shortDescription: "Open-source VPN solution",
        description:
          "OpenVPN is a free, open-source VPN solution that provides secure remote access to corporate resources.",
        pros: ["Free and open-source", "Strong encryption", "Cross-platform support", "Active community"],
        cons: [
          "Complex setup and configuration",
          "Limited scalability",
          "Requires technical expertise",
          "Limited support options",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://openvpn.net/community/",
        pricingPage: "https://openvpn.net/community/",
        setupTime: "2-3 weeks with IT support",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "IT administrator with networking experience",
        organizationSize: "Small to medium organizations (5-100 employees)",
        effortHours: "80–120",
        priority: "High",
        estimatedCostRange: "₹0",
        icon: Network,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 80
          const additionalEffort = Math.ceil(users / 25) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(users / 50)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          return "₹0"
        },
      },
      {
        id: "nordlayer",
        tier: "standard",
        name: "NordLayer (formerly NordVPN Teams)",
        shortDescription: "Business VPN solution",
        description:
          "NordLayer is a business VPN solution that provides secure remote access with easy deployment and management.",
        pros: ["User-friendly interface", "Easy deployment", "Centralized management", "24/7 support"],
        cons: [
          "Subscription cost scales with users",
          "Limited advanced features",
          "May not meet all enterprise requirements",
        ],
        pricing: "Starting at ₹585 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://nordlayer.com/",
        pricingPage: "https://nordlayer.com/pricing/",
        setupTime: "3-4 weeks with IT support",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "IT administrator for deployment and management",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "120–160",
        priority: "High",
        estimatedCostRange: "₹1,75,500+/year for 25 users",
        icon: Network,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 120
          const additionalEffort = Math.ceil(users / 20) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(users / 50)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Cost based on number of users
          const monthlyCost = users * 585
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year`
        },
      },
      {
        id: "zscaler-zero-trust",
        tier: "premium",
        name: "Zscaler Zero Trust Exchange",
        shortDescription: "Enterprise zero trust platform",
        description:
          "Zscaler Zero Trust Exchange is a cloud-native security platform that provides secure access to applications and resources based on zero trust principles.",
        pros: [
          "Comprehensive zero trust architecture",
          "Cloud-native solution",
          "Advanced security features",
          "Global cloud platform",
        ],
        cons: ["Premium pricing", "Complex implementation", "Requires specialized expertise"],
        pricing: "Custom pricing",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.zscaler.com/products/zscaler-zero-trust-exchange",
        pricingPage: "https://www.zscaler.com/company/contact",
        setupTime: "4-5 weeks with security team",
        recommendedTimeline: "Within 5 weeks",
        requiredResources: "Dedicated security team with zero trust experience",
        organizationSize: "Medium to large organizations (100+ employees)",
        effortHours: "160–200",
        priority: "Medium",
        estimatedCostRange: "Custom pricing, typically ₹8,35,000+/year",
        icon: Network,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 160
          const additionalEffort = Math.ceil(users / 20) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 5
          const additionalTimeline = Math.ceil(users / 50)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Custom pricing, estimate based on user count
          const estimatedCost = Math.max(835000, users * 10000)
          return `Custom pricing, typically ₹${estimatedCost.toLocaleString()}+/year`
        },
      },
    ],
  },
  {
    id: 9,
    category: "Physical Access Control",
    text: "Is there FaceID or fingerprint ID physical access control to the premises?",
    description: "Biometric access control systems help secure physical access to facilities.",
    helpText: "This includes facial recognition, fingerprint scanners, and other biometric authentication methods.",
    icon: Lock,
    subQuestion: {
      id: "entry-points",
      text: "How many entry points require biometric access control?",
      placeholder: "Enter number of entry points",
      unit: "entry points",
      defaultValue: 3,
      min: 1,
    },
    recommendations: [
      {
        id: "zkteco-biometric",
        tier: "standard",
        name: "ZKTeco Biometric Access Control",
        shortDescription: "Affordable biometric access solution",
        description:
          "ZKTeco provides affordable biometric access control systems with fingerprint, facial recognition, and RFID capabilities.",
        pros: [
          "Cost-effective solution",
          "Multiple authentication methods",
          "Easy installation",
          "Centralized management",
        ],
        cons: ["Limited advanced features", "May require additional hardware", "Limited integration options"],
        pricing: "Approximately ₹41,750 per entry point",
        pricingModel: "One-time purchase",
        officialWebsite: "https://www.zkteco.com/",
        pricingPage: "https://www.zkteco.com/en/contact_us",
        setupTime: "2-3 weeks for installation",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Facilities team and IT support",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹1,25,250 for 3 entry points",
        icon: Lock,
        calculateEffort: (entryPoints) => {
          // Base effort + additional effort based on entry points
          const baseEffort = 80
          const additionalEffort = entryPoints * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (entryPoints) => {
          // Base timeline + additional time based on entry points
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(entryPoints / 5)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (entryPoints) => {
          // Cost based on number of entry points
          const totalCost = entryPoints * 41750
          return `₹${totalCost.toLocaleString()} for ${entryPoints} entry point${entryPoints > 1 ? "s" : ""}`
        },
      },
      {
        id: "hid-global-biometric",
        tier: "premium",
        name: "HID Global Biometric Access Control",
        shortDescription: "Enterprise-grade access control",
        description:
          "HID Global provides enterprise-grade biometric access control systems with advanced security features and integration capabilities.",
        pros: [
          "Enterprise-grade security",
          "Advanced integration capabilities",
          "Comprehensive management system",
          "High reliability and durability",
        ],
        cons: ["Premium pricing", "Complex implementation", "Requires specialized expertise"],
        pricing: "Approximately ₹83,500–₹1,67,000 per entry point",
        pricingModel: "One-time purchase + maintenance",
        officialWebsite: "https://www.hidglobal.com/",
        pricingPage: "https://www.hidglobal.com/contact-us",
        setupTime: "3-4 weeks for installation",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "Facilities team, IT support, and security team",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "120–160",
        priority: "Medium",
        estimatedCostRange: "₹2,50,500–₹5,01,000 for 3 entry points",
        icon: Lock,
        calculateEffort: (entryPoints) => {
          // Base effort + additional effort based on entry points
          const baseEffort = 120
          const additionalEffort = entryPoints * 15
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (entryPoints) => {
          // Base timeline + additional time based on entry points
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(entryPoints / 3)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (entryPoints) => {
          // Cost based on number of entry points
          const minCost = entryPoints * 83500
          const maxCost = entryPoints * 167000
          return `₹${minCost.toLocaleString()}–₹${maxCost.toLocaleString()} for ${entryPoints} entry point${entryPoints > 1 ? "s" : ""}`
        },
      },
    ],
  },
  {
    id: 10,
    category: "Video Surveillance",
    text: "Is there CCTV camera monitoring in place for the office premises?",
    description: "CCTV monitoring helps secure physical premises and provides evidence in case of security incidents.",
    helpText: "This includes cameras, recording systems, and monitoring capabilities forr physical security.",
    icon: Camera,
    subQuestion: {
      id: "cctv-areas",
      text: "How many areas or rooms require CCTV monitoring?",
      placeholder: "Enter number of areas",
      unit: "areas",
      defaultValue: 5,
      min: 1,
    },
    recommendations: [
      {
        id: "hikvision-dvr",
        tier: "standard",
        name: "Hikvision DVR Kit",
        shortDescription: "Cost-effective CCTV solution",
        description:
          "Hikvision DVR kits provide cost-effective CCTV monitoring solutions with reliable cameras and recording capabilities.",
        pros: ["Cost-effective solution", "Easy installation", "Reliable performance", "Remote viewing capabilities"],
        cons: ["Limited advanced features", "May require professional installation", "Limited scalability"],
        pricing: "Approximately ₹25,050–₹83,500 for a basic 4–8 camera setup",
        pricingModel: "One-time purchase",
        officialWebsite: "https://www.hikvision.com/",
        pricingPage: "https://www.hikvision.com/en/support/contact-us/",
        setupTime: "1-2 weeks for installation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "Facilities team and IT support",
        organizationSize: "Small to medium organizations (5-100 employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹25,050–₹83,500 for basic setup",
        icon: Camera,
        calculateEffort: (areas) => {
          // Base effort + additional effort based on areas
          const baseEffort = 40
          const additionalEffort = Math.ceil(areas / 2) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (areas) => {
          // Base timeline + additional time based on areas
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(areas / 10)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (areas) => {
          // Cost based on number of areas
          const camerasNeeded = Math.max(4, areas)
          const costPerCamera = 6000
          const baseCost = 25050 // DVR and basic setup
          const totalCost = baseCost + camerasNeeded * costPerCamera
          return `₹${totalCost.toLocaleString()} for ${camerasNeeded} cameras`
        },
      },
      {
        id: "arlo-pro",
        tier: "premium",
        name: "Arlo Pro Wireless Camera System",
        shortDescription: "Wireless security camera system",
        description:
          "Arlo Pro provides a wireless security camera system with advanced features like cloud storage, motion detection, and mobile app access.",
        pros: ["Wireless installation", "Cloud storage", "Advanced motion detection", "Mobile app access"],
        cons: ["Higher cost", "Requires good Wi-Fi coverage", "Subscription for advanced features"],
        pricing: "Starting at ₹41,750 for a 3-camera system",
        pricingModel: "One-time purchase + optional subscription",
        officialWebsite: "https://www.arlo.com/",
        pricingPage: "https://www.arlo.com/en-us/pricing.html",
        setupTime: "1-2 weeks for installation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT support for setup and configuration",
        organizationSize: "Small to medium organizations (5-100 employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹41,750+ for basic setup",
        icon: Camera,
        calculateEffort: (areas) => {
          // Base effort + additional effort based on areas
          const baseEffort = 40
          const additionalEffort = Math.ceil(areas / 3) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (areas) => {
          // Base timeline + additional time based on areas
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(areas / 15)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (areas) => {
          // Cost based on number of areas
          const camerasNeeded = Math.max(3, areas)
          const costPerCamera = 12000
          const baseCost = 41750 // Base system cost
          const totalCost = baseCost + (camerasNeeded - 3) * costPerCamera
          return `₹${totalCost.toLocaleString()} for ${camerasNeeded} cameras`
        },
      },
    ],
  },
  {
    id: 11,
    category: "Fire Safety",
    text: "Are there fire extinguishers placed at designated locations within the premises?",
    description: "Fire extinguishers are essential for emergency response to small fires.",
    helpText: "This includes proper placement, maintenance, and staff training on fire extinguisher use.",
    icon: Flame,
    subQuestion: {
      id: "extinguisher-count",
      text: "How many extinguishers are required, based on the size and layout of the premises?",
      placeholder: "Enter number of extinguishers",
      unit: "extinguishers",
      defaultValue: 5,
      min: 1,
    },
    recommendations: [
      {
        id: "abc-extinguishers",
        tier: "standard",
        name: "ABC-rated Fire Extinguishers",
        shortDescription: "Standard fire safety equipment",
        description:
          "ABC-rated fire extinguishers are versatile and can handle most common types of fires, including those involving paper, wood, flammable liquids, and electrical equipment.",
        pros: [
          "Versatile for multiple fire types",
          "Cost-effective solution",
          "Easy to install and maintain",
          "Meets basic compliance requirements",
        ],
        cons: [
          "Requires regular maintenance",
          "Staff training needed for proper use",
          "May not be sufficient for specialized environments",
        ],
        pricing: "Approximately ₹4,175–₹8,350 per unit",
        pricingModel: "One-time purchase + maintenance",
        officialWebsite: "https://www.fireextinguishersdirect.co.uk/",
        pricingPage: "https://www.fireextinguishersdirect.co.uk/fire-extinguishers",
        setupTime: "1-2 weeks for procurement and installation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "Facilities team for installation",
        organizationSize: "Organizations of all sizes",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹20,875–₹41,750 for 5 units",
        icon: Flame,
        calculateEffort: (extinguishers) => {
          // Base effort + additional effort based on number of extinguishers
          const baseEffort = 40
          const additionalEffort = Math.ceil(extinguishers / 10) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (extinguishers) => {
          // Base timeline + additional time based on number of extinguishers
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(extinguishers / 20)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (extinguishers) => {
          // Cost based on number of extinguishers
          const minCost = extinguishers * 4175
          const maxCost = extinguishers * 8350
          return `₹${minCost.toLocaleString()}–₹${maxCost.toLocaleString()} for ${extinguishers} units`
        },
      },
      {
        id: "fire-safety-company",
        tier: "premium",
        name: "Professional Fire Safety Assessment",
        shortDescription: "Comprehensive fire safety solution",
        description:
          "A professional fire safety company will assess your premises, recommend appropriate fire extinguisher types and placements, and provide installation and maintenance services.",
        pros: [
          "Expert assessment of requirements",
          "Professional installation",
          "Ongoing maintenance and support",
          "Comprehensive compliance documentation",
        ],
        cons: ["Higher initial cost", "May require scheduling for assessment", "Ongoing service contracts"],
        pricing: "Custom pricing, starting at ₹41,750",
        pricingModel: "Assessment + installation + maintenance contract",
        officialWebsite: "https://www.firesafetyservices.co.uk/",
        pricingPage: "https://www.firesafetyservices.co.uk/contact-us/",
        setupTime: "1-2 weeks for assessment and installation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "Coordination with facilities team",
        organizationSize: "Medium to large organizations (25+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹41,750+ for assessment and installation",
        icon: Flame,
        calculateEffort: (extinguishers) => {
          // Base effort + additional effort based on number of extinguishers
          const baseEffort = 40
          const additionalEffort = Math.ceil(extinguishers / 10) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (extinguishers) => {
          // Base timeline + additional time based on number of extinguishers
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(extinguishers / 15)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (extinguishers) => {
          // Base assessment cost + per extinguisher cost
          const assessmentCost = 41750
          const perExtinguisherCost = 10000
          const totalCost = assessmentCost + extinguishers * perExtinguisherCost
          return `₹${totalCost.toLocaleString()} for assessment and ${extinguishers} units`
        },
      },
    ],
  },
  {
    id: 12,
    category: "Physical Infrastructure",
    text: "Are cables carrying power, data, or supporting information services protected from interception, interference, or damage?",
    description: "Cable protection helps prevent physical tampering, damage, and unauthorized access to data.",
    helpText:
      "This includes proper cable management, conduits, shielding, and physical security measures for cable infrastructure.",
    icon: Cable,
    subQuestion: {
      id: "cable-length",
      text: "How many meters of cabling need protection or reinstallation?",
      placeholder: "Enter length in meters",
      unit: "meters",
      defaultValue: 100,
      min: 1,
    },
    recommendations: [
      {
        id: "cable-conduits",
        tier: "standard",
        name: "Protective Conduits and Shielding",
        shortDescription: "Basic cable protection solution",
        description:
          "Protective conduits and shielding provide physical protection for cables against damage, interference, and unauthorized access.",
        pros: [
          "Cost-effective solution",
          "Relatively easy installation",
          "Provides basic protection",
          "Suitable for most office environments",
        ],
        cons: [
          "May require some disruption during installation",
          "Limited protection against sophisticated attacks",
          "Requires proper planning for future expansion",
        ],
        pricing: "Approximately ₹167–₹418 per meter",
        pricingModel: "One-time purchase + installation",
        officialWebsite: "https://www.panduit.com/",
        pricingPage: "https://www.panduit.com/en/support/contact-us.html",
        setupTime: "2-3 weeks for installation",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Facilities team or IT support",
        organizationSize: "Organizations of all sizes",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹16,700–₹41,800 for 100 meters",
        icon: Cable,
        calculateEffort: (meters) => {
          // Base effort + additional effort based on cable length
          const baseEffort = 80
          const additionalEffort = Math.ceil(meters / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (meters) => {
          // Base timeline + additional time based on cable length
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(meters / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (meters) => {
          // Cost based on cable length
          const minCost = meters * 167
          const maxCost = meters * 418
          return `₹${minCost.toLocaleString()}–₹${maxCost.toLocaleString()} for ${meters} meters`
        },
      },
      {
        id: "professional-cabling",
        tier: "premium",
        name: "Professional Cabling Company",
        shortDescription: "Enterprise-grade cable management",
        description:
          "A professional cabling company will assess your infrastructure, design a comprehensive cable management system, and provide professional installation with proper documentation.",
        pros: [
          "Expert assessment and design",
          "Professional installation",
          "Comprehensive documentation",
          "Future-proof planning",
        ],
        cons: ["Higher cost", "May require significant downtime", "Requires coordination with IT and facilities"],
        pricing: "Custom pricing, starting at ₹41,750 for small offices",
        pricingModel: "Assessment + design + installation",
        officialWebsite: "https://www.blackbox.com/",
        pricingPage: "https://www.blackbox.com/en-us/contact-us",
        setupTime: "4-5 weeks for assessment, design, and installation",
        recommendedTimeline: "Within 5 weeks",
        requiredResources: "IT team and facilities coordination",
        organizationSize: "Medium to large organizations (25+ employees)",
        effortHours: "160–200",
        priority: "Medium",
        estimatedCostRange: "₹41,750+ for assessment and installation",
        icon: Cable,
        calculateEffort: (meters) => {
          // Base effort + additional effort based on cable length
          const baseEffort = 160
          const additionalEffort = Math.ceil(meters / 25) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (meters) => {
          // Base timeline + additional time based on cable length
          const baseTimeline = 5
          const additionalTimeline = Math.ceil(meters / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (meters) => {
          // Base assessment cost + per meter cost
          const baseCost = 41750
          const perMeterCost = 500
          const totalCost = baseCost + meters * perMeterCost
          return `₹${totalCost.toLocaleString()} for ${meters} meters`
        },
      },
    ],
  },
  {
    id: 13,
    category: "Endpoint Security",
    text: "Do you have endpoint protection (e.g., antivirus, device encryption) implemented?",
    description: "Endpoint protection helps secure devices from malware, unauthorized access, and data breaches.",
    helpText:
      "This includes antivirus software, device encryption, application control, and other endpoint security measures.",
    icon: ShieldAlert,
    subQuestion: {
      id: "endpoint-count",
      text: "How many devices require endpoint protection?",
      placeholder: "Enter number of devices",
      unit: "devices",
      defaultValue: 25,
      min: 1,
    },
    recommendations: [
      {
        id: "norton-mcafee",
        tier: "standard",
        name: "Norton or McAfee Endpoint Security",
        shortDescription: "Standard endpoint protection",
        description:
          "Norton and McAfee provide comprehensive endpoint security solutions that include antivirus, firewall, device encryption, and web protection features.",
        pros: [
          "Comprehensive protection",
          "User-friendly interface",
          "Regular updates",
          "Centralized management console",
        ],
        cons: [
          "May impact system performance",
          "Limited advanced threat protection",
          "May require additional solutions for complete security",
        ],
        pricing: "Approximately ₹2,505 per device annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.norton.com/products/norton-360-for-business",
        pricingPage: "https://www.norton.com/products/norton-360-for-business",
        setupTime: "1-2 weeks for deployment",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator for deployment and management",
        organizationSize: "Small to medium organizations (5-250 employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹62,625/year for 25 devices",
        icon: ShieldAlert,
        calculateEffort: (devices) => {
          // Base effort + additional effort based on device count
          const baseEffort = 40
          const additionalEffort = Math.ceil(devices / 25) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (devices) => {
          // Base timeline + additional time based on device count
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(devices / 100)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (devices) => {
          // Cost based on number of devices
          const annualCost = devices * 2505
          return `₹${annualCost.toLocaleString()}/year for ${devices} devices`
        },
      },
      {
        id: "crowdstrike-falcon",
        tier: "premium",
        name: "CrowdStrike Falcon",
        shortDescription: "Advanced endpoint protection",
        description:
          "CrowdStrike Falcon is an enterprise-grade endpoint protection platform that uses AI and behavioral analytics to detect and prevent advanced threats.",
        pros: [
          "Advanced threat detection",
          "Minimal performance impact",
          "Cloud-based management",
          "Comprehensive visibility and reporting",
        ],
        cons: ["Premium pricing", "Complex deployment", "May require specialized expertise"],
        pricing: "Starting at ₹5,009 per device annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.crowdstrike.com/",
        pricingPage: "https://www.crowdstrike.com/products/endpoint-security/",
        setupTime: "2-3 weeks for deployment",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Security team for deployment and management",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "80–120",
        priority: "High",
        estimatedCostRange: "₹1,25,225+/year for 25 devices",
        icon: ShieldAlert,
        calculateEffort: (devices) => {
          // Base effort + additional effort based on device count
          const baseEffort = 80
          const additionalEffort = Math.ceil(devices / 20) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (devices) => {
          // Base timeline + additional time based on device count
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(devices / 50)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (devices) => {
          // Cost based on number of devices
          const annualCost = devices * 5009
          return `₹${annualCost.toLocaleString()}/year for ${devices} devices`
        },
      },
    ],
  },
  {
    id: 14,
    category: "Access Management",
    text: "Are privileged access rights restricted and monitored?",
    description: "Privileged access management helps control and monitor access to critical systems and data.",
    helpText:
      "This includes restricting administrative privileges, monitoring privileged user activities, and implementing least privilege principles.",
    icon: UserCog,
    subQuestion: {
      id: "privileged-users",
      text: "How many users or accounts need to be monitored and restricted?",
      placeholder: "Enter number of privileged users",
      unit: "users",
      defaultValue: 10,
      min: 1,
    },
    recommendations: [
      {
        id: "manageengine-pam",
        tier: "standard",
        name: "ManageEngine PAM360",
        shortDescription: "Privileged access management solution",
        description:
          "ManageEngine PAM360 provides comprehensive privileged access management capabilities, including password vaulting, session monitoring, and access control.",
        pros: ["Comprehensive PAM features", "User-friendly interface", "Scalable solution", "Detailed audit trails"],
        cons: [
          "Requires dedicated resources for management",
          "May require customization for specific needs",
          "Limited advanced features compared to premium solutions",
        ],
        pricing: "Starting at ₹83,500 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.manageengine.com/privileged-access-management/",
        pricingPage: "https://www.manageengine.com/privileged-access-management/get-quote.html",
        setupTime: "3-4 weeks for deployment",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "IT administrator with security experience",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "120–160",
        priority: "High",
        estimatedCostRange: "₹83,500+/year",
        icon: UserCog,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 120
          const additionalEffort = Math.ceil(users / 10) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 4
          const additionalTimeline = Math.ceil(users / 20)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Base cost + per user cost
          const baseCost = 83500
          const perUserCost = 5000
          const totalCost = baseCost + Math.max(0, users - 10) * perUserCost
          return `₹${totalCost.toLocaleString()}/year for ${users} users`
        },
      },
      {
        id: "cyberark-pam",
        tier: "premium",
        name: "CyberArk Privileged Access Management",
        shortDescription: "Enterprise-grade PAM solution",
        description:
          "CyberArk provides an enterprise-grade privileged access management solution with advanced features for securing, managing, and monitoring privileged accounts.",
        pros: [
          "Industry-leading PAM solution",
          "Comprehensive security features",
          "Advanced monitoring and analytics",
          "Enterprise-grade support",
        ],
        cons: ["Premium pricing", "Complex implementation", "Requires specialized expertise"],
        pricing: "Custom pricing, typically starting at ₹4,17,500 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.cyberark.com/",
        pricingPage: "https://www.cyberark.com/contact-us/",
        setupTime: "4-5 weeks for deployment",
        recommendedTimeline: "Within 5 weeks",
        requiredResources: "Dedicated security team with PAM experience",
        organizationSize: "Medium to large organizations (100+ employees)",
        effortHours: "160–200",
        priority: "High",
        estimatedCostRange: "₹4,17,500+/year",
        icon: UserCog,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 160
          const additionalEffort = Math.ceil(users / 5) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 5
          const additionalTimeline = Math.ceil(users / 10)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Base cost + per user cost
          const baseCost = 417500
          const perUserCost = 10000
          const totalCost = baseCost + users * perUserCost
          return `₹${totalCost.toLocaleString()}/year for ${users} users`
        },
      },
    ],
  },
  {
    id: 15,
    category: "Access Control",
    text: "Is access to information and assets restricted as per access control policies?",
    description: "Access control policies help ensure that only authorized users can access specific resources.",
    helpText:
      "This includes role-based access control, attribute-based access control, and other mechanisms to restrict access to information and assets.",
    icon: FileKey,
    subQuestion: {
      id: "asset-types",
      text: "What type of assets require access control (e.g., files, servers, applications)?",
      placeholder: "Enter asset types",
      unit: "",
      defaultValue: "Files, Servers, Applications",
      min: 0,
    },
    recommendations: [
      {
        id: "microsoft-group-policy",
        tier: "standard",
        name: "Microsoft Group Policy",
        shortDescription: "Windows-based access control",
        description:
          "Microsoft Group Policy provides centralized access control for Windows-based environments, allowing administrators to define and enforce security policies.",
        pros: [
          "Included with Windows Server",
          "Centralized management",
          "Extensive configuration options",
          "Integration with Active Directory",
        ],
        cons: [
          "Limited to Windows environments",
          "Complex for advanced scenarios",
          "Requires Windows Server infrastructure",
        ],
        pricing: "Included with Windows Server licensing",
        pricingModel: "Included with Windows Server",
        officialWebsite:
          "https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-security-configuration-framework/windows-security-baselines",
        pricingPage: "https://www.microsoft.com/en-us/windows-server/pricing",
        setupTime: "1-2 weeks for configuration",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with Windows Server experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "Included with Windows Server licensing",
        icon: FileKey,
        calculateEffort: (assetTypes) => {
          // Base effort + additional effort based on asset types
          const baseEffort = 40
          const numAssetTypes = typeof assetTypes === "string" ? assetTypes.split(",").length : 1
          const additionalEffort = numAssetTypes * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (assetTypes) => {
          // Base timeline + additional time based on asset types
          const baseTimeline = 2
          const numAssetTypes = typeof assetTypes === "string" ? assetTypes.split(",").length : 1
          const additionalTimeline = Math.ceil(numAssetTypes / 3)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (assetTypes) => {
          return "Included with Windows Server licensing"
        },
      },
      {
        id: "okta-access-management",
        tier: "premium",
        name: "Okta Access Management",
        shortDescription: "Cloud-based access control",
        description:
          "Okta Access Management provides cloud-based access control for applications, servers, and resources with single sign-on and multi-factor authentication.",
        pros: [
          "Cloud-based solution",
          "Platform-agnostic",
          "Extensive integration options",
          "Advanced security features",
        ],
        cons: [
          "Subscription cost scales with users",
          "Complex for advanced scenarios",
          "May require customization for specific needs",
        ],
        pricing: "Starting at ₹167 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.okta.com/products/access-management/",
        pricingPage: "https://www.okta.com/pricing/",
        setupTime: "1-2 weeks for configuration",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with identity management experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹2,00,400+/year for 100 users",
        icon: FileKey,
        calculateEffort: (assetTypes) => {
          // Base effort + additional effort based on asset types
          const baseEffort = 40
          const numAssetTypes = typeof assetTypes === "string" ? assetTypes.split(",").length : 1
          const additionalEffort = numAssetTypes * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (assetTypes) => {
          // Base timeline + additional time based on asset types
          const baseTimeline = 2
          const numAssetTypes = typeof assetTypes === "string" ? assetTypes.split(",").length : 1
          const additionalTimeline = Math.ceil(numAssetTypes / 3)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (assetTypes) => {
          // Assuming 100 users as a baseline
          const users = 100
          const monthlyCost = users * 167
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year for ${users} users`
        },
      },
    ],
  },
  {
    id: 16,
    category: "Development Security",
    text: "Is access to source code, development tools, and software libraries managed securely?",
    description:
      "Secure development practices help protect source code and prevent unauthorized access to development resources.",
    helpText:
      "This includes secure code repositories, access controls for development tools, and secure management of software libraries and dependencies.",
    icon: Code,
    subQuestion: {
      id: "dev-tools",
      text: "What tools or libraries are currently in use?",
      placeholder: "Enter development tools and libraries",
      unit: "",
      defaultValue: "GitHub, VS Code, npm",
      min: 0,
    },
    recommendations: [
      {
        id: "github-enterprise",
        tier: "standard",
        name: "GitHub Enterprise",
        shortDescription: "Secure code repository platform",
        description:
          "GitHub Enterprise provides secure source code management with access control features, code scanning, and secure development workflows.",
        pros: [
          "Comprehensive access controls",
          "Code scanning and security features",
          "Familiar developer experience",
          "Integration with CI/CD pipelines",
        ],
        cons: [
          "Subscription cost scales with users",
          "Requires proper configuration for security",
          "May require additional tools for complete security",
        ],
        pricing: "Starting at ₹1,754 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://github.com/enterprise",
        pricingPage: "https://github.com/pricing",
        setupTime: "1-2 weeks for configuration",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "DevOps engineer or IT administrator",
        organizationSize: "Small to large organizations (5+ developers)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹2,10,480+/year for 10 developers",
        icon: Code,
        calculateEffort: (tools) => {
          // Base effort + additional effort based on tools
          const baseEffort = 40
          const numTools = typeof tools === "string" ? tools.split(",").length : 1
          const additionalEffort = numTools * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (tools) => {
          // Base timeline + additional time based on tools
          const baseTimeline = 2
          const numTools = typeof tools === "string" ? tools.split(",").length : 1
          const additionalTimeline = Math.ceil(numTools / 5)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (tools) => {
          // Assuming 10 developers as a baseline
          const developers = 10
          const monthlyCost = developers * 1754
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year for ${developers} developers`
        },
      },
      {
        id: "snyk",
        tier: "premium",
        name: "Snyk for Advanced Dependency and Code Security",
        shortDescription: "Comprehensive code security platform",
        description:
          "Snyk provides advanced security for code, open source dependencies, containers, and infrastructure as code with continuous monitoring and remediation.",
        pros: [
          "Comprehensive security coverage",
          "Automated vulnerability detection",
          "Integration with development workflows",
          "Remediation advice",
        ],
        cons: ["Premium pricing", "Complex for advanced scenarios", "May require developer training"],
        pricing: "Starting at ₹4,092 per developer/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://snyk.io/",
        pricingPage: "https://snyk.io/plans/",
        setupTime: "3-4 weeks for implementation",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "DevOps engineer and security team",
        organizationSize: "Medium to large organizations (10+ developers)",
        effortHours: "120–160",
        priority: "High",
        estimatedCostRange: "₹4,91,040+/year for 10 developers",
        icon: Code,
        calculateEffort: (tools) => {
          // Base effort + additional effort based on tools
          const baseEffort = 120
          const numTools = typeof tools === "string" ? tools.split(",").length : 1
          const additionalEffort = numTools * 15
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (tools) => {
          // Base timeline + additional time based on tools
          const baseTimeline = 4
          const numTools = typeof tools === "string" ? tools.split(",").length : 1
          const additionalTimeline = Math.ceil(numTools / 3)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (tools) => {
          // Assuming 10 developers as a baseline
          const developers = 10
          const monthlyCost = developers * 4092
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year for ${developers} developers`
        },
      },
    ],
  },
  {
    id: 17,
    category: "Authentication",
    text: "Do you use secure authentication technologies, such as MFA?",
    description: "Multi-factor authentication adds an additional layer of security beyond passwords.",
    helpText:
      "This includes two-factor authentication (2FA), biometric authentication, and other methods to verify user identity.",
    icon: Key,
    subQuestion: {
      id: "mfa-users",
      text: "How many users need MFA solutions?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 50,
      min: 1,
    },
    recommendations: [
      {
        id: "google-microsoft-authenticator",
        tier: "standard",
        name: "Google Authenticator or Microsoft Authenticator",
        shortDescription: "Free MFA mobile apps",
        description:
          "Google Authenticator and Microsoft Authenticator are free mobile apps that provide time-based one-time passwords (TOTP) for multi-factor authentication.",
        pros: ["Free to use", "Easy to implement", "Widely supported", "User-friendly mobile apps"],
        cons: [
          "Limited enterprise management features",
          "No centralized reporting",
          "Limited support options",
          "Requires user device",
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.microsoft.com/en-us/security/mobile-authenticator-app",
        pricingPage: "https://www.microsoft.com/en-us/security/mobile-authenticator-app",
        setupTime: "1-2 weeks for implementation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator for configuration",
        organizationSize: "Small to medium organizations (5-100 employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹0",
        icon: Key,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 40
          const additionalEffort = Math.ceil(users / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(users / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          return "₹0"
        },
      },
      {
        id: "duo-security",
        tier: "premium",
        name: "Duo Security MFA",
        shortDescription: "Enterprise MFA solution",
        description:
          "Duo Security provides an enterprise-grade multi-factor authentication solution with advanced security features, user management, and reporting capabilities.",
        pros: [
          "Comprehensive MFA solution",
          "User-friendly interface",
          "Extensive integration options",
          "Advanced security features",
        ],
        cons: [
          "Subscription cost scales with users",
          "May require customization for specific needs",
          "Advanced features require higher tiers",
        ],
        pricing: "Starting at ₹251 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://duo.com/",
        pricingPage: "https://duo.com/pricing",
        setupTime: "1-2 weeks for implementation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with security experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹1,50,300+/year for 50 users",
        icon: Key,
        calculateEffort: (users) => {
          // Base effort + additional effort based on user count
          const baseEffort = 40
          const additionalEffort = Math.ceil(users / 50) * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (users) => {
          // Base timeline + additional time based on user count
          const baseTimeline = 2
          const additionalTimeline = Math.ceil(users / 200)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (users) => {
          // Cost based on number of users
          const monthlyCost = users * 251
          const annualCost = monthlyCost * 12
          return `₹${annualCost.toLocaleString()}/year for ${users} users`
        },
      },
    ],
  },
  {
    id: 18,
    category: "Monitoring",
    text: "Do you have resource monitoring and malware protection in place?",
    description: "Resource monitoring and malware protection help detect and prevent security incidents.",
    helpText:
      "This includes system monitoring, network monitoring, malware detection, and other security monitoring capabilities.",
    icon: Activity,
    subQuestion: {
      id: "monitoring-resources",
      text: "Which resources or endpoints require monitoring?",
      placeholder: "Enter resource types",
      unit: "",
      defaultValue: "Servers, Workstations, Network",
      min: 0,
    },
    recommendations: [
      {
        id: "solarwinds-npm",
        tier: "standard",
        name: "SolarWinds Network Performance Monitor",
        shortDescription: "Network monitoring solution",
        description:
          "SolarWinds Network Performance Monitor provides comprehensive network monitoring capabilities with performance analysis, alerting, and reporting features.",
        pros: [
          "Comprehensive network monitoring",
          "User-friendly interface",
          "Detailed performance metrics",
          "Customizable alerts and reports",
        ],
        cons: [
          "Significant investment required",
          "Complex implementation",
          "Limited malware protection features",
          "Requires additional solutions for complete security",
        ],
        pricing: "Starting at ₹1,25,250 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.solarwinds.com/network-performance-monitor",
        pricingPage: "https://www.solarwinds.com/network-performance-monitor/pricing",
        setupTime: "1-2 weeks for implementation",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with networking experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹1,25,250+/year",
        icon: Activity,
        calculateEffort: (resources) => {
          // Base effort + additional effort based on resource types
          const baseEffort = 40
          const numResources = typeof resources === "string" ? resources.split(",").length : 1
          const additionalEffort = numResources * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (resources) => {
          // Base timeline + additional time based on resource types
          const baseTimeline = 2
          const numResources = typeof resources === "string" ? resources.split(",").length : 1
          const additionalTimeline = Math.ceil(numResources / 3)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (resources) => {
          // Base cost + additional cost based on resource types
          const baseCost = 125250
          const numResources = typeof resources === "string" ? resources.split(",").length : 1
          const additionalCost = (numResources - 1) * 25000
          const totalCost = baseCost + Math.max(0, additionalCost)
          return `₹${totalCost.toLocaleString()}/year`
        },
      },
      {
        id: "crowdstrike-falcon-monitoring",
        tier: "premium",
        name: "CrowdStrike Falcon for Malware Protection",
        shortDescription: "Advanced endpoint protection and monitoring",
        description:
          "CrowdStrike Falcon provides advanced endpoint protection with real-time monitoring, threat detection, and response capabilities.",
        pros: [
          "Advanced threat detection",
          "Real-time monitoring",
          "Comprehensive protection",
          "Minimal performance impact",
        ],
        cons: ["Premium pricing", "Complex implementation", "Requires specialized expertise"],
        pricing: "Starting at ₹5,009 per device annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.crowdstrike.com/",
        pricingPage: "https://www.crowdstrike.com/products/endpoint-security/",
        setupTime: "3-4 weeks for implementation",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "Security team for deployment and management",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "120–160",
        priority: "High",
        estimatedCostRange: "₹2,50,450+/year for 50 devices",
        icon: Activity,
        calculateEffort: (resources) => {
          // Base effort + additional effort based on resource types
          const baseEffort = 120
          const numResources = typeof resources === "string" ? resources.split(",").length : 1
          const additionalEffort = numResources * 15
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (resources) => {
          // Base timeline + additional time based on resource types
          const baseTimeline = 4
          const numResources = typeof resources === "string" ? resources.split(",").length : 1
          const additionalTimeline = Math.ceil(numResources / 2)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (resources) => {
          // Assuming 50 devices as a baseline
          const devices = 50
          const annualCost = devices * 5009
          return `₹${annualCost.toLocaleString()}/year for ${devices} devices`
        },
      },
    ],
  },
  {
    id: 19,
    category: "Data Protection",
    text: "Is production data prevented from being used in non-production environments?",
    description:
      "Using production data in test or development environments can lead to data breaches and compliance issues.",
    helpText:
      "This includes data masking, synthetic data generation, and other techniques to protect sensitive production data.",
    icon: DatabaseIcon,
    subQuestion: {
      id: "data-protection-policies",
      text: "What policies or tools are currently in place to restrict production data usage?",
      placeholder: "Enter current policies or tools",
      unit: "",
      defaultValue: "None",
      min: 0,
    },
    recommendations: [
      {
        id: "faker-mockaroo",
        tier: "open-source",
        name: "Faker and Mockaroo",
        shortDescription: "Synthetic test data generation",
        description:
          "Faker and Mockaroo are open-source tools that generate realistic synthetic test data for development and testing environments, eliminating the need for production data.",
        pros: [
          "Free to use",
          "Easy to integrate with testing frameworks",
          "Customizable data generation",
          "No exposure of sensitive data",
        ],
        cons: [
          "Requires development effort to implement",
          "May not cover all complex data scenarios",
          "Limited enterprise support",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://fakerjs.dev/",
        pricingPage: "https://fakerjs.dev/",
        setupTime: "2-3 weeks for integration",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "Developer for implementation",
        organizationSize: "Organizations of all sizes",
        effortHours: "80–120",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: DatabaseIcon,
        calculateEffort: (policies) => {
          // Base effort + additional effort based on complexity
          const baseEffort = 80
          const additionalEffort = typeof policies === "string" && policies.toLowerCase() !== "none" ? 20 : 40
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (policies) => {
          // Base timeline + additional time based on complexity
          const baseTimeline = 3
          const additionalTimeline = typeof policies === "string" && policies.toLowerCase() !== "none" ? 0 : 1
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (policies) => {
          return "₹0"
        },
      },
      {
        id: "ibm-infosphere-optim",
        tier: "standard",
        name: "IBM InfoSphere Optim",
        shortDescription: "Data masking solution",
        description:
          "IBM InfoSphere Optim provides comprehensive data masking capabilities to protect sensitive production data when used in non-production environments.",
        pros: [
          "Enterprise-grade data masking",
          "Preserves data relationships",
          "Supports multiple database platforms",
          "Automated masking processes",
        ],
        cons: ["Significant investment required", "Complex implementation", "Requires specialized expertise"],
        pricing: "Custom pricing",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.ibm.com/products/infosphere-optim",
        pricingPage: "https://www.ibm.com/products/infosphere-optim/pricing",
        setupTime: "4-6 weeks for deployment",
        recommendedTimeline: "Within 6 weeks",
        requiredResources: "Database administrator and security team",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "160–240",
        priority: "High",
        estimatedCostRange: "Custom pricing, typically ₹16,70,000+/year",
        icon: DatabaseIcon,
        calculateEffort: (policies) => {
          // Base effort + additional effort based on complexity
          const baseEffort = 160
          const additionalEffort = typeof policies === "string" && policies.toLowerCase() !== "none" ? 40 : 80
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (policies) => {
          // Base timeline + additional time based on complexity
          const baseTimeline = 6
          const additionalTimeline = typeof policies === "string" && policies.toLowerCase() !== "none" ? 0 : 2
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (policies) => {
          return "Custom pricing, typically ₹16,70,000+/year"
        },
      },
      {
        id: "delphix-data-masking",
        tier: "premium",
        name: "Delphix Data Masking",
        shortDescription: "Real-time data protection",
        description:
          "Delphix Data Masking provides real-time production data protection with advanced masking algorithms and automated compliance controls.",
        pros: [
          "Real-time data protection",
          "Advanced masking algorithms",
          "Comprehensive compliance controls",
          "Enterprise-grade support",
        ],
        cons: ["Premium pricing", "Complex implementation", "Requires dedicated resources"],
        pricing: "Starting at ₹41,75,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.delphix.com/platform/data-masking",
        pricingPage: "https://www.delphix.com/contact",
        setupTime: "6-8 weeks for implementation",
        recommendedTimeline: "Within 8 weeks",
        requiredResources: "Dedicated data security team",
        organizationSize: "Large organizations (100+ employees)",
        effortHours: "240–320",
        priority: "High",
        estimatedCostRange: "₹41,75,000+/year",
        icon: DatabaseIcon,
        calculateEffort: (policies) => {
          // Base effort + additional effort based on complexity
          const baseEffort = 240
          const additionalEffort = typeof policies === "string" && policies.toLowerCase() !== "none" ? 40 : 80
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (policies) => {
          // Base timeline + additional time based on complexity
          const baseTimeline = 8
          const additionalTimeline = typeof policies === "string" && policies.toLowerCase() !== "none" ? 0 : 2
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (policies) => {
          return "₹41,75,000+/year"
        },
      },
    ],
  },
  {
    id: 20,
    category: "Security Testing",
    text: "Are audit tests, penetration tests, and other security assessments planned, documented, and approved by management?",
    description:
      "Regular security assessments help identify vulnerabilities and ensure compliance with security standards.",
    helpText:
      "This includes vulnerability scanning, penetration testing, security audits, and other assessment activities.",
    icon: ClipboardCheck,
    subQuestion: {
      id: "assessment-frequency",
      text: "How frequently are security assessments performed?",
      placeholder: "Enter frequency (e.g., quarterly, annually)",
      unit: "",
      defaultValue: "Annually",
      min: 0,
    },
    recommendations: [
      {
        id: "osstmm",
        tier: "open-source",
        name: "OSSTMM (Open Source Security Testing Methodology Manual)",
        shortDescription: "Self-assessment methodology",
        description:
          "OSSTMM provides a comprehensive methodology for security testing and assessment that can be implemented internally without specialized tools.",
        pros: [
          "Free to use",
          "Comprehensive methodology",
          "Industry-recognized standard",
          "Customizable to organizational needs",
        ],
        cons: [
          "Requires internal expertise",
          "Time-intensive implementation",
          "Limited automation capabilities",
          "No external validation",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://www.isecom.org/OSSTMM.3.pdf",
        pricingPage: "https://www.isecom.org/OSSTMM.3.pdf",
        setupTime: "3-4 weeks for documentation and implementation",
        recommendedTimeline: "Within 4 weeks",
        requiredResources: "Security analyst with assessment experience",
        organizationSize: "Small to medium organizations (10-100 employees)",
        effortHours: "120–160",
        priority: "Medium",
        estimatedCostRange: "₹0",
        icon: ClipboardCheck,
        calculateEffort: (frequency) => {
          // Base effort + additional effort based on frequency
          const baseEffort = 120
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 1.5 : 1
          const totalEffort = Math.round(baseEffort * frequencyFactor)
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (frequency) => {
          // Base timeline + additional time based on frequency
          const baseTimeline = 4
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 1.5 : 1
          const totalTimeline = Math.round(baseTimeline * frequencyFactor)
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (frequency) => {
          return "₹0"
        },
      },
      {
        id: "qualys-was",
        tier: "standard",
        name: "Qualys Web Application Scanning",
        shortDescription: "Automated vulnerability scanning",
        description:
          "Qualys Web Application Scanning provides automated vulnerability scanning for web applications with detailed reporting and remediation guidance.",
        pros: [
          "Automated scanning",
          "Detailed vulnerability reports",
          "Regular updates to vulnerability database",
          "Compliance reporting",
        ],
        cons: [
          "Limited to web applications",
          "May produce false positives",
          "Requires configuration for accurate results",
        ],
        pricing: "Starting at ₹2,50,500 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.qualys.com/apps/web-app-scanning/",
        pricingPage: "https://www.qualys.com/forms/web-app-scanning/",
        setupTime: "4-6 weeks for implementation",
        recommendedTimeline: "Within 6 weeks",
        requiredResources: "Security analyst for configuration and analysis",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "160–240",
        priority: "High",
        estimatedCostRange: "₹2,50,500+/year",
        icon: ClipboardCheck,
        calculateEffort: (frequency) => {
          // Base effort + additional effort based on frequency
          const baseEffort = 160
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 1.5 : 1
          const totalEffort = Math.round(baseEffort * frequencyFactor)
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (frequency) => {
          // Base timeline + additional time based on frequency
          const baseTimeline = 6
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 1.5 : 1
          const totalTimeline = Math.round(baseTimeline * frequencyFactor)
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (frequency) => {
          // Base cost + additional cost based on frequency
          const baseCost = 250500
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 2 : 1
          const totalCost = baseCost * frequencyFactor
          return `₹${totalCost.toLocaleString()}+/year`
        },
      },
      {
        id: "third-party-audit",
        tier: "premium",
        name: "Third-Party Security Auditing Firm",
        shortDescription: "Comprehensive security assessment",
        description:
          "Engaging a professional third-party security auditing firm provides comprehensive security assessments with expert analysis and recommendations.",
        pros: [
          "Independent expert assessment",
          "Comprehensive coverage",
          "Detailed recommendations",
          "Compliance certification",
        ],
        cons: ["Premium pricing", "Scheduling constraints", "May disrupt normal operations"],
        pricing: "Custom pricing, starting at ₹8,35,000 per audit",
        pricingModel: "Per audit",
        officialWebsite: "https://www.kpmg.com/cybersecurity",
        pricingPage: "https://www.kpmg.com/cybersecurity/contact",
        setupTime: "6-8 weeks for planning and execution",
        recommendedTimeline: "Within 8 weeks",
        requiredResources: "Management team and security coordinator",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "240–320",
        priority: "High",
        estimatedCostRange: "₹8,35,000+/audit",
        icon: ClipboardCheck,
        calculateEffort: (frequency) => {
          // Base effort + additional effort based on frequency
          const baseEffort = 240
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 1.5 : 1
          const totalEffort = Math.round(baseEffort * frequencyFactor)
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (frequency) => {
          // Base timeline + additional time based on frequency
          const baseTimeline = 8
          const frequencyFactor = typeof frequency === "string" && frequency.toLowerCase().includes("quart") ? 1.5 : 1
          const totalTimeline = Math.round(baseTimeline * frequencyFactor)
          return `Within ${totalTimeline} weeks`
        },
        calculateCost: (frequency) => {
          // Base cost + additional cost based on frequency
          const baseCost = 835000
          const frequencyMultiplier =
            typeof frequency === "string"
              ? frequency.toLowerCase().includes("quart")
                ? 4
                : frequency.toLowerCase().includes("semi")
                  ? 2
                  : 1
              : 1
          return `₹${baseCost.toLocaleString()}+/audit (${frequencyMultiplier}x per year)`
        },
      },
    ],
  },
  {
    id: 21,
    category: "Endpoint Security",
    text: "Are anti-malware solutions installed, regularly updated, and capable of detecting and responding to threats?",
    description: "Anti-malware solutions are essential for protecting endpoints from malicious software and cyber threats.",
    helpText: "This includes solutions that provide real-time protection, regular updates, and automated response capabilities.",
    icon: Shield,
    subQuestion: {
      id: "endpoint-count",
      text: "How many endpoints require anti-malware protection?",
      placeholder: "Enter number of endpoints",
      unit: "endpoints",
      defaultValue: 10,
      min: 1,
      max: 1000,
    },
    recommendations: [
      {
        id: "clamav",
        tier: "open-source",
        name: "ClamAV",
        shortDescription: "Open-source antivirus engine",
        description: "ClamAV is a free and open-source antivirus engine for detecting trojans, viruses, malware, and other malicious threats.",
        pros: [
          "Free and open-source",
          "Cross-platform support",
          "Regular updates",
          "Command-line interface"
        ],
        cons: [
          "Basic protection features",
          "Limited management interface",
          "Manual configuration required",
          "No centralized management"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.clamav.net",
        pricingPage: "https://www.clamav.net/downloads",
        setupTime: "2-3 days",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "1-2 servers for management",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹0 (self-hosted)",
        icon: Shield
      },
      {
        id: "malwarebytes-business",
        tier: "standard",
        name: "Malwarebytes for Business",
        shortDescription: "Business-grade endpoint protection",
        description: "Malwarebytes for Business provides comprehensive endpoint protection with advanced threat detection and response capabilities.",
        pros: [
          "User-friendly interface",
          "Real-time protection",
          "Centralized management",
          "Regular updates"
        ],
        cons: [
          "Per-endpoint licensing",
          "Limited advanced features",
          "Basic reporting",
          "No EDR capabilities"
        ],
        pricing: "Starting at $69.99 per endpoint/year",
        pricingModel: "Per Endpoint",
        officialWebsite: "https://www.malwarebytes.com/business",
        pricingPage: "https://www.malwarebytes.com/business/pricing",
        setupTime: "1-2 days",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Cloud-based management",
        organizationSize: "Medium",
        effortHours: "20-40",
        priority: "High",
        estimatedCostRange: "₹5,000-10,000/endpoint/year",
        icon: Shield
      },
      {
        id: "crowdstrike-falcon",
        tier: "premium",
        name: "CrowdStrike Falcon Prevent",
        shortDescription: "Enterprise-grade endpoint protection with EDR",
        description: "CrowdStrike Falcon Prevent provides advanced endpoint protection with EDR capabilities, threat intelligence, and automated response.",
        pros: [
          "Advanced threat detection",
          "EDR capabilities",
          "Cloud-native architecture",
          "AI-powered protection"
        ],
        cons: [
          "Higher cost",
          "Complex setup",
          "Requires dedicated team",
          "Steep learning curve"
        ],
        pricing: "Starting at $59.99 per device/year",
        pricingModel: "Per Device",
        officialWebsite: "https://www.crowdstrike.com/endpoint-security-products/falcon-prevent/",
        pricingPage: "https://www.crowdstrike.com/pricing/",
        setupTime: "3-5 days",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Dedicated security team",
        organizationSize: "Large Enterprise",
        effortHours: "60-100",
        priority: "High",
        estimatedCostRange: "₹4,500-8,000/device/year",
        icon: Shield
      }
    ]
  },
  {
    id: 22,
    category: "System Configuration",
    text: "Are all system clocks synchronized with an approved time source and monitored for accuracy?",
    description: "Accurate system time synchronization is crucial for security logging, authentication, and audit trails.",
    helpText: "This includes having a reliable time source and monitoring system to ensure all systems maintain accurate time.",
    icon: Clock,
    subQuestion: {
      id: "system-types",
      text: "Which systems require time synchronization?",
      placeholder: "Enter system types (e.g., servers, workstations, network devices)",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 100,
    },
    recommendations: [
      {
        id: "ntp",
        tier: "open-source",
        name: "NTP (Network Time Protocol)",
        shortDescription: "Free time synchronization solution",
        description: "NTP is a free and open-source protocol for synchronizing computer clocks over a network.",
        pros: [
          "Free and open-source",
          "Widely supported",
          "Highly accurate",
          "Low resource usage"
        ],
        cons: [
          "Manual configuration",
          "Basic monitoring",
          "No centralized management",
          "Requires technical expertise"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.ntp.org",
        pricingPage: "https://www.ntp.org/download.html",
        setupTime: "2-3 days",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "1-2 NTP servers",
        organizationSize: "Small to Medium",
        effortHours: "20-40",
        priority: "Medium",
        estimatedCostRange: "₹0 (self-hosted)",
        icon: Clock
      },
      {
        id: "w32time",
        tier: "standard",
        name: "Microsoft Windows Time Service (W32Time)",
        shortDescription: "Windows-based time synchronization",
        description: "W32Time is Microsoft's implementation of time synchronization for Windows environments.",
        pros: [
          "Native Windows support",
          "Easy configuration",
          "Active Directory integration",
          "Built-in monitoring"
        ],
        cons: [
          "Windows-only",
          "Limited advanced features",
          "Basic accuracy",
          "No cross-platform support"
        ],
        pricing: "Included with Windows Server licensing",
        pricingModel: "Included",
        officialWebsite: "https://docs.microsoft.com/en-us/windows-server/networking/windows-time-service/windows-time-service-top",
        pricingPage: "N/A",
        setupTime: "1-2 days",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Windows Server infrastructure",
        organizationSize: "Medium",
        effortHours: "20-40",
        priority: "Medium",
        estimatedCostRange: "₹0 (with existing Windows licensing)",
        icon: Clock
      },
      {
        id: "gps-time-sync",
        tier: "premium",
        name: "GPS-based Time Synchronization Appliance",
        shortDescription: "Enterprise-grade time synchronization",
        description: "GPS-based time synchronization appliances provide highly accurate time synchronization for critical infrastructure.",
        pros: [
          "High accuracy",
          "Independent of network",
          "Enterprise-grade reliability",
          "Comprehensive monitoring"
        ],
        cons: [
          "High cost",
          "Hardware installation required",
          "Complex setup",
          "Requires physical access"
        ],
        pricing: "Starting at $5,000",
        pricingModel: "One-time purchase",
        officialWebsite: "https://www.meinbergglobal.com/english/products/",
        pricingPage: "Contact vendor",
        setupTime: "1-2 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Dedicated infrastructure",
        organizationSize: "Large Enterprise",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹375,000+",
        icon: Clock
      }
    ]
  },
  {
    id: 23,
    category: "Logging and Monitoring",
    text: "Are timestamps used in security logs consistent and reliable for forensic investigations?",
    description: "Accurate and consistent timestamps in security logs are essential for forensic investigations and compliance.",
    helpText: "This includes ensuring all security logs have accurate timestamps and are properly synchronized.",
    icon: FileText,
    subQuestion: {
      id: "log-types",
      text: "Which security logs require timestamp verification?",
      placeholder: "Enter log types (e.g., authentication, system, application)",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "chronicle-logging",
        tier: "open-source",
        name: "Chronicle Logging with NTP",
        shortDescription: "Open-source log management with time sync",
        description: "Chronicle Logging provides a free solution for centralized log management with NTP-based timestamp verification.",
        pros: [
          "Free and open-source",
          "NTP integration",
          "Basic log management",
          "Timestamp verification"
        ],
        cons: [
          "Limited features",
          "Basic search capabilities",
          "Manual configuration",
          "No advanced analytics"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://github.com/chronicle/chronicle-logging",
        pricingPage: "N/A",
        setupTime: "2-3 days",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "1-2 servers",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "Medium",
        estimatedCostRange: "₹0 (self-hosted)",
        icon: FileText
      },
      {
        id: "splunk",
        tier: "standard",
        name: "Splunk",
        shortDescription: "Enterprise log management platform",
        description: "Splunk provides comprehensive log management with advanced search, analysis, and visualization capabilities.",
        pros: [
          "Powerful search",
          "Rich visualization",
          "Extensive integrations",
          "Good documentation"
        ],
        cons: [
          "Per GB pricing",
          "Complex setup",
          "Resource intensive",
          "Learning curve"
        ],
        pricing: "Starting at $2,000 annually",
        pricingModel: "Per GB/day",
        officialWebsite: "https://www.splunk.com",
        pricingPage: "https://www.splunk.com/en_us/pricing.html",
        setupTime: "1-2 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Dedicated infrastructure",
        organizationSize: "Medium to Large",
        effortHours: "60-100",
        priority: "High",
        estimatedCostRange: "₹150,000+/year",
        icon: FileText
      },
      {
        id: "qradar",
        tier: "premium",
        name: "IBM QRadar SIEM",
        shortDescription: "Enterprise-grade SIEM solution",
        description: "IBM QRadar SIEM provides advanced security information and event management with comprehensive log analysis and correlation.",
        pros: [
          "Advanced correlation",
          "Threat intelligence",
          "Compliance reporting",
          "Enterprise features"
        ],
        cons: [
          "High cost",
          "Complex deployment",
          "Resource intensive",
          "Requires dedicated team"
        ],
        pricing: "Starting at $10,000 annually",
        pricingModel: "Custom pricing",
        officialWebsite: "https://www.ibm.com/security/security-intelligence/qradar",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated team and infrastructure",
        organizationSize: "Large Enterprise",
        effortHours: "120-200",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: FileText
      }
    ]
  },
  {
    id: 24,
    category: "Third-Party Security",
    text: "Are third-party network services assessed for compliance with security policies?",
    description: "Regular assessment of third-party services is crucial for maintaining security and compliance.",
    helpText: "This includes evaluating third-party services against security policies and compliance requirements.",
    icon: Network,
    subQuestion: {
      id: "service-types",
      text: "Which third-party services are currently used, and what compliance requirements apply?",
      placeholder: "Enter service types and compliance requirements",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 20,
    },
    recommendations: [
      {
        id: "cis-benchmarks",
        tier: "open-source",
        name: "CIS Benchmarks and OpenSCAP",
        shortDescription: "Free compliance assessment tools",
        description: "Use CIS Benchmarks and OpenSCAP for manual compliance assessment of third-party services.",
        pros: [
          "Free and open-source",
          "Industry standards",
          "Comprehensive checks",
          "Regular updates"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Limited automation",
          "Requires expertise"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.cisecurity.org/benchmarks/",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Network
      },
      {
        id: "nessus",
        tier: "standard",
        name: "Nessus Professional",
        shortDescription: "Vulnerability and compliance scanner",
        description: "Nessus Professional provides automated vulnerability and compliance scanning for third-party services.",
        pros: [
          "Automated scanning",
          "Compliance reporting",
          "Regular updates",
          "Good documentation"
        ],
        cons: [
          "Annual licensing",
          "Limited features",
          "Basic reporting",
          "No continuous monitoring"
        ],
        pricing: "Starting at $2,990 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.tenable.com/products/nessus",
        pricingPage: "https://www.tenable.com/products/nessus/nessus-professional",
        setupTime: "2-3 days",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Dedicated scanner",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹225,000+/year",
        icon: Network
      },
      {
        id: "cortex-xpanse",
        tier: "premium",
        name: "Palo Alto Cortex Xpanse",
        shortDescription: "Automated risk assessment platform",
        description: "Cortex Xpanse provides continuous monitoring and risk assessment of third-party services.",
        pros: [
          "Continuous monitoring",
          "Advanced analytics",
          "Automated assessment",
          "Real-time alerts"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires dedicated team",
          "Custom pricing"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.paloaltonetworks.com/cortex/xpanse",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Large Enterprise",
        effortHours: "120-200",
        priority: "High",
        estimatedCostRange: "₹1,000,000+/year",
        icon: Network
      }
    ]
  },
  {
    id: 25,
    category: "Security Architecture",
    text: "Are secure system architecture and engineering principles applied and reviewed periodically?",
    description: "Regular review of system architecture ensures security controls remain effective and aligned with best practices.",
    helpText: "This includes periodic assessment of security architecture against industry standards and best practices.",
    icon: Building,
    subQuestion: {
      id: "last-review",
      text: "When was the last security architecture review conducted?",
      placeholder: "Enter months since last review",
      unit: "months",
      defaultValue: 12,
      min: 1,
      max: 36,
    },
    recommendations: [
      {
        id: "owasp-asvs",
        tier: "open-source",
        name: "OWASP ASVS and CIS Controls",
        shortDescription: "Free security architecture review framework",
        description: "Use OWASP ASVS and CIS Controls for manual security architecture review and assessment.",
        pros: [
          "Free and open-source",
          "Industry standards",
          "Comprehensive checklist",
          "Regular updates"
        ],
        cons: [
          "Manual process",
          "Time-consuming",
          "Requires expertise",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://owasp.org/www-project-application-security-verification-standard/",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Building
      },
      {
        id: "threatmodeler",
        tier: "standard",
        name: "ThreatModeler",
        shortDescription: "Automated security architecture review",
        description: "ThreatModeler provides automated security architecture review and threat modeling capabilities.",
        pros: [
          "Automated analysis",
          "Visual modeling",
          "Compliance reporting",
          "Regular updates"
        ],
        cons: [
          "Annual licensing",
          "Learning curve",
          "Limited customization",
          "Basic reporting"
        ],
        pricing: "Starting at $5,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://threatmodeler.com",
        pricingPage: "https://threatmodeler.com/pricing/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹375,000+/year",
        icon: Building
      },
      {
        id: "mandiant",
        tier: "premium",
        name: "Mandiant Security Architecture Assessment",
        shortDescription: "Enterprise security architecture review",
        description: "Engage Mandiant for comprehensive security architecture assessment and recommendations.",
        pros: [
          "Expert assessment",
          "Comprehensive review",
          "Detailed reporting",
          "Industry expertise"
        ],
        cons: [
          "High cost",
          "Time-consuming",
          "Limited frequency",
          "Custom pricing"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.mandiant.com/services/security-architecture",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Executive sponsorship",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹2,000,000+/assessment",
        icon: Building
      }
    ]
  },
  {
    id: 26,
    category: "Development Security",
    text: "Are outsourced development activities monitored, with security requirements included in contracts?",
    description: "Monitoring outsourced development activities and including security requirements in contracts is crucial for maintaining security standards.",
    helpText: "This includes having clear security requirements in contracts and monitoring mechanisms for outsourced development work.",
    icon: Code,
    subQuestion: {
      id: "security-requirements",
      text: "Which security requirements are currently enforced in contracts?",
      placeholder: "Enter security requirements",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "owasp-samm",
        tier: "open-source",
        name: "OWASP SAMM",
        shortDescription: "Free software assurance maturity model",
        description: "OWASP SAMM provides a framework for assessing and improving software security practices in outsourced development.",
        pros: [
          "Free and open-source",
          "Comprehensive framework",
          "Regular updates",
          "Community support"
        ],
        cons: [
          "Manual assessment",
          "Time-consuming",
          "Requires expertise",
          "No automation"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://owaspsamm.org",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Code
      },
      {
        id: "black-duck",
        tier: "standard",
        name: "Synopsys Black Duck",
        shortDescription: "Open-source security monitoring",
        description: "Black Duck provides automated security monitoring for outsourced development activities.",
        pros: [
          "Automated scanning",
          "Compliance reporting",
          "Integration capabilities",
          "Regular updates"
        ],
        cons: [
          "Annual licensing",
          "Complex setup",
          "Resource intensive",
          "Learning curve"
        ],
        pricing: "Starting at $25,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.synopsys.com/software-integrity/security-testing/software-composition-analysis/black-duck.html",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Medium to Large",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹1,875,000+/year",
        icon: Code
      },
      {
        id: "veracode",
        tier: "premium",
        name: "Veracode",
        shortDescription: "Automated secure development monitoring",
        description: "Veracode provides comprehensive security monitoring and testing for outsourced development activities.",
        pros: [
          "Automated testing",
          "Compliance validation",
          "Policy enforcement",
          "Detailed reporting"
        ],
        cons: [
          "High cost",
          "Complex implementation",
          "Requires dedicated team",
          "Steep learning curve"
        ],
        pricing: "Starting at $50,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.veracode.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹3,750,000+/year",
        icon: Code
      }
    ]
  },
  {
    id: 27,
    category: "Security Testing",
    text: "Are security assessments and testing conducted on externally developed software?",
    description: "Regular security testing of externally developed software is essential for maintaining security standards.",
    helpText: "This includes conducting security assessments and testing on software developed by external parties.",
    icon: Shield,
    subQuestion: {
      id: "testing-frequency",
      text: "How frequently is externally developed software tested?",
      placeholder: "Enter testing frequency (e.g., monthly, quarterly)",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 12,
    },
    recommendations: [
      {
        id: "owasp-zap",
        tier: "open-source",
        name: "OWASP ZAP",
        shortDescription: "Free security testing tool",
        description: "OWASP ZAP is a free and open-source web application security testing tool.",
        pros: [
          "Free and open-source",
          "Regular updates",
          "Community support",
          "Basic automation"
        ],
        cons: [
          "Manual configuration",
          "Basic features",
          "Limited reporting",
          "Requires expertise"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.zaproxy.org",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Shield
      },
      {
        id: "burp-suite",
        tier: "standard",
        name: "Burp Suite Professional",
        shortDescription: "Professional web security testing",
        description: "Burp Suite Professional provides comprehensive web application security testing capabilities.",
        pros: [
          "Advanced features",
          "Good documentation",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Annual licensing",
          "Learning curve",
          "Resource intensive",
          "Limited automation"
        ],
        pricing: "Starting at $399 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://portswigger.net/burp/pro",
        pricingPage: "https://portswigger.net/burp/pro/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹30,000+/year",
        icon: Shield
      },
      {
        id: "pen-testing",
        tier: "premium",
        name: "Third-party Penetration Testing",
        shortDescription: "Comprehensive security testing",
        description: "Engage a third-party firm for comprehensive penetration testing of externally developed software.",
        pros: [
          "Expert assessment",
          "Comprehensive testing",
          "Detailed reporting",
          "Independent review"
        ],
        cons: [
          "High cost",
          "Time-consuming",
          "Limited frequency",
          "Custom pricing"
        ],
        pricing: "Starting at $10,000 per test",
        pricingModel: "Per test",
        officialWebsite: "Contact security firms",
        pricingPage: "Custom pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Executive sponsorship",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/test",
        icon: Shield
      }
    ]
  },
  {
    id: 28,
    category: "Environment Security",
    text: "Are development, testing, and production environments properly segregated and access-controlled?",
    description: "Proper environment segregation and access control are essential for maintaining security.",
    helpText: "This includes having clear separation between environments and proper access controls in place.",
    icon: Database,
    subQuestion: {
      id: "environment-management",
      text: "How are environments currently managed and segregated?",
      placeholder: "Enter current environment management approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "docker-k8s",
        tier: "open-source",
        name: "Docker and Kubernetes",
        shortDescription: "Free container orchestration",
        description: "Use Docker and Kubernetes for environment segregation and management.",
        pros: [
          "Free and open-source",
          "Industry standard",
          "Good documentation",
          "Community support"
        ],
        cons: [
          "Complex setup",
          "Requires expertise",
          "Manual configuration",
          "Resource intensive"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://kubernetes.io",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "DevOps team",
        organizationSize: "Small to Medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹0 (self-hosted)",
        icon: Database
      },
      {
        id: "hashi-vault",
        tier: "standard",
        name: "HashiCorp Vault",
        shortDescription: "Access control management",
        description: "HashiCorp Vault provides secure access control for multi-environment setups.",
        pros: [
          "Comprehensive access control",
          "Good documentation",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Annual licensing",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "Starting at $5,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.hashicorp.com/products/vault",
        pricingPage: "https://www.hashicorp.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "DevOps team",
        organizationSize: "Medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹375,000+/year",
        icon: Database
      },
      {
        id: "cyberark",
        tier: "premium",
        name: "CyberArk",
        shortDescription: "Privileged access management",
        description: "CyberArk provides comprehensive privileged access management across environments.",
        pros: [
          "Advanced security",
          "Comprehensive features",
          "Enterprise support",
          "Detailed reporting"
        ],
        cons: [
          "High cost",
          "Complex implementation",
          "Requires dedicated team",
          "Steep learning curve"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.cyberark.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹3,750,000+/year",
        icon: Database
      }
    ]
  },
  {
    id: 29,
    category: "Change Management",
    text: "Are changes to information systems subject to formal approval, risk evaluation, and rollback procedures?",
    description: "Proper change management procedures are essential for maintaining system stability and security.",
    helpText: "This includes having formal processes for approving, evaluating, and rolling back system changes.",
    icon: FileText,
    subQuestion: {
      id: "change-process",
      text: "Is there a documented change management process in place?",
      placeholder: "Enter current change management approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "git",
        tier: "open-source",
        name: "Git",
        shortDescription: "Free version control",
        description: "Use Git for version control and maintain a structured change log.",
        pros: [
          "Free and open-source",
          "Industry standard",
          "Good documentation",
          "Community support"
        ],
        cons: [
          "Manual process",
          "Basic features",
          "Limited automation",
          "Requires expertise"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://git-scm.com",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Development team",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "Medium",
        estimatedCostRange: "₹0 (self-managed)",
        icon: FileText
      },
      {
        id: "servicenow",
        tier: "standard",
        name: "ServiceNow",
        shortDescription: "ITIL-based change management",
        description: "ServiceNow provides ITIL-based change management capabilities.",
        pros: [
          "Comprehensive features",
          "Good documentation",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Annual licensing",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "Starting at $10,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.servicenow.com",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: FileText
      },
      {
        id: "jira",
        tier: "premium",
        name: "Jira Service Management",
        shortDescription: "Automated workflow management",
        description: "Jira Service Management provides automated workflows for change management.",
        pros: [
          "Advanced automation",
          "Good integration",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-user pricing",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "Starting at $20 per user per month",
        pricingModel: "Per user",
        officialWebsite: "https://www.atlassian.com/software/jira/service-management",
        pricingPage: "https://www.atlassian.com/software/jira/service-management/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium to Large",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,500+/user/month",
        icon: FileText
      }
    ]
  },
  {
    id: 30,
    category: "Test Data Security",
    text: "Is test information anonymized, protected, and securely disposed of after testing?",
    description: "Proper handling of test data is crucial for maintaining data security and privacy.",
    helpText: "This includes having processes for data masking, protection, and secure disposal of test data.",
    icon: Database,
    subQuestion: {
      id: "data-processes",
      text: "What processes are in place for data masking and disposal after testing?",
      placeholder: "Enter current data handling processes",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "faker",
        tier: "open-source",
        name: "Faker and dbForge",
        shortDescription: "Free test data generation",
        description: "Use Faker and dbForge for generating and managing test data.",
        pros: [
          "Free and open-source",
          "Good documentation",
          "Community support",
          "Basic features"
        ],
        cons: [
          "Manual process",
          "Basic features",
          "Limited automation",
          "Requires expertise"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://fakerjs.dev",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Development team",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "Medium",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Database
      },
      {
        id: "informatica",
        tier: "standard",
        name: "Informatica Data Masking",
        shortDescription: "Data masking solution",
        description: "Informatica provides data masking capabilities for test environments.",
        pros: [
          "Comprehensive features",
          "Good documentation",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Custom pricing",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.informatica.com/products/data-masking.html",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: Database
      },
      {
        id: "delphix",
        tier: "premium",
        name: "Delphix Dynamic Data Platform",
        shortDescription: "Automated test data management",
        description: "Delphix provides comprehensive test data management capabilities.",
        pros: [
          "Advanced automation",
          "Comprehensive features",
          "Enterprise support",
          "Detailed reporting"
        ],
        cons: [
          "High cost",
          "Complex implementation",
          "Requires dedicated team",
          "Steep learning curve"
        ],
        pricing: "Starting at $50,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.delphix.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹3,750,000+/year",
        icon: Database
      }
    ]
  },
  {
    id: 31,
    category: "Security Audit",
    text: "Are security audit findings tracked and remediated to improve information security?",
    description: "Proper tracking and remediation of security audit findings is essential for maintaining security standards.",
    helpText: "This includes having processes for tracking, managing, and resolving security audit findings.",
    icon: ClipboardCheck,
    subQuestion: {
      id: "audit-management",
      text: "How are security audit findings currently managed and addressed?",
      placeholder: "Enter current management approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "ossec",
        tier: "open-source",
        name: "OSSEC",
        shortDescription: "Free security event monitoring",
        description: "OSSEC provides free security event monitoring and tracking capabilities.",
        pros: [
          "Free and open-source",
          "Real-time monitoring",
          "Good documentation",
          "Community support"
        ],
        cons: [
          "Manual configuration",
          "Basic features",
          "Limited reporting",
          "Requires expertise"
        ],
        pricing: "Free",
        pricingModel: "Open Source",
        officialWebsite: "https://www.ossec.net",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: ClipboardCheck
      },
      {
        id: "jira-security",
        tier: "standard",
        name: "Jira Service Management",
        shortDescription: "Security tracking and remediation",
        description: "Jira Service Management provides workflow capabilities for tracking and remediating security findings.",
        pros: [
          "Good workflow",
          "Integration options",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-user pricing",
          "Learning curve",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Starting at $20 per user per month",
        pricingModel: "Per user",
        officialWebsite: "https://www.atlassian.com/software/jira/service-management",
        pricingPage: "https://www.atlassian.com/software/jira/service-management/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,500+/user/month",
        icon: ClipboardCheck
      },
      {
        id: "servicenow-security",
        tier: "premium",
        name: "ServiceNow Security Operations",
        shortDescription: "Automated security tracking",
        description: "ServiceNow Security Operations provides automated tracking and remediation of security findings.",
        pros: [
          "Advanced automation",
          "Comprehensive features",
          "Enterprise support",
          "Detailed reporting"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Requires dedicated team",
          "Steep learning curve"
        ],
        pricing: "Starting at $10,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.servicenow.com/products/security-operations.html",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Dedicated team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: ClipboardCheck
      }
    ]
  },
  {
    id: 32,
    category: "Physical Security",
    text: "Are security measures in place for working in secure areas, including access restrictions and monitoring?",
    description: "Physical security measures are crucial for protecting sensitive areas and information.",
    helpText: "This includes having proper access controls and monitoring for secure areas.",
    icon: Lock,
    subQuestion: {
      id: "secure-areas",
      text: "How many secure areas need physical access control measures?",
      placeholder: "Enter number of secure areas",
      unit: "areas",
      defaultValue: 1,
      min: 1,
      max: 50,
    },
    recommendations: [
      {
        id: "hid-global",
        tier: "standard",
        name: "HID Global RFID Access Control",
        shortDescription: "RFID-based access control",
        description: "HID Global provides RFID-based access control systems for secure areas.",
        pros: [
          "Reliable technology",
          "Easy to use",
          "Good documentation",
          "Professional support"
        ],
        cons: [
          "Per-door cost",
          "Installation required",
          "Limited features",
          "Basic monitoring"
        ],
        pricing: "Starting at $500 per door",
        pricingModel: "Per door",
        officialWebsite: "https://www.hidglobal.com/products/access-control",
        pricingPage: "Contact sales",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹37,500+/door",
        icon: Lock
      },
      {
        id: "zkteco",
        tier: "premium",
        name: "ZKTeco Biometric Access Control",
        shortDescription: "Biometric access control",
        description: "ZKTeco provides biometric access control solutions for secure areas.",
        pros: [
          "High security",
          "Advanced features",
          "Good documentation",
          "Professional support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Maintenance needed"
        ],
        pricing: "$1,000+ per entry point",
        pricingModel: "Per entry point",
        officialWebsite: "https://www.zkteco.com",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹75,000+/entry point",
        icon: Lock
      }
    ]
  },
  {
    id: 33,
    category: "Visitor Management",
    text: "Are employees and visitors required to follow specific security procedures when entering secure areas?",
    description: "Proper visitor management is essential for maintaining security in secure areas.",
    helpText: "This includes having clear procedures and systems for managing visitors.",
    icon: Users,
    subQuestion: {
      id: "visitor-system",
      text: "Is there a visitor management system or security policy in place?",
      placeholder: "Enter current visitor management approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "envoy",
        tier: "standard",
        name: "Envoy",
        shortDescription: "Visitor management system",
        description: "Envoy provides a comprehensive visitor management system.",
        pros: [
          "Easy to use",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Monthly subscription",
          "Limited customization",
          "Basic reporting",
          "Internet dependent"
        ],
        pricing: "Starting at $99 per month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://envoy.com",
        pricingPage: "https://envoy.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Reception team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "Medium",
        estimatedCostRange: "₹7,500+/month",
        icon: Users
      },
      {
        id: "verkada",
        tier: "premium",
        name: "Verkada",
        shortDescription: "CCTV-based visitor management",
        description: "Verkada provides CCTV-based facial recognition visitor management.",
        pros: [
          "Advanced security",
          "Facial recognition",
          "Cloud-based",
          "Professional support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Privacy concerns"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.verkada.com",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: Users
      }
    ]
  },
  {
    id: 34,
    category: "Clear Desk Policy",
    text: "Are clear desk and clear screen policies defined and enforced to prevent unauthorized access to information?",
    description: "Clear desk and clear screen policies are essential for preventing unauthorized access to information.",
    helpText: "This includes having and enforcing policies for keeping desks and screens clear of sensitive information.",
    icon: FileText,
    subQuestion: {
      id: "policy-awareness",
      text: "Are employees aware of the importance of clear desk and screen policies?",
      placeholder: "Enter current awareness level",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "knowbe4",
        tier: "standard",
        name: "KnowBe4",
        shortDescription: "Security awareness training",
        description: "KnowBe4 provides security awareness training for employees.",
        pros: [
          "Comprehensive training",
          "Regular updates",
          "Good content",
          "Professional support"
        ],
        cons: [
          "Annual licensing",
          "Limited customization",
          "Basic reporting",
          "Time commitment"
        ],
        pricing: "Starting at $10 per user annually",
        pricingModel: "Per user",
        officialWebsite: "https://www.knowbe4.com",
        pricingPage: "https://www.knowbe4.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹750+/user/year",
        icon: FileText
      },
      {
        id: "microsoft-intune",
        tier: "premium",
        name: "Microsoft Intune",
        shortDescription: "Policy enforcement",
        description: "Microsoft Intune provides automated policy enforcement for clear desk and screen policies.",
        pros: [
          "Automated enforcement",
          "Comprehensive features",
          "Good integration",
          "Professional support"
        ],
        cons: [
          "Per-user pricing",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "$8 per user/month",
        pricingModel: "Per user",
        officialWebsite: "https://www.microsoft.com/en-us/microsoft-365/intune",
        pricingPage: "https://www.microsoft.com/en-us/microsoft-365/intune/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹600+/user/month",
        icon: FileText
      }
    ]
  },
  {
    id: 35,
    category: "Employee Training",
    text: "Are employees trained and required to lock screens and store sensitive materials securely when unattended?",
    description: "Employee training on security practices is crucial for maintaining security standards.",
    helpText: "This includes training employees on proper screen locking and secure storage of sensitive materials.",
    icon: UserCheck,
    subQuestion: {
      id: "training-program",
      text: "Is there a security awareness training program in place?",
      placeholder: "Enter current training approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "staysafeonline",
        tier: "standard",
        name: "StaySafeOnline",
        shortDescription: "Free security training",
        description: "StaySafeOnline provides free security awareness training resources.",
        pros: [
          "Free",
          "Good content",
          "Regular updates",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "No customization",
          "Manual tracking"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://staysafeonline.org",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "Medium",
        estimatedCostRange: "₹0 (self-managed)",
        icon: UserCheck
      },
      {
        id: "microsoft-endpoint",
        tier: "premium",
        name: "Microsoft Endpoint Manager",
        shortDescription: "Automated policy enforcement",
        description: "Microsoft Endpoint Manager provides automated policy enforcement for screen locking and security.",
        pros: [
          "Automated enforcement",
          "Comprehensive features",
          "Good integration",
          "Professional support"
        ],
        cons: [
          "Per-user pricing",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "$10 per user/month",
        pricingModel: "Per user",
        officialWebsite: "https://www.microsoft.com/en-us/microsoft-365/microsoft-endpoint-manager",
        pricingPage: "https://www.microsoft.com/en-us/microsoft-365/microsoft-endpoint-manager/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹750+/user/month",
        icon: UserCheck
      }
    ]
  },
  {
    id: 36,
    category: "Endpoint Security",
    text: "Are endpoints configured to automatically lock or blank the screen after 1 minute of inactivity to prevent unauthorized access?",
    description: "Automatic screen locking is essential for preventing unauthorized access to unattended devices.",
    helpText: "This includes having proper screen lock policies and enforcement mechanisms.",
    icon: Lock,
    subQuestion: {
      id: "auto-lock-restrictions",
      text: "Are there any technical or policy restrictions preventing auto-lock implementation?",
      placeholder: "Enter current restrictions",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "group-policy",
        tier: "standard",
        name: "Windows Group Policy",
        shortDescription: "Screen lock enforcement",
        description: "Enforce Group Policy for screen lock timers in Windows environments.",
        pros: [
          "Built-in solution",
          "No additional cost",
          "Centralized management",
          "Good documentation"
        ],
        cons: [
          "Windows only",
          "Limited features",
          "Basic reporting",
          "Manual configuration"
        ],
        pricing: "Included with Windows Server",
        pricingModel: "Included",
        officialWebsite: "https://docs.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-manage-in-organization",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹0 (included with Windows)",
        icon: Lock
      },
      {
        id: "mdm-solutions",
        tier: "premium",
        name: "MDM Solutions",
        shortDescription: "Device management",
        description: "Use MDM solutions like Jamf (Mac) or Microsoft Intune (Windows) for comprehensive device management.",
        pros: [
          "Cross-platform",
          "Advanced features",
          "Good reporting",
          "Professional support"
        ],
        cons: [
          "Per-device cost",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "Starting at $8 per device/month",
        pricingModel: "Per device",
        officialWebsite: "https://www.microsoft.com/en-us/microsoft-365/intune",
        pricingPage: "https://www.microsoft.com/en-us/microsoft-365/intune/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹600+/device/month",
        icon: Lock
      }
    ]
  },
  {
    id: 37,
    category: "Storage Security",
    text: "Is storage media securely managed throughout its lifecycle, including acquisition, usage, transportation, and disposal?",
    description: "Secure storage media management is crucial for protecting sensitive data throughout its lifecycle.",
    helpText: "This includes having proper processes for handling storage media from acquisition to disposal.",
    icon: HardDrive,
    subQuestion: {
      id: "data-storage-disposal",
      text: "How is sensitive data currently stored and disposed of?",
      placeholder: "Enter current approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "bitlocker-filevault",
        tier: "standard",
        name: "OS Encryption",
        shortDescription: "Storage encryption",
        description: "Implement BitLocker (Windows) or FileVault (Mac) for encryption.",
        pros: [
          "Built-in solution",
          "No additional cost",
          "Good security",
          "Easy to use"
        ],
        cons: [
          "OS specific",
          "Limited features",
          "Basic reporting",
          "Manual management"
        ],
        pricing: "Free (included with OS)",
        pricingModel: "Included",
        officialWebsite: "https://docs.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹0 (included with OS)",
        icon: HardDrive
      },
      {
        id: "iron-mountain",
        tier: "premium",
        name: "Iron Mountain",
        shortDescription: "Secure storage and destruction",
        description: "Use enterprise-grade secure storage and destruction services.",
        pros: [
          "Professional service",
          "Comprehensive solution",
          "Good compliance",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Contract required",
          "External dependency",
          "Complex setup"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.ironmountain.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: HardDrive
      }
    ]
  },
  {
    id: 38,
    category: "Data Security",
    text: "Are there clear rules and processes to ensure sensitive data is stored safely and shared securely?",
    description: "Clear rules and processes for data handling are essential for maintaining security.",
    helpText: "This includes having proper policies and tools for secure data storage and sharing.",
    icon: FileText,
    subQuestion: {
      id: "data-tools",
      text: "What tools are currently used for secure data storage and sharing?",
      placeholder: "Enter current tools",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "onedrive-dlp",
        tier: "standard",
        name: "Microsoft OneDrive with DLP",
        shortDescription: "Secure data storage",
        description: "Use Microsoft OneDrive with Data Loss Prevention (DLP).",
        pros: [
          "Good integration",
          "Regular updates",
          "Easy to use",
          "Professional support"
        ],
        cons: [
          "Subscription required",
          "Limited features",
          "Basic reporting",
          "Learning curve"
        ],
        pricing: "Included in Microsoft 365 Business ($12.50 per user/month)",
        pricingModel: "Per user",
        officialWebsite: "https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage",
        pricingPage: "https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹950+/user/month",
        icon: FileText
      },
      {
        id: "forcepoint-dlp",
        tier: "premium",
        name: "Forcepoint DLP",
        shortDescription: "Enterprise DLP",
        description: "Deploy enterprise-grade DLP solutions like Forcepoint DLP.",
        pros: [
          "Advanced features",
          "Comprehensive solution",
          "Good reporting",
          "Professional support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "$50 per user annually",
        pricingModel: "Per user",
        officialWebsite: "https://www.forcepoint.com/product/dlp",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹3,750+/user/year",
        icon: FileText
      }
    ]
  },
  {
    id: 39,
    category: "Infrastructure Security",
    text: "Are information processing facilities protected from power failures with backup solutions like UPS or generators?",
    description: "Power backup solutions are essential for maintaining business continuity.",
    helpText: "This includes having proper backup power solutions for critical infrastructure.",
    icon: Zap,
    subQuestion: {
      id: "infrastructure-location",
      text: "Does your company host critical infrastructure on-premises or rely on cloud services?",
      placeholder: "Enter infrastructure setup",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "apc-ups",
        tier: "standard",
        name: "APC Smart-UPS",
        shortDescription: "Power backup",
        description: "Install APC Smart-UPS for essential infrastructure.",
        pros: [
          "Reliable solution",
          "Good features",
          "Easy to use",
          "Professional support"
        ],
        cons: [
          "Limited capacity",
          "Basic monitoring",
          "Manual maintenance",
          "Physical space needed"
        ],
        pricing: "Starting at $500 per unit",
        pricingModel: "Per unit",
        officialWebsite: "https://www.apc.com/products/category/ups",
        pricingPage: "Contact sales",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹37,500+/unit",
        icon: Zap
      },
      {
        id: "generac",
        tier: "premium",
        name: "Generac Generators",
        shortDescription: "Full-scale backup",
        description: "Implement full-scale data center backup solutions.",
        pros: [
          "High capacity",
          "Advanced features",
          "Good monitoring",
          "Professional support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Regular maintenance",
          "Space intensive"
        ],
        pricing: "$10,000+",
        pricingModel: "One-time",
        officialWebsite: "https://www.generac.com",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+",
        icon: Zap
      }
    ]
  },
  {
    id: 40,
    category: "Utility Protection",
    text: "Are measures in place to prevent disruptions from failures in supporting utilities such as cooling, water, or internet connectivity?",
    description: "Protection against utility failures is crucial for maintaining business operations.",
    helpText: "This includes having proper backup solutions for critical utilities.",
    icon: Wifi,
    subQuestion: {
      id: "critical-utilities",
      text: "Which supporting utilities are most critical to business operations?",
      placeholder: "Enter critical utilities",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "sd-wan",
        tier: "standard",
        name: "SD-WAN with 4G/5G",
        shortDescription: "Internet backup",
        description: "Use cloud-based failover internet services.",
        pros: [
          "Reliable backup",
          "Easy to use",
          "Good features",
          "Professional support"
        ],
        cons: [
          "Monthly cost",
          "Limited bandwidth",
          "Basic monitoring",
          "Dependent on cellular"
        ],
        pricing: "Starting at $200 per month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.cisco.com/c/en/us/solutions/software-defined-wan/index.html",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹15,000+/month",
        icon: Wifi
      },
      {
        id: "liebert-cooling",
        tier: "premium",
        name: "Liebert Precision Cooling",
        shortDescription: "Redundant cooling",
        description: "Implement redundant cooling and power solutions.",
        pros: [
          "High reliability",
          "Advanced features",
          "Good monitoring",
          "Professional support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Regular maintenance",
          "Space intensive"
        ],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.vertiv.com/en-us/products/critical-infrastructure/precision-cooling/",
        pricingPage: "Contact sales",
        setupTime: "3-4 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: Wifi
      }
    ]
  },
  {
    id: 41,
    category: "Equipment Maintenance",
    text: "Is equipment regularly maintained to ensure availability, integrity, and confidentiality of information?",
    description: "Regular equipment maintenance is crucial for maintaining security and reliability.",
    helpText: "This includes having proper maintenance schedules and procedures for IT equipment.",
    icon: Wrench,
    subQuestion: {
      id: "maintenance-frequency",
      text: "How often is IT equipment inspected and maintained?",
      placeholder: "Enter maintenance frequency",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "servicenow-itsm",
        tier: "standard",
        name: "ServiceNow ITSM",
        shortDescription: "Asset management",
        description: "Implement asset management with ServiceNow ITSM.",
        pros: [
          "Comprehensive solution",
          "Good workflow",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Learning curve",
          "Resource intensive"
        ],
        pricing: "Starting at $10,000 annually",
        pricingModel: "Annual license",
        officialWebsite: "https://www.servicenow.com/products/itsm.html",
        pricingPage: "Contact sales",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: Wrench
      },
      {
        id: "ibm-maximo",
        tier: "premium",
        name: "IBM Maximo",
        shortDescription: "AI-driven maintenance",
        description: "Use AI-driven predictive maintenance tools like IBM Maximo.",
        pros: [
          "Advanced features",
          "AI capabilities",
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
        officialWebsite: "https://www.ibm.com/products/maximo",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Wrench
      }
    ]
  },
  {
    id: 42,
    category: "Secure Maintenance",
    text: "Are maintenance activities performed securely to prevent unauthorized access or tampering?",
    description: "Secure maintenance procedures are essential for protecting systems during maintenance.",
    helpText: "This includes having proper security controls during maintenance activities.",
    icon: Shield,
    subQuestion: {
      id: "maintenance-monitoring",
      text: "How are maintenance activities currently logged and monitored for security risks?",
      placeholder: "Enter current monitoring approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "jira-service",
        tier: "standard",
        name: "Jira Service Management",
        shortDescription: "Change management",
        description: "Implement a change management system.",
        pros: [
          "Good workflow",
          "Integration options",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-user pricing",
          "Learning curve",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Starts at $20 per user/month",
        pricingModel: "Per user",
        officialWebsite: "https://www.atlassian.com/software/jira/service-management",
        pricingPage: "https://www.atlassian.com/software/jira/service-management/pricing",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹1,500+/user/month",
        icon: Shield
      },
      {
        id: "cyberark",
        tier: "premium",
        name: "CyberArk",
        shortDescription: "Privileged access management",
        description: "Use a Privileged Access Management (PAM) solution to restrict access during maintenance.",
        pros: [
          "Advanced security",
          "Comprehensive features",
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
        officialWebsite: "https://www.cyberark.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 43,
    category: "Data Sanitization",
    text: "Are items of equipment containing storage media securely wiped, overwritten, or destroyed before disposal or reuse?",
    description: "Secure data sanitization is crucial for preventing data breaches during equipment disposal.",
    helpText: "This includes having proper procedures for securely erasing or destroying storage media.",
    icon: Trash2,
    subQuestion: {
      id: "sanitization-method",
      text: "What method is currently used for data sanitization?",
      placeholder: "Enter current method",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "dban",
        tier: "standard",
        name: "DBAN",
        shortDescription: "Secure erasure",
        description: "Use open-source wiping tools for secure erasure.",
        pros: [
          "Free",
          "Good security",
          "Easy to use",
          "Community support"
        ],
        cons: [
          "Manual process",
          "Limited features",
          "Basic reporting",
          "Time consuming"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://dban.org",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Trash2
      },
      {
        id: "iron-mountain-destruction",
        tier: "premium",
        name: "Iron Mountain Media Destruction",
        shortDescription: "Professional destruction",
        description: "Contract with certified disposal services for media destruction.",
        pros: [
          "Professional service",
          "Comprehensive solution",
          "Good compliance",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Contract required",
          "External dependency",
          "Complex setup"
        ],
        pricing: "Based on volume and location",
        pricingModel: "Custom",
        officialWebsite: "https://www.ironmountain.com/services/secure-media-destruction",
        pricingPage: "Contact sales",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "Facilities team",
        organizationSize: "Large Enterprise",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹75,000+/year",
        icon: Trash2
      }
    ]
  },
  {
    id: 44,
    category: "Software Decommissioning",
    text: "Is licensed software removed from devices before disposal to prevent unauthorized use?",
    description: "Proper software decommissioning is essential for preventing license violations.",
    helpText: "This includes having proper procedures for removing licensed software before device disposal.",
    icon: PackageX,
    subQuestion: {
      id: "decommissioning-process",
      text: "Is there an asset decommissioning process in place?",
      placeholder: "Enter current process",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "sccm-intune",
        tier: "standard",
        name: "SCCM/Intune",
        shortDescription: "Automated removal",
        description: "Use SCCM or Intune to automate software removal before disposal.",
        pros: [
          "Built-in solution",
          "No additional cost",
          "Good automation",
          "Professional support"
        ],
        cons: [
          "Windows only",
          "Limited features",
          "Basic reporting",
          "Manual configuration"
        ],
        pricing: "Included with Microsoft 365 E3",
        pricingModel: "Included",
        officialWebsite: "https://www.microsoft.com/en-us/microsoft-365/microsoft-endpoint-manager",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0 (included with E3)",
        icon: PackageX
      },
      {
        id: "servicenow-itam",
        tier: "premium",
        name: "ServiceNow ITAM",
        shortDescription: "Automated decommissioning",
        description: "Implement automated software decommissioning tools.",
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
        officialWebsite: "https://www.servicenow.com/products/itam.html",
        pricingPage: "Contact sales",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: PackageX
      }
    ]
  },
  {
    id: 45,
    category: "Background Verification",
    text: "Are background verification checks conducted before hiring and periodically afterward, considering legal, ethical, and business requirements?",
    description: "Background verification is essential for maintaining security and trust.",
    helpText: "This includes having proper procedures for conducting and maintaining background checks.",
    icon: UserCheck,
    subQuestion: {
      id: "background-policy",
      text: "Is there a policy in place for employee background screening?",
      placeholder: "Enter current policy",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "checkr-hireright",
        tier: "standard",
        name: "Background Screening Services",
        shortDescription: "Third-party screening",
        description: "Use third-party background screening services.",
        pros: [
          "Professional service",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-employee cost",
          "Limited customization",
          "Basic reporting",
          "External dependency"
        ],
        pricing: "$30–$100 per employee",
        pricingModel: "Per employee",
        officialWebsite: "https://checkr.com",
        pricingPage: "Contact sales",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹2,250–7,500/employee",
        icon: UserCheck
      },
      {
        id: "equifax-workforce",
        tier: "premium",
        name: "Equifax Workforce Solutions",
        shortDescription: "Continuous monitoring",
        description: "Implement continuous employee risk monitoring solutions.",
        pros: [
          "Advanced features",
          "Continuous monitoring",
          "Good reporting",
          "Enterprise support"
        ],
        cons: [
          "High cost",
          "Complex setup",
          "Training required",
          "Resource intensive"
        ],
        pricing: "Based on company size",
        pricingModel: "Custom",
        officialWebsite: "https://www.equifaxworkforce.com",
        pricingPage: "Contact sales",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: UserCheck
      }
    ]
  },
  {
    id: 46,
    category: "Employment Security",
    text: "Do employment contracts clearly define both personnel and organizational responsibilities for information security?",
    description: "Clear security responsibilities in employment contracts are essential for maintaining security standards.",
    helpText: "This includes having explicit security obligations defined in employment contracts.",
    icon: FileText,
    subQuestion: {
      id: "security-clause",
      text: "Do employment contracts include an information security clause?",
      placeholder: "Enter current contract status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "contract-update",
        tier: "standard",
        name: "Contract Updates",
        shortDescription: "Security obligations",
        description: "Update employment contracts to include explicit security obligations.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Legal compliance"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Legal review needed",
          "Resource intensive"
        ],
        pricing: "Internal HR/legal review required",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: FileText
      },
      {
        id: "workday",
        tier: "premium",
        name: "Workday",
        shortDescription: "HR compliance",
        description: "Use HR compliance tools to enforce security policy acknowledgments.",
        pros: [
          "Automated process",
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
        officialWebsite: "https://www.workday.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: FileText
      }
    ]
  },
  {
    id: 47,
    category: "Security Discipline",
    text: "Is there a formalized and communicated disciplinary process to address violations of information security policies?",
    description: "A clear disciplinary process is essential for enforcing security policies.",
    helpText: "This includes having proper procedures for handling security policy violations.",
    icon: AlertTriangle,
    subQuestion: {
      id: "violation-handling",
      text: "How are security policy violations currently handled?",
      placeholder: "Enter current process",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "handbook-policy",
        tier: "standard",
        name: "Employee Handbook Policy",
        shortDescription: "Security violations",
        description: "Develop and communicate an official security violation policy in the employee handbook.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Legal compliance"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Legal review needed",
          "Resource intensive"
        ],
        pricing: "Internal HR effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: AlertTriangle
      },
      {
        id: "bamboohr",
        tier: "premium",
        name: "BambooHR",
        shortDescription: "Case management",
        description: "Implement HR case management tools to track incidents.",
        pros: [
          "Automated process",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-user cost",
          "Learning curve",
          "Limited customization",
          "Resource intensive"
        ],
        pricing: "$8–$15 per user/month",
        pricingModel: "Per user",
        officialWebsite: "https://www.bamboohr.com",
        pricingPage: "https://www.bamboohr.com/pricing",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹600–1,125/user/month",
        icon: AlertTriangle
      }
    ]
  },
  {
    id: 48,
    category: "Security Responsibilities",
    text: "Are information security responsibilities enforced and communicated to personnel after termination or role changes?",
    description: "Proper handling of security responsibilities during role changes is crucial.",
    helpText: "This includes having proper procedures for managing security access during transitions.",
    icon: UserX,
    subQuestion: {
      id: "offboarding-process",
      text: "Is there a formal offboarding process for employees?",
      placeholder: "Enter current process",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "okta-entra",
        tier: "standard",
        name: "Okta/Microsoft Entra ID",
        shortDescription: "Account deactivation",
        description: "Use automated account deactivation tools.",
        pros: [
          "Automated process",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-user cost",
          "Learning curve",
          "Limited features",
          "Resource intensive"
        ],
        pricing: "$6–$15 per user/month",
        pricingModel: "Per user",
        officialWebsite: "https://www.okta.com",
        pricingPage: "https://www.okta.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹450–1,125/user/month",
        icon: UserX
      },
      {
        id: "servicenow-security",
        tier: "premium",
        name: "ServiceNow Security",
        shortDescription: "Clearance tracking",
        description: "Implement security clearance revocation tracking in ServiceNow.",
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
        officialWebsite: "https://www.servicenow.com/products/security-operations.html",
        pricingPage: "Contact sales",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: UserX
      }
    ]
  },
  {
    id: 49,
    category: "Confidentiality Agreements",
    text: "Are confidentiality or non-disclosure agreements documented, reviewed regularly, and signed by personnel and relevant parties?",
    description: "Proper NDA management is essential for protecting sensitive information.",
    helpText: "This includes having proper procedures for managing NDAs.",
    icon: FileCheck,
    subQuestion: {
      id: "nda-requirement",
      text: "Are NDAs required for all employees and contractors?",
      placeholder: "Enter current NDA status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "docusign",
        tier: "standard",
        name: "DocuSign",
        shortDescription: "Digital signatures",
        description: "Ensure NDAs are part of the onboarding process using DocuSign.",
        pros: [
          "Easy to use",
          "Good features",
          "Regular updates",
          "Professional support"
        ],
        cons: [
          "Per-user cost",
          "Limited features",
          "Basic reporting",
          "Resource intensive"
        ],
        pricing: "$10–$25 per user/month",
        pricingModel: "Per user",
        officialWebsite: "https://www.docusign.com",
        pricingPage: "https://www.docusign.com/pricing",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹750–1,875/user/month",
        icon: FileCheck
      },
      {
        id: "ironclad",
        tier: "premium",
        name: "Ironclad",
        shortDescription: "Contract management",
        description: "Implement AI-powered contract management.",
        pros: [
          "Advanced features",
          "AI capabilities",
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
        officialWebsite: "https://ironcladapp.com",
        pricingPage: "Contact sales",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Legal team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: FileCheck
      }
    ]
  },
  {
    id: 50,
    category: "Incident Reporting",
    text: "Is there a mechanism for personnel to report observed or suspected security incidents in a timely manner?",
    description: "Proper incident reporting is crucial for maintaining security.",
    helpText: "This includes having proper procedures for reporting security incidents.",
    icon: AlertCircle,
    subQuestion: {
      id: "incident-reporting",
      text: "How are security incidents currently reported?",
      placeholder: "Enter current process",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "google-forms",
        tier: "standard",
        name: "Google Forms",
        shortDescription: "Anonymous reporting",
        description: "Set up an anonymous reporting tool.",
        pros: [
          "Free",
          "Easy to use",
          "Good features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "No automation",
          "Manual process"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.google.com/forms/about",
        pricingPage: "N/A",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: AlertCircle
      },
      {
        id: "splunk-soar",
        tier: "premium",
        name: "Splunk SOAR",
        shortDescription: "Incident management",
        description: "Use a security incident management platform.",
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
        officialWebsite: "https://www.splunk.com/en_us/software/splunk-security-orchestration-and-automation.html",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: AlertCircle
      }
    ]
  },
  {
    id: 51,
    category: "Security Policies",
    text: "Are information security policies defined, approved, communicated, acknowledged, and reviewed regularly?",
    description: "Regular policy review and communication is essential for maintaining security.",
    helpText: "This includes having proper procedures for managing security policies.",
    icon: FileText,
    subQuestion: {
      id: "policy-review",
      text: "When was the last security policy review?",
      placeholder: "Enter last review date",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "google-drive",
        tier: "standard",
        name: "Google Drive/SharePoint",
        shortDescription: "Policy management",
        description: "Conduct quarterly policy reviews using Google Drive or SharePoint.",
        pros: [
          "Free",
          "Easy to use",
          "Good features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "No automation",
          "Manual process"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "https://www.google.com/drive",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: FileText
      },
      {
        id: "logicgate",
        tier: "premium",
        name: "LogicGate",
        shortDescription: "Policy management",
        description: "Implement policy management software.",
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
        officialWebsite: "https://www.logicgate.com",
        pricingPage: "Contact sales",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: FileText
      }
    ]
  },
  {
    id: 52,
    category: "Security Roles",
    text: "Are information security roles and responsibilities clearly defined and assigned based on organizational needs?",
    description: "Clear security roles are essential for maintaining security.",
    helpText: "This includes having proper procedures for defining security roles.",
    icon: Users,
    subQuestion: {
      id: "governance-structure",
      text: "Is there a formal security governance structure in place?",
      placeholder: "Enter current structure",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "policy-documentation",
        tier: "standard",
        name: "Policy Documentation",
        shortDescription: "Role definition",
        description: "Define security roles in organizational policies.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Legal compliance"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Legal review needed",
          "Resource intensive"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: Users
      },
      {
        id: "archer",
        tier: "premium",
        name: "Archer",
        shortDescription: "GRC platform",
        description: "Implement a governance risk compliance (GRC) tool.",
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
        officialWebsite: "https://www.archerirm.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Users
      }
    ]
  },
  {
    id: 53,
    category: "Duty Segregation",
    text: "Are conflicting duties and responsibilities identified and segregated to prevent security risks?",
    description: "Proper segregation of duties is essential for maintaining security.",
    helpText: "This includes having proper procedures for managing role conflicts.",
    icon: Shield,
    subQuestion: {
      id: "role-conflicts",
      text: "How are roles and responsibilities currently assigned to prevent conflicts of interest?",
      placeholder: "Enter current approach",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "rbac",
        tier: "standard",
        name: "RBAC Model",
        shortDescription: "Access control",
        description: "Implement a Role-Based Access Control (RBAC) model in identity management.",
        pros: [
          "Built-in solution",
          "No additional cost",
          "Good security",
          "Easy to use"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "Manual configuration",
          "Resource intensive"
        ],
        pricing: "Included in Microsoft Entra ID, Okta, or AWS IAM",
        pricingModel: "Included",
        officialWebsite: "https://docs.microsoft.com/en-us/azure/active-directory/roles/concept-understand-roles",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (included with IAM)",
        icon: Shield
      },
      {
        id: "erp-maestro",
        tier: "premium",
        name: "ERP Maestro",
        shortDescription: "SoD monitoring",
        description: "Use a Segregation of Duties (SoD) monitoring tool.",
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
        officialWebsite: "https://www.erpmaestro.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 54,
    category: "Policy Compliance",
    text: "Are all personnel required to apply and follow the organization's information security policies and procedures?",
    description: "Policy compliance is essential for maintaining security.",
    helpText: "This includes having proper procedures for ensuring policy compliance.",
    icon: CheckCircle,
    subQuestion: {
      id: "policy-acknowledgment",
      text: "Are security policies formally documented and acknowledged by employees?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "knowbe4",
        tier: "standard",
        name: "KnowBe4",
        shortDescription: "Security training",
        description: "Implement an Employee Security Awareness Training Program.",
        pros: [
          "Good features",
          "Regular updates",
          "Easy to use",
          "Professional support"
        ],
        cons: [
          "Annual cost",
          "Limited customization",
          "Basic reporting",
          "Resource intensive"
        ],
        pricing: "$20–$30 per user/year",
        pricingModel: "Per user",
        officialWebsite: "https://www.knowbe4.com",
        pricingPage: "https://www.knowbe4.com/pricing",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹1,500–2,250/user/year",
        icon: CheckCircle
      },
      {
        id: "logicgate-compliance",
        tier: "premium",
        name: "LogicGate Compliance",
        shortDescription: "Policy compliance",
        description: "Use an automated security policy compliance platform.",
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
        officialWebsite: "https://www.logicgate.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: CheckCircle
      }
    ]
  },
  {
    id: 55,
    category: "Regulatory Contact",
    text: "Does the organization establish and maintain contact with relevant legal, regulatory, or law enforcement authorities?",
    description: "Maintaining regulatory contacts is essential for compliance.",
    helpText: "This includes having proper procedures for managing regulatory relationships.",
    icon: Building2,
    subQuestion: {
      id: "compliance-officer",
      text: "Does the organization have a designated compliance officer or security liaison?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "compliance-officer-role",
        tier: "standard",
        name: "Compliance Officer",
        shortDescription: "Regulatory contact",
        description: "Assign a compliance officer to establish contact with regulatory bodies.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Legal compliance"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Resource intensive",
          "Training needed"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "4-6 weeks",
        recommendedTimeline: "4-6 weeks",
        requiredResources: "Legal team",
        organizationSize: "Medium",
        effortHours: "160-240",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: Building2
      },
      {
        id: "thomson-reuters",
        tier: "premium",
        name: "Thomson Reuters",
        shortDescription: "Regulatory monitoring",
        description: "Subscribe to a Regulatory Compliance Monitoring Service.",
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
        officialWebsite: "https://www.thomsonreuters.com/en/products-services/regulatory-intelligence.html",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Legal team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Building2
      }
    ]
  },
  {
    id: 56,
    category: "Security Collaboration",
    text: "Does the organization engage with security forums, professional associations, or special interest groups?",
    description: "Active participation in security communities helps stay updated with latest threats and best practices.",
    helpText: "This includes engagement with professional security organizations and communities.",
    icon: Users,
    subQuestion: {
      id: "security-collaboration",
      text: "Is there a designated team or individual responsible for external cybersecurity collaborations?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "security-forums",
        tier: "standard",
        name: "Security Forums",
        shortDescription: "Professional memberships",
        description: "Register for security forums and groups (e.g., ISACA, ISC², OWASP, FIRST).",
        pros: [
          "Knowledge sharing",
          "Networking",
          "Best practices",
          "Community support"
        ],
        cons: [
          "Membership costs",
          "Time commitment",
          "Limited resources",
          "Manual process"
        ],
        pricing: "$50–$300 per year",
        pricingModel: "Annual",
        officialWebsite: "https://www.isaca.org",
        pricingPage: "Varies by organization",
        setupTime: "1-2 weeks",
        recommendedTimeline: "1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "Medium",
        estimatedCostRange: "₹3,750–22,500/year",
        icon: Users
      },
      {
        id: "anomali",
        tier: "premium",
        name: "Anomali",
        shortDescription: "Threat intelligence",
        description: "Subscribe to threat intelligence and industry-sharing platforms.",
        pros: [
          "Advanced features",
          "Real-time updates",
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
        officialWebsite: "https://www.anomali.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Users
      }
    ]
  },
  {
    id: 57,
    category: "Project Security",
    text: "Is information security integrated into project management processes?",
    description: "Security should be a fundamental part of project planning and execution.",
    helpText: "This includes having security requirements in project management.",
    icon: FileText,
    subQuestion: {
      id: "security-requirements",
      text: "Are security requirements formally included in project planning and execution?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "security-checklist",
        tier: "standard",
        name: "Security Checklist",
        shortDescription: "Risk assessment",
        description: "Establish a Security Risk Assessment Checklist for all projects.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Easy to implement"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "2-4 weeks",
        recommendedTimeline: "2-4 weeks",
        requiredResources: "Project team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: FileText
      },
      {
        id: "microsoft-threat-modeling",
        tier: "premium",
        name: "Microsoft Threat Modeling",
        shortDescription: "Secure SDLC",
        description: "Use Secure SDLC tools for threat modeling and security integration.",
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
        pricing: "Varies based on licensing",
        pricingModel: "Custom",
        officialWebsite: "https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Development team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: FileText
      }
    ]
  },
  {
    id: 58,
    category: "Asset Management",
    text: "Are rules for acceptable use and procedures for handling assets documented and enforced?",
    description: "Clear asset handling procedures are essential for security.",
    helpText: "This includes having proper procedures for asset management.",
    icon: PackageX,
    subQuestion: {
      id: "aup-status",
      text: "Does the organization have an Acceptable Use Policy (AUP) that employees acknowledge?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "aup-implementation",
        tier: "standard",
        name: "AUP Implementation",
        shortDescription: "Policy management",
        description: "Implement an Acceptable Use Policy (AUP) and ensure employees sign an acknowledgment form.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Legal compliance"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Legal review needed",
          "Resource intensive"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: PackageX
      },
      {
        id: "logicgate-policy",
        tier: "premium",
        name: "LogicGate Policy",
        shortDescription: "Policy management",
        description: "Use Automated Policy Management Software to track policy acceptance and compliance.",
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
        officialWebsite: "https://www.logicgate.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "HR team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: PackageX
      }
    ]
  },
  {
    id: 59,
    category: "Asset Return",
    text: "Are personnel required to return all organizational assets upon termination or contract change?",
    description: "Proper asset return procedures are crucial for security.",
    helpText: "This includes having proper procedures for asset returns.",
    icon: Trash2,
    subQuestion: {
      id: "asset-return",
      text: "Is there a formalized asset return process in place during offboarding?",
      placeholder: "Enter current process",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "asset-tracking",
        tier: "standard",
        name: "Asset Tracking",
        shortDescription: "Spreadsheet tracking",
        description: "Implement an Asset Tracking Spreadsheet and mandate HR checklists for offboarding.",
        pros: [
          "Free",
          "Easy to use",
          "Good features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "No automation",
          "Manual process"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "HR team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: Trash2
      },
      {
        id: "servicenow-itam",
        tier: "premium",
        name: "ServiceNow ITAM",
        shortDescription: "Asset management",
        description: "Use an IT Asset Management (ITAM) system to track issued assets and enforce returns.",
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
        officialWebsite: "https://www.servicenow.com/products/it-asset-management.html",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Trash2
      }
    ]
  },
  {
    id: 60,
    category: "Document Classification",
    text: "Are document classification strategies defined and implemented within the organization?",
    description: "Proper document classification is essential for information security.",
    helpText: "This includes having proper procedures for document classification.",
    icon: FileText,
    subQuestion: {
      id: "classification-framework",
      text: "Does the organization have a data classification framework (e.g., Public, Internal, Confidential)?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "classification-policy",
        tier: "standard",
        name: "Classification Policy",
        shortDescription: "Data classification",
        description: "Define a Data Classification Policy with clear levels.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Legal compliance"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: FileText
      },
      {
        id: "microsoft-purview",
        tier: "premium",
        name: "Microsoft Purview",
        shortDescription: "DLP solution",
        description: "Implement a Data Loss Prevention (DLP) solution for classification enforcement.",
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
        officialWebsite: "https://www.microsoft.com/en-us/security/business/data-loss-prevention",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: FileText
      }
    ]
  },
  {
    id: 61,
    category: "Document Labeling",
    text: "Are tagging strategies used to label and identify classified information consistently?",
    description: "Consistent document labeling is crucial for information security.",
    helpText: "This includes having proper procedures for document labeling.",
    icon: FileText,
    subQuestion: {
      id: "labeling-status",
      text: "Are digital and physical documents labeled according to classification levels?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "manual-labeling",
        tier: "standard",
        name: "Manual Labeling",
        shortDescription: "Document templates",
        description: "Introduce manual document labeling guidelines using predefined templates.",
        pros: [
          "Free",
          "Easy to use",
          "Good features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "No automation",
          "Manual process"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: FileText
      },
      {
        id: "microsoft-information-protection",
        tier: "premium",
        name: "Microsoft Information Protection",
        shortDescription: "Automated labeling",
        description: "Deploy Automated Document Labeling Tools for consistent classification.",
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
        pricing: "Varies based on licensing",
        pricingModel: "Subscription",
        officialWebsite: "https://www.microsoft.com/en-us/security/business/information-protection",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: FileText
      }
    ]
  },
  {
    id: 62,
    category: "Data Bucketing",
    text: "Are bucketing strategies in place to group similar types of information for consistent security handling?",
    description: "Proper data bucketing helps maintain consistent security controls.",
    helpText: "This includes having proper procedures for data categorization.",
    icon: FileText,
    subQuestion: {
      id: "categorization-matrix",
      text: "Does the organization have a formal data classification matrix to categorize information types?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "categorization-framework",
        tier: "standard",
        name: "Categorization Framework",
        shortDescription: "Data grouping",
        description: "Develop a Data Categorization Framework for consistent handling.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Easy to implement"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: FileText
      },
      {
        id: "collibra",
        tier: "premium",
        name: "Collibra",
        shortDescription: "Data governance",
        description: "Implement Data Governance Tools to automate categorization.",
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
        officialWebsite: "https://www.collibra.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: FileText
      }
    ]
  },
  {
    id: 63,
    category: "Labeling Procedures",
    text: "Are procedures for labeling information implemented according to the organization's classification scheme?",
    description: "Consistent labeling procedures are essential for information security.",
    helpText: "This includes having proper procedures for information labeling.",
    icon: FileText,
    subQuestion: {
      id: "labeling-implementation",
      text: "Are digital and physical documents labeled correctly according to security levels?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "manual-labeling-policy",
        tier: "standard",
        name: "Manual Labeling",
        shortDescription: "Document templates",
        description: "Use manual labeling policies with document templates and color-coded stamps.",
        pros: [
          "Free",
          "Easy to use",
          "Good features",
          "Community support"
        ],
        cons: [
          "Limited features",
          "Basic reporting",
          "No automation",
          "Manual process"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0 (self-managed)",
        icon: FileText
      },
      {
        id: "google-dlp",
        tier: "premium",
        name: "Google DLP",
        shortDescription: "Automated labeling",
        description: "Deploy Automated Labeling Solutions for consistent classification.",
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
        pricing: "Subscription-based",
        pricingModel: "Subscription",
        officialWebsite: "https://cloud.google.com/dlp",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: FileText
      }
    ]
  },
  {
    id: 64,
    category: "Data Transfer",
    text: "Are secure rules, procedures, and agreements in place for transferring information internally and externally?",
    description: "Secure data transfer procedures are crucial for information security.",
    helpText: "This includes having proper procedures for data transfer.",
    icon: FileText,
    subQuestion: {
      id: "transfer-policies",
      text: "Are data transfer policies documented and enforced for internal/external communication?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "secure-protocols",
        tier: "standard",
        name: "Secure Protocols",
        shortDescription: "Data transfer",
        description: "Implement Secure Data Transfer Protocols for safe communication.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Easy to implement"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Internal setup",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: FileText
      },
      {
        id: "axway",
        tier: "premium",
        name: "Axway SecureTransport",
        shortDescription: "File transfer",
        description: "Deploy Secure File Transfer Solutions for safe data exchange.",
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
        pricing: "Varies",
        pricingModel: "Custom",
        officialWebsite: "https://www.axway.com/en/products/secure-transport",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: FileText
      }
    ]
  },
  {
    id: 65,
    category: "Access Control",
    text: "Are access control policies established and enforced based on business and security requirements?",
    description: "Proper access control is essential for information security.",
    helpText: "This includes having proper procedures for access management.",
    icon: Shield,
    subQuestion: {
      id: "rbac-implementation",
      text: "Are Role-Based Access Controls (RBAC) implemented and reviewed periodically?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "rbac-policy",
        tier: "standard",
        name: "RBAC Policy",
        shortDescription: "Access control",
        description: "Implement RBAC and Least Privilege Policies to restrict access.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Easy to implement"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "2-3 weeks",
        recommendedTimeline: "2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: Shield
      },
      {
        id: "okta-iam",
        tier: "premium",
        name: "Okta IAM",
        shortDescription: "Identity management",
        description: "Use Identity and Access Management (IAM) solutions for comprehensive access control.",
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
        officialWebsite: "https://www.okta.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 66,
    category: "Access Management",
    text: "Are access rights regularly reviewed, modified, and removed in line with security policies?",
    description: "Regular access rights review is essential for maintaining security.",
    helpText: "This includes having proper procedures for access management.",
    icon: Shield,
    subQuestion: {
      id: "access-review",
      text: "Is there a documented process for periodic access reviews?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "quarterly-review",
        tier: "standard",
        name: "Quarterly Review",
        shortDescription: "Access review",
        description: "Establish a Quarterly Access Review Process with manual checks via spreadsheets.",
        pros: [
          "Free",
          "Easy to implement",
          "Customizable",
          "Internal control"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Free",
        pricingModel: "Free",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "Ongoing",
        recommendedTimeline: "Ongoing",
        requiredResources: "IT team",
        organizationSize: "Medium",
        effortHours: "40-60",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: Shield
      },
      {
        id: "sailpoint",
        tier: "premium",
        name: "SailPoint",
        shortDescription: "Access review",
        description: "Use Automated Access Review Tools for comprehensive access management.",
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
        pricing: "Subscription-based",
        pricingModel: "Subscription",
        officialWebsite: "https://www.sailpoint.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "IT team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 67,
    category: "Supplier Security",
    text: "Are processes in place to manage information security risks related to supplier products and services?",
    description: "Proper supplier security management is crucial for overall security.",
    helpText: "This includes having proper procedures for supplier security.",
    icon: Shield,
    subQuestion: {
      id: "vendor-compliance",
      text: "Are vendors required to meet specific security compliance standards (e.g., ISO 27001, SOC 2)?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "vendor-assessment",
        tier: "standard",
        name: "Vendor Assessment",
        shortDescription: "Security checklist",
        description: "Establish a Vendor Security Assessment Checklist and conduct periodic audits.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Easy to implement"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: Shield
      },
      {
        id: "prevalent",
        tier: "premium",
        name: "Prevalent",
        shortDescription: "TPRM solution",
        description: "Implement Third-Party Risk Management (TPRM) solutions for comprehensive vendor security.",
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
        officialWebsite: "https://www.prevalent.net",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 68,
    category: "Supplier Requirements",
    text: "Are security requirements clearly established and agreed upon with all suppliers?",
    description: "Clear security requirements are essential for supplier relationships.",
    helpText: "This includes having proper procedures for supplier agreements.",
    icon: Shield,
    subQuestion: {
      id: "security-clauses",
      text: "Are security clauses included in all supplier contracts and SLAs?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "contract-updates",
        tier: "standard",
        name: "Contract Updates",
        shortDescription: "Security requirements",
        description: "Update Supplier Agreements to include security requirements and periodic compliance reviews.",
        pros: [
          "Legal compliance",
          "Customizable",
          "Clear requirements",
          "Internal control"
        ],
        cons: [
          "Legal costs",
          "Time consuming",
          "Manual process",
          "Resource intensive"
        ],
        pricing: "Legal consultation fees",
        pricingModel: "Custom",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Legal team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹150,000–300,000",
        icon: Shield
      },
      {
        id: "ironclad",
        tier: "premium",
        name: "Ironclad",
        shortDescription: "Contract management",
        description: "Implement Contract Management Software for compliance tracking.",
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
        pricing: "Subscription-based",
        pricingModel: "Subscription",
        officialWebsite: "https://ironcladapp.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Legal team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹750,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 69,
    category: "Supply Chain Security",
    text: "Are security risks in the IT supply chain assessed and managed?",
    description: "Proper supply chain security management is crucial.",
    helpText: "This includes having proper procedures for supply chain security.",
    icon: Shield,
    subQuestion: {
      id: "supplier-risk",
      text: "Are risk assessments conducted for IT suppliers, including software vendors?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "risk-matrix",
        tier: "standard",
        name: "Risk Matrix",
        shortDescription: "Risk assessment",
        description: "Perform Annual Supply Chain Risk Assessments using risk matrices.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Easy to implement"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "Ongoing",
        recommendedTimeline: "Ongoing",
        requiredResources: "Security team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: Shield
      },
      {
        id: "riskrecon",
        tier: "premium",
        name: "RiskRecon",
        shortDescription: "Risk management",
        description: "Use AI-Powered Risk Management Tools for comprehensive supply chain security.",
        pros: [
          "Advanced features",
          "AI capabilities",
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
        officialWebsite: "https://www.riskrecon.com",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Shield
      }
    ]
  },
  {
    id: 70,
    category: "Cloud Security",
    text: "Are processes for selecting, managing, and exiting cloud services aligned with security requirements?",
    description: "Proper cloud service management is essential for security.",
    helpText: "This includes having proper procedures for cloud service management.",
    icon: Shield,
    subQuestion: {
      id: "cloud-compliance",
      text: "Are cloud service providers assessed for security compliance before onboarding?",
      placeholder: "Enter current status",
      unit: "",
      defaultValue: 1,
      min: 1,
      max: 10,
    },
    recommendations: [
      {
        id: "cloud-policy",
        tier: "standard",
        name: "Cloud Policy",
        shortDescription: "Security framework",
        description: "Develop a Cloud Security Policy aligned with frameworks like NIST CSF or CIS Benchmarks.",
        pros: [
          "Internal control",
          "No additional cost",
          "Customizable",
          "Easy to implement"
        ],
        cons: [
          "Manual process",
          "Time consuming",
          "Limited automation",
          "Resource intensive"
        ],
        pricing: "Internal effort",
        pricingModel: "Internal",
        officialWebsite: "N/A",
        pricingPage: "N/A",
        setupTime: "3-4 weeks",
        recommendedTimeline: "3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹0 (internal effort)",
        icon: Shield
      },
      {
        id: "prisma-cloud",
        tier: "premium",
        name: "Prisma Cloud",
        shortDescription: "CSPM solution",
        description: "Use Cloud Security Posture Management (CSPM) solutions for comprehensive cloud security.",
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
        pricing: "Subscription-based",
        pricingModel: "Subscription",
        officialWebsite: "https://www.paloaltonetworks.com/prisma/cloud",
        pricingPage: "Contact sales",
        setupTime: "6-8 weeks",
        recommendedTimeline: "6-8 weeks",
        requiredResources: "Security team",
        organizationSize: "Large Enterprise",
        effortHours: "240-320",
        priority: "High",
        estimatedCostRange: "₹1,500,000+/year",
        icon: Shield
      }
    ]
  }
] as const


export interface SubQuestion {
  id: string
  text: string
  placeholder: string
  unit: string
  defaultValue?: number
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
  effortHours: string // Effort in hours (e.g., "4–8")
  priority: "High" | "Medium" | "Low" // Priority level
  estimatedCostRange: string // Cost range (e.g., "₹500–1,000/year")
  icon?: LucideIcon
  // Estimation functions
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

// First 10 questions

// Export the questions data directly
export const allQuestionsData = questionsData

