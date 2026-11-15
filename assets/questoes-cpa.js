/* Investir Claro — Simulado gratuito CPA (20 questões originais)
   Distribuição pelos pesos do programa detalhado ANBIMA vigente desde 01/01/2026:
   SFN 20% (4) · Produtos 40% (8) · Relacionamento 30% (6) · Inovação 10% (2) */
window.APROVA_SIMULADO = {
  prova: "CPA",
  slug: "cpa",
  minimo: 0.70,
  tempoMin: 60,
  sorteio: { sfn: 4, produtos: 8, relacionamento: 6, inovacao: 2 },
  temas: {
    sfn: "Estrutura e dinâmica do SFN",
    produtos: "Produtos do mercado financeiro",
    relacionamento: "Relacionamento com o cliente",
    inovacao: "Inovação e desenvolvimento de mercado"
  },
  questoes: [
    {
      tema: "sfn",
      enunciado: "Um cliente pergunta a Luana, recém-certificada, qual órgão estabelece as diretrizes das políticas monetária, cambial e de crédito do país. A resposta correta é:",
      alternativas: ["Banco Central do Brasil", "Conselho Monetário Nacional (CMN)", "Comissão de Valores Mobiliários (CVM)", "Comitê de Política Monetária (Copom)"],
      correta: 1,
      comentario: "O CMN é o órgão normativo máximo do SFN e define as diretrizes. O Banco Central executa e fiscaliza essas políticas, a CVM regula o mercado de valores mobiliários e o Copom define a meta da Selic."
    },
    {
      tema: "sfn",
      enunciado: "Na reunião desta semana, o Copom elevou a meta da taxa Selic. Qual é o efeito mais provável dessa decisão na economia?",
      alternativas: [
        "Valorização imediata dos títulos prefixados já emitidos",
        "Redução das taxas cobradas no crédito ao consumidor",
        "Crédito mais caro e desaceleração do consumo, ajudando a conter a inflação",
        "Aumento da quantidade de moeda em circulação"
      ],
      correta: 2,
      comentario: "Juros mais altos encarecem o crédito e desestimulam consumo e investimento, o que reduz a pressão sobre os preços. Títulos prefixados já emitidos perdem valor na marcação a mercado quando os juros sobem."
    },
    {
      tema: "sfn",
      enunciado: "Um CDB rendeu 12% no ano, enquanto a inflação medida pelo IPCA foi de 5%. Pela fórmula de Fisher, a taxa de juros real aproximada foi de:",
      alternativas: ["7,00%", "6,67%", "5,60%", "17,60%"],
      correta: 1,
      comentario: "Taxa real = (1 + nominal) ÷ (1 + inflação) − 1 = 1,12 ÷ 1,05 − 1 ≈ 6,67%. Os 7% vêm da subtração simples, que só funciona como aproximação grosseira."
    },
    {
      tema: "sfn",
      enunciado: "Dona Cícera tem R$ 180 mil em CDB e R$ 120 mil em LCI emitidos pelo mesmo banco, que sofreu liquidação extrajudicial. Considerando apenas a garantia ordinária do FGC, quanto ela tem garantido?",
      alternativas: ["R$ 300 mil", "R$ 250 mil", "R$ 180 mil", "R$ 120 mil"],
      correta: 1,
      comentario: "O FGC garante até R$ 250 mil por CPF por instituição ou conglomerado, somando todos os produtos cobertos (CDB e LCI entram). Os R$ 50 mil excedentes viram crédito na massa falida."
    },
    {
      tema: "produtos",
      enunciado: "Um investidor resgata um CDB após 500 dias de aplicação. Qual alíquota de Imposto de Renda incide sobre o rendimento?",
      alternativas: ["22,5%", "20%", "17,5%", "15%"],
      correta: 2,
      comentario: "Tabela regressiva da renda fixa: até 180 dias, 22,5%; de 181 a 360, 20%; de 361 a 720, 17,5%; acima de 720 dias, 15%. Com 500 dias, a alíquota é 17,5%."
    },
    {
      tema: "produtos",
      enunciado: "Sobre a Letra de Crédito Imobiliário (LCI) adquirida por pessoa física, é correto afirmar que:",
      alternativas: [
        "É tributada pela tabela regressiva e não tem cobertura do FGC",
        "Tem rendimentos isentos de IR e cobertura do FGC",
        "Tem rendimentos isentos de IR, mas não tem cobertura do FGC",
        "Paga IR fixo de 15%, independentemente do prazo"
      ],
      correta: 1,
      comentario: "Para pessoa física, os rendimentos da LCI são isentos de Imposto de Renda, e o título conta com a garantia do FGC dentro dos limites de R$ 250 mil por CPF por instituição."
    },
    {
      tema: "produtos",
      enunciado: "Com a meta da Selic em 15% ao ano, um cliente pergunta como é calculado o rendimento da poupança. A resposta correta é:",
      alternativas: [
        "70% da Selic mais TR",
        "100% do CDI",
        "0,5% ao mês mais TR",
        "IPCA mais 0,5% ao mês"
      ],
      correta: 2,
      comentario: "Para depósitos feitos a partir de maio de 2012: com a meta da Selic acima de 8,5% ao ano, a poupança rende 0,5% ao mês mais TR; com a Selic em 8,5% ou menos, rende 70% da Selic mais TR."
    },
    {
      tema: "produtos",
      enunciado: "Paulo quer aplicar sua reserva de emergência em título público, com liquidez diária e o menor risco possível de oscilação no saldo. O título mais indicado é:",
      alternativas: ["Tesouro IPCA+ 2045", "Tesouro Prefixado 2031", "Tesouro Selic (LFT)", "Tesouro Renda+"],
      correta: 2,
      comentario: "O Tesouro Selic é pós-fixado e acompanha a taxa básica, por isso sofre pouca oscilação na marcação a mercado. Prefixados e títulos atrelados à inflação de longo prazo podem ter perdas relevantes se resgatados antes do vencimento."
    },
    {
      tema: "produtos",
      enunciado: "Uma característica da ação ordinária (ON) é:",
      alternativas: [
        "Dar direito a voto nas assembleias da companhia",
        "Garantir prioridade no recebimento de dividendos",
        "Ter rendimento fixo definido no estatuto",
        "Ser negociada apenas no mercado de balcão"
      ],
      correta: 0,
      comentario: "Ações ordinárias dão direito a voto. A prioridade no recebimento de dividendos é característica das ações preferenciais (PN), que em geral não votam."
    },
    {
      tema: "produtos",
      enunciado: "Pela Lei das S.A., em caso de alienação do controle de companhia aberta, o tag along garante aos acionistas minoritários com ações ordinárias o direito de vender suas ações por, no mínimo:",
      alternativas: ["50% do preço pago ao controlador", "70% do preço pago ao controlador", "80% do preço pago ao controlador", "100% do preço pago ao controlador"],
      correta: 2,
      comentario: "O mínimo legal é 80% do valor pago por ação do bloco de controle. O segmento Novo Mercado da B3 exige 100%, o que é uma regra de governança adicional, não a regra geral da lei."
    },
    {
      tema: "produtos",
      enunciado: "Sobre o come-cotas, é correto afirmar:",
      alternativas: [
        "Incide mensalmente sobre todos os fundos de investimento",
        "Ocorre no último dia útil de maio e de novembro nos fundos sujeitos a ele, como os de renda fixa; fundos de ações não têm come-cotas",
        "Ocorre apenas no resgate, com alíquota única de 15%",
        "Incide somente sobre fundos de ações, na alíquota de 20%"
      ],
      correta: 1,
      comentario: "O come-cotas é uma antecipação semestral do IR, cobrada no último dia útil de maio e de novembro em fundos como os de renda fixa e multimercado. Fundos de ações são tributados apenas no resgate."
    },
    {
      tema: "produtos",
      enunciado: "Carlos faz a declaração completa do IR, contribui para o INSS e tem renda bruta tributável de R$ 120 mil por ano. Qual é o valor máximo que ele pode deduzir aportando em PGBL?",
      alternativas: ["R$ 12.000", "R$ 14.400", "R$ 18.000", "R$ 24.000"],
      correta: 1,
      comentario: "As contribuições ao PGBL podem ser deduzidas até 12% da renda bruta tributável, para quem usa o modelo completo e contribui para a previdência oficial: 12% × R$ 120 mil = R$ 14.400."
    },
    {
      tema: "relacionamento",
      enunciado: "Seu Antônio, 63 anos, acabou de se aposentar e quer usar o patrimônio acumulado para complementar a renda mensal. Em que fase do ciclo de vida ele está e qual deve ser a prioridade?",
      alternativas: [
        "Acumulação: buscar retorno máximo com alta exposição a renda variável",
        "Crescimento patrimonial: concentrar em ativos de longo prazo e baixa liquidez",
        "Distribuição de renda: priorizar fluxo de renda, liquidez e baixa volatilidade",
        "Acumulação: aumentar aportes mensais com uso de crédito"
      ],
      correta: 2,
      comentario: "Na fase de distribuição de renda, o investidor passa a consumir o patrimônio. A prioridade é gerar renda previsível e preservar capital, com menor exposição a oscilações."
    },
    {
      tema: "relacionamento",
      enunciado: "Um cliente com perfil conservador insiste em aplicar em um COE com capital em risco. Segundo a Resolução CVM 30, a conduta correta do profissional é:",
      alternativas: [
        "Recusar a operação em qualquer circunstância",
        "Alterar o perfil do cliente para arrojado sem novo questionário",
        "Alertar o cliente sobre a inadequação e obter declaração expressa de que ele está ciente antes de executar a ordem",
        "Executar a ordem sem registro, já que a iniciativa partiu do cliente"
      ],
      correta: 2,
      comentario: "Quando o cliente quer investir em produto inadequado ao seu perfil, a instituição deve alertá-lo da ausência ou inadequação e obter declaração expressa de ciência antes da primeira operação."
    },
    {
      tema: "relacionamento",
      enunciado: "De acordo com a Resolução CVM 30, as informações que embasam o perfil (suitability) do cliente devem ser atualizadas em intervalos de, no máximo:",
      alternativas: ["6 meses", "12 meses", "24 meses", "36 meses"],
      correta: 2,
      comentario: "A norma determina atualização em intervalos não superiores a 24 meses. Muitas instituições fazem a revisão com mais frequência, mas o limite regulatório é esse."
    },
    {
      tema: "relacionamento",
      enunciado: "Um cliente pede que um depósito em espécie de R$ 80 mil seja dividido em vários depósitos menores, em dias diferentes, \"para não chamar atenção\". A conduta correta do profissional é:",
      alternativas: [
        "Atender o pedido, pois o cliente tem direito de escolher como deposita",
        "Atender e avisar o cliente de que a operação será comunicada ao Coaf",
        "Não seguir a orientação, registrar o fato e comunicar à área de PLD da instituição, sem informar o cliente",
        "Recusar o depósito e encerrar a conta imediatamente"
      ],
      correta: 2,
      comentario: "Fracionar depósitos para evitar controles é indício clássico de lavagem de dinheiro. O profissional comunica internamente e não pode alertar o cliente sobre a comunicação."
    },
    {
      tema: "relacionamento",
      enunciado: "Um funcionário de uma companhia aberta fica sabendo de uma fusão ainda não divulgada ao mercado e compra ações da empresa antes do anúncio. Essa conduta caracteriza:",
      alternativas: [
        "Manipulação de mercado",
        "Uso indevido de informação privilegiada (insider trading)",
        "Exercício irregular de profissão",
        "Operação legítima, se ele usar recursos próprios"
      ],
      correta: 1,
      comentario: "Negociar valores mobiliários com base em informação relevante ainda não divulgada é crime de uso indevido de informação privilegiada (art. 27-D da Lei 6.385/76), independentemente da origem dos recursos."
    },
    {
      tema: "relacionamento",
      enunciado: "Pela Resolução CVM 30, uma pessoa física pode ser considerada investidora qualificada quando:",
      alternativas: [
        "Tem mais de R$ 100 mil aplicados",
        "Possui investimentos financeiros superiores a R$ 1 milhão e atesta essa condição por escrito",
        "Tem renda mensal acima de R$ 20 mil",
        "Possui investimentos superiores a R$ 10 milhões, sem necessidade de declaração"
      ],
      correta: 1,
      comentario: "Investidor qualificado: aplicações financeiras acima de R$ 1 milhão com atestado por escrito (ou certas certificações profissionais). Acima de R$ 10 milhões, também com atestado, a pessoa pode ser investidora profissional."
    },
    {
      tema: "inovacao",
      enunciado: "No Open Finance, o compartilhamento dos dados de um cliente entre instituições:",
      alternativas: [
        "É automático para todos os correntistas",
        "Depende do consentimento do cliente, que pode revogá-lo",
        "É obrigatório para quem tem crédito em aberto",
        "Só pode ser feito pelo Banco Central"
      ],
      correta: 1,
      comentario: "O Open Finance se baseia no consentimento: o cliente escolhe quais dados compartilhar, com quem e por quanto tempo, e pode cancelar a autorização a qualquer momento."
    },
    {
      tema: "inovacao",
      enunciado: "Um smart contract pode ser definido como:",
      alternativas: [
        "Um contrato em papel assinado digitalmente com certificado ICP-Brasil",
        "Um programa registrado em blockchain que executa automaticamente cláusulas quando condições pré-definidas são cumpridas",
        "Um contrato de câmbio liquidado via Pix",
        "Uma carteira digital de criptomoedas"
      ],
      correta: 1,
      comentario: "Smart contracts são contratos autoexecutáveis: o código roda na rede e cumpre o que foi programado sem intermediário, como liberar um pagamento ao atingir uma condição."
    }
  ]
};
