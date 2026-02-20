const focusStreams = [
    {
        name: 'Build Signal',
        detail: 'One timeline for compile health, tests, and artifact freshness.',
    },
    {
        name: 'Risk Radar',
        detail: 'Flags regressions before promotion reaches the release lane.',
    },
    {
        name: 'Ops Brief',
        detail: 'Keeps decisions and blockers visible for the next handoff.',
    },
];

const releaseQueue = [
    {
        slot: '18:00 UTC',
        task: 'Cut release candidate and freeze dependency updates.',
    },
    {
        slot: '19:30 UTC',
        task: 'Run smoke suite on signed desktop installers.',
    },
    {
        slot: '21:00 UTC',
        task: 'Promote to stable if no crash spike is detected.',
    },
];

const detailChips = ['Dark command surface', 'Neon risk visibility', 'Minimal release copy'];

export default function HomePage() {
    return (
        <main className='relative flex w-full flex-1 items-center justify-center overflow-hidden bg-[#04050c] px-4 py-8 sm:px-6 lg:px-10'>
            <div aria-hidden className='neon-grid' />
            <div aria-hidden className='neon-orb neon-orb-cyan' />
            <div aria-hidden className='neon-orb neon-orb-pink' />

            <section className='neon-shell'>
                <header>
                    <p className='neon-kicker'>NeonConductor</p>
                    <h1 className='neon-title'>Signal Deck</h1>
                    <p className='neon-copy'>
                        A stripped release index for teams that want the current picture in seconds. No dashboards to
                        decode, no buried status notes.
                    </p>

                    <div className='mt-4 flex flex-wrap gap-2'>
                        {detailChips.map((chip) => (
                            <span key={chip} className='neon-chip'>
                                {chip}
                            </span>
                        ))}
                    </div>
                </header>

                <div className='mt-7 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]'>
                    <article className='neon-panel'>
                        <h2 className='neon-panel-title'>Core Streams</h2>
                        <ul className='mt-3 space-y-3'>
                            {focusStreams.map((stream) => (
                                <li key={stream.name} className='neon-list-item'>
                                    <p className='neon-label'>{stream.name}</p>
                                    <p className='neon-muted'>{stream.detail}</p>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className='neon-panel'>
                        <h2 className='neon-panel-title'>Tonight Queue</h2>
                        <ol className='mt-3 space-y-3'>
                            {releaseQueue.map((item) => (
                                <li key={item.slot} className='neon-list-item'>
                                    <p className='neon-label'>{item.slot}</p>
                                    <p className='neon-muted'>{item.task}</p>
                                </li>
                            ))}
                        </ol>
                    </article>
                </div>
            </section>
        </main>
    );
}
