import css from '../pages/home/maqpth18.module.css'
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';


export default function Detalhesmaquinamobile(){
    const [tab, setTab] = useState('RESUMO')
    return(
        <div>
            <div>
                <Row>
                    <Col>
                        <div>
                            <h3 className={css.ttdetalhes}>DETALHES DAS MÁQUINA</h3>
                            <div>
                                <p className={css.textconh}>
                                    Conheça um pouco mais sobre a máquina PTH 18, para mais informações entre em contato
                                </p>
                            </div>

                                    <div onClick={() => setTab('RESUMO')} className={tab === 'RESUMO' ? css.botaodetalhes : css.botaodetalhes2}>
                                        RESUMO
                                    </div>
                                    <div onClick={() => setTab('FICHA')} className={tab === 'FICHA' ? css.botaodetalhes : css.botaodetalhes2}>
                                        FICHA TÉCNICA
                                    </div>
                                    <div onClick={() => setTab('ITENSST')} className={tab === 'ITENSST' ? css.botaodetalhes : css.botaodetalhes2}>
                                        ITENS STANDARD
                                    </div>
                                    <div onClick={() => setTab('ITENSOP')} className={tab === 'ITENSOP' ? css.botaodetalhes : css.botaodetalhes2}>
                                        ITENS OPCIONAIS
                                    </div>
                                    <div onClick={() => setTab('DISP')} className={tab === 'DISP' ? css.botaodetalhes : css.botaodetalhes2}>
                                        DISPONIBILIDADE DE PEÇAS
                                    </div>
                                    <div onClick={() => setTab('COMP')} className={tab === 'COMP' ? css.botaodetalhes : css.botaodetalhes2}>
                                        COMPARTILHAMENTO OPERADOR
                                    </div>
                            <div className={css.card}>
                                {tab === 'RESUMO' &&
                                <div>
                                    <p className={css.textocard}>A PTH-18 reúne toda a tecnologia que você procura em uma escavadeira para o trabalho florestal. O motor à diesel C4.4 ACERT CAT® oferece o equilíbrio perfeito entre durabilidade, eficiência de combustível e baixas emissões. São amplamente testados em serviço, usam uma variedade de sistemas de combustível de Trilho Comum e sistemas de controle avançados para oferecer máximo de tempo de atividade nos ambientes mais difíceis. Além disso, o motor C4.4 é capaz de enfrentar as aplicações mais severas e proporcionar um desempenho superior.</p>
                                </div>
                                }
                                {tab === 'FICHA' &&
                                <div>
                                    <p className={css.textocard}>Modelo Motor: C4.4 ACERT™
                                        Lança: 5100mm – Braço: 2900mm
                                        Extensão: 830mm
                                        Alcance máximo: 8,4m
                                        Peso operacional: 18.000 kg</p>
                                </div>
                                }
                                {tab === 'ITENSST' &&
                                <div>
                                    <p className={css.textocard}>Sapatas com garreamento duplo e elevadas para maior tração;
                                        Motor C4.4 eletrônico, mais força operacional;
                                        Cilindros e reparos;
                                        Lança e Braço projetado para a função correta, operação Harvester;
                                        Proteção superior cabine para segurança operador;
                                        Cabine com para-brisa de Policarbonato 1/2”compacto MR10 (anti risco e proteção UV 2 lados – transparência de mais de 80%) para maior visibilidade e segurança;
                                        Dog House para proteção da máquina;
                                        Side walk para proteção lateral da máquina com caixa de ferramenta;
                                        Sistema de filtro com telas nas portas do compartimento do radiador, bomba hidráulica e capô do compartimento do motor (Malha Grossa);
                                        Linhas hidráulicas Lança e Braço TOTALMENTE protegidas;
                                        Protetor de Rolete;
                                        Protetor de Swivel;
                                        Modificação do truck – Mancalização roletes para uma maior estabilidade da esteira;
                                        Kit Faróis;
                                        Kit proteções inferiores reforçadas (#1/4″).</p>
                                </div>
                                }
                                {tab === 'ITENSOP' &&
                                <div>
                                    <p className={css.textocard}>Telas de Proteção Portas e Capô;
                                        Preparação elétrica Harvester (faróis Led);
                                        Proteção de Cabine Reforçada com toldo de Chapa;
                                        Proteção Cilindros BOOM (Peito de Aço);
                                        Proteção Bocal de Enchimento;
                                        Proteção frontal de chassis e caixa de Ferramenta;
                                        Proteção Pé Lança;
                                        Linhas de Graxa para a Lança e Braço;
                                        Kit Policarbonato anti-abrasão (MR10) Completo (Frente 1/2” e Laterais de 1/4”);
                                        Dog House Reforçado;
                                        Tanque Diesel Adicional (233 Lts);
                                        Caixa de extintor reforçada;
                                        Kit Auto abastecimento Diesel.</p>
                                </div>
                                }
                                {tab === 'DISP' &&
                                <div>
                                    <p className={css.textocard}>Os Cilindros Cat® são endurecidos por indução e soldados por inércia. A força superior resultante e a resistência do equipamento oferecem uma vida útil do componente mais longa e um risco reduzido de contaminação do sistema. Os cilindros hidráulicos e as hastes Cat foram projetados para uma grande variedade de opções de serviço e reparo.

                                        CILINDROS HIDRÁULICOS E HASTES
                                        O recurso dos Cilindros Cat apresentam um sistema de vedação inovador que absorve os picos de pressão, resiste ao carregamento lateral e protege contra a entrada de contaminantes melhor do que os projetos da concorrência.</p>
                                </div>
                                }
                                {tab === 'COMP' &&
                                <div>
                                    <p className={css.textocard}>COMPARTIMENTO DO OPERADOR
                                        O Compartimento do operador projetado
                                        ergonomicamente
                                        é espaçoso, silencioso e confortável, garantindo alta
                                        produtividade durante um longo dia de trabalho. Todos
                                        os interruptores se encontram no console do lado direito
                                        para fácil acesso.

                                        MONITOR
                                        O monitor é um Monitor de Cristal Líquido (LCD, Liquid
                                        Crystal Display) em cores que pode ser ajustado para
                                        minimizar o brilho do sol e com capacidade para exibir
                                        informações em 27 idiomas.

                                        CONTROLE DE JOYSTICK
                                        Os controles de joystick de baixo esforço operados por
                                        piloto são projetados para ser compatíveis com a posição
                                        natural do pulso e do braço do operador para máximo
                                        conforto e mínimo de fadiga.

                                        ASSENTO
                                        O assento com suspensão padrão fornece uma variedade
                                        de ajustes para corresponder ao tamanho e peso do
                                        operador
                                        incluindo o ajuste longitudinal, de altura e peso. Apoios de
                                        braço amplos e ajustáveis e um cinto de segurança
                                        também
                                        estão incluídos.

                                        CONSOLE
                                        Os consoles têm um projeto funcional para
                                        reduzir a fadiga do operador, facilitar a operação dos
                                        interruptores e garantir excelente visibilidade. Eles têm
                                        apoios de braço e ajustes de inclinação.

                                        PARTE EXTERNA DA CABINA
                                        O revestimento da cabina apresenta uma tubulação
                                        espessa
                                        de aço ao longo do perímetro inferior da cabina,
                                        melhorando
                                        a resistência a fadiga e vibração.

                                        SUPORTES DA CABINA
                                        O revestimento da cabina é preso à armação com suportes
                                        de borracha viscosa, que amortecem as vibrações e o nível
                                        de ruído e dão mais conforto ao operador.

                                        JANELAS
                                        Para maximizar a visibilidade, todos os vidros são fixados
                                        diretamente na cabina, eliminando o uso de armações de
                                        janelas. O para-brisa dianteiro superior abre, fecha e é
                                        armazenado no teto acima do operador com um sistema
                                        de liberação de acionamento por um toque.

                                        LIMPADORES DE PARA-BRISA.
                                        Instalados na coluna, os limpadores de para-brisa aumentam
                                        a área de visão do operador e oferecem os modos contínuo
                                        e intermitente.</p>
                                </div>
                                }

                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
