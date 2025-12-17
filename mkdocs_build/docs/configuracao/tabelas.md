# Tabelas de Apoio

## Motivo de Parada

<p>
Os motivos de parada determinam as razões pelas quais um supervisor pode registrar uma interrupção <b>entre</b> a execução de uma agenda no aplicativo 4Sup. Essa configuração é essencial para padronizar os registros de pausas e garantir que cada evento de parada seja classificado corretamente no sistema, permitindo a rastreabilidade e o controle de tempo em campo. Essa configuração garante que cada evento de parada seja devidamente identificado e contabilizado.
</p>


-**Configuração no GesOper**
<p>
Para cadastrar ou editar os motivos disponíveis no aplicativo, acesse o GesOper Operacional e siga o caminho:
Tabelas de Apoio → Fiscalização → Motivo de Parada
</p>


<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/0Rd67hfj/tabela-apoio-fiscalizacao.jpg" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong></strong>
  </figcaption>
</figure>

<p>
Na janela 'Motivo Parada', insira um novo número decimal dentro do campo 'Código' e aperte a tecla 'TAB' para inserir um novo motivo de parada. As setas servem para navegação entre os itens já cadastrados.
</p>


<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/b5SCx6dx/tabela-apoio-fiscalizacao1.jpg" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Ao cadastrar novos motivos de parada, o padrão é o uso de CAIXA ALTA.</strong>
  </figcaption>
</figure>
<p>
O botão 'Consultar' abre a janela Lista de Seleção Motivo Parada. 
</p>

<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/KxYgSvcg/tabela-apoio-fiscalizacao2.jpg" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong></strong>
  </figcaption>
</figure>

<p>
O uso do recurso <em>Paradas</em> no aplicativo 4SUP, assim como a emissão de relatórios contendo essas informações, pode ser visto aqui: 
<a href="https://4sup-documentation.vercel.app/app/parada/">documentação de Paradas</a>.
</p>



## Grupo de Fiscalização
<p>
O grupo de fiscalização é um elemento de organização dentro do módulo de Tabelas de Apoio do GesOper. Ele serve para agrupar os itens de checklist que serão supervisionados durante as vistorias. Cada grupo representa um conjunto de itens de uma mesma natureza, como por exemplo Vigilância, Limpeza, Materiais, Asseio ou Conservação.
</p>

<p>
Os motivos de parada cadastrados no GesOper ficam  disponíveis no aplicativo 4Sup para seleção pelos supervisores entre a execução de suas rotas. Para saber mais sobre o processo de UTILIZAÇÃO dos motivos de parada, consulte a seção de Motivos de Parada no Aplicativo 4SUP.
</p>

-**Configuração no GesOper**
<p>
Para cadastrar ou editar os grupos de fiscalização, acesse o GesOper Operacional e siga o caminho:
Tabelas de Apoio → Fiscalização → Grupo de Fiscalização
</p>

<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/mFX7pqvB/tabela-apoio-fiscalizacao-grupo1.jpg" Posto" width="400">
  </p>
  <figcaption align="center">Insira um novo numeral inteiro dentro do campo 'Código' e aperte a tecla 'TAB' para cadastrar um novo grupo de fiscalização. As setas servem para navegação entre os itens já cadastrados.  </figcaption>
</figure>


<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/JWRP4BYm/tabela-apoio-fiscalizacao-grupo2.jpg" Posto" width="400">
  </p>
  <figcaption align="center">O botão 'Consultar' abre a janela Lista de Seleção Motivo Parada. </figcaption>
</figure>

<p>
Durante a criação dos itens de fiscalização, cada item é associado a um grupo previamente definido, garantindo que o checklist apresentado ao supervisor no aplicativo siga uma estrutura padronizada. O cadastro de itens será abordado no próximo tópico. 
</p>

## Itens de Fiscalização

<p>
Os itens de fiscalização representam os pontos de verificação que o supervisor deve avaliar durante a execução de uma supervisão no aplicativo 4Sup. Cada item é vinculado a um grupo de fiscalização, que organiza o checklist por natureza de serviço, como Vigilância, Limpeza, Jardinagem, Portaria, entre outros.
</p>

<p>
Esses itens são configurados no GesOper Operacional, no menu Tabelas de Apoio → Fiscalização → Itens de Fiscalização
</p>

<p>
O código de cada item de fiscalização deve ser único e decimal, servindo como identificador dentro do sistema e garantindo que não haja duplicidades no cadastro.<br><br>

