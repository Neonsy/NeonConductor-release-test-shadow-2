const releaseTrack = [
    {
        label: 'Candidate Cut',
        window: '18:00 UTC',
        detail: 'Freeze dependency drift and sign desktop bundles.',
    },
    {
        label: 'Smoke Window',
        window: '19:20 UTC',
        detail: 'Run launcher, update, and rollback checks on all channels.',
    },
    {
        label: 'Promotion Gate',
        window: '21:00 UTC',
        detail: 'Move to stable only when crash slope stays flat for one hour.',
    },
];

const integrityChecks = [
    {
        title: 'Build Integrity',
        detail: 'Artifact hash and notarization consistency across targets.',
    },
    {
        title: 'Runtime Safety',
        detail: 'CSP, navigation guards, and update signature verification.',
    },
    {
        title: 'Operational Hand-off',
        detail: 'Support notes, rollout channel plan, and issue ownership.',
    },
];

const dispatchNotes = [
    'Escalations route to release captain first, then incident owner.',
    'Scope shifts after candidate cut require explicit rollback coverage.',
    'Production notes must be posted before the promotion gate opens.',
];

const surfaceTags = ['Editorial layout', 'Warm control room palette', 'Fast scan hierarchy'];

export default function HomePage() {
    return (
        <main className='dispatch-site'>
            <div aria-hidden className='dispatch-glow dispatch-glow-left' />
            <div aria-hidden className='dispatch-glow dispatch-glow-right' />
            <div aria-hidden className='dispatch-grain' />

            <section className='dispatch-shell'>
                <header className='dispatch-hero'>
                    <p className='dispatch-kicker'>NeonConductor / Dispatch Index</p>
                    <h1 className='dispatch-title'>Release direction without dashboard drag.</h1>
                    <p className='dispatch-copy'>
                        A single-page command surface for preparing, validating, and promoting desktop releases with
                        minimal noise.
                    </p>
                    <div className='dispatch-chip-row'>
                        {surfaceTags.map((chip) => (
                            <span key={chip} className='dispatch-chip'>
                                {chip}
                            </span>
                        ))}
                    </div>
                    <div className='dispatch-actions'>
                        <button type='button' className='dispatch-button dispatch-button-primary'>
                            Start Release Brief
                        </button>
                        <a className='dispatch-button dispatch-button-secondary' href='#release-track'>
                            Jump to Track
                        </a>
                    </div>
                </header>

                <div className='dispatch-grid'>
                    <article id='release-track' className='dispatch-panel'>
                        <h2 className='dispatch-panel-title'>Release Track</h2>
                        <ol className='dispatch-list'>
                            {releaseTrack.map((step) => (
                                <li key={step.label} className='dispatch-list-item'>
                                    <p className='dispatch-item-label'>{step.label}</p>
                                    <p className='dispatch-item-window'>{step.window}</p>
                                    <p className='dispatch-item-detail'>{step.detail}</p>
                                </li>
                            ))}
                        </ol>
                    </article>

                    <article className='dispatch-panel'>
                        <h2 className='dispatch-panel-title'>Integrity Checks</h2>
                        <ul className='dispatch-list'>
                            {integrityChecks.map((item) => (
                                <li key={item.title} className='dispatch-list-item'>
                                    <p className='dispatch-item-label'>{item.title}</p>
                                    <p className='dispatch-item-detail'>{item.detail}</p>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className='dispatch-panel dispatch-panel-wide'>
                        <h2 className='dispatch-panel-title'>Handoff Notes</h2>
                        <ul className='dispatch-note-list'>
                            {dispatchNotes.map((note) => (
                                <li key={note}>{note}</li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>
        </main>
    );
}
