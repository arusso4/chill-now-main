import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, Check, Zap, Wind, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface EmailSignupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EmailSignupDialog = ({ open, onOpenChange }: EmailSignupDialogProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
    
    if (value && !validateEmail(value)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("Email address is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setIsValidEmail(false);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const { error: supabaseError } = await supabase
        .from('Email_signups')
        .insert([{ email }]);

      if (!supabaseError) {
        setIsSuccess(true);
        setEmail("");
        setIsValidEmail(true);
      } else {
        console.error("Error submitting email:", supabaseError);
        setError("Failed to join waitlist. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setEmail("");
    setError("");
    setIsValidEmail(true);
    onOpenChange(false);
  };

  // Focus management
  useEffect(() => {
    if (open && !isSuccess) {
      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 100);
    }
  }, [open, isSuccess]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent 
        ref={dialogRef}
        className="sm:max-w-md mx-4 sm:mx-auto"
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby={isSuccess ? "success-message" : "form-description"}
      >
        <DialogHeader>
          <DialogTitle id="dialog-title" className="text-center text-xl sm:text-2xl font-bold">
            {isSuccess ? "You're In!" : "Join the Waitlist"}
          </DialogTitle>
        </DialogHeader>
        
        {isSuccess ? (
          <div className="text-center py-4 sm:py-6">
            <div id="success-message" className="relative mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-pulse" aria-hidden="true">
                <div className="flex space-x-1">
                  <Wind className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce" style={{ animationDelay: '0ms' }} />
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce" style={{ animationDelay: '150ms' }} />
                  <Wind className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" aria-hidden="true" />
              </div>
            </div>
            <p className="text-base sm:text-lg font-medium mb-2">You're In! 🚀</p>
            <p className="text-sm sm:text-base text-muted-foreground">Ready for fast AF delivery when we launch.</p>
            <Button onClick={handleClose} className="mt-4 sm:mt-6 w-full sm:w-auto">
              Chill Out
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div id="form-description" className="sr-only">
              Enter your email address to join the waitlist for early access to premium cannabis delivery.
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">Email Address</Label>
              <Input
                ref={emailInputRef}
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={handleEmailChange}
                required
                disabled={isLoading}
                className={`text-sm sm:text-base ${!isValidEmail && email ? 'border-destructive' : ''}`}
                aria-invalid={!isValidEmail && email ? 'true' : 'false'}
                aria-describedby={error ? 'error-message' : undefined}
              />
              {error && (
                <div id="error-message" className="flex items-center gap-2 text-sm text-destructive" role="alert">
                  <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  <span>{error}</span>
                </div>
              )}
            </div>
            
            <Button 
              type="submit" 
              className="w-full text-sm sm:text-base" 
              disabled={isLoading || !email || !isValidEmail}
              aria-describedby={isLoading ? 'loading-description' : undefined}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                  <span id="loading-description" className="sr-only">Joining waitlist, please wait</span>
                  Joining...
                </>
              ) : (
                "Get on the List"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};