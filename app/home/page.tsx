import PageContainer from "@/components/page-container";
import BoardCard from "./_components/board-card";

const boards = [
  {
    id: 1,
    theme: 'volcano',
    title: 'prueba'
  },
  {
    id: 2,
    theme: 'crystal',
    title: 'prueba con alien'
  },
  {
    id: 3,
    theme: 'rainbow',
    title: 'prueba con rosa'
  },
  {
    id: 4,
    theme: 'blue',
    title: 'prueba con azul'
  },
];

export default function HomePage({}) {
  return (
    <PageContainer titulo="Tus tableros">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
        {boards.map(b => (
          <BoardCard
            key={b.id}
            theme={b.theme}
            title={b.title}
          />
        ))}
      </div>
    </PageContainer>
  );
}
