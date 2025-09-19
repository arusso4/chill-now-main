import React from "react";
import { Linkedin, Mail, Users, Award, Zap, Heart } from "lucide-react";

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former Uber executive with 10+ years in logistics and delivery. Passionate about creating safe, reliable cannabis delivery experiences.",
      avatar: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/alexchen",
      email: "alex@chillnow.com",
      color: "emerald"
    },
    {
      name: "Sarah Rodriguez",
      role: "Head of Operations",
      bio: "Operations expert with deep experience in regulated industries. Ensures every delivery meets our high standards for safety and quality.",
      avatar: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/sarahrodriguez",
      email: "sarah@chillnow.com",
      color: "teal"
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      bio: "Tech visionary who built the platform that powers our operations. Former Google engineer with a passion for solving complex logistics challenges.",
      avatar: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/marcusjohnson",
      email: "marcus@chillnow.com",
      color: "fuchsia"
    },
    {
      name: "Dr. Lisa Park",
      role: "Head of Safety",
      bio: "Former FDA compliance officer with expertise in cannabis regulations. Ensures we meet the highest safety and legal standards.",
      avatar: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/lisapark",
      email: "lisa@chillnow.com",
      color: "emerald"
    },
    {
      name: "David Kim",
      role: "Head of Driver Experience",
      bio: "Former Lyft operations lead who understands what drivers need to succeed. Builds programs that support our delivery partners.",
      avatar: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/davidkim",
      email: "david@chillnow.com",
      color: "teal"
    },
    {
      name: "Emma Thompson",
      role: "Head of Community",
      bio: "Community builder with experience in cannabis advocacy. Creates the connections that make ChillNOW more than just a delivery service.",
      avatar: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/emmathompson",
      email: "emma@chillnow.com",
      color: "fuchsia"
    }
  ];

  const getBgColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-500/15";
      case "teal":
        return "bg-teal-500/15";
      case "fuchsia":
        return "bg-fuchsia-500/15";
      default:
        return "bg-emerald-500/15";
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "border-emerald-500/20";
      case "teal":
        return "border-teal-500/20";
      case "fuchsia":
        return "border-fuchsia-500/20";
      default:
        return "border-emerald-500/20";
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Meet the Team
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto px-2">
            The passionate people behind ChillNOW—experts in technology, operations, and cannabis who are building the future of delivery.
          </p>
        </header>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <article key={index} className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Avatar */}
              <div className="relative mb-4 sm:mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 p-0.5">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <Users className="w-8 h-8 text-muted-foreground" />
                  </div>
                </div>
                <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full ${getBgColor(member.color)} border-2 border-background flex items-center justify-center`}>
                  <Award className="w-3 h-3 text-emerald-400" />
                </div>
              </div>

              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-emerald-500 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">{member.role}</p>
              </div>

              {/* Bio */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-center">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors duration-300"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 transition-colors duration-300"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm">
              <Heart className="w-4 h-4" />
              <span>Passionate team • Building the future together</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Want to join our team? We're always looking for talented people who share our vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
