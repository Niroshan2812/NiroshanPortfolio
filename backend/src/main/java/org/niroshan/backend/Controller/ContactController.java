package org.niroshan.backend.Controller;

import org.niroshan.backend.Searvice.EmailSearvice;
import org.niroshan.backend.dto.ContactFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/contact")
@CrossOrigin (origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private EmailSearvice emailSearvice;

    @PostMapping
    public String sendContactEmail(@RequestBody ContactFormDTO contactFormDTO) {
        String subject = "new Contact form submission";
        String body = "Name" + contactFormDTO.getName() + "\n" +
                      "Email"+ contactFormDTO.getEmail()+"\n" +
                      "Message"+ contactFormDTO.getMessage();
        emailSearvice.sendEmail("niroshan9812@gmail.com", subject, body);
        return "Email sent";
    }
}
