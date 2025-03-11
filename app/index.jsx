import { 
    View, 
    Text, 
    TextInput,
    Pressable,
    StyleSheet } from "react-native"

    import styled from "styled-components/native";

    export default function App() {
        return (
            <Tela>
                <Titulo>Entrar</Titulo>
                <ContainerCampoTexto>
                    <CampoTexto
                        placeholder="Digite seu e-mail..."
                        placeholderTextColor="#6C757D"
                        keyboardType="email-address"
                    />
                    <CampoTexto
                        placeholder="Digite sua senha..."
                        placeholderTextColor="#6C757D"
                        secureTextEntry
                    />
                </ContainerCampoTexto>
                <ConteinerBotoes>
                    <Botao onPress={() => alert("Login efetuado!")}>
                        <TextoBotao>Entrar</TextoBotao>
                    </Botao>
                    <Link>Cadastre-se</Link>
                    <Link>Esqueci a senha</Link>
                </ConteinerBotoes>
            </Tela>
        );
    }
    
    // **Estilos com Styled Components**
    const Tela = styled.View`
        flex: 1;
        background-color: #000000;
        padding: 26px;
        justify-content: center;
        align-items: center;
    `;
    
    const Titulo = styled.Text`
        font-size: 50px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 50px;
    `;
    
    const ContainerCampoTexto = styled.View`
        width: 100%;
        gap: 20px;
    `;
    
    const CampoTexto = styled.TextInput`
        background-color: #ffffff;
        font-size: 18px;
        padding: 15px;
        width: 100%;
    `;
    
    const ConteinerBotoes = styled.View`
        margin-top: 40px;
        align-items: center;
        gap: 15px;
    `;
    
    const Botao = styled.Pressable`
        background-color: #b6a4ef;
        padding: 15px;
        width: 100%;
        
    `;
    
    const TextoBotao = styled.Text`
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #000;
    `;
    
    const Link = styled.Text`
        color: #ffffff;
        font-size: 16px;
        text-decoration: underline;
    `;