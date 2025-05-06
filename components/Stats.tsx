'use client';

import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

const staticStats = [
  {
    num: 8,
    text: 'Years of Experience',
  },
  {
    num: 26,
    text: 'Projects completed',
  },
  {
    num: 8,
    text: 'Technologies mastered',
  },
];

const Stats = () => {
  const [commitCount, setCommitCount] = useState(0);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const res = await fetch('/api/github-commits');
        const data = await res.json();

        if (data.commits) {
          setCommitCount(data.commits);
        }
      } catch (err) {
        console.error('Failed to fetch commit count:', err);
      }
    };

    fetchCommits();
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto max-w-[85%]">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {[...staticStats, { num: commitCount, text: 'Code commits' }].map(
            (item, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                >
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  <p
                    className={`${
                      item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                    } leading-snug text-white/80`}
                  >
                    {item.text}
                  </p>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default Stats;
