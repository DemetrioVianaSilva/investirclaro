/* Investir Claro — Simulado gratuito C-Pro R (20 questões originais)
   Distribuição pelos pesos do programa detalhado ANBIMA vigente desde 01/01/2026:
   Prospecção 20% (4) · Análise do cliente 20% (4) · Indicação 40% (8) · Portfólio 20% (4) */
window.APROVA_SIMULADO = {
  prova: "C-Pro R",
  slug: "cpro-r",
  minimo: 0.71,
  tempoMin: 60,
  sorteio: { prospeccao: 4, analise: 4, indicacao: 8, portfolio: 4 },
  temas: {
    prospeccao: "Prospecção e relacionamento",
    analise: "Análise de informações do cliente",
    indicacao: "Indicação de investimentos",
    portfolio: "Análise de portfólio e monitoramento"
  },
  questoes: [
    {
      tema: "prospeccao",
      enunciado: "Marta comprou ações a R$ 40 e hoje elas valem R$ 22. Mesmo sem nenhuma mudança na tese, ela se recusa a vender e repete: \"já valeu R$ 40, vai voltar a esse preço\". Qual viés comportamental está mais presente?",
      alternativas: ["Ancoragem", "Efeito manada", "Viés de disponibilidade", "Excesso de confiança"],
      correta: 0,
      comentario: "Marta usa o preço de compra como âncora para julgar o valor atual do ativo. A decisão deveria olhar para as perspectivas da empresa, não para um preço passado."
    },
    {
      tema: "prospeccao",
      enunciado: "Lúcia precisa resgatar R$ 10.000. Ela tem um fundo com ganho de 30% e uma ação com perda de 25%, sem mudança relevante na tese de nenhum dos dois. Decide vender o fundo \"para garantir o lucro\" e manter a ação \"até ela voltar ao preço de compra\". Esse comportamento é conhecido como:",
      alternativas: ["Efeito disposição", "Viés de disponibilidade", "Efeito manada", "Excesso de confiança"],
      correta: 0,
      comentario: "Efeito disposição: vender cedo o que está no lucro e segurar o que está no prejuízo. Ele nasce da aversão à perda, porque realizar o prejuízo dói mais do que deixar de ganhar. A decisão deveria olhar as perspectivas de cada ativo, não o preço de compra."
    },
    {
      tema: "prospeccao",
      enunciado: "Depois de uma semana de noticiário sobre a queda forte da bolsa, um cliente passa a acreditar que investir em ações \"sempre dá prejuízo\" e pede para zerar a posição. Esse comportamento é típico do viés de:",
      alternativas: ["Representatividade", "Disponibilidade", "Status quo", "Autoatribuição"],
      correta: 1,
      comentario: "O viés de disponibilidade faz a pessoa superestimar a probabilidade de eventos fáceis de lembrar, como notícias recentes e marcantes."
    },
    {
      tema: "prospeccao",
      enunciado: "Em um trimestre, uma assessora abordou 60 prospects, fez 20 reuniões e converteu 5 novos clientes. Qual foi a taxa de conversão de reuniões em clientes?",
      alternativas: ["8,3%", "25%", "33,3%", "12%"],
      correta: 1,
      comentario: "Conversão de reuniões em clientes = 5 ÷ 20 = 25%. A conversão de prospects em clientes seria 5 ÷ 60 ≈ 8,3%, um indicador diferente do funil."
    },
    {
      tema: "analise",
      enunciado: "Pedro tem R$ 27.000 aplicados em ativos de liquidez diária e despesas mensais de R$ 4.500. Por quantos meses sua reserva cobre as despesas?",
      alternativas: ["4 meses", "5 meses", "6 meses", "9 meses"],
      correta: 2,
      comentario: "Índice de cobertura = ativos líquidos ÷ despesas mensais = 27.000 ÷ 4.500 = 6 meses."
    },
    {
      tema: "analise",
      enunciado: "Uma cliente tem renda líquida mensal de R$ 8.000 e paga R$ 2.800 por mês em parcelas de financiamento e empréstimo. Qual é o comprometimento da renda com dívidas?",
      alternativas: ["28%", "35%", "40%", "54%"],
      correta: 1,
      comentario: "Comprometimento = parcelas ÷ renda líquida = 2.800 ÷ 8.000 = 35%."
    },
    {
      tema: "analise",
      enunciado: "Júlia tem 28 anos, renda estável, reserva de emergência formada e objetivo de aposentadoria daqui a 30 anos. Em qual fase do ciclo de vida ela está?",
      alternativas: [
        "Acumulação, com horizonte longo que permite maior exposição a risco se o perfil indicar",
        "Consolidação, com foco em preservar o patrimônio",
        "Aposentadoria, com foco em gerar renda",
        "Usufruto, com resgates programados"
      ],
      correta: 0,
      comentario: "Na fase de acumulação, o horizonte longo permite suportar mais volatilidade em busca de retorno, desde que o perfil de suitability confirme essa tolerância."
    },
    {
      tema: "analise",
      enunciado: "Rafael possui R$ 12 milhões em aplicações financeiras e atesta essa condição por escrito. Pela Resolução CVM 30, ele pode ser classificado como investidor:",
      alternativas: ["Comum", "Qualificado apenas", "Profissional", "Institucional"],
      correta: 2,
      comentario: "Acima de R$ 10 milhões em aplicações, com atestado por escrito, a pessoa pode ser investidora profissional. Todo profissional também é considerado qualificado."
    },
    {
      tema: "indicacao",
      enunciado: "Um cliente comprou Tesouro Prefixado 2031 e, após uma alta nos juros de mercado, viu o saldo do título cair. Qual é a explicação correta a ser dada a ele?",
      alternativas: [
        "O Tesouro deu calote parcial e o cliente perdeu parte do principal",
        "A queda é efeito da marcação a mercado; se mantiver até o vencimento, recebe a taxa contratada",
        "O título passou a ser pós-fixado após a alta de juros",
        "A queda é cobrança de IR antecipado"
      ],
      correta: 1,
      comentario: "Quando os juros sobem, o preço de títulos prefixados cai na marcação a mercado. A perda só se realiza se o título for vendido antes do vencimento."
    },
    {
      tema: "indicacao",
      enunciado: "Um cliente compara uma LCI isenta que paga 90% do CDI com um CDB tributado que ele levará por mais de 2 anos (IR de 15%). Para empatar com a LCI, o CDB precisa render aproximadamente:",
      alternativas: ["90% do CDI", "103,5% do CDI", "105,9% do CDI", "115% do CDI"],
      correta: 2,
      comentario: "Taxa bruta equivalente = taxa isenta ÷ (1 − alíquota) = 90% ÷ 0,85 ≈ 105,9% do CDI. Acima disso, o CDB passa a render mais que a LCI."
    },
    {
      tema: "indicacao",
      enunciado: "Sérgio tem R$ 200.000 para aplicar por 4 anos. O gerente oferece uma debênture de uma distribuidora de energia, com taxa acima do CDB de mesmo prazo do próprio banco. Sérgio pergunta se, como no CDB, o valor fica garantido pelo FGC. A resposta adequada é:",
      alternativas: [
        "A debênture não tem cobertura do FGC; o risco de crédito é da empresa emissora, e isso ajuda a explicar a taxa maior",
        "Sim, até R$ 250 mil por CPF, nas mesmas condições do CDB",
        "Sim, porque a distribuição é feita por um banco coberto pelo FGC",
        "A cobertura vale para a debênture apenas se ela for mantida até o vencimento"
      ],
      correta: 0,
      comentario: "Debêntures são dívida de empresas e não têm garantia do FGC, mesmo quando distribuídas por um banco. Por isso o rating, as garantias da emissão e a concentração por emissor precisam entrar na análise."
    },
    {
      tema: "indicacao",
      enunciado: "Na regra vigente, a principal vantagem tributária das debêntures incentivadas de infraestrutura (Lei 12.431) para pessoa física é:",
      alternativas: [
        "Isenção de IOF em qualquer prazo",
        "Isenção de Imposto de Renda sobre os rendimentos",
        "Alíquota fixa de 10% de IR",
        "Dedução do valor aplicado na declaração completa"
      ],
      correta: 1,
      comentario: "Os rendimentos das debêntures incentivadas são isentos de IR para pessoa física, o que exige comparar com produtos tributados usando a taxa bruta equivalente."
    },
    {
      tema: "indicacao",
      enunciado: "Um cliente quer exposição ao Ibovespa com custo baixo e negociação em bolsa durante o pregão. O produto mais adequado é:",
      alternativas: [
        "Um ETF que replica o Ibovespa",
        "Um fundo multimercado macro",
        "Um COE de capital protegido",
        "Uma LCA atrelada ao CDI"
      ],
      correta: 0,
      comentario: "ETFs são fundos de índice de gestão passiva, negociados em bolsa como ações, que buscam replicar um índice de referência com taxas geralmente baixas."
    },
    {
      tema: "indicacao",
      enunciado: "Uma cliente vai contribuir para previdência complementar com horizonte de 15 anos antes de começar os resgates. Qual regime de tributação tende a ser mais vantajoso e qual alíquota ela terá após 10 anos?",
      alternativas: [
        "Progressivo, com alíquota de 27,5%",
        "Regressivo, com alíquota de 10%",
        "Regressivo, com alíquota de 15%",
        "Progressivo, com alíquota de 15% na fonte"
      ],
      correta: 1,
      comentario: "No regime regressivo, a alíquota cai de 35% para 10% conforme o prazo de cada aporte, chegando a 10% após 10 anos. Para horizontes longos, costuma ser a melhor escolha."
    },
    {
      tema: "indicacao",
      enunciado: "Um cliente faz a declaração simplificada do IR e quer acumular para a aposentadoria via previdência. O plano mais indicado é:",
      alternativas: [
        "PGBL, pela dedução de até 12% da renda",
        "VGBL, porque o IR incide só sobre os rendimentos e ele não aproveitaria a dedução do PGBL",
        "PGBL, porque o IR incide só sobre os rendimentos",
        "Nenhum, pois previdência exige declaração completa"
      ],
      correta: 1,
      comentario: "A dedução do PGBL só vale na declaração completa. Sem ela, o VGBL é mais eficiente, porque no resgate o IR incide apenas sobre os rendimentos, e não sobre o valor total."
    },
    {
      tema: "indicacao",
      enunciado: "Henrique, perfil conservador, recebeu a oferta de um COE com capital protegido, atrelado a um índice de ações americano, com prazo de 3 anos. Ele conclui que, por ter capital protegido, o risco é o mesmo da poupança. A explicação adequada é:",
      alternativas: [
        "A proteção depende da capacidade de pagamento do emissor, o COE não tem cobertura do FGC e a saída antes do vencimento pode gerar perda",
        "O COE é coberto pelo FGC até R$ 250 mil, assim como a poupança",
        "O COE garante, no mínimo, a variação do CDI no período",
        "A proteção cobre o valor aplicado corrigido pela inflação do período"
      ],
      correta: 0,
      comentario: "Capital protegido é uma promessa do emissor: existe risco de crédito e não há FGC. A proteção vale no vencimento, e no cenário desfavorável o retorno pode ser zero, ou seja, perda real para a inflação."
    },
    {
      tema: "portfolio",
      enunciado: "Com taxa livre de risco de 10% ao ano, a carteira A rendeu 14% com desvio padrão de 8%, e a carteira B rendeu 16% com desvio padrão de 15%. Pelo índice de Sharpe:",
      alternativas: [
        "B é melhor, porque teve maior retorno",
        "A é melhor, com Sharpe de 0,50 contra 0,40 de B",
        "As duas têm o mesmo Sharpe",
        "B é melhor, com Sharpe de 0,40 contra 0,25 de A"
      ],
      correta: 1,
      comentario: "Sharpe = (retorno − taxa livre de risco) ÷ desvio padrão. A: (14 − 10) ÷ 8 = 0,50. B: (16 − 10) ÷ 15 = 0,40. A entrega mais retorno por unidade de risco."
    },
    {
      tema: "portfolio",
      enunciado: "Bruno concentrava toda a carteira de ações em um único banco listado. Ele redistribui o valor entre 20 empresas de setores diferentes, mantendo o mesmo percentual em renda variável. Com essa mudança, o risco que tende a diminuir de forma relevante é o:",
      alternativas: ["Risco específico, ou não sistemático", "Risco sistemático, ou de mercado", "Risco de juros da economia", "Risco de recessão do país"],
      correta: 0,
      comentario: "A diversificação reduz o risco específico de cada empresa. O risco sistemático, ligado a juros, recessão e ao mercado como um todo, continua, porque afeta quase todos os ativos ao mesmo tempo."
    },
    {
      tema: "portfolio",
      enunciado: "Na estratégia de rebalanceamento constant mix, quando a renda variável sobe e passa a ocupar uma fatia maior que a definida, o investidor deve:",
      alternativas: [
        "Comprar mais renda variável para aproveitar a tendência",
        "Não fazer nada até o fim do ano",
        "Vender parte da renda variável e comprar o que ficou abaixo da proporção-alvo",
        "Migrar toda a carteira para renda fixa"
      ],
      correta: 2,
      comentario: "No constant mix, a carteira volta sempre às proporções-alvo: vende o que subiu e compra o que caiu. Buy and hold não rebalanceia, e o CPPI aumenta a exposição ao risco quando a carteira sobe."
    },
    {
      tema: "portfolio",
      enunciado: "Uma carteira de ações tem beta de 1,3 em relação ao Ibovespa. Se o índice cair 10%, espera-se que a carteira:",
      alternativas: ["Caia cerca de 7,7%", "Caia cerca de 10%", "Caia cerca de 13%", "Suba cerca de 3%"],
      correta: 2,
      comentario: "O beta mede a sensibilidade ao mercado: 1,3 × (−10%) ≈ −13%. Carteiras com beta acima de 1 amplificam os movimentos do índice."
    }
  ]
};
