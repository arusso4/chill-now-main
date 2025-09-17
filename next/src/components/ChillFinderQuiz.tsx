"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Coffee, 
  Candy, 
  Pill, 
  Gift, 
  Zap, 
  Moon, 
  Users, 
  Target,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Mail,
  Leaf
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface QuizAnswers {
  vibe: string;
  format: string;
  thc: string;
  flavor: string;
  email?: string;
}

const ChillFinderQuiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    vibe: "",
    format: "",
    thc: "",
    flavor: "",
  });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      title: "What kind of vibe are you after?",
      options: [
        { value: "chill-focus", label: "Chill focus", icon: Target, description: "Stay focused and relaxed" },
        { value: "energized", label: "Energized", icon: Zap, description: "Boost energy and creativity" },
        { value: "sleepy", label: "Sleepy", icon: Moon, description: "Wind down and rest" },
        { value: "social", label: "Social", icon: Users, description: "Enhance social experiences" },
      ]
    },
    {
      id: 2,
      title: "Preferred format?",
      options: [
        { value: "drink", label: "Drink", icon: Coffee, description: "Sip and savor" },
        { value: "gummies", label: "Gummies", icon: Candy, description: "Chewy and fun" },
        { value: "capsules", label: "Capsules", icon: Pill, description: "Simple and discreet" },
        { value: "surprise", label: "Surprise me", icon: Gift, description: "Let us choose for you" },
      ]
    },
    {
      id: 3,
      title: "THC preference?",
      options: [
        { value: "yes", label: "Yes", icon: Leaf, description: "I want THC" },
        { value: "no", label: "No", icon: CheckCircle, description: "THC-free only" },
        { value: "dont-know", label: "I don't know", icon: Target, description: "Help me decide" },
      ]
    },
    {
      id: 4,
      title: "Flavor profile?",
      options: [
        { value: "fruity", label: "Fruity", icon: Candy, description: "Sweet and refreshing" },
        { value: "herbal", label: "Herbal", icon: Leaf, description: "Natural and earthy" },
        { value: "spicy", label: "Spicy", icon: Zap, description: "Bold and warming" },
        { value: "doesnt-matter", label: "Doesn't matter", icon: Gift, description: "I'm flexible" },
      ]
    }
  ];

  const handleAnswer = (questionKey: keyof QuizAnswers, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionKey]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    const currentQuestion = questions[currentStep - 1];
    const answerKey = Object.keys(answers)[currentStep - 1] as keyof QuizAnswers;
    return answers[answerKey] !== "";
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('quiz_responses')
        .insert({
          vibe: answers.vibe,
          format: answers.format,
          thc: answers.thc,
          flavor: answers.flavor,
          email: email || null
        });

      if (error) {
        console.error('Error submitting quiz:', error);
        // Still show success to user even if there's a database error
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting quiz:', error);
      // Still show success to user even if there's an error
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setAnswers({
      vibe: "",
      format: "",
      thc: "",
      flavor: "",
    });
    setEmail("");
    setIsSubmitted(false);
  };

  const getCurrentQuestion = () => questions[currentStep - 1];

  const getProgressPercentage = () => (currentStep / 4) * 100;

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90">
            <Sparkles className="w-5 h-5 mr-2" />
            Take the Quiz
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">🎉 Quiz Complete!</DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <div className="text-6xl mb-4">✨</div>
            <p className="text-muted-foreground">
              Thanks for taking the Chill Finder quiz! We're analyzing your preferences to find the perfect products for you.
            </p>
            {email && (
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-sm font-medium">
                  Check your email for your personalized recommendations and 10% off coupon!
                </p>
              </div>
            )}
            <div className="space-y-2">
              <Button 
                onClick={() => {
                  setIsOpen(false);
                  resetQuiz();
                }}
                className="w-full"
              >
                Browse Products
              </Button>
              <Button 
                variant="outline" 
                onClick={resetQuiz}
                className="w-full"
              >
                Take Quiz Again
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90">
          <Sparkles className="w-5 h-5 mr-2" />
          Take the Quiz
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <DialogTitle>Chill Finder Quiz</DialogTitle>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
          
          <p className="text-sm text-muted-foreground">
            Step {currentStep} of 4
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Question */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {getCurrentQuestion().title}
            </h3>
            
            {/* Options */}
            <div className="grid grid-cols-1 gap-3">
              {getCurrentQuestion().options.map((option) => {
                const Icon = option.icon;
                const answerKey = Object.keys(answers)[currentStep - 1] as keyof QuizAnswers;
                const isSelected = answers[answerKey] === option.value;
                
                return (
                  <Button
                    key={option.value}
                    variant={isSelected ? "default" : "outline"}
                    className={`justify-start h-auto p-4 text-left ${
                      isSelected ? "bg-gradient-primary" : "hover:bg-muted"
                    }`}
                    onClick={() => handleAnswer(answerKey, option.value)}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm opacity-80">{option.description}</div>
                      </div>
                      {isSelected && (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                    </div>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Email Input (on final step) */}
          {currentStep === 4 && (
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-medium">
                Want your results + a 10% coupon emailed to you?
              </Label>
              <div className="flex gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Mail className="w-4 h-4 text-muted-foreground mt-3" />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            
            {currentStep < 4 ? (
              <Button
                onClick={nextStep}
                disabled={!canProceed()}
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get My Results
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChillFinderQuiz; 