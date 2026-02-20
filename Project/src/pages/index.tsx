const boardNotes = [
    {
        tag: 'Build',
        title: 'Artifact Stamp',
        detail: 'RC-27 signed and mirrored to the verification lane.',
    },
    {
        tag: 'Quality',
        title: 'Smoke Sweep',
        detail: 'Desktop installer run completed on Windows and macOS.',
    },
    {
        tag: 'Release',
        title: 'Promotion Gate',
        detail: 'Stable push opens after crash feed stays flat for 30 minutes.',
    },
];

const checkpoints = [
    { time: '18:00 UTC', action: 'Freeze dependency bumps' },
    { time: '19:20 UTC', action: 'Run signed installer pass' },
    { time: '20:45 UTC', action: 'Review crash and telemetry deltas' },
    { time: '21:00 UTC', action: 'Approve or hold stable lane' },
];

export default function HomePage() {
    return (
        <main className='ledger-wrap'>
            <div aria-hidden className='ledger-texture' />
            <section className='ledger-board'>
                <header className='ledger-header'>
                    <p className='ledger-kicker'>NeonConductor Daily</p>
                    <h1 className='ledger-title'>Release Wall</h1>
                    <p className='ledger-copy'>
                        This index is intentionally redesigned to be obvious in hot reload. If you can see this paper
                        board layout, your updates are working.
                    </p>
                </header>

                <div className='ledger-grid'>
                    {boardNotes.map((note) => (
                        <article key={note.title} className='ledger-note'>
                            <span className='ledger-note-tag'>{note.tag}</span>
                            <h2 className='ledger-note-title'>{note.title}</h2>
                            <p className='ledger-note-copy'>{note.detail}</p>
                        </article>
                    ))}
                </div>

                <article className='ledger-timeline'>
                    <h2 className='ledger-timeline-title'>Shift Timeline</h2>
                    <ol className='ledger-steps'>
                        {checkpoints.map((item) => (
                            <li key={item.time} className='ledger-step'>
                                <span className='ledger-time'>{item.time}</span>
                                <span className='ledger-action'>{item.action}</span>
                            </li>
                        ))}
                    </ol>
                </article>
            </section>
        </main>
    );
}
