import { Zap, Star, ShieldCheck } from 'lucide-react';

export const pricingPlans = [
    {
        name: 'Starter',
        tagline: 'Essential - Solo Creators',
        monthlyPrice: 29,
        bottomPrice: 24,
        desc: 'Perfect for solo stylists and independent creators.',
        cta: 'Start Free Trial',
        href: 'https://app.glammateai.com/',
        icon: Zap,
        highlight: false,
        features: [
            'AI Assistant (Chat Only)',
            '500 Client Interactions / month',
            '1 Location',
            '1 Team Member',
            'WhatsApp, Website, & Instagram DM Support',
            '24/7 Smart Booking',
            'Rescheduling & Reminders',
            'AI Chat Assistant (Text Only)',
            'FAQ Automation',
            'Calendar Sync',
            'Single Channel Integration',
            'Knowledge Base (Manual Upload)',
            'Appointment Notifications'
        ],
        notIncluded: [
            'AI Voice Assistant',
            'Advanced Analytics',
            'Team Management',
            'Upsell Campaigns',
            'Multi-Location Support',
            'Custom Branding'
        ]
    },
    {
        name: 'Growth Plan',
        tagline: 'Built for Busy Salons',
        monthlyPrice: 49,
        bottomPrice: 39,
        desc: 'Best for growing teams that need voice + chat automation and multi-channel support.',
        cta: 'Start Free Trial',
        href: 'https://app.glammateai.com/',
        icon: Star,
        highlight: true,
        features: [
            '1 AI Chat + Voice Assistant',
            '2,000 Interactions / month',
            '3 Team Members',
            'Up to 2 Locations',
            'WhatsApp, Website, IG, FB, SMS, Email',
            'Everything in Starter',
            'Auto Follow-ups & Review Requests',
            'Advanced FAQ & Knowledge Base',
            'Analytics Dashboard',
            'Calendar Integration',
            'Multi-Channel Booking'
        ],
        notIncluded: [
            'Priority Support',
            'Custom Integrations',
            'Dedicated Account Manager'
        ]
    },
    {
        name: 'Pro Plan',
        tagline: 'For Multi-Location Empires',
        monthlyPrice: 99,
        bottomPrice: 79,
        desc: 'Enterprise-level automation with customization, support, and insights.',
        cta: 'Contact Sales',
        href: '#contact',
        icon: ShieldCheck,
        highlight: false,
        features: [
            'Unlimited AI Assistants',
            '10,000+ Interactions / month',
            'Unlimited Team Members',
            'Multi-Branch Dashboard',
            'Full Omnichannel Support',
            'Everything in Growth',
            'Dedicated Account Manager',
            'AI-Driven Insights',
            'Team Roles & Permissions',
            'Priority Support',
            'Custom Integrations'
        ],
        notIncluded: [
            'White-label branding options',
            'Dedicated account manager',
            'Advanced API access for custom workflows',
            'Priority onboarding support',
            'Multi-brand or franchise dashboard view',
            'Extended data retention (beyond 3 months)',
            'SLA-backed uptime guarantees',
            'AI training for niche workflows'
        ]
    },
];
