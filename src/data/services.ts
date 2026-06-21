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
      { name: "Custom Software Development", description: "Tailored software solutions built specifically for your business needs.", price: "Rs. 4,177,500" },
      { name: "Enterprise Software Development", description: "Robust and scalable software for large enterprise operations.", price: "Rs. 13,925,000" },
      { name: "SaaS Product Development", description: "End-to-end SaaS solutions from concept to deployment.", price: "Rs. 6,962,500" },
      { name: "CRM Software Development", description: "Manage leads, customers and sales with custom CRM solutions.", price: "Rs. 5,013,000" },
      { name: "ERP Software Development", description: "Comprehensive ERP solutions to streamline your core business processes.", price: "Rs. 8,355,000" },
      { name: "Inventory Management Systems", description: "Real-time inventory tracking and management solutions.", price: "Rs. 3,342,000" },
      { name: "Human Resource Management (HRM) Software", description: "Simplify HR processes and manage your workforce efficiently.", price: "Rs. 3,342,000" },
      { name: "Accounting & Billing Software", description: "Automated accounting, invoicing and financial management solutions.", price: "Rs. 2,785,000" },
      { name: "Point of Sale (POS) Systems", description: "Fast, reliable and secure POS solutions for your business.", price: "Rs. 2,228,000" },
      { name: "Hospital Management Systems", description: "Complete hospital management and patient care solutions.", price: "Rs. 5,570,000" },
      { name: "School & Learning Management Systems", description: "Digital learning and school management solutions.", price: "Rs. 3,342,000" },
      { name: "Hotel & Restaurant Management Software", description: "Streamline operations and enhance guest experience.", price: "Rs. 3,342,000" },
      { name: "Logistics & Fleet Management Software", description: "Optimize fleet operations, routes and deliveries.", price: "Rs. 4,177,500" },
      { name: "Customer Portals & Client Dashboards", description: "Custom portals and dashboards for better client management and insights.", price: "Rs. 2,785,000" },
      { name: "Workflow Automation Software", description: "Automate business workflows and improve productivity.", price: "Rs. 3,342,000" },
      { name: "API Development & Integration", description: "Build and integrate APIs for seamless system connectivity.", price: "Rs. 2,228,000" },
      { name: "Database Design & Development", description: "Efficient, secure and scalable database solutions.", price: "Rs. 1,949,500" },
      { name: "Legacy Software Modernization", description: "Upgrade legacy systems for better performance and scalability.", price: "Rs. 4,177,500" },
      { name: "Software Integration Services", description: "Integrate third-party systems and software for a unified solution.", price: "Rs. 2,228,000" },
      { name: "Software Testing & Quality Assurance", description: "Ensure high performance, security and bug-free software.", price: "Rs. 1,392,500" },
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
      { name: "Android App Development", description: "Feature-rich Android apps for smartphones and tablets.", price: "Rs. 3,342,000" },
      { name: "iOS App Development", description: "High-quality iOS apps for iPhone and iPad.", price: "Rs. 4,177,500" },
      { name: "Cross-Platform App Development", description: "Build once, deploy anywhere with cross-platform solutions.", price: "Rs. 5,013,000" },
      { name: "Enterprise Mobile Apps", description: "Scalable and secure mobile apps for enterprise operations.", price: "Rs. 13,925,000" },
      { name: "E-commerce Mobile Apps", description: "Powerful mobile apps for online stores and e-commerce businesses.", price: "Rs. 6,962,500" },
      { name: "Custom Business Apps", description: "Tailored mobile solutions to streamline your business processes.", price: "Rs. 5,570,000" },
      { name: "UI/UX Design for Mobile Apps", description: "Intuitive and user-friendly UI/UX designs that engage users.", price: "Rs. 974,750" },
      { name: "App Maintenance & Support (Monthly)", description: "Regular updates, bug fixes, and technical support.", price: "Rs. 278,500 / month" },
      { name: "API Integration", description: "Seamless integration with third-party APIs and services.", price: "Rs. 557,000" },
      { name: "App Performance Optimization", description: "Improve speed, performance, and overall user experience.", price: "Rs. 696,250" },
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
      { name: "Business Website Development", description: "Professional website for small & medium businesses.", price: "Rs. 557,000" },
      { name: "Corporate Website Design", description: "High-end corporate websites to showcase your brand.", price: "Rs. 1,392,500" },
      { name: "E-commerce Website Development", description: "Full-featured online stores with secure payment integration.", price: "Rs. 2,367,250" },
      { name: "Landing Page Design", description: "High-converting landing pages for your campaigns.", price: "Rs. 222,800" },
      { name: "Portfolio Website Development", description: "Showcase your work and attract more clients.", price: "Rs. 417,750" },
      { name: "WordPress Website Development", description: "Custom WordPress websites with easy management.", price: "Rs. 696,250" },
      { name: "Custom Website Development", description: "Tailored websites built with advanced functionalities.", price: "Rs. 3,342,000" },
      { name: "Website Redesign & Modernization", description: "Give your website a modern look and improve performance.", price: "Rs. 974,750" },
      { name: "Responsive (Mobile-Friendly) Design", description: "Ensure your website looks perfect on all devices.", price: "Rs. 334,200" },
      { name: "Website Maintenance & Updates (Monthly)", description: "Regular updates, backups, and technical support.", price: "Rs. 139,250 / month" },
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
      { name: "Custom SaaS Platform Development", description: "End-to-end custom SaaS platform development tailored to your business model.", price: "Rs. 8,355,000" },
      { name: "Multi-Tenant SaaS Applications", description: "Develop secure and scalable multi-tenant SaaS applications.", price: "Rs. 6,962,500" },
      { name: "Subscription-Based Software", description: "Build subscription-based software with flexible plans and billing.", price: "Rs. 5,013,000" },
      { name: "Cloud-Native Applications", description: "Develop high-performance, scalable and cloud-native SaaS applications.", price: "Rs. 5,570,000" },
      { name: "Customer Self-Service Portals", description: "Create intuitive self-service portals for your customers.", price: "Rs. 3,342,000" },
      { name: "SaaS API Integration", description: "Seamlessly integrate APIs to enhance functionality and connectivity.", price: "Rs. 1,671,000" },
      { name: "User & Access Management", description: "Implement robust user roles, permissions and access control.", price: "Rs. 1,949,500" },
      { name: "Billing & Subscription Systems", description: "Set up secure billing, invoicing and subscription management systems.", price: "Rs. 2,228,000" },
      { name: "SaaS Maintenance & Support", description: "Ongoing maintenance, updates and technical support for your SaaS platform.", price: "Rs. 417,750 / Month" },
      { name: "Scalability & Performance Optimization", description: "Optimize your SaaS application for scalability, speed and high performance.", price: "Rs. 2,088,750" },
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
      { name: "Requirement Analysis", description: "Analyze and document business requirements to align IT solutions with your goals.", price: "Rs. 557,000" },
      { name: "Technology Strategy Consulting", description: "Develop technology strategies to drive growth, efficiency, and innovation.", price: "Rs. 835,500" },
      { name: "Digital Transformation Consulting", description: "Guide your business through digital transformation and process modernization.", price: "Rs. 1,392,500" },
      { name: "Software Architecture Planning", description: "Design scalable, secure, and future-ready software architectures.", price: "Rs. 1,114,000" },
      { name: "IT Infrastructure Consulting", description: "Optimize and plan your IT infrastructure for performance, reliability, and scalability.", price: "Rs. 1,114,000" },
      { name: "Cloud Strategy Consulting", description: "Build cloud strategies for migration, optimization, and cost efficiency.", price: "Rs. 1,114,000" },
      { name: "Business Process Automation Consulting", description: "Automate and optimize business processes to improve productivity and reduce costs.", price: "Rs. 835,500" },
      { name: "System Integration Consulting", description: "Integrate systems and applications for seamless data flow and operations.", price: "Rs. 974,750" },
      { name: "Security Best Practices Consulting", description: "Implement security frameworks and best practices to protect your business.", price: "Rs. 835,500" },
      { name: "Technical Project Planning", description: "Plan and define technical roadmaps, timelines, and resource requirements.", price: "Rs. 696,250" },
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
      { name: "Bug Fixes & Troubleshooting", description: "Identify, fix and resolve bugs and technical issues quickly.", price: "Rs. 417,750" },
      { name: "Security Updates & Patches", description: "Apply security updates and patches to protect your systems from vulnerabilities.", price: "Rs. 278,500 / Month" },
      { name: "Performance Optimization", description: "Optimize system performance for speed, efficiency and reliability.", price: "Rs. 557,000" },
      { name: "Website Maintenance", description: "Regular updates, content changes and overall website maintenance.", price: "Rs. 83,550 / Month" },
      { name: "Software Maintenance", description: "Maintain and update your software for optimal performance.", price: "Rs. 111,400 / Month" },
      { name: "Database Maintenance", description: "Optimize, clean and maintain databases for data integrity and performance.", price: "Rs. 111,400 / Month" },
      { name: "Backup & Disaster Recovery", description: "Setup and manage backups and disaster recovery solutions.", price: "Rs. 417,750" },
      { name: "Server Monitoring", description: "24/7 monitoring of servers and systems to ensure uptime and reliability.", price: "Rs. 139,250 / Month" },
      { name: "Technical Support", description: "General technical support for issues, queries and guidance.", price: "Rs. 139,250 / Month" },
      { name: "Feature Enhancements & Version Upgrades", description: "Add new features and upgrade software versions as needed.", price: "Rs. 557,000" },
    ],
    notes: [
      "Prices are in USD.",
      "These are fixed starting package prices for standard projects.",
      "Advanced features, third-party integrations or enterprise-level requirements may require a custom quotation.",
    ],
  },
];
