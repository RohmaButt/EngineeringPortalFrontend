import {
    responsibilitiesIcon,
    businessImpactIcon,
    leadershipAndInterpersonalSkillsIcon,
    problemSolvingIcon,techSkillIcon,
    technicalExpertiseIcon,corecompetencyIcon
} from './../../../../setup/appConstants'

export const menüList = [
    {
        mainMenu: "Software Engineer",
        subMenu: [
            {
                id: 0,
                href: "#softwareEngineer1",
                text: "Software Engineer I",
            },
            {
                id: 1,
                href: "#softwareEngineer2",
                text: "Software Engineer II",
            },
            {
                id: 2,
                href: "#srSoftwareEngineer",
                text: "Sr. Software Engineer",
            },
            {
                id: 3,
                href: "#leadSoftwareEngineer",
                text: "Lead Software Engineer",
            },
            {
                id: 4,
                href: "#principalSoftwareEngineer",
                text: "Expert Software Engineer / Service Lead",
            },
            {
                id: 5,
                href: "#srPrincipalSoftwareEngineer",
                text: "Sr. Expert Software Engineer / Service Lead",
            },
            {
                id: 6,
                href: "#serviceLead",
                text: "Service Lead",
            },
        ],
    },
    {
        mainMenu: "SDET Engineer",
        subMenu: [
            {
                id: 1,
                href: "#qaSDETEngineer2",
                text: "SDET Engineer",
            },
            {
                id: 2,
                href: "#seniorQASDETEngineer",
                text: "Sr. SDET Engineer",
            },
            {
                id: 3,
                href: "#leadQASDETEngineer",
                text: "Lead SDET Engineer",
            },
            {
                id: 4,
                href: "#principalQASDETEngineer",
                text: "Expert SDET Engineer",
            },
            {
                id: 5,
                href: "#srPrincipalQASDETEngineer",
                text: "Sr. Expert SDET Engineer",
            },
        ],
    },
    {
        mainMenu: "QA Automation Engineer",
        subMenu: [
            {
                id: 0,
                href: "#qaAutomationEngineer1",
                text: "QA Automation Engineer I",
            },
            {
                id: 1,
                href: "#qaAutomationEngineer2",
                text: "QA Automation Engineer II",
            },
            {
                id: 2,
                href: "#seniorQAAutomationEngineer",
                text: "Sr. QA Automation Engineer",
            },
            {
                id: 3,
                href: "#leadQAAutomationEngineer",
                text: "Lead QA Automation Engineer",
            },
            {
                id: 4,
                href: "#principalQAAutomationEngineer",
                text: "Expert QA Automation Engineer",
            },
            {
                id: 5,
                href: "#srPrincipalQAAutomationEngineer",
                text: "Sr. Expert QA Automation Engineer",
            },
        ],
    },
    {
        mainMenu: "DevOps Engineer",
        subMenu: [
            {
                id: -1,
                href: "#devOpsPlatformEngineer1",
                text: "DevOps/Platform Engineer I",
            },
            {
                id: 0,
                href: "#devOpsPlatformEngineer2",
                text: "DevOps/Platform Engineer II",
            },
            {
                id: 1,
                href: "#sdevOpsPlatformEngineer",
                text: "Senior DevOps/Platform Engineer",
            },
            {
                id: 2,
                href: "#leadDevOpsPlatformEngineer",
                text: "Lead DevOps/Platform Engineer",
            },
            {
                id: 3,
                href: "#principalDevOpsPlatformEngineer",
                text: "Expert DevOps/Platform Engineer",
            },
            {
                id: 4,
                href: "#srPrincipalDevOpsPlatformEngineer",
                text: "Sr. Expert DevOps/Platform Engineer",
            },
        ],
    },
    {
        mainMenu: "Telephony",
        subMenu: [
            {
                id: 0,
                href: "#telephonyEngineer1",
                text: "Telephony Engineer I",
            },
            {
                id: 1,
                href: "#telephonyEngineer2",
                text: "Telephony Engineer II",
            },
            {
                id: 2,
                href: "#sTelephonyEngineer",
                text: "Senior Telephony Engineer",
            },
            {
                id: 3,
                href: "#leadTelephonyEngineer",
                text: "Lead Telephony Engineer",
            },
            {
                id: 5,
                href: "#principalTelephonyEngineer",
                text: "Expert Telephony Engineer",
            },
            {
                id: 6,
                href: "#sPrincipalTelephonyEngineer",
                text: "Senior Expert Telephony Engineer",
            },
        ],
    },
    {
        mainMenu: "Architect",
        subMenu: [
            {
                id: 0,
                href: "#serviceGroupArchitect1",
                text: "Service Group Architect I",
            },
            {
                id: 1,
                href: "#serviceGroupArchitect2",
                text: "Service Group Architect II",
            },
            {
                id: 2,
                href: "#srServiceGroupArchitect",
                text: "Sr. Service Group Architect / Enterprise Architect",
            },
        ],
    },
    {
        mainMenu: "Scrum Master",
        subMenu: [
            {
                id: 0,
                href: "#scrumMaster1",
                text: "Scrum Master I",
            },
            {
                id: 1,
                href: "#scrumMaster2",
                text: "Scrum Master II",
            },
            {
                id: 2,
                href: "#scrumMaster3",
                text: "Scrum Master III",
            },
            {
                id: 3,
                href: "#agileCoach",
                text: "Agile Coach",
            },
        ],
    },
    {
        mainMenu: "Management",
        subMenu: [
            {
                id: 0,
                href: "#serviceGroupLeader",
                text: "Group Leader I",
            },
            {
                id: 1,
                href: "#srServiceGroupLeader",
                text: "Group Leader II",
            },
        ],
    },
];


export const softwareEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "My primary craft focus is on learning the fundamentals of reading and writing code within a large, long-lived codebase, gaining familiarity with the technologies in my area of work, and learning to work against plans and schedules.",
            "I execute on defined tasks and contribute to solving problems with defined solutions.",
            "I work within the scope of my team with specific guidance from my manager.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I work with my manager to prioritize tasks that add the most value and deliver high-quality results for my customer.",
            "I understand and effectively participate in the core processes of my team.",
            "I follow through on my commitments, take responsibility for my work, and deliver my work on time.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I have a high standard of excellence for code fluency.",
            "I translate ideas into clear code, written to be read as well as executed.",
            "My code is free of glaring errors – bugs are in edge cases or design, not mainline paths – and is well documented and well tested with appropriate use of manual vs automated tests.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I listen to understand others and ask clarifying questions.",
            "I share relevant information on my project including difficult task-level trade-offs that impact the product to my manager and team.",
            "I provide guidance to interns.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I escalate to my manager when I get stuck and reflect on ways that I can improve from my mistakes.",
            "I contribute to functional specifications and participates in code reviews to solve problems.",
        ],
    }, 
     {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 1",
            "Master the Craft - level 1",
            "Own the Work and the Results - level 1",
            "Focus on Client Experience - level 1",
            "Work Collaboratively Others - level 1",
            "Manage Ambiguity and Complexity - level 1",
        ],
    },
];

export const softwareEngineer2Data = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I execute on defined projects to achieve team-level goals.",
            "I am increasingly mastering my craft and leverage it for higher impact.",
            "I break large requests down into sub-tasks, gives higher-level status updates.",
            "I may mentor new hires, interns, or more junior engineers.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I work with my manager to prioritize tasks that add the most value and deliver high-quality results for my customer.",
            "I understand and effectively participate in the core processes of my team.",
            "I follow through on my commitments, take responsibility for my work, and deliver my work on time.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "My code is free of glaring errors – bugs are in edge cases or design, not mainline paths – and is well documented and well tested with appropriate use of manual vs automated tests.",
            "I’m able to read and navigate through a large code base and effectively debug others’ code",
            "I’m able to understand the existing designs and technology choices within my area, and I make appropriate adjustments to existing designs when necessary.",
            "I use and understand tools needed to debug and diagnose issues in a test and/or simple production environment.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I provide guidance to entry-level engineers.",
            "I proactively ask for feedback from those I work with and identify ways to act upon it.",
            "I have self-awareness about my strengths and areas for development.",
            "I drive discussions with my manager about aspirational goals and seek out opportunities to learn and grow.",
            "I am able to represent my team’s initiatives and goals to candidates in a compelling way.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: " Problem Solving",
        dataList: [
            "I can design and complete a given task independently with a known problem.",
            "I independently define the right solutions or use existing approaches to solve defined problems.",
        ],
    },
     {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 2",
            "Master the Craft - level 1",
            "Own the Work and the Results - level 1",
            "Focus on Client Experience - level 1",
            "Work Collaboratively Others - level 1",
            "Manage Ambiguity and Complexity - level 1",
        ],
    },
];

