import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  AlertTriangle,
  Upload,
  CheckCircle,
  ArrowLeft,
  Shield,
  Mail,
  Phone,
  FileText,
  User,
  CreditCard
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";

const ReportIssue = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderId: "",
    description: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        return;
      }
      // Check file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload an image (JPEG, PNG, GIF) or PDF file");
        return;
      }
      setUploadedFile(file);
    }
  };

  const uploadFile = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `issue_uploads/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('issue_uploads')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Error uploading file:', uploadError);
        return null;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('issue_uploads')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      let fileUrl = null;

      // Upload file if provided
      if (uploadedFile) {
        setUploadProgress(50);
        fileUrl = await uploadFile(uploadedFile);
        setUploadProgress(100);
      }

      // For now, simulate the database insert since we need to set up the table
      // In production, this would be the actual Supabase insert
      console.log('Submitting report:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        order_id: formData.orderId || null,
        description: formData.description,
        file_url: fileUrl
      });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // TODO: Uncomment this when the table is created
      // const { error } = await supabase
      //   .from('incident_reports')
      //   .insert([
      //     {
      //       name: formData.name,
      //       email: formData.email,
      //       phone: formData.phone || null,
      //       order_id: formData.orderId || null,
      //       description: formData.description,
      //       file_url: fileUrl
      //     }
      //   ]);

      // if (error) {
      //   console.error('Error submitting report:', error);
      //   alert('There was an error submitting your report. Please try again.');
      //   return;
      // }

      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        orderId: "",
        description: ""
      });
      setUploadedFile(null);

    } catch (error) {
      console.error('Error submitting report:', error);
      alert('There was an error submitting your report. Please try again.');
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Report Submitted | ChillNOW</title>
          <meta 
            name="description" 
            content="Your incident report has been submitted successfully. Our team will review and respond shortly." 
          />
        </Helmet>
        
        <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Report Submitted
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Thanks for reporting this. Our team will review and respond shortly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate('/safety')}
              >
                <Shield className="w-5 h-5 mr-2" />
                Back to Safety
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 font-bold border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Report an Issue | ChillNOW</title>
        <meta 
          name="description" 
          content="Report an issue with your ChillNOW delivery or service. Our team is here to help." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section */}
        <section 
          className="relative pt-24 pb-16 px-4 sm:px-6 min-h-[40vh] flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-30 animate-bounce"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2 text-sm font-bold">
              <AlertTriangle className="w-4 h-4 mr-2" />
              REPORT AN ISSUE
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                Something Wrong?
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Let Us Know
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We take every report seriously. Help us keep ChillNOW safe and reliable for everyone.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl border border-border p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                {/* Order ID */}
                <div className="space-y-2">
                  <Label htmlFor="orderId" className="text-sm font-semibold flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-primary" />
                    Order ID (Optional)
                  </Label>
                  <Input
                    id="orderId"
                    name="orderId"
                    type="text"
                    value={formData.orderId}
                    onChange={handleInputChange}
                    placeholder="Enter order ID if applicable"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-semibold flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    Incident Description *
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Please describe the issue in detail. Include relevant information like date, time, location, and what happened."
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="file" className="text-sm font-semibold flex items-center gap-2">
                    <Upload className="w-4 h-4 text-primary" />
                    Upload File (Optional)
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      id="file"
                      name="file"
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="file" className="cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Images (JPEG, PNG, GIF) or PDF files, max 10MB
                      </p>
                    </label>
                  </div>
                  {uploadedFile && (
                    <div className="flex items-center gap-2 text-sm text-green-500">
                      <CheckCircle className="w-4 h-4" />
                      {uploadedFile.name} selected
                    </div>
                  )}
                </div>

                {/* Progress Bar */}
                {isSubmitting && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Uploading...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Submit Report
                      </>
                    )}
                  </Button>
                  <Link to="/safety">
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg" 
                      className="text-lg py-4 font-bold border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Back to Safety
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReportIssue; 