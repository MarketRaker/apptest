import { MarketRakerBaseComponent } from "src/app/shared/components/base/market-raker-base.component";
import { TranslationService } from "src/app/shared/services/translation.service";
import { inject } from "@angular/core";

/**
 * Docs menu data with nested structure.
 * Each node has a name and an optional list of children.
 */
export interface DocsMenuNode {
    name: string;
    selected?: boolean;
    children?: DocsMenuNode[];
    link?: string;
}
export const DOCS_NAV_TREE: DocsMenuNode[] = [
    {
        name: 'Introduction',
        link: 'introduction/introduction',
        selected: true,
        children: [
            {
                name: 'What is MarketRaker?',
                link: 'introduction/what-is-marketraker'
            },
            {
                name: 'Features Overview',
                link: 'introduction/features-overview'
            },
            {
                name: 'How MarketRaker Works',
                link: 'introduction/how-marketraker-works'
            }
        ]
    },
    {
        name: 'Getting Started',
        link: 'getting-started/first-time-user-guide',
        children: [
            {
                name: 'First Time User Guide',
                link: 'getting-started/first-time-user-guide'
            },
            {
                name: 'Installation & Setup',
                link: 'getting-started/installation-and-setup'
            },
            {
                name: 'Navigating the Dashboard',
                link: 'getting-started/navigating-the-dashboard'
            },
            {
                name: 'Telegram Integration',
                link: 'getting-started/telegram-integration'
            },
            {
                name: 'Discord Integration',
                link: 'getting-started/discord-integration'
            },
            {
                name: 'WebHooks Integration',
                link: 'getting-started/webhooks-integration'
            }
        ]
    },
    {
        name: 'Tutorials (Incomplete)',
        link: 'tutorials',
        children: [
            {
                name: 'Setting Up Indicators',
                link: 'tutorials/setting-up-indicators'
            },
            {
                name: 'Interpreting AI Insights',
                link: 'tutorials/interpreting-ai-insights'
            },
            {
                name: 'Customizing AI Models',
                link: 'tutorials/customizing-ai-models'
            },
            {
                name: 'Integration with Trading Platforms',
                link: 'tutorials/integration-with-trading-platforms'
            },
            {
                name: 'Setting Up Alerts',
                link: 'tutorials/setting-up-alerts'
            },
            {
                name: 'Market direction API',
                link: 'tutorials/market-direction-api'
            }
        ],
    },
    {
        name: 'References',
        link: 'references/faqs',
        children: [
            {
                name: 'FAQs',
                link: 'references/faqs'
            },
            {
                name: 'API Documentation',
                link: 'references/api-documentation'
            },
            {
                name: 'Glossary',
                link: 'references/glossary'
            }
        ]
    },
    {
        name: 'Community & Support',
        link: 'community-support/rules',
        children: [
            {
                name: 'Join our Discord',
                link: 'community-support/join-our-discord'
            },
            {
                name: 'Join our Telegram',
                link: 'community-support/join-our-telegram'
            },
            {
                name: 'Contact Support',
                link: 'community-support/contact-support'
            }
        ]
    },
    {
        name: 'Release Notes & Updates',
        link: 'release-notes-and-updates'
    },
    {
        name: 'White Paper v1.0',
        link: 'white-paper-v1.0/index',
        children: [
            {
                name: 'Introduction',
                link: 'white-paper-v1.0/introduction/index',
                children: [
                    {
                        name: 'Core Idea and Value Proposition',
                        link: 'white-paper-v1.0/introduction/core-idea-and-value-proposition'
                    },
                    {
                        name: 'Harnessing Advanced Technologies',
                        link: 'white-paper-v1.0/introduction/harnessing-advanced-technologies'

                    },
                    {
                        name: 'A Holistic Approach',
                        link: 'white-paper-v1.0/introduction/a-holistic-approach'
                    },
                    {
                        name: 'Tokenisation as an Enabler',
                        link: 'white-paper-v1.0/introduction/tokenisation-as-an-enabler'
                    },
                    {
                        name: 'Looking Ahead',
                        link: 'white-paper-v1.0/introduction/looking-ahead'
                    }
                ]
            },
            {
                name: 'Market Analysis and Problem Statement',
                children: [
                    {
                        name: 'Overview of the trading market',
                        link: 'white-paper-v1.0/market-analysis-and-problem-statement/overview-of-the-trading-market'
                    },
                    {
                        name: 'Challenges faced by traders in the market',
                        link: 'white-paper-v1.0/market-analysis-and-problem-statement/challenges-faced-by-traders-in-the-market'
                    },
                    {
                        name: 'How MarketRaker Addresses These Challenges',
                        link: 'white-paper-v1.0/market-analysis-and-problem-statement/how-marketraker-addresses-these-challenges'
                    },
                    {
                        name: 'Competition',
                        link: 'white-paper-v1.0/market-analysis-and-problem-statement/competition'
                    },
                    {
                        name: 'Value MarketRaker Brings',
                        link: 'white-paper-v1.0/market-analysis-and-problem-statement/value-marketraker-brings'
                    },
                    {
                        name: 'MarketRaker results',
                        link: 'white-paper-v1.0/market-analysis-and-problem-statement/marketraker-results'
                    }
                ]
            },
            {
                name: 'MarketRaker Trading Indicators',
                link: 'white-paper-v1.0/marketraker-trading-indicators/index',
                children: [
                    {
                        name: 'Explanation of MarketRaker Trading Indicators',
                        link: 'white-paper-v1.0/marketraker-trading-indicators/explanation-of-marketraker-trading-indicators'
                    },
                    {
                        name: 'How the Indicators Work',
                        link: 'white-paper-v1.0/marketraker-trading-indicators/how-the-indicators-work'
                    },
                    {
                        name: 'Risk Model: Empowering Informed Trading Decisions',
                        link: 'white-paper-v1.0/marketraker-trading-indicators/risk-model-empowering-informed-trading-decisions'
                    },
                    {
                        name: 'Benefits of Using MarketRaker Trading Indicators',
                        link: 'white-paper-v1.0/marketraker-trading-indicators/benefits-of-using-marketraker-trading-indicators'
                    }
                ]
            },
            {
                name: 'Token and Tokenomics',
                link: 'white-paper-v1.0/token-and-tokenomics/explanation-of-the-marketraker-token',
                children: [
                    {
                        name: 'Explanation of the MarketRaker token',
                        link: 'white-paper-v1.0/token-and-tokenomics/explanation-of-the-marketraker-token'
                    },
                    {
                        name: 'Token distribution and allocation',
                        link: 'white-paper-v1.0/token-and-tokenomics/token-distribution-and-allocation'
                    },
                    {
                        name: 'Addressing the Importance',
                        link: 'white-paper-v1.0/token-and-tokenomics/addressing-the-importance-of-the'
                    }
                ]
            },
            {
                name: 'Roadmap',
                link: 'white-paper-v1.0/roadmap/2022-2023-product-building',
                children: [
                    {
                        name: '2022 - 2023 - Product building',
                        link: 'white-paper-v1.0/roadmap/2022-2023-product-building'
                    },
                    {
                        name: 'Final Quarter of 2023 - Launch',
                        link: 'white-paper-v1.0/roadmap/final-quarter-of-2023-launch'
                    },
                    {
                        name: 'Product growth 2024',
                        link: 'white-paper-v1.0/roadmap/product-growth-2024'
                    }
                ]
            },
            {
                name: 'Conclusion',
                link: 'white-paper-v1.0/conclusion/summary-of-marketraker-and-its-benefits',
                children: [
                    {
                        name: 'Summary of MarketRaker and its Benefits',
                        link: 'white-paper-v1.0/conclusion/summary-of-marketraker-and-its-benefits'
                    },
                    {
                        name: 'Final thoughts and call to action',
                        link: 'white-paper-v1.0/conclusion/final-thoughts-and-call-to-action'
                    }
                ]
            }
        ]
    },
    {
        name: 'Legal',
        link: 'legal/terms-of-use',
        children: [
            {
                name: 'Terms of Use',
                link: 'legal/terms-of-use'
            },
            {
                name: 'Privacy Policy',
                link: 'legal/privacy-policy'
            }
        ]
    },
];