export const srSoftwareEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I write tech specs and identify risks before starting major projects.",
            "I define and deliver well-scoped milestones for a project and may be a technical lead for projects on my team.",
            "I actively keep customer needs in mind and leverage input from product stakeholders as available to determine the right technical solutions to deliver customer value quickly.",
            "I proactively identify new opportunities and advocate for and implement improvements to the current state of projects.",
            "I mentor new hires, interns, or more junior engineers.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the team.",
            "I understand my customers, the business’s goals and my team’s goals.",
            "I can identify when my results aren’t moving the needle for our team goals or serving the needs of customers in a meaningful way and work with manager to redirect my focus.",
            "I make informed decisions by consulting the right stakeholders and balancing details with the big picture.",
            "I proactively share information so the right people are informed and aligned.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I have mastered the fundamentals of code fluency and ensure my team produces high-quality code and have a well-rounded set of software design skills that allow me to build correct, maintainable software components.",
            "I have mastered the tools needed to develop, debug and diagnose issues in any type of environment.",
            "I am able to independently design software components in well scoped scenarios, with simplicity and maintenance as key considerations.",
            "I proactively identify issues with technical dependencies of my project that are owned by other teams and surface them.",
            "I have a good understanding of all services of my product.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I deliver feedback in a constructive manner.",
            "I help focus discussion on important aspects.",
            "I actively level up less-experienced members of my team by helping them with their craft, providing guidance, and setting a good example.",
            "I contribute to a positive sense of community on the team.",
            "I am capable of working with cross-functional stakeholders to identify technical blindspots and clarify ambiguity in their ideas.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: " Problem Solving",
        dataList: [
            "I participate in code reviews and can sign off on features.",
            "I can write functional specifications for small features to solve a new problem.",
            "I’m able to navigate ambiguity and remain resilient through ups and downs.I execute the development roadmap for complex, multi-phase projects, possibly as a project tech lead.",
            "I can design and implement a solution for a new problem.",
        ],
    }, 
     {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 2",
            "Master the Craft - level 2",
            "Own the Work and the Results - level 2",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 2",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const leadSoftwareEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I am an expert at identifying the right solutions to solve ambiguous, open-ended problems that require tough prioritization.",
            "Technical Strategy: I play a key role in setting medium-to-long term strategy for business-impacting projects.",
            "Project Leadership: I autonomously define and deliver technical roadmaps of larger projects, often involving cross-team dependencies.,",
            "Product Expertise: I actively keep customer needs in mind and leverage input from product stakeholders as available to determine the right technical solutions to deliver customer value quickly.",
            "Mentorship: I actively level up less-experienced members of my team by helping them with their craft, providing guidance, and setting a good example.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the service and the company.",
            "I play a major role in ensuring the quality of my team’s technical work, both code and software designs.",
            "I can identify when my results aren’t moving the needle for our business goals or serving the needs of customers in a meaningful way and work with manager to redirect my focus.",
            "I get work to a simple place by focusing on the heart of the problem and prioritizing the right things.",
            "I proactively identify new opportunities and advocate for and implement improvements to the current state of projects — potentially having broader business impact across teams or products.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I have mastered in development of best practices. I write tech specs and identify risks before starting major projects.",
            "I understand the limits of our tools and when a problem that exceeds those limits deserves the effort of producing a new tool.",
            "My understanding of business context and purpose enables me to make technical decisions aligned with longer term needs, not just immediate requirements.",
            "I understand the scope and relationships of features and production stack for their area.",
            "I have a strong understanding of all products relevant to own areas of expertise.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I guide more junior engineers to correct solutions while encouraging collaboration.",
            "I drive discussions with my manager about aspirational goals and seek out opportunities to learn and grow.",
            "I build relationships and drive coordination across teams & disciplines, helping get to positive outcomes.",
            "I provide technical leadership.",
            "I act as a partner to my manager in setting the cultural tone for the team. I support an environment where all Afiniti employees are included and heard.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I handle large-scale technical debt and refactoring.",
            "I am beginning to push boundaries to generate and implement ideas that aim to drive our products and tools forward.",
            "I define the technical roadmap for complex projects, refining it as the projects progress, and provide leadership for the people executing on the project.",
            "I can write functional specifications for features to solve a new problem.",
            "Given a poorly understood problem, I can explore the solution space to determine correct course of action.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 3",
            "Master the Craft - level 3",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const principalSoftwareEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "Domain Expertise: I demonstrate a high level of depth in a particular platform or product category that brings unique business value.",
            "Technical Strategy: I excel at defining the vision for and delivering large business-impacting projects with multiple constraints.",
            "Product Expertise: I increasingly influence or make product decisions/scope and determine the right technical tradeoffs to deliver customer value quickly.",
            "Mentorship: I serve as a role model for other Afiniti engineers",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the service and the company.",
            "I play a major role in ensuring the quality of my team’s technical work, both code and software designs.",
            "I can identify when my results aren’t moving the needle for our business goals or serving the needs of customers in a meaningful way and work with manager to redirect my focus.",
            "I get work to a simple place by focusing on the heart of the problem and prioritizing the right things.",
            "I proactively identify new opportunities and advocate for and implement improvements to the current state of projects — potentially having broader business impact across teams or products.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I design software components that are difficult to misuse and flexible in the face of an increase in the number of adjacent use cases as appropriate to the direction of the business.",
            "I reduce complex concepts to simple foundational components through correct choices of data structures, algorithms or other deep insight into the problem space (ex: 3 tree model in sync engine).",
            "I may have deep expertise in implementation or principles behind some of the libraries, platforms and systems relevant to my team’s work.",
            "I’m capable of owning the overall health and engineering quality of a system or collection of features and ensuring that the health and maintenance of my systems do not depend on the maintainers having my expertise.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I am a role model for other Afiniti employees and model a standard of excellence that supports a culture of high performance on my team.",
            "I invest time to coach and mentor my teammates.",
            "I help break down silos within and across functions and influence others to reach the best outcome for Afiniti.",
            "I start to build cross-functional relationships, facilitate the right conversations.",
            "I personify Afiniti’s culture and values. I champion community building efforts and inclusion initiatives.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I think both strategically and tactically, keeping in mind both technical goals and company goals.",
            "I push boundaries to generate and implement breakthrough ideas that aim to create new products or advance existing products and drive our tools forward.",
            "I participate in and support initiatives outside of main area of responsibility.",
            "I anticipate challenges and am able to influence the technical direction of the team or org to execute on that vision even in the face of potential significant misalignment.",
            "I am an expert firefighter who is often called in to make things right.",
        ],
    },  
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 4",
            "Master the Craft - level 4",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 3",
        ],
    },
];

export const serviceLeadData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I take end-to-end ownership of at least one service within the department",
            "I own the service delivery and quality metrics end to end in the service lifecycle.",
            "I define my service’s priorities and secure buy-in from partner teams with the help of my superior.",
            "I mentor new hires, interns, or more junior engineers.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I redirect the agenda of my service results aren’t moving the needle for our business/team goals or serving the needs of customers in a meaningful way.",
            "I am responsible for ensuring that results do not come at the expense of long term growth, retention, or psychological safety.",
            "I am ultimately accountable for the consequences of my technical decisions, and for achieving the right architecture and tradeoffs to reach and maintain high engineering throughput.",
            "I act with urgency and lead my colleagues in my service team to deliver high-quality work that will add the most value.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I understand the limits of our tools and when a problem that exceeds those limits deserves the effort of producing a new tool.",
            "I have mastered in development of best practices.",
            "I have a strong understanding of all products relevant to own areas of expertise.",
            "My understanding of business context and purpose enables me to make technical decisions aligned with longer term needs, not just immediate requirements.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I’m an approachable mentor who is viewed as a leader and acts like one.",
            "I deliver feedback in a constructive manner.",
            "I support and motivate my service team.",
            "I proactively share information so the right people are informed and aligned.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I can deal with conflicts within the team.",
            "I handle large-scale technical debt and refactoring.",
            "I get work to a simple place by focusing on the heart of the problem and prioritizing the right things.",
            "I drive operational cadences that get to the right outcomes.",
            "I can sign off on test plans.",
            "Given a poorly understood problem, I can explore the solution space to determine correct course of action.",
        ],
    },
];

export const srPrincipalSoftwareEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "Domain Expertise: I demonstrate a high level of depth in a particular platform or product category that brings unique business value.",
            "Technical Strategy: I excel at defining the vision for and delivering large business-impacting projects with multiple constraints.",
            "Product Expertise: I increasingly influence or make product decisions/scope and determine the right technical tradeoffs to deliver customer value quickly.",
            "Mentorship: I serve as a role model for other Afiniti engineers",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I have a sense of responsibility and obligation to act on opportunities I see across the engineering org/company.",
            "I transcend organizational boundaries by taking a holistic view of my group’s goals and taking responsibility across my group, not just within my immediate scope of ownership.",
            "I execute large projects to a very high standard.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I have strong awareness of the state of the product and team at all times.",
            "I can design systems that require research on what is possible rather than relying on my past experience, and where, consequently, a significant portion of the challenge is designing an appropriately staged validation plan.",
            "I am responsible for making technical choices that have no one clearly correct answer but whose consequences have a sweeping effect across my scope in the organization.",
            "I define the high level systems we need to build to meet strategic objectives.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I build deep cross-functional relationships, facilitate the right conversations, and settle disagreements by managing different viewpoints.",
            "I work in close partnership with senior leadership to ensure a healthy engineering organization.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I show great ability to direct project and/or people.",
            "I demonstrate creativity by finding simple, generalized solutions that open up or unblock new technical or business opportunities in unexpected ways.",
            "I partner with senior leadership to define a long-term vision for my group that factors in both a deep understanding of what is happening in the business and in the market as well as the technical limitations and possibilities.",
            "I lead technical initiatives and/or project based small teams to solve a problem.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 4",
            "Master the Craft - level 4",
            "Own the Work and the Results - level 4",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 3",
        ],
    },
];

export const qaSDETEngineer1Data = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I write test cases for a feature that is well-defined and utilizes knowledge of our customers.",
            "I control and review user interfaces for consistency and functionality.",
            "I identify bugs that are clearly present.",
            "I understand who the customers are for the features I work on and the intended impact of the feature on them.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I work with my manager to prioritize tasks that add the most value and deliver high-quality results for my customer.",
            "I understand and effectively participate in the core processes of my team.",
            "I follow through on my commitments, take responsibility for my work, and deliver my work on time.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I plan and execute testing on small to medium sized features of simple to moderate complexity.",
            "I am focused on learning the fundamentals of testing fluency, testing strategy, and quality assessment.",
            "I report status to cross-functional partners including a basic understanding of quality risks.",
            "I have the essential skills in programming languages and basic understanding of infrastructure.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I listen to understand others and ask clarifying questions.",
            "I share relevant information on my project including difficult task-level trade-offs that impact the product to my manager and team.",
            "I provide guidance to interns.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I escalate to my manager when I get stuck and reflect on ways that I can improve from my mistakes.",
            "I contribute to functional specifications and participates in code reviews to solve problems.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 1",
            "Master the Craft - level 1",
            "Own the Work and the Results - level 1",
            "Focus on Client Experience - level 1",
            "Work Collaboratively Others - level 1",
            "Manage Ambiguity and Complexity - level 1",
        ],
    },
];

