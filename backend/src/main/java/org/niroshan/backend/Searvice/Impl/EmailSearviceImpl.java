package org.niroshan.backend.Searvice.Impl;

import org.niroshan.backend.Searvice.EmailSearvice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSearviceImpl implements EmailSearvice {
   @Autowired
    private JavaMailSender mailSender;

    @Override
    public void sendEmail(String to, String object, String Body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(object);
        message.setText(Body);
        mailSender.send(message);
    }
}
