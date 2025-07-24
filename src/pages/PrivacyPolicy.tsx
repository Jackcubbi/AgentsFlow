import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Bot,
  ArrowLeft,
  Calendar,
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle,
  Mail,
  Lock,
  Eye,
  Database,
  Globe,
  Settings,
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Alfaliike
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-purple-500/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-primary/20">
              <Shield className="w-3 h-3 mr-1" />
              Data Protection
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Privacy
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}
                Policy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn how Alfaliike Oy collects, uses, and protects your personal
              information when you use our Telegram-based business assistant services.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Last updated: July 23, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Version 1.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Privacy Commitment */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">
                      Introduction
                    </h3>
                    <p className="text-green-700 text-sm leading-relaxed">
                      Alfaliike Oy ("Alfaliike", "we", "us" or "our"), located at Lakaksenkuja 6, 49270 Pyhtää, Finland,
                      is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and
                      protect personal data when you use our services – including interacting with our Telegram-based business
                      assistants (bots), contacting us via email, or using our integrations with Google and other third-party services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 1: Data We Collect */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  1
                </div>
                Data We Collect
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  We only collect personal data that is necessary for the purposes described in this Policy,
                  and we do so with appropriate notice or consent. The types of information we may collect include:
                </p>

                <h4 className="font-semibold mt-6 mb-3 flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Information You Provide Directly
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  When you interact with our Telegram bots or other channels, you may provide personal data such as:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Name, contact information (email address or phone number)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Content of communications and messages you send
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Information voluntarily provided in dialogue to fulfill requests
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Account details and attachments you submit
                  </li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3 flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Account and Profile Information
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  If our services require registration or integration via Google account:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Name, username, email address
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Telegram ID or username (provided through Telegram platform)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Profile information needed for service provision
                  </li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Integrations Data
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  When you integrate with third-party platforms (Google services, HubSpot, Trello, etc.):
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Calendar event details (if integrated with Google Calendar)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Contact information and task details (for CRM/project tools)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Data necessary for system updates and automation
                  </li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3 flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Usage Data and Logs
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Device/browser type, access times, IP address
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Interaction logs (date/time of chatbot interactions)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Error logs and performance metrics
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    System monitoring data for maintenance and security
                  </li>
                </ul>
              </div>
            </div>

            <Separator />

            {/* Section 2: Purpose and Legal Basis for Processing */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  2
                </div>
                Purpose and Legal Basis for Processing
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  We use the collected personal data for specific purposes and only where we have a legal basis under GDPR to do so:
                </p>

                <h4 className="font-semibold mt-6 mb-3">Providing and Improving Services</h4>
                <p className="text-sm text-muted-foreground mb-2">Legal basis: Performance of contract, legitimate interests</p>
                <ul className="space-y-1">
                  <li>Operate Telegram bots and related services</li>
                  <li>Respond to inquiries and carry out requested tasks</li>
                  <li>Generate appropriate responses and perform automated actions</li>
                  <li>Analyze usage patterns to enhance our services</li>
                  <li>Create support tickets or update records per your request</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Communications and Support</h4>
                <p className="text-sm text-muted-foreground mb-2">Legal basis: Legitimate interest, performance of contract</p>
                <ul className="space-y-1">
                  <li>Respond to customer support requests</li>
                  <li>Send service-related notifications and updates</li>
                  <li>Notify about changes to services or policies</li>
                  <li>Provide customer satisfaction and address user needs</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Integrations and Automated Actions</h4>
                <p className="text-sm text-muted-foreground mb-2">Legal basis: Performance of contract</p>
                <ul className="space-y-1">
                  <li>Transfer data to/from third-party systems as requested</li>
                  <li>Create contacts in CRM or cards in project management tools</li>
                  <li>Process data through authorized integrations</li>
                  <li>Fulfill functionality requested by you or our clients</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Compliance and Legal Obligations</h4>
                <p className="text-sm text-muted-foreground mb-2">Legal basis: Legal obligation, legitimate interest</p>
                <ul className="space-y-1">
                  <li>Comply with legal obligations and reporting requirements</li>
                  <li>Respond to law enforcement requests</li>
                  <li>Keep records for accounting purposes</li>
                  <li>Exercise or defend legal claims</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Security and Fraud Prevention</h4>
                <p className="text-sm text-muted-foreground mb-2">Legal basis: Legitimate interest</p>
                <ul className="space-y-1">
                  <li>Monitor and ensure security of our services</li>
                  <li>Prevent abuse, fraud, or unauthorized access</li>
                  <li>Detect and address technical issues</li>
                  <li>Analyze logs to detect suspicious activity</li>
                </ul>
              </div>
            </div>

            <Separator />

            {/* Section 3: Data Sharing and Third-Party Integrations */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  3
                </div>
                Data Sharing and Third-Party Integrations
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  We treat your personal data with care and do not sell or rent your information to third parties
                  for their own marketing purposes. However, we may share personal data in the following circumstances:
                </p>

                <h4 className="font-semibold mt-6 mb-3">Service Providers and Partners</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  We use trusted third-party service providers to help us run our business:
                </p>
                <ul className="space-y-1">
                  <li><strong>Cloud Infrastructure:</strong> MongoDB Atlas and Hetzner Online servers for secure hosting</li>
                  <li><strong>Automation Tools:</strong> n8n workflow automation platform for system connections</li>
                  <li><strong>Third-Party APIs:</strong> HubSpot (CRM), Trello (project management), Google services</li>
                  <li><strong>Analytics and Monitoring:</strong> Error tracking and performance monitoring services</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Business Clients (Controllers)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  When we provide chatbot services to business clients, they may be the primary data controllers:
                </p>
                <ul className="space-y-1">
                  <li>We act as data processor on behalf of the client</li>
                  <li>We process data only as instructed by the client</li>
                  <li>Clients are responsible for obtaining necessary consent from end-users</li>
                  <li>We ensure GDPR compliance through Data Processing Agreements</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Legal Requirements and Protection</h4>
                <p>We may disclose personal data if we believe it's necessary to:</p>
                <ul className="space-y-1">
                  <li>Comply with legal obligations and valid legal processes</li>
                  <li>Respond to government authority requests</li>
                  <li>Protect rights, property, or security of Alfaliike, users, or public</li>
                  <li>Prevent or investigate wrongdoing, fraud, or security incidents</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Corporate Transactions</h4>
                <p>
                  If Alfaliike is involved in a merger, acquisition, or sale of assets, your personal data may be
                  transferred. We will ensure confidentiality is maintained and provide notice before data becomes
                  subject to a different privacy policy.
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 4: Data Storage and International Transfers */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  4
                </div>
                Data Storage and International Transfers
              </h2>
              <div className="prose prose-gray max-w-none">
                <h4 className="font-semibold mt-6 mb-3">Storage Locations</h4>
                <p>
                  Your personal data is stored on secure servers and databases within the European Union:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Database className="h-4 w-4 text-blue-500 mt-1" />
                    MongoDB Atlas cloud database service (EU data centers)
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="h-4 w-4 text-blue-500 mt-1" />
                    Hetzner Online application servers (Germany/Finland)
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-blue-500 mt-1" />
                    High levels of encryption and security controls
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-blue-500 mt-1" />
                    Data residency options based on client requirements
                  </li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">International Transfers</h4>
                <p>
                  When personal data is transferred outside the EEA, we ensure adequate safeguards:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span><strong>Standard Contractual Clauses (SCCs):</strong> EU-approved data protection clauses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span><strong>Data Processing Addendums:</strong> GDPR compliance commitments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span><strong>Technical Measures:</strong> Encryption in transit and at rest (TLS/SSL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span><strong>Regionalization:</strong> Process data in region closest to users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span><strong>Access Controls:</strong> Network protections and authorization systems</span>
                  </li>
                </ul>

                <p className="text-sm text-muted-foreground mt-4">
                  Note: Telegram Messenger Inc. and other third-party services process data under their own privacy policies
                  as independent entities. We only partner with reputable, privacy-compliant services.
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 5: Data Security */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  5
                </div>
                Data Security
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  We take data security very seriously and employ a range of technical and organizational
                  measures to safeguard your personal information:
                </p>

                <h4 className="font-semibold mt-6 mb-3">Technical Security Measures</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Lock className="h-4 w-4 text-blue-500 mt-1" />
                    <span><strong>Encryption:</strong> TLS/SSL for data in transit, encrypted databases at rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-blue-500 mt-1" />
                    <span><strong>Network Security:</strong> Firewalls, secure network architectures, VPN access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Settings className="h-4 w-4 text-blue-500 mt-1" />
                    <span><strong>Access Control (RBAC):</strong> Need-to-know basis, multi-factor authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="h-4 w-4 text-blue-500 mt-1" />
                    <span><strong>Monitoring:</strong> Continuous system monitoring, security alerts, audit logs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="h-4 w-4 text-blue-500 mt-1" />
                    <span><strong>Secure Infrastructure:</strong> 24/7 monitored data centers with physical security</span>
                  </li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Organizational Measures</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Staff confidentiality agreements and data protection training
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Privacy by design and security by design approaches
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Regular security testing, vulnerability scans, code reviews
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Incident response plan with breach notification procedures
                  </li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-yellow-800">Security Disclaimer</h5>
                      <p className="text-yellow-700 text-sm mt-1">
                        While we implement industry-standard security measures, no method of transmission over the Internet
                        is 100% secure. You transmit data to us at your own risk and should use secure networks and devices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Section 6: Data Retention */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  6
                </div>
                Data Retention
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  We will retain personal data only for as long as necessary to fulfill the purposes outlined in this Policy,
                  unless a longer retention period is required or permitted by law:
                </p>

                <h4 className="font-semibold mt-6 mb-3">Chat Data</h4>
                <ul className="space-y-1">
                  <li>Conversation logs kept as long as needed to provide service</li>
                  <li>Retained for quality assurance and bot improvement (after anonymization)</li>
                  <li>Purged or anonymized after reasonable period when no longer actively needed</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Integration Data</h4>
                <ul className="space-y-1">
                  <li>Records in third-party systems subject to those systems' retention policies</li>
                  <li>Internal sync data treated like chat data</li>
                  <li>Retained only as needed for integration function</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Account/Contact Data</h4>
                <ul className="space-y-1">
                  <li>Retained while we continue to interact with you or provide services</li>
                  <li>Deleted or anonymized upon consent withdrawal or service cessation</li>
                  <li>Basic contact records kept for administrative purposes as necessary</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Logs and Backups</h4>
                <ul className="space-y-1">
                  <li>System logs typically retained for 30-90 days</li>
                  <li>Backup snapshots managed with expiration policies</li>
                  <li>Extended retention only if justified by security incidents or legal requirements</li>
                </ul>

                <p className="text-sm text-muted-foreground mt-4">
                  When we have no ongoing legitimate business need, we will delete, anonymize, or securely isolate
                  your data. Residual copies in backup systems will be purged according to our backup retention schedule.
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 7: Your Rights */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  7
                </div>
                Your Rights
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  As an individual whose personal data we process, especially if you are in the EU,
                  you have certain data protection rights under GDPR:
                </p>

                <h4 className="font-semibold mt-6 mb-3">Access and Information</h4>
                <ul className="space-y-1">
                  <li><strong>Right of Access:</strong> Request confirmation and copy of your personal data</li>
                  <li><strong>Information:</strong> Understand how we use your data and verify lawfulness</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Correction and Updates</h4>
                <ul className="space-y-1">
                  <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete information</li>
                  <li><strong>Updates:</strong> Keep your email, contact, and profile information current</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Deletion and Restriction</h4>
                <ul className="space-y-1">
                  <li><strong>Right to Erasure:</strong> "Right to be forgotten" when data no longer necessary</li>
                  <li><strong>Right to Restrict Processing:</strong> Temporarily halt processing in certain circumstances</li>
                  <li><strong>Objection Rights:</strong> Object to processing based on legitimate interests</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Portability and Consent</h4>
                <ul className="space-y-1">
                  <li><strong>Data Portability:</strong> Receive your data in machine-readable format</li>
                  <li><strong>Withdraw Consent:</strong> Stop consent-based processing at any time</li>
                  <li><strong>Marketing Opt-out:</strong> Unconditional right to stop direct marketing</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Complaints and Support</h4>
                <ul className="space-y-1">
                  <li><strong>Supervisory Authority:</strong> Lodge complaints with data protection authorities</li>
                  <li><strong>Finland:</strong> Office of the Data Protection Ombudsman (Tietosuojavaltuutetun toimisto)</li>
                  <li><strong>Response Time:</strong> We respond within one month to rights requests</li>
                </ul>

                <p className="text-sm text-muted-foreground mt-4">
                  To exercise your rights, contact us using the information below. We may need to verify your
                  identity to process certain requests. Exercising your rights is free of charge except in
                  cases of unfounded or excessive requests.
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 8: Children's Privacy */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  8
                </div>
                Children's Privacy
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Our services (including our Telegram bots and integrations) are not directed to children under
                  the age of 16. We do not knowingly collect personal data from anyone under 16 years old.
                </p>
                <p>
                  If you are under 16, please do not use our services or provide any personal information.
                  In the event we learn that we have inadvertently collected personal data from a child under 16
                  without appropriate consent, we will take steps to delete that information as soon as possible.
                </p>
                <p>
                  If you are a parent or guardian and discover that your child under 16 has engaged with our
                  services and provided personal data, please contact us immediately, and we will promptly
                  remove the child's information from our records.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-blue-700 text-sm">
                    <strong>Note:</strong> In Finland, the age of consent for information society services is 13 for
                    consent-based processing. However, our policy is to avoid providing services to minors altogether
                    given the business-oriented nature of our bots. By using our services, you represent that you are
                    at least 16 years old.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Section 9: Updates to This Policy */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  9
                </div>
                Updates to This Policy
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices,
                  technologies, legal requirements, or for other operational reasons.
                </p>

                <h4 className="font-semibold mt-6 mb-3">Notification Methods</h4>
                <ul className="space-y-1">
                  <li>Revising the "Effective Date" at the top of the Policy</li>
                  <li>Posting notices on our website for significant changes</li>
                  <li>Notifying users via bot or email for material changes</li>
                  <li>Providing prominent notice as required by law</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Your Consent</h4>
                <p>
                  Your continued use of our services after any changes to this Policy constitutes
                  acceptance of the updated terms. We encourage you to review this Policy periodically
                  to stay informed about how we are protecting your information.
                </p>

                <p className="text-sm text-muted-foreground mt-4">
                  If we seek to use your personal data for a new purpose that is not compatible with
                  the purposes for which we originally collected it, we will obtain your consent or
                  provide you with a relevant notice as required by law.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Us
                </CardTitle>
                <CardDescription>
                  Questions about your privacy or data practices? We're here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  If you have any questions, concerns, or requests regarding this Privacy Policy
                  or your personal data, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Company:</strong> Alfaliike Oy
                  </p>
                  <p>
                    <strong>Address:</strong> Lakaksenkuja 6, 49270 Pyhtää, Finland
                  </p>
                  <p>
                    <strong>Email:</strong> info@alfa-automations.com
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  We will respond to your inquiries as promptly as possible, and no later than
                  within the timeframe required by law. Your feedback and trust are important to us.
                </p>
                <div className="flex gap-3">
                  <Link to="/terms" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Terms of Service
                    </Button>
                  </Link>
                  <Link to="/" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-primary to-purple-600">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Alfaliike
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © 2025 Alfaliike Oy. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
