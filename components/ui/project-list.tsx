'use client';

import React from 'react';
import { ProjectCard } from '@/components/ui/project-card';
import { buttonVariants } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { projects } from '@/lib/projects';

const PAGE_SIZE = 4;

export function ProjectList() {
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);
  const visibleProjects = [...projects].reverse().slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
            aria-label="Load more projects"
          >
            Load More
            <ChevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
