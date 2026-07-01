// Static export can't perform a server-side redirect, so `/` (index.html)
// bounces to the default locale via an HTML meta refresh.
export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/pt" />
      <p>
        Redirecting to <a href="/pt">/pt</a>…
      </p>
    </>
  )
}