export const qaSDETEngineer2Data = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I write test plans, test specification, bug reports.",
            "I am responsible for automating the test cases and developing the infrastructure based clusters and automation tools.",
            "I work closely with our developers and dev ops team to integrate tests into code release cycles.",
            "My testing is informed by the specs, basic knowledge of the architecture, and reasonable assumptions (e.g. backend changes).",
            "I proactively engage cross functional partners (e.g. PM ,CX,) to learn more about my customers, and work to resolve quality challenges they see.",
            "My bug reports contain enough detailed information for developers enabling them to quickly identify the root cause making the bugs more actionable.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I work with my manager to prioritize tasks that add the most value and deliver high-quality results for my customer.",
            "I understand and effectively participate in the core processes of my team.",
            "I follow through on my commitments, take responsibility for my work, and deliver my work on time.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I use and understand tools needed to debug and diagnose issues in a test and/or simple production environment.",
            "I’m able to read and navigate through a large code base and effectively debug others’ code.",
            "I proactively work with subject matter experts to identify test cases that would require domain knowledge to ensure my testing is through.",
            "I plan and execute testing of small to medium size projects that could span multiple sprints, including estimating and prioritizing QA tasks.",
            "I proactively and clearly report status and quality risks to partners and team for the work that I directly own and I am able to leverage basic quality metrics effectively when doing this.",
            "I am an automation tester with using my experiences in exploratory testing.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I provide guidance to entry-level engineers.",
            "I proactively ask for feedback from those I work with and identify ways to act upon it.",
            "I have self-awareness about my strengths and areas for development.",
            "I drive discussions with my manager about aspirational goals and seek out opportunities to learn and grow.",
            "I am able to represent my team’s initiatives and goals to candidates in a compelling way.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I can design and complete a given task independently with a known problem.",
            "I independently define the right solutions or use existing approaches to solve defined problems.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 2",
            "Master the Craft - level 1",
            "Own the Work and the Results - level 1",
            "Focus on Client Experience - level 1",
            "Work Collaboratively Others - level 1",
            "Manage Ambiguity and Complexity - level 1",
        ],
    },
];

export const seniorQASDETEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I meet with the software/product designers to determine quality assurance parameters.",
            "I oversee the drafting of testing documents.",
            "I conduct analysis checks on product specifications.",
            "I ensure the successful deployment of products into the market.",
            "I independently identify high risk projects that I should embed in. I am learning to execute using an engagement model where I provide the right level of impact to projects by varying levels of support.",
            "I develop and execute test automation through related test tools.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the team.",
            "I understand my customers, the business’s goals and my team’s goals.",
            "I can identify when my results aren’t moving the needle for our team goals or serving the needs of customers in a meaningful way and work with manager to redirect my focus.",
            "I make informed decisions by consulting the right stakeholders and balancing details with the big picture.",
            "I proactively share information so the right people are informed and aligned.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I proactively and clearly report status and quality risks to partners and teams for the projects I own, leverage quality metrics, and can effectively distill this data from other Engineers.",
            "I drive and plan testing of projects that could span multiple quarters, potentially across multiple teams and multiple QA Engineers.",
            "I provide clarity and principles regarding which bugs should be fixed.",
            "I proactively identify issues with technical dependencies of my project that are owned by other teams and surface them.",
            "I have a good understanding of all services of my product.",
            "I am a skilled automation tester.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I deliver feedback in a constructive manner.",
            "I help focus discussion on important aspects.",
            "I actively level up less-experienced members of my team by helping them with their craft, providing guidance, and setting a good example.",
            "I contribute to a positive sense of community on the team.",
            "I am capable of working with cross-functional stakeholders to identify technical blind-spots and clarify ambiguity in their ideas.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I participate in code reviews and can sign off on features.",
            "I notice and appropriately address quality process or test-ability gaps on a team, including getting buy-in from the team to address these problems.",
            "I’m able to navigate ambiguity and remain resilient through ups and downs.",
            "I am capable of taking on highly impactful quality-related work that is not being done on the team even if it is beyond the scope of traditional QA responsibilities.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 2",
            "Master the Craft - level 2",
            "Own the Work and the Results - level 2",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 2",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const leadQASDETEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I effectively execute on complex projects with minimal ramp-up even in an area where I lack domain expertise, via leveraging an understanding of testing principles and appropriately using domain knowledge resources (e.g. documentation, asking experts).",
            "I am able to independently drive + get buy-in on a clear and principled set of quality metrics for a project or team.",
            "I drive and plan testing of large, complex, cross-team projects that could span multiple quarters and often involve multiple QA engineers",
            "I evangelize best practices in testing and be a strong advocate of QA in cross functional meetings.",
            "I review and recommend improvements to existing QA processes.",
            "I enhance test frameworks and develop automated test suites to ensure consistency.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the service and the company.",
            "I play a major role in ensuring the quality of my team’s technical work, both code and software designs.",
            "I can identify when my results aren’t moving the needle for our business goals or serving the needs of customers in a meaningful way and work with manager to redirect my focus.",
            "I get work to a simple place by focusing on the heart of the problem and prioritizing the right things.",
            "I proactively identify new opportunities and advocate for and implement improvements to the current state of projects — potentially having broader business impact across teams or products.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I identify the likely breakages or risk areas in a feature at the spec or engineering review phase, before the feature has actually been built.",
            "I understand the limits of our tools and when a problem that exceeds those limits deserves the effort of producing a new tool.",
            "I prioritize quality process work across an area or across multiple teams not within my immediate lens.",
            "I understand the scope and relationships of features and production stack for their area.",
            "I have a strong understanding of all products relevant to own areas of expertise.",
            "I am an expert automation tester with deep automation skills.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I guide more junior engineers to correct solutions while encouraging collaboration.",
            "I drive discussions with my manager about aspirational goals and seek out opportunities to learn and grow.",
            "I build relationships and drive coordination across teams & disciplines, helping get to positive outcomes.",
            "I provide technical leadership.",
            "I act as a partner to my manager in setting the cultural tone for the team. I support an environment where all Afiniti employees are included and heard.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I handle large-scale technical debt and refactoring.",
            "I am beginning to push boundaries to generate and implement ideas that aim to drive our products and tools forward.",
            "I can sign off on test plans.",
            "Given a poorly understood problem, I can explore the solution space to determine correct course of action.",
        ],
    },  
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 3",
            "Master the Craft - level 3",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const principalQASDETEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I participate constructively in architecture or design reviews of complex features that have a broad set of complex dependencies to make sure we are meeting customer needs and design testable and reliable software.",
            "I proactively work with a high degree of independence to find the biggest problems impacting quality at Afiniti and effectively work to address these issues.",
            "I teach all of the QA Capabilities to ensure that team is capable of driving quality for features or large projects to guarantee long-term success.",
            "I take on projects with a wide scope, that involves teams embedded across multiple groups, with multiple integration points that spans a year or longer.",
            "I choose the right tools for automation and design test automation frameworks.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the service and the company.",
            "I play a major role in ensuring the quality of my team’s technical work, both code and software designs.",
            "I can identify when my results aren’t moving the needle for our business goals or serving the needs of customers in a meaningful way and work with manager to redirect my focus.",
            "I get work to a simple place by focusing on the heart of the problem and prioritizing the right things.",
            "I proactively identify new opportunities and advocate for and implement improvements to the current state of projects — potentially having broader business impact across teams or products.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I drive automation strategy to provide guidance on common automation risks and how specific tests should be automated within our systems.",
            "I detect quality metric gaps within my supported teams and their dependencies and advise on strategies to address those gaps.",
            "I exhibit superior testing abilities and technical mastery of multiple surfaces that each have complex dependencies.",
            "I have deep expertise in implementation or principles behind some of the libraries, platforms and systems relevant to my team’s work.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I am a role model for Afiniti employees with a quality mindset that supports the culture of high performance on my team.",
            "I invest time to coach and mentor my teammates.",
            "I help break down silos within and across functions and influence others to reach the best outcome for Afiniti.",
            "I start to build cross-functional relationships, facilitate the right conversations.",
            "I personify Afiniti’s culture and values. I champion community building efforts and inclusion initiatives.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "Thinks both strategically and tactically, keeping in mind both technical goals and company goals.",
            "I push boundaries to generate and implement breakthrough ideas that aim to create new products or advance existing products and drive our tools forward.",
            "I participate in and support initiatives outside of main area of responsibility.",
            "I anticipate challenges and am able to influence the technical direction of the team or org to execute on that vision even in the face of potential significant misalignment.",
            "I am an expert firefighter who is often called in to make things right.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 4",
            "Master the Craft - level 4",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 3",
        ],
    },
];

