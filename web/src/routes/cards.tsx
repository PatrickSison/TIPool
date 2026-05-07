import { useContent } from '#/hooks/useContent';
import type { RiftboundContentDTO } from '#/types';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/cards')({
  component: CardsPage,
});

function CardsPage() {
  const { cards } = useContent();

  return (
    <div>
      <h1>Cards</h1>
      Cards Filter Section
      <div>
        <h2>Cards List Section</h2>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
          {cards.map((card) => (
            <div key={card.id} className="card-item border rounded-lg h-auto">
              <img
                // src={card.art.thumbnailURL}
                src={
                  'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/db48f8c1da0e4f9804ae94398f0864859db0002a-744x1039.png?accountingTag=RB&auto=format&fit=fill&q=80&w=444'
                }
                alt={card.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
