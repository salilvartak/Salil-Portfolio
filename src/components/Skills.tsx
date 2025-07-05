import { Card, CardContent } from "@/components/ui/card";
import BlurText from "./BlurText";
type Skill = {
  name: string;
  logo: string; // URL or local path to logo
};

const skills: Skill[] = [
  { name: "React", logo: "/assets/logo/react.svg" },
  { name: "Flutter", logo: "/assets/logo/flutter.png" },
  { name: "Git", logo: "/assets/logo/git.png" },
  { name: "Firebase", logo: "/assets/logo/firebase.png" },
  { name: "TailwindCSS", logo: "/assets/logo/tailwind.svg" },
  { name: "TypeScript", logo: "/assets/logo/typescript.webp" },
  { name: "Python", logo: "/assets/logo/python.webp" },
  { name: "Java", logo: "/assets/logo/java.png" },
  // Add more as needed
];
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const SkillsCard = () => {
  return (
    <section id="skills" className="py-8 max-w-6xl mx-auto ">
      <div className="flex justify-center">
          <BlurText
            text="Skills"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl md:text-6xl font-bold text-center mb-16 text-salil-sky"
          />
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-10" style={{ position: 'relative', zIndex: 10 }}>
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="flex flex-col items-center justify-center gap-2 p-4 shadow-md rounded-2xl hover:scale-105 transition-transform duration-300 bg-gray-800/50 border-salil-blue/50 hover:border-salil-blue/100"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-20 h-20 object-contain mb-2"
            />
            <CardContent className="p-0 font-medium text-lg text-center">
              {skill.name}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsCard;
