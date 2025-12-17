# AGENDAS

<p>
O módulo Agendas no aplicativo 4SUP é o ponto central de trabalho do supervisor.<br><br>

Ele exibe a lista das fiscalizações programadas e permite criar, iniciar, finalizar e justificar supervisões de campo diretamente pelo dispositivo móvel.
As agendas são sincronizadas em tempo real com o Portal Web 4SUP, garantindo que qualquer atualização feita pelo supervisor ou pela base seja refletida automaticamente para ambos os lados.
Além disso, a tela de agendas serve como ponto de partida para as principais ações operacionais, como a realização de check-in nos postos, a consulta de informações detalhadas da supervisão e o encerramento das atividades após o check-out.
</p>


## Acesso e Navegação

<p>
O acesso à funcionalidade Agendas é realizado por meio do menu principal do aplicativo, selecionando a opção correspondente. Após o acesso, a tela exibe a listagem completa das agendas atribuídas ao supervisor, organizadas de acordo com o status de execução.
</p>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/PvtNRgKX/1.png" alt="Tela inicial" width="400">
  </p>
  <figcaption align="center">
  </figcaption>
</figure>

<p>
As agendas são classificadas em três estados distintos: Aguardando, que indica uma agenda ainda não iniciada; Em andamento, que representa uma supervisão ativa no momento; e Supervisionadas, que identifica as agendas já concluídas. Essa estrutura de exibição facilita o acompanhamento das atividades em campo, permitindo ao supervisor visualizar rapidamente quais agendas ainda precisam ser executadas e quais já foram finalizadas.

O sistema também aplica restrições relacionadas ao turno da agenda. As agendas são exibidas apenas dentro do período configurado para o turno correspondente (dia ou noite), de modo que não é possível realizar o check-in em um horário incorreto. Caso o supervisor tente iniciar uma agenda fora do turno autorizado, a opção de check-in permanecerá indisponível.
</p>
<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/v6VTrM5g/2.png" alt="Tela inicial" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 1:</strong> Tela inicial do aplicativo 4SUP exibindo as agendas em status "Aguardando"
  </figcaption>
</figure>


## Criação de Agendas no App: 

<p>
Quando o perfil do supervisor possui permissão para criação de agendas (Clique aqui para ler a respeito desta configuração) o botão “+” é exibido na tela principal do módulo de agendas, no canto superior direito. 
</p>
<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/JjKnjqzV/9.png" alt="Tela inicial" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 1:</strong> Tela inicial do aplicativo 4SUP exibindo as agendas em status "Aguardando"
  </figcaption>
</figure>


<p>
Ao tocar no botão “+”, é aberta a tela de Gerar Agenda. O supervisor deve selecionar o tipo da agenda, podendo optar entre Avulsa ou Urgente (Clique aqui para ler a respeito da diferença entre Avulsa e Urgente) definir o turno (diurno ou noturno); indicar o posto e, no caso de agendas urgentes, registrar uma justificativa explicando o motivo da criação. 
</p>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/nqrTK3CN/3.png"Tela inicial" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 2:</strong> O aplicativo lista em tela os postos disponiveis do qual o usuário está listado como supervisor
  </figcaption>
</figure>

<p>
É possivel gerar agendas para múltiplos postos, tocando o botão de contorno azul ao lado do nome do posto.
</p>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/ksVn7V1R/5.png" alt="Tela inicial" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 1:</strong> Tela inicial do aplicativo 4SUP exibindo as agendas multiplas agendas selecionadas para geração.
  </figcaption>
</figure>


## Execução de Agendas: 
<p>
A execução de uma agenda representa o processo de supervisão em campo. Após selecionar uma agenda com status Aguardando, o supervisor deve iniciar o check-in:
</p>

- **Check-IN**:

<p>
O check-in marca o início efetivo da supervisão em campo e tem como objetivo registrar o momento e a localização exata em que o supervisor chega ao posto designado
</p>


<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/Rp1wBMgz/10.png
    " alt="Tela inicial" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 1:</strong> Toque o icone no canto superior direito para iniciar o proecesso de check-in.
  </figcaption>
</figure>

<p>
Para realizar o check-in, o supervisor deve acessar a agenda com status Aguardando e selecionar o posto correspondente. O aplicativo verifica automaticamente as coordenadas de latitude e longitude configuradas no cadastro do posto e compara com a posição atual do dispositivo. Caso a distância esteja dentro do limite definido nas configurações da empresa, o sistema libera a execução e registra o horário de início da atividade.
</p>

