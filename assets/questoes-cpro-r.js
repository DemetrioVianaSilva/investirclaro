/* Investir Claro — Simulado gratuito C-Pro R (banco de 40 questões originais; cada tentativa sorteia 20)
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
    },
    {
      tema: "prospeccao",
      enunciado: "Carlos está convicto de que um FII de lajes corporativas vai se valorizar. Ele passa a ler só relatórios e comentários favoráveis ao fundo e descarta as notícias sobre o aumento da vacância dos imóveis. Esse comportamento indica o viés de:",
      alternativas: ["Confirmação", "Ancoragem", "Aversão à perda", "Efeito manada"],
      correta: 0,
      comentario: "No viés de confirmação, a pessoa busca e valoriza informações que confirmam o que ela já acredita e ignora as que contradizem. O profissional pode ajudar trazendo os pontos contrários de forma objetiva."
    },
    {
      tema: "prospeccao",
      enunciado: "Depois de semanas de vídeos nas redes sociais sobre lucros com uma criptomoeda, vários clientes de perfil conservador procuram a agência pedindo para investir nela \"antes que suba mais\". Esse movimento é típico do:",
      alternativas: ["Efeito manada", "Viés de status quo", "Viés de ancoragem", "Efeito disposição"],
      correta: 0,
      comentario: "No efeito manada, o investidor segue o comportamento do grupo em vez da própria análise. O papel do profissional é voltar ao perfil, aos objetivos e ao risco do ativo antes de qualquer recomendação."
    },
    {
      tema: "prospeccao",
      enunciado: "Rita mantém R$ 15.000 na poupança separados \"para a viagem do ano que vem\" e, ao mesmo tempo, paga juros do rotativo em uma fatura de R$ 4.000, porque \"aquele dinheiro é da viagem\". Esse comportamento é explicado pela:",
      alternativas: ["Contabilidade mental", "Excesso de confiança", "Heurística da disponibilidade", "Heurística da representatividade"],
      correta: 0,
      comentario: "Na contabilidade mental, a pessoa trata o dinheiro de forma diferente conforme o rótulo que deu a ele. Do ponto de vista financeiro, quitar o rotativo com a reserva da viagem custaria muito menos do que os juros pagos."
    },
    {
      tema: "prospeccao",
      enunciado: "Um novo cliente chega à agência dizendo que quer aplicar R$ 50.000 em um fundo multimercado que viu em uma propaganda. Antes de recomendar qualquer produto, o procedimento adequado do profissional é:",
      alternativas: [
        "Verificar a adequação ao perfil, considerando objetivos, horizonte, situação financeira e conhecimento do cliente",
        "Recomendar o fundo pedido, porque a iniciativa partiu do próprio cliente",
        "Recomendar apenas poupança até o cliente completar um ano de relacionamento",
        "Pedir a assinatura de um termo de ciência de risco e dispensar a análise de perfil"
      ],
      correta: 0,
      comentario: "Pela Resolução CVM 30, a recomendação depende da verificação de adequação (suitability): objetivos, situação financeira e conhecimento do cliente. O termo de ciência não substitui essa análise."
    },
    {
      tema: "analise",
      enunciado: "Fábio tem R$ 18.000 em conta corrente e aplicações de liquidez diária. Nos próximos 12 meses, ele deve R$ 12.000 entre fatura do cartão e parcelas de curto prazo. Seu índice de liquidez corrente é:",
      alternativas: ["0,67", "1,5", "2,0", "6.000"],
      correta: 1,
      comentario: "Liquidez corrente = ativos de curto prazo ÷ dívidas de curto prazo = 18.000 ÷ 12.000 = 1,5. Acima de 1, os ativos líquidos cobrem as obrigações de curto prazo. R$ 6.000 é a folga em reais, não o índice."
    },
    {
      tema: "analise",
      enunciado: "Ana tem renda líquida de R$ 7.000 por mês e hoje poupa 10% dela. Ela quer passar a poupar 20% da renda. Mantida a renda, quanto ela precisa reduzir das despesas mensais?",
      alternativas: ["R$ 700", "R$ 1.400", "R$ 350", "R$ 2.100"],
      correta: 0,
      comentario: "Hoje ela poupa R$ 700 (10%). A meta é R$ 1.400 (20%). A diferença, R$ 700, precisa sair das despesas. R$ 1.400 é o total a poupar, não o corte necessário."
    },
    {
      tema: "analise",
      enunciado: "Jorge tem uma casa de R$ 300.000, um carro de R$ 50.000 e R$ 40.000 em aplicações. Deve R$ 180.000 de financiamento imobiliário e R$ 5.000 no cartão de crédito. Seu patrimônio líquido é:",
      alternativas: ["R$ 205.000", "R$ 390.000", "R$ 210.000", "R$ 155.000"],
      correta: 0,
      comentario: "Patrimônio líquido = ativos − passivos = (300.000 + 50.000 + 40.000) − (180.000 + 5.000) = R$ 205.000. R$ 390.000 é só o total de ativos, e R$ 210.000 esquece a dívida do cartão."
    },
    {
      tema: "analise",
      enunciado: "Cláudia, 35 anos, tem perfil arrojado pelo questionário de suitability. Ela tem R$ 80.000 que serão usados como entrada de um apartamento daqui a 10 meses. Para esse recurso, a orientação adequada é:",
      alternativas: [
        "Considerar o horizonte curto do objetivo e indicar aplicações de baixa volatilidade e liquidez compatível com a data da compra",
        "Indicar ações, porque o perfil arrojado permite assumir risco com todo o patrimônio",
        "Indicar um título prefixado com vencimento em 5 anos, que paga a maior taxa",
        "Indicar um plano de previdência, pelo benefício fiscal no longo prazo"
      ],
      correta: 0,
      comentario: "O perfil mostra a tolerância a risco, mas cada objetivo tem seu horizonte. Dinheiro com data marcada em 10 meses não pode depender de oscilações nem ficar preso em um vencimento posterior."
    },
    {
      tema: "indicacao",
      enunciado: "Lucas resgatou um CDB após 400 dias de aplicação, com rendimento bruto de R$ 2.000. O IR retido na fonte foi de:",
      alternativas: ["R$ 350", "R$ 450", "R$ 400", "R$ 300"],
      correta: 0,
      comentario: "Pela tabela regressiva da renda fixa, de 361 a 720 dias a alíquota é 17,5%: 2.000 × 17,5% = R$ 350. As outras alternativas usam as faixas de 22,5%, 20% e 15%."
    },
    {
      tema: "indicacao",
      enunciado: "Beatriz aplicou em um CDB de liquidez diária e precisou resgatar o valor 15 dias depois. Sobre os rendimentos desse resgate incidem:",
      alternativas: [
        "IOF regressivo e IR de 22,5%",
        "Apenas IR de 22,5%",
        "Apenas IOF regressivo",
        "IR de 15%, por ser aplicação de liquidez diária"
      ],
      correta: 0,
      comentario: "Resgates antes de 30 dias pagam IOF regressivo sobre o rendimento. Em seguida, o IR é calculado sobre o rendimento já descontado do IOF, com alíquota de 22,5% por estar abaixo de 180 dias."
    },
    {
      tema: "indicacao",
      enunciado: "Em um cenário de Selic a 12% ao ano, um cliente pergunta quanto rende o dinheiro depositado hoje na poupança. A resposta correta é:",
      alternativas: [
        "0,5% ao mês mais a TR",
        "70% da Selic mais a TR",
        "100% do CDI, isento de IR",
        "Apenas a variação da TR"
      ],
      correta: 0,
      comentario: "Para depósitos feitos a partir de maio de 2012, com a Selic acima de 8,5% ao ano, a poupança rende 0,5% ao mês mais a TR. A regra de 70% da Selic mais TR vale quando a Selic está em 8,5% ou menos."
    },
    {
      tema: "indicacao",
      enunciado: "Sônia, 45 anos, quer garantir o poder de compra de uma reserva para a aposentadoria daqui a 15 anos e teme que a inflação fique acima do esperado pelo mercado. Entre os títulos públicos, o mais alinhado a esse objetivo é o:",
      alternativas: [
        "Tesouro IPCA+, que paga uma taxa real acima da inflação",
        "Tesouro Prefixado, que paga uma taxa nominal definida na compra",
        "Tesouro Selic, que acompanha a taxa básica de juros",
        "Tesouro Prefixado com juros semestrais de curto prazo"
      ],
      correta: 0,
      comentario: "O Tesouro IPCA+ protege contra a inflação ao pagar IPCA mais uma taxa real. No prefixado, se a inflação vier acima do esperado, o ganho real diminui. Mantido até o vencimento, o IPCA+ entrega a taxa real contratada."
    },
    {
      tema: "indicacao",
      enunciado: "Paulo, pessoa física, vendeu na bolsa cotas de um FII com lucro de R$ 5.000. O imposto devido sobre esse ganho é de:",
      alternativas: [
        "R$ 1.000, pagos por DARF, com alíquota de 20%",
        "Isento, como os rendimentos mensais do fundo",
        "R$ 750, com alíquota de 15%",
        "R$ 1.125, com alíquota de 22,5%"
      ],
      correta: 0,
      comentario: "O ganho de capital na venda de cotas de FII é tributado em 20%, recolhido pelo próprio investidor via DARF. A isenção para pessoa física, quando cumpridos os requisitos, vale para os rendimentos distribuídos, não para o lucro na venda."
    },
    {
      tema: "indicacao",
      enunciado: "Marcos fez apenas operações comuns no mês e vendeu R$ 18.000 em ações, com lucro de R$ 3.000. Sobre esse lucro:",
      alternativas: [
        "Não há IR, porque o total de vendas no mês ficou abaixo de R$ 20.000",
        "Há IR de 15%, ou seja, R$ 450",
        "Há IR de 20%, ou seja, R$ 600",
        "Há IR de 15% sobre o total vendido"
      ],
      correta: 0,
      comentario: "Em operações comuns com ações, a pessoa física tem isenção de IR quando o total de vendas no mês não passa de R$ 20.000. Acima disso, o lucro é tributado em 15%. Day trade não tem essa isenção."
    },
    {
      tema: "indicacao",
      enunciado: "No fim de maio, Rodrigo percebe que a quantidade de cotas do seu fundo de renda fixa de longo prazo diminuiu, sem que ele tenha feito resgate. A explicação é:",
      alternativas: [
        "Come-cotas, a antecipação semestral do IR, à alíquota de 15%",
        "Cobrança de taxa de performance, descontada em cotas",
        "Incidência de IOF sobre o saldo do fundo",
        "Come-cotas, à alíquota de 22,5%"
      ],
      correta: 0,
      comentario: "Nos fundos sujeitos ao come-cotas, o IR é antecipado em maio e novembro com redução de cotas. Para fundos de longo prazo, a alíquota é 15%; para fundos de curto prazo, 20%. A diferença até a alíquota final é cobrada no resgate."
    },
    {
      tema: "indicacao",
      enunciado: "Um produtor de café teme que o preço da saca caia até a colheita, daqui a 6 meses. Para se proteger no mercado futuro, ele deve:",
      alternativas: [
        "Vender contratos futuros de café",
        "Comprar contratos futuros de café",
        "Comprar opções de compra de café",
        "Vender opções de venda de café"
      ],
      correta: 0,
      comentario: "Quem tem o produto e teme queda de preço faz hedge vendido: trava hoje o preço de venda. Se o preço cair, o ganho no futuro compensa a perda na venda física. Comprar futuro protege quem teme alta."
    },
    {
      tema: "portfolio",
      enunciado: "Uma carteira rendeu 15% no ano, com beta de 1,25. A taxa livre de risco no período foi de 10%. O índice de Treynor dessa carteira é:",
      alternativas: ["4,0", "6,25", "12,0", "0,25"],
      correta: 0,
      comentario: "Treynor = (retorno − taxa livre de risco) ÷ beta = (15 − 10) ÷ 1,25 = 4,0. Diferente do Sharpe, ele mede o excesso de retorno por unidade de risco sistemático."
    },
    {
      tema: "portfolio",
      enunciado: "Sérgio, 58 anos, vai se aposentar daqui a 2 anos e começará a resgatar parte da carteira para complementar a renda. Hoje, 70% dela está em ações. A orientação adequada é:",
      alternativas: [
        "Revisar o perfil e reduzir gradualmente a exposição a risco, alinhando a liquidez ao início dos resgates",
        "Manter a alocação, porque ações rendem mais no longo prazo",
        "Aumentar a parcela em ações para acelerar o crescimento antes da aposentadoria",
        "Vender toda a renda variável de uma vez, sem considerar tributação nem preço"
      ],
      correta: 0,
      comentario: "A aposentadoria é um evento de vida que muda o horizonte e a necessidade de liquidez. A transição gradual reduz o risco de precisar vender na baixa e permite planejar a tributação."
    },
    {
      tema: "portfolio",
      enunciado: "A carteira de Helena tem alvo de 50% em renda fixa e 50% em ações. Depois de uma alta da bolsa, as ações passaram a 60%. Ela faz aportes mensais e quer voltar ao alvo sem realizar lucro agora. A estratégia adequada é:",
      alternativas: [
        "Direcionar os novos aportes para a renda fixa até a proporção voltar ao alvo",
        "Vender imediatamente as ações excedentes",
        "Direcionar os novos aportes para ações, aproveitando a tendência",
        "Mudar o alvo para 60% em ações"
      ],
      correta: 0,
      comentario: "Rebalancear pelos aportes evita vender ativos com lucro e, portanto, gerar IR e custos. Funciona bem quando os aportes são relevantes em relação ao desvio da carteira."
    },
    {
      tema: "portfolio",
      enunciado: "Mônica tem na carteira títulos prefixados com vencimento longo. O Copom passa a sinalizar um ciclo de cortes na Selic, e o mercado reduz as taxas futuras. Na marcação a mercado, esses títulos tendem a:",
      alternativas: [
        "Valorizar, porque a queda das taxas aumenta o preço dos prefixados",
        "Desvalorizar, porque a renda fixa rende menos com juros menores",
        "Manter o preço, porque a taxa foi contratada na compra",
        "Desvalorizar, porque passam a pagar a nova taxa, menor"
      ],
      correta: 0,
      comentario: "Preço e taxa andam em direções opostas. Quando as taxas de mercado caem, o título que paga uma taxa maior fica mais valioso, e o efeito é maior quanto mais longo o prazo."
    }
  ]
};
