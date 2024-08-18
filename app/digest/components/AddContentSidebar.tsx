import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contentOptions = [
  { title: 'Weather', icon: '🌤️' },
  { title: 'Google Calendar', icon: '📅' },
  { title: 'News', icon: '📰' },
];

export function AddContentSidebar() {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-6">Add Content</h2>
      <div className="space-y-4">
        {contentOptions.map((option) => (
          <Card key={option.title} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{option.icon}</span>
                <span className="text-lg font-medium">{option.title}</span>
              </div>
              <Button variant="outline" onClick={() => handleAddContent(option.title)}>
                Add
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function handleAddContent(contentType: string) {
  // This function will be implemented later to handle adding content
  console.log(`Adding ${contentType} content`);
}