
import { Scale, FileText, Shield, Users, Phone, MessageCircle, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Property Documentation (बैनामा लेखन)",
      description: "Expert property documentation services including sale deeds, agreements, and legal papers",
      features: ["Sale Deed Preparation", "Property Agreements", "Legal Documentation", "Registration Assistance"],
      price: "Starting from ₹2,000"
    },
    {
      icon: FileText,
      title: "Title Verification & Clearance",
      description: "Comprehensive property title verification and legal clearance services",
      features: ["Title Search", "Legal Clearance", "Encumbrance Certificate", "Document Verification"],
      price: "Starting from ₹1,500"
    },
    {
      icon: Shield,
      title: "Property Legal Consultation",
      description: "Expert legal advice on property matters and real estate transactions",
      features: ["Legal Advice", "Risk Assessment", "Dispute Resolution", "Court Representation"],
      price: "Starting from ₹500"
    },
    {
      icon: Users,
      title: "Family Property Matters",
      description: "Legal services for family property disputes and inheritance matters",
      features: ["Partition Deeds", "Inheritance Legal Support", "Family Disputes", "Will Preparation"],
      price: "Starting from ₹3,000"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner Section */}
      <section className="relative w-full">
        <img 
          src="/lovable-uploads/4330fea9-d3ed-4383-907d-bf8e8b23c23d.png"
          alt="Legal Services Banner"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Services Introduction */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
              Professional Legal Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive property legal services backed by 75+ years of heritage and 33+ years of professional experience
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card key={index} className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">{service.title}</h3>
                      <p className="text-lg md:text-xl font-semibold text-green-600">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <a href="/book-consultant" className="flex-1">
                      <Button className="w-full font-semibold text-sm md:text-base">
                        Book Consultation
                      </Button>
                    </a>
                    <a href="/contact" className="flex-1">
                      <Button variant="outline" className="w-full font-semibold text-sm md:text-base">
                        Get Quote
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why Choose Our Legal Services?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference of working with seasoned legal professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Expert Legal Team</h3>
                <p className="text-muted-foreground">33+ years of experience in property law and legal documentation</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Trusted Heritage</h3>
                <p className="text-muted-foreground">75+ years of family legal heritage serving the community</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Transparent Process</h3>
                <p className="text-muted-foreground">Clear pricing and step-by-step guidance throughout</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-8 md:py-12 lg:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Our Service Process
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Simple and transparent process to get your legal work done
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Initial Consultation</h3>
              <p className="text-sm md:text-base opacity-90">Discuss your legal requirements and get expert advice</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Document Review</h3>
              <p className="text-sm md:text-base opacity-90">Thorough review of all property documents and papers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Legal Work</h3>
              <p className="text-sm md:text-base opacity-90">Professional preparation of all legal documents</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Completion</h3>
              <p className="text-sm md:text-base opacity-90">Final delivery with registration assistance if needed</p>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <a href="/book-consultant">
              <Button size="lg" variant="secondary" className="font-semibold px-6 md:px-8 py-3 md:py-4">
                Start Your Legal Work Today
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your legal requirements with our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="font-semibold px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                Contact Us
              </Button>
            </a>
            <a href="tel:7037455191">
              <Button size="lg" variant="outline" className="font-semibold px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Call: 7037455191
              </Button>
            </a>
            <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="font-semibold px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Services;
