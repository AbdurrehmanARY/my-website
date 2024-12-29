export function TypographyP({text}) {
    return (
      <p className="leading-3 [&:not(:first-child)]:mt-6">
       {text}
      </p>
    )
  }