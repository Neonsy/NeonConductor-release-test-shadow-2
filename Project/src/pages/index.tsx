const releaseBoard = [
    {
        lane: 'Dev',
        window: 'Now',
        note: 'Incoming features and refactors.',
    },
    {
        lane: 'Prev',
        window: 'Fri 16:00',
        note: 'Promotion candidate validation.',
    },
    {
        lane: 'Main',
        window: 'Mon 10:00',
        note: 'Stable rollout checkpoint.',
    },
];

const pulseMetrics = [
    {
        label: 'Build health',
        value: '97%',
    },
    {
        label: 'Queued work',
        value: '04',
    },
    {
        label: 'Median CI',
        value: '3m 12s',
    },
];

export default function HomePage() {
    return (
        <main className='relative flex w-full flex-1 overflow-hidden bg-[#f5efe3] text-[#1f1d18]'>
            <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0)_38%),radial-gradient(circle_at_14%_14%,rgba(247,139,92,0.3)_0%,transparent_34%),radial-gradient(circle_at_88%_80%,rgba(20,138,153,0.22)_0%,transparent_34%)]' />
            <div className='pointer-events-none absolute top-8 right-8 h-40 w-40 rotate-6 rounded-2xl border border-black/10 bg-[#ffdf90]/55' />
            <div className='pointer-events-none absolute bottom-10 left-10 h-32 w-32 -rotate-12 rounded-full border border-black/10 bg-[#9ee3d8]/45' />

            <section className='relative mx-auto grid w-full max-w-6xl flex-1 gap-5 px-4 py-7 sm:px-8 sm:py-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-7 lg:py-12'>
                <article className='relative rounded-[2rem] border-2 border-black/80 bg-[#fbf8f0]/90 p-6 shadow-[12px_12px_0_0_rgba(12,11,9,0.85)] sm:p-8'>
                    <p className='inline-flex rounded-full border border-black/70 bg-[#202020] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-[#f4efe4] uppercase'>
                        NeonConductor Index
                    </p>

                    <h1 className='font-display mt-5 text-4xl leading-[0.92] font-semibold tracking-tight sm:text-5xl lg:text-[4.2rem]'>
                        Release Desk
                        <br />
                        Daily Brief
                    </h1>

                    <p className='mt-4 max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base'>
                        Updated layout focuses on quick editorial scanning: what ships next, how stable the pipeline is,
                        and where the branch flow stands at a glance.
                    </p>

                    <div className='mt-6 grid gap-3 sm:grid-cols-3'>
                        {pulseMetrics.map((metric) => (
                            <div
                                key={metric.label}
                                className='rounded-2xl border border-black/25 bg-white/75 p-4 transition-transform duration-200 hover:-translate-y-0.5'>
                                <p className='text-[10px] font-semibold tracking-[0.16em] text-black/55 uppercase'>
                                    {metric.label}
                                </p>
                                <p className='font-display mt-2 text-2xl font-semibold'>{metric.value}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <aside className='flex flex-col gap-4'>
                    <section className='rounded-[1.65rem] border-2 border-black/70 bg-[#1c1a16] p-5 text-[#f7f1e6] shadow-[8px_8px_0_0_rgba(12,11,9,0.8)] sm:p-6'>
                        <p className='text-[11px] font-semibold tracking-[0.2em] text-[#f0d395] uppercase'>
                            Lane Schedule
                        </p>
                        <div className='mt-4 space-y-3'>
                            {releaseBoard.map((item) => (
                                <div key={item.lane} className='rounded-xl border border-white/15 bg-white/5 p-3'>
                                    <div className='flex items-center justify-between'>
                                        <p className='font-display text-lg'>{item.lane}</p>
                                        <span className='rounded-full bg-[#f0d395] px-2.5 py-0.5 text-[10px] font-semibold text-black'>
                                            {item.window}
                                        </span>
                                    </div>
                                    <p className='mt-1 text-xs text-[#e9ddc8]'>{item.note}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className='rounded-[1.65rem] border-2 border-black/30 bg-white/70 p-5 shadow-[8px_8px_0_0_rgba(34,30,24,0.3)] sm:p-6'>
                        <p className='text-[11px] font-semibold tracking-[0.2em] text-black/55 uppercase'>
                            Operator Notes
                        </p>
                        <ul className='mt-4 space-y-2 text-sm text-black/80'>
                            <li className='rounded-xl border border-black/10 bg-white/70 px-3 py-2'>
                                Keep PR titles semantic to enable label automation.
                            </li>
                            <li className='rounded-xl border border-black/10 bg-white/70 px-3 py-2'>
                                Add a changeset entry for non-doc modifications.
                            </li>
                            <li className='rounded-xl border border-black/10 bg-white/70 px-3 py-2'>
                                Promote through <code>dev -&gt; prev -&gt; main</code>.
                            </li>
                        </ul>
                    </section>
                </aside>
            </section>
        </main>
    );
}
