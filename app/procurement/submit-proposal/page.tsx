"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { IconFileUpload, IconCheck, IconArrowLeft, IconBuilding, IconMail, IconPhone, IconUser, IconFileText, IconPackage } from "@tabler/icons-react";
import { motion } from "framer-motion";

interface ProcurementItem {
  id: string;
  itemName: string;
  description: string;
  category: string;
  quantity: string;
  deadline: string;
  contactEmail: string;
  contactPhone: string;
  companyName: string;
  status: "active" | "closed";
  datePosted: string;
}

// This should match the items from the procurement page
const procurementItems: ProcurementItem[] = [
  {
    id: "1",
    itemName: "Industrial Pumps",
    description: "High-capacity industrial pumps for refinery operations. Must meet safety and environmental standards.",
    category: "Equipment",
    quantity: "10 units",
    deadline: "2024-12-31",
    contactEmail: "procurement@torrefinery.com",
    contactPhone: "+233 24 123 4567",
    companyName: "TOR Refinery",
    status: "active",
    datePosted: "2024-01-15"
  },
  {
    id: "2",
    itemName: "Safety Equipment & PPE",
    description: "Personal Protective Equipment including helmets, safety glasses, fire-resistant clothing, and safety boots.",
    category: "Safety Equipment",
    quantity: "500 sets",
    deadline: "2024-11-30",
    contactEmail: "procurement@torrefinery.com",
    contactPhone: "+233 24 123 4567",
    companyName: "TOR Refinery",
    status: "active",
    datePosted: "2024-01-10"
  }
];

export default function SubmitProposal() {


  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero
          title="Submit Proposal"
          subtitle="Procurement"
          description="Submit your proposal for the selected procurement opportunity"
          primaryAction={{ label: "View All Opportunities", href: "/procurement" }}
        />

        <Try />
      </Suspense>
    </>
  );
}


