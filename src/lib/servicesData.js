// lib/servicesData.js
import { 
  FaUserTie, 
  FaSearch, 
  FaClipboardCheck, 
  FaUserPlus,
  FaChartLine,
  FaComments,
  FaBullseye,
  FaCouch,
  FaHeart,
  FaLightbulb,
  FaHandshake,
  FaUserShield,
  FaDollarSign,
  FaBalanceScale,
  FaGift,
  FaShieldAlt,
  FaCalculator,
  FaPercentage,
  FaTax,
  FaFileInvoiceDollar,
  FaFileAlt,
  FaCogs,
  FaGavel,
  FaExclamationTriangle,
  FaSitemap,
  FaEye,
  FaBuilding,
  FaUsers,
  FaRocket,
  FaHeadset,
  FaClipboardList,
  FaLaptopCode,
  FaGraduationCap,
  FaRobot,
  FaChartBar,
  FaDiversity,
  FaBrain,
  FaFlag,
  FaUserCheck,
  FaLeaf,
  FaProjectDiagram,
  FaTools,
  FaExchangeAlt
} from 'react-icons/fa';

export const servicesData = {
  "talent-acquisition-recruitment": {
    id: 2,
    title: "Talent Acquisition & Recruitment",
    subtitle: "Unlocking Potential Through Effective Hiring",
    description: "In the fast-paced business environment, acquiring the right talent is crucial for your organization's success. At People Impact, we specialize in providing comprehensive talent acquisition and recruitment services designed to meet your specific needs and drive business growth.",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      {
        title: "Job Analysis and Development of Job Descriptions",
        description: "We begin with a thorough job analysis to understand the specific requirements and expectations for each role. Our team collaborates with you to develop clear and compelling job descriptions that not only attract qualified candidates but also accurately reflect your organization's culture and values.",
        icon: FaFileAlt
      },
      {
        title: "Sourcing and Screening Candidates", 
        description: "Leveraging a variety of sourcing strategies, we identify and reach out to top talent in the market. Our multi-channel approach includes utilizing online job boards, social media platforms, and our extensive network. We meticulously screen candidates based on their skills, experiences, and alignment with your organizational values to ensure the best fit for your team.",
        icon: FaSearch
      },
      {
        title: "Conducting Interviews and Assessments",
        description: "Our structured interview and assessment process ensures consistency and fairness in candidate evaluation. We conduct in-depth interviews and utilize tailored assessment tools that measure both technical skills and soft skills, allowing us to select candidates who can contribute effectively to your team.",
        icon: FaClipboardCheck
      },
      {
        title: "Onboarding and Orientation Programs",
        description: "A smooth onboarding experience is critical for new hires. We provide comprehensive onboarding solutions that help integrate new employees into your organization seamlessly. Our programs include orientation sessions, training plans, and mentorship opportunities to ensure that new hires feel welcomed, informed, and prepared to succeed from day one.",
        icon: FaUserPlus
      }
    ],
    ctaText: "Ready to Elevate Your Talent Acquisition?",
    ctaDescription: "Let People Impact help you build a strong, talented workforce. Contact us today to learn more about our Talent Acquisition & Recruitment services and how we can support your hiring needs."
  },
  
  "performance-management": {
    id: 3,
    title: "Performance Management",
    subtitle: "Maximizing Potential, Driving Results",
    description: "We understand that effective performance management is essential for the success of any organization. Our Performance Management services are designed to help you cultivate a high-performance culture that aligns individual contributions with your business objectives.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      {
        title: "Creation and Implementation of Performance Appraisal Systems",
        description: "We design and implement customized performance appraisal systems tailored to your organization's needs. Our approach ensures that appraisals are systematic, transparent, and constructive, providing employees with a clear understanding of their performance and areas for improvement. By utilizing best practices, we help create a framework that encourages regular evaluations and supports employee growth.",
        icon: FaChartLine
      },
      {
        title: "Establishing Employee Feedback Mechanisms",
        description: "Continuous feedback is crucial for employee engagement and development. We work with you to establish effective feedback mechanisms that foster open communication between managers and employees. This includes structured feedback processes, 360-degree reviews, and coaching sessions, allowing employees to receive timely and constructive feedback that promotes professional development and boosts morale.",
        icon: FaComments
      },
      {
        title: "Setting Goals and Developing KPIs/OKRs",
        description: "Clear and measurable objectives are vital for organizational success. Our team collaborates with you to set realistic and strategic goals using the SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound). We assist in developing Key Performance Indicators (KPIs) and Objectives and Key Results (OKRs) that not only evaluate performance but also provide a roadmap for achieving your organization's goals.",
        icon: FaBullseye
      },
      {
        title: "Ongoing Performance Monitoring and Coaching",
        description: "Performance management is an ongoing process. We support you in implementing systems for continuous performance monitoring, ensuring that employees are held accountable while also recognizing their achievements. Our coaching services empower leaders to provide effective guidance, facilitating regular check-ins and performance discussions that keep teams aligned and motivated.",
        icon: FaCouch
      }
    ],
    ctaText: "Ready to Transform Your Performance Management Process?",
    ctaDescription: "Contact us today to learn more about how our Performance Management services can help your organization achieve its full potential."
  },

  "employee-engagement-retention": {
    id: 4,
    title: "Employee Engagement & Retention",
    subtitle: "Fostering a Thriving Workplace Culture",
    description: "We believe that engaged employees are the cornerstone of a successful organization. Our Employee Engagement & Retention services are designed to enhance workplace satisfaction, boost morale, and increase retention rates, contributing to a harmonious and productive work environment.",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      {
        title: "Conducting Employee Satisfaction Surveys and Analysis",
        description: "We offer comprehensive employee satisfaction surveys to gather valuable insights into the workplace atmosphere and employee sentiments. Our team analyzes the results to identify strengths and areas for improvement, providing you with actionable recommendations that align with your organization's goals.",
        icon: FaClipboardList
      },
      {
        title: "Developing Engagement Initiatives",
        description: "Engaging employees is essential for productivity and morale. We help create and implement tailored engagement initiatives that resonate with your workforce. From recognition programs to team-building activities and wellness initiatives, our strategies are designed to foster a sense of belonging and commitment among employees.",
        icon: FaHeart
      },
      {
        title: "Formulating Retention Strategies",
        description: "Retaining top talent is crucial for maintaining organizational stability. We work closely with you to develop targeted retention strategies that address the unique needs of your workforce. By understanding employee motivations and implementing policies that promote career development, work-life balance, and competitive compensation, we help reduce turnover and enhance job satisfaction.",
        icon: FaUserShield
      },
      {
        title: "Providing Conflict Resolution and Mediation Services",
        description: "Conflicts in the workplace can hinder engagement and productivity. Our experienced HR professionals provide conflict resolution and mediation services to help address disputes swiftly and effectively. We facilitate open communication, guiding employees towards constructive solutions that restore collaboration and strengthen team dynamics.",
        icon: FaHandshake
      }
    ],
    ctaText: "Are You Ready to Enhance Employee Engagement and Retention?",
    ctaDescription: "Contact us today to discover how our Employee Engagement & Retention services can help you create a motivated and dedicated workforce."
  },

  "compensation-benefits": {
    id: 5,
    title: "Compensation & Benefits",
    subtitle: "Attracting and Retaining Top Talent Through Competitive Packages",
    description: "We understand that a well-structured compensation and benefits program is critical to attracting and retaining top talent. Our Compensation & Benefits services are designed to ensure your organization remains competitive while fostering employee satisfaction and compliance with regulatory requirements.",
    heroImage: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      {
        title: "Salary Benchmarking and Analysis",
        description: "We conduct comprehensive salary benchmarking to analyze your organization's compensation relative to industry standards and competitors. Our data-driven approach helps you understand market trends and ensures your salary structures are both competitive and equitable.",
        icon: FaChartBar
      },
      {
        title: "Creating Competitive Compensation Packages",
        description: "We specialize in designing tailored compensation packages that align with your organization's goals and values. Our team works with you to develop a balance of base salaries, bonuses, and incentives that motivate and reward employees, ensuring that your offerings attract high-caliber talent.",
        icon: FaDollarSign
      },
      {
        title: "Benefits Administration and Optimization",
        description: "Effective benefits administration is essential for employee satisfaction. We assist you in managing and optimizing your benefits programs, including health insurance, retirement plans, and other perks. Our goal is to provide clear communication of benefits to employees, ensuring they understand and appreciate their total compensation.",
        icon: FaGift
      },
      {
        title: "Ensuring Compliance with Labor Laws and Regulations",
        description: "Navigating the complexities of labor laws and regulations can be challenging. Our expertise ensures that your compensation and benefits programs comply with all relevant legislation, mitigating risks and protecting your organization from potential liabilities. We keep you updated on changes in regulations to ensure ongoing compliance.",
        icon: FaBalanceScale
      }
    ],
    ctaText: "Ready to Enhance Your Compensation and Benefits Strategy?",
    ctaDescription: "Contact us today to learn how our Compensation & Benefits services can help you attract and retain the best talent while ensuring compliance and satisfaction within your organization."
  },

  "payroll-services": {
    id: 6,
    title: "Payroll Services",
    subtitle: "Streamlining Your Payroll Process for Peace of Mind",
    description: "We recognize that accurate and timely payroll processing is critical to your organization's success and employee satisfaction. Our Payroll Services are designed to simplify the payroll process, ensuring that your employees are paid accurately while maintaining compliance with all relevant regulations.",
    heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      {
        title: "Comprehensive Payroll Processing and Management",
        description: "Our team handles all aspects of payroll processing, from data entry to payment distribution. We ensure streamlined and error-free payroll management, allowing you to focus on your core business operations while we take care of your payroll needs.",
        icon: FaCogs
      },
      {
        title: "Calculation of Wages, Deductions, and Bonuses",
        description: "We accurately calculate employee wages and apply the necessary deductions, including taxes, benefits, and other withholdings. Additionally, we manage bonus calculations, ensuring that all compensation elements are processed smoothly and in compliance with regulations.",
        icon: FaCalculator
      },
      {
        title: "Compliance with Tax Regulations and Reporting",
        description: "Navigating tax laws can be complex. Our payroll experts ensure compliance with all local, state, and federal tax regulations. We take care of tax calculations, withholding, and reporting, minimizing your risk of penalties and ensuring that your payroll processes adhere to legal standards.",
        icon: FaTax
      },
      {
        title: "Conducting Payroll Audits and Reconciliation",
        description: "We provide payroll auditing services to review and verify payroll records, ensuring accuracy and identifying any discrepancies. Our reconciliation process guarantees that your payroll aligns with accounting records, giving you confidence in your financial reporting.",
        icon: FaFileInvoiceDollar
      }
    ],
    ctaText: "Ready to Simplify Your Payroll Process?",
    ctaDescription: "Contact us today to discover how our Payroll Services can enhance your payroll operations, ensuring accuracy, compliance, and employee satisfaction."
  },

  "hr-policies-procedures": {
    id: 7,
    title: "HR Policies & Procedures",
    subtitle: "Building a Strong Foundation for Your Organization",
    description: "Effective HR policies and procedures are essential for fostering a positive workplace culture, ensuring compliance, and mitigating risks. At People Impact, we specialize in developing comprehensive HR policies and procedures that align with your organizational goals and legal requirements.",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      {
        title: "Drafting and Updating Employee Regulations Manuals",
        description: "We help you create clear and concise employee regulations manuals tailored to your organization's specific needs. Our team ensures that all policies reflect current best practices and legal standards, covering critical topics such as conduct, workplace safety, and anti-discrimination.",
        icon: FaFileAlt
      },
      {
        title: "Developing HR Policies and Standard Operating Procedures (SOPs)",
        description: "We assist in developing comprehensive HR policies and SOPs that provide guidance on key HR functions, from recruitment and onboarding to performance management and termination processes. Our policies are designed to promote consistency and fairness while supporting your organizational objectives.",
        icon: FaCogs
      },
      {
        title: "Compliance Assessment and Regulatory Guidance",
        description: "Navigating the complex landscape of labor laws and regulations can be challenging. Our experts conduct thorough compliance assessments to ensure your HR policies adhere to all applicable laws and regulations. We provide guidance on industry standards to help you maintain compliance and avoid potential liabilities.",
        icon: FaGavel
      },
      {
        title: "Managing Risk Related to HR Policies",
        description: "We work with you to identify and manage risks associated with HR policies and practices. Our proactive approach includes reviewing existing policies, recommending improvements, and implementing strategies to mitigate risks related to employee relations, compliance, and operational efficiency.",
        icon: FaExclamationTriangle
      }
    ],
    ctaText: "Ready to Strengthen Your HR Framework?",
    ctaDescription: "Contact us today to learn how our HR Policies & Procedures services can help you create a solid foundation for your organization, fostering a compliant and engaging workplace."
  },

  "organizational-development": {
    id: 8,
    title: "Organizational Development",
    subtitle: "Fostering Growth and Resilience in Your Organization",
    description: "We understand that effective organizational development is crucial for navigating change, enhancing culture, and achieving business goals. Our comprehensive Organizational Development services are designed to support your organization in adapting to evolving market demands while fostering a collaborative and innovative environment.",
    heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      {
        title: "Providing Change Management Support",
        description: "Navigating change can be challenging for any organization. We offer strategic change management support to help you implement transitions smoothly and effectively. Our approach includes assessing the impact of change, developing communication plans, and providing training and resources to ensure employees embrace and adapt to new initiatives.",
        icon: FaExchangeAlt
      },
      {
        title: "Conducting Culture Assessments and Enhancements",
        description: "A strong organizational culture is essential for employee engagement and performance. We conduct thorough culture assessments to understand your current workplace environment and identify areas for enhancement. Our team collaborates with you to develop initiatives that promote a positive culture, align with your values, and drive organizational effectiveness.",
        icon: FaEye
      },
      {
        title: "Designing and Aligning Organizational Structures",
        description: "An effective organizational structure lays the foundation for achieving strategic objectives. We assist you in designing and aligning your organizational structure to ensure clarity in roles, responsibilities, and reporting lines. By optimizing structure, we help you enhance collaboration, communication, and operational efficiency.",
        icon: FaSitemap
      },
      {
        title: "Implementing Team-Building Strategies and Workshops",
        description: "Strong teams are vital for organizational success. We design and facilitate engaging team-building workshops that strengthen relationships, improve communication, and foster collaboration among team members. Our strategies aim to develop high-performing teams that work seamlessly towards common goals.",
        icon: FaUsers
      }
    ],
    ctaText: "Ready to Enhance Your Organizational Effectiveness?",
    ctaDescription: "Contact us today to discover how our Organizational Development services can help your organization thrive in a dynamic environment."
  },

  "compliance-support": {
    id: 9,
    title: "Compliance Support",
    subtitle: "Ensuring Your Organization Stays Compliant and Protected",
    description: "We understand that navigating the complex landscape of labor laws and regulations can be challenging for organizations of all sizes. Our Compliance Support services are designed to help you stay informed, mitigate risks, and ensure that your HR practices align with legal requirements.",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      {
        title: "Advising on Labor Laws and Regulations",
        description: "We provide expert guidance on current labor laws and regulations to ensure your organization remains compliant. Our team stays updated on legal changes and industry standards, helping you navigate requirements related to employment practices, employee rights, workplace safety, and more. With our support, you can proactively address potential compliance issues before they escalate.",
        icon: FaGavel
      },
      {
        title: "Assisting with Compliance Audits",
        description: "Regular compliance audits are essential for identifying areas of risk and ensuring adherence to legal standards. We assist you in conducting thorough compliance audits of your HR policies and practices, reviewing documentation, and assessing processes. Our team provides detailed recommendations to enhance compliance and develop action plans that address any identified gaps or issues.",
        icon: FaClipboardCheck
      }
    ],
    ctaText: "Ready to Ensure Compliance and Manage Risk?",
    ctaDescription: "Contact us today to learn how our Compliance Support services can help you navigate labor laws effectively and protect your organization."
  },

  "hr-technology-implementation": {
    id: 10,
    title: "HR Technology Implementation",
    subtitle: "Transforming HR Through Innovative Technology Solutions",
    description: "In today's fast-paced business environment, leveraging the right technology is crucial for enhancing HR efficiency and effectiveness. At People Impact, we specialize in HR Technology Implementation services designed to help organizations choose, implement, and optimize HR software solutions that align with their strategic goals.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      {
        title: "Selecting and Implementing HR Software Solutions",
        description: "We guide you through the selection of the most suitable HR software solutions tailored to your organization's specific needs. Our experts evaluate various platforms, considering factors such as functionality, scalability, and cost-effectiveness. Once a solution is selected, we handle the implementation process to ensure a smooth transition.",
        icon: FaLaptopCode
      },
      {
        title: "Training Staff on New Technologies",
        description: "Effective technology adoption requires thorough training for your staff. We provide comprehensive training programs that equip your team with the knowledge and skills necessary to use the new HR technology confidently. Our training sessions can be tailored to different user levels, ensuring that everyone from HR personnel to line managers understands how to leverage the technology effectively.",
        icon: FaGraduationCap
      },
      {
        title: "Automating HR Processes",
        description: "We help streamline your HR operations by automating repetitive processes, such as payroll, recruitment, and performance management. By implementing automation, we not only enhance operational efficiency but also free up your HR team to focus on strategic initiatives and employee engagement.",
        icon: FaRobot
      },
      {
        title: "Evaluating the Impact of Technology on HR Performance",
        description: "After implementation, we conduct evaluations to assess the impact of technology on HR performance and organizational outcomes. By analyzing key metrics and collecting feedback from users, we provide insights into how the technology is improving HR functions and identify opportunities for further optimization.",
        icon: FaChartBar
      }
    ],
    ctaText: "Ready to Transform Your HR Function with Technology?",
    ctaDescription: "Contact us today to learn how our HR Technology Implementation services can enhance your HR operations and drive organizational success."
  },

  "diversity-equity-inclusion": {
    id: 11,
    title: "Diversity, Equity, and Inclusion (DEI)",
    subtitle: "Creating Inclusive Workplaces That Empower Everyone",
    description: "We believe that a diverse, equitable, and inclusive workplace is essential for fostering innovation and driving organizational success. Our DEI services are designed to help organizations build a culture that values diversity, promotes equity, and ensures that every employee feels included and empowered to contribute their best.",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      {
        title: "Developing DEI Strategies",
        description: "We partner with you to develop comprehensive DEI strategies tailored to your organization's unique culture and goals. Our approach involves assessing your current DEI landscape, identifying areas for improvement, and creating actionable plans that drive meaningful change.",
        icon: FaRocket
      },
      {
        title: "Providing Training on Unconscious Bias and Inclusivity",
        description: "Understanding unconscious bias is crucial for creating an inclusive workplace. We offer training programs that help employees recognize and address their biases, fostering a culture of inclusivity. Our training sessions empower your team with the knowledge and skills needed to contribute to an equitable environment.",
        icon: FaBrain
      },
      {
        title: "Establishing DEI Metrics and Reporting",
        description: "Measuring progress is vital for the success of any DEI initiative. We assist you in establishing clear DEI metrics and reporting mechanisms, enabling you to track progress and assess the effectiveness of your DEI strategies. Our data-driven approach ensures that you can make informed decisions and adjustments to your initiatives.",
        icon: FaFlag
      },
      {
        title: "Facilitating Diverse Hiring Practices",
        description: "Attracting a diverse workforce begins with inclusive hiring practices. We help you design and implement recruitment strategies that promote diversity at all levels. Our services include developing job postings that appeal to a broad audience, training hiring managers on inclusive interviewing techniques, and ensuring that your selection processes are fair and equitable.",
        icon: FaUserCheck
      }
    ],
    ctaText: "Ready to Foster a Diverse and Inclusive Workplace?",
    ctaDescription: "Contact us today to discover how our Diversity, Equity, and Inclusion (DEI) services can help you create a thriving, inclusive workplace where everyone can succeed."
  },

  "custom-services": {
    id: 12,
    title: "Custom Services",
    subtitle: "Tailored Solutions for Unique Challenges",
    description: "At People Impact, we recognize that every organization has unique challenges and goals. Our Custom Services are designed to address your specific needs, providing you with tailored solutions that go beyond our standard offerings. Whether you're looking to implement corporate social responsibility (CSR) initiatives or require specialized support for workforce planning and analysis, we are here to help.",
    heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      {
        title: "Consultancy on Corporate Social Responsibility (CSR) Initiatives",
        description: "We assist organizations in developing and implementing effective CSR strategies that align with their values and business objectives. Our team works closely with you to design programs that positively impact society, engage employees, and enhance your brand reputation. From environmental sustainability to community engagement, we help you create meaningful initiatives that resonate with your stakeholders.",
        icon: FaLeaf
      },
      {
        title: "Specialized Projects Related to Workforce Planning",
        description: "Strategic workforce planning is essential for aligning human resources with your organization's future goals. We provide customized solutions that include thorough workforce analysis, skills gap assessments, and succession planning strategies. Our aim is to ensure that you have the right talent in place to drive your business forward.",
        icon: FaProjectDiagram
      },
      {
        title: "Tailored Training and Development Programs",
        description: "In addition to our standard training sessions, we offer customized training programs designed to address specific organizational challenges or initiatives. From leadership development workshops to skills training tailored to your team, we ensure that our programs meet your exact requirements.",
        icon: FaTools
      },
      {
        title: "Change Management Support",
        description: "Implementing changes within your organization can be complex. Our tailored change management support services help you navigate transitions smoothly, ensuring that employees are engaged and aligned with the new direction. We focus on minimizing disruption while maximizing acceptance and commitment to change.",
        icon: FaExchangeAlt
      }
    ],
    ctaText: "Let's Work Together to Achieve Your Goals!",
    ctaDescription: "Contact us today to learn more about our Custom Services and how we can help you address your unique challenges with tailored solutions."
  }
};