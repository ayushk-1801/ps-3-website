import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";
import { Gideon_Roman } from "next/font/google";

const teamMembers = [
  {
    name: "Arnesh Batra",
    designation: "AI Researcher",
    photo:
      "https://github.com/arnesh2212.png",
    social: {
      linkedin: "https://www.linkedin.com/in/arnesh-batra-9684a4211",
      github: "https://github.com/arnesh2212",
    },
  },
  {
    name: "Aniket Khandelwal",
    designation: "AI Researcher",
    photo:
      "/aniket.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/aniket-khandelwal-182400274",
      github: "https://github.com/aniketiiitd",
    },
  },
  {
    name: "Arush Gumber",
    designation: "AI Researcher",
    photo:
      "https://github.com/ArushGumber.png",
    social: {
      linkedin: "https://www.linkedin.com/in/arushgumber",
      github: "https://github.com/ArushGumber",
    },
  },
  {
    name: "Ayush Kumar Anand",
    designation: "Full Stack Developer",
    photo:
      "https://github.com/ayushk-1801.png",
    social: {
      linkedin: "https://linkedin.com/in/ayush-kumar-anand",
      github: "https://github.com/ayushk-1801",
    },
  },
  {
    name: "Anushk Kumar",
    designation: "Frontend Developer",
    photo:
      "https://github.com/berserk-23115.png",
    social: {
      linkedin: "https://www.linkedin.com/in/anushk-kumar-a0b7b61ba",
      github: "https://github.com/berserk-23115",
    },
  },
];

export default function AboutPage() {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Meet Our Team
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            The experts behind StarkVision, dedicated to advancing AI-driven
            visual search, retrieval, and detection in satellite imagery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md"
            >
              <CardContent className="p-4 lg:p-6">
                <div className="relative mb-3 lg:mb-4">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden ring-2 lg:ring-4 ring-gray-100 group-hover:ring-violet-200 transition-colors duration-300">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-1 group-hover:text-violet-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs lg:text-sm text-violet-500 font-medium mb-3 lg:mb-4">
                    {member.designation}
                  </p>
                  <div className="flex justify-center space-x-2 lg:space-x-3">
                    {member.social.linkedin && (
                        <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 lg:h-8 lg:w-8 p-0 hover:bg-violet-50 hover:text-violet-600 transition-colors duration-200"
                        asChild
                      >
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="h-3 w-3 lg:h-4 lg:w-4" />
                        </a>
                      </Button>
                    )}
                    {member.social.github && (
                        <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 lg:h-8 lg:w-8 p-0 hover:bg-violet-50 hover:text-violet-600 transition-colors duration-200"
                        asChild
                      >
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <Github className="h-3 w-3 lg:h-4 lg:w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
