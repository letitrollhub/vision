// Filosofia de design: Modernismo Suíço Executivo. Esta página interna de solução mantém clareza editorial, composição assimétrica, cartões arredondados e conversão consultiva com Montserrat e paleta institucional Vision.
/*
 * Modernismo Suíço Executivo: páginas de soluções traduzem cada frente de consultoria em diagnóstico,
 * método, entregáveis e resultados, preservando autoridade sem excesso visual.
 */
import { ArrowLeft, ArrowRight, BarChart3, CheckCircle2, ClipboardList, Facebook, Instagram, Linkedin, PieChart, Target, Users, Youtube } from "lucide-react";
import { useRoute } from "wouter";

const VISION_LOGO = "https://visionnovo.manus.space/manus-storage/Vision-logomarca_a0c5239c.png";
const STRATEGY_IMAGE = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85";
const PEOPLE_IMAGE = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=85";
const PROCESS_IMAGE = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85";
const FINANCE_IMAGE = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85";

type IconType = typeof Target;
type Solution = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  intro: string;
  promise: string;
  icon: IconType;
  image: string;
  imageAlt: string;
  pillars: { title: string; text: string }[];
  deliverables: string[];
  outcomes: string[];
  closing: string;
};

const solutions: Solution[] = [
  {
    slug: "estrategia-de-negocio",
    title: "Estratégia de Negócio",
    eyebrow: "Direção antes da execução",
    headline: "Transforme visão empresarial em prioridades claras, metas acompanháveis e decisões consistentes.",
    intro: "A frente de Estratégia de Negócio organiza diagnóstico, planejamento e plano tático para que a empresa deixe de reagir ao mercado e passe a conduzir seu crescimento com método.",
    promise: "O mapa que transforma a visão em realidade.",
    icon: Target,
    image: STRATEGY_IMAGE,
    imageAlt: "Executivos em reunião de planejamento estratégico com quadro e prioridades de negócio",
    pillars: [
      { title: "Diagnóstico estratégico", text: "Leitura integrada do modelo de negócio, posicionamento, maturidade de gestão e desafios prioritários." },
      { title: "Planejamento aplicável", text: "Definição de objetivos, metas, indicadores e iniciativas com conexão direta à rotina de decisão." },
      { title: "Governança de execução", text: "Cadência de acompanhamento para transformar intenção estratégica em progresso mensurável." },
    ],
    deliverables: ["Diagnóstico organizacional", "Mapa estratégico", "Plano tático de execução", "Indicadores de acompanhamento", "Rituais de governança"],
    outcomes: ["Clareza de direção", "Priorização executiva", "Decisões menos reativas", "Crescimento com consistência"],
    closing: "Se a empresa sabe onde quer chegar, mas ainda não transformou essa visão em plano de gestão, esta é a solução indicada para iniciar a mudança.",
  },
  {
    slug: "pessoas-excelentes",
    title: "Pessoas Excelentes",
    eyebrow: "Cultura, liderança e desempenho",
    headline: "Desenvolva equipes, lideranças e rotinas de performance compatíveis com a estratégia do negócio.",
    intro: "Pessoas Excelentes apoia empresas que precisam alinhar talentos, cultura, responsabilidades e indicadores de desempenho para sustentar crescimento sem depender apenas dos sócios.",
    promise: "Motive e desenvolva o bem mais precioso da empresa.",
    icon: Users,
    image: PEOPLE_IMAGE,
    imageAlt: "Equipe corporativa em dinâmica de liderança, cultura e desenvolvimento de pessoas",
    pillars: [
      { title: "Estrutura de papéis", text: "Organização de responsabilidades, liderança e critérios de atuação para reduzir ruídos na execução." },
      { title: "Desenvolvimento de liderança", text: "Apoio à formação de líderes capazes de acompanhar metas, orientar equipes e tomar decisões melhores." },
      { title: "Gestão de desempenho", text: "Indicadores, avaliações e rotinas que tornam evolução, reconhecimento e correção mais claros." },
    ],
    deliverables: ["Organograma funcional", "Critérios de desempenho", "Rotinas de liderança", "Plano de desenvolvimento", "Indicadores de pessoas"],
    outcomes: ["Equipes mais alinhadas", "Lideranças mais preparadas", "Menos dependência dos fundadores", "Cultura orientada a resultado"],
    closing: "Quando a estratégia depende de pessoas preparadas para executá-la, a gestão de talentos deixa de ser área de apoio e passa a ser frente central de crescimento.",
  },
  {
    slug: "processos-eficazes",
    title: "Processos Eficazes",
    eyebrow: "Operação visível e replicável",
    headline: "Padronize rotinas críticas para reduzir improvisos, aumentar eficiência e preservar qualidade durante o crescimento.",
    intro: "Processos Eficazes transforma conhecimento tácito em fluxos documentados, responsabilidades claras e pontos de controle que ajudam a empresa a operar com previsibilidade.",
    promise: "Máximo desempenho operacional com método.",
    icon: ClipboardList,
    image: PROCESS_IMAGE,
    imageAlt: "Profissionais acompanhando processos, operação e melhoria contínua em ambiente produtivo",
    pillars: [
      { title: "Mapeamento da operação", text: "Identificação da cadeia de valor, gargalos, retrabalhos, dependências e fluxos críticos." },
      { title: "Padronização inteligente", text: "Documentação de processos, POPs e acordos operacionais sem burocratizar a rotina." },
      { title: "Melhoria contínua", text: "Monitoramento de não conformidades, indicadores e planos de ação para evolução recorrente." },
    ],
    deliverables: ["Cadeia de valor", "Mapas de processo", "POPs", "Matriz de responsabilidades", "Planos de melhoria"],
    outcomes: ["Menos retrabalho", "Operação documentada", "Qualidade mais consistente", "Escala com controle"],
    closing: "Empresas crescem com mais segurança quando a operação deixa de depender apenas da memória das pessoas e passa a funcionar por método.",
  },
  {
    slug: "inteligencia-financeira",
    title: "Inteligência Financeira",
    eyebrow: "Decisão financeira com clareza",
    headline: "Conecte caixa, orçamento, metas e indicadores para tomar decisões financeiras com mais previsibilidade.",
    intro: "Inteligência Financeira organiza a leitura econômica da empresa para que líderes acompanhem margem, fluxo de caixa, metas e investimentos com método e visão de futuro.",
    promise: "Do potencial ao progresso sustentável.",
    icon: PieChart,
    image: FINANCE_IMAGE,
    imageAlt: "Análise financeira empresarial com relatórios, orçamento e indicadores de desempenho",
    pillars: [
      { title: "Leitura histórica", text: "Análise de receitas, despesas, margem, caixa e comportamento financeiro para entender padrões e riscos." },
      { title: "Orçamento e metas", text: "Construção de metas financeiras, orçamento e projeções conectadas à realidade operacional." },
      { title: "Rotina de decisão", text: "Indicadores e cadência de acompanhamento para transformar números em escolhas de gestão." },
    ],
    deliverables: ["Série histórica", "Fluxo de caixa", "Orçamento empresarial", "Metas financeiras", "Indicadores executivos"],
    outcomes: ["Previsibilidade de caixa", "Margem acompanhável", "Melhor alocação de recursos", "Decisões baseadas em dados"],
    closing: "Sem clareza financeira, crescimento pode aumentar complexidade sem gerar resultado. Com método, os números passam a orientar decisões sustentáveis.",
  },
];

