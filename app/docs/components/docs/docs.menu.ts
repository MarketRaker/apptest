import { MarketRakerBaseComponent } from "src/app/shared/components/base/market-raker-base.component";
import { TranslationService } from "src/app/shared/services/translation.service";
import { inject } from "@angular/core";

/**
 * Docs menu data with nested structure.
 * Each node has a name and an optional list of children.
 */
export interface DocsMenuNode {
  name: {
    key: string,
    defaultValue: string
  };
  selected?: boolean;
  children?: DocsMenuNode[];
  link?: string;
}

export const DOCS_NAV_TREE: DocsMenuNode[] = [
  {
    name: {
      key: 'docs_nav_tree.introduction.name',
      defaultValue: 'Introduction'
    },
    link: 'introduction/introduction',
    selected: true,
    children: [
      {
        name: {
          key: 'docs_nav_tree.introduction.what_is_marketraker.name',
          defaultValue: 'What is MarketRaker'
        },
        link: 'introduction/what-is-marketraker'
      },
      {
        name: {
          key: 'docs_nav_tree.introduction.features_overview.name',
          defaultValue: 'Features Overview'
        },
        link: 'introduction/features-overview'
      },
      {
        name: {
          key: 'docs_nav_tree.introduction.how_marketraker_works.name',
          defaultValue: 'How MarketRaker Works'
        },
        link: 'introduction/how-marketraker-works'
      }
    ]
  },
  {
    name: {
      key: 'docs_nav_tree.getting_started.name',
      defaultValue: 'Getting Started'
    },
    link: 'getting-started/first-time-user-guide',
    children: [
      {
        name: {
          key: 'docs_nav_tree.getting_started.first_time_user_guide.name',
          defaultValue: 'First Time User Guide'
        },
        link: 'getting-started/first-time-user-guide'
      },
      {
        name: {
          key: 'docs_nav_tree.getting_started.installation_setup.name',
          defaultValue: 'Installation and Setup'
        },
        link: 'getting-started/installation-and-setup'
      },
      {
        name: {
          key: 'docs_nav_tree.getting_started.navigating_dashboard.name',
          defaultValue: 'Navigating the Dashboard'
        },
        link: 'getting-started/navigating-the-dashboard'
      },
      {
        name: {
          key: 'docs_nav_tree.getting_started.telegram_integration.name',
          defaultValue: 'Telegram Integration'
        },
        link: 'getting-started/telegram-integration'
      },
      {
        name: {
          key: 'docs_nav_tree.getting_started.discord_integration.name',
          defaultValue: 'Discord Integration'
        },
        link: 'getting-started/discord-integration'
      },
      {
        name: {
          key: 'docs_nav_tree.getting_started.webhooks_integration.name',
          defaultValue: 'Webhooks Integration'
        },
        link: 'getting-started/webhooks-integration'
      }
    ]
  },
  {
    name: {
      key: 'docs_nav_tree.api_documentation.name',
      defaultValue: 'API Documentation'
    },
    link: 'api-documentation/v1/overview',
    selected: true,
    children: [
      {
        name: {
          key: 'docs_nav_tree.api_documentation.v1.overview.name',
          defaultValue: 'Overview'
        },
        link: 'api-documentation/v1/overview'
      },
      {
        name: {
          key: 'docs_nav_tree.api_documentation.v1.getting-started.name',
          defaultValue: 'Getting Started'
        },
        link: 'api-documentation/v1/getting-started'
      },
      {
        name: {
          key: 'docs_nav_tree.api_documentation.v1.generating-signature.name',
          defaultValue: 'Generating a Signature'
        },
        link: 'api-documentation/v1/generating-signature'
      },
      {
        name: {
          key: 'docs_nav_tree.api_documentation.v1.endpoints.name',
          defaultValue: 'Endpoints'
        },
        link: 'api-documentation/v1/endpoints/get-latest-indicator',
        children : [
          {
            name: {
              key: 'docs_nav_tree.api_documentation.v1.endpoints.get_latest_indicator.name',
              defaultValue: 'Get Latest Indicator'
            },
            link: 'api-documentation/v1/endpoints/get-latest-indicator'
          },
          {
            name: {
              key: 'docs_nav_tree.api_documentation.v1.endpoints.generate_indicators.name',
              defaultValue: 'Generate Indicators'
            },
            link: 'api-documentation/v1/endpoints/generate-indicators'
          },
          {
            name: {
              key: 'docs_nav_tree.api_documentation.v1.endpoints.get_market_direction.name',
              defaultValue: 'Get Market Direction'
            },
            link: 'api-documentation/v1/endpoints/get-market-direction'
          },
          {
            name: {
              key: 'docs_nav_tree.api_documentation.v1.endpoints.create_custom_data_scaler.name',
              defaultValue: 'Create Custom Data Scaler'
            },
            link: 'api-documentation/v1/endpoints/create-custom-data-scaler'
          },
          {
            name: {
              key: 'docs_nav_tree.api_documentation.v1.endpoints.generate_indicators_with_custom_data_scalers.name',
              defaultValue: 'Generate Indicators with Custom Data Scalers'
            },
            link: 'api-documentation/v1/endpoints/generate-indicators-with-custom-data-scalers'
          },
          {
            name: {
              key: 'docs_nav_tree.api_documentation.v1.endpoints.get_custom_data_scalers.name',
              defaultValue: 'Get Custom Data Scalers'
            },
            link: 'api-documentation/v1/endpoints/get-custom-data-scalers'
          },
          {
            name: {
              key: 'docs_nav_tree.api_documentation.v1.endpoints.delete_custom_data_scaler.name',
              defaultValue: 'Delete Custom Data Scaler'
            },
            link: 'api-documentation/v1/endpoints/delete-custom-data-scaler'
          }
        ]
      },
    ]
  },
  {
    name: {
      key: 'docs_nav_tree.api_documentation.v1.apiwebhooks.name',
      defaultValue: 'API webhook indicators'
    },
    link: 'api-documentation/v1/apiwebhooks/webhook-overview',
    children : [
      {
        name: {
        key: 'docs_nav_tree.api_documentation.v1.apiwebhooks.overview.name',
        defaultValue: 'Overview'
        },
        link: 'api-documentation/v1/apiwebhooks/webhook-overview'
      },
      {
        name: {
          key: 'docs_nav_tree.api_documentation.v1.apiwebhooks.receiving-indicators.name',
          defaultValue: 'Receiving Indicators'
        },
        link: 'api-documentation/v1/apiwebhooks/receiving-indicators'
      },
      {
        name: {
        key: 'docs_nav_tree.api_documentation.v1.apiwebhooks.verifying-indicators.name',
        defaultValue: 'Verifying Indicators'
        },
        link: 'api-documentation/v1/apiwebhooks/indicator-verification'
      },
      {
        name: {
          key: 'docs_nav_tree.api_documentation.v1.apiwebhooks.example-indicators.name',
          defaultValue: 'Indicator Example'
        },
        link: 'api-documentation/v1/apiwebhooks/example-indicators'
      }
    ]
  },
  {
    name: {
      key: 'docs_nav_tree.tutorials.name',
      defaultValue: 'Tutorials'
    },
    link: 'tutorials/onboarding',
    children: [
      {
        name : {
          key: 'docs_nav_tree.tutorials.onboarding.name',
          defaultValue: 'Onboarding'
        },
        link: 'tutorials/onboarding'
      }, 
      // {
      //   name: {
      //     key: 'docs_nav_tree.tutorials_incomplete.setting_up_indicators.name',
      //     defaultValue: 'Setting Up Indicators'
      //   },
      //   link: 'tutorials/setting-up-indicators'
      // },
      // {
      //   name: {
      //     key: 'docs_nav_tree.tutorials_incomplete.interpreting_ai_insights.name',
      //     defaultValue: 'Interpreting AI Insights'
      //   },
      //   link: 'tutorials/interpreting-ai-insights'
      // },
      // {
      //   name: {
      //     key: 'docs_nav_tree.tutorials_incomplete.customizing_ai_models.name',
      //     defaultValue: 'Customizing AI Models'
      //   },
      //   link: 'tutorials/customizing-ai-models'
      // },
      // {
      //   name: {
      //     key: 'docs_nav_tree.tutorials_incomplete.integration_with_trading_platforms.name',
      //     defaultValue: 'Integration with Trading Platforms'
      //   },
      //   link: 'tutorials/integration-with-trading-platforms'
      // },
      // {
      //   name: {
      //     key: 'docs_nav_tree.tutorials_incomplete.setting_up_alerts.name',
      //     defaultValue: 'Setting Up Alerts'
      //   },
      //   link: 'tutorials/setting-up-alerts'
      // },
      // {
      //   name: {
      //     key: 'docs_nav_tree.tutorials_incomplete.market_direction_api.name',
      //     defaultValue: 'Market Direction API'
      //   },
      //   link: 'tutorials/market-direction-api'
      // }
    ],
  },
  {
    name: {
      key: 'docs_nav_tree.references.name',
      defaultValue: 'References'
    },
    link: 'references/faqs',
    children: [
      {
        name: {
          key: 'docs_nav_tree.references.faqs.name',
          defaultValue: 'FAQs'
        },
        link: 'references/faqs'
      },
      // {
      //   name: {
      //     key: 'docs_nav_tree.references.api_documentation.name',
      //     defaultValue: 'API Documentation'
      //   },
      //   link: 'references/api-documentation'
      // },
      {
        name: {
          key: 'docs_nav_tree.references.glossary.name',
          defaultValue: 'Glossary'
        },
        link: 'references/glossary'
      }
    ]
  },
  {
    name: {
      key: 'docs_nav_tree.community_support.name',
      defaultValue: 'Community & Support'
    },
    link: 'community-support/rules',
    children: [
      {
        name: {
          key: 'docs_nav_tree.community_support.join_our_discord.name',
          defaultValue: 'Join our Discord'
        },
        link: 'community-support/join-our-discord'
      },
      {
        name: {
          key: 'docs_nav_tree.community_support.contact_support.name',
          defaultValue: 'Contact Support'
        },
        link: 'community-support/contact-support'
      }
    ]
  },
  {
    name: {
      key: 'docs_nav_tree.release_notes_updates.name',
      defaultValue: 'Release Notes & Updates'
    },
    link: 'release-notes-and-updates'
  },
  {
    name: {
      key: 'docs_nav_tree.white_paper_v1_0.name',
      defaultValue: 'White Paper v1.0'
    },
    link: 'white-paper-v1.0/index',
    children: [
      {
        name: {
          key: 'docs_nav_tree.white_paper_v1_0.introduction.name',
          defaultValue: 'Introduction'
        },
        link: 'white-paper-v1.0/introduction/index',
        children: [
          {
            name: {
              key: 'docs_nav_tree.white_paper_v1_0.introduction.core_idea_value_proposition.name',
              defaultValue: 'Core Idea and Value Proposition'
            },
            link: 'white-paper-v1.0/introduction/core-idea-and-value-proposition'
          },
          {
            name: {
              key: 'docs_nav_tree.white_paper_v1_0.introduction.harnessing_advanced_technologies.name',
              defaultValue: 'Harnessing Advanced Technologies'
            },
            link: 'white-paper-v1.0/introduction/harnessing-advanced-technologies'
          },
          {
            name: {
              key: 'docs_nav_tree.white_paper_v1_0.introduction.holistic_approach.name',
              defaultValue: 'A Holistic Approach'
            },
            link: 'white-paper-v1.0/introduction/a-holistic-approach'
          },
          {
            name: {
              key: 'docs_nav_tree.white_paper_v1_0.introduction.tokenisation_as_an_enabler.name',
              defaultValue: 'Tokenisation as an Enabler'
            },
            link: 'white-paper-v1.0/introduction/tokenisation-as-an-enabler'
          },
          {
            name: {
              key: 'docs_nav_tree.white_paper_v1_0.introduction.looking_ahead.name',
              defaultValue: 'Looking Ahead'
            },
            link: 'white-paper-v1.0/introduction/looking-ahead'
          }
        ]
      },
      {
        name: {
          key: 'docs_nav_tree.white_paper_v1_0.market_analysis_and_problem_statement.name',
          defaultValue: 'Market Analysis and Problem Statement'
        },
        children: [
          {
            name: {
              key: 'docs_nav_tree.white_paper_v1_0.market_analysis_and_problem_statement.overview_of_the_trading_market.name',
              defaultValue: 'Overview of the trading market'
            },
            link: 'white-paper-v1.0/market-analysis-and-problem-statement/overview-of-the-trading-market'
          },
          {
            name: {
              key: 'docs_nav_tree.white_paper_v1_0.market_analysis_and_problem_statement.challenges_faced_by_traders_in_the_market.name',
              defaultValue: 'Challenges faced by traders in the market'
            },
            link: 'white-paper-v1.0/market-analysis-and-problem-statement/challenges-faced-by-traders-in-the-market'
          },
          {
            name: {
              key: 'docs_nav_tree.white_paper_v1_0.market_analysis_and_problem_statement.how_marketraker_addresses_these_challenges.name',
              defaultValue: 'How MarketRaker Addresses These Challenges'
            },
            link: 'white-paper-v1.0/market-analysis-and-problem-statement/how-marketraker-addresses-these-challenges'
          },
          // {
          //   name: {
          //     key: 'docs_nav_tree.white_paper_v1_0.market_analysis_and_problem_statement.conclusion.name',
          //     defaultValue: 'Conclusion'
          //   },
          //   link: 'white-paper-v1.0/market-analysis-and-problem-statement/conclusion'
          // }
        ],
        link: 'white-paper-v1.0/market-analysis-and-problem-statement/overview-of-the-trading-market'
      },
      // {
      //   name: {
      //     key: 'docs_nav_tree.white_paper_v1_0.technical_architecture.name',
      //     defaultValue: 'Technical Architecture'
      //   },
      //   children: [
      //     {
      //       name: {
      //         key: 'docs_nav_tree.white_paper_v1_0.technical_architecture.architecture_overview.name',
      //         defaultValue: 'Architecture Overview'
      //       },
      //       link: 'white-paper-v1.0/technical-architecture/architecture-overview'
      //     },
      //     {
      //       name: {
      //         key: 'docs_nav_tree.white_paper_v1_0.technical_architecture.tech_stack.name',
      //         defaultValue: 'Tech Stack'
      //       },
      //       link: 'white-paper-v1.0/technical-architecture/tech-stack'
      //     },
      //     {
      //       name: {
      //         key: 'docs_nav_tree.white_paper_v1_0.technical_architecture.system_design.name',
      //         defaultValue: 'System Design'
      //       },
      //       link: 'white-paper-v1.0/technical-architecture/system-design'
      //     }
      //   ],
      //   link: 'white-paper-v1.0/technical-architecture'
      // },
      // {
      //   name: {
      //     key: 'docs_nav_tree.white_paper_v1_0.business_model.name',
      //     defaultValue: 'Business Model'
      //   },
      //   children: [
      //     {
      //       name: {
      //         key: 'docs_nav_tree.white_paper_v1_0.business_model.revenue_streams.name',
      //         defaultValue: 'Revenue Streams'
      //       },
      //       link: 'white-paper-v1.0/business-model/revenue-streams'
      //     },
      //     {
      //       name: {
      //         key: 'docs_nav_tree.white_paper_v1_0.business_model.value_proposition.name',
      //         defaultValue: 'Value Proposition'
      //       },
      //       link: 'white-paper-v1.0/business-model/value-proposition'
      //     },
      //     {
      //       name: {
      //         key: 'docs_nav_tree.white_paper_v1_0.business_model.growth_strategy.name',
      //         defaultValue: 'Growth Strategy'
      //       },
      //       link: 'white-paper-v1.0/business-model/growth-strategy'
      //     }
      //   ],
      //   link: 'white-paper-v1.0/business-model'
      // },
      // {
      //   name: {
      //     key: 'docs_nav_tree.white_paper_v1_0.regulatory_considerations.name',
      //     defaultValue: 'Regulatory Considerations'
      //   },
      //   children: [
      //     {
      //       name: {
      //         key: 'docs_nav_tree.white_paper_v1_0.regulatory_considerations.legal_compliance.name',
      //         defaultValue: 'Legal Compliance'
      //       },
      //       link: 'white-paper-v1.0/regulatory-considerations/legal-compliance'
      //     },
      //     {
      //       name: {
      //         key: 'docs_nav_tree.white_paper_v1_0.regulatory_considerations.industry_standards.name',
      //         defaultValue: 'Industry Standards'
      //       },
      //       link: 'white-paper-v1.0/regulatory-considerations/industry-standards'
      //     }
      //   ],
      //   link: 'white-paper-v1.0/regulatory-considerations'
      // },
      // {
      //   name: {
      //     key: 'docs_nav_tree.white_paper_v1_0.conclusion.name',
      //     defaultValue: 'Conclusion'
      //   },
      //   link: 'white-paper-v1.0/conclusion'
      // }
    ]
  },
  // {
  //   name: {
  //     key: 'docs_nav_tree.about_us',
  //     defaultValue: 'About Us'
  //   },
  //   link: 'about-us',
  // },
  {
    name: {
      key: 'docs_nav_tree.terms_and_conditions.name',
      defaultValue: 'Terms and Conditions'
    },
    link: 'legal/terms-of-use',
  },
  {
    name: {
      key: 'docs_nav_tree.privacy_policy.name',
      defaultValue: 'Privacy Policy'
    },
    link: 'legal/privacy-policy',
  },
];
