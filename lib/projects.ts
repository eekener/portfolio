export type Project = {
  slug: string;
  client: string;
  title: string;
  desc: string;
  services: string[];
  tags: string[];
  image: string;
  imageMobile?: string;
  year: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: 'iwrite4him',
    client: 'Iwrite4him',
    title: 'Performance Optimisation & Bug Fixes',
    desc: 'Full front-end and server-side performance overhaul of a WordPress website, combined with resolving visual and functional bugs to restore a smooth user experience.',
    services: ['Custom Functionality', 'Design to Website', 'Web UX-UI Design'],
    tags: ['WordPress', 'PHP'],
    image: '/projects/iwrite4him.webp',
    imageMobile: '/projects/iwrite4him-mobile.webp',
    year: '2018',
    challenge:
      'The website was suffering from slow load times that were hurting both visitor retention and search engine visibility. On top of the performance problems, a number of visual inconsistencies and functional bugs had accumulated over time, creating friction for users and leaving the site feeling unreliable and unpolished.',
    solution:
      'Performed a thorough performance audit and applied optimisations across both the front-end and server side — including image compression, asset minification, lazy loading, caching configuration, and PHP-level improvements. Alongside the speed work, systematically identified and resolved all critical visual and functional bugs across the site, bringing the overall user experience back to the standard the project deserved.',
    results: [
      { metric: 'Load Time', value: '−50%' },
      { metric: 'Bugs Resolved', value: 'All' },
      { metric: 'UX Issues', value: 'Fixed' },
    ],
  },
  {
    slug: 'pera-iklimlendirme',
    client: 'Pera Iklimlendirme',
    title: 'WooCommerce Build, Migration & Speed Optimisation',
    desc: 'End-to-end WordPress WooCommerce implementation — from design integration and server migration to full performance optimisation for a Turkish HVAC supplier.',
    services: ['Maintenance & Updates', 'Speed Optimization', 'Web Development'],
    tags: ['WordPress', 'PHP', 'MySQL'],
    image: '/projects/peraiklimlendirme.webp',
    year: '2019',
    challenge:
      'The client needed a fully functional WooCommerce storefront built to their existing design, then moved from a development environment to their live hosting server — all without disrupting their business. The existing site also suffered from poor load times that were negatively affecting both user experience and search engine visibility.',
    solution:
      'Implemented the approved design onto a WordPress WooCommerce template, configuring products, categories, and the checkout flow to match the client\'s requirements. Handled the complete server migration — including database export and import, DNS updates, and post-migration testing — to ensure a clean and seamless go-live. Following the launch, carried out a thorough performance audit and applied front-end and server-side optimisations including caching, image compression, and database query improvements.',
    results: [
      { metric: 'Migration', value: 'Zero Downtime' },
      { metric: 'Load Time', value: '−45%' },
      { metric: 'Store', value: 'Live' },
    ],
  },
  {
    slug: 'kamerakoulu',
    client: 'Kamerakoulu',
    title: 'Style Customisations & Bug Fixes',
    desc: 'Tailored a WordPress theme through targeted style customisations and resolved outstanding bugs left unaddressed by the original template developers.',
    services: ['Maintenance & Updates', 'Web Development'],
    tags: ['WordPress', 'PHP', 'MySQL'],
    image: '/projects/kamerakoulu.webp',
    imageMobile: '/projects/kamerakoulu-mobile.webp',
    year: '2019',
    challenge:
      'The off-the-shelf WordPress template delivered a generic look and feel that did not align with the client\'s brand, and a number of bugs introduced by the theme developers had been left unresolved — creating friction throughout the site and undermining the overall user experience.',
    solution:
      'Conducted a full review of the theme\'s CSS and template files to identify areas where the visual presentation could be refined. Applied targeted style customisations across typography, spacing, and layout to bring the site in line with the client\'s expectations. In parallel, systematically tracked down and resolved the outstanding template bugs, ensuring all interactive elements and page sections behaved correctly across browsers and devices.',
    results: [
      { metric: 'Bugs Resolved', value: 'All' },
      { metric: 'UX', value: 'Polished' },
      { metric: 'Brand Fit', value: 'Improved' },
    ],
  },
  {
    slug: 'caroline',
    client: 'Caroline Redman Lusher',
    title: 'Custom Styling Fixes & Mobile Menu',
    desc: 'Repaired broken elements across the site and built a custom JavaScript mobile menu trigger to restore smooth navigation on smaller devices.',
    services: ['Custom Functionality', 'Web Development', 'Web UX-UI Design'],
    tags: ['WordPress', 'PHP', 'MySQL'],
    image: '/projects/carolineredmanlusher.webp',
    imageMobile: '/projects/carolineredmanlusher-mobile.webp',
    year: '2019',
    challenge:
      'Several elements across the website had broken styling that left sections looking unfinished and inconsistent. On mobile devices, the navigation was non-functional — there was no menu trigger in place — making it impossible for visitors on phones and tablets to navigate the site properly.',
    solution:
      'Identified and resolved all broken styling by applying targeted CSS fixes across the affected elements, restoring visual consistency throughout the site. Built and integrated a custom JavaScript solution to trigger the mobile menu on smaller screen sizes, ensuring smooth and reliable navigation for mobile users without relying on a plugin.',
    results: [
      { metric: 'Mobile Nav', value: 'Fixed' },
      { metric: 'Broken Elements', value: 'Resolved' },
      { metric: 'Devices', value: 'All Sizes' },
    ],
  },
  {
    slug: 'agv-shop',
    client: 'AGV Shop',
    title: 'WooCommerce Build, Migration & Speed Optimisation',
    desc: 'Full WooCommerce implementation from a Figma design, followed by server migration and performance optimisation for a smooth and fast online store launch.',
    services: ['Speed Optimization', 'Web Development', 'Web UX-UI Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/agvshop.webp',
    year: '2019',
    challenge:
      'The client needed their Figma-designed storefront brought to life on WordPress WooCommerce and then moved to their own hosting environment — without any disruption to the launch timeline. Once live, the site also needed to perform well under real-world traffic conditions rather than running slowly out of the box.',
    solution:
      'Translated the Figma design into a fully functional WooCommerce template, configuring products, categories, and the checkout experience to match the approved layouts. Managed the complete server migration — database, files, DNS — ensuring a clean and verified go-live. Post-launch, ran a performance audit and applied caching, image compression, and query optimisations to bring load times down significantly.',
    results: [
      { metric: 'Migration', value: 'Zero Downtime' },
      { metric: 'Load Time', value: '−40%' },
      { metric: 'Store', value: 'Live' },
    ],
  },
  {
    slug: 'ruckengesundheit',
    client: 'Rückengesundheit',
    title: 'WordPress Build, Migration & Speed Optimisation',
    desc: 'Design implementation on a WordPress template, followed by a full server migration and performance optimisation for a smooth and fast go-live.',
    services: ['Maintenance & Updates', 'Speed Optimization', 'Web Development'],
    tags: ['WordPress', 'PHP', 'MySQL'],
    image: '/projects/ruckengesundheit.webp',
    year: '2019',
    challenge:
      'The client needed their approved design translated into a working WordPress site and then migrated from the development environment to their live hosting server. Post-launch performance was also a concern — the site needed to load quickly to serve visitors effectively.',
    solution:
      'Implemented the design onto a WordPress template, configuring all pages and content to match the approved layouts. Handled the full server migration — including database transfer, file upload, and DNS configuration — ensuring a clean and verified go-live. Followed up with a performance audit and applied optimisations including caching, image compression, and server-side improvements to bring load times down.',
    results: [
      { metric: 'Migration', value: 'Zero Downtime' },
      { metric: 'Load Time', value: 'Optimised' },
      { metric: 'Site', value: 'Live' },
    ],
  },
  {
    slug: 'stable-scoop',
    client: 'The Stable Scoop',
    title: 'Ongoing Maintenance, Security & Optimisation',
    desc: 'Ongoing WordPress maintenance covering regular monitoring, software updates, backups, performance optimisation, and security vulnerability management.',
    services: ['Maintenance & Updates', 'Speed Optimization', 'Web Development'],
    tags: ['WordPress', 'PHP', 'MySQL'],
    image: '/projects/stablescoop.webp',
    year: '2020',
    challenge:
      'The client needed a reliable long-term maintenance partner to keep their WordPress site healthy, secure, and performing well. Without regular attention, sites accumulate outdated plugins, unresolved bugs, and security vulnerabilities — all of which quietly degrade the user experience and put the business at risk.',
    solution:
      'Took over full ongoing maintenance responsibility for the site. Established a routine of regular monitoring to catch and fix bugs early, applied software and plugin updates to keep the stack current, and performed scheduled backups to ensure recovery options were always in place. Security audits were conducted to identify and patch vulnerabilities before they could be exploited, and performance optimisations were applied on an ongoing basis to maintain fast load times.',
    results: [
      { metric: 'Uptime', value: 'Maintained' },
      { metric: 'Security', value: 'Hardened' },
      { metric: 'Backups', value: 'Regular' },
    ],
  },
  {
    slug: 'mkg-plus',
    client: 'MKG Plus',
    title: 'Figma Design, WordPress Build & Custom Functionality',
    desc: 'End-to-end project from Figma design through to WordPress implementation, with custom functionality development, bug fixes, styling refinements, and performance optimisation.',
    services: ['Maintenance & Updates', 'Speed Optimization', 'Web Development', 'Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/mkgplus.webp',
    imageMobile: '/projects/mkgplus-mobile.webp',
    year: '2020',
    challenge:
      'The client needed a fully designed and built WordPress site that went beyond a standard template — several pages required custom functionality that did not exist out of the box. The project also inherited bugs and styling inconsistencies that needed resolving, and load times had to be brought down to meet performance expectations.',
    solution:
      'Designed the full site in Figma before moving into development, ensuring all layouts and interactions were agreed upon before a single line of code was written. Implemented the design into a WordPress template and developed custom functionality across multiple pages to meet the client\'s specific requirements. Worked through all outstanding bugs and applied targeted styling fixes to achieve visual consistency. Completed the project with a thorough performance optimisation pass — caching, asset minification, and image compression — to deliver fast load times.',
    results: [
      { metric: 'Custom Features', value: 'Built' },
      { metric: 'Load Time', value: 'Optimised' },
      { metric: 'Bugs', value: 'Resolved' },
    ],
  },
  {
    slug: 'optimuseo',
    client: 'Optimuseo',
    title: 'Design, WooCommerce Build & Migration',
    desc: 'Full project from Figma design through to WordPress development, with e-commerce functionality built for selling tiered SEO packages, followed by server migration.',
    services: ['Custom Functionality', 'Design to Website', 'Web UX-UI Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/optimuseo.webp',
    year: '2021',
    challenge:
      'The SEO agency needed a professional website that could also function as an online storefront — allowing clients to browse and purchase their range of SEO packages directly. The site needed to reflect the agency\'s brand credibility while making the buying process straightforward, and then be migrated cleanly to their live hosting environment.',
    solution:
      'Designed the full site in Figma, focusing on a clean and trustworthy layout suited to an agency audience. Implemented the design in WordPress and built out e-commerce functionality using WooCommerce, configuring the different SEO packages as purchasable products with appropriate pricing and descriptions. Completed the project with a full server migration — database, files, and DNS — ensuring a verified and seamless go-live.',
    results: [
      { metric: 'E-commerce', value: 'Live' },
      { metric: 'Migration', value: 'Zero Downtime' },
      { metric: 'Packages', value: 'All Listed' },
    ],
  },
  {
    slug: 'horses-in-the-morning',
    client: 'Horses in the Morning',
    title: 'Ongoing Maintenance, Security & Optimisation',
    desc: 'Ongoing WordPress maintenance covering regular monitoring, software updates, backups, performance optimisation, and security vulnerability management.',
    services: ['Maintenance & Updates', 'Web Development'],
    tags: ['WordPress', 'PHP', 'MySQL'],
    image: '/projects/horsesinthemorning.webp',
    year: '2021',
    challenge:
      'A high-traffic equestrian media site needed a dependable maintenance partner to ensure continuous uptime, timely updates, and proactive security management. Without regular oversight, plugin conflicts, outdated software, and unpatched vulnerabilities can quickly accumulate and put both performance and data at risk.',
    solution:
      'Took on full ongoing maintenance responsibility for the site. Conducted regular monitoring to detect and resolve bugs before they affected visitors, applied software and plugin updates on a consistent schedule, and maintained a reliable backup routine to protect against data loss. Security audits were performed to identify and patch vulnerabilities, keeping the site hardened against threats while performance optimisations ensured fast and consistent load times.',
    results: [
      { metric: 'Uptime', value: 'Maintained' },
      { metric: 'Security', value: 'Hardened' },
      { metric: 'Backups', value: 'Regular' },
    ],
  },
  {
    slug: 'horse-radio-network',
    client: 'Horse Radio Network',
    title: 'Ongoing Maintenance, Speed & Security',
    desc: 'Ongoing WordPress maintenance and performance optimisation — regular monitoring, updates, backups, and security management for a long-running equestrian radio network.',
    services: ['Maintenance & Updates', 'Speed Optimization'],
    tags: ['WordPress', 'PHP', 'MySQL'],
    image: '/projects/horseradionetwork.webp',
    imageMobile: '/projects/horseradionetwork-mobile.webp',
    year: '2022',
    challenge:
      'As an established media platform with a loyal audience, Horse Radio Network needed consistent maintenance to stay reliable and secure. Outdated plugins, unmonitored bugs, and performance degradation over time were real risks that required proactive management rather than reactive fixes.',
    solution:
      'Provided ongoing maintenance covering all critical areas of site health. Monitored the site regularly for bugs and performance regressions, applied plugin and core updates on schedule, and maintained a structured backup routine. Conducted security reviews to identify and resolve vulnerabilities, and carried out speed optimisation work to keep load times fast for the site\'s regular listeners and visitors.',
    results: [
      { metric: 'Uptime', value: 'Maintained' },
      { metric: 'Load Time', value: 'Optimised' },
      { metric: 'Security', value: 'Hardened' },
    ],
  },
  {
    slug: 'ezsignsonline',
    client: 'EZSignsOnline',
    title: 'Maintenance, Speed & Full SEO Optimisation',
    desc: 'Ongoing WordPress maintenance combined with a comprehensive SEO overhaul — covering on-page, technical, and off-page optimisation to improve visibility and organic traffic.',
    services: ['Maintenance & Updates', 'Speed Optimization', 'SEO Optimization'],
    tags: ['WordPress', 'PHP', 'MySQL'],
    image: '/projects/ezsignsonline.webp',
    imageMobile: '/projects/ezsignsonline-mobile.webp',
    year: '2023',
    challenge:
      'The site needed reliable ongoing maintenance to stay secure and performant, but the bigger opportunity was in search visibility. The existing SEO foundation was weak — on-page elements were inconsistent, technical issues were holding back crawlability, and there was no off-page strategy in place — all of which were limiting organic reach and potential customer acquisition.',
    solution:
      'Handled all ongoing maintenance: regular bug monitoring, plugin and core updates, scheduled backups, and security audits to keep the site protected. In parallel, carried out a full SEO project covering all three layers — on-page optimisation of titles, meta descriptions, headings, and content structure; technical SEO fixes including site speed, crawlability, structured data, and Core Web Vitals; and an off-page strategy to build domain authority through quality link acquisition.',
    results: [
      { metric: 'SEO', value: 'Full Coverage' },
      { metric: 'Load Time', value: 'Optimised' },
      { metric: 'Security', value: 'Hardened' },
    ],
  },
  {
    slug: 'dressage-radio-show',
    client: 'Dressage Radio Show',
    title: 'Ongoing Maintenance, Security & Optimisation',
    desc: 'Ongoing WordPress maintenance for a specialist dressage media platform — regular monitoring, updates, backups, and security management to keep the site reliable and fast.',
    services: ['Maintenance & Updates', 'Speed Optimization', 'Web Development'],
    tags: ['WordPress', 'PHP', 'MySQL'],
    image: '/projects/dressageradioshow.webp',
    year: '2024',
    challenge:
      'A niche media site with a dedicated audience required consistent, hands-on maintenance to remain stable and secure. Without regular upkeep, plugin conflicts, missed updates, and security gaps can silently erode both performance and visitor trust.',
    solution:
      'Took on full ongoing maintenance for the site — monitoring regularly for bugs and regressions, applying core and plugin updates on schedule, and running structured backups to protect content and data. Security audits were conducted to identify and address vulnerabilities, while performance work kept load times consistent and the experience smooth for returning listeners and visitors.',
    results: [
      { metric: 'Uptime', value: 'Maintained' },
      { metric: 'Security', value: 'Hardened' },
      { metric: 'Backups', value: 'Regular' },
    ],
  },
  {
    slug: 'agv',
    client: 'AGV',
    title: 'Figma Design, WooCommerce Shop & SEO',
    desc: 'Full project from custom Figma design through to a WordPress WooCommerce store — with server migration, shop setup, and on-page SEO optimisation.',
    services: ['Web Development', 'Web Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'Figma'],
    image: '/projects/agv.webp',
    year: '2025',
    challenge:
      'The client needed a professional e-commerce presence built from scratch — starting with a strong visual identity and ending with a fully functioning WooCommerce shop live on their own server. The site also needed to be optimised for search engines from day one to support organic customer acquisition.',
    solution:
      'Designed the full site in Figma, creating layouts tailored to the company\'s brand and product range. Implemented the design into a WordPress WooCommerce template and built out the shop — configuring products, categories, and the checkout flow. Migrated the completed site to the client\'s hosting server with zero downtime. Finished with a thorough on-page SEO pass covering titles, meta descriptions, headings, image alt text, and site structure to give the store the best possible foundation for search visibility.',
    results: [
      { metric: 'Shop', value: 'Launched' },
      { metric: 'Migration', value: 'Zero Downtime' },
      { metric: 'SEO', value: 'Optimised' },
    ],
  },
  {
    slug: 'wayyzz',
    client: 'Wayyzz',
    title: 'Performance Optimisation & Server Maintenance',
    desc: 'Full performance overhaul and ongoing server maintenance for an innovative healthcare agency — bringing down load times and keeping the platform stable and reliable.',
    services: ['Maintenance & Updates', 'Speed Optimization'],
    tags: ['WordPress', 'PHP', 'MySQL', 'WooCommerce'],
    image: '/projects/wayyzz.webp',
    year: '2025',
    challenge:
      'The platform for this healthcare-sector agency was underperforming — slow load times were creating friction for users and undermining the professional impression the brand needed to make. On top of that, the server environment required regular oversight to stay stable and secure.',
    solution:
      'Conducted a thorough performance audit across the entire site and applied optimisations at every layer — caching configuration, image compression, asset minification, database cleanup, and server-side improvements — to achieve a significant reduction in load times. Alongside the speed work, established an ongoing server maintenance routine covering updates, monitoring, and health checks to keep the platform running smoothly.',
    results: [
      { metric: 'Load Time', value: 'Reduced' },
      { metric: 'Server', value: 'Stable' },
      { metric: 'Uptime', value: 'Maintained' },
    ],
  },
  {
    slug: 'borciano-london',
    client: 'Borciano London',
    title: 'Custom Figma Design, WooCommerce Shop & Migration',
    desc: 'End-to-end project from Figma design to a custom WordPress template with a fully configured WooCommerce shop, completed with a smooth migration to the client\'s hosting environment.',
    services: ['Web Development', 'Web Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'Figma'],
    image: '/projects/borciani.webp',
    imageMobile: '/projects/borciani-mobile.webp',
    year: '2025',
    challenge:
      'Borciano London needed a bespoke e-commerce presence that matched the premium feel of their brand — not a generic template, but a custom-designed storefront built specifically for them. The shop also needed to be migrated cleanly to their own hosting environment once complete.',
    solution:
      'Designed the full site in Figma, crafting a custom layout and visual identity that reflected the brand\'s character. Implemented the design into a custom WordPress template rather than an off-the-shelf theme, giving the site a unique and tailored look. Built a WooCommerce shop on top of the custom template, configuring products and the checkout experience to match the client\'s requirements. Completed the project with a full server migration — database, files, and DNS — ensuring a clean and verified go-live.',
    results: [
      { metric: 'Design', value: 'Custom' },
      { metric: 'Shop', value: 'Launched' },
      { metric: 'Migration', value: 'Zero Downtime' },
    ],
  },
  {
    slug: 'locality-brewing',
    client: 'Locality Brewing',
    title: 'Custom Figma Design, WooCommerce Shop & Migration',
    desc: 'Bespoke Figma design implemented into a custom WordPress template with a WooCommerce shop, migrated to the client\'s hosting environment for a polished craft brewery presence.',
    services: ['Web Development', 'Web Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'Figma'],
    image: '/projects/locality-brewing.webp',
    imageMobile: '/projects/locality-brewing-mobile.webp',
    year: '2025',
    challenge:
      'Locality Brewing needed a website that captured the personality and craft of their brand — something distinctive and custom rather than a template that could belong to any business. They also needed an online shop to sell their products directly, and the finished site had to be migrated to their own hosting server.',
    solution:
      'Designed the full site in Figma, developing a visual identity and layout that felt true to the brewery\'s character. Built the design into a custom WordPress template and layered WooCommerce on top to create a fully functioning shop — configuring products, collections, and the checkout experience. Finished with a complete server migration including database transfer, file upload, and DNS configuration to bring the site live on the client\'s hosting environment.',
    results: [
      { metric: 'Design', value: 'Custom' },
      { metric: 'Shop', value: 'Launched' },
      { metric: 'Migration', value: 'Zero Downtime' },
    ],
  },
  {
    slug: 'lifecoach',
    client: 'Life Coach Journey',
    title: 'Speed Optimisation, Bug Fixes & Server Setup',
    desc: 'Front-end bug resolution and full performance overhaul — including server configuration tuning — to deliver a faster, cleaner experience for site visitors.',
    services: ['Maintenance & Updates', 'Speed Optimization', 'Web Development'],
    tags: ['WordPress', 'PHP', 'MySQL'],
    image: '/projects/lifecoach.webp',
    imageMobile: '/projects/lifecoach-mobile.webp',
    year: '2025',
    challenge:
      'The site was suffering from slow load times and a backlog of front-end bugs that were creating a poor experience for visitors. The hosting server had also not been properly configured, which was compounding the performance issues and limiting the site\'s potential.',
    solution:
      'Worked through the full list of front-end bugs, identifying root causes and applying targeted fixes to restore visual and functional consistency across the site. Carried out a comprehensive speed optimisation pass — caching, image compression, asset minification, and database improvements — then went a step further by reconfiguring the hosting server settings for better resource handling and response times.',
    results: [
      { metric: 'Load Time', value: 'Reduced' },
      { metric: 'Bugs', value: 'All Fixed' },
      { metric: 'Server', value: 'Optimised' },
    ],
  },
  {
    slug: 'stedtnitz',
    client: 'Stedtnitz',
    title: 'Custom Figma Design, WooCommerce Shop & Migration',
    desc: 'Full project from custom Figma design through to a WordPress build with WooCommerce shop, completed with migration to the client\'s hosting environment.',
    services: ['Web Development', 'Web Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/stedtnitz.webp',
    imageMobile: '/projects/stedtnitz-mobile.webp',
    year: '2025',
    challenge:
      'The client needed a tailored online presence with a shop — something built specifically for their brand rather than adapted from a generic theme. The final site also needed to be moved to their own hosting environment without disrupting the launch timeline.',
    solution:
      'Designed the full site in Figma, establishing a custom visual direction before any development began. Implemented the design into a custom WordPress template and integrated WooCommerce to create a fully functional shop with products, categories, and a configured checkout. Completed the project with a full server migration — database, files, and DNS — to bring everything live on the client\'s hosting environment.',
    results: [
      { metric: 'Design', value: 'Custom' },
      { metric: 'Shop', value: 'Launched' },
      { metric: 'Migration', value: 'Zero Downtime' },
    ],
  },
  {
    slug: 'horsemanship-radio',
    client: 'Horsemanship Radio',
    title: 'Ongoing Maintenance, Security & Optimisation',
    desc: 'Ongoing WordPress maintenance for a horsemanship media platform — regular monitoring, updates, backups, and security management to keep the site reliable and fast.',
    services: ['Maintenance & Updates', 'Speed Optimization', 'Web Development'],
    tags: ['WordPress', 'PHP', 'MySQL'],
    image: '/projects/horsemanship-radio.webp',
    year: '2025',
    challenge:
      'The platform required consistent, proactive maintenance to stay healthy and secure. Without regular oversight, plugin conflicts, missed updates, and accumulating vulnerabilities can quietly degrade both performance and visitor trust over time.',
    solution:
      'Took on full ongoing maintenance responsibility — monitoring the site regularly for bugs and issues, applying core and plugin updates on schedule, and running structured backups to ensure content and data were always protected. Conducted security reviews to identify and patch vulnerabilities, and carried out performance optimisations to keep load times fast and the experience smooth for the site\'s audience.',
    results: [
      { metric: 'Uptime', value: 'Maintained' },
      { metric: 'Security', value: 'Hardened' },
      { metric: 'Backups', value: 'Regular' },
    ],
  },
  {
    slug: 'pmckm',
    client: 'PMCKM Architects',
    title: 'Custom Figma Design & WordPress Build',
    desc: 'Bespoke Figma design translated into a custom WordPress template for an architecture firm — delivering a refined and professional online presence.',
    services: ['Web Development', 'Web Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/pmckm.webp',
    imageMobile: '/projects/pmckm-mobile.webp',
    year: '2025',
    challenge:
      'An architecture firm needs a website that communicates precision, creativity, and professionalism — qualities that a standard template simply cannot convey. The client needed a custom-designed site that reflected the calibre of their work and gave prospective clients the right first impression.',
    solution:
      'Designed the full site in Figma, developing a clean and considered layout suited to showcasing architectural work. Translated the approved design into a custom WordPress template, building out all pages and sections to match the design with precision — resulting in a polished, bespoke site that stood apart from generic alternatives.',
    results: [
      { metric: 'Design', value: 'Custom' },
      { metric: 'Build', value: 'Pixel Perfect' },
      { metric: 'Site', value: 'Live' },
    ],
  },
  {
    slug: 'hobbypedia',
    client: 'Hobbypedia',
    title: 'Figma Design, Custom Functionality & API Integration',
    desc: 'Full design-to-development project with a custom WordPress build, bespoke hobby functionality, and a custom API route connecting the back end to the front-end experience.',
    services: ['Custom Functionality', 'Design to Website', 'Web UX-UI Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/hobbypedia.webp',
    imageMobile: '/projects/hobbypedia-mobile.webp',
    year: '2025',
    challenge:
      'Hobbypedia required more than a standard WordPress site — the core product was a hobby discovery feature that needed custom functionality not available through any existing plugin. The design also had to be built from scratch to match the platform\'s unique concept, and all of it needed to be connected through a reliable API integration.',
    solution:
      'Designed the full platform in Figma before development, establishing the UX flows and visual language for the hobby-focused experience. Converted the design into a custom WordPress template and developed all bespoke functionality from scratch. Built a custom API route specifically for the hobby feature, handling data requests and responses, and integrated it with the front end so the functionality worked seamlessly within the WordPress environment.',
    results: [
      { metric: 'Custom API', value: 'Built' },
      { metric: 'Functionality', value: 'Delivered' },
      { metric: 'Design', value: 'Custom' },
    ],
  },
  {
    slug: 'sarah-schreibt',
    client: 'Sarah Schreibt',
    title: 'Design Implementation, Customisations & Migration',
    desc: 'WordPress template implementation with bespoke customisations, followed by server migration and speed optimisation for a clean and fast go-live.',
    services: ['Design to Website', 'Maintenance & Updates', 'Web Development'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/sarahschreibt.webp',
    imageMobile: '/projects/sarahschreibt-mobile.webp',
    year: '2025',
    challenge:
      'The client had an approved design that needed to be accurately implemented into WordPress, along with a set of specific customisations to tailor the template to their needs. Once built, the site had to be migrated to their own hosting server and optimised for performance before going live.',
    solution:
      'Implemented the provided design onto a WordPress template, ensuring the layout, typography, and visual details were faithfully translated. Applied all requested customisations — adjusting functionality and styling to match the client\'s requirements precisely. Completed the project with a full server migration and a performance optimisation pass covering caching, image compression, and asset improvements to deliver fast load times from day one.',
    results: [
      { metric: 'Migration', value: 'Zero Downtime' },
      { metric: 'Customisations', value: 'All Applied' },
      { metric: 'Load Time', value: 'Optimised' },
    ],
  },
  {
    slug: 'mcknhm',
    client: 'MCKNHM Architects',
    title: 'Custom Figma Design & WordPress Build',
    desc: 'Bespoke Figma design converted into a custom WordPress template for an architecture firm — a precise and professional digital presence built to reflect their work.',
    services: ['Web Development', 'Web Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/mcknhm.webp',
    imageMobile: '/projects/mcknhm-mobile.webp',
    year: '2025',
    challenge:
      'Architecture firms demand websites that communicate their design sensibility — a generic template sends the wrong message. MCKNHM needed a site that felt as considered and crafted as the buildings they design, built specifically around their brand and portfolio.',
    solution:
      'Designed the full site in Figma, creating a layout and visual language that reflected the firm\'s architectural identity. Implemented the design into a custom WordPress template, building all pages and sections to match the approved designs with accuracy — delivering a polished, bespoke site that set the firm apart from competitors using off-the-shelf solutions.',
    results: [
      { metric: 'Design', value: 'Custom' },
      { metric: 'Build', value: 'Pixel Perfect' },
      { metric: 'Site', value: 'Live' },
    ],
  },
  {
    slug: 'postdoc-israel',
    client: 'Postdoc Israel',
    title: 'Figma Design, Custom Database & Ongoing Management',
    desc: 'Full design-to-development project with a custom WordPress build, bespoke database functionality, and ongoing site management to keep the platform running smoothly.',
    services: ['Web Development', 'Web Design', 'Custom Functionality'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/postdoc-israel.webp',
    imageMobile: '/projects/postdoc-israel-mobile.webp',
    year: '2025',
    challenge:
      'The client needed a professional site built from a Figma design, but the core requirement went beyond a standard WordPress implementation — they needed a custom database solution integrated directly into the site to manage and display structured data specific to their platform. On top of that, they required a reliable ongoing management partner after launch.',
    solution:
      'Designed the full site in Figma and implemented it into a WordPress template, applying template customisations to support the specific functionality required. Built a custom database structure and integrated it into the site, giving the client a tailored way to manage and present their data. Post-launch, continued managing the site — handling updates, monitoring, and any ongoing development needs to keep the platform current and functional.',
    results: [
      { metric: 'Custom DB', value: 'Built' },
      { metric: 'Design', value: 'Implemented' },
      { metric: 'Ongoing', value: 'Active' },
    ],
  },
  {
    slug: 'agilio',
    client: 'Agilio Software',
    title: 'Figma Design & WordPress Implementation',
    desc: 'Custom Figma design translated into a clean and professional WordPress site for a software company — built to communicate credibility and product clarity.',
    services: ['Web Development', 'Web Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/agilio.webp',
    imageMobile: '/projects/agilio-mobile.webp',
    year: '2025',
    challenge:
      'A software company\'s website needs to instantly communicate trust, competence, and product value. Agilio needed a site designed from scratch that reflected the quality of their software and gave prospects a clear, professional first impression — not an adapted template that fell short of their brand standards.',
    solution:
      'Designed the full site in Figma, developing a layout and visual style suited to a software audience — clean, structured, and focused on clarity. Implemented the design into a WordPress template, building out all pages and sections to match the approved designs accurately and deliver a polished final result.',
    results: [
      { metric: 'Design', value: 'Custom' },
      { metric: 'Build', value: 'Pixel Perfect' },
      { metric: 'Site', value: 'Live' },
    ],
  },
  {
    slug: 'kleverkey',
    client: 'Kleverykey',
    title: 'Figma Design & WordPress Implementation',
    desc: 'Custom Figma design brought to life in WordPress — a tailored site built to match the brand and present the product clearly and professionally.',
    services: ['Web Development', 'Web Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/kleverkey.webp',
    imageMobile: '/projects/kleverkey-mobile.webp',
    year: '2025',
    challenge:
      'Kleverykey needed a website designed and built specifically for their brand — something that communicated their product\'s value clearly and made a strong first impression, without relying on a generic off-the-shelf template.',
    solution:
      'Designed the full site in Figma, crafting a layout and visual style aligned with the brand\'s identity. Implemented the design into a WordPress template, building all pages and sections accurately to deliver a polished and professional final result.',
    results: [
      { metric: 'Design', value: 'Custom' },
      { metric: 'Build', value: 'Pixel Perfect' },
      { metric: 'Site', value: 'Live' },
    ],
  },
  {
    slug: 'pflanzenblatt',
    client: 'Pflanzenblatt',
    title: 'Figma Design & Full Site Editing Gutenberg Build',
    desc: 'Custom Figma design implemented into a WordPress Full Site Editing Gutenberg template — a modern, block-based build tailored to the client\'s brand.',
    services: ['Web Development', 'Web Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/pflanzenblatt.webp',
    imageMobile: '/projects/pflanzenblatt-mobile.webp',
    year: '2026',
    challenge:
      'The client needed a website that not only looked distinctive but was also built on a modern, maintainable WordPress foundation. The goal was to move away from a heavy page builder approach and instead deliver a clean FSE Gutenberg build — giving the client an intuitive editing experience without sacrificing design quality.',
    solution:
      'Designed the full site in Figma, establishing the visual identity and page layouts before any development began. Implemented the design using WordPress Full Site Editing with a Gutenberg-based template — building all sections as reusable blocks to ensure the client could manage and update content easily. The result was a lightweight, modern WordPress site that matched the Figma designs accurately.',
    results: [
      { metric: 'FSE Build', value: 'Delivered' },
      { metric: 'Design', value: 'Custom' },
      { metric: 'Site', value: 'Live' },
    ],
  },
  {
    slug: 'designthinkingcoach',
    client: 'Designthinkingcoach',
    title: 'Figma Design & WordPress Implementation',
    desc: 'Custom Figma design translated into a WordPress template — a clean, professional site built to support a design thinking coach\'s online presence.',
    services: ['Web Development', 'Web Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/designthinkingcoach.webp',
    imageMobile: '/projects/designthinkingcoach-mobile.webp',
    year: '2026',
    challenge:
      'A design thinking coach needs a website that embodies the very principles they teach — clarity, purpose, and a considered user experience. A generic template would undermine the brand, so a custom design was essential to establish credibility and connect authentically with their audience.',
    solution:
      'Designed the full site in Figma, building a layout and visual identity that reflected the coaching practice\'s ethos and methodology. Implemented the design into a WordPress template, building all pages and sections faithfully to deliver a polished and purposeful result.',
    results: [
      { metric: 'Design', value: 'Custom' },
      { metric: 'Build', value: 'Pixel Perfect' },
      { metric: 'Site', value: 'Live' },
    ],
  },
  {
    slug: 'crushfanzine',
    client: 'Crush Fanzine',
    title: 'Figma Design & WordPress Implementation',
    desc: 'Custom Figma design implemented into a WordPress template — a distinctive and editorial site built to reflect the character of an independent fanzine.',
    services: ['Web Development', 'Web Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/crushfanzine.webp',
    imageMobile: '/projects/crushfanzine-mobile.webp',
    year: '2026',
    challenge:
      'An independent fanzine needs a website with personality — one that feels as creative and expressive as the publication itself. A standard template would flatten that identity, so the design had to be built from scratch to capture the right tone and visual energy.',
    solution:
      'Designed the full site in Figma, developing a layout and visual language that matched the fanzine\'s editorial character. Implemented the design into a WordPress template, building all pages and sections accurately to bring the creative vision to life in a functional and maintainable site.',
    results: [
      { metric: 'Design', value: 'Custom' },
      { metric: 'Build', value: 'Pixel Perfect' },
      { metric: 'Site', value: 'Live' },
    ],
  },
  {
    slug: 'herbigco',
    client: 'Herbig Co',
    title: 'Figma Design & WordPress Implementation',
    desc: 'Custom Figma design brought to life in WordPress — a tailored and professional site built to represent the Herbig Co brand online.',
    services: ['Web Development', 'Web Design'],
    tags: ['WordPress', 'PHP', 'MySQL', 'Figma'],
    image: '/projects/herbig.webp',
    imageMobile: '/projects/herbig-mobile.webp',
    year: '2026',
    challenge:
      'The client needed a website that felt specific to their brand — not a repurposed template, but something designed and built with their identity in mind. The site had to make a strong impression while remaining easy to manage going forward.',
    solution:
      'Designed the full site in Figma, establishing a visual direction and page structure aligned with the brand. Implemented the approved design into a WordPress template, building all pages and sections accurately to deliver a polished and professional final result.',
    results: [
      { metric: 'Design', value: 'Custom' },
      { metric: 'Build', value: 'Pixel Perfect' },
      { metric: 'Site', value: 'Live' },
    ],
  },
];
