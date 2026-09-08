import BrandLockup from '@/components/ui/BrandLockup';

const variations = [
  {
    name: 'Joined',
    note: 'The default lockup. The J closes into the K for the clearest single-mark read.',
    variant: 'joined' as const,
  },
  {
    name: 'Frame',
    note: 'A slightly more architectural option with a small crossbar that reinforces the shared structure.',
    variant: 'frame' as const,
  },
  {
    name: 'Monoline',
    note: 'The lightest option. Its open lower join gives the mark a more editorial, understated character.',
    variant: 'monoline' as const,
  },
];

export default function LogoPage() {
  return (
    <main className="min-h-screen bg-bg-primary px-6 py-16 text-text-primary sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="section-label">Brand study / KJ-01</p>
        <h1 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Jogie.K logo variations
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-text-secondary">
          Three restrained directions built from the same KJ concept and the portfolio&apos;s cyan-on-navy palette.
        </p>

        <div className="mt-12 divide-y divide-border-subtle border-y border-border-subtle">
          {variations.map((variation, index) => (
            <section key={variation.name} className="grid gap-8 py-8 sm:grid-cols-[1fr_1.5fr] sm:items-center">
              <div>
                <p className="font-mono text-xs text-accent-cyan">0{index + 1}</p>
                <h2 className="mt-2 font-display text-lg font-semibold">{variation.name}</h2>
                <p className="mt-2 max-w-sm text-sm leading-6 text-text-secondary">{variation.note}</p>
              </div>
              <div className="flex min-h-28 items-center rounded border border-border-subtle bg-bg-secondary px-6 sm:px-10">
                <BrandLockup variant={variation.variant} />
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 border-t border-border-subtle pt-6">
          <p className="section-label">Small-size check</p>
          <div className="mt-5 flex flex-wrap items-end gap-8 text-text-secondary">
            {variations.map((variation) => (
              <div key={variation.name} className="space-y-2">
                <BrandLockup variant={variation.variant} compact />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">{variation.name} / 24px</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}