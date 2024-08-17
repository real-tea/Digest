interface DigestItemProps {
    title: string;
    children: React.ReactNode;
  }
  
  export function DigestItem({ title, children }: DigestItemProps) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {children}
      </div>
    );
  }