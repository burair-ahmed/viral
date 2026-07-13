"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import Button from "@/components/ui/Button";

// Define Zod form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  budget: z.enum(["under-5k", "5k-10k", "10k-25k", "25k-plus"], {
    message: "Please select a budget range.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      budget: "5k-10k",
    },
  });

  const selectedBudget = watch("budget");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log("Submitting form data:", data);

    // Simulate server submission API response time
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const onError = () => {
    // Increment shakeKey to trigger the shake animation on validation error
    setShakeKey((prev) => prev + 1);
  };

  const budgetOptions = [
    { value: "under-5k", label: "< $5k" },
    { value: "5k-10k", label: "$5k - $10k" },
    { value: "10k-25k", label: "$10k - $25k" },
    { value: "25k-plus", label: "$25k+" },
  ] as const;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Contact Hero Title */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-16 pb-12 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />
        
        <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight max-w-4xl mx-auto mb-4 leading-none">
          Connect with the <span className="text-gradient-cyan drop-shadow-[0_0_15px_rgba(46,230,230,0.3)]">engineers</span>
        </h1>
        <p className="text-sm sm:text-base text-[#F5F9FA]/60 max-w-xl mx-auto leading-relaxed">
          Ready to scale your organic velocity? Pitch us your project details below and our team will follow up within 24 hours.
        </p>
      </section>

      {/* Split Panels Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        {/* Left Side: Agency Info Cards */}
        <div className="lg:col-span-2 flex flex-col gap-6 w-full lg:sticky lg:top-32">
          <div className="rounded-xl border border-accent-cyan-dim/15 bg-bg-secondary/40 backdrop-blur-sm p-8 flex flex-col gap-6">
            <h2 className="font-display text-xl font-bold uppercase tracking-widest text-accent-cyan">
              Office HQ
            </h2>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan-glow/10 border border-accent-cyan-dim/20 flex items-center justify-center text-accent-cyan shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F5F9FA]/40 uppercase tracking-widest block mb-1">
                    Send email
                  </span>
                  <a href="mailto:info@viralmarketingsolution.com" className="text-sm font-semibold hover:text-accent-cyan transition-colors">
                    info@viralmarketingsolution.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan-glow/10 border border-accent-cyan-dim/20 flex items-center justify-center text-accent-cyan shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F5F9FA]/40 uppercase tracking-widest block mb-1">
                    Call line
                  </span>
                  <a href="tel:+923114941631" className="text-sm font-semibold hover:text-accent-cyan transition-colors">
                    +92 311 4941631
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan-glow/10 border border-accent-cyan-dim/20 flex items-center justify-center text-accent-cyan shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F5F9FA]/40 uppercase tracking-widest block mb-1">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-[#F5F9FA]/80 leading-relaxed">
                    Plot C/10/C, Street 7<br />
                    Badar Commercial Phase 5<br />
                    Karachi, Sindh 75500, PK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form / Success Screen */}
        <div className="lg:col-span-3 w-full">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form-container"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <motion.form
                  onSubmit={handleSubmit(onSubmit, onError)}
                  key={shakeKey}
                  animate={shakeKey > 0 ? {
                    x: [0, -10, 10, -10, 10, 0],
                  } : {}}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="rounded-xl border border-accent-cyan-dim/15 bg-bg-secondary/20 backdrop-blur-sm p-8 md:p-10 flex flex-col gap-6"
                >
                  {/* Name field */}
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      {...register("name")}
                      className={`w-full px-5 py-4 rounded-lg bg-bg-primary/50 border border-accent-cyan-dim/20 focus:border-accent-cyan focus:outline-none text-sm transition-all placeholder:text-[#F5F9FA]/30 ${
                        errors.name ? "border-red-500/50 focus:border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 font-semibold mt-1.5 block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email & Company double column */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative w-full">
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        {...register("email")}
                        className={`w-full px-5 py-4 rounded-lg bg-bg-primary/50 border border-accent-cyan-dim/20 focus:border-accent-cyan focus:outline-none text-sm transition-all placeholder:text-[#F5F9FA]/30 ${
                          errors.email ? "border-red-500/50 focus:border-red-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-400 font-semibold mt-1.5 block">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <div className="relative w-full">
                      <input
                        type="text"
                        id="company"
                        placeholder="Company"
                        {...register("company")}
                        className={`w-full px-5 py-4 rounded-lg bg-bg-primary/50 border border-accent-cyan-dim/20 focus:border-accent-cyan focus:outline-none text-sm transition-all placeholder:text-[#F5F9FA]/30 ${
                          errors.company ? "border-red-500/50 focus:border-red-500" : ""
                        }`}
                      />
                      {errors.company && (
                        <span className="text-xs text-red-400 font-semibold mt-1.5 block">
                          {errors.company.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold text-[#F5F9FA]/50 uppercase tracking-widest">
                      Estimated Project Budget
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {budgetOptions.map((opt) => {
                        const isSelected = selectedBudget === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setValue("budget", opt.value)}
                            className={`px-4 py-3 rounded-lg border text-xs font-bold uppercase tracking-wider text-center transition-all duration-300 ${
                              isSelected
                                ? "bg-accent-cyan-glow/10 border-accent-cyan text-accent-cyan shadow-glow/15"
                                : "bg-bg-primary/50 border-accent-cyan-dim/15 text-[#F5F9FA]/60 hover:border-accent-cyan-dim/30"
                            }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative w-full">
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your brand goals..."
                      {...register("message")}
                      className={`w-full px-5 py-4 rounded-lg bg-bg-primary/50 border border-accent-cyan-dim/20 focus:border-accent-cyan focus:outline-none text-sm transition-all placeholder:text-[#F5F9FA]/30 resize-none ${
                        errors.message ? "border-red-500/50 focus:border-red-500" : ""
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-400 font-semibold mt-1.5 block">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Form Submission Button */}
                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-[#071822] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Inject Briefing
                        <Send size={15} />
                      </>
                    )}
                  </Button>
                </motion.form>
              </motion.div>
            ) : (
              // Success Screen with draw-in checkmark animation
              <motion.div
                key="success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-xl border border-accent-cyan/30 bg-bg-secondary/40 backdrop-blur-sm p-12 text-center flex flex-col items-center gap-6 shadow-glow/20"
              >
                {/* Glowing Outer Circle */}
                <div className="w-20 h-20 rounded-full bg-accent-cyan-glow/10 border-2 border-accent-cyan flex items-center justify-center shadow-glow">
                  {/* Drawing SVG Checkmark */}
                  <svg
                    className="w-10 h-10 text-accent-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <motion.path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-display text-2xl font-black uppercase tracking-tight">
                    Briefing Injected!
                  </h2>
                  <p className="text-sm text-[#F5F9FA]/70 max-w-sm leading-relaxed mx-auto">
                    We have successfully captured your data. Our attention engineers are already analyzing your brand. Expect a loop analysis outline in your inbox.
                  </p>
                </div>

                <Button onClick={() => setIsSubmitted(false)} variant="sheen">
                  Submit Another Brief
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