<p>
O check-in é o procedimento que marca o início da execução da agenda e valida a presença do supervisor no posto designado. Essa operação é fundamental para garantir a rastreabilidade das atividades de supervisão, registrando data, hora e localização no momento do início da vistoria.<br><br>



<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/B2RYjcFC/11.png" alt="Tela inicial" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 1:</strong> Toque o icone no canto superior direito para iniciar o proecesso de check-in.
  </figcaption>
</figure>


Quando a configuração “Utilizar início e fim de rota” está habilitada, o sistema solicita que o supervisor informe o odômetro do veículo da empresa antes de confirmar o check-in. Essa informação é utilizada para controle de deslocamento e acompanhamento de quilometragem nas rotas supervisionadas. Caso o supervisor utilize veículo próprio, o preenchimento do odômetro não é exigido.<br><br>

Por padrão, o sistema espera que o supervisor esteja no posto base para iniciar a rota. Essa validação é feita por meio das coordenadas de latitude e longitude do posto, comparadas com a posição atual do dispositivo. No entanto, é possível iniciar a rota fora da localização do posto base, desde que o supervisor registre uma justificativa no momento da tentativa. Quando isso ocorre, o local de início da rota é registrado e posteriormente exibido nos relatórios de supervisão, garantindo transparência sobre o deslocamento inicial.<br><br>

Após a confirmação do check-in, o aplicativo libera o acesso às demais rotinas da supervisão, como verificação de escalas, execução de checklists e lançamento de ocorrências. É possivel liberar as rotinas sem realizar o check-in, caso necessário, desde que configuração esteja vigente. Todas as informações registradas nesse momento ( horário, localização e, quando aplicável, leitura do odômetro ) são  enviadas ao portal, compondo o histórico da visita e os relatórios de rota.<br><br>
</p>


- **Geolocalização**: Cada parada registrada armazena automaticamente: a localização GPS do dispositivo no momento do registro. Essas informações são exibidas no mapa do portal 4Sup, permitindo ao gestor visualizar onde e quando cada parada ocorreu.

- **Relatórios**: No portal web 4Sup, as paradas são exibidas:

    *No painel do Mapa, com ícones correspondentes aos locais de pausa;*
    Nos Relatórios de Supervisão.





## Posto

<p>
No contexto do aplicativo 4Sup, o posto é o ponto central da supervisão, servindo como referência para o registro de presença, execução de checklists, controle de escalas e registro de ocorrências.
</p>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/HDyvJjMb/posto1.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Exibe as informações cadastrais e operacionais do posto de trabalho
  </figcaption>
</figure>

<p>
Esta tela reúne os principais dados de identificação e localização do posto, permitindo ao supervisor consultar rapidamente as informações necessárias para o acompanhamento da supervisão. Nela é possível visualizar o endereço completo, o carácter da agenda, o turno, a situação e o horário de check-in e check-out
</p>

## Escalas

<p>
No contexto do 4Sup, escala é o planejamento que define a alocação de funcionários aos postos de trabalho em dias, turnos e horários específicos
</p>
<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/HDyvJjMb/posto1.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Permite ao supervisor visualizar os funcionários escalados para o posto em um dia, turno ou período específico, garantindo o controle da equipe presente no local.
  </figcaption>
</figure>
<p>
A tela de Escalas permite ao supervisor consultar a relação de funcionários designados para o posto em determinado filtro de tempo. Nessa visualização, são exibidas as informações de nome, horário e situação de cada colaborador, possibilitando a identificação de substituições, faltas ou remanejamentos realizados pela 
</p>

<p>
Quando habilitada a opção “Visualizar escalas de outros postos” nas configurações da empresa, o supervisor pode estender a consulta para além do posto em execução, permitindo uma visão mais ampla da distribuição de pessoal nas demais unidades sob sua responsabilidade.
</p>



-**Lançamento de Faltas** 

<p>
A funcionalidade Lançamento de Faltas permite ao supervisor registrar ausências de funcionários diretamente no aplicativo durante a execução da supervisão.
</p>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/yF2f1QmK/15.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong>
  </figcaption>
</figure>

<p>
O primeiro campo -Selecionar- lista todas as ocorrências de faltas disponíveis para caracterizar uma ocorrência de falta.
</p>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/svJS2XdY/18.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong>
  </figcaption>
</figure>

<p>
O supervisor deve  informar a data da falta, bem como a quantidade de dias correspondentes. Caso haja um substituto designado para cobrir o período de ausência, seu nome pode ser informado no campo específico por meio da função de pesquisa.<br>

