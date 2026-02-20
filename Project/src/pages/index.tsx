const releaseCycle = ['Build', 'Verify', 'Ship'];

export default function HomePage() {
    return (
        <main className='conductor-home'>
            <div aria-hidden className='scene-noise' />
            <div aria-hidden className='scene-aura scene-aura-one' />
            <div aria-hidden className='scene-aura scene-aura-two' />
            <div aria-hidden className='scene-ring' />
            <div aria-hidden className='scene-grid' />
            <div aria-hidden className='scene-scan' />

            <section className='hero-shell'>
                <p className='hero-badge'>NeonConductor / Release Surface</p>
                <h1 className='hero-title'>
                    <span>Quiet copy.</span>
                    <span>Loud motion.</span>
                </h1>
                <p className='hero-sub'>Everything in motion, nothing in the way.</p>

                <ul className='pulse-track' aria-label='release cycle'>
                    {releaseCycle.map((phase) => (
                        <li key={phase} className='pulse-item'>
                            {phase}
                        </li>
                    ))}
                </ul>

                <p className='status-rail' role='status' aria-live='polite'>
                    <span aria-hidden className='status-dot' />
                    RC-12 live now
                </p>
            </section>
        </main>
    );
}
