const statusTiles = [
    { label: 'Build', value: 'Passing', tone: 'stable' },
    { label: 'Smoke', value: 'Queued', tone: 'watch' },
    { label: 'Crash Slope', value: 'Flat', tone: 'stable' },
    { label: 'Rollback', value: 'Ready', tone: 'stable' },
];

const launchRail = [
    { at: '18:00 UTC', title: 'Candidate Packaging', text: 'Compile, sign, and archive installers for release.' },
    { at: '19:15 UTC', title: 'Verification Sweep', text: 'Run update, startup, and permission safety checks.' },
    { at: '20:40 UTC', title: 'Promotion Review', text: 'Confirm no crash drift before opening stable rollout.' },
];

const guardrails = [
    'No scope additions after candidate packaging without rollback proof.',
    'Any failed smoke test must include owner and retry timestamp.',
    'Stable rollout can proceed only with posted handoff summary.',
];

const markers = ['Industrial palette', 'Fast scan layout', 'Operator-first hierarchy'];

export default function HomePage() {
    return (
        <main className='forge-site'>
            <div aria-hidden className='forge-ambient forge-ambient-left' />
            <div aria-hidden className='forge-ambient forge-ambient-right' />
            <div aria-hidden className='forge-grid' />

            <section className='forge-shell'>
                <header className='forge-header'>
                    <p className='forge-kicker'>NeonConductor / Release Forge</p>
                    <h1 className='forge-title'>Operate the release lane from one board.</h1>
                    <p className='forge-subtitle'>
                        A compact index for teams shipping desktop builds under tight timing and low-noise workflows.
                    </p>

                    <div className='forge-marker-row'>
                        {markers.map((item) => (
                            <span key={item} className='forge-marker'>
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className='forge-actions'>
                        <button type='button' className='forge-action forge-action-primary'>
                            Open Shift Brief
                        </button>
                        <a href='#launch-rail' className='forge-action forge-action-muted'>
                            View Launch Rail
                        </a>
                    </div>
                </header>

                <div className='forge-main-grid'>
                    <article className='forge-panel'>
                        <h2 className='forge-panel-title'>Status Tiles</h2>
                        <ul className='forge-tile-grid'>
                            {statusTiles.map((tile) => (
                                <li key={tile.label} className={`forge-tile forge-tile-${tile.tone}`}>
                                    <p className='forge-tile-label'>{tile.label}</p>
                                    <p className='forge-tile-value'>{tile.value}</p>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article id='launch-rail' className='forge-panel'>
                        <h2 className='forge-panel-title'>Launch Rail</h2>
                        <ol className='forge-rail-list'>
                            {launchRail.map((step) => (
                                <li key={step.title} className='forge-rail-item'>
                                    <p className='forge-rail-time'>{step.at}</p>
                                    <p className='forge-rail-title'>{step.title}</p>
                                    <p className='forge-rail-text'>{step.text}</p>
                                </li>
                            ))}
                        </ol>
                    </article>

                    <article className='forge-panel forge-panel-wide'>
                        <h2 className='forge-panel-title'>Guardrails</h2>
                        <ul className='forge-rule-list'>
                            {guardrails.map((rule) => (
                                <li key={rule}>{rule}</li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>
        </main>
    );
}