export const srPrincipalQASDETEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I participate constructively in architecture or design reviews of complex features that have a broad set of complex dependencies to make sure we are meeting customer needs and design testable and reliable software.",
            "I proactively work with a high degree of independence to find the biggest problems impacting quality at Afiniti and effectively work to address these issues.",
            "I teach all of the QA Capabilities to ensure that team is capable of driving quality for features or large projects to guarantee long-term success.",
            "I take on projects with a wide scope, that involves teams embedded across multiple groups, with multiple integration points that spans a year or longer.",
            "I choose the right tools for automation and design test automation frameworks.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I have a sense of responsibility and obligation to act on opportunities I see across the engineering org/company.",
            "I transcend organizational boundaries by taking a holistic view of my group’s goals and taking responsibility across my group, not just within my immediate scope of ownership.",
            "I execute large projects to a very high standard.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I have a strong awareness of the state of the product and team at all times.",
            "I effectively teach and explain advanced Testing Fluency and Advanced Testing Strategy (both manual and automated) principles to the cross functional members of the development team, enabling them to take on this work for low-medium risk projects with minimal support.",
            "I am responsible for making technical choices that have no one clearly correct answer but whose consequences have a sweeping effect across my scope in the organization.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            " I build deep cross-functional relationships, facilitate the right conversations, and settle disagreements by managing different viewpoints.",
            "I work in close partnership with senior leadership to ensure a healthy engineering organization.",
            "I am a role model for Afiniti employees with a quality mindset that supports the culture of high performance on my team.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I show great ability to direct project and/or people.",
            "I demonstrate creativity by finding simple, generalized solutions that open up or unblock new technical or business opportunities in unexpected ways.",
            "I partner with senior leadership to define a long-term vision for my group that factors in both a deep understanding of what is happening in the business and in the market as well as the technical limitations and possibilities.",
            "I lead technical initiatives and/or project based small teams to solve a problem.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 4",
            "Master the Craft - level 4",
            "Own the Work and the Results - level 4",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 3",
        ],
    },
];


export const QAAutomationEngineer1Data = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I attend team meetings to identify variance & defects for my team.	 ",
            "I review requirements, identify test cases, write test cases, and execute tests.",
            "I report bugs and work with the development team to resolve identified defects.",
            "I know how to drive QA methodology and practices, within the application of SDLC.",
            "I design and drive the architectural discussion."
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I work with my manager to prioritize tasks that add the most value and deliver high-quality results for my customer.",
            "I understand and effectively participate in the core processes of my team.",
            "I follow through on my commitments, take responsibility for my work, and deliver my work on time."
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I test applications across platforms.",
            "I identify and run test cases for identified functionality.",
            "I am hands-on with tools and platforms used in product/project",
          ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I need to be good at Listening / Written / Oral communication skills or understand others and ask relevant questions.",
            "I act as part of a team player encouraging collaboration with my team members."
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I escalate to my manager when I get stuck and reflect on ways that I can improve from my mistakes.",
            "I contribute to functional specifications and participates in code reviews to solve problems."
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 1",
            "Master the Craft - level 1",
            "Own the Work and the Results - level 1",
            "Focus on Client Experience - level 1",
            "Work Collaboratively Others - level 1",
            "Manage Ambiguity and Complexity - level 1",
        ],
    },
];

export const QAAutomationEngineer2Data = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I attend team meetings to identify variance & defects for my team.	 ",
            "I review requirements, identify test cases, write test cases, and execute tests.",
            "I report issues and work with engineering teams to resolve identified defects.",
            "I produce QA reports for my manager.",
            "I conduct knowledge-sharing sessions with my team."
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I work with my manager to prioritize tasks that add the most value and deliver high-quality results for my customer.",
            "I understand and effectively participate in the core processes of my team.",
            "I follow through on my commitments, take responsibility for my work, and deliver my work on time."
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I test applications across platforms.",
            "I identify and run test cases for identified functionality.",
            "I assist in the preparation of test results & walkthroughs.",
            "I perform defect reviews with relevant team members.",
            "I am hands-on with tools and platforms used in product/project",
            "I understand & practice QA methodologies within SDLC.",
            "I build, deploy and manage my environment (customizing when required).",
            "I work independently as well as in a team.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I assist in presentations to the project team and business representatives.",
            "I guide to entry-level engineers.",
            "I proactively ask for feedback from those I work with and identify ways to act upon it.",
            "I have self-awareness about my strengths and areas for development.",
            "I drive discussions with my manager about aspirational goals and seek out opportunities to learn and grow.",
            "I am able to represent my team’s initiatives and goals to candidates in a compelling way."
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I can design and complete a given task independently with a known problem.",
            "I work with seniors to define the right solutions or use existing approaches to solve defined problems."
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 2",
            "Master the Craft - level 1",
            "Own the Work and the Results - level 1",
            "Focus on Client Experience - level 1",
            "Work Collaboratively Others - level 1",
            "Manage Ambiguity and Complexity - level 1",
        ],
    },
];

export const srQAAutomationEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I attend team meetings to identify variance & defects for my team.	 ",
            "I review requirements, identify test cases, write test cases, and execute tests.",
            "I report issues and work with engineering teams to resolve identified defects.",
            "I produce QA reports for my manager.",
            "I conduct knowledge-sharing sessions for junior roles."
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the team.",
            "I understand my customers, the business’s goals, and my team’s goals.",
            "I can identify when my results aren’t moving the needle for our team goals or serving the needs of customers in a meaningful way and work with the manager to redirect my focus.",
            "I make informed decisions by consulting the right stakeholders and balancing details with the big picture.",
            "I proactively share information so the right people are informed and aligned."  
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I test applications across platforms.",
            "I identify and run test cases for identified functionality.",
            "I assist in the preparation of test results & walkthroughs.",
            "I perform defect reviews with relevant team members.",
            " I am hands-on with tools and platforms used in product/project",
            "I understand & practice QA methodologies within SDLC.",
            "I build, deploy and manage my environment (customizing when required).",
            "I work independently as well as in a team.",
            "I propose a comprehension of complex business processes and existing systems' architecture and propose efficient solutions. "
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I identify and document variances/defects in User Experience, Usability, process flows, functionalities and communicate them to the team.",
            "I assist in presentations to the project team and business representatives.",
            "I constructively deliver feedback.",
            "I help focus discussion on important aspects.",
            "I actively level up less-experienced members of my team by helping them with their craft, providing guidance, and setting a good example.",
            "I contribute to a positive sense of community on the team.",
            "I am capable of working with cross-functional stakeholders to identify technical blindspots and clarify ambiguity in their ideas."
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I can write functional specifications for small features to solve a new problem.",
            "I’m able to navigate ambiguity and remain resilient through ups and downs.",
            "I execute the development roadmap for complex, multi-phase projects, possibly as a project tech lead.",
            "I can design and implement a course of action to resolve problems."
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 2",
            "Master the Craft - level 2",
            "Own the Work and the Results - level 2",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 2",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const LeadQAAutomationEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I lead my team for meetings to identify variance & defects.",
            "I manage issues and I work with engineering teams to resolve identified defects.",
            "I design & produce QA reports for my manager.",
            "I coach my team members and conduct knowledge-sharing sessions with them.",
            "I review requirements, manage test scenarios, write test cases, and execute tests."
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I analyze variance of results and define actions to take.",
            "I work closely with clients to define and develop the best approach for quality assurance.",
            "I work closely and collaboratively with other teams across the business.",
            "I report variances/defects in user experience, usability, process flows, functionalities to the stakeholders."  
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I test applications and components across platforms.",
            "I identify corner cases, design and execute applicable tests.",
            "I prepare walkthroughs of new features.",
            "I lead defect reviews and work sessions for my team.",
            "I have expertise in agile and scrum methodologies.",
            "I ensure a high test coverage rate.",
            "I am an expert in building, deploying, and managing a QA environment (customizing when required).",
            "I master automation frameworks and techniques.",
            "I am familiar with DevOps ways of working and CICD pipeline."
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I lead to have teamwork & collaboration in my team.",
            "I comprehend complex business processes and existing systems' architecture and propose efficient solutions.",
            "I use some tools agnostic, recommend new processes and techniques to improve the capability of testing.",
            "I ensure QA methodology and practices are followed consistently.",
            "I guide more junior engineers to correct solutions while encouraging collaboration.",
            "I drive discussions with my manager about aspirational goals and seek out opportunities to learn and grow.",
            "I build relationships and drive coordination across teams & disciplines, helping get to positive outcomes.",
            "I provide technical leadership.",
            "I act as a partner to my manager in setting the cultural tone for the team. I support an environment where all Afiniti employees are included and heard.",
            "I support an environment where all Afiniti employees are included and heard."
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I identify problems and propose optimal solutions.",
            "I am able to handle large-scale technical debt and refactoring.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 2",
            "Master the Craft - level 2",
            "Own the Work and the Results - level 2",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 2",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const PrincipalQAAutomationEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I set a strategy for managing result variance & defects.",
            "I lead GAP analysis, risk identification, and define test strategy.",
            "I work on and ensure quality standards and build quality in a timely manner",
            "I lead the implementation of quality standards and ensure adherence to quality practices.",
            "I design and maintain automation frameworks."
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I analyze the variance of results and define actions to take.",
            "I work closely with clients to define and develop the best approach for quality assurance.",
            "I work closely and collaboratively with other teams across the business.",
            "I report variances/defects in user experience, usability, process flows, functionalities to the stakeholders."  
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I test applications and components across platforms.",
            "I identify corner cases, design and execute applicable tests.",
            "I prepare walkthroughs of new features.",
            "I lead defect reviews and work sessions for my team.",
            "I have expertise in agile and scrum methodologies.",
            "I ensure a high test coverage rate.",
            "I am an expert in building, deploying, and managing a QA environment (customizing when required).",
            "I master automation frameworks and techniques.",
            "I am familiar with DevOps ways of working and CICD pipeline."
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I report variances/defects in user experience, usability, process flows, functionalities to the stakeholders.",
            "I lead my team in a teamwork & collaboration environment. ",
            "I propose comprehension of complex business processes and existing systems' architecture and also I propose efficient solutions.",
            "I tool-agnostic in a proper way, recommend new processes and techniques to improve the capability of testing.",
            "I align and comply with department and company objectives.",
            "I ensure QA methodology and practices are followed consistently.",
            "I drive discussions with my manager about aspirational goals and seek out opportunities to learn and grow.",
            "I build relationships and drive coordination across teams & disciplines, helping get to positive outcomes.",
            "I act as a partner to my manager in setting the cultural tone for the team. I support an environment where all Afiniti employees are included and heard."
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I identify, raise problems, and propose solutions",
            "I handle large-scale technical debt and refactoring.",
            "I think both strategically and tactically, keeping in mind both technical goals and company goals.",
            "I push boundaries to generate and implement breakthrough ideas that aim to create new products or advance existing products and drive our tools forward.",
            "I participate in and support initiatives outside of the main area of responsibility.",
            "I anticipate challenges and am able to influence the technical direction of the team or org to execute on that vision even in the face of potential significant misalignment.",
            "I am an expert firefighter who is often called in to make things right.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 3",
            "Master the Craft - level 3",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const srPrincipalQAAutomationEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I set a strategy for managing result variance & defects.",
            "I lead GAP analysis, risk identification, and define test strategy.",
            "I work on and ensure quality standards and build quality in a timely manner",
            "I lead the implementation of quality standards and ensure adherence to quality practices.",
            "I design and maintain automation frameworks."
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I ensure that team works closely and collaborates with other teams across the business.",
            "I prioritize tasks and assign them to the team for timely delivery",
            "I take responsibility for the works that directly affect the service and the company.",
            "I play a major role in ensuring the quality of my team’s technical work, both code and software designs.",
            "I can identify when my results aren’t moving the needle for our business goals or serving the needs of customers in a meaningful way and work with the manager to redirect my focus.",
            "I get work to a simple place by focusing on the heart of the problem and prioritizing the right things.",
            "I proactively identify new opportunities and advocate for and implement improvements to the current state of projects — potentially having a broader business impact across teams or products."     ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I test components, platforms, and complex flows.",
            "I identify underlying issues through specific test methodologies",
            "I have expertise in agile and scrum methodologies",
            "I ensure a high test coverage rate.",
            "I am an expert in building, deploying, and managing the QA environment (customizing when required).",
            "I master automation frameworks and techniques.",
            "I am familiar with DevOps ways of working and the CICD pipeline."
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I report variances/defects in user experience, usability, process flows, functionalities to the stakeholders.",
            "I lead my team in a teamwork & collaboration environment. ",
            "I propose comprehension of complex business processes and existing systems' architecture and also I propose efficient solutions.",
            "I tool-agnostic in a proper way, recommend new processes and techniques to improve the capability of testing.",
            "I align and comply with department and company objectives.",
            "I ensure QA methodology and practices are followed consistently.",
            "I drive discussions with my manager about aspirational goals and seek out opportunities to learn and grow.",
            "I build relationships and drive coordination across teams & disciplines, helping get to positive outcomes.",
            "I act as a partner to my manager in setting the cultural tone for the team. I support an environment where all Afiniti employees are included and heard."
            ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I identify, raise problems, and propose solutions",
            "I handle large-scale technical debt and refactoring.",
            "I think both strategically and tactically, keeping in mind both technical goals and company goals.",
            "I push boundaries to generate and implement breakthrough ideas that aim to create new products or advance existing products and drive our tools forward.",
            "I participate in and support initiatives outside of the main area of responsibility.",
            "I anticipate challenges and am able to influence the technical direction of the team or org to execute on that vision even in the face of potential significant misalignment.",
            "I am an expert firefighter who is often called in to make things right.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 4",
            "Master the Craft - level 4",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 3",
        ],
    },
];

