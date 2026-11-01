'use client';

import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import ProjectShowcase from '@/components/ProjectShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import LeadershipSection from '@/components/LeadershipSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="relative bg-theme-bg text-theme-heading">
      {/* 01. Hero Section */}
      <div id="hero">
        <HeroSlider />
      </div>

      {/* 02. Stats Bar + Featured Projects */}
      <div id="projects-section">
        <ProjectShowcase />
      </div>

      {/* 03. Our Services */}
      <div id="services-section">
        <ServicesGrid />
      </div>

      {/* 04. Why Choose Galaxy Marketing */}
      <div id="why-choose-us">
        <WhyChooseUs />
      </div>

      {/* 05. Testimonials */}
      <div id="testimonials">
        <TestimonialCarousel />
      </div>

      {/* 06. Our Team */}
      <div id="leadership-section">
        <LeadershipSection />
      </div>

      {/* 07. Contact & Get In Touch Form (At End) */}
      <div id="contact-section">
        <ContactSection />
      </div>
    </div>
  );
}
