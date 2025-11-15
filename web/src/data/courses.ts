export type CourseLevel = "Beginner" | "Advanced" | "Upcoming";

export type Course = {
  title: string;
  level: CourseLevel;
  category: "basic" | "advanced" | "upcoming";
  comingSoon?: boolean;
};

export type CourseSection = {
  id: "basic" | "advanced" | "upcoming";
  title: string;
  description?: string;
  courses: Course[];
};

export const courseSections: CourseSection[] = [
  {
    id: "basic",
    title: "Basic Courses",
    description: "Start your journey into occult science with strong foundations.",
    courses: [
      {
        title: "Basic Numerology Course",
        level: "Beginner",
        category: "basic",
      },
      {
        title: "The Ultimate Astrology Course",
        level: "Beginner",
        category: "basic",
      },
      {
        title: "Rudraksha Crash Course",
        level: "Beginner",
        category: "basic",
      },
      {
        title: "Basic Nakshatra Course",
        level: "Beginner",
        category: "basic",
      },
      {
        title: "Basic 10 Sureshot Predictions of Astrology",
        level: "Beginner",
        category: "basic",
      },
      {
        title: "Basic Mobile Numerology Course",
        level: "Beginner",
        category: "basic",
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced Courses",
    description: "Deep-dive mentorship programs to master your favourite subject.",
    courses: [
      {
        title: "Advanced Numerology Mentorship Program",
        level: "Advanced",
        category: "advanced",
      },
      {
        title: "Advanced Astrology Mentorship Program",
        level: "Advanced",
        category: "advanced",
      },
      {
        title: "Advanced Vastu Course",
        level: "Advanced",
        category: "advanced",
      },
      {
        title: "Lal Kitab Course",
        level: "Advanced",
        category: "advanced",
      },
      {
        title: "Blank Chart Prediction",
        level: "Advanced",
        category: "advanced",
      },
      {
        title: "Ultimate Occult Mastery Bundle",
        level: "Advanced",
        category: "advanced",
      },
    ],
  },
  {
    id: "upcoming",
    title: "Upcoming Courses",
    description: "Join the waitlist and be the first to know when these courses go live.",
    courses: [
      {
        title: "Tarot Reading Course",
        level: "Upcoming",
        category: "upcoming",
        comingSoon: true,
      },
      {
        title: "Face Reading Course",
        level: "Upcoming",
        category: "upcoming",
        comingSoon: true,
      },
      {
        title: "Palmistry Course",
        level: "Upcoming",
        category: "upcoming",
        comingSoon: true,
      },
      {
        title: "Reiki Healing Course",
        level: "Upcoming",
        category: "upcoming",
        comingSoon: true,
      },
      {
        title: "Graphology Course",
        level: "Upcoming",
        category: "upcoming",
        comingSoon: true,
      },
    ],
  },
];


