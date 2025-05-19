// components/Blog/Heading.tsx
export const Heading = ({ level, children }: { level: number; children: React.ReactNode }) => {
    switch (level) {
      case 1:
        return <h1 className="text-4xl font-bold my-6">{children}</h1>;
      case 2:
        return <h2 className="text-3xl font-semibold my-5">{children}</h2>;
      case 3:
        return <h3 className="text-2xl font-medium my-4">{children}</h3>;
      default:
        return <h4 className="text-xl font-normal my-3">{children}</h4>;
    }
  };
  
  // components/Blog/Paragraph.tsx
  export const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <p className="text-lg text-gray-700 leading-relaxed my-4">{children}</p>
  );
  
  // components/Blog/Link.tsx
  export const Link = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">
      {children}
    </a>
  );
  
  // components/Blog/Image.tsx
  export const Image = ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} className="my-6 w-full h-auto rounded-lg shadow-md" />
  );
  
  // components/Blog/List.tsx
  export const List = ({ items }: { items: string[] }) => (
    <ul className="list-disc list-inside pl-5 text-lg text-gray-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
  