
import { Shield, Eye, Lock, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Privacy Header */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center mt-6">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 md:p-8 mb-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">Information We Collect</h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    When you contact TiewalaVakil for legal services, we may collect the following information:
                  </p>
                  <ul className="space-y-2">
                    <li>• Personal identification information (Name, contact details)</li>
                    <li>• Property-related documents and information</li>
                    <li>• Communication records (emails, phone calls)</li>
                    <li>• Legal consultation details</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 mb-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">How We Use Your Information</h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    We use the collected information for the following purposes:
                  </p>
                  <ul className="space-y-2">
                    <li>• Providing legal consultation and services</li>
                    <li>• Preparing legal documents and agreements</li>
                    <li>• Communicating about your legal matters</li>
                    <li>• Maintaining records as required by law</li>
                    <li>• Improving our legal services</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 mb-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">Data Protection</h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    We implement appropriate security measures to protect your personal information:
                  </p>
                  <ul className="space-y-2">
                    <li>• Secure storage of physical and digital documents</li>
                    <li>• Limited access to authorized personnel only</li>
                    <li>• Regular security assessments and updates</li>
                    <li>• Compliance with legal and professional standards</li>
                    <li>• Attorney-client privilege protection</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 mb-8">
              <CardContent className="p-0">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Information Sharing</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share information only:
                  </p>
                  <ul className="space-y-2">
                    <li>• When required by law or legal proceedings</li>
                    <li>• With your explicit consent</li>
                    <li>• With authorized legal representatives</li>
                    <li>• For property registration and legal documentation purposes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 mb-8">
              <CardContent className="p-0">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Your Rights</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="space-y-2">
                    <li>• Right to access your personal data</li>
                    <li>• Right to request corrections to inaccurate information</li>
                    <li>• Right to request deletion of personal data (subject to legal requirements)</li>
                    <li>• Right to withdraw consent for data processing</li>
                    <li>• Right to file complaints with appropriate authorities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 mb-8">
              <CardContent className="p-0">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Contact Information</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    If you have any questions about this privacy policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Advocate Ajay Shankar Sharma</strong></p>
                    <p>Chamber no. 4, Tehsil Compound</p>
                    <p>Hapur - 245101, Uttar Pradesh</p>
                    <p>Phone: <a href="tel:7037455191" className="text-primary hover:underline">7037455191</a></p>
                    <p>Email: <a href="mailto:tiewalavakil@gmail.com" className="text-primary hover:underline">tiewalavakil@gmail.com</a></p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Updates to Privacy Policy</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                  </p>
                  <p className="text-sm text-muted-foreground mt-6">
                    <strong>Last Updated:</strong> December 2024
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
