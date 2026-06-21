// All services data extracted exactly from the shared images

export interface Service {
  name: string;
  description: string;
  price: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  highlight: string; // the colored word(s)
  subtitle: string;
  services: Service[];
  notes: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "software-development",
    title: "Software Development",
    highlight: "Services",
    subtitle: "Scalable, secure and reliable software solutions designed to grow your business.",
    services: [
      { name: "Custom Software Development", description: "Tailored software solutions built specifically for your business needs.", price: "$15,000" },
      { name: "Enterprise Software Development", description: "Robust and scalable software for large enterprise operations.", price: "$50,000" },
      { name: "SaaS Product Development", description: "End-to-end SaaS solutions from concept to deployment.", price: "$25,000" },
      { name: "CRM Software Development", description: "Manage leads, customers and sales with custom CRM solutions.", price: "$18,000" },
      { name: "ERP Software Development", description: "Comprehensive ERP solutions to streamline your core business processes.", price: "$30,000" },
      { name: "Inventory Management Systems", description: "Real-time inventory tracking and management solutions.", price: "$12,000" },
      { name: "Human Resource Management (HRM) Software", description: "Simplify HR processes and manage your workforce efficiently.", price: "$12,000" },
      { name: "Accounting & Billing Software", description: "Automated accounting, invoicing and financial management solutions.", price: "$10,000" },
      { name: "Point of Sale (POS) Systems", description: "Fast, reliable and secure POS solutions for your business.", price: "$8,000" },
      { name: "Hospital Management Systems", description: "Complete hospital management and patient care solutions.", price: "$20,000" },
      { name: "School & Learning Management Systems", description: "Digital learning and school management solutions.", price: "$12,000" },
      { name: "Hotel & Restaurant Management Software", description: "Streamline operations and enhance guest experience.", price: "$12,000" },
      { name: "Logistics & Fleet Management Software", description: "Optimize fleet operations, routes and deliveries.", price: "$15,000" },
      { name: "Customer Portals & Client Dashboards", description: "Custom portals and dashboards for better client management and insights.", price: "$10,000" },
      { name: "Workflow Automation Software", description: "Automate business workflows and improve productivity.", price: "$12,000" },
      { name: "API Development & Integration", description: "Build and integrate APIs for seamless system connectivity.", price: "$8,000" },
      { name: "Database Design & Development", description: "Efficient, secure and scalable database solutions.", price: "$7,000" },
      { name: "Legacy Software Modernization", description: "Upgrade legacy systems for better performance and scalability.", price: "$15,000" },
      { name: "Software Integration Services", description: "Integrate third-party systems and software for a unified solution.", price: "$8,000" },
      { name: "Software Testing & Quality Assurance", description: "Ensure high performance, security and bug-free software.", price: "$5,000" },
    ],
    notes: [
      "Prices are in USD.",
      "These are fixed starting package prices for standard projects.",
      "Advanced features, third-party integrations or large-scale enterprise requirements may require a custom quotation.",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    highlight: "Services",
    subtitle: "High-performance mobile apps tailored to your business goals and user needs.",
    services: [
      { name: "Android App Development", description: "Feature-rich Android apps for smartphones and tablets.", price: "$12,000" },
      { name: "iOS App Development", description: "High-quality iOS apps for iPhone and iPad.", price: "$15,000" },
      { name: "Cross-Platform App Development", description: "Build once, deploy anywhere with cross-platform solutions.", price: "$18,000" },
      { name: "Enterprise Mobile Apps", description: "Scalable and secure mobile apps for enterprise operations.", price: "$50,000" },
      { name: "E-commerce Mobile Apps", description: "Powerful mobile apps for online stores and e-commerce businesses.", price: "$25,000" },
      { name: "Custom Business Apps", description: "Tailored mobile solutions to streamline your business processes.", price: "$20,000" },
      { name: "UI/UX Design for Mobile Apps", description: "Intuitive and user-friendly UI/UX designs that engage users.", price: "$3,500" },
      { name: "App Maintenance & Support (Monthly)", description: "Regular updates, bug fixes, and technical support.", price: "$1,000 / month" },
      { name: "API Integration", description: "Seamless integration with third-party APIs and services.", price: "$2,000" },
      { name: "App Performance Optimization", description: "Improve speed, performance, and overall user experience.", price: "$2,500" },
    ],
    notes: [
      "Prices are in USD.",
      "These are fixed starting package prices for standard projects.",
      "Advanced features, third-party integrations, AI capabilities, or large-scale enterprise requirements may require a custom quotation.",
    ],
  },
  {
    slug: "website-design-development",
    title: "Website Design &",
    highlight: "Development Services",
    subtitle: "Professional websites built for performance, user experience and business growth.",
    services: [
      { name: "Business Website Development", description: "Professional website for small & medium businesses.", price: "$2,000" },
      { name: "Corporate Website Design", description: "High-end corporate websites to showcase your brand.", price: "$5,000" },
      { name: "E-commerce Website Development", description: "Full-featured online stores with secure payment integration.", price: "$8,500" },
      { name: "Landing Page Design", description: "High-converting landing pages for your campaigns.", price: "$800" },
      { name: "Portfolio Website Development", description: "Showcase your work and attract more clients.", price: "$1,500" },
      { name: "WordPress Website Development", description: "Custom WordPress websites with easy management.", price: "$2,500" },
      { name: "Custom Website Development", description: "Tailored websites built with advanced functionalities.", price: "$12,000" },
      { name: "Website Redesign & Modernization", description: "Give your website a modern look and improve performance.", price: "$3,500" },
      { name: "Responsive (Mobile-Friendly) Design", description: "Ensure your website looks perfect on all devices.", price: "$1,200" },
      { name: "Website Maintenance & Updates (Monthly)", description: "Regular updates, backups, and technical support.", price: "$500 / month" },
    ],
    notes: [
      "Prices are in USD.",
      "Custom functionality, third-party integrations, or additional requirements may require a separate quotation.",
      "Enterprise-scale projects are quoted individually based on scope and complexity.",
    ],
  },
  {
    slug: "saas-solutions",
    title: "SaaS (Software as a Service)",
    highlight: "Solutions",
    subtitle: "Scalable, secure and subscription-based SaaS solutions to accelerate your business growth.",
    services: [
      { name: "Custom SaaS Platform Development", description: "End-to-end custom SaaS platform development tailored to your business model.", price: "$30,000" },
      { name: "Multi-Tenant SaaS Applications", description: "Develop secure and scalable multi-tenant SaaS applications.", price: "$25,000" },
      { name: "Subscription-Based Software", description: "Build subscription-based software with flexible plans and billing.", price: "$18,000" },
      { name: "Cloud-Native Applications", description: "Develop high-performance, scalable and cloud-native SaaS applications.", price: "$20,000" },
      { name: "Customer Self-Service Portals", description: "Create intuitive self-service portals for your customers.", price: "$12,000" },
      { name: "SaaS API Integration", description: "Seamlessly integrate APIs to enhance functionality and connectivity.", price: "$6,000" },
      { name: "User & Access Management", description: "Implement robust user roles, permissions and access control.", price: "$7,000" },
      { name: "Billing & Subscription Systems", description: "Set up secure billing, invoicing and subscription management systems.", price: "$8,000" },
      { name: "SaaS Maintenance & Support", description: "Ongoing maintenance, updates and technical support for your SaaS platform.", price: "$1,500 / Month" },
      { name: "Scalability & Performance Optimization", description: "Optimize your SaaS application for scalability, speed and high performance.", price: "$7,500" },
    ],
    notes: [
      "Prices are in USD.",
      "These are fixed starting package prices for standard projects.",
      "Advanced features, third-party integrations or enterprise-level requirements may require a custom quotation.",
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    highlight: "Services",
    subtitle: "Strategic IT consulting solutions to optimize your business processes, technology, and infrastructure.",
    services: [
      { name: "Requirement Analysis", description: "Analyze and document business requirements to align IT solutions with your goals.", price: "$2,000" },
      { name: "Technology Strategy Consulting", description: "Develop technology strategies to drive growth, efficiency, and innovation.", price: "$3,000" },
      { name: "Digital Transformation Consulting", description: "Guide your business through digital transformation and process modernization.", price: "$5,000" },
      { name: "Software Architecture Planning", description: "Design scalable, secure, and future-ready software architectures.", price: "$4,000" },
      { name: "IT Infrastructure Consulting", description: "Optimize and plan your IT infrastructure for performance, reliability, and scalability.", price: "$4,000" },
      { name: "Cloud Strategy Consulting", description: "Build cloud strategies for migration, optimization, and cost efficiency.", price: "$4,000" },
      { name: "Business Process Automation Consulting", description: "Automate and optimize business processes to improve productivity and reduce costs.", price: "$3,000" },
      { name: "System Integration Consulting", description: "Integrate systems and applications for seamless data flow and operations.", price: "$3,500" },
      { name: "Security Best Practices Consulting", description: "Implement security frameworks and best practices to protect your business.", price: "$3,000" },
      { name: "Technical Project Planning", description: "Plan and define technical roadmaps, timelines, and resource requirements.", price: "$2,500" },
    ],
    notes: [
      "Prices are in USD.",
      "These are fixed starting package prices for standard projects.",
      "Advanced features, third-party integrations or enterprise-level requirements may require a custom quotation.",
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    highlight: "Services",
    subtitle: "Reliable maintenance and support services to ensure your systems run smoothly, securely and efficiently.",
    services: [
      { name: "Bug Fixes & Troubleshooting", description: "Identify, fix and resolve bugs and technical issues quickly.", price: "$1,500" },
      { name: "Security Updates & Patches", description: "Apply security updates and patches to protect your systems from vulnerabilities.", price: "$1,000 / Month" },
      { name: "Performance Optimization", description: "Optimize system performance for speed, efficiency and reliability.", price: "$2,000" },
      { name: "Website Maintenance", description: "Regular updates, content changes and overall website maintenance.", price: "$300 / Month" },
      { name: "Software Maintenance", description: "Maintain and update your software for optimal performance.", price: "$400 / Month" },
      { name: "Database Maintenance", description: "Optimize, clean and maintain databases for data integrity and performance.", price: "$400 / Month" },
      { name: "Backup & Disaster Recovery", description: "Setup and manage backups and disaster recovery solutions.", price: "$1,500" },
      { name: "Server Monitoring", description: "24/7 monitoring of servers and systems to ensure uptime and reliability.", price: "$500 / Month" },
      { name: "Technical Support", description: "General technical support for issues, queries and guidance.", price: "$500 / Month" },
      { name: "Feature Enhancements & Version Upgrades", description: "Add new features and upgrade software versions as needed.", price: "$2,000" },
    ],
    notes: [
      "Prices are in USD.",
      "These are fixed starting package prices for standard projects.",
      "Advanced features, third-party integrations or enterprise-level requirements may require a custom quotation.",
    ],
  },
];
