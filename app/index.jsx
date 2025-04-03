import styled from "styled-components/native";
import Title from "../components/Titulo/titulo";
import { useEffect, useState } from "react";
import InputTexto from "@/components/Input/input";
import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [email, setEmail] = useState("example@example.com");
  const [hasEmailError, setHasEmailError] = useState(false);
  const [senha, setSenha] = useState("@Example123");
  const [hasSenhaError, setHasSenhaError] = useState(false);
  const [isSenhaVisible, setIsSenhaVisible] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setHasEmailError(!emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    setHasSenhaError(!passwordRegex.test(senha));
  }, [senha]);

  return (
    <Tela>
      <Title texto={"Entrar"} flag={true} />
      <Title texto={"Bem vindo ao app"} flag={false} />
      <ContainerCampoTexto>
        <View>
          <InputTexto
            erro={hasEmailError}
            placeholder="Digite seu email..."
            onChangeText={(text) => setEmail(text)}
          />
          {hasEmailError ? <TextErrorHint>E-mail inválido</TextErrorHint> : null}
        </View>

        <View>
          <SenhaContainer>
            <InputTexto
              erro={hasSenhaError}
              placeholder="Digite sua senha..."
              secureTextEntry={!isSenhaVisible}
              onChangeText={(text) => setSenha(text)}
            />
            <Pressable onPress={() => setIsSenhaVisible(!isSenhaVisible)}>
              <Ionicons
                name={isSenhaVisible ? "eye-off" : "eye"}
                size={24}
                color="black"
              />
            </Pressable>
          </SenhaContainer>
          {hasSenhaError ? <TextErrorHint>Senha inválida</TextErrorHint> : null}
        </View>
      </ContainerCampoTexto>
      <ContainerBotoes>
        <Botao onPress={() => console.log("Cliking here")}> 
          <TextoBotao>Entrar</TextoBotao>
        </Botao>
        <Links>Cadastre-se</Links>
        <Links>Esqueci a senha</Links>
      </ContainerBotoes>
    </Tela>
  );
}

const Tela = styled.View`
  flex: 1;
  background-color: #312969;
  padding: 26px;
`;

const ContainerCampoTexto = styled.View`
  gap: 25px;
`;

const ContainerBotoes = styled.View`
  margin-top: 65px;
  gap: 20px;
`;

const Botao = styled.Pressable`
  background-color: #2193F3;
  padding: 20px;
  border-radius: 6px;
`;

const TextoBotao = styled.Text`
  text-align: center;
  font-size: 24px;
  color: #fff;
`;

const Links = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 16px;
`;

const TextErrorHint = styled.Text`
  font-size: 16px;
  color: #E63946;
`;

const SenhaContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 6px;
  padding: 10px;
  background-color: #fff;
  justify-content: space-between;
`;


