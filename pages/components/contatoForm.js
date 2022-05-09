
import React, { useState } from 'react'
import css from "./contactForm.module.scss"
import { toast, ToastContainer } from 'react-nextjs-toast'
import { Input } from "reactstrap";
import { Select } from "reactstrap";
import {Container, Row, Col} from 'reactstrap';
import axios from 'axios'


const ContactForm = () => {
    const [form, setForm] = useState({
        email: "", message: "", name: "", model: "", idEmpresa:4, pagina:"form_forest_contato_site",segment: '',telefone:''
    });
    const api = axios.create({
        baseURL: 'https://phpstack-423803-1938873.cloudwaysapps.com/api/integracao/json_pp/'
    });

    async function formSubmit() {
        if (form.email === '' || form.message === '' || form.name === '') {
            return toast.notify('Preencha todos os campos', {
                title: "Preencha os Campos",
                type: "error"
            });
        }
         const { data: addForm } = await api.post('form_forest_contato_site', form);
         if (addForm.success) {
             toast.notify(addForm.success, {
                 title: "Sucesso",
                 type: "success"
             });

             setForm({ email: "", message: "", name: "", model: "" })
         }
    }

    return (
        <>
        <Container fluid>
            <ToastContainer />
            <Row>
                <Col>
            <div className={css.formwidth} >
                <div>
                    <div>
                        <label className={css.label}>NOME</label></div>
                    <Input
                        value={form.name}
                        onChange={(val) => setForm({
                            ...form,
                            name: val.target.value
                        })}
                        className={css.inputform} type="text" placeholder="Digite seu nome..." />
                </div>
                <div>
                    <div><label className={css.label}>E-MAIL</label></div>
                    <Input
                        value={form.email}
                        onChange={(val) => setForm({
                            ...form,
                            email: val.target.value
                        })}
                        className={css.inputform} type="text" placeholder="Digite seu e-mail..." />
                </div>

                <div>
                    <div><label className={css.label}>TELEFONE</label></div>
                    <Input
                        value={form.telefone}
                        onChange={(val) => setForm({
                            ...form,
                            telefone: val.target.value
                        })}
                        className={css.inputform} type="number" placeholder="Digite seu telefone..." />
                </div>

                <div>
                                    <label className={css.label}>SELECIONAR MODELO</label>
                                    <select className={css.inputform} value={form.segment} onChange={(event => { setForm({ ...form, model: event.target.value }) })}>
                                        <option className={css.selectoption} value="PTH 18">PTH 18</option>
                                        <option className={css.selectoption} value="PTL 20">PTL 20</option>
                                        <option className={css.selectoption} value="PTH 20">PTH 20</option>
                                        <option className={css.selectoption} value="4F GT">4F GT</option>
                                        <option className={css.selectoption} value="5F GT">5F GT</option>
                                        <option className={css.selectoption} value="5FP GT">5FP GT</option>
                                        <option className={css.selectoption} value="5HP GT">5HP GT</option>
                                        <option className={css.selectoption} value="6F GT">6F GT</option>
                                        <option className={css.selectoption} value="6HP GT">6HP GT</option>
                                        <option className={css.selectoption} value="6HP GT">6HP GTE</option>
                                        <option className={css.selectoption} value="8F GT">8F GT</option>
                                        <option className={css.selectoption} value="8H GT">8H GT</option>
                                        <option className={css.selectoption} value="8H GTE BLACK">8H GTE BLACK</option>
                                        <option className={css.selectoption} value="10F GT">10F GT</option>
                                        <option className={css.selectoption} value="12H GTE HYBRID">12H GTE HYBRID</option>
                                        <option className={css.selectoption} value="TH 45">TH 45</option>
                                        <option className={css.selectoption} value="TH 55">TH 55</option>
                                        <option className={css.selectoption} value="TH 65">TH 65</option>
                                        <option className={css.selectoption} value="TH 65 EUCA">TH 65 EUCA</option>
                                        <option className={css.selectoption} value="TH 75">TH 75</option>
                                        <option className={css.selectoption} value="TH 85">TH 85</option>
                                        <option className={css.selectoption} value="TH 9S5">TH 9S5</option>
                                        <option className={css.selectoption} value="B 457">B 457</option>
                                        <option className={css.selectoption} value="B 570">B 570</option>
                                        <option className={css.selectoption} value="B 670">B 670</option>
                                        <option className={css.selectoption} value="B 670A">B 670A</option>
                                        <option className={css.selectoption} value="B 757">B 757</option>
                                        <option className={css.selectoption} value="B 758">B 758</option>
                                        <option className={css.selectoption} value="H 157">H 157</option>
                                        <option className={css.selectoption} value="H 457">H 457</option>
                                        <option className={css.selectoption} value="H 458">H 458</option>
                                        <option className={css.selectoption} value="S 250">S 250</option>
                                        <option className={css.selectoption} value="S 350">S 350</option>
                                        <option className={css.selectoption} value="S 450">S 450</option>
                                        <option className={css.selectoption} value="S 550">S 550</option>
                                        <option className={css.selectoption} value="M 860">M 860</option>
                                        <option className={css.selectoption} value="F 848">F 848</option>
                                        <option className={css.selectoption} value="18 C">18 C</option>
                                        <option className={css.selectoption} value="22 C">22 C</option>
                                        <option className={css.selectoption} value="22 SC">22 SC</option>
                                        <option className={css.selectoption} value="24 C">24 C</option>
                                        <option className={css.selectoption} value="5000 D">5000 D</option>
                                        <option className={css.selectoption} value="6000 V">6000 V</option>
                                        <option className={css.selectoption} value="7000 C">7000 C</option>
                                        <option className={css.selectoption} value="7000 XT">7000 XT</option>
                                        <option className={css.selectoption} value="E6">E6</option>
                                    </select>
                                </div>

                <div>
                    <div><label className={css.label}>MENSAGEM</label></div>
                    <Input
                        value={form.message}
                        onChange={(val) => setForm({
                            ...form,
                            message: val.target.value
                        })}
                        className={css.inputform}
                        type="textarea"
                        rows={4}
                        placeholder="Digite sua mensagem..." />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <p
                        className={css.textcheckbox}>
                        *De acordo com as Leis 12.965/2014 e 13.709/2018, que regulam o uso da Internet e o tratamento de dados pessoais no Brasil, autorizo PESA CAT a enviar notificações de meu interesse por e-mail ou outros meios.
                    </p>
                </div>
                <div
                    onClick={formSubmit}
                    className={css.botaomensagem}>
                    ENVIAR MENSAGEM
                </div>
            </div>
            </Col>
            </Row>
            </Container>
        </>
    )
}
export default ContactForm