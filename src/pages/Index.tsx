
import { Phone, MessageCircle, Scale, Award, Users, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight">
                Expert Property Legal Services
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                75+ Years of Legal Heritage | Professional बैनामा लेखक Services | 
                Trusted Property Documentation Expert in Hapur
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href="/book-consultant">
                  <Button size="lg" className="font-semibold px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto text-base md:text-lg">
                    Book Consultation Now
                  </Button>
                </a>
                <a href="tel:7037455191">
                  <Button size="lg" variant="outline" className="font-semibold px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto text-base md:text-lg">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Call: 7037455191
                  </Button>
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-64 md:w-64 md:h-80 rounded-xl overflow-hidden border-4 border-primary shadow-2xl mx-auto">
                <img 
                  src="/lovable-uploads/7fcb1cb6-ab59-4fd4-ac3a-873cde116cc8.png" 
                  alt="Advocate Ajay Shankar Sharma - Property Legal Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 md:mt-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary">Advocate Ajay Shankar Sharma</h3>
                <p className="text-base md:text-lg text-muted-foreground">33+ Years Legal Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Legal Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive property legal services with decades of expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Property Documentation</h3>
                <p className="text-muted-foreground mb-4">Expert बैनामा लेखक services for all property transactions</p>
                <a href="/services">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Legal Consultation</h3>
                <p className="text-muted-foreground mb-4">Expert advice on property law and legal matters</p>
                <a href="/book-consultant">
                  <Button variant="outline" className="w-full">
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Title Verification</h3>
                <p className="text-muted-foreground mb-4">Complete property title verification and clearance</p>
                <a href="/services">
                  <Button variant="outline" className="w-full">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Why Choose TiewalaVakil?
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Three generations of legal excellence serving property law needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">75+</div>
              <div className="text-sm md:text-base opacity-90">Years Heritage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">33+</div>
              <div className="text-sm md:text-base opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">3</div>
              <div className="text-sm md:text-base opacity-90">Generations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">1000+</div>
              <div className="text-sm md:text-base opacity-90">Happy Clients</div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/about">
              <Button size="lg" variant="secondary" className="font-semibold px-6 md:px-8 py-3 md:py-4">
                Learn About Our Heritage
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Latest Legal Insights
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Stay updated with latest property law insights and legal advice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/lovable-uploads/315b4579-da29-4b6d-931b-adccdbf5ccee.png" 
                alt="Sale Deed Legal Document"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Why Sale Deed is the Most Crucial Legal Document
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn why Sale Deed is essential for property transactions and how it protects your investment.
                </p>
                <a href="/blog/sale-deed-crucial-legal-document">
                  <Button className="w-full">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/lovable-uploads/66396184-1e67-4743-938c-cd5ecac431d9.png" 
                alt="Property Documentation"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Common Property Documentation Mistakes
                </h3>
                <p className="text-muted-foreground mb-4">
                  Avoid costly mistakes with proper legal guidance for property documentation.
                </p>
                <a href="/blog">
                  <Button className="w-full">
                    View All Articles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
            Ready to Get Legal Assistance?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            Contact us today for expert property legal consultation and documentation services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="font-semibold px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                Contact Us Now
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

export default Index;
