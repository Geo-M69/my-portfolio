import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Geovany Munos: game designer and programmer focused on narrative writing and game systems programming.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <main className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          About
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          I am Geovany Munos, a junior majoring in Game Studies and Esports,
          building toward Computer Science and long-term programming work. I am
          a game designer and programmer focused on narrative writing and game
          systems programming.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
          Background
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          I was born in the United States and lived in Honduras for most of my
          life before returning to the U.S. for college. Growing up in a
          difficult neighborhood, I spent much of my time at home with books,
          art, and video games. Those interests eventually led me into
          technology and coding, including building my first computer at 14.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          I am bilingual and developed a lot of my English through media, often
          watching shows in Spanish and then rewatching them in English to
          connect and translate meaning. That habit shaped how I think about
          language, story, and subtext.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
          Design Perspective
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Firewatch was a key moment in how I think about games. It showed me
          how powerful game storytelling can be, sometimes more personally
          impactful than film because players participate directly in the
          experience.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          The values I bring into my work are resilience, introspection, and
          rumination. I am especially interested in building systems and
          narratives that invite players to reflect on perspective, choices, and
          consequence.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
          Work and Skills
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Beyond class projects, I built an open source launcher that brings
          Steam, Epic, and GOG libraries into one application, and I contributed
          to launcher development for Hytale.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          I work with Godot and programming languages including Rust, C,
          TypeScript, and C#.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
          Opportunities and Contact
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          I am currently open to internship opportunities and long-term full
          time roles where I can contribute to gameplay systems, tools, and
          narrative-focused development.
        </p>
        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>
            Email:{' '}
            <a className="underline" href="mailto:geomunos73@proton.me">
              geomunos73@proton.me
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a
              className="underline"
              href="https://www.linkedin.com/in/geovany-munos-3a00082b2"
              target="_blank"
              rel="noopener noreferrer"
            >
              geovany-munos-3a00082b2
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a
              className="underline"
              href="https://github.com/Geo-M69"
              target="_blank"
              rel="noopener noreferrer"
            >
              Geo-M69
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
