// ============================================================
// SAAS-Guard — Website Content Data
// ============================================================

const SITE_DATA = {

  // ── Project Info ──────────────────────────────────────────
  project: {
    name: "SAAS-Guard",
    tagline: "AI-Powered Granular Access Control for SaaS Applications",
    subTaglines: [
      "Insider Threat Detection with Unsupervised ML",
      "Behavioral Role Recommendation Engine",
      "Risk-Calibrated Access Classification",
      "Explainable AI for Audit-Ready Compliance",
      "Zero Trust Security for Cloud-Native SaaS"
    ],
    projectId: "25-26J-053",
    university: "SLIIT — Sri Lanka Institute of Information Technology",
    department: "Faculty of Computing | Computer Systems Engineering",
    year: "2025/26",
    description: `Modern SaaS platforms face increasing challenges in managing user access securely and adaptively within cloud-native, multi-tenant environments. Traditional access control mechanisms such as Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) rely heavily on static rules and predefined user-role mappings. These models struggle to adapt to dynamic user behavior, contextual changes, or sophisticated insider threats — leading to over-privileged access, policy misconfigurations, and delayed threat detection.`,
    solution: `SAAS-Guard proposes an AI-powered framework that continuously learns from user behavior, detects anomalies in real time, predicts access decisions, and provides transparent, auditable justifications — advancing Zero Trust security and GDPR compliance.`
  },

  // ── Feature Cards ─────────────────────────────────────────
  features: [
    {
      icon: "shield-alert",
      title: "Anomaly Detection",
      description: "Unsupervised ML detects insider threats and zero-day attacks in real time without requiring labeled attack data."
    },
    {
      icon: "cpu",
      title: "Role Recommendation",
      description: "Behavioral clustering suggests least-privilege roles based on actual user access patterns and peer-group similarity."
    },
    {
      icon: "lock-keyhole",
      title: "Access Classifier",
      description: "ML models predict allow/deny decisions dynamically with risk-calibrated confidence scores."
    },
    {
      icon: "brain-circuit",
      title: "Explainability Engine",
      description: "Post-Hoc XAI Techniques & a constrained local LLM generate forensic-quality, hallucination-free decision summaries."
    }
  ],

  // ── Team Members ──────────────────────────────────────────
  team: [
    {
      name: "Karunarathne W.M.G.K.G.D.W.",
      displayName: "Dinusha Karunarathne",
      studentId: "IT22352262",
      email: "it22352262@my.sliit.lk",
      linkedin: "https://www.linkedin.com/in/dinusha-in/",
      photo: "Asserts/KARUNARATHNE.png",
      degree: "BSc (Hons) in IT — Cyber Security",
      component: "Anomaly Detection",
      componentDesc: "Insider Threat Detection using Unsupervised ML",
      role: "ML Engineer",
      highlights: [
        "Developed unsupervised anomaly detection pipeline",
        "Implemented Isolation Forest & Autoencoder models",
        "Real-time behavioral pattern analysis",
        "Zero-day threat detection without labeled data"
      ]
    },
    {
      name: "Sandakalum A.R.G.S.S.",
      displayName: "Saranga Sandakalum",
      studentId: "IT22620248",
      email: "it22620248@my.sliit.lk",
      linkedin: "https://www.linkedin.com/in/saranga-sandakalum-670933317/",
      photo: "Asserts/SANDAKALUM.png",
      degree: "BSc (Hons) in IT — Cyber Security",
      component: "Role Recommendation",
      componentDesc: "Behavioral Clustering for Least-Privilege Roles",
      role: "Data Scientist",
      highlights: [
        "Behavioral clustering and role mining engine",
        "Peer-group similarity analysis algorithms",
        "Least-privilege role suggestion system",
        "User access pattern profiling"
      ]
    },
    {
      name: "Rathnayake R.M.A.S.",
      displayName: "Achira Rathnayake",
      studentId: "IT22609762",
      email: "it22609762@my.sliit.lk",
      linkedin: "https://www.linkedin.com/in/achira-shashintha-7807841a5/",
      photo: "Asserts/RATHNAYAKE.png",
      degree: "BSc (Hons) in IT — Cyber Security",
      component: "Access Classifier",
      componentDesc: "ML-Based Dynamic Access Decisions",
      role: "ML Engineer",
      highlights: [
        "Dynamic access decision prediction models",
        "Risk-calibrated confidence scoring",
        "Real-time allow/deny classification",
        "Context-aware policy enforcement"
      ]
    },
    {
      name: "Bandara T.M.A.L.",
      displayName: "Anuradha Bandara",
      studentId: "IT22597274",
      email: "it22597274@my.sliit.lk",
      linkedin: "https://www.linkedin.com/in/anuradha-in/",
      photo: "Asserts/BANDARA.png",
      degree: "BSc (Hons) in IT — Cyber Security",
      component: "Explainability Engine",
      componentDesc: "Post-Hoc XAI Techniques & LLM-based Audit Explanations",
      role: "AI/XAI Specialist",
      highlights: [
        "Post-Hoc XAI Techniques integration for model interpretability",
        "Constrained local LLM for natural language summaries",
        "Hallucination-free forensic-quality explanations",
        "Audit-ready justification generation pipeline"
      ]
    }
  ],

  // ── Supervisors ───────────────────────────────────────────
  supervisors: [
    {
      name: "Mr. Amila Senarathne",
      role: "Supervisor",
      email: "amila.n@sliit.lk",
      title: "Head | Industry Engagement Unit / Senior Lecturer",
      department: "Faculty of Computing | Computer Systems Engineering",
      institution: "SLIIT — Sri Lanka Institute of Information Technology",
      photo: "Asserts/Amila.jpg"
    },
    {
      name: "Mr. Indunil Daluwatte",
      role: "Co-Supervisor",
      email: "indunil.d@sliit.lk",
      title: "Lecturer",
      department: "Faculty of Computing | Computer Systems Engineering",
      institution: "SLIIT — Sri Lanka Institute of Information Technology",
      photo: "Asserts/Indunil.jpg"
    }
  ],

  // ── Research Domain Tabs ──────────────────────────────────
  researchDomain: {
    architecture: {
      title: "Architecture Design",
      content: `The SAAS-Guard system architecture integrates four AI-driven modules into a unified, modular pipeline for adaptive access control in SaaS environments. The architecture follows a microservice-oriented design with:
      
      <ul class="research-list">
        <li><strong>Data Ingestion Layer:</strong> Collects user behavioral logs, access requests, and contextual metadata from SaaS applications.</li>
        <li><strong>Anomaly Detection Module:</strong> Processes behavioral streams through unsupervised ML models (Isolation Forest, Autoencoders) for real-time insider threat detection.</li>
        <li><strong>Role Recommendation Engine:</strong> Applies behavioral clustering (DBSCAN, K-Means) to suggest least-privilege role assignments.</li>
        <li><strong>Access Classifier:</strong> Uses ensemble ML models (XGBoost, Random Forest) for dynamic allow/deny decisions with confidence scoring.</li>
        <li><strong>Explainability Layer:</strong> Integrates Post-Hoc XAI Techniques and a constrained local LLM to generate human-readable, audit-ready decision justifications.</li>
        <li><strong>Policy Enforcement Gateway:</strong> Enforces decisions in real-time with Zero Trust architecture principles.</li>
      </ul>`,
      image: "Asserts/Picture1.png"
    },
    literatureSurvey: {
      title: "Literature Survey",
      content: `The literature highlights critical challenges in SaaS access control, including the limitations of static RBAC/ABAC models in dynamic cloud environments. Key findings include:
      
      <ul class="research-list">
        <li>Traditional access control models fail to adapt to evolving user behavior and contextual changes in multi-tenant SaaS platforms.</li>
        <li>Existing insider threat detection systems rely heavily on labeled datasets, limiting their effectiveness against novel attack vectors.</li>
        <li>Role mining approaches often produce over-privileged assignments due to insufficient behavioral analysis.</li>
        <li>Current ML-based access decision systems lack transparency, making audit compliance difficult.</li>
        <li>Explainable AI (XAI) research has not been adequately applied to access control decision pipelines.</li>
        <li>Few systems integrate anomaly detection, role recommendation, access classification, and explainability into a unified framework.</li>
      </ul>`
    },
    researchGap: {
      title: "Research Gap",
      content: `The core research challenge lies in integrating unsupervised anomaly detection, behavioral role recommendation, ML-based access decisioning, and explainable AI into a unified, modular architecture. Unlike conventional access control, existing frameworks fail to combine these capabilities into a single, adaptive, and interpretable system. There is a significant absence of systems that simultaneously address dynamic insider threats, least-privilege enforcement, real-time access classification, and audit-ready explainability within one pipeline.`
    },
    researchProblem: {
      title: "Research Problem",
      content: `How can a cybersecurity system provide mathematically sound, model-specific, and empirically validated explanations for each component of a multi-stage AI pipeline — while synthesizing diverse explanations into concise, actionable natural language summaries that prevent generative AI hallucination?`
    },
    objectives: {
      title: "Research Objectives",
      items: [
        "Develop an unsupervised anomaly detection system that identifies insider threats and zero-day attacks in real time without labeled training data.",
        "Design a behavioral clustering-based role recommendation engine that enforces least-privilege access based on actual user activity patterns.",
        "Build an ML-based access classifier that dynamically predicts allow/deny decisions with risk-calibrated confidence scores.",
        "Create an explainability engine using Post-Hoc XAI Techniques and a constrained local LLM that generates forensic-quality, hallucination-free decision summaries.",
        "Integrate all four components into a unified, modular framework that advances Zero Trust security and GDPR compliance for SaaS platforms."
      ]
    },
    methodology: {
      title: "Methodology",
      content: `This study employs a mixed-methods design science research approach:
      
      <ul class="research-list">
        <li><strong>Anomaly Detection:</strong> Unsupervised learning using Isolation Forest and Autoencoder neural networks trained on user behavioral logs for real-time insider threat detection.</li>
        <li><strong>Role Recommendation:</strong> Behavioral clustering using DBSCAN and K-Means algorithms with peer-group similarity analysis for dynamic least-privilege role suggestions.</li>
        <li><strong>Access Classification:</strong> Ensemble ML models (XGBoost, Random Forest, Gradient Boosting) trained on contextual access request features for dynamic allow/deny prediction.</li>
        <li><strong>Explainability:</strong> Post-hoc interpretability analysis using Post-Hoc XAI Techniques, combined with a constrained local LLM (fine-tuned with guardrails) for generating natural language decision summaries.</li>
        <li><strong>Validation:</strong> Performance evaluation through accuracy, precision, recall, F1-score metrics, along with security testing and user studies for explainability quality.</li>
      </ul>`
    },
    technologies: {
      title: "Technologies Used",
      items: [
        { name: "Python", category: "Language" },
        { name: "TensorFlow", category: "ML Framework" },
        { name: "PyTorch", category: "ML Framework" },
        { name: "Scikit-learn", category: "ML Library" },
        { name: "XGBoost", category: "ML Model" },
        { name: "Post-Hoc XAI", category: "Explainability" },
        { name: "Flask / FastAPI", category: "Backend" },
        { name: "React", category: "Frontend" },
        { name: "Docker", category: "DevOps" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Redis", category: "Cache" },
        { name: "Kafka", category: "Streaming" },
        { name: "AWS / Azure", category: "Cloud" },
        { name: "Hugging Face", category: "LLM" },
        { name: "Jupyter", category: "Research" }
      ]
    }
  },

  // ── Milestones ────────────────────────────────────────────
  milestones: [
    { date: "Mar 2025", activity: "Brainstorming Workshop", description: "Initial brainstorming and ideation workshop to define the research direction.", status: "completed" },
    { date: "May 2025", activity: "Group Registration", description: "Official group registration and team formation for the research project.", status: "completed" },
    { date: "Jun 2025", activity: "Topic Assessment Form", description: "Submitted Topic Assessment Form (TAF) with detailed research plan.", status: "completed" },
    { date: "Jul 2025", activity: "Project Charter", description: "Documented project scope, objectives, deliverables, and key stakeholders.", status: "completed" },
    { date: "Aug 2025", activity: "Proposal Reports (Draft)", description: "Submitted draft proposal reports with initial literature review and methodology.", status: "completed" },
    { date: "Sep 2025", activity: "Proposal Presentation", description: "Presented research proposal with system architecture and methodology.", status: "completed" },
    { date: "Sep 2025", activity: "Proposal Reports (Final)", description: "Submitted finalized proposal reports incorporating feedback from presentation.", status: "completed" },
    { date: "Jan 2026", activity: "Progress Presentation – I", description: "Demonstrated 50% project completion with initial ML model implementations.", status: "completed" },
    { date: "Jan 2026", activity: "Check List I", description: "First milestone verification and requirements checklist submission.", status: "completed" },
    { date: "Mar 2026", activity: "Progress Presentation – II", description: "Presented 90% completion with integrated pipeline demonstration.", status: "completed" },
    { date: "Apr 2026", activity: "Final Report Submission", description: "Complete documentation of research methodology, results, and analysis.", status: "completed" },
    { date: "Apr 2026", activity: "Project Website", description: "Launched the official SAAS-Guard research portfolio website.", status: "completed" },
    { date: "May 2026", activity: "Final Presentation & VIVA", description: "Final defense and demonstration of the complete SAAS-Guard system.", status: "upcoming" },
    { date: "May 2026", activity: "Final Check List", description: "Final milestone verification and requirements checklist submission.", status: "upcoming" },
    { date: "May 2026", activity: "Logbook Submission", description: "Submission of individual and group research logbooks.", status: "upcoming" },
    { date: "May 2026", activity: "Research Paper Submission", description: "Submission of the final research paper to conference/journal.", status: "upcoming" },
    { date: "May 2026", activity: "Paper Evidence", description: "Submission of paper acceptance and publication evidence.", status: "upcoming" }
  ],

  // ── Documents ─────────────────────────────────────────────
  documents: [
    {
      title: "Project Charter",
      description: "Defines the project scope, objectives, deliverables, and key stakeholders.",
      driveUrl: "https://drive.google.com/drive/folders/1HzfW_ClseENax1c7b9ArHDnVxptsjo1K?usp=sharing",
      type: "pdf"
    },
    {
      title: "Topic Assessment Form",
      description: "TAF documenting the research topic assessment by all 4 team members.",
      driveUrl: "https://drive.google.com/drive/folders/1Ds-cWcYnbQU5pAS1HlF-pC_eY8myV5H5?usp=sharing",
      type: "pdf"
    },
    {
      title: "Proposal Report",
      description: "Comprehensive individual research proposal reports with literature review.",
      driveUrl: "https://drive.google.com/drive/folders/1DX39B-1_UNRR94ek8ykNqAaYTXya4BeK?usp=sharing",
      type: "pdf"
    },
    {
      title: "Checklists",
      description: "Project milestones and requirements verification documents.",
      driveUrl: "https://drive.google.com/drive/folders/1-ZSmjI285jP0amrvpB2pnZgRjv4Sdyla?usp=sharing",
      type: "pdf"
    },
    {
      title: "Research Paper",
      description: "Academic paper with methodology, experiments, and findings.",
      driveUrl: "https://drive.google.com/drive/folders/1haE7LX4F47TaFtqXV0cNGInAxISrdEAv?usp=sharing",
      type: "pdf"
    },
    {
      title: "Final Thesis",
      description: "Complete documentation of research methodology, results, and analysis.",
      driveUrl: "https://drive.google.com/drive/folders/1G9QsLPAZ8-gxYFeTboHEz2uWxFE2kkD1?usp=sharing",
      type: "pdf"
    },
    {
      title: "Component Reports",
      description: "Individual technical reports on each research component and contribution.",
      driveUrl: "https://drive.google.com/drive/folders/1PJFvQDBs9T1Mx0VHJRkunqvBDh9owBu_?usp=sharing",
      type: "pdf"
    }
  ],

  // ── Presentations ─────────────────────────────────────────
  presentations: [
    {
      title: "Proposal Presentation",
      date: "June 2025",
      description: "Initial research proposal and project outline presentation covering scope, objectives, and system architecture.",
      viewUrl: "https://docs.google.com/presentation/d/1oWdLJHSoZfrWwe9Sh03Z9nirac6L8KBs/edit?usp=sharing&ouid=110262286513473603501&rtpof=true&sd=true",
      downloadUrl: "https://docs.google.com/presentation/d/1oWdLJHSoZfrWwe9Sh03Z9nirac6L8KBs/edit?usp=sharing&ouid=110262286513473603501&rtpof=true&sd=true"
    },
    {
      title: "Progress Presentation 1",
      date: "September 2025",
      description: "50% project completion — initial ML model implementations and preliminary experimental results.",
      viewUrl: "https://docs.google.com/presentation/d/13c27zeYS29BFRnSxp8Ff2HTsMfnfjaRU/edit?usp=sharing&ouid=110262286513473603501&rtpof=true&sd=true",
      downloadUrl: "https://docs.google.com/presentation/d/13c27zeYS29BFRnSxp8Ff2HTsMfnfjaRU/edit?usp=sharing&ouid=110262286513473603501&rtpof=true&sd=true"
    },
    {
      title: "Progress Presentation 2",
      date: "February 2026",
      description: "90% project completion — integrated pipeline demonstration and updated experimental results.",
      viewUrl: "https://docs.google.com/presentation/d/13BHroLp4W2XIqLrwsrCS0R3XJdS--1C_/edit?usp=sharing&ouid=110262286513473603501&rtpof=true&sd=true",
      downloadUrl: "https://docs.google.com/presentation/d/13BHroLp4W2XIqLrwsrCS0R3XJdS--1C_/edit?usp=sharing&ouid=110262286513473603501&rtpof=true&sd=true"
    },
    {
      title: "Final Presentation",
      date: "May 2026",
      description: "Final defense — complete SAAS-Guard system demonstration with comprehensive results analysis.",
      viewUrl: "https://drive.google.com/drive/folders/1EHdU5vl1yKMYfG7-JguK1FPUBCXyBCl9?usp=sharing",
      downloadUrl: "https://drive.google.com/drive/folders/1EHdU5vl1yKMYfG7-JguK1FPUBCXyBCl9?usp=sharing"
    }
  ],

  // ── Contact Info ──────────────────────────────────────────
  contact: {
    email: "cybersecfyrpsliit@gmail.com",
    address: "Faculty of Computing, SLIIT — Sri Lanka Institute of Information Technology, Malabe Campus, New Kandy Rd, Malabe 10115, Sri Lanka"
  }
};
