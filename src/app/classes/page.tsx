import ClassCard from "@/src/components/classes/class-card";
import ContentEditor from "@/src/components/classes/content-editor";

export default function ClassesPage() {
  // Sample class data
  const classes = [
    { id: 1, name: "Mathematics", lectureCount: 12, notesCount: 5 },
    { id: 2, name: "Physics", lectureCount: 10, notesCount: 7 },
    { id: 3, name: "Chemistry", lectureCount: 8, notesCount: 4 },
    { id: 4, name: "Biology", lectureCount: 15, notesCount: 6 },
  ];

  return (
    <div className="flex flex-col space-y-4 p-8 pt-6 h-full">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Classes</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
        {classes.map((classData) => (
          <ClassCard key={classData.id} classData={classData} />
        ))}
      </div>
      <div className="flex-grow">
        <ContentEditor />
      </div>
    </div>
  );
}