O campo de descrição deve representar de forma objetiva e direta o que será verificado em campo. Esse texto é o que o supervisor visualizará durante o preenchimento da checklist no aplicativo, portanto deve expressar claramente o elemento a ser avaliado (por exemplo: “Uniforme completo e limpo”, “Materiais disponíveis no posto”, “Rádio em funcionamento”).<br><br>

Uma checklist é composta por um conjunto de itens de fiscalização organizados por grupos de fiscalização. Cada item deve estar vinculado a um grupo coerente com sua natureza. Por exemplo, itens relacionados à limpeza devem estar dentro do grupo Limpeza, enquanto itens de vigilância devem pertencer ao grupo Vigilância.
Quando necessário, é possível estruturar subgrupos para aprimorar a organização interna e facilitar a análise posterior dos resultados.<br><br>

O campo Observação/Pergunta é meramente descritivo, servindo para registrar informações adicionais que orientam o supervisor ou detalham o propósito do item. <br><br>

O campo Tipo define a forma de resposta esperada para o item. Existem 3 categorias:<br><br>

Situação: utilizada para avaliações de condição, com opções como Ok, Repor, Consertar e N/A (Não se aplica).<br><br>

Medição: usada para avaliações qualitativas, com opções como Ótimo, Bom, Regular, Péssimo e N/A.<br><br>

Situação/Medição: Ambos critérios são utilizados para avaliar um item <br><br>

Cada item pode conter um ou ambos os tipos de resposta, conforme a necessidade de controle da operação.<br><br>

Clique aqui para visualizar como os itens cadastrados aparecem em uma checklist no aplicativo.
<a href="https://4sup-documentation.vercel.app/app/agendas/#checklists">Checklists no APP</a>.
</p>

<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/ynF6zRy0/tabela-apoio-fiscalizacao-item1.jpg" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong></strong>
  </figcaption>
</figure>

<p>
O botão Consultar abre uma janela com a relação de todos os itens de fiscalização cadastrados, exibindo seus respectivos códigos, descrições e grupos de fiscalização aos quais pertencem.
Essa visualização permite conferir rapidamente se os itens estão organizados de forma coerente e devidamente vinculados aos grupos corretos.
No exemplo abaixo, é possível observar a existência de diversos grupos de fiscalização, cada um reunindo itens de natureza semelhante.
</p>

<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/PZDv0C9h/tabela-apoio-fiscalizacao-item2.jpg" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong></strong>
  </figcaption>
</figure>

<p>
O botão Listar gera um relatório completo contendo todos os itens de fiscalização e seus grupos associados.
Esse relatório pode ser utilizado para auditoria interna, conferência de cadastros ou exportação de informações.
</p>


<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/hR5dtDkL/tabela-apoio-fiscalizacao-item3.jpg" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong></strong>
  </figcaption>
</figure>
<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/zHRkdLDp/tabela-apoio-fiscalizacao-item4.jpg" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Relatório geral de itens de checklist</strong>
  </figcaption>
</figure>


## Checklists

<p>
O checklist é o conjunto de itens de fiscalização que o supervisor deve preencher durante a execução de uma agenda no aplicativo 4Sup. Ele consolida as verificações configuradas no GesOper Operacional.<br><br>
</p>

<p>
Esses itens são configurados no GesOper Operacional, no menu Tabelas de Apoio → Fiscalização → Checklist
</p>



<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/YBsRK1jH/image.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Janela de cadastro de Checklists no GesOper Corporate</strong>
  </figcaption>
</figure>

<p>
O campo Código de cada checklist deve ser único e decimal, funcionando como identificador principal dentro do sistema e garantindo que não haja duplicidades no cadastro<br><br>

A configuração 'Para' determina o grupo de fiscalização do qual esta checklist pertence. <br><br>

O campo Descrição deve ser único e representar, de forma objetiva, a área de atuação ou o propósito da checklist. Esse é o texto exibido ao supervisor no aplicativo 4Sup, permitindo identificar facilmente o checklist correspondente à sua agenda.<br><br>

O campo Observação tem caráter descritivo e serve para orientar os gestores sobre o propósito de cada checklist dentro do sistema. Esse campo não é exibido no aplicativo 4Sup, sendo utilizado apenas como referência interna no GesOper, auxiliando na identificação e organização das checklists cadastradas.<br><br>

