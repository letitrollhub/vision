// Filosofia de design: Modernismo Suíço Executivo. Esta página usa composição editorial assimétrica, grelha precisa, tipografia de relatório estratégico e CTAs orientados à decisão. Pergunta-guia: esta escolha reforça ou dilui clareza, método, autoridade e conversão consultiva?
/*
 * Modernismo Suíço Executivo: a Home prioriza clareza, assimetria editorial, contraste sóbrio
 * e uso disciplinado da logomarca oficial Vision em pontos institucionais de alta visibilidade.
 */
import { type FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Factory,
  Gauge,
  LineChart,
  Menu,
  Network,
  PieChart,
  ShieldCheck,
  Target,
  Users,
  X,
} from "lucide-react";

const VISION_LOGO = "https://visionnovo.manus.space/manus-storage/Vision-logomarca_a0c5239c.png";
const HERO_IMAGE = "https://visionnovo.manus.space/manus-storage/hero-gestao-dados_83c8cc00.webp";
const PLATFORM_IMAGE = "https://visionnovo.manus.space/manus-storage/aigest-plataforma_c4b793be.png";
const AIGEST_LOGO = "https://visionnovo.manus.space/manus-storage/aigest-logo_e8dcca69.png";
const METHOD_IMAGE = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85";

const navItems = [
  { label: "Método", href: "#metodo" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Nosso time", href: "#time" },
];

const pains = [
  "Crescimento sem processos claros",
  "Decisões baseadas apenas no feeling",
  "Falta de indicadores e dados confiáveis",
  "Dificuldade para escalar a operação",
  "Gestão financeira sem previsibilidade",
];

const services = [
  {
    title: "Estratégia de Negócio",
    promise: "O mapa que transforma a visão em realidade.",
    icon: Target,
    focus: "Diagnóstico da gestão, plano tático e plano estratégico para alinhar direção, prioridades e execução.",
    outcomes: ["Visão futura", "Decisões assertivas", "Performance otimizada"],
    href: "/solucoes/estrategia-de-negocio",
  },
  {
    title: "Pessoas Excelentes",
    promise: "Motive e desenvolva o bem mais precioso da empresa.",
    icon: Users,
    focus: "Recrutamento, cultura, liderança, avaliação de desempenho, desenvolvimento e indicadores de performance.",
    outcomes: ["Talentos alinhados", "Liderança estratégica", "Retenção e motivação"],
    href: "/solucoes/pessoas-excelentes",
  },
  {
    title: "Processos Eficazes",
    promise: "Máximo desempenho operacional com método.",
    icon: ClipboardList,
    focus: "Organograma funcional, cadeia de valor, mapeamento, POPs e tratamento de não conformidades.",
    outcomes: ["Padronização", "Redução de ineficiências", "Operação documentada"],
    href: "/solucoes/processos-eficazes",
  },
  {
    title: "Inteligência Financeira",
    promise: "Do potencial ao progresso sustentável.",
    icon: PieChart,
    focus: "Série histórica, orçamento, metas, fluxo de caixa, cultura financeira e monitoramento contínuo.",
    outcomes: ["Fluxo de caixa otimizado", "Maximização de lucros", "Alocação de recursos"],
    href: "/solucoes/inteligencia-financeira",
  },
];

const methodSteps = [
  { n: "01", title: "Diagnosticar", text: "Análise profunda da gestão atual para transformar complexidade em visão clara." },
  { n: "02", title: "Priorizar", text: "Definição dos problemas críticos e dos planos de ação com maior impacto no negócio." },
  { n: "03", title: "Estruturar", text: "Desenho de processos, indicadores, rotinas, pessoas e instrumentos de gestão." },
  { n: "04", title: "Implementar", text: "Acompanhamento próximo para tirar a estratégia do papel e criar execução consistente." },
  { n: "05", title: "Medir", text: "Monitoramento de resultados por KPIs, plataforma de gestão e ciclos de melhoria." },
];

const segments = [
  {
    id: "telecom",
    href: "/segmentos/provedores-e-telecom",
    title: "Provedores e telecom",
    icon: Network,
    clients: "Net Planet, Network, Conect Mais, GNA Telecom, Veloznet, Sofway, Microrcim",
    challenge: "Crescer com atendimento, expansão regional, indicadores, processos técnicos e margem sob controle.",
    solution: "Estratégia, Processos, Inteligência Financeira e Plataforma de Gestão.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Ambiente tecnológico com infraestrutura digital para provedores e telecom",
  },
  {
    id: "industria",
    href: "/segmentos/industria-e-operacoes",
    title: "Indústria e operações",
    icon: Factory,
    clients: "Meira Diesel, Norte de Minas, Extra e clientes industriais a validar",
    challenge: "Aumentar produtividade, reduzir custos, documentar rotinas e dar previsibilidade à operação.",
    solution: "Processos Eficazes, Inteligência Financeira e gestão por indicadores.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Operação industrial com profissionais analisando processos e produtividade",
  },
  {
    id: "servicos",
    href: "/segmentos/servicos-empresariais",
    title: "Serviços empresariais",
    icon: BriefcaseBusiness,
    clients: "Resolve, Smart, NV7, Faria, MP, MC e demais clientes de serviços a validar",
    challenge: "Profissionalizar a gestão, organizar lideranças, rotinas, metas e tomada de decisão.",
    solution: "Estratégia de Negócio, Pessoas Excelentes e Processos Eficazes.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Equipe de serviços empresariais em reunião de planejamento e atendimento",
  },
  {
    id: "saude",
    href: "/segmentos/saude-e-cuidado",
    title: "Saúde e cuidado",
    icon: ShieldCheck,
    clients: "Clinort, Cuidar e organizações relacionadas a validar",
    challenge: "Padronizar atendimento, gerir equipes, controlar indicadores e melhorar experiência do cliente.",
    solution: "Processos, Pessoas, Inteligência Financeira e Plataforma.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Profissional de saúde acompanhando indicadores e atendimento ao paciente",
  },
  {
    id: "varejo",
    href: "/segmentos/varejo-moveis-e-distribuicao",
    title: "Varejo, móveis e distribuição",
    icon: Gauge,
    clients: "Diniz, JB Móveis e empresas de varejo a validar",
    challenge: "Controlar margem, estoque, vendas, atendimento e rotina operacional sem perder velocidade.",
    solution: "Financeiro, Processos e Pessoas com acompanhamento de resultados.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Ambiente de varejo organizado com gestão de produtos e atendimento",
  },
  {
    id: "tecnologia",
    href: "/segmentos/tecnologia-e-negocios-digitais",
    title: "Tecnologia e negócios digitais",
    icon: LineChart,
    clients: "Next, Sofway, NV7 e empresas digitais a validar",
    challenge: "Alinhar inovação, produto, suporte, comercial e finanças a uma rotina executiva clara.",
    solution: "Tecnologia, Estratégia, Processos e Indicadores Executivos.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Equipe de tecnologia trabalhando em produto digital e gestão de negócios",
  },
  {
    id: "alimentos",
    href: "/segmentos/alimentos-e-operacao-recorrente",
    title: "Alimentos e operação recorrente",
    icon: BarChart3,
    clients: "Clientes específicos a validar com a Vision",
    challenge: "Estruturar custos, qualidade, padronização, produtividade e decisão baseada em dados.",
    solution: "Inteligência Financeira, Processos Eficazes e Plataforma de Gestão.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Operação de alimentos com padronização, qualidade e rotina produtiva",
  },
];

const clientNames = [
  "Smart", "Norte de Minas", "NV7", "Resolve", "Net Planet", "Network", "Diniz", "Faria", "JB Móveis", "Clinort", "Cuidar", "Conect Mais", "Zavaz", "Microrcim", "Uvale", "Ayê", "Conecta", "Sofway", "Meira Diesel", "Next", "GNA Telecom", "Veloznet",
];

const insightCards = [
  "Empresas também precisam de exames regulares.",
  "Planejamento evita erros caros quando se torna rotina de decisão.",
  "O mercado de provedores vive um momento que exige gestão profissional.",
];

const teamMembers = [
  { name: "Tainá", image: "https://visionnovo.manus.space/manus-storage/taina_a1792f78.webp" },
  { name: "Weligton", image: "https://visionnovo.manus.space/manus-storage/weligton_8196c6fb.webp" },
  { name: "Renato Costa", image: "https://visionnovo.manus.space/manus-storage/renato-costa_dd1da648.webp" },
  { name: "Marioth", image: "https://visionnovo.manus.space/manus-storage/marioth_678ad519.webp" },
  { name: "Deborah", image: "https://visionnovo.manus.space/manus-storage/deborah_87a471c9.webp" },
  { name: "Ricardo", image: "https://visionnovo.manus.space/manus-storage/ricardo_48f1e6c8.webp" },
  { name: "Filipe", image: "https://visionnovo.manus.space/manus-storage/filipe_44d70f0f.webp" },
  { name: "Sandro", image: "https://visionnovo.manus.space/manus-storage/sandro_56916d08.webp" },
  { name: "Lucas", image: "https://visionnovo.manus.space/manus-storage/lucas_ce465012.webp" },
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState(segments[0].id);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    segment: "",
    challenge: "",
  });
  const currentSegment = useMemo(() => segments.find((item) => item.id === activeSegment) ?? segments[0], [activeSegment]);
  const ActiveIcon = currentSegment.icon;
  const completedRequiredFields = [formData.name, formData.company, formData.email, formData.segment, formData.challenge].filter((value) => value.trim().length > 0).length;
  const formProgress = Math.round((completedRequiredFields / 5) * 100);
  const canSubmit = completedRequiredFields === 5 && formStatus !== "sending";

  function updateFormField(field: keyof typeof formData, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
    if (formStatus === "sent") setFormStatus("idle");
  }

  function handleDiagnosticSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;
    setFormStatus("sending");
    window.setTimeout(() => setFormStatus("sent"), 850);
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#189cd9]/20 selection:text-[#373d43]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#373d43]/10 bg-[#FFFFFF]/88 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between gap-6">
          <a href="#topo" className="group flex items-center" aria-label="Vision Consultores">
            <img src={VISION_LOGO} alt="Vision Consultores" className="h-12 w-auto max-w-[172px] object-contain transition duration-300 group-hover:opacity-85 sm:h-14" />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <button key={item.href} onClick={() => scrollToSection(item.href)} className="text-sm font-medium text-[#373d43] transition hover:text-[#373d43]">
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={() => scrollToSection("#contato")} className="btn-primary">Agendar diagnóstico</button>
          </div>

          <button className="grid size-11 place-items-center border border-[#373d43]/15 bg-white/60 lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Abrir menu">
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#373d43]/10 bg-[#FFFFFF] px-4 py-5 lg:hidden">
            <div className="container grid gap-3">
              {navItems.map((item) => (
                <button key={item.href} onClick={() => { scrollToSection(item.href); setMenuOpen(false); }} className="flex items-center justify-between border border-[#373d43]/10 bg-white/70 px-4 py-3 text-left text-sm font-semibold text-[#373d43]">
                  {item.label}<ChevronRight className="size-4" />
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="topo">
        <section className="relative overflow-hidden pt-28 lg:pt-32">
          <div className="absolute inset-0 swiss-grid opacity-70" />
          <div className="container relative grid min-h-[760px] items-center gap-10 pb-10 pt-0 lg:grid-cols-[0.93fr_1.07fr] lg:pb-16 lg:pt-0">
            <div className="relative z-10 max-w-3xl">
              <p className="eyebrow">Consultoria estratégica em gestão, tecnologia e crescimento</p>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#373d43] sm:text-6xl lg:text-7xl">
                Gestão profissional para empresas que precisam crescer com método.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#373d43] sm:text-xl">
                Transformamos diagnóstico, processos, pessoas, finanças e tecnologia em decisões claras, execução consistente e resultados mensuráveis.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => scrollToSection("#contato")} className="btn-primary group">
                  Agendar diagnóstico <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </button>
                <button onClick={() => scrollToSection("#solucoes")} className="btn-secondary">Conhecer soluções</button>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-[#373d43]/12 py-5">
                <div>
                  <span className="metric">+22</span>
                  <span className="metric-label">clientes mapeados</span>
                </div>
                <div className="border-x border-[#373d43]/12 px-4">
                  <span className="metric">5</span>
                  <span className="metric-label">frentes de gestão</span>
                </div>
                <div className="pl-4">
                  <span className="metric">7</span>
                  <span className="metric-label">segmentos mapeados</span>
                </div>
              </div>
            </div>
            <div className="relative min-h-[460px] lg:min-h-[620px]">
              <div className="absolute inset-x-0 top-8 h-[78%] bg-[#373d43] shadow-2xl lg:-right-20 lg:left-10" />
              <img src={HERO_IMAGE} alt="Executivo analisando indicadores digitais de crescimento e performance empresarial" className="relative ml-auto h-[520px] w-full object-cover shadow-[0_28px_70px_rgba(55,61,67,0.22)] lg:h-[660px]" />
              <div className="absolute bottom-4 left-0 max-w-xs border border-white/30 bg-[#FFFFFF]/92 p-5 shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.26em] text-[#189cd9]">Método Vision</p>
                <p className="mt-2 font-display text-2xl font-semibold leading-tight text-[#373d43]">Visão, método e direção para decisões empresariais.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#373d43]/10 bg-[#373d43] py-6 text-[#FFFFFF]">
          <div className="container flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-display text-2xl font-semibold">Nossa missão é clara: capacitar empresas a atingirem seu potencial máximo por meio de gestão profissional.</p>
            <p className="max-w-xl text-sm leading-6 text-[#cbe9f6]">A Vision nasceu para levar ferramentas e estratégias a empresários que desejam estabelecer objetivos certos, desenvolver processos eficazes, capacitar pessoas e alcançar resultados tangíveis.</p>
          </div>
        </section>

        <section className="container py-24" id="metodo">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="eyebrow">Cientistas da Gestão</p>
              <h2 className="section-title mt-4">Abordagem aplicada, rigorosa e orientada ao resultado.</h2>
              <p className="mt-6 text-lg leading-8 text-[#9b9b9b]">A Vision combina conhecimento sólido com metodologia operacional para substituir improviso por clareza, eficiência e eficácia. O objetivo não é apenas diagnosticar: é apoiar a decisão e acompanhar a execução.</p>
              <img src={METHOD_IMAGE} alt="Consultores trabalhando em diagnóstico empresarial com equipe em sala corporativa" className="mt-9 aspect-[3/2] w-full object-cover shadow-xl" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-[#373d43]/12 bg-[#cbe9f6] p-7 md:col-span-2">
                <p className="text-sm uppercase tracking-[0.26em] text-[#189cd9]">O que normalmente trava o crescimento</p>
                <div className="mt-5 grid gap-3 md:grid-cols-5">
                  {pains.map((pain) => (
                    <div key={pain} className="border-l-2 border-[#189cd9] bg-white/60 p-4 text-sm font-medium leading-5 text-[#373d43]">{pain}</div>
                  ))}
                </div>
              </div>
              {methodSteps.map((step) => (
                <article key={step.n} className="group border border-[#373d43]/12 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <span className="font-mono text-sm text-[#189cd9]">{step.n}</span>
                  <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-[#373d43]">{step.title}</h3>
                  <p className="mt-3 leading-7 text-[#9b9b9b]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="solucoes" className="bg-[#cbe9f6] py-24">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="eyebrow">Soluções empresariais</p>
                <h2 className="section-title mt-4">Serviços preservados, reorganizados para decisão rápida.</h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-[#9b9b9b]">A proposta organiza os conteúdos atuais em frentes comparáveis. Cada solução responde a uma dor de gestão, explicita a entrega e aponta o resultado esperado para o negócio.</p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <a key={service.title} href={service.href} className="service-card group block no-underline" style={{ animationDelay: `${index * 90}ms` }}>
                    <div className="service-card-accent" aria-hidden="true" />
                    <div className="flex items-start justify-between gap-4">
                      <span className="service-icon-shell">
                        <Icon className="size-7 text-[#189cd9] transition duration-500 group-hover:scale-110 group-hover:text-[#373d43]" />
                      </span>
                      <span className="service-kicker">Vision</span>
                    </div>
                    <h3 className="mt-8 font-display text-3xl font-semibold leading-tight tracking-tight text-[#373d43] transition duration-500 group-hover:translate-x-1">{service.title}</h3>
                    <p className="mt-3 font-medium text-[#189cd9] transition duration-500 group-hover:text-[#189cd9]">{service.promise}</p>
                    <p className="mt-5 min-h-28 leading-7 text-[#9b9b9b] transition duration-500 group-hover:text-[#373d43]">{service.focus}</p>
                    <div className="mt-6 space-y-2">
                      {service.outcomes.map((outcome) => (
                        <div key={outcome} className="service-outcome"><CheckCircle2 className="size-4 text-[#189cd9] transition duration-500 group-hover:text-[#189cd9]" />{outcome}</div>
                      ))}
                    </div>
                    <div className="service-card-cta" aria-hidden="true">
                      <span>Ver aplicação</span>
                      <ArrowRight className="size-4" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="segmentos" className="container py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow">Soluções por segmento</p>
              <h2 className="section-title mt-4">O visitante encontra rapidamente o contexto do próprio negócio.</h2>
              <p className="mt-6 text-lg leading-8 text-[#9b9b9b]">Os segmentos foram estruturados a partir dos clientes apresentados no site atual. Alguns enquadramentos devem ser validados internamente antes da publicação final, mas o modelo já está pronto para WordPress.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {segments.map((segment) => (
                  <button key={segment.id} onClick={() => setActiveSegment(segment.id)} className={`segment-tab ${activeSegment === segment.id ? "segment-tab-active" : ""}`}>
                    <segment.icon className="size-5" />
                    <span>{segment.title}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={currentSegment.image} alt={currentSegment.imageAlt} className="aspect-[4/3] w-full object-cover shadow-xl transition duration-500" />
              <article className="-mt-20 ml-auto max-w-xl border border-[#373d43]/12 bg-[#FFFFFF]/95 p-7 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center bg-[#373d43] text-[#FFFFFF]"><ActiveIcon className="size-6" /></span>
                  <h3 className="font-display text-3xl font-semibold text-[#373d43]">{currentSegment.title}</h3>
                </div>
                <p className="mt-5 text-sm uppercase tracking-[0.22em] text-[#189cd9]">Clientes visíveis / a validar</p>
                <p className="mt-2 leading-7 text-[#9b9b9b]">{currentSegment.clients}</p>
                <p className="mt-5 text-sm uppercase tracking-[0.22em] text-[#189cd9]">Desafio recorrente</p>
                <p className="mt-2 leading-7 text-[#373d43]">{currentSegment.challenge}</p>
                <p className="mt-5 text-sm uppercase tracking-[0.22em] text-[#189cd9]">Resposta Vision</p>
                <p className="mt-2 font-medium leading-7 text-[#373d43]">{currentSegment.solution}</p>
                <a href={currentSegment.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#189cd9] transition hover:translate-x-1 hover:text-[#373d43]">
                  Ver página do segmento <ArrowRight className="size-4" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="plataforma" className="overflow-hidden bg-[#373d43] py-24 text-[#FFFFFF]">
          <div className="container grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center border border-white/15 bg-white/6 px-4 py-3 backdrop-blur">
                <img src={AIGEST_LOGO} alt="Aigest, plataforma de inteligência em gestão" className="h-8 w-auto max-w-[190px] object-contain opacity-90" />
              </div>
              <p className="eyebrow-dark">Aigest - Plataforma de Gestão</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Organize o presente e molde o futuro com dados integrados.</h2>
              <p className="mt-6 text-lg leading-8 text-[#cbe9f6]">A Aigest preserva a promessa atual: converter de maneira simples e inteligente a complexidade da gestão, centralizar dados e apoiar decisões estratégicas com acompanhamento contínuo.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Gestão de Pessoas", "Gestão Financeira", "Gestão Estratégica", "Gestão de Processos"].map((module) => (
                  <div key={module} className="border border-white/12 bg-white/6 p-4 text-sm font-medium text-[#FFFFFF]">{module}</div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-5 border border-white/10" />
              <img src={PLATFORM_IMAGE} alt="Tela da plataforma Aigest com indicadores, metas e acompanhamento de KPIs" className="relative aspect-video w-full object-cover object-top shadow-[0_28px_72px_rgba(0,0,0,0.28)]" />
              <div className="relative -mt-8 ml-8 max-w-lg bg-[#cbe9f6] p-6 text-[#373d43] shadow-2xl">
                <p className="font-display text-2xl font-semibold">Tecnologia deve servir à estratégia.</p>
                <p className="mt-3 leading-7 text-[#9b9b9b]">A plataforma não substitui o método consultivo; ela torna dados, processos e decisões mais visíveis e acompanháveis.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-24">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow">Prova de confiança</p>
              <h2 className="section-title mt-4">Empresas que decidiram evoluir com a Vision.</h2>
              <p className="mt-6 leading-8 text-[#9b9b9b]">A nova página apresenta clientes por segmento para reforçar identificação e facilitar a leitura de valor por setor.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {clientNames.map((client) => (
                <div key={client} className="client-chip">{client}</div>
              ))}
            </div>
          </div>
          <div className="mt-16 grid gap-8 border-t border-[#373d43]/10 pt-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="eyebrow">Testemunhal de cliente</p>
              <h3 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#373d43]">Histórias que transformam negócios</h3>
              <p className="mt-5 text-lg leading-8 text-[#9b9b9b]">Líderes que decidiram evoluir com a Vision. Conheça empresas que estruturaram sua gestão, alcançaram novos resultados e transformaram seus desafios em crescimento.</p>
            </div>
            <div className="overflow-hidden border border-[#373d43]/12 bg-[#373d43] p-3 shadow-[0_24px_70px_rgba(55,61,67,0.16)]">
              <video className="aspect-video w-full bg-[#373d43] object-cover" controls preload="metadata" playsInline src="https://visionconsultores.com.br/wp-content/uploads/2025/11/Jackson-Smart-V3_menor.mp4">
                Seu navegador não suporta reprodução de vídeo.
              </video>
            </div>
          </div>
        </section>

        <section className="bg-[#cbe9f6] py-24">
          <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="eyebrow">Conteúdo estratégico</p>
              <h2 className="section-title mt-4">O site também deve funcionar como ativo de autoridade.</h2>
              <p className="mt-6 text-lg leading-8 text-[#9b9b9b]">Artigos e insights devem educar empresários, gerar reflexão e reforçar a Vision como referência em gestão, estratégia, finanças, tecnologia e processos.</p>
            </div>
            <div className="space-y-4">
              {insightCards.map((insight, index) => (
                <article key={insight} className="flex gap-5 border border-[#373d43]/12 bg-white p-5">
                  <span className="font-mono text-sm text-[#189cd9]">0{index + 1}</span>
                  <p className="font-display text-2xl font-semibold leading-tight text-[#373d43]">{insight}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="time" className="container py-24">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Nosso time</p>
              <h2 className="section-title mt-4">Pessoas que traduzem gestão, tecnologia e decisão em execução prática.</h2>
              <p className="mt-6 text-lg leading-8 text-[#9b9b9b]">A atuação consultiva da Vision combina método, proximidade e leitura de contexto. A seção apresenta a equipe com enquadramento padronizado para reforçar presença humana, confiança e consistência institucional.</p>
              <div className="mt-8 border-l-2 border-[#189cd9] bg-[#cbe9f6] p-5">
                <p className="font-display text-2xl font-semibold leading-tight text-[#373d43]">Autoridade sem distância: consultoria próxima, clara e orientada a resultado.</p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member, index) => (
                <article key={member.name} className="group border border-[#373d43]/12 bg-white p-3 shadow-[0_18px_55px_rgba(55,61,67,0.07)] transition duration-500 hover:-translate-y-1 hover:shadow-xl" style={{ animationDelay: `${index * 70}ms` }}>
                  <div className="overflow-hidden bg-[#cbe9f6]">
                    <img src={member.image} alt={`${member.name}, equipe Vision Consultores`} className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="border-x border-b border-[#373d43]/10 bg-[#FFFFFF] p-5">
                    <p className="font-display text-3xl font-semibold leading-tight text-[#373d43]">{member.name}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#189cd9]">Equipe Vision Consultores</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="container py-24">
          <div className="grid overflow-hidden border border-[#373d43]/12 bg-[#373d43] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 text-[#FFFFFF] sm:p-12 lg:p-14">
              <p className="eyebrow-dark">Qual o seu desafio hoje?</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Conte-nos onde a gestão precisa ganhar clareza.</h2>
              <p className="mt-6 leading-8 text-[#cbe9f6]">Estamos à disposição para criar soluções eficazes e ajudar a sua empresa a alcançar resultados excepcionais com método, dados e acompanhamento próximo.</p>
              <div className="mt-9 space-y-4 text-sm text-[#cbe9f6]">
                <p><strong className="text-white">Telefone:</strong> 38 3213 8600</p>
                <p><strong className="text-white">Atendimento:</strong> Segunda a sexta, das 09:00 às 17:00.</p>
                <p><strong className="text-white">Escritório:</strong> Rua Cula Mangabeira, 210, Santo Expedito, Edifício Office Center, Sala 604, Montes Claros – MG.</p>
              </div>
            </div>
            <form className="diagnostic-form grid gap-5 bg-[#FFFFFF] p-8 sm:p-12 lg:p-14" onSubmit={handleDiagnosticSubmit}>
              <div className="rounded-none border border-[#373d43]/10 bg-white/55 p-4">
                <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.18em] text-[#373d43]">
                  <span>Progresso do diagnóstico</span>
                  <span className="text-[#189cd9]">{formProgress}%</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden bg-[#cbe9f6]" aria-hidden="true">
                  <span className="diagnostic-progress" style={{ width: `${formProgress}%` }} />
                </div>
                <p className="mt-3 text-sm leading-6 text-[#9b9b9b]">Preencha os campos essenciais para orientar a primeira conversa com mais precisão.</p>
              </div>

              <label className={`field-label field-group ${formData.name ? "is-filled" : ""}`}>Nome
                <span className="field-shell"><input className="field" placeholder="Seu nome" value={formData.name} onChange={(event) => updateFormField("name", event.target.value)} required /><span className="field-check"><CheckCircle2 className="size-4" /></span></span>
              </label>
              <label className={`field-label field-group ${formData.company ? "is-filled" : ""}`}>Empresa
                <span className="field-shell"><input className="field" placeholder="Nome da empresa" value={formData.company} onChange={(event) => updateFormField("company", event.target.value)} required /><span className="field-check"><CheckCircle2 className="size-4" /></span></span>
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={`field-label field-group ${formData.email ? "is-filled" : ""}`}>E-mail
                  <span className="field-shell"><input className="field" placeholder="email@empresa.com" type="email" value={formData.email} onChange={(event) => updateFormField("email", event.target.value)} required /><span className="field-check"><CheckCircle2 className="size-4" /></span></span>
                </label>
                <label className={`field-label field-group ${formData.whatsapp ? "is-filled" : ""}`}>WhatsApp
                  <span className="field-shell"><input className="field" placeholder="(00) 00000-0000" value={formData.whatsapp} onChange={(event) => updateFormField("whatsapp", event.target.value)} /><span className="field-check"><CheckCircle2 className="size-4" /></span></span>
                </label>
              </div>
              <label className={`field-label field-group ${formData.segment ? "is-filled" : ""}`}>Segmento
                <span className="field-shell"><select className="field" value={formData.segment} onChange={(event) => updateFormField("segment", event.target.value)} onInput={(event) => updateFormField("segment", event.currentTarget.value)} required><option value="" disabled>Selecione</option>{segments.map((segment) => <option key={segment.id} value={segment.title}>{segment.title}</option>)}</select><span className="field-check"><CheckCircle2 className="size-4" /></span></span>
              </label>
              <label className={`field-label field-group ${formData.challenge ? "is-filled" : ""}`}>Principal desafio
                <span className="field-shell"><textarea className="field min-h-32 resize-y" placeholder="Explique brevemente o desafio de gestão, crescimento ou processos." value={formData.challenge} onChange={(event) => updateFormField("challenge", event.target.value)} required /><span className="field-check top-4"><CheckCircle2 className="size-4" /></span></span>
              </label>
              <button className="btn-primary diagnostic-submit group mt-2 justify-center disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-55 disabled:shadow-[4px_4px_0_#189cd9]" type="submit" disabled={!canSubmit}>
                {formStatus === "sending" ? "Preparando diagnóstico..." : formStatus === "sent" ? "Solicitação registrada" : "Enviar solicitação de diagnóstico"}
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </button>
              {formStatus === "sent" && (
                <div className="diagnostic-success" role="status">
                  <CheckCircle2 className="size-5" />
                  <span>Recebemos as informações. O próximo passo é validar o contexto e direcionar a conversa de diagnóstico.</span>
                </div>
              )}
              <p className="text-xs leading-5 text-[#9b9b9b]">Modelo funcional: em WordPress, este formulário pode ser conectado a RD Station, HubSpot, Contact Form 7, Elementor Forms ou WhatsApp.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#373d43]/10 bg-[#cbe9f6] py-10">
        <div className="container flex flex-col gap-6 text-sm text-[#9b9b9b] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img src={VISION_LOGO} alt="Vision Consultores" className="h-10 w-auto max-w-[150px] object-contain" />
            <p>Visão, método e decisão.</p>
          </div>
          <p>Desenvolvido por <a href="https://letitroll.com.br" target="_blank" rel="noreferrer" className="font-semibold text-[#373d43] underline decoration-[#189cd9]/45 underline-offset-4 transition hover:text-[#189cd9]">Let it Roll Agência</a></p>
        </div>
      </footer>
    </div>
  );
}
