import React, {ElementRef} from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container/Container";
import {S} from './contact_Styles';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';





export const Contact = () => {
    const form = useRef<ElementRef<'form'>>(null);// создал привязку через ref
    const sendEmail = (e:any) => {
        e.preventDefault();
        if (!form.current) return
        emailjs
            .sendForm('service_09yd3x7', 'template_12byd3j', form.current, {
                publicKey: '3BhlXpgZa4sFx0kr0',
            })
            .then(
                () => {
                    alert('Email sent!');
                },
                (error) => {
                    alert('Email not sent!');
                },
            );
    };



    return (
        <S.ContactStyled id={'contact'}>
            <SectionTitle>Contact</SectionTitle>
            <Container>
                <S.FormStyled ref={form}  onSubmit={sendEmail}>
                    <S.Field placeholder={'Userame'} name={'user_name'}/>
                    <S.Field placeholder={'e-mail'} name={'eMail'}/>
                    <S.Field  as={'textarea'} name={'message'} placeholder={'Message'}/>
                    <Button type={'submit'}>Send Message</Button>

                </S.FormStyled>
            </Container>



        </S.ContactStyled>
    );
};