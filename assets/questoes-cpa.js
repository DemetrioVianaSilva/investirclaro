/* Investir Claro — Simulado gratuito CPA (62 questões originais; cada tentativa sorteia 20)
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
    },
    {"tema": "sfn", "enunciado": "Qual instituição é responsável por emitir o papel-moeda e executar a política monetária definida no país?", "alternativas": ["Conselho Monetário Nacional", "Banco Central do Brasil", "Tesouro Nacional", "Comissão de Valores Mobiliários"], "correta": 1, "comentario": "O Banco Central executa a política monetária e é o emissor da moeda. O CMN define as diretrizes, o Tesouro administra a dívida pública e a CVM regula o mercado de valores mobiliários."},
    {"tema": "sfn", "enunciado": "Uma empresa vai fazer uma oferta pública de debêntures para investidores em geral. O órgão que regula e fiscaliza essa oferta é:", "alternativas": ["A Comissão de Valores Mobiliários (CVM)", "A Superintendência de Seguros Privados (Susep)", "O Banco Central do Brasil", "A Previc"], "correta": 0, "comentario": "Debêntures são valores mobiliários, e suas ofertas públicas são reguladas e fiscalizadas pela CVM."},
    {"tema": "sfn", "enunciado": "Um cliente contratou um plano VGBL em uma seguradora. Qual órgão fiscaliza esse tipo de produto?", "alternativas": ["Previc", "CVM", "Susep", "Banco Central do Brasil"], "correta": 2, "comentario": "Planos de previdência aberta (PGBL e VGBL), seguros e títulos de capitalização são fiscalizados pela Susep. A Previc cuida dos fundos de pensão fechados."},
    {"tema": "sfn", "enunciado": "O índice oficial usado para medir o cumprimento da meta de inflação no Brasil é:", "alternativas": ["IGP-M, calculado pela FGV", "INPC, calculado pelo Banco Central", "IPCA, calculado pelo IBGE", "IPC, calculado pela Fipe"], "correta": 2, "comentario": "A meta de inflação definida pelo CMN é medida pelo IPCA, calculado pelo IBGE."},
    {"tema": "sfn", "enunciado": "A taxa DI (ou CDI), muito usada como referência em CDBs pós-fixados, representa:", "alternativas": ["A taxa média dos empréstimos de um dia entre instituições financeiras", "A taxa máxima que os bancos podem cobrar no cheque especial", "A rentabilidade média da poupança no mês", "A meta de inflação definida pelo CMN"], "correta": 0, "comentario": "A taxa DI é calculada a partir das operações de um dia entre instituições financeiras e costuma ficar muito próxima da Selic."},
    {"tema": "sfn", "enunciado": "Se o Banco Central aumenta a alíquota do recolhimento compulsório sobre depósitos, o efeito esperado é:", "alternativas": ["Mais dinheiro disponível para os bancos emprestarem", "Menos recursos disponíveis para crédito na economia", "Queda imediata da inflação para zero", "Aumento automático da rentabilidade da poupança"], "correta": 1, "comentario": "Com mais recursos retidos no Banco Central, os bancos têm menos dinheiro livre para emprestar, o que tende a reduzir o crédito."},
    {"tema": "sfn", "enunciado": "Em um cenário de forte desvalorização do real frente ao dólar, quem tende a ser beneficiado?", "alternativas": ["Empresas que dependem de insumos importados", "Turistas brasileiros viajando ao exterior", "Empresas exportadoras que recebem em dólar", "Quem tem dívidas em dólar"], "correta": 2, "comentario": "Com o real mais fraco, cada dólar recebido vale mais reais, o que favorece exportadores. Importações e dívidas em dólar ficam mais caras."},
    {"tema": "sfn", "enunciado": "Qual é a principal função de uma bolsa de valores, como a B3?", "alternativas": ["Definir a taxa Selic e a meta de inflação para o ano seguinte", "Oferecer ambiente organizado para negociação, registro e liquidação de ativos", "Garantir a rentabilidade mínima das ações negociadas no pregão", "Fiscalizar as instituições financeiras bancárias e cooperativas"], "correta": 1, "comentario": "A bolsa oferece infraestrutura de negociação, registro, compensação e liquidação. Ela não define juros nem garante rentabilidade."},
    {"tema": "produtos", "enunciado": "Qual destes investimentos NÃO conta com a garantia do FGC?", "alternativas": ["CDB", "LCA", "Debênture", "Poupança"], "correta": 2, "comentario": "Debêntures são títulos de dívida de empresas e não têm cobertura do FGC. CDB, LCA e poupança são cobertos dentro dos limites."},
    {"tema": "produtos", "enunciado": "O Tesouro IPCA+ remunera o investidor com:", "alternativas": ["Uma taxa prefixada somada à variação do IPCA", "Apenas a variação da Selic", "Uma taxa fixa definida na compra, sem correção pela inflação", "A variação do dólar mais juros"], "correta": 0, "comentario": "O Tesouro IPCA+ paga a inflação do período mais uma taxa definida no momento da compra, protegendo o poder de compra."},
    {"tema": "produtos", "enunciado": "Um investidor comprou Tesouro Prefixado e, meses depois, os juros de mercado subiram bastante. Se ele vender o título antes do vencimento:", "alternativas": ["Receberá exatamente a taxa contratada", "Poderá receber menos que o esperado, por causa da marcação a mercado", "Terá o valor corrigido pela nova taxa, maior", "Não poderá vender, pois o título só é resgatado no vencimento"], "correta": 1, "comentario": "Quando os juros sobem, o preço dos títulos prefixados já emitidos cai. A venda antecipada é feita a preço de mercado e pode gerar perda."},
    {"tema": "produtos", "enunciado": "Um cliente resgatou um CDB 15 dias após a aplicação. Além do IR, sobre o rendimento incide:", "alternativas": ["Nenhum outro tributo", "IOF com alíquota regressiva", "Come-cotas", "Taxa de custódia da B3 sobre o valor total"], "correta": 1, "comentario": "Resgates antes de 30 dias pagam IOF sobre o rendimento, com alíquota regressiva que chega a zero no 30º dia."},
    {"tema": "produtos", "enunciado": "Sobre a caderneta de poupança para pessoa física, é correto afirmar:", "alternativas": ["O rendimento é creditado diariamente", "O rendimento é isento de Imposto de Renda", "Não tem cobertura do FGC", "Rende sempre mais que o CDI"], "correta": 1, "comentario": "A poupança é isenta de IR para pessoa física, rende na data de aniversário e tem cobertura do FGC."},
    {"tema": "produtos", "enunciado": "As debêntures incentivadas, emitidas para financiar projetos de infraestrutura, têm como principal atrativo para a pessoa física:", "alternativas": ["Garantia do FGC", "Isenção de Imposto de Renda sobre os rendimentos", "Liquidez diária garantida pelo emissor", "Rentabilidade garantida pelo governo"], "correta": 1, "comentario": "Pela Lei 12.431, os rendimentos das debêntures incentivadas são isentos de IR para pessoa física. Elas não têm FGC nem liquidez garantida."},
    {"tema": "produtos", "enunciado": "A taxa de administração de um fundo de investimento é:", "alternativas": ["Cobrada apenas quando o fundo supera o benchmark", "Calculada sobre o patrimônio e já descontada no valor da cota", "Paga pelo cotista por boleto todo mês", "Isenta para fundos de renda fixa"], "correta": 1, "comentario": "A taxa de administração incide sobre o patrimônio do fundo e é provisionada diariamente, já refletida no valor da cota. A cobrada só quando supera o benchmark é a de performance."},
    {"tema": "produtos", "enunciado": "Em um fundo de ações, o Imposto de Renda sobre o ganho do cotista é:", "alternativas": ["Cobrado pelo come-cotas em maio e novembro", "De 15%, cobrado apenas no resgate", "Isento para resgates de até R$ 20 mil por mês", "Calculado pela tabela regressiva da renda fixa"], "correta": 1, "comentario": "Fundos de ações não têm come-cotas. O IR de 15% sobre o ganho é cobrado só no resgate."},
    {"tema": "produtos", "enunciado": "Nos fundos sujeitos ao come-cotas, essa antecipação do Imposto de Renda acontece:", "alternativas": ["Todo mês", "No último dia útil de maio e de novembro", "Apenas no resgate", "Uma vez por ano, em dezembro"], "correta": 1, "comentario": "O come-cotas é cobrado semestralmente, no último dia útil de maio e de novembro, reduzindo a quantidade de cotas do investidor."},
    {"tema": "produtos", "enunciado": "Uma pessoa física vendeu, no mês, R$ 15 mil em ações em operações comuns (não day trade), com lucro. Sobre esse ganho:", "alternativas": ["Paga 15% de IR sobre o lucro, retido na fonte pela corretora", "Paga 20% de IR sobre o lucro, recolhido por DARF no mês seguinte", "É isenta de IR, pois as vendas do mês não passaram de R$ 20 mil", "Paga IOF regressivo sobre o lucro, como nos resgates de renda fixa"], "correta": 2, "comentario": "Nas operações comuns com ações, a pessoa física é isenta de IR quando o total de vendas no mês não passa de R$ 20 mil. Day trade não tem essa isenção."},
    {"tema": "produtos", "enunciado": "Uma pessoa física que vende cotas de um fundo imobiliário (FII) com lucro paga IR sobre o ganho de capital com alíquota de:", "alternativas": ["15%", "20%", "22,5%", "Isento"], "correta": 1, "comentario": "O ganho de capital na venda de cotas de FII é tributado em 20%. A isenção que existe é para os rendimentos distribuídos, quando cumpridos os requisitos legais."},
    {"tema": "produtos", "enunciado": "Para quem faz a declaração simplificada do IR ou não declara, o plano de previdência geralmente mais indicado é:", "alternativas": ["PGBL, porque permite deduzir até 12% da renda bruta na declaração", "VGBL, porque o IR incide apenas sobre o rendimento no resgate", "PGBL, porque é isento de IR no resgate após 10 anos de plano", "Qualquer um, pois a tributação no resgate é sempre idêntica"], "correta": 1, "comentario": "Quem não usa a dedução do PGBL costuma preferir o VGBL: nele, o IR no resgate incide só sobre o rendimento, e não sobre o valor total."},
    {"tema": "produtos", "enunciado": "Na tabela regressiva da previdência complementar, a menor alíquota de IR, de 10%, vale para recursos acumulados por mais de:", "alternativas": ["2 anos", "5 anos", "8 anos", "10 anos"], "correta": 3, "comentario": "A tabela regressiva começa em 35% (até 2 anos) e cai 5 pontos a cada 2 anos, até 10% para recursos com mais de 10 anos."},
    {"tema": "produtos", "enunciado": "Um CDB com carência de 2 anos significa que:", "alternativas": ["O investidor só recebe os juros depois de completar 2 anos", "O investidor não pode resgatar antes do prazo de carência", "O FGC só passa a cobrir o título depois de 2 anos de aplicação", "O rendimento fica isento de IR depois dos 2 anos de carência"], "correta": 1, "comentario": "Carência é o período em que o resgate não é permitido. Quem pode precisar do dinheiro antes deve preferir produtos com liquidez."},
    {"tema": "produtos", "enunciado": "O risco de o emissor de um título não pagar o que deve na data combinada é chamado de:", "alternativas": ["Risco de mercado", "Risco de liquidez", "Risco de crédito", "Risco operacional"], "correta": 2, "comentario": "Risco de crédito é o risco de inadimplência do emissor. Risco de mercado é a oscilação de preços, e risco de liquidez é a dificuldade de vender o ativo."},
    {"tema": "produtos", "enunciado": "A diversificação de uma carteira entre vários ativos ajuda a reduzir principalmente:", "alternativas": ["O risco sistemático, ligado à economia como um todo", "O risco não sistemático, específico de cada empresa ou setor", "Todos os riscos, eliminando a chance de perda", "A cobrança de impostos"], "correta": 1, "comentario": "Diversificar reduz o risco específico de cada ativo. O risco sistemático, como uma crise geral, afeta todo o mercado e não é eliminado pela diversificação."},
    {"tema": "produtos", "enunciado": "Na marcação a mercado de um fundo de renda fixa, os títulos da carteira são avaliados:", "alternativas": ["Pelo preço de compra até o vencimento", "Pelo preço que teriam se fossem negociados hoje", "Pelo valor garantido pelo FGC", "Pela média dos últimos 12 meses"], "correta": 1, "comentario": "A marcação a mercado atualiza diariamente os ativos pelo preço atual de negociação, o que faz a cota refletir ganhos e perdas reais."},
    {"tema": "produtos", "enunciado": "A cobertura do FGC para um mesmo CPF tem limite de R$ 250 mil por instituição e, no total, de:", "alternativas": ["R$ 500 mil, sem prazo", "R$ 1 milhão a cada período de 4 anos", "R$ 2 milhões por ano", "Não há limite total"], "correta": 1, "comentario": "Além do limite de R$ 250 mil por CPF por instituição, existe um teto global de R$ 1 milhão, renovável a cada 4 anos."},
    {"tema": "relacionamento", "enunciado": "Para definir o perfil de investidor (suitability), o profissional deve considerar:", "alternativas": ["Apenas a renda mensal declarada pelo cliente no cadastro", "Objetivos, situação financeira e conhecimento do cliente", "Somente a idade e o estado civil do cliente", "As metas de venda de produtos da agência no mês"], "correta": 1, "comentario": "O suitability avalia os objetivos de investimento, a situação financeira e o conhecimento e a experiência do cliente."},
    {"tema": "relacionamento", "enunciado": "Pela Resolução CVM 30, é considerado investidor profissional quem possui investimentos financeiros superiores a:", "alternativas": ["R$ 300 mil", "R$ 1 milhão", "R$ 5 milhões", "R$ 10 milhões"], "correta": 3, "comentario": "Investidor profissional tem mais de R$ 10 milhões em investimentos financeiros e atesta essa condição por escrito. O qualificado tem mais de R$ 1 milhão."},
    {"tema": "relacionamento", "enunciado": "Ao identificar uma operação suspeita de lavagem de dinheiro e comunicá-la ao Coaf, o funcionário do banco deve:", "alternativas": ["Avisar o cliente para que ele explique a operação", "Manter sigilo e não informar o cliente sobre a comunicação", "Cancelar a conta do cliente imediatamente", "Divulgar o caso aos demais clientes da agência"], "correta": 1, "comentario": "A comunicação ao Coaf é sigilosa. Avisar o cliente pode prejudicar a apuração e é vedado."},
    {"tema": "relacionamento", "enunciado": "Uma cliente que exerce cargo de deputada estadual deve ser tratada, para fins de prevenção à lavagem de dinheiro, como:", "alternativas": ["Cliente comum, sem nenhum procedimento especial", "Pessoa exposta politicamente, com diligência reforçada", "Investidora profissional, com dispensa de suitability", "Cliente dispensada de identificação e cadastro"], "correta": 1, "comentario": "Ocupantes de cargos públicos relevantes são pessoas expostas politicamente e exigem monitoramento e diligência reforçados."},
    {"tema": "relacionamento", "enunciado": "Um cliente pergunta se o fundo multimercado sugerido vai render 15% no ano. A resposta adequada é:", "alternativas": ["Garantir o retorno de 15%, já que o fundo rendeu isso no ano passado", "Explicar que rentabilidade passada não garante resultado futuro", "Dizer que sim, desde que ele não resgate antes de completar um ano", "Recusar-se a falar sobre rentabilidade e encerrar o atendimento"], "correta": 1, "comentario": "O profissional não pode prometer rentabilidade. Deve mostrar o histórico como referência, deixando claro que não há garantia, e explicar os riscos."},
    {"tema": "relacionamento", "enunciado": "O gerente recebe uma remuneração maior quando vende determinado fundo. Diante de um cliente, a conduta correta é:", "alternativas": ["Indicar esse fundo para todos os clientes, já que é bem remunerado", "Esconder a informação para não influenciar a decisão do cliente", "Priorizar o interesse do cliente e informar o conflito de interesse", "Vender o fundo apenas a clientes com perfil de investidor agressivo"], "correta": 2, "comentario": "O interesse do cliente vem primeiro, e situações de conflito de interesse devem ser identificadas e informadas com transparência."},
    {"tema": "relacionamento", "enunciado": "Pela Lei Geral de Proteção de Dados (LGPD), é exemplo de dado pessoal sensível:", "alternativas": ["Nome completo", "Endereço residencial", "Informação sobre saúde", "Número de telefone"], "correta": 2, "comentario": "Dados sensíveis incluem saúde, origem racial ou étnica, religião, opinião política, dados genéticos e biométricos, entre outros. Eles exigem proteção reforçada."},
    {"tema": "relacionamento", "enunciado": "Um cliente registrou reclamação no SAC do banco e não ficou satisfeito com a resposta. O próximo canal adequado dentro da instituição é:", "alternativas": ["A Ouvidoria", "O Copom", "A diretoria de marketing", "O Coaf"], "correta": 0, "comentario": "A Ouvidoria atua como segunda instância, depois dos canais primários de atendimento como agências e SAC."},
    {"tema": "relacionamento", "enunciado": "Para oferecer um empréstimo, o funcionário condiciona a aprovação à contratação de um seguro que o cliente não quer. Essa prática:", "alternativas": ["É permitida, desde que o valor do seguro seja baixo em relação ao crédito", "É venda casada, prática vedada pelo Código de Defesa do Consumidor", "É obrigatória por regra do Banco Central para todo empréstimo pessoal", "É proibida apenas para aposentados e pensionistas do INSS"], "correta": 1, "comentario": "Condicionar um produto à compra de outro é venda casada, prática vedada pelo CDC."},
    {"tema": "relacionamento", "enunciado": "Pelas regras de prevenção à lavagem de dinheiro, os registros das operações e os dados cadastrais dos clientes devem ser guardados por no mínimo:", "alternativas": ["1 ano", "2 anos", "5 anos", "20 anos"], "correta": 2, "comentario": "As instituições devem conservar cadastros e registros de operações por pelo menos 5 anos."},
    {"tema": "relacionamento", "enunciado": "Uma cliente idosa chega acompanhada de uma pessoa que fala por ela e pressiona por um empréstimo alto. A atitude mais adequada é:", "alternativas": ["Fazer a operação rapidamente, para não constranger a cliente nem o acompanhante", "Confirmar com a própria cliente se ela entende e concorda, seguindo os procedimentos", "Registrar a operação no nome do acompanhante, que é quem está pedindo", "Recusar qualquer atendimento a clientes idosos que chegam acompanhados"], "correta": 1, "comentario": "Clientes em situação de vulnerabilidade exigem atenção redobrada. O profissional deve confirmar a vontade e o entendimento da cliente e acionar os procedimentos da instituição se houver suspeita."},
    {"tema": "relacionamento", "enunciado": "Antes de recomendar um produto, o profissional verifica que ele é incompatível com o perfil do cliente. Se o cliente ainda assim quiser investir, a instituição deve:", "alternativas": ["Recusar a operação em qualquer hipótese, mesmo com o cliente insistindo", "Alertar o cliente e obter declaração expressa de ciência antes da ordem", "Alterar o perfil do cliente no sistema, sem aplicar novo questionário", "Executar a ordem normalmente, sem registrar a conversa com o cliente"], "correta": 1, "comentario": "Quando o cliente insiste em um produto inadequado ao perfil, a instituição deve alertá-lo e obter uma declaração expressa de que ele está ciente da inadequação."},
    {"tema": "inovacao", "enunciado": "Sobre o Pix, é correto afirmar:", "alternativas": ["Funciona apenas em dias úteis, no horário comercial", "É um pagamento instantâneo criado e gerido pelo Banco Central", "É administrado pela B3 junto com as operações de bolsa", "Só pode ser usado por pessoas físicas, não por empresas"], "correta": 1, "comentario": "O Pix foi criado pelo Banco Central, funciona 24 horas por dia, todos os dias, e pode ser usado por pessoas físicas e jurídicas."},
    {"tema": "inovacao", "enunciado": "Na sigla ASG (ou ESG), a letra S refere-se a:", "alternativas": ["Segurança da informação", "Aspectos sociais", "Solvência da empresa", "Sustentabilidade financeira"], "correta": 1, "comentario": "ASG significa ambiental, social e governança. O S trata de temas como relação com funcionários, comunidades e direitos humanos."},
    {"tema": "inovacao", "enunciado": "A tokenização de ativos pode ser descrita como:", "alternativas": ["A troca de senhas por códigos de segurança enviados por SMS", "A representação digital de um ativo em registro distribuído", "A conversão automática de reais em dólares no câmbio", "A emissão de papel-moeda digital pelo Banco Central"], "correta": 1, "comentario": "Tokenizar é criar um token digital que representa um ativo, como um imóvel ou um título, registrado em tecnologia de registro distribuído."},
    {"tema": "inovacao", "enunciado": "Uma característica da tecnologia blockchain é:", "alternativas": ["Depender de um único servidor central que valida tudo", "Permitir alterar registros antigos sem deixar nenhum rastro", "Manter registro distribuído e muito difícil de adulterar", "Ser uma tecnologia de uso exclusivo das criptomoedas"], "correta": 2, "comentario": "A blockchain é um registro distribuído em que os blocos são encadeados e validados pela rede, o que torna alterações retroativas muito difíceis. Ela tem usos além das criptomoedas."}
  ]
};
