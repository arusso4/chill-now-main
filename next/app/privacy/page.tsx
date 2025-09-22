import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, Users, Globe, Mail, FileText, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | chillNOW',
  description: 'Learn how chillNOW protects your privacy and handles your personal information in our comprehensive privacy policy.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 15, 2025';

  const tocSections = [
    { id: 'introduction', title: 'Introduction & Scope' },
    { id: 'information-collected', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Information' },
    { id: 'legal-bases', title: 'Legal Bases (GDPR)' },
    { id: 'sharing-disclosures', title: 'Sharing & Disclosures' },
    { id: 'cookies-tracking', title: 'Cookies & Tracking' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'state-disclosures', title: 'State-Specific Disclosures' },
    { id: 'children-privacy', title: 'Children\'s Privacy' },
    { id: 'security', title: 'Security' },
    { id: 'international-transfers', title: 'International Transfers' },
    { id: 'contact', title: 'Contact Us' },
    { id: 'changes', title: 'Changes to This Policy' },
    { id: 'market-age-gate', title: 'Market & Age-Gate Note' }
  ];

  return (
    <div className="min-h-screen bg-[#0b0f14]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-fuchsia-500 rounded-xl flex items-center justify-center mr-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-zinc-300 mb-4">
            Your privacy matters to us. Here's how we protect and handle your information.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-zinc-400">
            <div className="flex items-center space-x-1">
              <FileText className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Lock className="w-4 h-4" />
              <span>GDPR & CCPA Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Desktop Only */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-6">
                  <h3 className="text-lg font-bold text-zinc-200 mb-4 flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-emerald-400" />
                    Quick Navigation
                  </h3>
                  <nav className="space-y-2">
                    {tocSections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-zinc-400 hover:text-fuchsia-400 transition-colors py-1 border-l-2 border-transparent hover:border-fuchsia-400 pl-3"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Policy Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Introduction & Scope */}
              <div id="introduction" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-emerald-400" />
                  Introduction & Scope
                </h2>
                <div className="text-zinc-300 space-y-4">
                  <p>
                    This Privacy Policy describes how chillNOW ("we," "our," or "us") collects, uses, 
                    and protects your personal information when you use our cannabis delivery platform, 
                    website, mobile application, and related services (collectively, the "Service").
                  </p>
                  <p>
                    By using our Service, you agree to the collection and use of information in 
                    accordance with this policy. We are committed to protecting your privacy and 
                    ensuring the security of your personal information.
                  </p>
                  <p>
                    This policy applies to all users of our Service, including customers, drivers, 
                    and business partners, and covers all information collected through our platform, 
                    website, mobile app, and any other interactions with chillNOW.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <div id="information-collected" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-fuchsia-400" />
                  Information We Collect
                </h2>
                <div className="text-zinc-300 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Account Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li>Name, email address, phone number, and date of birth</li>
                      <li>Government-issued ID for age verification (21+ in most states)</li>
                      <li>Delivery address and preferences</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                      <li>Account preferences and settings</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Purchase & Delivery Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li>Order history, product preferences, and purchase patterns</li>
                      <li>Delivery location, timing, and special instructions</li>
                      <li>Driver assignment and delivery confirmation</li>
                      <li>Customer service interactions and feedback</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Device & Usage Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li>IP address, browser type, and device information</li>
                      <li>App usage patterns, features used, and session duration</li>
                      <li>Location data (with your consent) for delivery services</li>
                      <li>Crash reports and performance analytics</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Cookies & Analytics</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li>Essential cookies for platform functionality</li>
                      <li>Analytics cookies to improve user experience</li>
                      <li>Marketing cookies (with your consent) for personalized content</li>
                      <li>Third-party tracking pixels for advertising and analytics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div id="how-we-use" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-teal-400" />
                  How We Use Information
                </h2>
                <div className="text-zinc-300 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Service Delivery</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li>Process orders and facilitate cannabis delivery</li>
                      <li>Verify age and identity for legal compliance</li>
                      <li>Match customers with qualified drivers</li>
                      <li>Provide customer support and resolve issues</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Safety & Compliance</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li>Ensure compliance with local cannabis regulations</li>
                      <li>Monitor for fraudulent activity and abuse</li>
                      <li>Conduct background checks on drivers</li>
                      <li>Maintain records as required by law</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Support & Communication</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li>Respond to customer inquiries and support requests</li>
                      <li>Send order confirmations and delivery updates</li>
                      <li>Provide important service notifications</li>
                      <li>Conduct satisfaction surveys and feedback collection</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Marketing & Personalization</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li>Send promotional offers and product recommendations (with consent)</li>
                      <li>Personalize content and user experience</li>
                      <li>Analyze usage patterns to improve our service</li>
                      <li>Conduct market research and analytics</li>
                    </ul>
                    <p className="text-sm text-zinc-500 mt-2">
                      You can opt out of marketing communications at any time by clicking the unsubscribe 
                      link in our emails or contacting us at <a href="mailto:info@chillnow.com" className="text-fuchsia-400 underline">info@chillnow.com</a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Bases (GDPR) */}
              <div id="legal-bases" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-emerald-400" />
                  Legal Bases (GDPR)
                </h2>
                <div className="text-zinc-300 space-y-4">
                  <p>
                    For users in the European Union, we process your personal data under the following legal bases:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h3 className="font-semibold text-zinc-200 mb-2">Contract Performance</h3>
                      <p className="text-sm text-zinc-400">Processing necessary to fulfill our delivery service contract with you.</p>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h3 className="font-semibold text-zinc-200 mb-2">Consent</h3>
                      <p className="text-sm text-zinc-400">Marketing communications and non-essential cookies (withdrawable at any time).</p>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h3 className="font-semibold text-zinc-200 mb-2">Legitimate Interests</h3>
                      <p className="text-sm text-zinc-400">Service improvement, fraud prevention, and analytics.</p>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h3 className="font-semibold text-zinc-200 mb-2">Legal Obligation</h3>
                      <p className="text-sm text-zinc-400">Compliance with cannabis regulations and tax requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sharing & Disclosures */}
              <div id="sharing-disclosures" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-fuchsia-400" />
                  Sharing & Disclosures
                </h2>
                <div className="text-zinc-300 space-y-4">
                  <p>We may share your information in the following circumstances:</p>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Service Providers</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li>Payment processors for secure transaction handling</li>
                      <li>Delivery drivers and logistics partners</li>
                      <li>Customer support and communication platforms</li>
                      <li>Analytics and marketing service providers</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Legal Compliance</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li>When required by law or legal process</li>
                      <li>To comply with cannabis regulations and licensing requirements</li>
                      <li>To protect our rights, property, or safety</li>
                      <li>To prevent fraud or illegal activity</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">Business Transfers</h3>
                    <p className="text-zinc-400">
                      In the event of a merger, acquisition, or sale of assets, your information 
                      may be transferred as part of the business transaction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies & Tracking */}
              <div id="cookies-tracking" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-teal-400" />
                  Cookies & Tracking
                </h2>
                <div className="text-zinc-300 space-y-4">
                  <p>
                    We use cookies and similar technologies to enhance your experience and analyze 
                    how our Service is used.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h3 className="font-semibold text-zinc-200 mb-2">Essential Cookies</h3>
                      <p className="text-sm text-zinc-400">Required for basic platform functionality and security.</p>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h3 className="font-semibold text-zinc-200 mb-2">Analytics Cookies</h3>
                      <p className="text-sm text-zinc-400">Help us understand usage patterns and improve our service.</p>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h3 className="font-semibold text-zinc-200 mb-2">Marketing Cookies</h3>
                      <p className="text-sm text-zinc-400">Enable personalized content and advertising (with consent).</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-500">
                    You can manage cookie preferences through your browser settings or our cookie 
                    consent banner. Note that disabling certain cookies may affect service functionality.
                  </p>
                </div>
              </div>

              {/* Data Retention */}
              <div id="data-retention" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-emerald-400" />
                  Data Retention
                </h2>
                <div className="text-zinc-300 space-y-4">
                  <p>
                    We retain your personal information for as long as necessary to provide our 
                    services and comply with legal obligations.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-zinc-700">
                      <span className="text-zinc-200">Account Information</span>
                      <span className="text-zinc-400">Until account deletion + 7 years</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-700">
                      <span className="text-zinc-200">Order History</span>
                      <span className="text-zinc-400">7 years (tax compliance)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-700">
                      <span className="text-zinc-200">Marketing Data</span>
                      <span className="text-zinc-400">Until consent withdrawal</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-700">
                      <span className="text-zinc-200">Analytics Data</span>
                      <span className="text-zinc-400">2 years (anonymized)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div id="your-rights" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-fuchsia-400" />
                  Your Rights
                </h2>
                <div className="text-zinc-300 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">GDPR Rights (EU Users)</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li><strong>Access:</strong> Request a copy of your personal data</li>
                      <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                      <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                      <li><strong>Portability:</strong> Receive your data in a structured format</li>
                      <li><strong>Restriction:</strong> Limit how we process your data</li>
                      <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">CCPA/CPRA Rights (California Users)</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li><strong>Right to Know:</strong> What personal information we collect and how we use it</li>
                      <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                      <li><strong>Right to Correct:</strong> Request correction of inaccurate information</li>
                      <li><strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of personal information</li>
                      <li><strong>Right to Limit:</strong> Limit use of sensitive personal information</li>
                      <li><strong>Non-Discrimination:</strong> We won't discriminate for exercising your rights</li>
                    </ul>
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-4">
                    <p className="text-sm text-zinc-300">
                      To exercise any of these rights, please contact us at{' '}
                      <a href="mailto:info@chillnow.com" className="text-fuchsia-400 underline">info@chillnow.com</a>.
                      We will respond to your request within 30 days.
                    </p>
                  </div>
                </div>
              </div>

              {/* State-Specific Disclosures */}
              <div id="state-disclosures" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-teal-400" />
                  State-Specific Disclosures
                </h2>
                <div className="text-zinc-300 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">California Privacy Rights Act (CPRA)</h3>
                    <p className="text-zinc-400 mb-3">
                      California residents have additional privacy rights under the CPRA. We collect 
                      the following categories of personal information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                      <li>Identifiers (name, email, phone number)</li>
                      <li>Commercial information (purchase history, preferences)</li>
                      <li>Internet activity (browsing behavior, app usage)</li>
                      <li>Geolocation data (with consent)</li>
                      <li>Sensory data (customer service recordings)</li>
                    </ul>
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-4">
                    <p className="text-sm text-zinc-300">
                      We do not sell personal information to third parties. We may share information 
                      with service providers for business purposes. California residents can opt out 
                      of the sharing of personal information for targeted advertising.
                    </p>
                  </div>
                </div>
              </div>

              {/* Children's Privacy */}
              <div id="children-privacy" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-yellow-400" />
                  Children's Privacy
                </h2>
                <div className="text-zinc-300 space-y-4">
                  <p>
                    Our Service is not intended for individuals under the age of 21 (or 18 in some 
                    jurisdictions). We do not knowingly collect personal information from minors.
                  </p>
                  <p>
                    If you are under 13 years old, please do not use our Service or provide any 
                    personal information to us. If we learn that we have collected personal 
                    information from a child under 13, we will delete that information immediately.
                  </p>
                  <p>
                    If you are a parent or guardian and believe your child has provided personal 
                    information to us, please contact us at{' '}
                    <a href="mailto:info@chillnow.com" className="text-fuchsia-400 underline">info@chillnow.com</a>.
                  </p>
                </div>
              </div>

              {/* Security */}
              <div id="security" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-emerald-400" />
                  Security
                </h2>
                <div className="text-zinc-300 space-y-4">
                  <p>
                    We implement appropriate technical and organizational measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h3 className="font-semibold text-zinc-200 mb-2">Technical Safeguards</h3>
                      <ul className="text-sm text-zinc-400 space-y-1">
                        <li>• End-to-end encryption for sensitive data</li>
                        <li>• Secure socket layer (SSL) technology</li>
                        <li>• Regular security audits and updates</li>
                        <li>• Multi-factor authentication</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h3 className="font-semibold text-zinc-200 mb-2">Administrative Safeguards</h3>
                      <ul className="text-sm text-zinc-400 space-y-1">
                        <li>• Employee training on data protection</li>
                        <li>• Access controls and role-based permissions</li>
                        <li>• Incident response procedures</li>
                        <li>• Regular compliance assessments</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-500">
                    While we strive to protect your information, no method of transmission over the 
                    internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              {/* International Transfers */}
              <div id="international-transfers" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-fuchsia-400" />
                  International Transfers
                </h2>
                <div className="text-zinc-300 space-y-4">
                  <p>
                    Your information may be transferred to and processed in countries other than 
                    your country of residence. We ensure appropriate safeguards are in place for 
                    such transfers.
                  </p>
                  <p>
                    For transfers from the EU to the US, we rely on Standard Contractual Clauses 
                    and other appropriate safeguards as required by GDPR.
                  </p>
                </div>
              </div>

              {/* Contact Us */}
              <div id="contact" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-emerald-400" />
                  Contact Us
                </h2>
                <div className="text-zinc-300 space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact us:
                  </p>
                  
                  <div className="bg-zinc-800/50 rounded-lg p-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-fuchsia-400" />
                        <div>
                          <p className="text-zinc-200 font-semibold">Email</p>
                          <a href="mailto:info@chillnow.com" className="text-fuchsia-400 underline">
                            info@chillnow.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-emerald-400" />
                        <div>
                          <p className="text-zinc-200 font-semibold">Privacy Officer</p>
                          <p className="text-zinc-400">Data Protection & Privacy Team</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-500">
                    We will respond to your inquiry within 30 days of receipt.
                  </p>
                </div>
              </div>

              {/* Changes to This Policy */}
              <div id="changes" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-teal-400" />
                  Changes to This Policy
                </h2>
                <div className="text-zinc-300 space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our 
                    practices or applicable laws. We will notify you of any material changes by:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending an email notification to registered users</li>
                    <li>Displaying a prominent notice in our app</li>
                    <li>Updating the "Last updated" date at the top of this policy</li>
                  </ul>

                  <p>
                    Your continued use of our Service after any changes constitutes acceptance of 
                    the updated Privacy Policy.
                  </p>

                  <div className="bg-zinc-800/50 rounded-lg p-4">
                    <p className="text-sm text-zinc-300">
                      <strong>Effective Date:</strong> {lastUpdated}<br />
                      <strong>Last Updated:</strong> {lastUpdated}
                    </p>
                  </div>
                </div>
              </div>

              {/* Market & Age-Gate Note */}
              <div id="market-age-gate" className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-200 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-yellow-400" />
                  Market & Age-Gate Note
                </h2>
                <div className="text-zinc-300 space-y-4">
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                    <p className="text-yellow-200 font-semibold mb-2">Important Cannabis Delivery Notice</p>
                    <p className="text-zinc-300 text-sm">
                      chillNOW operates in legal cannabis markets only. All deliveries require 
                      government-issued ID verification at handoff to ensure compliance with 
                      local age restrictions (typically 21+ years old).
                    </p>
                  </div>
                  
                  <p>
                    We collect and verify age information to comply with cannabis regulations 
                    and ensure responsible delivery practices. This information is:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>Required for legal compliance in all jurisdictions where we operate</li>
                    <li>Verified at the time of delivery by our trained drivers</li>
                    <li>Stored securely and used only for regulatory compliance</li>
                    <li>Not shared with third parties except as required by law</li>
                  </ul>

                  <p className="text-sm text-zinc-500">
                    By using our Service, you acknowledge that you meet the minimum age requirements 
                    in your jurisdiction and consent to age verification procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <div className="fixed bottom-8 right-8">
        <Link
          href="#introduction"
          className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
