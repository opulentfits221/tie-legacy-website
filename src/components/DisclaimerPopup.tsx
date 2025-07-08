
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const DisclaimerPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    // Mark that user has seen the disclaimer
    localStorage.setItem('hasSeenDisclaimer', 'true');
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-primary/20">
        <CardContent className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Legal Disclaimer</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClosePopup}
              className="h-8 w-8 p-0 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="font-bold text-lg text-primary mb-2">No Attorney-Client Relationship</h3>
              <p className="leading-relaxed">
                Viewing this website or contacting us does not create an attorney-client relationship. 
                An attorney-client relationship is established only after a formal consultation and mutual agreement.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-primary mb-2">Legal Advice Disclaimer</h3>
              <p className="leading-relaxed">
                The content on this website should not be considered as legal advice for any specific case. 
                Each legal matter is unique and requires individual assessment. Always consult with a qualified 
                legal professional for advice specific to your situation.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-primary mb-2">Accuracy of Information</h3>
              <p className="leading-relaxed">
                While we strive to keep the information up-to-date and accurate, we make no representations 
                or warranties about the completeness, accuracy, reliability, suitability, or availability of 
                the information contained on this website.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-primary mb-2">Limitation of Liability</h3>
              <p className="leading-relaxed">
                TiewalaVakil and Advocate Ajay Shankar Sharma shall not be liable for any losses or damages 
                arising from the use of information on this website or any actions taken based on such information.
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button 
              onClick={handleClosePopup}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-3 text-lg"
            >
              Close Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisclaimerPopup;