Adicionalmente, é possível registrar observações detalhadas sobre o ocorrido, como o motivo da ausência. Quando aplicável, podem ser informados também dados de condução e valores relacionados à substituição.<br>

Todas as informações são transmitidas ao portal durante a sincronização, permitindo que a base administrativa acompanhe em tempo real as ausências e substituições realizadas.<br>
</p>


<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/6Rz2zBwQ/16.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong>
  </figcaption>
</figure>

## Patrimônios:


<p> A funcionalidade Patrimônios apresenta a relação de bens e equipamentos alocados no posto, permitindo ao supervisor realizar conferências e registrar ocorrências relacionadas a cada item. Essa tela tem como objetivo garantir o controle patrimonial e a rastreabilidade dos recursos disponibilizados para a operação.<br><br>
O supervisor pode verificar o estado geral de cada patrimônio e, em caso de irregularidades, registrar ocorrências específicas, como situações de furto, roubo, extravio, dano ou substituição. O lançamento é feito diretamente pelo aplicativo, por meio do ícone de ação disponível ao lado de cada item listado [Botão verde com figura de livro em branco].
</p>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/d4PrHDkN/17.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Lista de patrimônios pertencentes ao posto
  </figcaption>
</figure>

<p>
O supervisor pode registrar ocorrências relacionadas a um patrimônio específico, como casos de furto, roubo, dano, extravio ou qualquer outra situação que altere o estado do bem. O lançamento é realizado diretamente na tela, por meio da seleção do item correspondente e inclusão da descrição do evento.
</p>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/2VP37Hn/19.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Lançamento de ocorrência de roubo ao patrimônio.
  </figcaption>
</figure>

<p>
O aplicativo permite o anexo de imagens à ocorrência, servindo como comprovação visual do fato constatado. As fotos anexadas são vinculadas automaticamente ao patrimônio e enviadas ao portal junto com a ocorrência.
</p>


<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/jkx4rKNm/20.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Anexo de imagem a ocorrencia de roubo ao patrimonio.
  </figcaption>
</figure>

## Checklists:

<p>
A funcionalidade Checklists permite ao supervisor preencher listas de verificação associadas à 
supervisão.
</p>

<p>
Cada checklist é configurado previamente pela base no GesOper e vinculado ao tipo de posto correspondente.<br>
<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/sd0Z4jDS/23.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> As checklists : CheckList - Operacional e SHOPPING CATUAI já foram cadastradas pelo gestor do supervisor. Basta um toque para iniciar o processo de supervisão dos itens cadastrados.
  </figcaption>
</figure>

Durante a execução da supervisão, o supervisor deve responder aos itens definidos para o posto, classificando cada um conforme sua condição.<br><br>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/6c92hJfT/21.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Itens da checklist Shopping CATUAI
  </figcaption>
</figure>

Cada item pode conter observações adicionais, permitindo ao supervisor descrever situações específicas identificadas durante a vistoria, bem como anexar imagens, vídeos ou áudios diretamente pelo aplicativo, a fim de registrar evidências do ocorrido.<br>

O ícone de câmera disponível abaixo item permite anexar imagens ao checklist, possibilitando o registro visual das condições observadas durante a supervisão. 



<br>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/wNSsmFGX/25.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong>
  </figcaption>
</figure>

O preenchimento completo dos checklists não é obrigatório para a finalização da agenda; no entanto, o sistema emite uma crítica caso o encerramento seja tentado com itens pendentes, alertando o supervisor sobre o preenchimento incompleto.<br><br>

As respostas são transmitidas automaticamente ao portal no momento em que a supervisão é sincronizada, garantindo que os registros fiquem disponíveis para consulta e análise na base administrativa.<br><br>
</p>

## Funcionários:

<p> A funcionalidade Funcionários apresenta uma visão detalhada dos colaboradores alocados no posto vinculado à agenda em execução, permitindo ao supervisor realizar conferências sobre a equipe em campo. Nessa tela, é possível consultar dados como nome, função e situação atual de cada funcionário.<br><br> 

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/bRgf0QRV/func1.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Visão dos colaboradores alocados no posto em tempo real.
  </figcaption>
</figure>

O toque na tela do celular no campo de cada funcionário abre uma janela com informações adicionais:

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/YBZC5Sfk/func2.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Visão do colaborador alocado no posto em tempo real.
  </figcaption>
</figure>


O acesso a essa funcionalidade é restrito aos funcionários vinculados à rota do supervisor logado, assegurando a integridade dos dados.

</p>

## Ocorrência:

