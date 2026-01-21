Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas.

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.


Cenário triste:
O usuário acessa pagina de cadastro.
Clica direto em cadastrar sem preencher nada.

Resultados esperados:
Aparece mensagens de erro orientando o usuário a preencher os campos corrretamente.


Cenário:
Login no sistema com sucesso

Passos:
 o usuario acessa pagina de login
 o usuario insere o email corretamente
 o usuario clica em botao "Entrar"

 Resultdados esperados: 
 O sistema autentica as credenciais
 o sistema redireciona  o usuario para a pagina /home