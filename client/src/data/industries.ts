import type { IndustryConfig } from '@hireclaw/shared'

export const industries: IndustryConfig[] = [
  {
    slug: 'law-firms',
    name: 'Law Firms',
    headline: 'Client data never leaves your building',
    description: 'AI employees purpose-built for legal practices with attorney-client privilege compliance.',
    painPoints: [
      'Paralegals spending 6+ hours daily on document administration',
      'Fragmented client communication across multiple channels',
      'Contract review delays impacting deal timelines',
      'Billable hour tracking inaccuracies causing revenue loss',
    ],
    roles: [
      { title: 'AI Legal Research Analyst', description: 'Conducts case law analysis, synthesizes research into case briefs and memoranda.', icon: '\u2696\uFE0F' },
      { title: 'AI Client Intake Coordinator', description: 'Manages initial client screening, intake forms, conflict checks, and matter routing.', icon: '\uD83D\uDCCB' },
      { title: 'AI Legal Billing Specialist', description: 'Tracks billable hours, generates invoices, reconciles trust accounts, ensures IOLTA compliance.', icon: '\uD83D\uDCB0' },
      { title: 'AI Case Manager', description: 'Monitors deadlines, court filing schedules, statute of limitations, and case status updates.', icon: '\uD83D\uDCC1' },
    ],
    roi: { currentCost: 218400, withHireClaw: 27300, savings: 191100, employeeCount: 4, dailyAdminHours: 24, hourlyRate: 35 },
    complianceNotes: ['Container isolation architecture', 'AES-256-GCM encryption', 'Immutable audit logs', 'SOC 2 readiness', 'No third-party data training'],
  },
  {
    slug: 'private-equity',
    name: 'Private Equity',
    headline: 'Due diligence and deal flow at machine speed',
    description: 'Automate deal sourcing, financial analysis, and portfolio monitoring so your team can focus on strategy.',
    painPoints: [
      'Analysts spending 70% of time on data collection',
      'Managing numerous inbound deal opportunities',
      'Quarterly portfolio reporting consuming full weeks',
      'Competitive intelligence arriving too late for decisions',
    ],
    roles: [
      { title: 'AI Deal Analyst', description: 'Screens CIMs, builds financial models, runs comparables, generates investment memos.', icon: '\uD83D\uDCCA' },
      { title: 'AI Deal Sourcing Agent', description: 'Monitors databases, qualifies opportunities, manages broker relationships.', icon: '\uD83D\uDD0D' },
      { title: 'AI Portfolio Financial Analyst', description: 'Aggregates financials, tracks KPIs, generates LP reports.', icon: '\uD83D\uDCC8' },
      { title: 'AI Investor Relations Writer', description: 'Drafts LP letters, fund reporting, and pitch content.', icon: '\u270D\uFE0F' },
    ],
    roi: { currentCost: 235950, withHireClaw: 42900, savings: 193050, employeeCount: 3, dailyAdminHours: 16.5, hourlyRate: 55 },
    complianceNotes: ['MNPI protection', 'Container isolation', 'Immutable audit trails', 'SOC 2 readiness'],
  },
  {
    slug: 'accounting',
    name: 'Accounting',
    headline: 'Tax season is 365 days a year. Your AI never takes time off',
    description: 'Automate bookkeeping, tax research, and client management so your firm can scale advisory services.',
    painPoints: [
      'Tax season burnout and staffing shortages',
      'Slow client document collection processes',
      'Growing bookkeeping backlogs during peak periods',
      'Missed advisory revenue opportunities',
    ],
    roles: [
      { title: 'AI Staff Accountant', description: 'Handles bookkeeping, bank reconciliations, expense categorization, and month-end procedures.', icon: '\uD83D\uDCD2' },
      { title: 'AI Tax Research Analyst', description: 'Researches tax code changes and identifies deduction opportunities.', icon: '\uD83D\uDD2C' },
      { title: 'AI Client Services Coordinator', description: 'Manages document collection and client communications.', icon: '\uD83D\uDCDE' },
      { title: 'AI Engagement Manager', description: 'Tracks deadlines, staff assignments, and budget monitoring.', icon: '\uD83D\uDCCB' },
    ],
    roi: { currentCost: 156000, withHireClaw: 29250, savings: 126750, employeeCount: 5, dailyAdminHours: 20, hourlyRate: 30 },
    complianceNotes: ['SOC 2 ready architecture', 'AES-256 encryption', 'Audit trail logging', 'Data isolation'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    headline: 'HIPAA-compliant AI that never compromises patient care',
    description: 'Automate scheduling, billing, and documentation while maintaining the highest compliance standards.',
    painPoints: [
      'Clinical staff spending excessive time on documentation',
      'High no-show rates and scheduling inefficiencies',
      'Insurance verification delays causing revenue loss',
      'Revenue cycle management bottlenecks',
    ],
    roles: [
      { title: 'AI Patient Coordinator', description: 'Handles scheduling, reminders, rescheduling, and patient intake.', icon: '\uD83C\uDFE5' },
      { title: 'AI Medical Billing Specialist', description: 'Manages claims, insurance verification, and prior authorizations.', icon: '\uD83D\uDC8A' },
      { title: 'AI Practice Operations Manager', description: 'Optimizes schedules, tracks KPIs, and manages vendor relationships.', icon: '\u2699\uFE0F' },
      { title: 'AI Clinical Documentation Assistant', description: 'Supports note templates, referral letters, and patient education materials.', icon: '\uD83D\uDCDD' },
    ],
    roi: { currentCost: 131040, withHireClaw: 21840, savings: 109200, employeeCount: 3, dailyAdminHours: 12, hourlyRate: 42 },
    complianceNotes: ['HIPAA-compliant architecture', 'BAA support', 'AES-256 encryption', 'Audit trail logging'],
  },
]