export default function SolutionPage() {
  const [, params] = useRoute("/solucoes/:slug");
  const solution = solutions.find((item) => item.slug === params?.slug) ?? solutions[0];
  const Icon = solution.icon;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#189cd9]/20 selection:text-[#373d43]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#373d43]/10 bg-[#FFFFFF]/90 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between gap-6">
          <a href="/" className="group flex items-center" aria-label="Voltar para a página inicial da Vision Consultores">
            <img src={VISION_LOGO} alt="Vision Consultores" className="h-12 w-auto max-w-[172px] object-contain transition duration-300 group-hover:opacity-85 sm:h-14" />
          </a>
          <a href="/" className="btn-secondary"><ArrowLeft className="size-4" /> Voltar ao site</a>
        </div>
      </header>

      <main className="pt-28">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 swiss-grid opacity-70" />
          <div className="container relative grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="eyebrow">{solution.eyebrow}</p>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#373d43] sm:text-6xl">{solution.title}</h1>
              <p className="mt-6 text-2xl font-medium leading-8 text-[#189cd9]">{solution.promise}</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#373d43]">{solution.headline}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/#contato" className="btn-primary group">Agendar diagnóstico <ArrowRight className="size-4 transition group-hover:translate-x-1" /></a>
                <a href="/#solucoes" className="btn-secondary">Ver todas as soluções</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-x-8 top-8 h-full bg-[#373d43]" />
              <img src={solution.image} alt={solution.imageAlt} className="relative aspect-[4/3] w-full object-cover shadow-[0_28px_70px_rgba(55,61,67,0.20)]" />
              <div className="absolute bottom-5 left-5 grid size-20 place-items-center bg-[#FFFFFF]/94 text-[#189cd9] shadow-xl backdrop-blur"><Icon className="size-9" /></div>
            </div>
          </div>
        </section>

        <section className="container py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">Como a Vision atua</p>
              <h2 className="section-title mt-4">Método aplicado à realidade da empresa.</h2>
              <p className="mt-6 text-lg leading-8 text-[#9b9b9b]">{solution.intro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {solution.pillars.map((pillar) => (
                <article key={pillar.title} className="border border-[#373d43]/12 bg-[#FFFFFF] p-6 shadow-[0_18px_55px_rgba(55,61,67,0.07)]">
                  <CheckCircle2 className="size-6 text-[#189cd9]" />
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-[#373d43]">{pillar.title}</h3>
                  <p className="mt-3 leading-7 text-[#9b9b9b]">{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#cbe9f6] py-20">
          <div className="container grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Entregáveis</p>
              <h2 className="section-title mt-4">O que a empresa passa a ter em mãos.</h2>
              <div className="mt-8 grid gap-3">
                {solution.deliverables.map((item) => <div key={item} className="border border-[#373d43]/12 bg-white/80 p-4 font-medium text-[#373d43]">{item}</div>)}
              </div>
            </div>
            <div>
              <p className="eyebrow">Resultados esperados</p>
              <h2 className="section-title mt-4">O que muda na gestão.</h2>
              <div className="mt-8 grid gap-3">
                {solution.outcomes.map((item) => <div key={item} className="flex items-center gap-3 border border-[#373d43]/12 bg-[#FFFFFF] p-4 font-medium text-[#373d43]"><BarChart3 className="size-5 text-[#189cd9]" />{item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="container py-20">
          <div className="grid overflow-hidden border border-[#373d43]/12 bg-[#373d43] lg:grid-cols-[1fr_0.8fr]">
            <div className="p-8 text-[#FFFFFF] sm:p-12">
              <p className="eyebrow-dark">Próxima decisão</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em]">{solution.closing}</h2>
            </div>
            <div className="bg-[#FFFFFF] p-8 sm:p-12">
              <p className="text-lg leading-8 text-[#9b9b9b]">A primeira conversa ajuda a identificar maturidade, prioridades e caminhos práticos para transformar diagnóstico em ação.</p>
              <a href="/#contato" className="btn-primary mt-8">Agendar diagnóstico <ArrowRight className="size-4" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#373d43]/10 bg-[#cbe9f6] py-10">
        <div className="container flex flex-col gap-7 text-sm text-[#6f7780] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <img src={VISION_LOGO} alt="Vision Consultores" className="h-10 w-auto max-w-[150px] object-contain" />
              <p>Visão, método e decisão.</p>
            </div>
            <div className="flex items-center gap-3" aria-label="Redes sociais da Vision Consultores">
              <a className="social-link" href="https://www.linkedin.com/company/consultores-vision" target="_blank" rel="noreferrer" aria-label="LinkedIn da Vision Consultores"><Linkedin className="size-4" aria-hidden="true" /></a>
              <a className="social-link" href="https://www.instagram.com/consultores_vision/" target="_blank" rel="noreferrer" aria-label="Instagram da Vision Consultores"><Instagram className="size-4" aria-hidden="true" /></a>
              <a className="social-link" href="https://www.facebook.com/consultoresvision" target="_blank" rel="noreferrer" aria-label="Facebook da Vision Consultores"><Facebook className="size-4" aria-hidden="true" /></a>
              <a className="social-link" href="https://www.youtube.com/@VisionConsultores001" target="_blank" rel="noreferrer" aria-label="YouTube da Vision Consultores"><Youtube className="size-4" aria-hidden="true" /></a>
            </div>
          </div>
          <p>Copyright © 2026 Vision Consultores | Desenvolvido por <a href="https://letitroll.com.br" target="_blank" rel="noreferrer" className="font-semibold text-[#373d43] underline decoration-[#189cd9]/45 underline-offset-4 transition hover:text-[#189cd9]">Let it Roll Agência</a></p>
        </div>
      </footer>
    </div>
  );
}
