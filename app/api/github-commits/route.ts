import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'sleekcharly';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    'User-Agent': GITHUB_USERNAME,
    'Content-Type': 'application/json',
  };

  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        repositories(first: 100) {
          edges {
            node {
              name
              owner {
                login
              }
              object(expression: "HEAD") {
                ... on Commit {
                  history(first: 1) {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    // Summing all commits across repositories
    const totalCommits = data.data.user.repositories.edges.reduce(
      (
        sum: number,
        repo: { node: { object: { history: { totalCount: number } } } },
      ) => sum + repo.node.object.history.totalCount,
      0,
    );

    return NextResponse.json({ commits: totalCommits });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch commit count' },
      { status: 500 },
    );
  }
}
