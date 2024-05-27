export default function VideoPlayer({
  src,
  url,
  width,
  height,
  ...props
}: any) {
  return (
    <div>
      <iframe
        src={src || url}
        width={width}
        height={height}
        // frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/*   <p>
        <a href="https://vimeo.com/880621458">video-01</a> from{" "}
        <a href="https://vimeo.com/user210502676">Fabian Vargas</a> on{" "}
        <a href="https://vimeo.com">Vimeo</a>.
      </p> */}
    </div>
  );
}
