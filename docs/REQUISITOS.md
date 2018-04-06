## Teste para recutramento de Front-end

### Caso de uso

Como um fotógrafo, eu quero montar uma lâmina de um álbum. Para isto, preciso arrastar para a lâmina as fotos disponíveis na página. Para cada foto adicionada à lâmina, um layout deve ser renderizado para aquela quantidade de fotos.

Sendo um  fotógrafo supernerd, eu posso escrever uma definição de layout para minha lâmina.

### Estrutura da interface
* textarea para inserir a definição do layout
* fotos disponibilizadas
* lâmina

### Estão disponíveis para você:
* Definições de layouts como exemplo: `docs/layouts.txt`
* Lâminas renderizadas com os layouts dados, para referência: `docs/laminas.pdf`
* Algumas fotos para serem usadas nas lâminas `docs/images/*.jpg`

### Detalhes
* os dados do textarea e as fotos no layout devem ser persistidos entre reloads de página
* caso o layout no textarea não seja compatível com a quantidade de fotos na lâmina ou não possa ser renderizado por alguma inconsistência na definição, você deve renderizar um layout padrão, por exemplo: [[1,2,3]]
* a mesma foto pode ser adicionada várias vezes à lâmina
* é esperado que as regras de renderização sejam interpretadas por você a partir dos exemplos nos arquivos disponibilizados

### Glossário
* Lâmina: retângulo branco de 80hw de largura x 40hw de altura. é nela que as fotos são colocadas e renderizadas de acordo com a definição de layout.
