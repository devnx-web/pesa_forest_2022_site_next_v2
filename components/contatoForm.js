
import React, { useState } from 'react'
import css from "./contactForm.module.scss"
import { toast, ToastContainer } from 'react-nextjs-toast'
import axios from 'axios'

import { Input, Container } from "reactstrap";

const ContactForm = () => {
     const [form, setForm] = useState({
         email: "", message: "", name: ""
     });
     const api = axios.create({
         baseURL: 'https://phpstack-423803-1938873.cloudwaysapps.com/api/integracao/json_pp/'
     });
    
     async function formSubmit() {
         if(form.email === ''||form.message === ''||form.name === '') {
            return  toast.notify('Preencha todos os campos', {
                 title: "Preencha os Campos",
                 type: "error"
             });
         }
         const {data: addForm } = await api.post('form_forest_contato_site', form);
         if (addForm.success) {
             toast.notify(addForm.success, {
                 title: "Sucesso",
                 type: "success"
             });
    
             setForm({ email: "", message: "", name: "" })
         }
     }

    return (
        <>
            <ToastContainer />
            <div style={{ paddingLeft: 200, paddingRight: 200, paddingBottom: 50 }}>
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
                        Ao enviar, voc?? aceita em receber novidades e promo????es da PESA CAT
                    </p>
                </div>
                <div onClick={formSubmit} className={css.botaomensagem}>
                    ENVIAR MENSAGEM
                </div>
            </div>
        </>
    )
}
export default ContactForm
