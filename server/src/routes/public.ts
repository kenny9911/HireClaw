import { Router } from 'express'
import { PRICING_TIERS, AGENT_ROLE_DETAILS } from '@hireclaw/shared'
import { ApiError } from '../utils/apiError'

const router = Router()

const INDUSTRY_DATA: Record<string, {
  name: string
  headline: string
  description: string
  painPoints: string[]
  roles: string[]
  roi: { timeSaved: string, costReduction: string, efficiency: string }
  complianceNotes: string[]
}> = {
  'law-firms': {
    name: 'Law Firms',
    headline: 'AI employees built for legal workflows',
    description: 'Automate contract review, client intake, legal research, and case management with AI agents trained on legal best practices.',
    painPoints: [
      'Paralegals spend 60% of time on repetitive document review',
      'Client intake and follow-up falls through the cracks',
      'Billing and time tracking is manual and error-prone',
      'Research across case law databases is time-intensive',
    ],
    roles: [
      'Research Analyst for case law and precedent research',
      'Support Agent for client intake and status updates',
      'Bookkeeper for billing, invoicing, and trust accounting',
      'Content Writer for contract drafting and legal memos',
    ],
    roi: {
      timeSaved: '30+ hours per attorney per month',
      costReduction: '40% reduction in paralegal overtime',
      efficiency: '3x faster document review cycles',
    },
    complianceNotes: [
      'All data encrypted at rest and in transit (AES-256)',
      'SOC 2 Type II compliant infrastructure',
      'Attorney-client privilege safeguards built in',
      'Audit trail for every AI action and recommendation',
    ],
  },
  'private-equity': {
    name: 'Private Equity',
    headline: 'AI-powered deal flow and portfolio management',
    description: 'Accelerate due diligence, portfolio monitoring, and investor reporting with AI agents that understand financial modeling.',
    painPoints: [
      'Due diligence processes take weeks of analyst time',
      'Portfolio company reporting is inconsistent and delayed',
      'Deal sourcing relies on manual outreach and networking',
      'Financial modeling and scenario analysis is labor-intensive',
    ],
    roles: [
      'Research Analyst for due diligence and market analysis',
      'Sales Dev Rep for deal sourcing and LP outreach',
      'Bookkeeper for portfolio financial consolidation',
      'Project Manager for deal pipeline and milestone tracking',
    ],
    roi: {
      timeSaved: '50+ hours per deal in due diligence',
      costReduction: '35% reduction in external consultant spend',
      efficiency: '2x more deals evaluated per quarter',
    },
    complianceNotes: [
      'SEC-compliant data handling and retention policies',
      'Information barriers and deal-specific access controls',
      'Encrypted communications for sensitive deal data',
      'Full audit trail for regulatory examination readiness',
    ],
  },
  'accounting': {
    name: 'Accounting',
    headline: 'AI employees for modern accounting firms',
    description: 'Automate bookkeeping, tax preparation, client communication, and compliance workflows with purpose-built AI agents.',
    painPoints: [
      'Tax season creates unsustainable workload spikes',
      'Client document collection is a constant bottleneck',
      'Reconciliation and data entry consume senior staff time',
      'Keeping up with regulatory changes is overwhelming',
    ],
    roles: [
      'Bookkeeper for automated reconciliation and categorization',
      'Support Agent for client document requests and follow-up',
      'Research Analyst for tax code changes and compliance updates',
      'Content Writer for client advisories and newsletters',
    ],
    roi: {
      timeSaved: '25+ hours per accountant per month',
      costReduction: '50% reduction in data entry costs',
      efficiency: '4x faster month-end close process',
    },
    complianceNotes: [
      'AICPA standards-compliant data handling',
      'SOC 2 Type II certified infrastructure',
      'Segregation of duties enforced in AI workflows',
      'IRS e-file security requirements met',
    ],
  },
  'healthcare': {
    name: 'Healthcare',
    headline: 'HIPAA-ready AI employees for healthcare operations',
    description: 'Streamline patient communications, appointment scheduling, billing, and administrative workflows with compliant AI agents.',
    painPoints: [
      'Staff spend 30% of time on appointment scheduling and reminders',
      'Insurance verification and prior auth is manual and slow',
      'Patient follow-up and care coordination gaps affect outcomes',
      'Medical billing errors lead to revenue loss and delays',
    ],
    roles: [
      'Support Agent for patient scheduling and inquiries',
      'Bookkeeper for medical billing and claims processing',
      'Project Manager for care coordination and follow-up',
      'Content Writer for patient education and communications',
    ],
    roi: {
      timeSaved: '40+ hours per practice per month',
      costReduction: '45% reduction in billing errors',
      efficiency: '60% faster insurance verification',
    },
    complianceNotes: [
      'HIPAA-compliant data storage and transmission',
      'BAA (Business Associate Agreement) available',
      'PHI access controls and minimum necessary standards',
      'Complete audit logging for HIPAA compliance audits',
    ],
  },
}

router.get('/pricing', (_req, res) => {
  res.json({ success: true, data: PRICING_TIERS })
})

router.get('/roles', (_req, res) => {
  res.json({ success: true, data: AGENT_ROLE_DETAILS })
})

router.get('/industries/:slug', (req, res, next) => {
  try {
    const { slug } = req.params
    const industry = INDUSTRY_DATA[slug]

    if (!industry) {
      throw ApiError.notFound(`Industry '${slug}' not found`)
    }

    res.json({ success: true, data: industry })
  } catch (err) {
    next(err)
  }
})

export default router