Para incluir novos itens em uma checklist, clique no símbolo “*” localizado na linha em branco da coluna Código. Também é possível pressionar a tecla F4 para abrir a lista completa de itens disponíveis e selecionar aqueles que devem compor o checklist.<br><br>

O botão Listar permite gerar um relatório completo de todos os checklists cadastrados no sistema, apresentando informações como código, descrição, observação e grupos de fiscalização vinculados.<br><br>

Cada checklist é formado por um ou mais items de fiscalização, que reúnem os grupos relacionados a uma área específica do posto.<br><br>
</p>

<p>
Os checklist's podem ser associados a um ou mais níveis hierárquicos, conforme a necessidade operacional:
Posto – o checklist será aplicado somente aos supervisores naquele posto específico; <br><br>
Vá em Cadastros -> Postos -> Aba 'Supervisão' e clique no botão Checklist:
</p>
<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/xSvSywKR/image.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>O botão CHECKLIST está em amarelo na foto</strong>
  </figcaption>
</figure>



Contrato – o checklist será aplicado a todos os supervisores de postos vinculados ao contrato.<br><br>

Vá em Operacional -> Contratos -> Novamente, na aba Contratos -> Contratos :<br>
Ao escolher o contrato, vá na aba Documentos -> Checklist.<br>

<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/JWhLq042/image.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>O botão CHECKLIST está em amarelo na foto abaixo da aba Documentos</strong>
  </figcaption>
</figure>

<br><br>
<p>
Filial – o checklist será aplicado a todos os supervisores nos postos da filial.<br>
Vá em Operacional -> Utilitários -> Configurações de Filial -> Geral<br>
Clique no botão Checklists de Supervisão dentro da aba Ocorrencia e SAC<br>
<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/vv4vqqdz/image.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>O botão CHECKLIST está em amarelo na foto abaixo da aba Documentos</strong>
  </figcaption>
</figure>
</p>

## Peridiocidade de Fiscalização

<p>
A tela de Periodicidade de Fiscalização permite configurar as regras que determinam com que frequência cada posto ou contrato deve receber visitas de supervisão. A geração de agendas por periodicidade não é feita através do GesOper Corporate, e sim no portal WEB 4SUP. Nessa etapa, o gestor define o intervalo mínimo e máximo de dias entre as fiscalizações, garantindo maior flexibilidade e evitando padrões repetitivos. Também é possível indicar quem será o responsável pela geração da agenda periódica(supervisor, coordenador ou ambos) e selecionar em quais dias da semana as visitas podem ocorrer, separando os turnos diurno e noturno. Quando ambos são marcados para um mesmo dia, o sistema realiza o sorteio do turno no momento da geração da agenda. Após configurada, a periodicidade orienta o GesOper na criação automática das agendas, respeitando os dias permitidos, o intervalo configurado e a lógica de variação entre turnos quando aplicável, garantindo rotinas de fiscalização mais consistentes, distribuídas e alinhadas à operação do 4SUP.
</p><br><br>

<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/xq0QvqY3/image.png" Peridiocidade de Supervisao" width="400">
  </p>
  <figcaption align="center">
    <strong>Peridiocidade de Supervisao</strong>
  </figcaption>
</figure>
</p>



<p>
Explicação dos campos da tela:<br><br>

Código : Identificador único da periodicidade. Usado apenas internamente para organização. <br><br>

Descrição : Resumo da regra de fiscalização (ex.: “12x36 – Diurna – Seg/Qua/Sex”).
Ajuda o gestor a localizar e entender rapidamente a regra cadastrada.<br><br>

Periodicidade entre X e Y dias<br>

Define o intervalo mínimo e máximo de dias entre uma visita e outra.<br>

Entre 2 e 2 dias → Visita fixa a cada 2 dias<br>

Entre 2 e 3 dias → O sistema sorteia aleatoriamente se será em 2 ou 3 dias<br>

Entre 3 e 5 dias → A visita pode ocorrer a cada 3, 4 ou 5 dias<br>

Essa variação é útil para não criar padrões previsíveis de auditoria.<br><br>

Responsável

Define quem tem o privilégio de gerar agendas de supervisão periódicas: <br><p>
Supervisor [Apenas os supervisores conseguem gerar agendas periódicas, através do aplicativo 4SUP]<p>

Coordenador [Apenas os coordenadores conseguem gerar agendas periódicas, através do GesOper Corporate]<p>

