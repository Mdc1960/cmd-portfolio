interface ProjectVideoProps {
  video: string
  title: string
}

export default function ProjectVideo({
  video,
  title,
}: ProjectVideoProps) {
  return (
    <div className="overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-secondary)]">
      <div className="aspect-video w-full">
        <iframe
          src={video}
          title={title}
          className="h-full w-full border-0"
          allow="autoplay"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  )
}