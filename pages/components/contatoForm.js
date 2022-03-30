
import React, { useState } from 'react'
import css from "./contactForm.module.scss"
import { toast, ToastContainer } from 'react-nextjs-toast'
import { Input } from "reactstrap";
import { Select } from "reactstrap";
import {Container, Row, Col} from 'reactstrap';


const ContactForm = () => {
    const [form, setForm] = useState({
        email: "", message: "", name: ""
    });

    async function formSubmit() {
        if (form.email === '' || form.message === '' || form.name === '') {
            return toast.notify('Preencha todos os campos', {
                title: "Preencha os Campos",
                type: "error"
            });
        }
        // const { data: addForm } = await api.post('form_forest_contato_site', form);
        // if (addForm.success) {
        //     toast.notify(addForm.success, {
        //         title: "Sucesso",
        //         type: "success"
        //     });

        //     setForm({ email: "", message: "", name: "" })
        // }
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
                                    <label className={css.label}>SELECIONAR MODELO</label>
                                    <select className={css.inputform}>
                                        <option className={css.selectoption} value="1">PTH 18</option>
                                        <option className={css.selectoption} value="1">PTL 20</option>
                                        <option className={css.selectoption} value="1">PTH 20</option>
                                        <option className={css.selectoption} value="1">4F GT</option>
                                        <option className={css.selectoption} value="1">5F GT</option>
                                        <option className={css.selectoption} value="1">5FP GT</option>
                                        <option className={css.selectoption} value="1">5HP GT</option>
                                        <option className={css.selectoption} value="1">6F GT</option>
                                        <option className={css.selectoption} value="1">6HP GT</option>
                                        <option className={css.selectoption} value="1">6HP GTE</option>
                                        <option className={css.selectoption} value="1">8F GT</option>
                                        <option className={css.selectoption} value="1">8H GT</option>
                                        <option className={css.selectoption} value="1">8H GTE BLACK</option>
                                        <option className={css.selectoption} value="1">10F GT</option>
                                        <option className={css.selectoption} value="1">12H GTE HYBRID</option>
                                        <option className={css.selectoption} value="1">TH 45</option>
                                        <option className={css.selectoption} value="1">TH 55</option>
                                        <option className={css.selectoption} value="1">TH 65</option>
                                        <option className={css.selectoption} value="1">TH 65 EUCA</option>
                                        <option className={css.selectoption} value="1">TH 75</option>
                                        <option className={css.selectoption} value="1">TH 85</option>
                                        <option className={css.selectoption} value="1">TH 9S5</option>
                                        <option className={css.selectoption} value="1">B 457</option>
                                        <option className={css.selectoption} value="1">B 570</option>
                                        <option className={css.selectoption} value="1">B 670</option>
                                        <option className={css.selectoption} value="1">B 670A</option>
                                        <option className={css.selectoption} value="1">B 757</option>
                                        <option className={css.selectoption} value="1">B 758</option>
                                        <option className={css.selectoption} value="1">H 157</option>
                                        <option className={css.selectoption} value="1">H 457</option>
                                        <option className={css.selectoption} value="1">H 458</option>
                                        <option className={css.selectoption} value="1">S 250</option>
                                        <option className={css.selectoption} value="1">S 350</option>
                                        <option className={css.selectoption} value="1">S 450</option>
                                        <option className={css.selectoption} value="1">S 550</option>
                                        <option className={css.selectoption} value="1">M 860</option>
                                        <option className={css.selectoption} value="1">F 848</option>
                                        <option className={css.selectoption} value="1">18 C</option>
                                        <option className={css.selectoption} value="1">22 C</option>
                                        <option className={css.selectoption} value="1">22 SC</option>
                                        <option className={css.selectoption} value="1">24 C</option>
                                        <option className={css.selectoption} value="1">5000 D</option>
                                        <option className={css.selectoption} value="1">6000 V</option>
                                        <option className={css.selectoption} value="1">7000 C</option>
                                        <option className={css.selectoption} value="1">7000 XT</option>
                                        <option className={css.selectoption} value="1">E6</option>
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