export const devOpsPlatformEngineerData1 = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I provide general, entry-level support to the engineering department.",
            "My primary craft focus is on learning the fundamentals of designing, scaling, and implementing an automated approach across all stages of the complex distributed large-scale software life cycle",
            "I work within the scope of my team with specific guidance from my manager.",
            "I configure and support enterprise software applications for my team.",
            "I have an experience in code level debugging across multiple development platforms."
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I work with my manager to prioritize tasks that add the most value and deliver high-quality results for my customer.",
            "I work with my team in transforming our business by delivering solutions and methodologies following best practices.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            " I have a Bachelor's degree Computer Science, Business Informatics or relevant field.",
            "I have a basic understanding of network topologies and common network protocols and services.",
            "I learn how to run effective system operations along the software lifecycle.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I ask questions to my manager to clarify expectations.",
            "I desire to work in an information systems environment, eager to learn and improve my skills.",
            "I write and speak clearly.",
            "I am a part of promoting a culture of high performance and continuous improvement that values learning and a commitment to quality.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I identify blocking issues & escalate to my manager when I get stuck and reflect on ways that I can improve from my mistakes.",
        ],
    }, 
    // {
    //     icon: techSkillIcon,
    //     title: "Required Technical Skills",
    //     dataList: [
    //         "Linux -Basic",
    //         "Python -Basic",
    //         "Microsoft Office Suite -Intermediate"
    //     ],
    // }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 1",
            "Master the Craft - level 1",
            "Own the Work and the Results - level 1",
            "Focus on Client Experience - level 1",
            "Work Collaboratively Others - level 1",
            "Manage Ambiguity and Complexity - level 1",
        ],
    },
];

export const devOpsPlatformEngineerData2 = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            " My primary craft focus is on learning the fundamentals of designing, scaling, and implementing an automated approach across all stages of the complex distributed large-scale software life cycle",
            "I work with developers and QA to improve the release process by writing automation to deliver high quality software in a more efficient way.",
            "I work within the scope of my team with specific guidance from my manager.",
            "I execute on defined tasks and contribute to solving problems with defined solutions.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I work with my manager to prioritize tasks that add the most value and deliver high-quality results for my customer.",
            "I understand and effectively participate in the core processes of my team.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I apply our release processes and I am eager to learn approaches toward continuous delivery.",
            "My implementations and configurations are free of glaring errors – bugs are in edge cases or design, not mainline paths – and is well documented and well tested.",
            "I perform system landscape support in the assigned functional areas of responsibility.",
            "I run effective system operations along the software lifecycle.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I ask questions to clarify expectations.",
            "I have a high standard of excellence for my work.",
            "I write and speak clearly.",
            "I share relevant information on my project including difficult task-level trade-offs that impact the product to my manager and team.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I identify blocking issues & escalate to my manager when I get stuck and reflect on ways that I can improve from my mistakes.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 1",
            "Master the Craft - level 1",
            "Own the Work and the Results - level 1",
            "Focus on Client Experience - level 1",
            "Work Collaboratively Others - level 1",
            "Manage Ambiguity and Complexity - level 1",
        ],
    },
];

export const sdevOpsPlatformEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I ensure smooth operations and maximize uptime",
            "I work with developers and QA to improve the release process by writing automation to deliver high quality software in a more efficient way.",
            "I execute on defined projects to achieve team-level goals.",
            "I am increasingly mastering my craft and leverage it for higher impact.",
            "I may mentor new hires, interns, or more junior engineers.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I effectively participate in the core processes of my team, including recommending and implementing process improvements.",
            "I act with urgency and deliver high-quality work that will add the most value.",
            "I prioritize the right things and don’t over-complicate my work. When necessary, I propose appropriate scope adjustments.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I apply our release processes and I know approaches toward continuous delivery.",
            "My implementations and configurations are free of glaring errors – bugs are in edge cases or design, not mainline paths – and is well documented and well tested.",
            "I’m able to read and navigate through a large code base and effectively debug.",
            "I’m able to understand the existing designs and technology choices within my area, and I make appropriate adjustments to existing designs when necessary.",
            "I ensure excellent quality and maintain high standards in all processes.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I proactively ask for feedback from those I work with and identify ways to act upon it.",
            "I have self-awareness about my strengths and areas for development.",
            "I drive discussions with my manager about aspirational goals and seek out opportunities to learn and grow.",
            "I am able to represent my team’s initiatives and goals to candidates in a compelling way.",
            "I help the more junior members of my team.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            " I think a step or two ahead in my work, solve the right problems before they become bigger problems, and problem-solve with my manager when I’m stuck",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 2",
            "Master the Craft - level 1",
            "Own the Work and the Results - level 1",
            "Focus on Client Experience - level 1",
            "Work Collaboratively Others - level 1",
            "Manage Ambiguity and Complexity - level 1",
        ],
    },
];

