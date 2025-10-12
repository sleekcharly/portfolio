import { Metadata } from 'next';
import { workData } from '@/assets/data';
import ProjectClient from '../ProjectClient'; // 👈 we'll create this next

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = workData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | My Portfolio',
      description: 'The requested project could not be found.',
    };
  }
  const keywords = [
    project.full_title,
    project.slug,
    'Charles Ukasoanya',
    'Software Project',
    'IoT Solutions',
    'Next.js',
    'React',
    'Web Development',
  ];

  return {
    title: `${project.full_title} | Portfolio - Charles Ukasoanya`,
    description:
      project.description ||
      project.text?.slice(0, 150)?.replace(/<[^>]+>/g, '') ||
      'Project showcase',
    keywords,
    openGraph: {
      title: project.full_title,
      description: project.description ?? '',
      url: `https://www.devcharles.com/projects/${slug}`,
      images: [
        {
          url:
            typeof project.projImage.src === 'string'
              ? project.projImage.src
              : '', // if it's a static import, you may use project.projImage.src
          alt: `${project.full_title} - Project Screenshot`,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },

    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description ?? '',
      images: [project.projImage.src],
      site: '@sleekcharly',
      creator: '@sleekcharly',
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ProjectClient params={params} />; // delegate rendering to client component
}