Ambos <br><br>

Dias disponíveis para fiscalização: <p>

Especifica em quais dias da semana as visitas podem ser agendadas de maneira periódica.

Há duas linhas:<p>

Diurno e Noturno

Se o usuário marcar dias nas duas linhas, o sistema sorteará se a visita será diurna ou noturna.<br><br>

Como funciona a lógica da periodicidade:<p>

A periodicidade trabalha com duas variáveis principais:

Intervalo mínimo/máximo entre visitas

Dias da semana disponíveis para execução

O 4SUP/ GesOper combina esses fatores para gerar agendas automáticas que:

evitam padrões fixos previsíveis,

respeitam turnos (diurno/noturno),

só geram visitas em dias autorizados,

mantêm coerência com a escala do posto.<br><br>

Como o sistema monta a agenda de fiscalização:<p>

Quando o gestor grava a periodicidade e vincula ao posto:<p>

O sistema verifica os dias permitidos (ex.: Terça, Quinta e Sexta).<p>

Considera se a fiscalização pode ocorrer durante o dia, à noite ou ambos.<p>

Calcula a próxima data possível dentro do intervalo (ex.: entre 2 e 2 dias ou 2 e 3 dias).<p>

Se cair em um dia não permitido, ajusta para o próximo disponível.<p>

Caso o turno seja misto, sorteia entre diurno e noturno.<p>
</p>

## Exemplos de Funcionamento da Periodicidade de Fiscalização

!!! example "Exemplo 1 — Periodicidade fixa (2 em 2 dias)"
    **Periodicidade:** Entre 2 e 2 dias  
    **Data inicial:** 01/01/2025  
    **Supervisor marcado:** João

    Linha do tempo:

    | Data       | Evento |
    |------------|--------|
    | 01/01/2025 | Início da vigência da periodicidade |
    | 03/01/2025 | 1ª agenda gerada automaticamente |
    | 05/01/2025 | 2ª agenda gerada |
    | 07/01/2025 | 3ª agenda gerada (e assim por diante) |

    Se nenhum supervisor estiver marcado, **nenhuma agenda será gerada**, mesmo com periodicidade configurada.


!!! example "Exemplo 2 — Periodicidade variável (entre 3 e 5 dias)"
    **Periodicidade:** Entre 3 e 5 dias  
    **Dias permitidos:** Terça, Quinta e Sábado  
    **Turno:** Diurno  
    **Data inicial:** 10/02/2025

    Funcionamento passo a passo:

    1. Sistema escolhe um intervalo aleatório: **4 dias**  
    2. Data calculada: **14/02/2025 (sexta)**  
    3. Sexta-feira não está permitida  
    4. Próximo dia permitido: **15/02/2025 (sábado)**  
    5. Agenda gerada em **15/02/2025**

    O sistema sempre ajusta para o próximo dia permitido quando a data calculada não é válida.


!!! example "Exemplo 3 — Dois supervisores com a mesma periodicidade"
    **Periodicidade:** 2 a 3 dias  
    **Supervisores marcados:** Ana e Pedro  
    **Ordem de prioridade:**  
    1. Ana  
    2. Pedro

    Regra de distribuição:

    - Se Ana estiver disponível → **ela recebe a agenda primeiro**
    - Se Ana não puder receber (férias, desligada, desmarcada) → **Pedro recebe**
    - A periodicidade é a mesma, mas a **ordem na lista define a prioridade**
    - (*A disponibilidade de um supervisor depende se o funcionário em questão tem escala e jornada)


!!! example "Exemplo 4 — Supervisor noturno"
    **Horário do turno noturno:** A partir das 19h  
    **Supervisores marcados:**  
    - Carlos (diurno)  
    - Marcos (noturno)

    Distribuição:

    - Agendas geradas antes das 19h → **Carlos**
    - Agendas geradas após as 19h → **Marcos**
    - Se ambos possuírem periodicidade configurada e o turno for misto, o sistema poderá sortear, desde que o turno seja permitido para cada supervisor.


A comando pra gerar agendas automaticamente em periodos estabelecidos pela peridiocidade pode ser visto aqui.

## Responsável do Cliente no Posto

<p>
# Responsável do Cliente no Posto

O **Responsável do Cliente no Posto** é a pessoa indicada pela contratante para validar e confirmar que a fiscalização realizada pelo supervisor foi executada corretamente. Antes do *check-out* da agenda, o 4SUP pode solicitar que esse responsável assine digitalmente a conclusão da visita.