export const leadDevOpsPlatformEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I proactively identify new opportunities and advocate for and implement improvements and automations to the current state of projects.",
            "I mentor new hires, interns, or more junior engineers.",
            "I work with developers and QA to improve the release process by writing automation to deliver high quality software in a more efficient way.",
            "I ensure smooth operations and maximize uptime.",
            "I define automation framework and drive automation and standardization.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the service and the company.",
            "I play a major role in ensuring the quality of my team’s technical work, both code and software designs.",
            "I can identify when my results aren’t moving the needle for our business goals or serving the needs of customers in a meaningful way and work with manager to redirect my focus.",
            "I get work to a simple place by focusing on the heart of the problem and prioritizing the right things.",
            "I proactively identify new opportunities and advocate for and implement improvements to the current state of projects — potentially having broader business impact across teams or products.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I define the product delivery roadmap to bring it into production.",
            "I have a well-rounded set of skills that allow me to build continuous integration, improve and manage our release process and moving toward continuous delivery.",
            "I implement policies and processes for managing downtime and service degradation and communicating status to our users.",
            "I work collaboratively with security team to identify and resolve vulnerabilities.",
            "I architect and manage the server’s infrastructure that our team manages.",
            "I define automation framework and drive automation and standardization.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I guide more junior engineers to correct solutions while encouraging collaboration.",
            "I drive discussions with my manager about aspirational goals and seek out opportunities to learn and grow.",
            "I build relationships and drive coordination across teams & disciplines, helping get to positive outcomes.",
            "I provide technical leadership.",
            "I act as a partner to my manager in setting the cultural tone for the team. I support an environment where all Afiniti employees are included and heard.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I handle large-scale technical debt and refactoring.",
            "I am beginning to push boundaries to generate and implement ideas that aim to drive our products and tools forward.",
            "I can write functional specifications for features to solve a new problem.",
            "Given a poorly understood problem, I can explore the solution space to determine correct course of action.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 2",
            "Master the Craft - level 2",
            "Own the Work and the Results - level 2",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 2",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const principalDevOpsPlatformEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I am an expert at identifying the right solutions to solve ambiguous, open-ended problems that require tough prioritization.",
            "I define future automation strategy and model.",
            "I work with developers and QA to improve the release process by writing automation to deliver high quality software in a more efficient way.",
            "I ensure smooth operations and maximize uptime.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the service and the company.",
            "I play a major role in ensuring the quality of my team’s technical work, both code and software designs.",
            "I can identify when my results aren’t moving the needle for our business goals or serving the needs of customers in a meaningful way and work with manager to redirect my focus.",
            "I get work to a simple place by focusing on the heart of the problem and prioritizing the right things.",
            "I proactively identify new opportunities and advocate for and implement improvements to the current state of projects — potentially having broader business impact across teams or products.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I design, scale and implement an automated approach across all stages of the complex distributed large-scale software life cycle.",
            "I automate and streamline deployment, configuration and maintenance processes.",
            "I have strong alignment with engineering and product management as well as other service groups.",
            "I own and maintain technical standards and frameworks.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I am a role model for other Afiniti employees and model a standard of excellence that supports a culture of high performance on my team.",
            "I invest time to coach and mentor my teammates.",
            "I start to build cross-functional relationships, facilitate the right conversations.",
            "I personify Afiniti’s culture and values. I champion community building efforts and inclusion initiatives.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I handle large-scale technical debt and refactoring.",
            "I am beginning to push boundaries to generate and implement ideas that aim to drive our products and tools forward.",
            "I can write functional specifications for features to solve a new problem.",
            "Given a poorly understood problem, I can explore the solution space to determine correct course of action.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 3",
            "Master the Craft - level 3",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const srPrincipalDevOpsPlatformEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I have the ownership of deployment automations for the effective and efficient delivery of customer environments of respective product lines.",
            "I define future automation strategy and model.",
            "Take the lead in ensuring smooth operations and maximizing uptime.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the service and the company.",
            "I play a major role in ensuring the quality of my team’s technical work, both code and software designs.",
            "I can identify when my results aren’t moving the needle for our business goals or serving the needs of customers in a meaningful way and work with manager to redirect my focus.",
            "I get work to a simple place by focusing on the heart of the problem and prioritizing the right things.",
            "I proactively identify new opportunities and advocate for and implement improvements to the current state of projects — potentially having broader business impact across teams or products.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I strategically define technical standards and frameworks.",
            "I drive continuous improvement for all operational aspects.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I build deep cross-functional relationships, facilitate the right conversations, and settle disagreements by managing different viewpoints.",
            "I work in close partnership with senior leadership to ensure a healthy engineering organization.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I show great ability to direct project and/or people.",
            "I demonstrate creativity by finding simple, generalized solutions that open up or unblock new technical or business opportunities in unexpected ways.",
            "I partner with senior leadership to define a long-term vision for my group that factors in both a deep understanding of what is happening in the business and in the market as well as the technical limitations and possibilities.",
            "I lead technical initiatives and/or project based small teams to solve a problem.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 4",
            "Master the Craft - level 4",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 3",
        ],
    },
];

export const telephonyEngineer1Data = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I install and configure telephony labs and supported systems.",
            "I perform integrations with CTI solutions.",
            "I install and maintain test tools for load and functional testing.",
            "I maintain documentation from writing test scenarios, inventory documentation, solution description documents and guides.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I work with my manager to prioritize tasks that add the most value and deliver high-quality results for my customer.",
            "I understand and effectively participate in the core processes of my team.",
            "I follow through on my commitments, take responsibility for my work, and deliver my work on time.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I have a high standard of excellence for code fluency.",
            "I translate ideas into clear code, written to be read as well as executed",
            "My code is free of glaring errors – bugs are in edge cases or design, not mainline paths – and is well documented and well tested with appropriate use of manual vs automated tests.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I provide guidance to interns.",
            "I share relevant information on my project including difficult task-level trade-offs that impact the product to my manager and team.",
            "I listen to understand others and ask clarifying questions.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I contribute to functional specifications and participates in code reviews to solve problems.",
            "I escalate to my manager when I get stuck and reflect on ways that I can improve from my mistakes.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 1",
            "Master the Craft - level 1",
            "Own the Work and the Results - level 1",
            "Focus on Client Experience - level 1",
            "Work Collaboratively Others - level 1",
            "Manage Ambiguity and Complexity - level 1",
        ],
    },
];

export const telephonyEngineer2Data = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I install and configure telephony labs and supported systems.",
            "I perform integrations with CTI solutions.",
            "I install and maintain test tools for load and functional testing.",
            "I maintain documentation from writing test scenarios, inventory documentation, solution description documents and guides.",
            "I am assisting in special projects for the team such as ISO audits, internal house-keeping, inventory management and research and development.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I work with my manager to prioritize tasks that add the most value and deliver high-quality results for my customer.",
            "I understand and effectively participate in the core processes of my team.",
            "I follow through on my commitments, take responsibility for my work, and deliver my work on time.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I use and understand tools needed to debug and diagnose issues in a test and/or simple production environment.",
            "I’m able to read and navigate through a large code base and effectively debug others’ code",
            "My code is free of glaring errors – bugs are in edge cases or design, not mainline paths – and is well documented and well tested with appropriate use of manual vs automated tests.",
            "I’m able to understand the existing designs and technology choices within my area, and I make appropriate adjustments to existing designs when necessary.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I provide guidance to entry-level engineers.",
            "I proactively ask for feedback from those I work with and identify ways to act upon it.",
            "I have self-awareness about my strengths and areas for development.",
            "I drive discussions with my manager about aspirational goals and seek out opportunities to learn and grow.",
            "I am able to represent my team’s initiatives and goals to candidates in a compelling way.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            " Ican design and complete a given task independently with a known problem.",
            "I independently define the right solutions or use existing approaches to solve defined problems.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 1",
            "Master the Craft - level 1",
            "Own the Work and the Results - level 1",
            "Focus on Client Experience - level 1",
            "Work Collaboratively Others - level 1",
            "Manage Ambiguity and Complexity - level 1",
        ],
    },
];

export const sTelephonyEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I install and configure telephony labs and supported systems.",
            "I perform integrations with CTI solutions.",
            "I install and maintain test tools for load and functional testing.",
            "I maintain documentation from writing test scenarios, inventory documentation, solution description documents and guides.",
            "I am assisting in special projects for the team such as ISO audits, internal house-keeping, inventory management and research and development.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the team.",
            "I understand my customers, the business’s goals and my team’s goals",
            "I can identify when my results aren’t moving the needle for our team goals or serving the needs of customers in a meaningful way and work with manager to redirect my focus.",
            "I make informed decisions by consulting the right stakeholders and balancing details with the big picture.",
            "I proactively share information so the right people are informed and aligned.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I have mastered the fundamentals of code fluency and ensure my team produces high-quality code and have a well-rounded set of software design skills that allow me to build correct, maintainable software components.",
            "I have mastered the tools needed to develop, debug and diagnose issues in any type of environment.",
            "I am able to independently design software components in well scoped scenarios, with simplicity and maintenance as key considerations.",
            "I proactively identify issues with technical dependencies of my project that are owned by other teams and surface them.",
            "I have a good understanding of all services of my product.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I deliver feedback in a constructive manner.",
            "I help focus discussion on important aspects.",
            "I actively level up less-experienced members of my team by helping them with their craft, providing guidance, and setting a good example.",
            "I contribute to a positive sense of community on the team.",
            "I am capable of working with cross-functional stakeholders to identify technical blindspots and clarify ambiguity in their ideas.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I participate in code reviews and can sign off on features.",
            "I can write functional specifications for small features to solve a new problem.",
            "I’m able to navigate ambiguity and remain resilient through ups and downs.",
            "I execute the development roadmap for complex, multi-phase projects, possibly as a project tech lead.",
            "I can design and implement a solution for a new problem.",
        ],
    },  
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 2",
            "Master the Craft - level 2",
            "Own the Work and the Results - level 2",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 2",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const leadTelephonyEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I install and configure telephony labs and supported systems.",
            "I perform integrations with CTI solutions.",
            "I install and maintain test tools for load and functional testing.",
            "I maintain documentation from writing test scenarios, inventory documentation, solution description documents and guides.",
            "I am assisting in special projects for the team such as ISO audits, internal house-keeping, inventory management and research and development.",
            "I lead a functional area within STEM for either interoperability labs, solution deployment, operations or solution design",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the service and the company.",
            "I play a major role in ensuring the quality of my team’s technical work, both code and software designs.",
            "I can identify when my results aren’t moving the needle for our business goals or serving the needs of customers in a meaningful way and work with manager to redirect my focus.",
            "I get work to a simple place by focusing on the heart of the problem and prioritizing the right things.",
            "I proactively identify new opportunities and advocate for and implement improvements to the current state of projects — potentially having broader business impact across teams or products.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I have mastered in development of best practices. I write tech specs and identify risks before starting major projects.",
            "I understand the limits of our tools and when a problem that exceeds those limits deserves the effort of producing a new tool.",
            "My understanding of business context and purpose enables me to make technical decisions aligned with longer term needs, not just immediate requirements.",
            "I understand the scope and relationships of features and production stack for their area.",
            "I have a strong understanding of all products relevant to own areas of expertise.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I guide more junior engineers to correct solutions while encouraging collaboration.",
            "I drive discussions with my manager about aspirational goals and seek out opportunities to learn and grow.",
            "I build relationships and drive coordination across teams & disciplines, helping get to positive outcomes.",
            "I provide technical leadership.",
            "I act as a partner to my manager in setting the cultural tone for the team. I support an environment where all Afiniti employees are included and heard.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I handle large-scale technical debt and refactoring.",
            "I am beginning to push boundaries to generate and implement ideas that aim to drive our products and tools forward.",
            "I define the technical roadmap for complex projects, refining it as the projects progress, and provide leadership for the people executing on the project.",
            "I can write functional specifications for features to solve a new problem.",
            "Given a poorly understood problem, I can explore the solution space to determine correct course of action.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 3",
            "Master the Craft - level 3",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const principalTelephonyEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I install and configure telephony labs and supported systems.",
            "I perform integrations with CTI solutions.",
            "I install and maintain test tools for load and functional testing.",
            "I maintain documentation from writing test scenarios, inventory documentation, solution description documents and guides.",
            "I am assisting in special projects for the team such as ISO audits, internal house-keeping, inventory management and research and development.",
            "I lead a functional area within STEM for either interoperability labs, solution deployment, operations or solution design",
            "I provide subject matter expertise for telephony products.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the service and the company.",
            "I play a major role in ensuring the quality of my team’s technical work, both code and software designs.",
            "I can identify when my results aren’t moving the needle for our business goals or serving the needs of customers in a meaningful way and work with manager to redirect my focus.",
            "I get work to a simple place by focusing on the heart of the problem and prioritizing the right things.",
            "I proactively identify new opportunities and advocate for and implement improvements to the current state of projects — potentially having broader business impact across teams or products.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I’m capable of owning the overall health and engineering quality of a system or collection of features and ensuring that the health and maintenance of my systems do not depend on the maintainers having my expertise.",
            "I design software components that are difficult to misuse and flexible in the face of an increase in the number of adjacent use cases as appropriate to the direction of the business.",
            "I reduce complex concepts to simple foundational components through correct choices of data structures, algorithms or other deep insight into the problem space (ex: 3 tree model in sync engine).",
            "I may have deep expertise in implementation or principles behind some of the libraries, platforms and systems relevant to my team’s work.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I am a role model for other Afiniti employees and model a standard of excellence that supports a culture of high performance on my team.",
            "I invest time to coach and mentor my teammates.",
            "I help break down silos within and across functions and influence others to reach the best outcome for Afiniti.",
            "I start to build cross-functional relationships, facilitate the right conversations.",
            "I personify Afiniti’s culture and values. I champion community building efforts and inclusion initiatives.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I think both strategically and tactically, keeping in mind both technical goals and company goals.",
            "I push boundaries to generate and implement breakthrough ideas that aim to create new products or advance existing products and drive our tools forward.",
            "I participate in and support initiatives outside of main area of responsibility.",
            "I anticipate challenges and am able to influence the technical direction of the team or org to execute on that vision even in the face of potential significant misalignment.",
            "I am an expert firefighter who is often called in to make things right.",
        ],
    },  
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 4",
            "Master the Craft - level 4",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 3",
        ],
    },
];

