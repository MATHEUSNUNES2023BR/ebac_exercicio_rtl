import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Testando inserção de dois comentários', ()=>{
        render(<PostComment/>);
        //Capturando atributos dos elementos
        const textareaElement = screen.getByTestId('my-textarea');
        const button = screen.getByTestId('my-button')

        //Comentário 1
        //Inserindo texto e depois clicando no botão para inserir elemento
        fireEvent.change(textareaElement, { target: { value: 'Verificando comentário 1' } })
        fireEvent.click(button)
        //Buscando elemento inserido por texto
        let textoSelecionado = screen.getByText('Verificando comentário 1')
        expect(textoSelecionado).toHaveTextContent('Verificando comentário 1');

        
        //Comentário 2
        //Inserindo texto e depois clicando no botão para inserir o elemento
        fireEvent.change(textareaElement, { target: { value: 'Verificando comentário 2' } })
        fireEvent.click(button)
        //Buscando elemento inserido por texto
        textoSelecionado = screen.getByText('Verificando comentário 2')
        //Verificando se o texto inserido existe no novo elemento renderizado
        expect(textoSelecionado).toHaveTextContent('Verificando comentário 2');
        
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug()
    })
});