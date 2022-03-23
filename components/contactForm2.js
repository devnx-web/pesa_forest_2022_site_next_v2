import { Col, Container, Input, Row } from "reactstrap";
import React, { useState } from "react";
import css from './formulario.module.css'

const ContactForm2 = () => {
    const segmentos = [
        { id: 1, text: 'Agricultura' },
        { id: 2, text: 'Mineração' },
        { id: 3, text: 'Construção' },
        { id: 4, text: 'Terraplanagem' },
        { id: 5, text: 'Pedreiras e agregados' },
        { id: 6, text: 'Serviços' },
        { id: 7, text: 'Pavimentação' },
    ];
    const [form, setForm] = useState({
        email: "", message: "", name: "", segment: ''
    });

    function Segment() {
        return (
            <select className={css.inputform} value={form.segment} onChange={(event => { setForm({ ...form, segment: event.target.value }) })}>
                <option value="Agricultura" className={css.selectoption}> Agricultura </option>
                <option value="Mineracao" className={css.selectoption}> Mineração </option>
                <option value="Construcao" className={css.selectoption}> Construção </option>
                <option value="Terraplanagem" className={css.selectoption}> Terraplanagem </option>
                <option value="Pedreiras e agregados" className={css.selectoption}> Pedreiras e agregados </option>
                <option value="Servicos" className={css.selectoption}> Serviços </option>
                <option value="Pavimentacao" className={css.selectoption}> Pavimentação </option>
            </select>
        )
    }
    // async function formSubmit() {
    //     if(form.email === ''||form.message === ''||form.name === '') {
    //         return  toast.notify('Preencha todos os campos', {
    //             title: "Preencha os Campos",
    //             type: "error"
    //         });
    //     }
    //     const {data: addForm } = await api.post('form_forest_contato_site', form);
    //     if (addForm.success) {
    //         toast.notify(addForm.success, {
    //             title: "Sucesso",
    //             type: "success"
    //         });
    //
    //         setForm({ email: "", message: "", name: "",segment: "" })
    //     }
    // }

    return (

        <div className={css.bgbanner}>
            <Container>
                {/*<ToastContainer />*/}
                <div>
                    <h3 className={css.subtt}>PREENCHA O FORMULÁRIO</h3>
                    <h3 className={css.titulofale}>FALE COM A PESA FOREST</h3>
                    <div className={css.border}></div>
                </div>
                <div>
                    <Row>
                        <Col md="4">
                            <div className={css.cardform}>
                                <div>
                                    <h4 className={css.tituloform}>FALE COM A GENTE!</h4>
                                </div>
                                <div>
                                    <div>
                                        <label className={css.nomelabel}>NOME</label>
                                    </div>
                                    <input
                                        value={form.name}
                                        onChange={(val) => setForm({
                                            ...form,
                                            name: val.target.value
                                        })} className={css.inputform}
                                        type="text"
                                        placeholder="Ex: Matheus Sartori" />
                                </div>
                                <div>
                                    <div>
                                        <label className={css.nomelabel}>E-MAIL</label>
                                    </div>
                                    <input

                                        value={form.email}
                                        onChange={(val) => setForm({
                                            ...form,
                                            email: val.target.value
                                        })}
                                        className={css.inputform} type="text" placeholder="Ex: matheus@gmail.com" />
                                </div>
                                <div>
                                    <div>
                                        <label className={css.nomelabel}>MENSAGEM</label>
                                    </div>
                                    <Input
                                        value={form.message}
                                        onChange={(val) => setForm({
                                            ...form,
                                            message: val.target.value
                                        })}
                                        className={css.inputform} type="textarea" placeholder="Ex: Olá" />
                                </div>
                                <div>
                                    <label className={css.nomelabel}>SEGMENTOS</label>
                                    <Segment />
                                </div>
                                <div className={css.align}>
                                    <div>
                                        <p className={css.textocheck}>
                                        *De acordo com as Leis 12.965/2014 e 13.709/2018, que regulam o uso da Internet e o tratamento de dados pessoais no Brasil, autorizo PESA CAT a enviar notificações de meu interesse por e-mail ou outros meios.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={css.botaoform}>
                                        <span>ENVIAR MENSAGEM</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <iframe className={css.videoform} width="100%" height="540" src="https://www.youtube.com/embed/VpDZUTQLiWI"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
};

export default ContactForm2
