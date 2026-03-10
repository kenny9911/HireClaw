import { Link } from 'react-router-dom'

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', path: '/#features' },
      { label: 'AI Roles', path: '/#roles' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Hire an AI', path: '/hire' },
      { label: 'ROI Calculator', path: '/#roi' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Service Packages', path: '/services' },
      { label: 'Agency Program', path: '/agency' },
      { label: 'Law Firms', path: '/industries/law-firms' },
      { label: 'Private Equity', path: '/industries/private-equity' },
      { label: 'Accounting', path: '/industries/accounting' },
      { label: 'Healthcare', path: '/industries/healthcare' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Security', path: '/security' },
      { label: 'SOC 2', path: '/soc2' },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="bg-dark-600 border-t border-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold gradient-text">
          HireClaw
        </Link>

        {/* Columns */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-dark-200">
          <p className="text-sm text-gray-500">
            &copy; 2026 HireClaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
