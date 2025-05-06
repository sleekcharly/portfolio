import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'sleekcharly';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  const headers = {
    Authorization: `token ${GITHUB_TOKEN}`,
    'User-Agent': GITHUB_USERNAME,
  };

  try {
    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers,
      },
    );

    const repos = await reposRes.json();

    let totalCommits = 0;

    for (const repo of repos) {
      const commitsRes = await fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?author=${GITHUB_USERNAME}`,
        {
          headers,
        },
      );

      const commits = await commitsRes.json();

      totalCommits += Array.isArray(commits) ? commits.length : 0;
    }

    return NextResponse.json({ commits: totalCommits });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch commit count' },
      { status: 500 },
    );
  }
}
