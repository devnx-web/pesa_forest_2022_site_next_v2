import css from './politica.module.css'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from 'reactstrap';


export default function Politica(){
    return(
        <div>
            <div className={css.bg}>
            <Container>
                <div className={css.titulo}>
                    POLÍTICA DE PRIVACIDADE - PARNÁ EQUIPAMENTOS S/A
                </div>
                <div className={css.texto}>
                A PESA tem regras rígidas sobre à Política de Privacidade com o objetivo de estabelecer regras de uso, armazenamento e tratamento dos dados e informações dos nossos clientes e usuários coletadas nos sites de nosso dompinio seguindo todas as normas da legislação em vigor.
Todas as empresas pertencentes à PESA se comprometem com a proteção e privacidade dos dados, garantindo todos os direitos dos seus usuários. Consideramos dados pessoais as informações relacionadas a pessoa identificada ou identificável, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, eliminação, avaliação, controle da informação, modificação, comunicação, transferência, difusão e extração. Por isso, ao navegar aos sites da PESA ou ao inserir seus dados pessoais, você está consentindo e conferindo a sua livre concordância com os termos aqui informados.
As normas aqui pré-estabelecidas poderão ser alteradas conforme mudanças na legislação, por isso fique sempre atento à Política de Privacidade.
                </div>

                <div className={css.titulo}>
                    <br/>Política de Cookies
                </div>
                <div className={css.texto}>
                Os cookies são utilizados nos sites da PESA para otimizar os websites e para analisar o tráfego. Cookies são uma parte essencial de como nossos websites funcionam. O principal propósito de nossos Cookies é melhorar a experiência de pesquisa. Esses dados são usados para certificarmos de que estamos enviando para você as informações que deseja receber e ler. Poderemos coletar e registrar, também, informações sobre o que você viu no website, ajudando-nos em nossas interações com você.
                </div>

                <div className={css.titulo}>
                <br/>Compartilhamento de Dados
                </div>
                <div className={css.texto}>
                A PESA não divulga ou compartilha nenhum dado pessoal que identifique diretamente o usuário, sem seu consentimento prévio, exceto nos casos em que a divulgação seja necessária para o cumprimento de obrigações legais, por ordem de autoridades judicial ou administrativa, para exercer um direito legal ou com o intuito de atingir uma das finalidades indicadas nesta Política de Privacidade.
Os dados pessoais podem ser processados por empresas pertencentes à PESA. Caso os dados sejam compartilhados com entidades localizadas fora do Brasil, garantimos que o compartilhamento siga todas as formas exigidas pela legislação aplicável, mantendo assim a proteção aos dados pessoais do usuário.
                </div>

                <div className={css.titulo}>
                    <br/>Direitos Concedidos
                </div>
                <div className={css.texto}>
                Os direitos a seguir, entre outros, são concedidos aos usuários dos sites da PESA:
Direito ao acesso de obter uma confirmações se os dados estão sendo processados, e em caso positivo, de ter acesso aos mesmos;
Direito a correções de dados incompletos, inexatos ou desatualizados, alternado ou editando os dados pessoais fornecidos;
O direito de obter informações sobre eventual compartilhamento dos dados pessoais nos termos do estabelecido nesta Política de Privacidade;
Direito a solicitar a exclusão total ou parcial dos dados. No entanto, alguns dados pessoais não poderão ser excluídos devido às questões legais, como as que se referem a obrigações de retenção. Nesses casos, manteremos nosso compromisso de sigilo e de proteção dos dados que precisarem ser mantidos.
                </div>

                <div className={css.titulo}>
                   <br/> Como nós protegemos seus dados
                </div>
                <div className={css.texto}>
                A PESA valoriza muito a sua privacidade, por isso implementamos todas as medidas técnicas e organizacionais necessárias com o intuito de proteger seus dados, mais especificamente, prevenir qualquer roubo, perda ou uso de qualquer maneira que não está em conformidade com os propósitos pelos quais os dados foram coletados.
                </div>

                <div className={css.titulo}>
                  <br/>  Como você pode nos contatar
                </div>
                <div className={css.texto}>
                Se você tem qualquer pergunta relacionada a esta política, quer saber mais sobre como nós processamos seus dados pessoais ou ainda deseja solicitar acesso, alteração ou exclusão de dados, você pode nos contatar através do e-mail: <Link href='mailto:marketing@pesa.com.br'><a className={css.link}> marketing@pesa.com.br</a></Link>.
                </div>
            </Container>
            </div>
        </div>
    )
}
