export default function Head() {
  return (
    <>
      {/*
        Inline script to apply user's preferred font class immediately on page load.
        This prevents a flash of incorrect font before React hydration.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              // Get saved font from localStorage or default to 'sans'
              const font = localStorage.getItem('font') || 'sans';
              
              // Add corresponding font class to <html> element
              document.documentElement.classList.add('font-' + font);
            } catch (e) {
              // Fail silently if accessing localStorage is not possible
            }
          `,
        }}
      />
    </>
  );
}