A assinatura confirma que:

- A auditoria foi realizada no local;  
- Todos os itens da checklist foram verificados;  
- Fotos e evidências foram registradas;  
- O supervisor concluiu o trabalho conforme o esperado.

---

## Por que essa assinatura é importante?

!!! info "Finalidade da assinatura"
    A assinatura do responsável atua como **validação formal** da fiscalização, servindo como evidência operacional entre a empresa prestadora e o cliente.  
    Ela garante:
    
    - Transparência no processo de auditoria  
    - Registro oficial da fiscalização  
    - Credibilidade no histórico de visitas  
    - Segurança contratual

---

## Cadastro dos Responsáveis do Cliente

O cadastro é feito no módulo de clientes do GesOper.

**Caminho:**  
`Operacional → Cadastros → Clientes e Fornecedores → Clientes`

1. Selecione o cliente desejado.  
2. Clique em **Contatos** (canto inferior direito).  
3. Cadastre:
   - Nome completo  
   - Telefone  
   - E-mail  
   - Cargo / Função  


!!! tip "Dica"
    Cadastre **mais de um responsável** quando o cliente possuir diferentes turnos, mudanças frequentes ou substituições regulares no posto.

---

## Figura: Tela de Cadastro de Contatos do Cliente

<figure markdown>
  <img src="https://via.placeholder.com/800x420?text=Imagem+Cadastro+de+Contatos+do+Cliente" alt="Tela de contatos do cliente" />
  <figcaption align="center"></figcaption>
</figure>

---

## Vinculação do Responsável ao Posto

Depois de cadastrado no cliente, o responsável deve ser vinculado ao posto.

!!! example "Exemplo de vínculo"
    - Cliente: **Condomínio Alfa**  
    - Postos: Portaria 1, Portaria 2, Garagem  
    - Responsável: João da Silva  

    Ao vincular João aos três postos, qualquer fiscalização nesses locais poderá solicitar sua assinatura no *check-out*.

---

## Assinatura no Relatório de Supervisão

A assinatura coletada pelo 4SUP é automaticamente exibida:

- No **Relatório de Supervisão**  
- No **Relatório de Checklist**  
- Em relatórios consolidados da empresa  
- Em documentos enviados ao cliente

!!! note "Como a assinatura aparece"
    A assinatura é adicionada ao final do relatório com:
    - Nome do responsável  
    - Horário do *check-out*  
    - Nome do supervisor  
    - Posto fiscalizado  
    - Código do contrato  

---

## Figura: Exemplo de Assinatura no Relatório

<figure markdown>
  <img src="https://via.placeholder.com/800x420?text=Exemplo+de+Assinatura+no+Relatorio" alt="Assinatura no relatório" />
  <figcaption align="center">Exemplo ilustrativo da assinatura do responsável no relatório</figcaption>
</figure>

---

# Fluxograma: Processo Completo da Assinatura

```mermaid
flowchart TD

A[Supervisor inicia a fiscalização] --> B[Preenche checklist e adiciona fotos]
B --> C[Supervisor realiza o Check-out]
C --> D{Deseja coletar assinatura?}

D -- Sim --> E[Responsável assina digitalmente]
E --> F[Relatório gerado com assinatura]

D -- Não --> G[Relatório gerado sem assinatura]

F --> H[Relatório disponível no Portal Web]
G --> H

Exemplo Prático Completo

!!! example "Exemplo – Processo completo"
1. Supervisor realiza a fiscalização no posto.
2. Preenche checklist + fotos.
3. Inicia o check-out.
4. Sistema solicita assinatura.
5. Responsável assina.
6. Assinatura é anexada ao relatório final.
7. Documento é enviado ao cliente/gerência.

Boas Práticas

!!! tip "Recomendações importantes"
- Mantenha pelo menos um responsável cadastrado e vinculado ao posto.
- Atualize contatos periodicamente.
- Utilize a assinatura obrigatória para postos críticos.
- Garanta que o supervisor saiba o procedimento de coleta.

Quando a Assinatura Não Aparece?

!!! warning "Situações comuns"
- Nenhum responsável está vinculado ao posto.
- Supervisor não solicitou assinatura.
- Cliente recusou a assinatura.
- Empresa desativou a exigência de assinatura para aquele contrato.