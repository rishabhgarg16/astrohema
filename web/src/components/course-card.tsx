import type { Course } from "@/data/courses";

type Props = {
  course: Course;
};

export function CourseCard({ course }: Props) {
  const isUpcoming = course.comingSoon;

  const levelLabel =
    course.level === "Upcoming" ? "Coming Soon" : `${course.level} Level`;

  return (
    <div className="bg-card rounded-2xl shadow-sm border border-accent/10 overflow-hidden flex flex-col">
      {/* Thumbnail / Banner */}
      <div className="relative h-40 bg-gradient-to-br from-accent to-indigo-700">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_60%),radial-gradient(circle_at_bottom,_#facc15,_transparent_55%)]" />
        <div className="relative h-full flex flex-col justify-end p-4 text-white">
          <div className="text-xs font-semibold uppercase tracking-wide mb-1">
            {levelLabel}
          </div>
          <h3 className="text-lg font-semibold leading-snug line-clamp-2">
            {course.title}
          </h3>
          {isUpcoming && (
            <span className="mt-2 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm border border-white/30">
              COMING SOON
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-5 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-lg">
            🌙
          </div>
          <div className="text-sm">
            <div className="font-semibold text-foreground">Astro Hema</div>
            <div className="text-muted text-xs">Course Mentor</div>
          </div>
        </div>

        <p className="text-sm text-muted line-clamp-3">
          Learn step-by-step with practical examples, live sessions and doubt
          solving designed for Indian students and working professionals.
        </p>

        <div className="mt-auto flex gap-3">
          <a
            href="#lead-form"
            className="flex-1 inline-flex items-center justify-center rounded-full bg-accent text-white text-sm font-semibold py-2.5 px-4 hover:bg-accent/90 transition-colors"
          >
            Know More
          </a>
        </div>
      </div>
    </div>
  );
}


