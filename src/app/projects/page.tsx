import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Sigma Chans',
    description: 'A lead generation tool that automates outreach on Instagram and Twitter, helping businesses connect with potential customers efficiently.',
    url: 'https://sigmachans.vercel.app',
    image: '/projects/sigma-chans.jpg',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 2,
    title: 'ATS Score Checker',
    description: 'A web tool that checks ATS compatibility for resumes, helping job seekers optimize their resumes for automated screening systems.',
    url: 'https://ats-score-checker-sigma.vercel.app',
    image: '/projects/ATS-score-checker.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'ChatGPT API']
  }
];

export default function Projects() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 animate-slide-up">
            Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning opportunity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.url}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 