export const sPrincipalTelephonyEngineerData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I install and configure telephony labs and supported systems.",
            "I perform integrations with CTI solutions.",
            "I install and maintain test tools for load and functional testing.",
            "I maintain documentation from writing test scenarios, inventory documentation, solution description documents and guides.",
            "I am assisting in special projects for the team such as ISO audits, internal house-keeping, inventory management and research and development.",
            "I lead a functional area within STEM for either interoperability labs, solution deployment, operations or solution design",
            "I provide subject matter expertise for telephony products.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I have a sense of responsibility and obligation to act on opportunities I see across the engineering org/company.",
            "I transcend organizational boundaries by taking a holistic view of my group’s goals and taking responsibility across my group, not just within my immediate scope of ownership.",
            "I execute large projects to a very high standard.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "Strong awareness of the state of the product and team at all times.",
            "I can design systems that require research on what is possible rather than relying on my past experience, and where, consequently, a significant portion of the challenge is designing an appropriately staged validation plan.",
            "I am responsible for making technical choices that have no one clearly correct answer but whose consequences have a sweeping effect across my scope in the organization.",
            "I define the high level systems we need to build to meet strategic objectives.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I build deep cross-functional relationships, facilitate the right conversations, and settle disagreements by managing different viewpoints.",
            "I work in close partnership with senior leadership to ensure a healthy engineering organization.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I show great ability to direct project and/or people.",
            "I demonstrate creativity by finding simple, generalized solutions that open up or unblock new technical or business opportunities in unexpected ways.",
            "I partner with senior leadership to define a long-term vision for my group that factors in both a deep understanding of what is happening in the business and in the market as well as the technical limitations and possibilities.",
            "I lead technical initiatives and/or project based small teams to solve a problem.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 4",
            "Master the Craft - level 4",
            "Own the Work and the Results - level 4",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 3",
        ],
    },
];

export const serviceGroupArchitect1Data = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I demonstrate understanding of basic architecture documentation methodologies at each level of a commonly used framework.",
            "I ensure technical integration is achieved across the enterprise by participating in test planning, validation and reviews.",
            "I contribute and approve solutions architecture in my service group.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I have an impact on enterprise architecture products and services, business operations and stakeholder satisfaction.",
            "I ensure that standards are conformed.",
            "I contribute at least 2 architectural improvements per year on my service group that are approved by Enterprise Architecture Board.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I know key regulatory requirements and guidance relating to enterprise architecture.",
            "I identify reusable components and ensure that they are used.",
            "I analyze current technologies and software within the service group and determine ways to improve.",
            "I plan and design architecture and technical aspects of the services.",
            "I give trainings on standards and guidelines to my service group.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I show technical leadership for project teams.",
            "I mentor junior and senior software engineers.",
            "I facilitate group sessions.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I coordinate and conduct governance and portfolio management activities associated with ensuring compliance with the enterprise architecture.",
            "I assist with solving technical problems when they arise.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 2",
            "Master the Craft - level 2",
            "Own the Work and the Results - level 2",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 2",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const serviceGroupArchitect2Data = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I maintain the contacts within business units and information system programs to understand business activities and business drivers and business requirements.",
            "I am responsible from Quality of the Service. I own pre-defined quality, reliability, releasability, security and other KPIs and am accountable for falling behind targets.",
            "I ensure the implementation of agreed architecture and infrastructure within Service.",
            "I provide technical recommendations and trade-offs for initiatives.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I design and implement enterprise wide IT solutions that align with the organization’s structure, goals and systems.",
            "I identify and use various criteria (e.g., time, budget, etc.) to determine department success and ensure alignment with stakeholder needs.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I ensure rigorous application of information security policies, principles and practices to all components of the enterprise architecture.",
            "I develop and mature the service’s architecture policies, objectives and initiatives.",
            "I develop standards, patterns and best practices for product to reuse and acceleration.",
            "I ensure architectural consistency within the service.",
            "I am accountable for detecting and avoiding single point of failure in the service architectures.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I provide enterprise architecture guidance, support and coordination to customers and project teams.",
            "I provide technical leadership and support to others.",
            "I guide and coach developers about technical architecture and solutions implemented in the service.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I coordinate and conduct governance and portfolio management activities associated with ensuring compliance with the enterprise architecture.",
            "I assist with solving technical problems when they arise.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 3",
            "Master the Craft - level 3",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 2",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const srServiceGroupArchitectData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I establishes and maintain the contacts within business units and information system programs to understand business activities and business drivers, business requirements, solutions strategies and alternatives.",
            "I am responsible from Quality of the product. I own pre-defined quality, reliability, releasability, security and other KPIs and am accountable for falling behind targets.",
            "I ensure the implementation of agreed architecture and infrastructure within product or service group.",
            "I provide technical recommendations and trade-offs for initiatives.",
            "I present my portfolio in EA Board and participate in company wide decisions on standards and technologies.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I set strategic direction for the enterprise architecture.",
            "I identify and use various criteria (e.g., time, budget, etc.) to determine department success and ensure alignment with stakeholder needs.",
            "For enterprise architect roles: I contribute at least 2 architectural improvements per year on my portfolio that are approved by Enterprise Architecture Board.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I am the key decision maker about the architecture and technical aspects of the product or service group.",
            "For enterprise architect roles: I develop and mature the product’s architecture policies, objectives and initiatives.",
            "For sr. service group architect roles: I develop and assist existing and potential services with security requirements, solutions architecture, system design, and technical project management related to the service group.",
            "I develop standards, patterns and best practices for product to reuse and acceleration.",
            "I ensure architectural consistency within the product or service group.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I act as an architectural leader in the resolutions of inter-program and inter-project issues.",
            "I guide and coach developers about technical architecture and solutions implemented in the product.",
            "I provide technical leadership and support to others.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I coordinate, conduct and design governance and portfolio management activities while creating an environment for business problem solutions.",
            "I conceptualize problems and offer solutions from different domains and levels.",
        ],
    },  
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 4",
            "Master the Craft - level 4",
            "Own the Work and the Results - level 4",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 3",
        ],
    },
];