function Try() {

  const searchParams = useSearchParams();
  const router = useRouter();
  const itemId = searchParams.get("itemId");

  const [selectedItem, setSelectedItem] = useState<ProcurementItem | null>(null);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    proposalSummary: "",
    pricing: "",
    deliveryTime: "",
    certifications: "",
    previousExperience: "",
    additionalNotes: ""
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (itemId) {
      const item = procurementItems.find(i => i.id === itemId);
      if (item) {
        setSelectedItem(item);
      }
    }
  }, [itemId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real application, you would send this data to your backend
    console.log("Proposal submitted:", {
      procurementItem: selectedItem,
      formData,
      files: files.map(f => f.name)
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Hero
          title="Proposal Submitted"
          subtitle="Thank You"
          description="Your proposal has been successfully submitted. We will review it and get back to you soon."
        />
        <Section className="bg-white">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-center p-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconCheck className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Proposal Submitted Successfully!</h2>
                <p className="text-gray-600 mb-8">
                  We have received your proposal for <strong>{selectedItem?.itemName}</strong>.
                  Our procurement team will review your submission and contact you within 5-7 business days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/procurement" size="lg">
                    <IconArrowLeft className="w-5 h-5 mr-2" />
                    Back to Procurement
                  </Button>
                  <Button href="/investor-contacts" variant="outline" size="lg">
                    Contact Us
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </Section>
      </>
    );
  }


  return (
    <Section className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            href="/procurement"
            variant="outline"
            className="mb-6"
          >
            <IconArrowLeft className="w-5 h-5 mr-2" />
            Back to Procurement
          </Button>

          <Card className="p-8">
            {/* Selected Procurement Item */}
            {selectedItem ? (
              <div className="mb-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
                <div className="flex items-start gap-4">
                  <IconPackage className="w-8 h-8 text-primary-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-primary-500 bg-white px-3 py-1 rounded-full">
                        {selectedItem.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedItem.itemName}</h3>
                    <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Quantity:</span>
                        <span className="ml-2 font-medium text-gray-900">{selectedItem.quantity}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Deadline:</span>
                        <span className="ml-2 font-medium text-gray-900">
                          {new Date(selectedItem.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-8">
                <label htmlFor="procurementItem" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Procurement Item *
                </label>
                {/* <select
                    id="procurementItem"
                    required
                    value={selectedItem ? selectedItem.id : ""}
                    onChange={(e) => {
                      const item = procurementItems.find(i => i.id === e.target.value);
                      setSelectedItem(item || null);
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a procurement item</option>
                    {procurementItems.filter(item => item.status === "active").map(item => (
                      <option key={item.id} value={item.id}>
                        {item.itemName} - {item.category}
                      </option>
                    ))}
                  </select> */}

                <select
                  id="procurementItem"
                  required
                  value={"1"}
                  onChange={(e) => {
                    const item =
                      procurementItems.find(i => i.id === e.target.value) ?? null;
                    setSelectedItem(item);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a procurement item</option>
                  {procurementItems
                    .filter(item => item.status === "active")
                    .map(item => (
                      <option key={item.id} value={item.id}>
                        {item.itemName} - {item.category}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <IconBuilding className="w-6 h-6 text-primary-500" />
                  Company Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Street address, City, Country"
                    />
                  </div>
                </div>
              </div>

              {/* Proposal Details */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <IconFileText className="w-6 h-6 text-primary-500" />
                  Proposal Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="proposalSummary" className="block text-sm font-medium text-gray-700 mb-2">
                      Proposal Summary *
                    </label>
                    <textarea
                      id="proposalSummary"
                      required
                      rows={5}
                      value={formData.proposalSummary}
                      onChange={(e) => setFormData({ ...formData, proposalSummary: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Provide a detailed summary of your proposal, including how you plan to meet the requirements..."
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="pricing" className="block text-sm font-medium text-gray-700 mb-2">
                        Proposed Pricing *
                      </label>
                      <input
                        type="text"
                        id="pricing"
                        required
                        value={formData.pricing}
                        onChange={(e) => setFormData({ ...formData, pricing: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="e.g., $50,000 or GHS 500,000"
                      />
                    </div>
                    <div>
                      <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Delivery Time *
                      </label>
                      <input
                        type="text"
                        id="deliveryTime"
                        required
                        value={formData.deliveryTime}
                        onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="e.g., 4-6 weeks"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="certifications" className="block text-sm font-medium text-gray-700 mb-2">
                      Certifications & Standards
                    </label>
                    <textarea
                      id="certifications"
                      rows={3}
                      value={formData.certifications}
                      onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="List relevant certifications, ISO standards, quality certifications, etc."
                    />
                  </div>
                  <div>
                    <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700 mb-2">
                      Previous Experience
                    </label>
                    <textarea
                      id="previousExperience"
                      rows={4}
                      value={formData.previousExperience}
                      onChange={(e) => setFormData({ ...formData, previousExperience: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Describe your company's relevant experience, similar projects completed, client references..."
                    />
                  </div>
                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="additionalNotes"
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Any additional information you'd like to include..."
                    />
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <IconFileUpload className="w-6 h-6 text-primary-500" />
                  Supporting Documents
                </h3>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
                    <IconFileUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <label htmlFor="fileUpload" className="cursor-pointer">
                      <span className="text-primary-600 font-medium hover:text-primary-700">
                        Click to upload
                      </span>
                      <span className="text-gray-600"> or drag and drop</span>
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      PDF, DOC, DOCX, XLS, XLSX (Max 10MB per file)
                    </p>
                    <input
                      type="file"
                      id="fileUpload"
                      multiple
                      accept=".pdf,.doc,.docx,.xls,.xlsx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                  {files.length > 0 && (
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <IconFileText className="w-5 h-5 text-gray-400" />
                            <span className="text-sm text-gray-700">{file.name}</span>
                            <span className="text-xs text-gray-500">
                              ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 text-sm font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-gray-500">
                    Recommended documents: Company profile, Business registration, Quality certifications,
                    Technical specifications, Pricing breakdown, Delivery schedule
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1"
                  disabled={isSubmitting || !selectedItem}
                >
                  {isSubmitting ? "Submitting..." : "Submit Proposal"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => router.push("/procurement")}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
