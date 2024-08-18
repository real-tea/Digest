import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DigestItemProps {
  title: string;
  children: React.ReactNode;
}

export function DigestItem({ title, children }: DigestItemProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}