export const scrumMaster1Data = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I am accountable for the Scrum Team’s effectiveness.",
            "I enable the Scrum Team to improve its practices, within the Scrum framework.",
            "I coach the team members in self-management and cross-functionality.",
            "I cause the removal of impediments to the Scrum Team’s progress.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the Scrum team.",
            "I redirect scrum team’s focus if our results aren’t moving the needle for our team goals or serving the needs of customers in a meaningful way.",
            "I act with urgency and deliver high-quality work that will maximize value.",
            "I facilitate scrum teams focusing on high value increment.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I help the team produce outcomes with running effective scrum practices.",
            "I ensure that all Scrum events take place and are positive, productive, and kept within the timebox.",
            "I help the Scrum Team focus on creating high-value increments that meet the Definition of Done.",
            "I can add value in the team by choosing tasks during the sprint to help scrum team delivering quality product increment.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I guide the scrum team to create solutions while encouraging collaboration.",
            "I deliver feedback in a constructive manner.",
            "I continuously coach team members to help them to deliver in required quality and time.",
            "I listen to different perspectives and I cut biases from my words and actions",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I can deal with conflicts within the team.",
            "I get work to a simple place by focusing on the heart of the problem and prioritizing the right things.",
            "I ask questions and contribute to new ideas/approaches.",
            "I avoid blame and solve the right problems, disagreeing and committing when necessary.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 2",
            "Master the Craft - level 2",
            "Own the Work and the Results - level 2",
            "Focus on Client Experience - level 2",
            "Work Collaboratively Others - level 2",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const scrumMaster2Data = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I am accountable for the Scrum Team’s effectiveness in product level.",
            "I enable the Scrum Team to improve its practices, within the Scrum framework.",
            "I individually support each team member as a trusted advisor.",
            "I protect the team from over-committing and scope creep and aid in estimation and sub task creation. I coach the team in delivering the high value product increment in each sprint and avoiding the technical debt.",
            "I work with scrum team to ensure scrum tools are effectively used and enable teams to take ownership on the progress towards the sprint goal.",
            "I facilitate the scrum team implementing Scrum.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the Scrum team.",
            "I plan and advise Scrum implementations within the organization.",
            "I help employees and stakeholders understand and enact an empirical approach for complex work.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I help the team and product owners produce outcomes with running effective scrum practices.",
            "I coach the team members in self-management and cross-functionality",
            "I help product owners to find techniques for effective Product Goal and Product Backlog Management.",
            "I help the Scrum Team understand the need for clear and concise Product Backlog items.",
            "I help establish empirical product planning for a complex environment.",
            "I know the basics for coaching and facilitation.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I support and motivate all team members & product owners.",
            "I’m an approachable mentor who is viewed as a leader and act like one.",
            "I deliver feedback in a constructive manner.",
            "I unblock the scrum team to deliver impact by establishing efficient execution.",
            "I encourage collaboration within the agile team, with the Product owner as well as other agile teams.",
            "I facilitate stakeholder collaboration as requested or needed.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I balance strategic and tactical actions and help to distribute work across team.",
            "Given a poorly understood problem, I can explore the solution space to determine correct course of action.",
            "I actively keep customer needs in mind and leverage input from product stakeholders as available to determine the right technical solutions to deliver customer value quickly.",
            "I understand the implications of my decisions and adjust my approach based on the impact and risk in the short and long-term.",
            "I avoid blame and solve the right problems, disagreeing and committing when necessary.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 3",
            "Master the Craft - level 3",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 2",
            "Manage Ambiguity and Complexity - level 2",
        ],
    },
];

export const scrumMaster3Data = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I am accountable for the Scrum Team’s effectiveness in product level.",
            "I can implement scaled framework and can work with different scrum teams from service groups.",
            "I can coach, mentor, train and facilitate scrum teams to improve the effectiveness of the team.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I take responsibility for the works that directly affect the Scrum team and the customer.",
            "I support scrum teams to make sure that quality is as high as possible.",
            "I think a step or two ahead in my work, solve the right problems before they become bigger problems.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I help the team, product owners and entire organization produce outcomes with running effective scrum practices.",
            "I help employees and stakeholders understand and enact an empirical approach for complex work in product level.",
            "I remove barriers between stakeholders and Scrum Teams.",
            "I coach the scrum master I/II in scrum best practices.",
            "I continuously coach team members to help them to deliver in required quality and time.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I support, motivate and encourage all team members & product owners to create better solutions.",
            "I act as a coach for the team.",
            "I build strong relationships in their own team and across the company.",
            "I help the scrum teams evolve to a high performing self-organized agile team(s) by challenging status quo.",
            "I continuously guide the agile teams improve its ways of working.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I balance strategic and tactical actions and help to distribute work across team.",
            "I work as true leader and enable teams to solve their own problems.",
            "I introduce problem resolutions through facilitation technique’s.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 3",
            "Master the Craft - level 3",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 3",
        ],
    },
];

export const agileCoachData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I am a servant-leader working with agile teams who is responsible for promoting Agile ways of working.",
            "I provide group mentoring to employees within organization.",
            "I work with Scrum Teams and introduce new tools and techniques for Agile Frameworks.",
            "I provide training to employees on the Agile Frameworks.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I have a company-wide responsibility to ensure that successful use of Scrum depends on people becoming more proficient in living Scrum values: Commitment, Focus, Openness, Respect, and Courage",
            "I fine tune my approach to getting buy-in and influencing stakeholders across a variety of audiences.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I lead, train, and coach the organization in its Scrum adoption.",
            "I plan and advise Scrum implementations within the organization.",
            "I mentor, train and coach scrum masters with scrum best practices.",
            "I’m certified coach from ICF or EMCC and eligible to provide coaching to individuals and teams.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I build deep cross-functional relationships, facilitate the right conversations, and settle disagreements by managing different viewpoints.",
            "I take personal accountability for failure, while praising scrum teams for accomplishments and I work in close partnership with senior leadership to ensure a healthy engineering organization.",
            "I personify Afiniti’s culture and values. I champion community building efforts and inclusion initiatives. I work in close partnership with the management team to ensure a healthy engineering organization.",
            "I develop compelling messages and effectively present them at the executive level.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "I build relationships and drive coordination across teams & disciplines, helping get to positive outcomes.",
            "I help removing blame game culture and coach people towards resolving the problems themselves by adharing Afiniti’s Values.",
            "I’m able to reach the right decision despite conflicting perspectives and act thoughtfully and decisively.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 4",
            "Master the Craft - level 4",
            "Own the Work and the Results - level 4",
            "Focus on Client Experience - level 4",
            "Work Collaboratively Others - level 4",
            "Manage Ambiguity and Complexity - level 4",
        ],
    },
];

export const serviceGroupLeaderData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I create an environment where my teams can learn from failures to drive better business outcomes.",
            "I independently lead my team to deliver business impact through successfully driving results on projects in support of semi-annual/annual goals.",
            "I make informed decisions by consulting the right stakeholders and balancing details with the big picture.",
            "I am accountable for ” How” to implement in services within my service group. In other words, I single-handedly make the decision on tech choices and methods.",
            "I provide a concrete delivery PROMISE based sizing and capacity in Service Group level.",
            "I take full responsibility on complex problems about my service group when needed.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I refocus my team’s efforts when results aren’t moving the needle for our business/team goals or serving the needs of customers in a meaningful way.",
            "I am responsible for ensuring that results do not come at the expense of long term growth, retention, or psychological safety.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I have broad experience and knowledge to demonstrate technical leadership in at least one area.",
            "I reduce complex concepts to simple foundational components through correct choices of data structures, algorithms or other deep insight into the problem space (ex: 3 tree model in sync engine).",
            "I may have deep expertise in implementation or principles behind some of the libraries, platforms and systems relevant to my team’s work.",
            "I’m capable of owning the overall health and engineering quality of a system or collection of features and ensuring that the health and maintenance of my systems do not depend on the maintainers having my expertise.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I show great ability to direct project and/or people. I give opportunities to work on next-level assignments that demonstrate readiness for promotion when appropriate.",
            "I act as a coach for the team.",
            "I foster the career growth of my team members by taking into account their career goals and looking for ways to provide meaningful development experiences based on their skills and interest.",
            "I build strong relationships in their own team and across the company.",
            "I am accountable for avoiding single point of failure at my team, such as production shouldn’t have a negative impact when pivotal staff leaves the org.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "Given long term strategic goals, I can lay out a path across many versions.",
            "I participate in and support initiatives outside of main area of responsibility to solve new problems.",
            "I’m able to reach the right decision despite conflicting perspectives and act thoughtfully and decisively.",
        ],
    }, 
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 3",
            "Master the Craft - level 3",
            "Own the Work and the Results - level 3",
            "Focus on Client Experience - level 3",
            "Work Collaboratively Others - level 3",
            "Manage Ambiguity and Complexity - level 3",
        ],
    },
];

export const srServiceGroupLeaderData = [
    {
        icon: responsibilitiesIcon,
        title: "Responsibilities",
        dataList: [
            "I create an environment where my teams can learn from failures to drive better business outcomes.",
            "I independently lead my team to deliver business impact through successfully driving results on projects in support of semi-annual/annual goals.",
            "I make informed decisions by consulting the right stakeholders and balancing details with the big picture.",
            "I am accountable for ” How” to implement in services within my service group. In other words, I single-handedly make the decision on tech choices and methods.",
            "I provide a concrete delivery PROMISE based sizing and capacity in Service Group level.",
            "I take full responsibility on complex problems about my service group when needed.",
        ],
    },
    {
        icon: businessImpactIcon,
        title: "Business Impact",
        dataList: [
            "I know which levers to pull to drive meaningful results and understand the wider, cross-functional implications of my team’s work.",
        ],
    },
    {
        icon: technicalExpertiseIcon,
        title: "Technical Expertise",
        dataList: [
            "I have broad experience and knowledge to demonstrate technical leadership in multiple areas.",
            "I have strong awareness of the state of the product and team at all times.",
        ],
    },
    {
        icon: leadershipAndInterpersonalSkillsIcon,
        title: "Leadership and Interpersonal Skills",
        dataList: [
            "I build deep cross-functional relationships, facilitate the right conversations, and settle disagreements by managing different viewpoints.",
            "I takes personal accountability for failure, while praising team for accomplishments and I work in close partnership with senior leadership to ensure a healthy engineering organization.",
        ],
    },
    {
        icon: problemSolvingIcon,
        title: "Problem Solving",
        dataList: [
            "Given long term strategic goals, I can lay out a path across many versions.",
            "I participate in and support initiatives outside of main area of responsibility to solve new problems.",
            "I’m able to reach the right decision despite conflicting perspectives and act thoughtfully and decisively.",
        ],
    },
    {
        icon: corecompetencyIcon,
        title: "Core Competencies",
        dataList: [
            "Exhibit Respect and Trust - level 4",
            "Master the Craft - level 4",
            "Own the Work and the Results - level 4",
            "Focus on Client Experience - level 4",
            "Work Collaboratively Others - level 4",
            "Manage Ambiguity and Complexity - level 4",
        ],
    },
];