import { GlowCard } from '@/components/ui/spotlight-card';

// Демонстрационная страница компонента GlowCard
export function SpotlightDemo() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center gap-12 bg-neutral-950 py-16 px-4">
      <h1 className="text-white text-3xl font-bold tracking-tight">
        Spotlight Card — демо
      </h1>

      {/* Три карточки в ряд с разными цветами */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-8">
        {/* Синяя карточка */}
        <GlowCard glowColor="blue" size="md">
          <div className="flex flex-col gap-2 text-white">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop"
              alt="Ученики за партами"
              className="rounded-xl object-cover w-full h-32"
            />
            <span className="font-semibold text-base">Планирование занятий</span>
            <span className="text-sm text-white/60">Расписание, темы, прогресс</span>
          </div>
        </GlowCard>

        {/* Фиолетовая карточка */}
        <GlowCard glowColor="purple" size="md">
          <div className="flex flex-col gap-2 text-white">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
              alt="Тетрадь с записями"
              className="rounded-xl object-cover w-full h-32"
            />
            <span className="font-semibold text-base">Учёт оплат</span>
            <span className="text-sm text-white/60">Счета, история, баланс</span>
          </div>
        </GlowCard>

        {/* Зелёная карточка */}
        <GlowCard glowColor="green" size="md">
          <div className="flex flex-col gap-2 text-white">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
              alt="Команда за работой"
              className="rounded-xl object-cover w-full h-32"
            />
            <span className="font-semibold text-base">Ученики</span>
            <span className="text-sm text-white/60">Профили и контакты</span>
          </div>
        </GlowCard>
      </div>

      <p className="text-white/40 text-sm">
        Наведи курсор на карточки — граница светится вслед за мышью
      </p>
    </div>
  );
}