<p>
A funcionalidade Ocorrências permite ao supervisor registrar eventos observados durante a supervisão que possam impactar o funcionamento do posto ou a conformidade das operações. Esses registros são utilizados para documentar situações identificadas em campo, possibilitando que a base operacional acompanhe e adote as medidas corretivas necessárias.
</p>
<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/PswDMpt9/oco1.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Lista de ocorrências do posto com filtro de tempo “Hoje”.
  </figcaption>
</figure>
<p>
Durante a visita, o supervisor pode criar novas ocorrências diretamente no aplicativo, descrevendo de forma objetiva o evento constatado, como falhas estruturais, ausência de recursos, problemas de limpeza, comportamento inadequado de funcionários ou qualquer outro fato relevante. O registro pode incluir observações complementares e anexação de imagens que sirvam como evidência do ocorrido. Basta tocar no icone '+' para gerar uma nova ocorrencia no posto.
</p>
<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/tMdSh7Xf/oco4.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Adicao de uma nova ocorrencia ao posto.
  </figcaption>
</figure>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/ZRMcGm2h/oco5.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Preenchimento completo de uma ocorrencia pelo supervisor.
  </figcaption>
</figure>

<p>
As ocorrências cadastradas ficam vinculadas ao posto supervisionado, garantindo a rastreabilidade e o histórico completo das ações realizadas. Ao tocar sobre uma ocorrência na tela, é possível visualizar o seu conteúdo detalhado, incluindo informações registradas, observações e eventuais anexos adicionados pelo supervisor.
</p>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/m5ZKLwpK/oco3.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Vizualização completo de uma ocorrencia já gerada pelo supervisor.
  </figcaption>
</figure>

<p>
Também é possível vincular imagens a uma ocorrência. Essa opção é exibida logo após a finalização do preenchimento, juntamente com a mensagem de confirmação “Ocorrência inserida com sucesso”.
</p>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/W4T3rkYk/oco6.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> 
  </figcaption>
</figure>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/Z6hngP2X/oco7.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> 
  </figcaption>
</figure>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/VbRQ9Ys/oco8.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> 
  </figcaption>
</figure>

<p>É possível anexar múltiplas imagens a uma ocorrência, com limite máximo de oito arquivos por registro. O supervisor também pode editar as imagens anexadas, substituindo-as por versões atualizadas, ou excluí-las quando necessário, mantendo apenas os arquivos relevantes ao evento registrado.
</p>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/gL2xXtxw/oco9.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> 
  </figcaption>
</figure>

<p>
As ocorrências registradas no posto também podem ser visualizadas por outros supervisores que possuam as permissões de visualização correspondentes, conforme as regras definidas nas configurações da empresa.
</p>

## SACS:

<p>
A funcionalidade SAC tem como objetivo registrar solicitações, reclamações ou comunicados transmitidos por representantes do cliente durante o processo de supervisão. Essa ferramenta permite documentar formalmente qualquer demanda recebida em campo.
</p>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/qYFZ9K7X/sac1.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Aba 'SAC'.
  </figcaption>
</figure>

<p>
Durante a visita, o supervisor pode incluir um novo registro de SAC diretamente pelo aplicativo, descrevendo de maneira clara o conteúdo da solicitação ou da reclamação relatada. Caso necessário, podem ser adicionadas observações complementares e imagens que auxiliem na contextualização do ocorrido. Cada registro de SAC é automaticamente vinculado à agenda ativa e ao posto correspondente, permitindo o rastreamento completo da comunicação entre cliente e base operacional.
</p>

<figure markdown>
 <p align="center">
    <img src="https://i.ibb.co/4RJzfKHH/sac2.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Exemplo completo do preenchimento de um SAC através do supervisor em local.
  </figcaption>
</figure>

<figure markdown>
  <p align="center">
    <img src="https://i.ibb.co/vvhxgZVp/sac4.png" Posto" width="400">
  </p>
  <figcaption align="center">
    <strong>Figura 4:</strong> Exemplo completo do preenchimento de um SAC através do supervisor em local.
  </figcaption>
</figure>
<p>
Essa integração garante que as demandas do cliente sejam acompanhadas de forma centralizada, com histórico de registros, prazos e respostas.
</p>

## Vagas:
<p>
Essa ferramenta é utilizada para comunicar à base operacional a necessidade de substituição, contratação ou preenchimento de vagas decorrentes de desligamentos.
Durante a execução da agenda, o supervisor pode abrir um novo registro de vaga, informando o motivo da abertura, o cargo desejado e quaisquer observações pertinentes. Também é possível registrar o preenchimento de uma vaga, vinculando o colaborador aprovado por meio do módulo SelFun.
</p>

