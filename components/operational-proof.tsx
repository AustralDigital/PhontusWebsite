export type OperationalMetric = {
  label: string;
  value: string;
  source: { title: string; url: string };
  measuredAt: string;
  approvedForPublication: boolean;
};

// Add measured, sourced and publication-approved data when it becomes available.
export const operationalMetrics: OperationalMetric[] = [];

export function OperationalProof({
  metrics = operationalMetrics,
}: {
  metrics?: OperationalMetric[];
}) {
  const verified = metrics.filter(
    (metric) =>
      metric.approvedForPublication &&
      metric.value &&
      metric.source.url &&
      metric.measuredAt,
  );
  if (!verified.length) return null;
  return (
    <section
      className="editorial-section operational-proof"
      aria-label="Phontus in operation"
    >
      <div className="container">
        <dl>
          {verified.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
              <a href={metric.source.url}>{metric.source.title}</a>
              <time dateTime={metric.measuredAt}>{metric.measuredAt}</time>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
